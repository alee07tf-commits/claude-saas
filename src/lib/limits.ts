import { createClient } from '@supabase/supabase-js';

// Tipos de métricas y planes
export type PlanType = 'starter' | 'agency' | 'agency_pro' | 'none';
export type ActionType = 'landings' | 'generations' | 'editions' | 'chatbot_messages';
export type FeatureType = 'conversion_score' | 'competitor_analysis' | 'custom_domain' | 'white_label';

export const PLAN_LIMITS: Record<PlanType, Record<ActionType, number>> = {
  starter: {
    landings: 5,
    generations: 10,
    editions: 30,
    chatbot_messages: 500
  },
  agency: {
    landings: 20,
    generations: 100,
    editions: 200,
    chatbot_messages: 3000
  },
  agency_pro: {
    landings: 999999,
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

// Feature access per plan (true = available)
export const PLAN_FEATURES: Record<PlanType, Record<FeatureType, boolean>> = {
  starter: {
    conversion_score: true,
    competitor_analysis: false,
    custom_domain: false,
    white_label: false,
  },
  agency: {
    conversion_score: true,
    competitor_analysis: true,
    custom_domain: true,
    white_label: false,
  },
  agency_pro: {
    conversion_score: true,
    competitor_analysis: true,
    custom_domain: true,
    white_label: true,
  },
  none: {
    conversion_score: false,
    competitor_analysis: false,
    custom_domain: false,
    white_label: false,
  },
};

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

/**
 * Verifica si el usuario tiene acceso a una feature según su plan.
 */
export async function checkFeatureAccess(userId: string, feature: FeatureType, callerEmail?: string): Promise<{ allowed: boolean, plan: PlanType }> {
  try {
    const supabaseAdmin = getSupabaseAdmin();

    let userEmail = callerEmail;
    if (!userEmail) {
      try {
        const { data: userData } = await supabaseAdmin.auth.admin.getUserById(userId);
        userEmail = userData?.user?.email;
      } catch (e) {
        console.warn('Admin getUserById failed:', e);
      }
    }

    if (userEmail && userEmail === process.env.ADMIN_EMAIL) {
      return { allowed: true, plan: 'agency_pro' };
    }

    const { data: subscription } = await supabaseAdmin
      .from('subscriptions')
      .select('plan_id, status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .maybeSingle();

    const plan: PlanType = (subscription?.plan_id as PlanType) || 'none';
    return { allowed: PLAN_FEATURES[plan][feature], plan };
  } catch (err) {
    console.error('Error checking feature access:', err);
    return { allowed: false, plan: 'none' };
  }
}

/**
 * Verifica si el usuario puede realizar una acción según su suscripción y uso actual.
 * Para 'landings' cuenta filas reales en landing_pages (más fiable que un contador).
 */
export async function checkUserLimit(userId: string, action: ActionType, callerEmail?: string): Promise<{ allowed: boolean, plan: PlanType, limit: number, usage: number }> {
  try {
    const supabaseAdmin = getSupabaseAdmin();

    // Admin bypass: check email from caller first
    let userEmail = callerEmail;
    if (!userEmail) {
      try {
        const { data: userData } = await supabaseAdmin.auth.admin.getUserById(userId);
        userEmail = userData?.user?.email;
      } catch (e) {
        console.warn('Admin getUserById failed:', e);
      }
    }

    if (userEmail && userEmail === process.env.ADMIN_EMAIL) {
      return { allowed: true, plan: 'agency_pro', limit: 999999, usage: 0 };
    }

    // 1. Obtener la suscripción activa
    const { data: subscription } = await supabaseAdmin
      .from('subscriptions')
      .select('plan_id, status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .maybeSingle();

    const plan: PlanType = (subscription?.plan_id as PlanType) || 'none';
    const limit = PLAN_LIMITS[plan][action];

    if (limit === 0) return { allowed: false, plan, limit, usage: 0 };
    if (limit >= 999999) return { allowed: true, plan, limit, usage: 0 };

    // 2. Obtener el uso actual
    // For 'landings': COUNT actual rows in landing_pages (always accurate)
    // For 'generations': also count landing_pages rows (each generation = 1 landing created)
    if (action === 'landings' || action === 'generations') {
      const { count, error: countError } = await supabaseAdmin
        .from('landing_pages')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);

      if (countError) {
        console.error(`Error counting ${action}:`, countError);
        // Fallback: try usage_metrics table
        return await checkUsageMetrics(supabaseAdmin, userId, action, plan, limit);
      }

      const currentUsage = count ?? 0;
      return { allowed: currentUsage < limit, plan, limit, usage: currentUsage };
    }

    // For editions/chatbot_messages: use usage_metrics table
    return await checkUsageMetrics(supabaseAdmin, userId, action, plan, limit);
  } catch (err) {
    console.error('Error checking user limits:', err);
    return { allowed: true, plan: 'none', limit: 999, usage: 0 };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function checkUsageMetrics(
  supabaseAdmin: any,
  userId: string, action: ActionType, plan: PlanType, limit: number
): Promise<{ allowed: boolean, plan: PlanType, limit: number, usage: number }> {
  const { data: usage, error: usageError } = await supabaseAdmin
    .from('usage_metrics')
    .select(`${action}_count`)
    .eq('user_id', userId)
    .maybeSingle();

  if (usageError && usageError.code !== 'PGRST116') {
    console.error('Error fetching usage metrics:', usageError);
    return { allowed: true, plan, limit, usage: 0 };
  }

  const currentUsage = usage ? (usage as unknown as Record<string, number>)[`${action}_count`] ?? 0 : 0;
  return { allowed: currentUsage < limit, plan, limit, usage: currentUsage };
}

/**
 * Incrementa el contador de uso para una acción específica.
 * Para 'landings' y 'generations' el límite real se verifica con COUNT de filas,
 * pero igualmente actualizamos el contador para tracking.
 */
export async function incrementUserUsage(userId: string, action: ActionType): Promise<boolean> {
  const column = `${action}_count`;
  try {
    const admin = getSupabaseAdmin();

    // Try atomic upsert with raw rpc first, fallback to read-then-write
    const { data: existing } = await admin
      .from('usage_metrics')
      .select(column)
      .eq('user_id', userId)
      .maybeSingle();

    const currentVal = existing ? (existing as unknown as Record<string, number>)[column] ?? 0 : 0;

    if (existing) {
      // Row exists — use UPDATE (more reliable than upsert)
      const { error } = await admin
        .from('usage_metrics')
        .update({ [column]: currentVal + 1, updated_at: new Date().toISOString() })
        .eq('user_id', userId);

      if (error) {
        console.error(`[Limits] UPDATE ${column} failed for ${userId}:`, error.message);
        return false;
      }
    } else {
      // No row — INSERT new
      const { error } = await admin
        .from('usage_metrics')
        .insert({ user_id: userId, [column]: 1 });

      if (error) {
        console.error(`[Limits] INSERT ${column} failed for ${userId}:`, error.message);
        return false;
      }
    }

    return true;
  } catch (err) {
    console.error(`[Limits] Exception incrementing ${column}:`, err);
    return false;
  }
}
