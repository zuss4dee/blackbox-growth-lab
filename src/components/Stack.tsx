import { motion } from "framer-motion";

const layers = [
  {
    id: "L4",
    title: "Orchestration",
    body: "Workflow graphs that route every signal — inbound, product, intent — to the right surface within seconds.",
    items: ["Signal routing", "Lifecycle states", "Escalation logic"],
  },
  {
    id: "L3",
    title: "Enrichment",
    body: "A composable enrichment pipeline. Deterministic identity, firmographic fidelity, and account-level truth.",
    items: ["Identity resolution", "Firmographic graph", "Intent overlays"],
  },
  {
    id: "L2",
    title: "Telemetry",
    body: "Event spines that make pipeline auditable end-to-end. No black boxes. Every motion traceable.",
    items: ["Schema design", "Warehouse models", "Reverse ETL"],
  },
  {
    id: "L1",
    title: "Substrate",
    body: "Source-of-truth CRM architecture. Object models that survive a decade of org changes.",
    items: ["Object design", "Permissions", "Migration"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-hairline">
      <div className="grid md:grid-cols-12 gap-10 mb-20">
        <div className="md:col-span-3">
          <div className="eyebrow">— 02 / Stack</div>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em] max-w-3xl">
            Four layers. One spine.
          </h2>
        </div>
      </div>

      <div className="border-t border-hairline">
        {layers.map((l, i) => (
          <motion.div
            key={l.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 border-b border-hairline relative"
          >
            <div className="md:col-span-1 font-mono text-[11px] tracking-[0.18em] text-ink-soft pt-1">
              {l.id}
            </div>
            <div className="md:col-span-4">
              <h3 className="font-display text-3xl md:text-5xl tracking-[-0.035em] leading-none">
                {l.title}
              </h3>
            </div>
            <div className="md:col-span-4 text-ink-soft leading-relaxed text-base">
              {l.body}
            </div>
            <div className="md:col-span-3 flex flex-col gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-ink">
              {l.items.map((it) => (
                <div key={it} className="flex items-center gap-2">
                  <span className="w-3 h-px bg-ink" />
                  {it}
                </div>
              ))}
            </div>
            <motion.div
              aria-hidden
              className="absolute left-0 top-0 h-px bg-ink"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 + i * 0.05, ease: [0.77, 0, 0.175, 1] }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
