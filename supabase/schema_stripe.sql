-- Create subscriptions table
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    stripe_customer_id text,
    stripe_subscription_id text,
    plan_id text NOT NULL, -- 'starter', 'agency', 'agency_pro'
    status text NOT NULL, -- 'active', 'canceled', 'past_due', 'trialing', etc.
    current_period_end timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS for subscriptions
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can read their own subscriptions
CREATE POLICY "Users can view own subscriptions." ON public.subscriptions
    FOR SELECT USING (auth.uid() = user_id);

-- Only service role can insert/update/delete (from webhook)
-- Create usage_metrics table
CREATE TABLE IF NOT EXISTS public.usage_metrics (
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    landings_count integer DEFAULT 0,
    generations_count integer DEFAULT 0,
    editions_count integer DEFAULT 0,
    chatbot_messages_count integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS for usage metrics
ALTER TABLE public.usage_metrics ENABLE ROW LEVEL SECURITY;

-- Users can read their own metrics
CREATE POLICY "Users can view own usage metrics." ON public.usage_metrics
    FOR SELECT USING (auth.uid() = user_id);

-- Only service role can modify (from webhooks or edge functions)

-- Function to handle new user signup: create a usage_metrics row automatically
CREATE OR REPLACE FUNCTION public.handle_new_user_usage()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.usage_metrics (user_id)
  VALUES (new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to run this function upon user signup
DROP TRIGGER IF EXISTS on_auth_user_created_for_usage ON auth.users;
CREATE TRIGGER on_auth_user_created_for_usage
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user_usage();
