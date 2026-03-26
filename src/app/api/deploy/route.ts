import { createClient } from '@/lib/supabase/server'
import { buildForgiWidget } from '@/lib/forgi-widget'
import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

const VERCEL_TOKEN            = process.env.VERCEL_TOKEN
const VERCEL_TEAM_ID          = process.env.VERCEL_TEAM_ID     // optional (personal account = empty)
const VERCEL_SITES_PROJECT_ID = process.env.VERCEL_SITES_PROJECT_ID
const BASE_DOMAIN             = process.env.LANDFORGE_DOMAIN || 'landforge.io'
const APP_URL                 = process.env.APP_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL : (process.env.VERCEL_URL ? 'https://'+process.env.VERCEL_URL : 'http://localhost:3000'))

function vercelFetch(path: string, options: RequestInit = {}, extraQs: Record<string, string> = {}) {
  const params: Record<string, string> = { ...extraQs }
  if (VERCEL_TEAM_ID) params.teamId = VERCEL_TEAM_ID
  const qs  = Object.keys(params).length ? '?' + new URLSearchParams(params).toString() : ''
  const url = `https://api.vercel.com${path}${qs}`
  return fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
      ...(options.headers ?? {}),
    },
  })
}

export async function POST(req: NextRequest) {
  if (!VERCEL_TOKEN || !VERCEL_SITES_PROJECT_ID) {
    return NextResponse.json(
      { error: 'VERCEL_TOKEN / VERCEL_SITES_PROJECT_ID no configurados en .env.local' },
      { status: 500 },
    )
  }

  const body = await req.json() as { landingId?: string; html?: string; businessName?: string }
  const { landingId, html: htmlFromClient, businessName: bizNameFromClient } = body

  if (!landingId && !htmlFromClient) {
    return NextResponse.json({ error: 'landingId o html requerido' }, { status: 400 })
  }

  // ── 1. Load landing from Supabase (with client HTML fallback) ─────────────
  const supabase = await createClient()

  let rawHtml     = htmlFromClient || ''
  let bizName     = bizNameFromClient || 'Empresa'
  let subdomain: string | null = null
  let existingMeta: Record<string, unknown> = {}

  if (landingId && landingId !== 'preview') {
    const { data: landing } = await supabase
      .from('landing_pages')
      .select('id, html_content, business_name, subdomain, survey_data, metadata')
      .eq('id', landingId)
      .single()

    if (landing?.html_content) {
      rawHtml   = landing.html_content
      bizName   = landing.business_name || bizName
      subdomain = landing.subdomain as string | null
    }
    existingMeta = (landing?.metadata as Record<string, unknown> | null) ?? {}
    // If Supabase lookup failed but client sent HTML, use that (rawHtml already set above)
  }

  if (!rawHtml) {
    return NextResponse.json({ error: 'No se encontró el HTML de la landing. Regenera la página.' }, { status: 404 })
  }

  // Inject Forgi Chatbot widget before </body>
  const effectiveId = (landingId && landingId !== 'preview') ? landingId : 'standalone'
  const widget = buildForgiWidget(effectiveId, APP_URL, bizName)
  const html = rawHtml.includes('data-forgi-widget')
    ? rawHtml
    : rawHtml.replace(/<\/body>/i, `${widget}\n</body>`)
  const sha  = createHash('sha1').update(html).digest('hex')
  const size = Buffer.byteLength(html, 'utf8')

  // ── 2. Upload file to Vercel ──────────────────────────────────────────────
  const uploadRes = await vercelFetch('/v2/files', {
    method: 'POST',
    headers: {
      'Content-Type':    'text/html',
      'x-vercel-digest': sha,
      'Content-Length':  String(size),
    },
    body: html,
  })

  // 200 = already uploaded (Vercel deduplicates by SHA), 201 = uploaded now
  if (uploadRes.status !== 200 && uploadRes.status !== 201) {
    const err = await uploadRes.text()
    return NextResponse.json({ error: `Upload falló (${uploadRes.status}): ${err}` }, { status: 500 })
  }

  // ── 3. Create deployment ──────────────────────────────────────────────────
  const deployRes = await vercelFetch('/v13/deployments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'landforge-user-sites',
      files: [{ file: 'index.html', sha, size }],
      projectSettings: {
        framework: null,
      },
    }),
  })

  if (!deployRes.ok) {
    const err = await deployRes.text()
    return NextResponse.json({ error: `Deploy falló (${deployRes.status}): ${err}` }, { status: 500 })
  }

  const deploy = await deployRes.json() as { id: string; url: string }

  // ── 4. Assign subdomain alias ─────────────────────────────────────────────
  // Re-use existing subdomain if already deployed; otherwise create new one.
  const shortId = (landingId || 'standalone').replace(/-/g, '').slice(0, 4)
  
  // Create a readable slug from business name
  const slug = (bizName || 'site')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9]+/g, '-')                   // replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, '')                       // trim hyphens
    .slice(0, 30)

  const subdomainAlias = subdomain 
    ? subdomain.replace(/^https?:\/\//, '').split('/')[0] // extract host from stored URL
    : `${slug}-${shortId}.${BASE_DOMAIN}`

  const aliasRes = await vercelFetch(`/v2/deployments/${deploy.id}/aliases`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ alias: subdomainAlias }),
  }, { projectId: VERCEL_SITES_PROJECT_ID! })

  console.log('DEBUG [Deploy]:', { 
    id: deploy.id, 
    vercelUrl: deploy.url, 
    intendedAlias: subdomainAlias 
  })

  // Use alias URL if it worked, otherwise fall back to Vercel's auto-generated URL
  let url: string
  if (aliasRes.ok) {
    console.log('DEBUG [Alias]: SUCCESS')
    url = `https://${subdomainAlias}`
  } else {
    const aliasErr = await aliasRes.json().catch(() => ({ message: 'Cannot parse error' }))
    console.warn(`DEBUG [Alias]: FAILED (${aliasRes.status})`, aliasErr)
    // deploy.url from Vercel is like "claude-saas-xxxx.vercel.app" (no protocol)
    url = `https://${deploy.url}`
  }

  // ── 5. Update DB ──────────────────────────────────────────────────────────
  await supabase
    .from('landing_pages')
    .update({
      subdomain: url,
      status: 'published',
      metadata: { ...existingMeta, deploy_id: deploy.id },
    })
    .eq('id', landingId)

  return NextResponse.json({ url, deployId: deploy.id })
}
