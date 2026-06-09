// Seed Supabase with data/contracts.csv
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed.mjs
import { createClient } from '@supabase/supabase-js';
import { parse } from 'csv-parse/sync';
import { readFileSync } from 'node:fs';

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables first.');
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

const NUMERIC = [
  'uda_contracted','uoa_contracted','baseline','at_specific','performance_adj',
  'variable_costs','business_rates','trainee','other_payments','total_contractual',
  'patient_charge_revenue','other_deductions','net_payment','max_npe',
  'active_dentists','npe_per_dentist'
];

const rows = parse(readFileSync(new URL('../data/contracts.csv', import.meta.url)), {
  columns: true, skip_empty_lines: true
}).map((r) => {
  const o = { ...r };
  o.contract_id = Number(o.contract_id);
  for (const c of NUMERIC) o[c] = Number(o[c] || 0);
  o.uda_value = o.uda_value === '' ? null : Number(o.uda_value);
  o.uda_rate_contracted = o.uda_rate_contracted === '' ? null : Number(o.uda_rate_contracted);
  for (const c of ['address', 'postcode', 'contract_type']) if (o[c] === '') o[c] = null;
  return o;
});

console.log(`Seeding ${rows.length} contracts…`);
const BATCH = 500;
for (let i = 0; i < rows.length; i += BATCH) {
  const batch = rows.slice(i, i + BATCH);
  const { error } = await supabase.from('contracts').upsert(batch, { onConflict: 'contract_id' });
  if (error) {
    console.error(`Batch ${i / BATCH + 1} failed:`, error.message);
    process.exit(1);
  }
  process.stdout.write(`\r${Math.min(i + BATCH, rows.length)} / ${rows.length}`);
}
console.log('\nDone.');
