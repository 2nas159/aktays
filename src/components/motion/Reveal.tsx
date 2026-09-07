"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/**
 * Delay travels through `custom` rather than the `transition` prop — a
 * `transition` prop replaces a variant's own transition entirely, which would
 * drop the easing below.
 */
const variants: Variants = {
  hidden: ({ y }: { y: number }) => ({ opacity: 0, y }),
  visible: ({ delay }: { delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

/** Generic "rises into place as it enters the viewport" wrapper. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      custom={{ y, delay }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}
