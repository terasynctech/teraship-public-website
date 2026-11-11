
const TERASHIP_SUPABASE_URL = "https://cocfjuwyrwnarwwqrlow.supabase.co";

// Paste your existing Supabase publishable (anon) key below.
const TERASHIP_SUPABASE_KEY = "sb_publishable_ctawb2ZcgnLsM5rRt5JUrA__L_VrCz3";

const terashipDB = window.supabase.createClient(
  TERASHIP_SUPABASE_URL,
  TERASHIP_SUPABASE_KEY
);
