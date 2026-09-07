import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales } from "@/i18n/config";
import { getContent } from "@/content";
import { getLegal } from "@/content/legal";
import { company } from "@/lib/company";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getLegal(locale).index;
  return { title: meta.title, description: meta.description };
}

export default async function LegalIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const legal = getLegal(locale);

  return (
    <>
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <PageHeader
          eyebrow={legal.index.eyebrow}
          title={legal.index.title}
          lead={legal.index.lead}
        />

        <section className="shell pb-section">
          <div className="border-t border-line">
            {legal.docs.map((doc, index) => (
              <Reveal key={doc.slug} delay={index * 0.05}>
                <Link
                  href={`/${locale}/legal/${doc.slug}`}
                  className="group grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-10"
                >
                  <h2 className="font-display text-h3 transition-colors duration-500 group-hover:text-accent md:col-span-4">
                    {doc.title}
                  </h2>
                  <p className="text-ink-soft md:col-span-6">{doc.summary}</p>
                  <span
                    aria-hidden
                    className="flip-rtl text-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-1 md:col-start-12 md:text-end"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="label mt-10 text-muted">
            {legal.updatedLabel}:{" "}
            <time dateTime={company.legalLastUpdated}>{company.legalLastUpdated}</time>
          </p>
        </section>
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
