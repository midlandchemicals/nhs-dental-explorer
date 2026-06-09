import Link from 'next/link';
import { supabase, gbp, num, udaRate } from '@/lib/supabase';
import StatStrip from '@/components/StatStrip';

export const revalidate = 3600;

export default async function Home() {
  const [{ data: nat }, { data: regions }] = await Promise.all([
    supabase.from('v_national').select('*').single(),
    supabase.from('v_regions').select('*').order('total_paid', { ascending: false }),
  ]);

  return (
    <>
      <div className="page-head">
        <p className="eyebrow">NHS England · financial year 2024–25</p>
        <h1>What NHS dentistry pays, practice by practice</h1>
        <p className="lede">
          Drill down from region to area to town to find any NHS dental practice in England,
          see its contractual payments, and what each unit of dental activity (UDA) is worth.
        </p>
      </div>

      {nat && (
        <StatStrip
          stats={[
            { k: 'Total paid', v: `£${(nat.total_paid / 1e9).toFixed(2)}bn` },
            { k: 'Contracts', v: num(nat.contracts) },
            { k: 'Practices', v: num(nat.practices) },
            { k: 'Contracted UDAs', v: num(nat.total_uda) },
            { k: 'Contracted £/UDA', v: gbp(nat.uda_rate_contracted, 2), pound: true },
          { k: 'Effective £/UDA', v: gbp(nat.uda_value, 2) },
          ]}
        />
      )}

      <div className="section-label">Choose a region</div>
      <div className="list">
        {(regions ?? []).map((r) => (
          <Link key={r.region_slug} href={`/region/${r.region_slug}`} className="row">
            <span className="r-name">{r.region_name}</span>
            <span className="r-meta">
              {num(r.icbs)} areas · {num(r.towns)} towns · {num(r.practices)} practices
            </span>
            <span className="r-rate">{udaRate(r.uda_rate_contracted)}</span>
            <span className="r-sub">
              {r.uda_value != null ? `Effective ${gbp(r.uda_value, 2)} · ` : ''}
              {gbp(r.total_paid)} paid
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
