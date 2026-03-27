import { createClient } from '@/lib/supabase/server'
import { checkFeatureAccess } from '@/lib/limits'
import { NextRequest, NextResponse } from 'next/server'

const VERCEL_TOKEN    = process.env.VERCEL_TOKEN
const VERCEL_TEAM_ID  = process.env.VERCEL_TEAM_ID
const VERCEL_PROJECT  = process.env.VERCEL_PROJECT_ID

function vFetch(path: string, opts: RequestInit = {}) {
  const qs = VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : ''
  return fetch(`https://api.vercel.com${path}${qs}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
      ...(opts.headers ?? {}),
    },
  })
}

export async function POST(req: NextRequest) {
  if (!VERCEL_TOKEN || !VERCEL_PROJECT) {
    return NextResponse.json({ error: 'Vercel no está configurado en el servidor (VERCEL_PROJECT missing)' }, { status: 500 })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const access = await checkFeatureAccess(user.id, 'custom_domain', user.email ?? undefined)
  if (!access.allowed) {
    return NextResponse.json({ error: 'El dominio propio está disponible desde el plan Agency. Mejora tu plan para conectar tu dominio.' }, { status: 403 })
  }

  const body = await req.json() as { landingId?: string; customDomain?: string }
  const { landingId, customDomain } = body

  if (!landingId || !customDomain) {
    return NextResponse.json({ error: 'landingId y customDomain son requeridos' }, { status: 400 })
  }

  // Normalize domain: strip protocol, path, trailing slash
  const domain = customDomain
    .toLowerCase()
    .replace(/^https?:\/\//i, '')
    .replace(/[/?#].*$/, '')
    .trim()

  if (!domain || !/^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/.test(domain)) {
    return NextResponse.json({
      error: 'Dominio inválido. Ejemplo: landing.tuempresa.com',
    }, { status: 400 })
  }

  const { data: landing } = await supabase
    .from('landing_pages')
    .select('subdomain, metadata')
    .eq('id', landingId)
    .single()

  if (!landing?.subdomain) {
    return NextResponse.json({
      error: 'Primero debes publicar la landing antes de conectar un dominio',
    }, { status: 400 })
  }

  // ── 1. Add domain to the Vercel project (so DNS resolves to our app) ─────
  await vFetch(`/v9/projects/${VERCEL_PROJECT}/domains`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: domain }),
  })
  // Ignore errors — domain may already exist in the project

  // ── 2. Save custom_domain to DB ───────────────────────────────────────────
  await supabase
    .from('landing_pages')
    .update({ custom_domain: domain })
    .eq('id', landingId)

  // ── 5. Build DNS instructions ─────────────────────────────────────────────
  const parts = domain.split('.')
  // Apex domain = exactly one dot (e.g. "empresa.com"). Subdomain = two+ dots.
  const isApex = parts.length === 2
  const host = isApex ? '@' : parts.slice(0, -2).join('.')

  const dns = isApex
    ? {
        type: 'A',
        host: '@',
        value: '76.76.21.21',
        note: 'Algunos registradores llaman al host "@" u ofrecen un campo específico para el dominio raíz.',
      }
    : {
        type: 'CNAME',
        host,
        value: 'cname.vercel-dns.com',
        note: '',
      }

  const message = '✅ Dominio registrado. Añade el registro DNS y estará activo en 24-48h.'

  return NextResponse.json({ domain, dns, message })
}
