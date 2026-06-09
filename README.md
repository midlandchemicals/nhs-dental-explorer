# NHS Dental Payments Explorer (2024–25)

A mobile-friendly website for browsing NHS payments to dental practices in England.
Drill down **Region → Local area (ICB) → Town → Practice**, search any practice by
name, town or postcode, and see each practice's **contracted and effective £/UDA rates** against the national distribution.

Built with **Next.js** (deployed on **Vercel**) and **Supabase** (Postgres), with the
source data included in `data/contracts.csv` (8,945 contracts, cleaned from the NHSBSA
"Payments to Dentists 2024–25" spreadsheet).

---

## 1. Push to GitHub

```bash
git init
git add .
git commit -m "NHS dental payments explorer"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nhs-dental-explorer.git
git push -u origin main
```

## 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql)
   and run it. This creates the `contracts` table, indexes, a public read-only policy,
   and the summary views the site uses (`v_national`, `v_regions`, `v_icbs`, `v_towns`,
   `v_practices`).
3. Get your keys from **Project Settings → API**:
   - Project URL
   - `anon` public key
   - `service_role` key (for seeding only — keep it secret)

## 3. Seed the data

```bash
npm install
SUPABASE_URL=https://YOUR-PROJECT.supabase.co \
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key \
npm run seed
```

This upserts all 8,945 rows from `data/contracts.csv` in batches. It's safe to re-run.

> Alternative: in the Supabase Table Editor you can import `data/contracts.csv`
> directly into the `contracts` table, but the script is more reliable.

## 4. Run locally

```bash
cp .env.example .env.local   # fill in URL + anon key
npm run dev                  # http://localhost:3000
```

## 5. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import your GitHub repo.
2. Add two environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy. Pages are statically cached and revalidate hourly, so the site is fast and
   the Supabase free tier is barely touched.

**Never** add the `service_role` key to Vercel — the site only needs the anon key,
and the database is protected by a read-only row-level-security policy.

---

## How the data is organised

| Level in the UI | Column in the data | Notes |
| --- | --- | --- |
| Region | `Region Name` | 7 NHS England regions |
| Local area | `STP Name` (ICB) | The dataset has no county column, so Integrated Care Boards play the "county" role — 49 of them |
| Town | derived from `Treatment Address` | Parsed from the address, with common county names (Kent, Surrey…) skipped; ~950 towns |
| Practice | `Full name or company name` + postcode | A practice can hold several contracts; the practice page aggregates them |

Two UDA rates are shown side by side at every level (weighted aggregates, excluding
contracts with zero UDAs):

- **Contracted £/UDA** = `Baseline Contract ÷ Total Contracted UDA` — the negotiated
  rate the contract is worth per UDA. This is the headline figure and what the
  national-distribution band uses.
- **Effective £/UDA** = `Total Contractual Payments ÷ Total Contracted UDA` — what was
  actually paid per contracted UDA. It differs from the contracted rate where
  performance adjustments (clawback) or other items changed the total, and is marked
  with an asterisk in tables.

Contracts with no contracted UDAs — typically orthodontic-only (UOA) or prison
contracts — show "No UDAs" instead of a rate.

## Project structure

```
app/
  page.js                              # national overview + regions
  region/[region]/page.js              # ICBs in a region
  region/[region]/[icb]/page.js        # towns in an ICB
  region/[region]/[icb]/[town]/page.js # practices in a town
  practice/[key]/page.js               # practice detail + UDA band
components/   SearchBox, RateBand, StatStrip, Crumbs
lib/supabase.js                        # client + formatters
supabase/schema.sql                    # table, views, RLS
scripts/seed.mjs                       # CSV → Supabase loader
data/contracts.csv                     # cleaned source data
```

## Refreshing with next year's data

Re-run the cleaning step on the new NHSBSA spreadsheet to regenerate
`data/contracts.csv` with the same columns, then `npm run seed` again (it upserts on
`contract_id`).
