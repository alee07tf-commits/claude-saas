import { createClient } from '@supabase/supabase-js';

// Tipos de métricas y planes
export type PlanType = 'starter' | 'agency' | 'agency_pro' | 'none';
export type ActionType = 'landings' | 'generations' | 'editions' | 'chatbot_messages';

export const PLAN_LIMITS: Record<PlanType, Record<ActionType, number>> = {
  starter: {
    landings: 5,
    generations: 10,
    editions: 30,
    chatbot_messages: 500
  },
  agency: {
    landings: 20,
    generations: 50,
    editions: 200,
    chatbot_messages: 3000
  },
  agency_pro: {
    landings: 999999, // Ilimitado visualmente y a nivel código
    generations: 999999,
    editions: 999999,
    chatbot_messages: 999999
  },
  none: {
    landings: 1,
    generations: 5,
    editions: 10,
    chatbot_messages: 100
  }
};

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

/**
 * Verifica si el usuario puede realizar una acción según su suscripción y uso actual.
 * Devuelve un boolean y opcionalmente el plan actual.
 */
export async function checkUserLimit(userId: string, action: ActionType, callerEmail?: string): Promise<{ allowed: boolean, plan: PlanType, limit: number, usage: number }> {
  try {
    const supabaseAdmin = getSupabaseAdmin();

    // Admin bypass: check email from caller first (avoids admin client dependency)
    let userEmail = callerEmail;
    if (!userEmail) {
      try {
        const { data: userData } = await supabaseAdmin.auth.admin.getUserById(userId);
        userEmail = userData?.user?.email;
      } catch (e) {
        console.warn('Admin getUserById failed (service role key may be wrong):', e);
      }
    }

    if (userEmail && userEmail === process.env.ADMIN_EMAIL) {
      return { allowed: true, plan: 'agency_pro', limit: 999999, usage: 0 };
    }

    // 1. Obtener la suscripción activa
    const { data: subscription, error: subError } = await supabaseAdmin
      .from('subscriptions')
      .select('plan_id, status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .maybeSingle();

    const plan: PlanType = (subscription?.plan_id as PlanType) || 'none';
    const limit = PLAN_LIMITS[plan][action];

    // Si el usuario no tiene plan y el límite es 0, no está permitido
    if (limit === 0) {
      return { allowed: false, plan, limit, usage: 0 };
    }

    // Si el límite es "ilimitado", permitimos inmediatamente
    if (limit >= 999999) {
      return { allowed: true, plan, limit, usage: 0 };
    }

    // 2. Obtener el uso actual para validar
    const { data: usage, error: usageError } = await getSupabaseAdmin()
      .from('usage_metrics')
      .select(`${action}_count`)
      .eq('user_id', userId)
      .maybeSingle();

    if (usageError && usageError.code !== 'PGRST116') {
      console.error('Error fetching usage metrics:', usageError);
      // If table doesn't exist or query fails, assume 0 usage (allow the action)
      return { allowed: true, plan, limit, usage: 0 };
    }

    const currentUsage = usage ? (usage as unknown as Record<string, number>)[`${action}_count`] ?? 0 : 0;

    return { allowed: currentUsage < limit, plan, limit, usage: currentUsage };
  } catch (err) {
    console.error('Error checking user limits:', err);
    // On unexpected errors (missing tables, bad keys), allow the action
    // to avoid blocking users due to infrastructure issues
    return { allowed: true, plan: 'none', limit: 999, usage: 0 };
  }
}

/**
 * Incrementa el contador de uso para una acción específica.
 */
export async function incrementUserUsage(userId: string, action: ActionType): Promise<boolean> {
  const column = `${action}_count`;
  try {
    const { data: userUsage } = await getSupabaseAdmin()
      .from('usage_metrics')
      .select(column)
      .eq('user_id', userId)
      .maybeSingle();

    const currentVal = userUsage ? (userUsage as unknown as Record<string, number>)[column] ?? 0 : 0;

    // Upsert: inserta la fila si no existe, actualiza si ya existe
    const { error } = await getSupabaseAdmin()
      .from('usage_metrics')
      .upsert(
        { user_id: userId, [column]: currentVal + 1 },
        { onConflict: 'user_id' }
      );

    if (error) {
      console.error('Error incrementing usage:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Exception incrementing usage:', err);
    return false;
  }
}
