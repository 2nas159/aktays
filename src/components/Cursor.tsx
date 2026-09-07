"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Trailing ring cursor. Grows over anything marked `data-cursor`, and is
 * skipped entirely on touch devices and under reduced-motion.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor], a, button",
      );
      setHovering(Boolean(target));
      setLabel(target?.dataset.cursor && target.dataset.cursor !== "true" ? target.dataset.cursor : "");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-ink text-ink"
        animate={{
          width: hovering ? (label ? 92 : 56) : 14,
          height: hovering ? (label ? 92 : 56) : 14,
          backgroundColor: hovering ? "rgba(224,67,24,1)" : "rgba(20,19,15,1)",
          borderColor: hovering ? "rgba(224,67,24,1)" : "rgba(20,19,15,1)",
          x: "-50%",
          y: "-50%",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {label ? (
          <span className="label whitespace-nowrap text-paper">{label}</span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
