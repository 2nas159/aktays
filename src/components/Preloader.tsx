"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Counts to 100, then lifts the curtain. Runs once per browser session. */
export default function Preloader({ word }: { word: string }) {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("aktays:intro");
    if (reduced || seen) return;

    setVisible(true);
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const duration = 1500;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out so the counter decelerates into 100 rather than hitting it flat.
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("aktays:intro", "1");
        window.setTimeout(() => {
          setVisible(false);
          document.documentElement.style.overflow = "";
        }, 320);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-end bg-ink px-gutter pb-gutter text-canvas"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex w-full items-end justify-between">
            <span className="font-display text-display leading-none">{word}</span>
            <span className="label tabular-nums">{String(count).padStart(3, "0")}</span>
          </div>
          <motion.div
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-canvas/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            transition={{ ease: "linear" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
