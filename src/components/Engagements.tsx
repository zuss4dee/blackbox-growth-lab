import { motion } from "framer-motion";

const work = [
  { idx: "001", sector: "Vertical SaaS · Series C", outcome: "+312% qualified pipeline", scope: "Substrate · Telemetry", year: "2024" },
  { idx: "002", sector: "Developer Tools · Series B", outcome: "5.1× outbound efficiency", scope: "Orchestration", year: "2024" },
  { idx: "003", sector: "Fintech Infra · Pre-IPO", outcome: "Forecast variance < 4%", scope: "Telemetry · Enrichment", year: "2023" },
  { idx: "004", sector: "Cyber · Series D", outcome: "2.1× expansion ARR", scope: "Lifecycle · Routing", year: "2023" },
];

export function Engagements() {
  return (
    <section id="engagements" className="relative px-6 md:px-10 py-24 md:py-48 border-t border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
        <div className="md:col-span-3 mb-4 md:mb-0">
          <div className="eyebrow">— 03 / Engagements</div>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em] max-w-3xl">
            Selected, anonymized.
          </h2>
        </div>
      </div>

      <div className="border-t border-hairline">
        {work.map((w, i) => (
          <motion.div
            key={w.idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group grid grid-cols-12 gap-x-3 gap-y-2 md:gap-4 py-6 md:py-7 border-b border-hairline items-baseline cursor-default md:hover:bg-ink md:hover:text-paper transition-colors duration-300"
          >
            <div className="col-span-2 md:col-span-1 font-mono text-[10px] md:text-[11px] tracking-[0.18em]">{w.idx}</div>
            <div className="col-span-10 md:col-span-4 font-display text-lg md:text-3xl tracking-[-0.03em]">{w.sector}</div>
            <div className="col-span-12 md:col-span-4 text-sm md:text-base text-ink-soft md:text-current pl-[calc((100%/12)*2+0.75rem)] md:pl-0">{w.outcome}</div>
            <div className="col-span-7 md:col-span-2 font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase opacity-70 pl-[calc((100%/12)*2+0.75rem)] md:pl-0">{w.scope}</div>
            <div className="col-span-5 md:col-span-1 font-mono text-[10px] md:text-[11px] tracking-[0.18em] text-right opacity-70">{w.year}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
