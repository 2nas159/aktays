"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Content } from "@/content";

export default function Testimonials({ content }: { content: Content }) {
  const { testimonials } = content;
  const [index, setIndex] = useState(0);
  const item = testimonials.items[index];

  const go = (step: number) => {
    const next = (index + step + testimonials.items.length) % testimonials.items.length;
    setIndex(next);
  };

  return (
    <section className="border-y border-line bg-paper py-section">
      <div className="shell">
        <p className="label text-muted">{testimonials.eyebrow}</p>

        <div className="mt-10 min-h-[16rem] md:min-h-[20rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-h2 max-w-5xl">
                <span aria-hidden className="text-accent">
                  “
                </span>
                {item.quote}
              </p>
              <footer className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="label text-ink">{item.name}</span>
                <span aria-hidden className="text-line">
                  /
                </span>
                <span className="label text-muted">{item.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-6 border-t border-line pt-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="flip-rtl text-2xl leading-none text-muted transition-colors duration-300 hover:text-accent"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="flip-rtl text-2xl leading-none text-muted transition-colors duration-300 hover:text-accent"
          >
            →
          </button>
          <span className="label text-muted">
            {String(index + 1).padStart(2, "0")} — {String(testimonials.items.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
