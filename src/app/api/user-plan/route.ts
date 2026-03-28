import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { PLAN_FEATURES, type PlanType, type FeatureType } from '@/lib/limits'
import { createClient as createAdmin } from '@supabase/supabase-js'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ plan: 'none' })

  // Admin bypass
  if (user.email && user.email === process.env.ADMIN_EMAIL) {
    return NextResponse.json({ plan: 'agency_pro', features: PLAN_FEATURES.agency_pro })
  }

  const admin = createAdmin(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )

  const { data: subscription } = await admin
    .from('subscriptions')
    .select('plan_id')
    .eq('user_id', user.id)
    .eq('status', 'active')
    .maybeSingle()

  const plan: PlanType = (subscription?.plan_id as PlanType) || 'none'
  return NextResponse.json({ plan, features: PLAN_FEATURES[plan] })
}
