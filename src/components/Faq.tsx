"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Faq as FaqItem } from "@/content/pages/types";
import RevealText from "./motion/RevealText";

export default function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="shell py-section">
      <RevealText as="h2" text={title} className="font-display text-h2 block" />

      <div className="mt-14">
        {items.map((item, index) => {
          const isOpen = open === index;

          return (
            <div key={item.question} className="border-t border-line last:border-b">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="group flex w-full items-baseline justify-between gap-8 py-7 text-start"
                >
                  <span
                    className={`font-display text-h3 transition-colors duration-500 ${
                      isOpen ? "text-accent" : "text-ink"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-2xl leading-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-45 text-accent" : "text-muted"
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-8 text-lead text-ink-soft">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
