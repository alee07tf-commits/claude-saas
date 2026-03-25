const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function test() {
  const { data, error } = await supabase
    .from('landing_pages')
    .select('id, user_id')
    .limit(1);
    
  if (error) {
    console.error("Supabase Error:", error.message);
  } else {
    console.log("Success! Data:", data);
  }
}

test();
