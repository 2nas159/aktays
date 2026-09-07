"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Content } from "@/content";
import SectionHeading from "./SectionHeading";

export default function Services({ content }: { content: Content }) {
  const { services } = content;
  const [open, setOpen] = useState<string | null>(services.items[0]?.id ?? null);

  return (
    <section id="services" className="shell py-section">
      <SectionHeading
        eyebrow={services.eyebrow}
        title={services.title}
        lead={services.lead}
        index="01"
      />

      <div className="mt-16 md:mt-24">
        {services.items.map((service, index) => {
          const isOpen = open === service.id;

          return (
            <div key={service.id} className="border-t border-line last:border-b">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : service.id)}
                aria-expanded={isOpen}
                aria-controls={`service-${service.id}`}
                className="group flex w-full items-baseline gap-6 py-8 text-start md:gap-10 md:py-12"
              >
                <span className="label w-8 shrink-0 text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1">
                  <span
                    className={`font-display text-h3 block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-h2 ${
                      isOpen ? "text-accent" : "text-ink group-hover:translate-x-2 rtl:group-hover:-translate-x-2"
                    }`}
                  >
                    {service.title}
                  </span>
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

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`service-${service.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-12 md:grid-cols-12 md:gap-10">
                      <div className="md:col-span-1" />
                      <p className="text-lead text-ink-soft md:col-span-6">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-3 md:col-span-5">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 border-b border-line pb-3 text-sm text-muted last:border-0"
                          >
                            <span aria-hidden className="text-accent">
                              —
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
