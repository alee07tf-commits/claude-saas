-- ─────────────────────────────────────────────────────────────────────────────
-- LandForge — chatbot_knowledge table
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.chatbot_knowledge (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  landing_page_id  UUID        NOT NULL REFERENCES public.landing_pages(id) ON DELETE CASCADE,
  content_type     TEXT        NOT NULL DEFAULT 'text',  -- 'text' | 'file'
  title            TEXT,
  content_text     TEXT,
  file_url         TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for fast lookup by landing
CREATE INDEX IF NOT EXISTS idx_chatbot_knowledge_landing
  ON public.chatbot_knowledge(landing_page_id);

-- ── Row Level Security ──────────────────────────────────────────────────────
ALTER TABLE public.chatbot_knowledge ENABLE ROW LEVEL SECURITY;

-- Authenticated users can manage knowledge items
CREATE POLICY "auth_select" ON public.chatbot_knowledge
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "auth_insert" ON public.chatbot_knowledge
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "auth_delete" ON public.chatbot_knowledge
  FOR DELETE TO authenticated USING (true);

-- Anon can read (for the chatbot API which uses anon key via server client)
CREATE POLICY "anon_select" ON public.chatbot_knowledge
  FOR SELECT TO anon USING (true);
