-- StampQuest Supabase schema — run once in the Supabase SQL editor
-- Tables: profiles, progress, friend_links | Storage bucket: quest-photos
-- Stage 1E hardening applied: validation triggers, field locks, storage policies

-- 1. Profiles: one row per user, unique friend code
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  friend_code text unique not null,
  display_name text not null default 'Collector',
  created_at timestamptz default now(),
  constraint display_name_len check (char_length(display_name) between 1 and 24 and display_name !~ '[[:cntrl:]]')
);

-- 2. Progress: visited office numbers per user (single row, updated on sync)
create table if not exists progress (
  user_id uuid primary key references profiles(id) on delete cascade,
  visited int[] not null default '{}',
  updated_at timestamptz default now()
);

-- 3. Friend links: follow via friend codes
create table if not exists friend_links (
  user_id uuid references profiles(id) on delete cascade,
  friend_id uuid references profiles(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, friend_id),
  check (user_id != friend_id)
);

-- 4. Photo storage bucket (public read, authenticated write of own folder)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('quest-photos', 'quest-photos', true, 262144, array['image/jpeg'])
on conflict (id) do update set file_size_limit = 262144, allowed_mime_types = array['image/jpeg'];

-- 5. Enable RLS everywhere
alter table profiles enable row level security;
alter table progress enable row level security;
alter table friend_links enable row level security;

-- 6. RLS policies
create policy "profiles readable by all" on profiles for select using (true);
create policy "users manage own profile" on profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "progress readable by all" on progress for select using (true);
create policy "users manage own progress" on progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage own friend links" on friend_links for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "photos publicly readable" on storage.objects for select using (bucket_id = 'quest-photos');
create policy "users upload own photos" on storage.objects for insert with check (
  bucket_id = 'quest-photos'
  and name ~ ('^' || auth.uid()::text || '/([1-9][0-9]?|100)\.jpg$'));
create policy "users update own photos" on storage.objects for update
  using (bucket_id = 'quest-photos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'quest-photos'
    and name ~ ('^' || auth.uid()::text || '/([1-9][0-9]?|100)\.jpg$'));
create policy "users delete own photos" on storage.objects for delete using (
  bucket_id = 'quest-photos' and (storage.foldername(name))[1] = auth.uid()::text);

-- 7. Validation triggers
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
drop trigger if exists progress_validate on progress;
create trigger progress_validate before insert or update on progress
  for each row execute function check_progress();

create or replace function lock_profile_fields() returns trigger
language plpgsql set search_path = public as $$
begin
  new.id := old.id; new.friend_code := old.friend_code; new.created_at := old.created_at;
  return new;
end $$;
drop trigger if exists profiles_lock on profiles;
create trigger profiles_lock before update on profiles
  for each row execute function lock_profile_fields();

-- 8. Leaderboard view: ranked by stamps, photo count for transparency
-- Leaderboard: stamps are self-reported; photos column shows opt-in shared photo count
-- FULLY OPT-IN (2026-10-17): only collectors who JOINED and UPLOADED appear.
-- A profile with no progress row (joined but never uploaded, or never joined)
-- is excluded via the inner join below.
-- >>> AFTER EDITING: re-run this section (8) in the Supabase SQL editor so the
-- >>> live view picks it up. Do NOT run blindly — snapshot/back up first.
drop view if exists leaderboard;
create view leaderboard with (security_invoker = true) as
select
  p.id,
  p.friend_code,
  p.display_name,
  coalesce(cardinality(pr.visited), 0) as stamps,
  (select count(*)::int from storage.objects
   where bucket_id = 'quest-photos'
   and (storage.foldername(name))[1] = p.id::text) as photos,
  pr.updated_at
from profiles p
join progress pr on pr.user_id = p.id
order by stamps desc, pr.updated_at asc;

-- 9. Helper: generate a short unique friend code
create or replace function gen_friend_code() returns text as $$
declare code text;
begin
  loop
    code := upper(substring(md5(random()::text) from 1 for 6));
    exit when not exists (select 1 from profiles where friend_code = code);
  end loop;
  return code;
end;
$$ language plpgsql;
