'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const email    = formData.get('email') as string
    const password = formData.get('password') as string
    const next     = (formData.get('next') as string) || '/dashboard'

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        redirect(`/login?error=true&next=${encodeURIComponent(next)}`)
    }

    revalidatePath('/', 'layout')
    redirect(next)
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const email    = formData.get('email') as string
    const password = formData.get('password') as string
    const next     = (formData.get('next') as string) || '/dashboard'

    const origin   = process.env.NEXT_PUBLIC_SITE_URL || process.env.APP_URL || 'http://localhost:3000'

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}` },
    })

    if (error) {
        redirect(`/register?error=true&next=${encodeURIComponent(next)}`)
    }

    revalidatePath('/', 'layout')

    // session exists → email confirmation OFF, immediately logged in
    if (data.session) redirect(next)

    // No session → email confirmation required
    redirect('/register?confirm=true')
}

export async function signout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
}
