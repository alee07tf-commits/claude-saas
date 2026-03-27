import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { buildForgiWidget } from '@/lib/forgi-widget'
import { checkFeatureAccess } from '@/lib/limits'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ domain: string }> },
) {
  const { domain } = await params

  if (!domain) {
    return new NextResponse('Not found', { status: 404 })
  }

  const BASE_DOMAIN = process.env.LANDFORGE_DOMAIN || 'landforge.digital'

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )

  // Look up landing by custom_domain
  const { data: landing } = await supabase
    .from('landing_pages')
    .select('id, html_content, business_name, status, user_id')
    .eq('custom_domain', domain)
    .eq('status', 'published')
    .single()

  if (!landing?.html_content) {
    return new NextResponse(
      `<html><body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#FAFAFA"><div style="text-align:center"><h1 style="color:#9D4EDD">LandForge</h1><p style="color:#6B7280">Esta página no existe o no está publicada.</p><a href="https://${BASE_DOMAIN}" style="color:#9D4EDD">Ir a LandForge</a></div></body></html>`,
      { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
    )
  }

  let html = landing.html_content
  if (!html.includes('data-forgi-widget')) {
    const appUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${BASE_DOMAIN}`
    let whiteLabel = false
    if (landing.user_id) {
      const wlAccess = await checkFeatureAccess(landing.user_id, 'white_label')
      whiteLabel = wlAccess.allowed
    }
    const widget = buildForgiWidget(landing.id, appUrl, landing.business_name || 'Empresa', whiteLabel)
    html = html.replace(/<\/body>/i, `${widget}\n</body>`)
  }

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  })
}
