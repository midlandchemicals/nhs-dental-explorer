import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase, gbp, num, udaRate } from '@/lib/supabase';
import Crumbs from '@/components/Crumbs';
import StatStrip from '@/components/StatStrip';

export const revalidate = 3600;

export default async function TownPage({ params }) {
  const { region, icb, town } = params;
  const [{ data: t }, { data: practices }] = await Promise.all([
    supabase
      .from('v_towns')
      .select('*')
      .eq('region_slug', region)
      .eq('icb_slug', icb)
      .eq('town_slug', town)
      .single(),
    supabase
      .from('v_practices')
      .select('*')
      .eq('region_slug', region)
      .eq('icb_slug', icb)
      .eq('town_slug', town)
      .order('total_paid', { ascending: false }),
  ]);
  if (!t) notFound();

  return (
    <>
      <Crumbs
        items={[
          { label: t.region_name, href: `/region/${region}` },
          { label: t.icb_name, href: `/region/${region}/${icb}` },
          { label: t.town },
        ]}
      />
      <div className="page-head">
        <p className="eyebrow">Town</p>
        <h1>{t.town}</h1>
        <p className="lede">
          {num(t.practices)} NHS dental {t.practices === 1 ? 'practice' : 'practices'} in{' '}
          {t.icb_name}, sorted by total payments.
        </p>
      </div>

      <StatStrip
        stats={[
          { k: 'Total paid', v: gbp(t.total_paid) },
          { k: 'Contracts', v: num(t.contracts) },
          { k: 'Contracted UDAs', v: num(t.total_uda) },
          { k: 'Contracted £/UDA', v: gbp(t.uda_rate_contracted, 2), pound: true },
          { k: 'Effective £/UDA', v: gbp(t.uda_value, 2) },
        ]}
      />

      <div className="section-label">Practices</div>
      <div className="list">
        {(practices ?? []).map((p) => (
          <Link key={p.practice_key} href={`/practice/${p.practice_key}`} className="row">
            <span className="r-name">{p.name}</span>
            <span className="r-meta">
              {p.address || 'Address not listed'}
              {p.postcode ? ` · ${p.postcode}` : ''}
            </span>
            <span className={`r-rate${p.uda_rate_contracted == null ? ' none' : ''}`}>
              {udaRate(p.uda_rate_contracted)}
            </span>
            <span className="r-sub">
              {p.uda_value != null ? `Effective ${gbp(p.uda_value, 2)} · ` : ''}
              {gbp(p.total_paid)} paid
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
