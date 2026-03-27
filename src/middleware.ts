import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

const BASE_DOMAIN = process.env.LANDFORGE_DOMAIN || 'landforge.digital'

// Hostnames that belong to the main app (not user landings)
const APP_HOSTS = [
    BASE_DOMAIN,
    `www.${BASE_DOMAIN}`,
    'localhost',
    'localhost:3000',
]

// Routes that require authentication
const PROTECTED = ['/survey', '/dashboard', '/preview', '/editor']

export async function middleware(request: NextRequest) {
    const hostname = (request.headers.get('host') || '').replace(/:\d+$/, '') // strip port
    const { pathname } = request.nextUrl

    // ── Subdomain detection ──────────────────────────────────────────────────
    // e.g. my-site.landforge.digital → rewrite to /s/my-site
    const isSubdomain =
        hostname.endsWith(`.${BASE_DOMAIN}`) &&
        hostname !== BASE_DOMAIN &&
        hostname !== `www.${BASE_DOMAIN}`

    if (isSubdomain) {
        const slug = hostname.replace(`.${BASE_DOMAIN}`, '')
        const url = request.nextUrl.clone()
        url.pathname = `/s/${slug}`
        return NextResponse.rewrite(url)
    }

    // ── Custom domain detection ──────────────────────────────────────────────
    // If hostname is not an app host and not a vercel.app domain, it's a custom domain
    const isAppHost = APP_HOSTS.includes(hostname) || hostname.endsWith('.vercel.app')
    if (!isAppHost && hostname.includes('.')) {
        const url = request.nextUrl.clone()
        // Use special prefix: /cd/ = custom domain lookup
        url.pathname = `/cd/${hostname}`
        return NextResponse.rewrite(url)
    }

    // ── Normal app middleware (auth) ─────────────────────────────────────────
    const response = await updateSession(request)

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    // Logged-in users going to login/register → send to dashboard
    if ((pathname.startsWith('/login') || pathname.startsWith('/register')) && user && !pathname.startsWith('/auth')) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // Unauthenticated users trying to access protected routes → send to login
    const isProtected = PROTECTED.some(p => pathname.startsWith(p))
    if (isProtected && !user) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('next', pathname)
        return NextResponse.redirect(loginUrl)
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
