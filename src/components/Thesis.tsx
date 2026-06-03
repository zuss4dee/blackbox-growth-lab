import { motion } from "framer-motion";

export function Thesis() {
  return (
    <section id="thesis" className="relative px-6 md:px-10 py-24 md:py-48">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-3 mb-6 md:mb-0">
          <div className="eyebrow md:sticky md:top-32">— 01 / Thesis</div>
        </div>
        <div className="md:col-span-9 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[1.75rem] md:text-5xl leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-balance"
          >
            Hiring junior SDRs to manually scrape databases and guess emails is a broken math equation. We replace human error and inflated salaries with automated, rules-based infrastructure.
          </motion.p>

          <div className="mt-12 md:mt-20 grid sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10 text-base text-ink-soft leading-relaxed max-w-3xl">
            <p>Engineering, not marketing.</p>
            <p>100% primary inbox protection.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
