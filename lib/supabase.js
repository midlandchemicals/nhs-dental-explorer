import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  { auth: { persistSession: false } }
);

export const gbp = (n, dp = 0) =>
  n == null
    ? '—'
    : new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: dp,
        maximumFractionDigits: dp,
      }).format(n);

export const num = (n) =>
  n == null ? '—' : new Intl.NumberFormat('en-GB').format(Math.round(n));

export const udaRate = (n) => (n == null ? 'No UDAs' : `${gbp(n, 2)} / UDA`);

// Compact pair: contracted rate headline, effective rate beneath
export const rate = (n) => (n == null ? '—' : gbp(n, 2));
