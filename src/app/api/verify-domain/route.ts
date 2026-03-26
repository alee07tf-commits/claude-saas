import { NextRequest, NextResponse } from 'next/server'

const VERCEL_TOKEN   = process.env.VERCEL_TOKEN
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID

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
  if (!VERCEL_TOKEN) {
    return NextResponse.json({ error: 'Vercel no configurado' }, { status: 500 })
  }

  const { domain } = (await req.json()) as { domain?: string }
  if (!domain?.trim()) {
    return NextResponse.json({ error: 'domain requerido' }, { status: 400 })
  }

  const clean = domain.toLowerCase().replace(/^https?:\/\//, '').replace(/[/?#].*$/, '').trim()

  try {
    const res = await vFetch(`/v6/domains/${clean}/config`)
    const data = await res.json() as {
      configuredBy?: string | null
      misconfigured?: boolean
    }

    // configuredBy is non-null when DNS is correctly pointing to Vercel
    if (data.configuredBy && !data.misconfigured) {
      return NextResponse.json({ status: 'verified', message: 'Dominio verificado y activo.' })
    }

    if (data.misconfigured) {
      return NextResponse.json({ status: 'misconfigured', message: 'El DNS apunta a Vercel pero la configuración es incorrecta. Revisa los registros.' })
    }

    return NextResponse.json({ status: 'pending', message: 'DNS pendiente de propagación. Puede tardar hasta 48h.' })
  } catch {
    return NextResponse.json({ status: 'error', message: 'No se pudo verificar el dominio.' }, { status: 500 })
  }
}
