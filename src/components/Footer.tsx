import Link from "next/link";
import type { Content } from "@/content";
import { getLegal } from "@/content/legal";
import type { Locale } from "@/i18n/config";
import Clock from "./Clock";
import Parallax from "./motion/Parallax";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer({ content, locale }: { content: Content; locale: Locale }) {
  const { footer, contact } = content;
  const legal = getLegal(locale);
  const year = new Date().getFullYear();

  return (
    <footer data-nav-theme="dark" className="bg-ink text-canvas">
      <div className="shell pb-10 pt-20">
        <div className="flex flex-col gap-10 border-b border-canvas/15 pb-12 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-lead text-canvas/70">{footer.note}</p>

          <div className="flex items-center gap-8">
            <span className="label text-canvas/50">Istanbul</span>
            <Clock locale={locale} />
            <a href="#top" className="label link-underline">
              {footer.backToTop} ↑
            </a>
          </div>
        </div>

        {/* Oversized wordmark — the last thing on the page, sized to fill it. */}
        <Parallax distance={26} className="mt-12 overflow-hidden">
          <p
            aria-hidden
            className="isolate-ltr font-display select-none text-center leading-[0.8] text-canvas"
            style={{ fontSize: "clamp(4rem, 26vw, 24rem)" }}
          >
            Aktays<span className="text-accent">.</span>
          </p>
        </Parallax>

        <nav
          aria-label={legal.index.eyebrow}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-canvas/15 pt-6"
        >
          {legal.docs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/${locale}/legal/${doc.slug}`}
              className="label link-underline text-canvas/60 transition-colors duration-300 hover:text-canvas"
            >
              {doc.title}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-5 border-t border-canvas/15 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="label text-canvas/50">
            © {year} Aktays. {footer.rights}
          </p>
          <p className="label text-canvas/50">{footer.builtBy}</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${contact.email}`} className="label link-underline">
              {contact.email}
            </a>
            <LanguageSwitcher current={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
}
