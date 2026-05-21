import { motion } from "framer-motion";

const ps = [
  { n: "I", t: "Outcomes over metrics", b: "Booked meetings. Not clicks or open rates." },
  { n: "II", t: "Infrastructure over tactics", b: "Permanent revenue systems over temporary campaigns." },
  { n: "III", t: "Engineers over marketers", b: "Code and automation over marketing guesswork." },
  { n: "IV", t: "Targeting over volume", b: "Hyper-targeted intent data over volume spam." },
];

export function Principles() {
  return (
    <section id="index" className="relative px-6 md:px-10 py-32 md:py-44 border-t border-hairline">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3">
          <div className="eyebrow">— 04 / Index</div>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-[-0.035em] max-w-2xl">
            Four principles.<br />Non-negotiable.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
        {ps.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="bg-paper p-8 md:p-12 min-h-[260px] flex flex-col justify-between"
          >
            <div className="font-mono text-[11px] tracking-[0.2em] text-ink-soft">{p.n}</div>
            <div>
              <h3 className="font-display text-2xl md:text-4xl tracking-[-0.03em] mb-3">{p.t}</h3>
              <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-md">{p.b}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
