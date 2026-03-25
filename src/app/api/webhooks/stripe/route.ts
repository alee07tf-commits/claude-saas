import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event;

  try {
    if (!signature || !webhookSecret) {
      console.error('Missing signature or secret');
      return NextResponse.json({ error: 'Missing configuration' }, { status: 400 });
    }
    event = stripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  const supabaseAdmin = getSupabaseAdmin();

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        const subscriptionId = session.subscription;
        const customerId = session.customer as string;

        if (subscriptionId) {
          const subscription = await stripe().subscriptions.retrieve(subscriptionId as string);

          const userId = subscription.metadata.supabase_user_id || session.metadata?.supabase_user_id;
          const planId = (subscription.metadata as any).plan_id || session.metadata?.plan_id;

          if (userId && planId) {
            // Upsert en supabase subscriptions table
            await supabaseAdmin.from('subscriptions').upsert({
              user_id: userId,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscription.id,
              plan_id: planId,
              status: subscription.status,
              current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString()
            });
            console.log(`✅ Subscripción creada para user: ${userId}`);
          }
        }
        break;
      }
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any;

        // Find existing subscription in DB
        const { data: dbSub } = await supabaseAdmin
          .from('subscriptions')
          .select('*')
          .eq('stripe_subscription_id', subscription.id)
          .single();

        if (dbSub) {
          await supabaseAdmin.from('subscriptions').update({
            status: subscription.status,
            current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString()
          }).eq('id', dbSub.id);
          console.log(`✅ Subscripción ${subscription.id} actualizada (Status: ${subscription.status})`);
        }
        break;
      }
      case 'invoice.payment_succeeded': {
        // Cada mes cuando el pago tiene éxito, reseteamos los contadores
        const invoice = event.data.object as any;
        const subscriptionId = invoice.subscription;

        if (subscriptionId) {
          const { data: dbSub } = await supabaseAdmin
            .from('subscriptions')
            .select('user_id')
            .eq('stripe_subscription_id', subscriptionId)
            .single();

          if (dbSub) {
            await supabaseAdmin.from('usage_metrics').update({
              generations_count: 0,
              editions_count: 0,
              chatbot_messages_count: 0
            }).eq('user_id', dbSub.user_id);
            console.log(`✅ Contadores reseteados para user: ${dbSub.user_id}`);
          }
        }
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error('Error handling event', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
