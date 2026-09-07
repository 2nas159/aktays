"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";

export default function Work({ content, locale }: { content: Content; locale: Locale }) {
  const { work } = content;
  const [active, setActive] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });

  const trackPointer = (event: React.MouseEvent) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  return (
    <section id="work" data-nav-theme="dark" className="bg-ink py-section text-canvas">
      <div className="shell">
        <SectionHeading
          eyebrow={work.eyebrow}
          title={work.title}
          lead={work.lead}
          index="02"
          tone="dark"
        />

        {/* Desktop: a quiet list, with the artwork riding the cursor. */}
        <div className="mt-16 hidden md:block" onMouseMove={trackPointer}>
          {work.projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/${locale}/work/${project.slug}`}
              data-cursor={work.caseLabel}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="group relative flex items-center gap-8 border-t border-canvas/15 py-10 last:border-b"
            >
              <span
                className={`label w-10 shrink-0 transition-colors duration-500 ${
                  active === index ? "text-accent" : "text-canvas/40"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <motion.span
                className="flex flex-1 flex-col gap-2"
                animate={{
                  x: active === index ? 16 : 0,
                  opacity: active === null || active === index ? 1 : 0.35,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-tight">
                  {project.client}
                </span>
                <span className="max-w-xl text-sm text-canvas/60">{project.title}</span>
              </motion.span>

              <motion.span
                className="flex shrink-0 items-center gap-8"
                animate={{ opacity: active === null || active === index ? 1 : 0.35 }}
                transition={{ duration: 0.6 }}
              >
                <span className="label text-canvas/50">{project.category}</span>
                <span className="label text-canvas/50">{project.year}</span>
                <span
                  aria-hidden
                  className="flip-rtl text-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  ↗
                </span>
              </motion.span>
            </Link>
          ))}

          <AnimatePresence>
            {active !== null ? (
              <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[500] h-[22rem] w-[17rem]"
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectVisual project={work.projects[active]} index={active} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Mobile: the same projects as cards, since there is no cursor to follow. */}
        <div className="mt-12 grid gap-10 md:hidden">
          {work.projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/${locale}/work/${project.slug}`}
              className="block"
            >
              <div className="aspect-[4/5] w-full">
                <ProjectVisual project={project} index={index} />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <span className="font-display text-h3">{project.client}</span>
                <span className="label text-canvas/50">{project.year}</span>
              </div>
              <p className="mt-2 text-sm text-canvas/60">{project.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric.label}
                    className="label border border-canvas/20 px-3 py-2 text-canvas/70"
                  >
                    {metric.value} · {metric.label}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-canvas/15 pt-8">
          <Link
            href={`/${locale}/work`}
            className="label link-underline inline-flex items-center gap-3"
          >
            {work.allLabel}
            <span aria-hidden className="flip-rtl">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
