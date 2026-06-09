import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase, gbp, num, udaRate } from '@/lib/supabase';
import Crumbs from '@/components/Crumbs';
import StatStrip from '@/components/StatStrip';

export const revalidate = 3600;

export default async function IcbPage({ params }) {
  const { region, icb } = params;
  const [{ data: i }, { data: towns }] = await Promise.all([
    supabase.from('v_icbs').select('*').eq('region_slug', region).eq('icb_slug', icb).single(),
    supabase
      .from('v_towns')
      .select('*')
      .eq('region_slug', region)
      .eq('icb_slug', icb)
      .order('town', { ascending: true }),
  ]);
  if (!i) notFound();

  return (
    <>
      <Crumbs
        items={[
          { label: i.region_name, href: `/region/${region}` },
          { label: i.icb_name },
        ]}
      />
      <div className="page-head">
        <p className="eyebrow">Local area</p>
        <h1>{i.icb_name}</h1>
        <p className="lede">Pick a town to see its NHS dental practices.</p>
      </div>

      <StatStrip
        stats={[
          { k: 'Total paid', v: gbp(i.total_paid) },
          { k: 'Practices', v: num(i.practices) },
          { k: 'Contracted UDAs', v: num(i.total_uda) },
          { k: 'Contracted £/UDA', v: gbp(i.uda_rate_contracted, 2), pound: true },
          { k: 'Effective £/UDA', v: gbp(i.uda_value, 2) },
        ]}
      />

      <div className="section-label">Towns</div>
      <div className="list">
        {(towns ?? []).map((t) => (
          <Link
            key={t.town_slug}
            href={`/region/${region}/${icb}/${t.town_slug}`}
            className="row"
          >
            <span className="r-name">{t.town}</span>
            <span className="r-meta">{num(t.practices)} practices</span>
            <span className="r-rate">{udaRate(t.uda_rate_contracted)}</span>
            <span className="r-sub">
              {t.uda_value != null ? `Effective ${gbp(t.uda_value, 2)} · ` : ''}
              {gbp(t.total_paid)} paid
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
