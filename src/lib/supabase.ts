import { createClient } from '@supabase/supabase-js';

export const getSupabaseClient = () => {
  const supabaseUrl =
    import.meta.env.SUPABASE_URL ?? import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseKey =
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY ?? import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
};
