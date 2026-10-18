-- Qust Wrapped weekly leagues: add per-stamp dates to progress
-- Run this in Supabase SQL editor before weekly leagues activate
alter table progress add column if not exists visited_dates jsonb not null default '}';
