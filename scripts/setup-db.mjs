/**
 * LandForge — One-time DB setup script
 *
 * Usage:
 *   1. Get personal access token from: https://supabase.com/dashboard/account/tokens
 *   2. Add to .env.local:  SUPABASE_ACCESS_TOKEN=sbp_...
 *   3. Run:  node scripts/setup-db.mjs
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ── Load .env.local ──────────────────────────────────────────────────────────
const envPath = resolve(__dirname, '../.env.local')
const envVars = {}
try {
  const envContent = readFileSync(envPath, 'utf8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '')
    envVars[key] = val
  }
} catch {
  console.error('✗ Could not read .env.local')
  process.exit(1)
}

const TOKEN = process.env.SUPABASE_ACCESS_TOKEN || envVars['SUPABASE_ACCESS_TOKEN']
const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL']

if (!TOKEN) {
  console.error(`
✗ Missing SUPABASE_ACCESS_TOKEN

  1. Go to: https://supabase.com/dashboard/account/tokens
  2. Click "Generate new token"
  3. Add to .env.local:  SUPABASE_ACCESS_TOKEN=sbp_...
  4. Run again: node scripts/setup-db.mjs
`)
  process.exit(1)
}

if (!SUPABASE_URL) {
  console.error('✗ Missing NEXT_PUBLIC_SUPABASE_URL in .env.local')
  process.exit(1)
}

// Extract project ref from URL: https://XXXX.supabase.co
const projectRef = new URL(SUPABASE_URL).hostname.split('.')[0]
console.log(`✓ Project ref: ${projectRef}`)

// ── SQL statements (split for individual execution) ──────────────────────────
const statements = [
  `CREATE TABLE IF NOT EXISTS public.landing_pages (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at    TIMESTAMPTZ NOT NULL    DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL    DEFAULT NOW(),
    business_name TEXT,
    survey_data   JSONB,
    html_content  TEXT,
    status        TEXT        NOT NULL    DEFAULT 'draft',
    subdomain     TEXT        UNIQUE,
    custom_domain TEXT,
    metadata      JSONB
  )`,

  `CREATE OR REPLACE FUNCTION public.set_updated_at()
  RETURNS TRIGGER AS $$
  BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
  END;
  $$ LANGUAGE plpgsql`,

  `DO $$ BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_trigger WHERE tgname = 'trg_landing_pages_updated_at'
    ) THEN
      CREATE TRIGGER trg_landing_pages_updated_at
        BEFORE UPDATE ON public.landing_pages
        FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
    END IF;
  END $$`,

  `ALTER TABLE public.landing_pages ENABLE ROW LEVEL SECURITY`,

  `DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'anon_insert' AND tablename = 'landing_pages') THEN
      CREATE POLICY "anon_insert" ON public.landing_pages FOR INSERT TO anon WITH CHECK (true);
    END IF;
  END $$`,

  `DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'anon_select' AND tablename = 'landing_pages') THEN
      CREATE POLICY "anon_select" ON public.landing_pages FOR SELECT TO anon USING (true);
    END IF;
  END $$`,

  `DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'anon_update' AND tablename = 'landing_pages') THEN
      CREATE POLICY "anon_update" ON public.landing_pages FOR UPDATE TO anon USING (true) WITH CHECK (true);
    END IF;
  END $$`,

  `DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert' AND tablename = 'landing_pages') THEN
      CREATE POLICY "auth_insert" ON public.landing_pages FOR INSERT TO authenticated WITH CHECK (true);
    END IF;
  END $$`,

  `DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_select' AND tablename = 'landing_pages') THEN
      CREATE POLICY "auth_select" ON public.landing_pages FOR SELECT TO authenticated USING (true);
    END IF;
  END $$`,

  `DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update' AND tablename = 'landing_pages') THEN
      CREATE POLICY "auth_update" ON public.landing_pages FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
    END IF;
  END $$`,

  `DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete' AND tablename = 'landing_pages') THEN
      CREATE POLICY "auth_delete" ON public.landing_pages FOR DELETE TO authenticated USING (true);
    END IF;
  END $$`,
]

const MGMT_URL = `https://api.supabase.com/v1/projects/${projectRef}/database/query`

async function runSQL(sql, label) {
  const res = await fetch(MGMT_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: sql }),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error(`  ✗ ${label}: ${text}`)
    return false
  }
  console.log(`  ✓ ${label}`)
  return true
}

console.log('\nCreando tabla landing_pages en Supabase...\n')

const labels = [
  'CREATE TABLE landing_pages',
  'CREATE FUNCTION set_updated_at',
  'CREATE TRIGGER updated_at',
  'ENABLE ROW LEVEL SECURITY',
  'POLICY anon_insert',
  'POLICY anon_select',
  'POLICY anon_update',
  'POLICY auth_insert',
  'POLICY auth_select',
  'POLICY auth_update',
  'POLICY auth_delete',
]

let allOk = true
for (let i = 0; i < statements.length; i++) {
  const ok = await runSQL(statements[i], labels[i])
  if (!ok) allOk = false
}

console.log(allOk
  ? '\n✓ Base de datos lista. Recarga el dashboard.\n'
  : '\n⚠ Algunos pasos fallaron. Revisa los errores arriba.\n'
)
