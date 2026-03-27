import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

const BASE_DOMAIN = process.env.LANDFORGE_DOMAIN || 'landforge.digital'

export async function POST(req: NextRequest) {
  const body = await req.json() as { landingId?: string; html?: string; businessName?: string }
  const { landingId, html: htmlFromClient, businessName: bizNameFromClient } = body

  if (!landingId) {
    return NextResponse.json({ error: 'landingId requerido' }, { status: 400 })
  }

  const supabase = await createClient()

  // ── 1. Load landing from Supabase ───────────────────────────────────────
  const { data: landing } = await supabase
    .from('landing_pages')
    .select('id, html_content, business_name, subdomain, status')
    .eq('id', landingId)
    .single()

  if (!landing) {
    return NextResponse.json({ error: 'Landing no encontrada' }, { status: 404 })
  }

  const rawHtml = htmlFromClient || landing.html_content
  if (!rawHtml) {
    return NextResponse.json({ error: 'No se encontró el HTML de la landing. Regenera la página.' }, { status: 404 })
  }

  // ── 2. Generate subdomain URL (reuse existing if it's a proper one) ─────
  let url = landing.subdomain

  // Check if existing subdomain is already a proper landforge.digital URL
  const isProperSubdomain = url && url.includes(`.${BASE_DOMAIN}`)

  if (!isProperSubdomain) {
    const bizName = bizNameFromClient || landing.business_name || 'site'
    const slug = bizName
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 30)

    const shortId = landingId.replace(/-/g, '').slice(0, 6)
    url = `https://${slug}-${shortId}.${BASE_DOMAIN}`
  }

  // ── 3. Update DB: set as published with subdomain ───────────────────────
  const updateData: Record<string, unknown> = {
    status: 'published',
    subdomain: url,
  }

  // Also save latest HTML if provided from client
  if (htmlFromClient) {
    updateData.html_content = htmlFromClient
  }

  const { error } = await supabase
    .from('landing_pages')
    .update(updateData)
    .eq('id', landingId)

  if (error) {
    console.error('[Deploy] DB update error:', error)
    return NextResponse.json({ error: 'Error al guardar. Intenta de nuevo.' }, { status: 500 })
  }

  return NextResponse.json({ url })
}
