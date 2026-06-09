import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase, gbp, num, udaRate } from '@/lib/supabase';
import Crumbs from '@/components/Crumbs';
import StatStrip from '@/components/StatStrip';

export const revalidate = 3600;

export default async function RegionPage({ params }) {
  const { region } = params;
  const [{ data: r }, { data: icbs }] = await Promise.all([
    supabase.from('v_regions').select('*').eq('region_slug', region).single(),
    supabase
      .from('v_icbs')
      .select('*')
      .eq('region_slug', region)
      .order('icb_name', { ascending: true }),
  ]);
  if (!r) notFound();

  return (
    <>
      <Crumbs items={[{ label: r.region_name }]} />
      <div className="page-head">
        <p className="eyebrow">Region</p>
        <h1>{r.region_name}</h1>
        <p className="lede">Pick a local area (Integrated Care Board) to narrow down to towns.</p>
      </div>

      <StatStrip
        stats={[
          { k: 'Total paid', v: gbp(r.total_paid) },
          { k: 'Practices', v: num(r.practices) },
          { k: 'Contracted UDAs', v: num(r.total_uda) },
          { k: 'Contracted £/UDA', v: gbp(r.uda_rate_contracted, 2), pound: true },
          { k: 'Effective £/UDA', v: gbp(r.uda_value, 2) },
        ]}
      />

      <div className="section-label">Areas in {r.region_name}</div>
      <div className="list">
        {(icbs ?? []).map((i) => (
          <Link key={i.icb_slug} href={`/region/${region}/${i.icb_slug}`} className="row">
            <span className="r-name">{i.icb_name}</span>
            <span className="r-meta">
              {num(i.towns)} towns · {num(i.practices)} practices
            </span>
            <span className="r-rate">{udaRate(i.uda_rate_contracted)}</span>
            <span className="r-sub">
              {i.uda_value != null ? `Effective ${gbp(i.uda_value, 2)} · ` : ''}
              {gbp(i.total_paid)} paid
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
