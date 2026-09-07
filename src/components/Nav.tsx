"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = { content: Content; locale: Locale };

/** Height of the band the header occupies, used to test what sits beneath it. */
const HEADER_LINE = 34;

export default function Nav({ content, locale }: Props) {
  const { nav, contact } = content;
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const { scrollY } = useScroll();

  /**
   * Invert the header wherever it overlaps a dark section. `mix-blend-difference`
   * would be tidier, but the header animates on `transform`, which isolates the
   * blend group and leaves the text blending against nothing.
   */
  const syncTheme = useCallback(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]');
    let dark = false;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= HEADER_LINE && rect.bottom >= HEADER_LINE) dark = true;
    });
    setOnDark(dark);
  }, []);

  useEffect(() => {
    syncTheme();
    window.addEventListener("resize", syncTheme);
    return () => window.removeEventListener("resize", syncTheme);
  }, [syncTheme]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 220 && !open);
    syncTheme();
  });

  const links = [
    { label: nav.work, href: "#work" },
    { label: nav.services, href: "#services" },
    { label: nav.approach, href: "#approach" },
    { label: nav.studio, href: "#studio" },
  ];

  const tone = onDark || open ? "text-canvas" : "text-ink";

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[9000]"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`shell flex items-center justify-between py-5 transition-colors duration-500 ${tone}`}
        >
          <Link
            href={`/${locale}`}
            className="isolate-ltr font-display text-2xl leading-none"
            aria-label="Aktays"
          >
            Aktays<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="label link-underline">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden sm:block">
              <LanguageSwitcher current={locale} />
            </div>
            <a href="#contact" className="label link-underline hidden md:inline-block">
              {nav.contact}
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="label md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={nav.contact}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[8900] flex flex-col justify-between bg-ink px-gutter pb-gutter pt-28 text-canvas md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {[...links, { label: nav.contact, href: "#contact" }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-h2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-canvas/20 pt-6">
              <a href={`mailto:${contact.email}`} className="label">
                {contact.email}
              </a>
              <LanguageSwitcher current={locale} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
