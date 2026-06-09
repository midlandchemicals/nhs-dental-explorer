import { notFound } from 'next/navigation';
import { supabase, gbp, num } from '@/lib/supabase';
import Crumbs from '@/components/Crumbs';
import StatStrip from '@/components/StatStrip';
import RateBand from '@/components/RateBand';

export const revalidate = 3600;

const BREAKDOWN = [
  ['baseline', 'Baseline contract'],
  ['at_specific', 'AT specific items'],
  ['performance_adj', 'Performance adjustments (clawback)*'],
  ['variable_costs', 'Variable costs'],
  ['business_rates', 'Business rates'],
  ['trainee', 'Trainee salaries & grants'],
  ['other_payments', 'Other payments'],
];

export default async function PracticePage({ params }) {
  const { key } = params;
  const [{ data: p }, { data: contracts }, { data: nat }] = await Promise.all([
    supabase.from('v_practices').select('*').eq('practice_key', key).single(),
    supabase
      .from('contracts')
      .select('*')
      .eq('practice_key', key)
      .order('total_contractual', { ascending: false }),
    supabase.from('v_national').select('*').single(),
  ]);
  if (!p) notFound();

  const sum = (col) => (contracts ?? []).reduce((a, c) => a + Number(c[col] || 0), 0);
  const deductions = sum('patient_charge_revenue') + sum('other_deductions');

  return (
    <>
      <Crumbs
        items={[
          { label: p.region_name, href: `/region/${p.region_slug}` },
          { label: p.icb_name, href: `/region/${p.region_slug}/${p.icb_slug}` },
          { label: p.town, href: `/region/${p.region_slug}/${p.icb_slug}/${p.town_slug}` },
          { label: p.name },
        ]}
      />
      <div className="page-head">
        <p className="eyebrow">Practice · {p.town}</p>
        <h1>{p.name}</h1>
        <p className="lede">
          {p.address || 'Address not listed'}
          {p.postcode ? ` · ${p.postcode}` : ''}
        </p>
      </div>

      {nat && (
        <RateBand
          contracted={p.uda_rate_contracted}
          effective={p.uda_value}
          national={nat}
          detail={
            p.uda_rate_contracted != null
              ? `${num(p.total_uda)} contracted UDAs`
              : 'no contracted UDAs, so a per-UDA rate cannot be calculated'
          }
        />
      )}

      <StatStrip
        stats={[
          { k: 'Total contractual', v: gbp(p.total_paid) },
          { k: 'Net payment', v: gbp(p.net_paid) },
          { k: 'Contracted UDAs', v: num(p.total_uda) },
          { k: 'Active dentists', v: num(p.dentists) },
        ]}
      />

      <div className="section-label">Payment breakdown</div>
      <table className="tbl">
        <tbody>
          {BREAKDOWN.map(([col, label]) => {
            const v = sum(col);
            if (v === 0) return null;
            return (
              <tr key={col}>
                <td>{label}</td>
                <td className={`n${v < 0 ? ' neg' : ''}`}>{gbp(v, 2)}</td>
              </tr>
            );
          })}
          <tr className="total">
            <td>Total contractual payments</td>
            <td className="n">{gbp(sum('total_contractual'), 2)}</td>
          </tr>
          <tr>
            <td>Patient charge revenue & other deductions</td>
            <td className={`n${deductions < 0 ? ' neg' : ''}`}>{gbp(deductions, 2)}</td>
          </tr>
          <tr className="total">
            <td>Net payment to dental contract</td>
            <td className="n">{gbp(sum('net_payment'), 2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="section-label">
        {contracts?.length === 1 ? 'Contract' : `Contracts (${contracts?.length ?? 0})`}
      </div>
      <table className="tbl">
        <thead>
          <tr>
            <th>Contract</th>
            <th>Type</th>
            <th className="n">UDAs</th>
            <th className="n">UOAs</th>
            <th className="n">Total paid</th>
            <th className="n">Contracted £/UDA</th>
            <th className="n">Effective £/UDA*</th>
          </tr>
        </thead>
        <tbody>
          {(contracts ?? []).map((c) => (
            <tr key={c.contract_id}>
              <td>{c.contract_id}</td>
              <td>{c.contract_type || '—'}</td>
              <td className="n">{num(c.uda_contracted)}</td>
              <td className="n">{num(c.uoa_contracted)}</td>
              <td className="n">{gbp(c.total_contractual, 2)}</td>
              <td className="n">{c.uda_rate_contracted != null ? gbp(c.uda_rate_contracted, 2) : '—'}</td>
              <td className="n">{c.uda_value != null ? gbp(c.uda_value, 2) : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="note">
        *The effective rate differs from the contracted rate where performance adjustments
        (clawback for under-delivered activity) or other items — such as business rates or
        trainee funding — changed the total actually paid. Contracted £/UDA = baseline contract ÷
        contracted UDAs; effective £/UDA = total contractual payments ÷ contracted UDAs. Figures
        are published by the NHS Business Services Authority for the 2024–25 financial year.
      </p>
    </>
  );
}
