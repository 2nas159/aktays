import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales } from "@/i18n/config";
import { getContent } from "@/content";
import { getLegal, getLegalDoc, legalSlugs } from "@/content/legal";
import { company } from "@/lib/company";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import RevealText from "@/components/motion/RevealText";
import Reveal from "@/components/motion/Reveal";

export function generateStaticParams() {
  return locales.flatMap((locale) => legalSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const doc = getLegalDoc(locale, slug);
  if (!doc) return {};
  return { title: `${doc.title} — Aktays`, description: doc.summary };
}

/** Turns a heading into a stable anchor id, script-independently. */
const anchorId = (index: number) => `section-${index + 1}`;

export default async function LegalDocPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const doc = getLegalDoc(locale, slug);
  if (!doc) notFound();

  const content = getContent(locale);
  const legal = getLegal(locale);

  const details: [string, string][] = [
    [legal.companyLabels.legalName, company.legalName],
    [legal.companyLabels.address, company.addressLines.join(", ")],
    [legal.companyLabels.registration, company.registrationNumber],
    [legal.companyLabels.taxOffice, company.taxOffice],
    [legal.companyLabels.taxNumber, company.taxNumber],
    [legal.companyLabels.email, company.privacyEmail],
  ];

  return (
    <>
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <header className="shell pb-14 pt-36 md:pt-48">
          <Link href={`/${locale}/legal`} className="label link-underline text-muted">
            <span aria-hidden className="flip-rtl">
              ←
            </span>{" "}
            {legal.index.eyebrow}
          </Link>

          <RevealText
            as="h1"
            text={doc.title}
            className="font-display text-display mt-10 block max-w-4xl"
          />

          <p className="mt-6 max-w-2xl text-lead text-ink-soft">{doc.summary}</p>

          <p className="label mt-10 border-t border-line pt-6 text-muted">
            {legal.updatedLabel}:{" "}
            <time dateTime={company.legalLastUpdated}>{company.legalLastUpdated}</time>
          </p>
        </header>

        <div className="shell pb-section">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            {/* Sticky table of contents — long documents need a way back out. */}
            <nav aria-label={legal.contentsLabel} className="md:col-span-3">
              <div className="sticky top-28">
                <p className="label text-muted">{legal.contentsLabel}</p>
                <ol className="mt-5 flex flex-col gap-2.5">
                  {doc.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${anchorId(index)}`}
                        className="text-sm leading-snug text-muted transition-colors duration-300 hover:text-accent"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <article className="flex flex-col gap-14 md:col-span-8 md:col-start-5">
              {doc.sections.map((section, index) => (
                <Reveal key={section.heading} y={18}>
                  <section id={anchorId(index)} className="scroll-mt-28">
                    <h2 className="font-display text-h3 border-t border-line pt-6">
                      {section.heading}
                    </h2>

                    {section.body?.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 28)}
                        className="mt-5 max-w-2xl leading-relaxed text-ink-soft"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets?.length ? (
                      <ul className="mt-6 flex max-w-2xl flex-col gap-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet.slice(0, 28)}
                            className="flex gap-3 leading-relaxed text-ink-soft"
                          >
                            <span aria-hidden className="mt-2 shrink-0 text-accent">
                              —
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.showCompanyDetails ? (
                      <dl className="mt-8 grid max-w-2xl gap-px border border-line bg-line sm:grid-cols-2">
                        {details.map(([label, value]) => (
                          <div key={label} className="bg-canvas p-5">
                            <dt className="label text-muted">{label}</dt>
                            <dd className="mt-2 text-sm text-ink">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                  </section>
                </Reveal>
              ))}

              <div className="border-t border-line pt-8">
                <p className="label text-muted">{legal.index.eyebrow}</p>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                  {legal.docs
                    .filter((other) => other.slug !== doc.slug)
                    .map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/${locale}/legal/${other.slug}`}
                          className="label link-underline text-ink"
                        >
                          {other.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
