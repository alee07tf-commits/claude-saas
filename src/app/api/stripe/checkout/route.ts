import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@supabase/supabase-js';

// Define expected plan price IDs (per interval)
const PLANS: Record<string, Record<string, string | undefined>> = {
  starter: {
    month: process.env.STRIPE_PRICE_ID_STARTER,
    year: process.env.STRIPE_PRICE_ID_STARTER_ANNUAL || process.env.STRIPE_PRICE_ID_STARTER
  },
  agency: {
    month: process.env.STRIPE_PRICE_ID_AGENCY,
    year: process.env.STRIPE_PRICE_ID_AGENCY_ANNUAL || process.env.STRIPE_PRICE_ID_AGENCY
  },
  agency_pro: {
    month: process.env.STRIPE_PRICE_ID_AGENCY_PRO,
    year: process.env.STRIPE_PRICE_ID_AGENCY_PRO_ANNUAL || process.env.STRIPE_PRICE_ID_AGENCY_PRO
  }
};

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const { planId, interval = 'month' } = await req.json();

    const priceId = PLANS[planId]?.[interval];

    if (!planId || !priceId) {
      return NextResponse.json({ error: 'Invalid plan or interval ID' }, { status: 400 });
    }
    
    // Configurar cliente de supabase (usuario logueado)
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Comprobar si ya tiene una suscripción o un customer_id de Stripe
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: subscription } = await supabaseAdmin
      .from('subscriptions')
      .select('stripe_customer_id, status')
      .eq('user_id', user.id)
      .maybeSingle();

    let customerId = subscription?.stripe_customer_id;

    if (!customerId) {
      // Create new customer in stripe if not exists
      const customer = await stripe().customers.create({
        email: user.email,
        metadata: {
          supabase_user_id: user.id
        }
      });
      customerId = customer.id;
    }

    // Create Checkout Session
    const session = await stripe().checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      mode: 'subscription',
      subscription_data: {
        metadata: {
          supabase_user_id: user.id,
          plan_id: planId
        }
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/#pricing`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (err: any) {
    console.error('Error creating checkout session:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
