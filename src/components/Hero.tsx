import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { CtaButton } from "./CtaButton";

const word: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.15 + i * 0.08, ease: [0.77, 0, 0.175, 1] as const },
  }),
};

const drawLine: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.4, delay: 0.5, ease: [0.77, 0, 0.175, 1] as const },
  },
};

const blink: Variants = {
  show: {
    opacity: [1, 1, 0, 0],
    transition: { duration: 1, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.45, 0.55, 1] },
  },
};

const pulse: Variants = {
  show: {
    scale: [1, 1.6, 1],
    opacity: [1, 0.4, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/—";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-between pt-32 pb-10 px-6 md:px-10 text-center"
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-[0.6] pointer-events-none" />
      <div className="absolute inset-x-0 top-24 h-px hairline" />

      {/* Eyebrow tag — centered pill */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 border border-hairline px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft">
          <span className="inline-block w-1.5 h-1.5 bg-ink" />
          Index 001 — Growth Infrastructure
        </div>
      </motion.div>

      {/* Centered stage */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
        <h1 className="font-display text-[clamp(2.75rem,11vw,11rem)] leading-[0.92] tracking-[-0.045em] text-balance">
          <span className="block overflow-hidden">
            <motion.span variants={word} initial="hidden" animate="show" custom={0} className="block">
              Pipeline,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={word}
              initial="hidden"
              animate="show"
              custom={1}
              className="block italic font-light tracking-[-0.04em]"
              style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
            >
              engineered.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 md:mt-10 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed"
        >
          We build custom data architecture that puts qualified B2B SaaS demos on your calendar. Zero headcount required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 md:mt-10"
        >
          <CtaButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft flex items-center gap-4"
        >
          <span>By referral</span>
          <span className="w-1 h-1 bg-ink-soft rotate-45" />
          <span>Series B → IPO</span>
        </motion.div>
      </motion.div>

      {/* Bottom meta row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 w-full mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-ink-soft text-left"
      >
        <div>
          <div className="text-ink mb-2">EST. MMXX</div>
          <div>Zurich · NYC</div>
        </div>
        <div>
          <div className="text-ink mb-2">Engagements / yr</div>
          <div>6 — by referral</div>
        </div>
        <div>
          <div className="text-ink mb-2">Avg. uplift</div>
          <div>2.4× pipeline · 18 mo</div>
        </div>
        <div>
          <div className="text-ink mb-2">Scope</div>
          <div>Series B → IPO</div>
        </div>
      </motion.div>
    </section>
  );
}
