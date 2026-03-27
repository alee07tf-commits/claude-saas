-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: Add subdomain_slug column for serving landings via middleware
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ─────────────────────────────────────────────────────────────────────────────

-- Add the new column (nullable, unique)
ALTER TABLE public.landing_pages
  ADD COLUMN IF NOT EXISTS subdomain_slug TEXT UNIQUE;

-- Backfill existing published landings: extract slug from the stored subdomain URL
-- e.g. "https://mi-sitio-abc123.landforge.digital" → "mi-sitio-abc123"
UPDATE public.landing_pages
SET subdomain_slug = regexp_replace(
  regexp_replace(subdomain, '^https?://', ''),
  '\.landforge\.digital.*$', ''
)
WHERE subdomain IS NOT NULL
  AND subdomain_slug IS NULL
  AND subdomain LIKE '%landforge.digital%';

-- Create index for fast lookups by slug
CREATE INDEX IF NOT EXISTS idx_landing_pages_subdomain_slug
  ON public.landing_pages (subdomain_slug)
  WHERE subdomain_slug IS NOT NULL;
