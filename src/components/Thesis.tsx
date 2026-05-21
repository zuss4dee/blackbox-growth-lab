import { motion } from "framer-motion";

export function Thesis() {
  return (
    <section id="thesis" className="relative px-6 md:px-10 py-32 md:py-48">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="eyebrow sticky top-32">— 01 / Thesis</div>
        </div>
        <div className="md:col-span-9 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-balance"
          >
            Your current outbound is broken.
            <span className="text-ink-soft"> Generic emails go to spam, and buying outdated lists burns your domain reputation. </span>
            We replace manual guesswork with automated, rules-based infrastructure.
          </motion.p>

          <div className="mt-20 grid sm:grid-cols-2 gap-x-12 gap-y-10 text-base text-ink-soft leading-relaxed max-w-3xl">
            <p>
              We do not sell decks, frameworks, or playbooks. We build the unseen
              layer — the routing logic, the enrichment graphs, the lifecycle
              triggers — that the rest of your stack inherits.
            </p>
            <p>
              An engagement is a closed, written contract. A small team embeds for
              ninety days. The deliverable is a system, not a slide. When we leave,
              your operators own it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
