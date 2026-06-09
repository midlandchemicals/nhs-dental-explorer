export default function StatStrip({ stats }) {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.k} className={`stat${s.pound ? ' pound' : ''}`}>
          <div className="k">{s.k}</div>
          <div className="v">{s.v}</div>
        </div>
      ))}
    </div>
  );
}
