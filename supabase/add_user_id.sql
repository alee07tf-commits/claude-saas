-- ─────────────────────────────────────────────────────────────────────────────
-- LandForge — Add user_id to landing_pages + update RLS for auth
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ─────────────────────────────────────────────────────────────────────────────

-- 1. Add user_id column (nullable for backward compat with existing landings)
ALTER TABLE public.landing_pages
  ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- 2. Index for fast filtering per user
CREATE INDEX IF NOT EXISTS landing_pages_user_id_idx ON public.landing_pages(user_id);

-- 3. Drop old open policies (anon + auth open)
DROP POLICY IF EXISTS "anon_insert"  ON public.landing_pages;
DROP POLICY IF EXISTS "anon_select"  ON public.landing_pages;
DROP POLICY IF EXISTS "anon_update"  ON public.landing_pages;
DROP POLICY IF EXISTS "auth_insert"  ON public.landing_pages;
DROP POLICY IF EXISTS "auth_select"  ON public.landing_pages;
DROP POLICY IF EXISTS "auth_update"  ON public.landing_pages;
DROP POLICY IF EXISTS "auth_delete"  ON public.landing_pages;

-- 4. New user-scoped RLS policies
-- SELECT: see own landings + old ones without user_id (backward compat)
CREATE POLICY "users_select_own" ON public.landing_pages
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR user_id IS NULL);

-- INSERT: must set user_id = own uid
CREATE POLICY "users_insert_own" ON public.landing_pages
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: only own landings
CREATE POLICY "users_update_own" ON public.landing_pages
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: only own landings
CREATE POLICY "users_delete_own" ON public.landing_pages
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Allow anonymous/public access to published landings
-- (needed for forgi-chat widget called by landing visitors without a session)
CREATE POLICY "anon_select_published" ON public.landing_pages
  FOR SELECT TO anon
  USING (status = 'published');
