import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'

// Routes that require authentication
const PROTECTED = ['/survey', '/dashboard', '/preview', '/editor']

export async function middleware(request: NextRequest) {
    const response = await updateSession(request)
    const { pathname } = request.nextUrl

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
