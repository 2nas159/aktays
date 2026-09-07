"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Content } from "@/content";
import RevealText from "./motion/RevealText";

export default function Hero({ content }: { content: Content }) {
  const { hero } = content;
  const ref = useRef<HTMLElement>(null);

  // The hero recedes rather than simply scrolling away.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-12 pt-32 md:pb-16"
    >
      <motion.div style={{ y, opacity }} className="shell flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-8">
          <motion.p
            className="label flex items-center gap-2.5 text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {hero.availability}
          </motion.p>

          <motion.p
            className="label max-w-[14rem] text-end text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.9 }}
          >
            {hero.eyebrow}
          </motion.p>
        </div>

        <h1 className="font-display text-mega my-10">
          {hero.headline.map((line, index) => (
            <span key={line} className="block">
              <RevealText
                text={line}
                delay={0.55 + index * 0.08}
                className={index === 1 ? "italic text-accent" : undefined}
              />
            </span>
          ))}
        </h1>

        <div className="flex flex-col gap-8 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="max-w-xl text-lead text-ink-soft"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.lead}
          </motion.p>

          <motion.div
            className="flex items-center justify-between gap-10 md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
          >
            <span className="label text-muted">{hero.location}</span>
            <a href="#work" className="label flex items-center gap-2 text-ink">
              {hero.scroll}
              <motion.span
                aria-hidden
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
