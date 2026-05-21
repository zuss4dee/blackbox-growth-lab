const items = [
  "Pipeline architecture",
  "Signal automation",
  "Attribution surgery",
  "Lifecycle systems",
  "Outbound infrastructure",
  "Revenue telemetry",
  "Forecast integrity",
  "Data plumbing",
];

export function Ticker() {
  const loop = [...items, ...items];
  return (
    <div className="relative border-y border-hairline overflow-hidden bg-paper">
      <div className="ticker flex whitespace-nowrap py-6">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10 font-display text-3xl md:text-5xl tracking-[-0.03em]">
            <span>{t}</span>
            <span className="inline-block w-2 h-2 bg-ink rotate-45" />
          </div>
        ))}
      </div>
    </div>
  );
}
