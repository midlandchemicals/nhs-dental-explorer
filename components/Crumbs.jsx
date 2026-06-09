import Link from 'next/link';

export default function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href="/">England</Link>
      {items.map((it, i) => (
        <span key={i} style={{ display: 'contents' }}>
          <span className="sep">›</span>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span>{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}
