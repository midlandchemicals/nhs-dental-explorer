-- NHS Dental Payments Explorer — Supabase schema
-- Run this in the Supabase SQL Editor BEFORE seeding.

create table if not exists public.contracts (
  contract_id            bigint primary key,
  region_code            text not null,
  region_name            text not null,
  region_slug            text not null,
  icb_code               text not null,
  icb_name               text not null,
  icb_slug               text not null,
  name                   text not null,
  address                text,
  postcode               text,
  town                   text not null,
  town_slug              text not null,
  practice_key           text not null,
  contract_type          text,
  uda_contracted         numeric not null default 0,
  uoa_contracted         numeric not null default 0,
  baseline               numeric not null default 0,
  at_specific            numeric not null default 0,
  performance_adj        numeric not null default 0,
  variable_costs         numeric not null default 0,
  business_rates         numeric not null default 0,
  trainee                numeric not null default 0,
  other_payments         numeric not null default 0,
  total_contractual      numeric not null default 0,
  patient_charge_revenue numeric not null default 0,
  other_deductions       numeric not null default 0,
  net_payment            numeric not null default 0,
  max_npe                numeric not null default 0,
  active_dentists        numeric not null default 0,
  npe_per_dentist        numeric not null default 0,
  uda_value              numeric,
  uda_rate_contracted    numeric
);

create index if not exists idx_contracts_region on public.contracts (region_slug);
create index if not exists idx_contracts_icb on public.contracts (region_slug, icb_slug);
create index if not exists idx_contracts_town on public.contracts (region_slug, icb_slug, town_slug);
create index if not exists idx_contracts_practice on public.contracts (practice_key);
create index if not exists idx_contracts_name on public.contracts using gin (to_tsvector('simple', name));

-- Public read-only access
alter table public.contracts enable row level security;
drop policy if exists "public read" on public.contracts;
create policy "public read" on public.contracts for select using (true);

-- ===== Summary views =====

create or replace view public.v_national with (security_invoker = on) as
select
  count(*)::int                                   as contracts,
  count(distinct practice_key)::int               as practices,
  count(distinct town_slug)::int                  as towns,
  count(distinct icb_slug)::int                   as icbs,
  sum(total_contractual)                          as total_paid,
  sum(uda_contracted)                             as total_uda,
  sum(total_contractual) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0)              as uda_value,
  sum(baseline) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0)              as uda_rate_contracted,
  percentile_cont(0.05) within group (order by uda_rate_contracted) filter (where uda_rate_contracted > 0) as p5,
  percentile_cont(0.25) within group (order by uda_rate_contracted) filter (where uda_rate_contracted > 0) as p25,
  percentile_cont(0.50) within group (order by uda_rate_contracted) filter (where uda_rate_contracted > 0) as p50,
  percentile_cont(0.75) within group (order by uda_rate_contracted) filter (where uda_rate_contracted > 0) as p75,
  percentile_cont(0.95) within group (order by uda_rate_contracted) filter (where uda_rate_contracted > 0) as p95
from public.contracts;

create or replace view public.v_regions with (security_invoker = on) as
select
  region_slug, region_name, region_code,
  count(*)::int                     as contracts,
  count(distinct practice_key)::int as practices,
  count(distinct icb_slug)::int     as icbs,
  count(distinct town_slug)::int    as towns,
  sum(total_contractual)            as total_paid,
  sum(uda_contracted)               as total_uda,
  sum(total_contractual) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_value,
  sum(baseline) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_rate_contracted
from public.contracts
group by region_slug, region_name, region_code;

create or replace view public.v_icbs with (security_invoker = on) as
select
  region_slug, region_name, icb_slug, icb_name, icb_code,
  count(*)::int                     as contracts,
  count(distinct practice_key)::int as practices,
  count(distinct town_slug)::int    as towns,
  sum(total_contractual)            as total_paid,
  sum(uda_contracted)               as total_uda,
  sum(total_contractual) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_value,
  sum(baseline) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_rate_contracted
from public.contracts
group by region_slug, region_name, icb_slug, icb_name, icb_code;

create or replace view public.v_towns with (security_invoker = on) as
select
  region_slug, region_name, icb_slug, icb_name, town_slug, town,
  count(*)::int                     as contracts,
  count(distinct practice_key)::int as practices,
  sum(total_contractual)            as total_paid,
  sum(uda_contracted)               as total_uda,
  sum(total_contractual) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_value,
  sum(baseline) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_rate_contracted
from public.contracts
group by region_slug, region_name, icb_slug, icb_name, town_slug, town;

create or replace view public.v_practices with (security_invoker = on) as
select
  practice_key,
  min(name)        as name,
  min(address)     as address,
  min(postcode)    as postcode,
  min(town)        as town,
  min(town_slug)   as town_slug,
  min(icb_name)    as icb_name,
  min(icb_slug)    as icb_slug,
  min(region_name) as region_name,
  min(region_slug) as region_slug,
  count(*)::int    as contracts,
  sum(total_contractual) as total_paid,
  sum(net_payment)       as net_paid,
  sum(uda_contracted)    as total_uda,
  sum(active_dentists)   as dentists,
  sum(total_contractual) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_value,
  sum(baseline) filter (where uda_contracted > 0)
    / nullif(sum(uda_contracted), 0) as uda_rate_contracted
from public.contracts
group by practice_key;
