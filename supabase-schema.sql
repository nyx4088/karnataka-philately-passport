-- StampQuest Supabase schema — run once in the Supabase SQL editor
-- Tables: profiles, progress, friend_links | Storage bucket: quest-photos

-- 1. Profiles: one row per user, unique friend code
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  friend_code text unique not null,
  display_name text not null default 'Collector',
  created_at timestamptz default now()
);

-- 2. Progress: visited office numbers per user (single row, updated on sync)
create table if not exists progress (
  user_id uuid primary key references profiles(id) on delete cascade,
  visited int[] not null default '{}',
  updated_at timestamptz default now()
);

-- 3. Friend links: mutual follow via friend codes
create table if not exists friend_links (
  user_id uuid references profiles(id) on delete cascade,
  friend_id uuid references profiles(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, friend_id),
  check (user_id != friend_id)
);

-- 4. Photo storage bucket (public read, authenticated write of own folder)
insert into storage.buckets (id, name, public)
values ('quest-photos', 'quest-photos', true)
on conflict (id) do nothing;

-- 5. Enable RLS everywhere
alter table profiles enable row level security;
alter table progress enable row level security;
alter table friend_links enable row level security;

-- 6. RLS policies
-- profiles: anyone can read (leaderboard needs it), users write only their own
create policy "profiles readable by all" on profiles
  for select using (true);
create policy "users manage own profile" on profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

-- progress: anyone can read (leaderboard + friend view), users write only their own
create policy "progress readable by all" on progress
  for select using (true);
create policy "users manage own progress" on progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- friend_links: users read/write only their own links
create policy "users manage own friend links" on friend_links
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- storage: public read, users write only under their own uid folder
create policy "photos publicly readable" on storage.objects
  for select using (bucket_id = 'quest-photos');
create policy "users upload own photos" on storage.objects
  for insert with check (
    bucket_id = 'quest-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
create policy "users delete own photos" on storage.objects
  for delete using (
    bucket_id = 'quest-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- 7. Leaderboard view: ranked by stamps collected
create or replace view leaderboard as
select
  p.id,
  p.friend_code,
  p.display_name,
  coalesce(cardinality(pr.visited), 0) as stamps,
  pr.updated_at
from profiles p
left join progress pr on pr.user_id = p.id
order by stamps desc, pr.updated_at asc;

-- 8. Helper: generate a short unique friend code
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
