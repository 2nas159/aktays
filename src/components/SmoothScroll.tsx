"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scrolling. Disabled outright when the visitor asks for reduced
 * motion, so the page falls back to the browser's own scrolling.
 */
export default function SmoothScroll() {
  useEffect(() => {
    /*
     * Start a fresh page load at the top, unless the URL points at an anchor
     * (the legal pages link into their own sections). This runs once per hard
     * load — the layout persists across client-side navigation, so it does not
     * interfere with the router's own scrolling.
     */
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // Lenis samples the current offset on creation; make sure its internal
    // position agrees with where we just put the page.
    if (!window.location.hash) {
      lenis.scrollTo(0, { immediate: true });
    }

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Let plain #anchor links in the nav route through Lenis.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -8 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
