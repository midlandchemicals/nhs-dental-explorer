'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  { auth: { persistSession: false } }
);

const gbp2 = (n) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n);

export default function SearchBox() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState(null);
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const term = q.trim();
    if (term.length < 2) {
      setResults(null);
      return;
    }
    const t = setTimeout(async () => {
      const like = `%${term}%`;
      const { data } = await supabase
        .from('v_practices')
        .select('practice_key,name,town,postcode,uda_rate_contracted')
        .or(`name.ilike.${like},town.ilike.${like},postcode.ilike.${like}`)
        .order('total_paid', { ascending: false })
        .limit(8);
      setResults(data ?? []);
      setOpen(true);
    }, 250);
    return () => clearTimeout(t);
  }, [q]);

  useEffect(() => {
    const onClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="search" ref={boxRef}>
      <input
        type="search"
        placeholder="Search a practice, town or postcode…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => results && setOpen(true)}
        aria-label="Search practices"
      />
      {open && results && (
        <div className="search-results">
          {results.length === 0 && (
            <div className="sr-empty">No practices match “{q.trim()}”. Try a shorter term.</div>
          )}
          {results.map((r) => (
            <Link
              key={r.practice_key}
              href={`/practice/${r.practice_key}`}
              onClick={() => setOpen(false)}
            >
              <span>
                {r.name}
                <span className="sr-meta"> · {r.town}{r.postcode ? `, ${r.postcode}` : ''}</span>
              </span>
              <span className="sr-meta">
                {r.uda_rate_contracted != null ? `${gbp2(r.uda_rate_contracted)}/UDA` : 'No UDAs'}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
