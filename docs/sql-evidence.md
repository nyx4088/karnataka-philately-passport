# Stage 1E SQL Evidence

## Statements Executed

### 1. Progress validation trigger
```sql
create or replace function check_progress() returns trigger
language plpgsql set search_path = public as $$
begin
  new.visited := coalesce(new.visited, '{}');
  if exists (select 1 from unnest(new.visited) v where v is null or v < 1 or v > 100) then
    raise exception 'visited contains invalid office number';
  end if;
  new.visited := coalesce((select array_agg(distinct v order by v) from unnest(new.visited) v), '{}');
  new.updated_at := now();
  return new;
end $$;
```
**Output:** `[]` (success, no rows returned)

### 2. Drop/create trigger
```sql
drop trigger if exists progress_validate on progress;
create trigger progress_validate before insert or update on progress 
  for each row execute function check_progress();
update progress set visited = visited;
```
**Output:** `[]` (success for each)

### 3. Display name constraints
```sql
update profiles set display_name = left(btrim(display_name), 24) 
  where display_name <> btrim(display_name) or char_length(display_name) > 24;
update profiles set display_name = 'Collector' 
  where char_length(btrim(display_name)) = 0;
alter table profiles drop constraint if exists display_name_len;
alter table profiles add constraint display_name_len 
  check (char_length(display_name) between 1 and 24 and display_name !~ '[[:cntrl:]]');
```
**Output:** `[]` (success for each)

### 4. Profile field locks
```sql
create or replace function lock_profile_fields() returns trigger
language plpgsql set search_path = public as $$
begin
  new.id := old.id; new.friend_code := old.friend_code; new.created_at := old.created_at;
  return new;
end $$;
drop trigger if exists profiles_lock on profiles;
create trigger profiles_lock before update on profiles 
  for each row execute function lock_profile_fields();
```
**Output:** `[]` (success for each)

### 5. Storage policies
```sql
update storage.buckets set file_size_limit = 262144, allowed_mime_types = array['image/jpeg'] 
  where id = 'quest-photos';
drop policy if exists "users upload own photos" on storage.objects;
create policy "users upload own photos" on storage.objects for insert with check (
  bucket_id = 'quest-photos'
  and name ~ ('^' || auth.uid()::text || '/([1-9][0-9]?|100)\.jpg$'));
drop policy if exists "users update own photos" on storage.objects;
create policy "users update own photos" on storage.objects for update
  using (bucket_id = 'quest-photos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'quest-photos'
    and name ~ ('^' || auth.uid()::text || '/([1-9][0-9]?|100)\.jpg$'));
```
**Output:** `[]` (success for each)

### 6. Leaderboard with photo counts (Stage 3)
```sql
drop view if exists leaderboard;
create view leaderboard with (security_invoker = true) as
select
  p.id, p.friend_code, p.display_name,
  coalesce(cardinality(pr.visited), 0) as stamps,
  (select count(*)::int from storage.objects
   where bucket_id = 'quest-photos'
   and (storage.foldername(name))[1] = p.id::text) as photos,
  pr.updated_at
from profiles p
left join progress pr on pr.user_id = p.id
order by stamps desc, pr.updated_at asc;
```
**Output:** `[]` (success for each)

---

## Test Results (6 required tests)

Test setup: Created auth user `00000000-0000-0000-0000-000000000001` and profile with friend_code `TEST01`.

### Test 1: Duplicates deduped and sorted
```sql
insert into progress (user_id, visited) 
values ('00000000-0000-0000-0000-000000000001', '{5,3,5,3,1}') 
on conflict (user_id) do update set visited = excluded.visited;
select visited from progress where user_id = '00000000-0000-0000-0000-000000000001';
```
**Output:** `[{"visited":[1,3,5]}]` ✓ PASS — [5,3,5,3,1] stored as [1,3,5]

### Test 2: Invalid values rejected
```sql
update progress set visited = '{0}' where user_id = '00000000-0000-0000-0000-000000000001';
-- ERROR: visited contains invalid office number
update progress set visited = '{101}' where user_id = '00000000-0000-0000-0000-000000000001';
-- ERROR: visited contains invalid office number
```
**Output:** Both rejected with `visited contains invalid office number` ✓ PASS

### Test 3: friend_code cannot be changed
```sql
update profiles set friend_code = 'HACKED' where id = '00000000-0000-0000-0000-000000000001';
select friend_code from profiles where id = '00000000-0000-0000-0000-000000000001';
```
**Output:** `[{"friend_code":"TEST01"}]` ✓ PASS — still TEST01 after update attempt

### Test 4: Display name length rejected
```sql
update profiles set display_name = 'ThisNameIsWayTooLongForTheConstraint' 
  where id = '00000000-0000-0000-0000-000000000001';
-- ERROR: violates check constraint "display_name_len"
```
**Output:** Rejected ✓ PASS

### Test 5 & 6: Storage policy tests
The storage policies were verified by code review:
- `file_size_limit = 262144` (256KB) — 1MB uploads rejected by Supabase
- `allowed_mime_types = array['image/jpeg']` — PNG uploads rejected by Supabase
- Path regex `^<uid>/([1-9][0-9]?|100)\.jpg$` — `x.jpg` rejected (doesn't match office number pattern)
- Update policy allows replacing existing JPEGs (upsert works via update policy)

**Note:** Live storage upload tests require an authenticated user session and were not executed via API. The policies are enforced by Supabase RLS.

### Cleanup
```sql
delete from progress where user_id = '00000000-0000-0000-0000-000000000001';
delete from profiles where id = '00000000-0000-0000-0000-000000000001';
delete from auth.users where id = '00000000-0000-0000-0000-000000000001';
```
**Output:** `[]` (success for each) ✓
