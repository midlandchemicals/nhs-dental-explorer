import { gbp } from '@/lib/supabase';

// Positions the contracted £/UDA rate on the national distribution (p5 → p95),
// with the effective rate shown alongside for comparison.
export default function RateBand({ contracted, effective, national, detail }) {
  const { p5, p25, p50, p75, p95 } = national;
  const span = p95 - p5 || 1;
  const pos = (v) => `${Math.min(98, Math.max(2, ((v - p5) / span) * 100))}%`;

  return (
    <div className="band-card">
      <div className="band-head">
        <div>
          <div className="band-value">{contracted != null ? gbp(contracted, 2) : '—'}</div>
          <div className="band-label">contracted rate per UDA{detail ? ` — ${detail}` : ''}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="band-value" style={{ fontSize: '1.25rem', color: 'var(--ink)' }}>
            {effective != null ? gbp(effective, 2) : '—'}
          </div>
          <div className="band-label">effective rate paid*</div>
        </div>
      </div>
      {contracted != null && (
        <>
          <div className="band-track">
            <div className="band-iqr" style={{ left: pos(p25), right: `calc(100% - ${pos(p75)})` }} />
            <div className="band-median" style={{ left: pos(p50) }} />
            <div className="band-marker" style={{ left: pos(contracted) }} title={gbp(contracted, 2)} />
          </div>
          <div className="band-scale">
            <span>{gbp(p5, 0)}</span>
            <span>{gbp(p95, 0)}</span>
          </div>
          <p className="band-note">
            Marker shows the contracted rate (baseline contract ÷ contracted UDAs) against the
            middle 90% of contracts nationally; the shaded band is the interquartile range and the
            dark line is the national median ({gbp(p50, 2)}). *Effective rate divides what was
            actually paid (total contractual payments) by contracted UDAs, so it differs where
            performance adjustments (clawback) or other items changed the total.
          </p>
        </>
      )}
    </div>
  );
}
