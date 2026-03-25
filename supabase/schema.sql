-- ─────────────────────────────────────────────────────────────────────────────
-- LandForge — landing_pages table
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.landing_pages (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ NOT NULL    DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL    DEFAULT NOW(),
  business_name TEXT,
  survey_data   JSONB,
  html_content  TEXT,
  status        TEXT        NOT NULL    DEFAULT 'draft',     -- draft | published | archived
  subdomain     TEXT        UNIQUE,                          -- nombre.landforge.io
  custom_domain TEXT,
  metadata      JSONB
);

-- ── Auto-update updated_at on row change ──────────────────────────────────────
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_landing_pages_updated_at
  BEFORE UPDATE ON public.landing_pages
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ── Row Level Security ────────────────────────────────────────────────────────
-- RLS is ON but with open anon policies for the MVP (no auth yet).
-- When auth is added, replace these policies with user-scoped ones.

ALTER TABLE public.landing_pages ENABLE ROW LEVEL SECURITY;

-- anon (API routes that use service/anon key)
CREATE POLICY "anon_insert" ON public.landing_pages
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select" ON public.landing_pages
  FOR SELECT TO anon USING (true);

CREATE POLICY "anon_update" ON public.landing_pages
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- authenticated (logged-in users via browser session)
CREATE POLICY "auth_insert" ON public.landing_pages
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "auth_select" ON public.landing_pages
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "auth_update" ON public.landing_pages
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_delete" ON public.landing_pages
  FOR DELETE TO authenticated USING (true);
