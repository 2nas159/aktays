import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales } from "@/i18n/config";
import { getContent } from "@/content";
import { getPages } from "@/content/pages";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageHeader from "@/components/PageHeader";
import CtaBlock from "@/components/CtaBlock";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import Faq from "@/components/Faq";

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
  const { meta } = getPages(locale).services;
  return { title: meta.title, description: meta.description };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const pages = getPages(locale);
  const page = pages.services;

  return (
    <>
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

        <section className="shell pb-section">
          {content.services.items.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-10 md:py-20"
            >
              <div className="md:col-span-1">
                <span className="label text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-6">
                <RevealText
                  as="h2"
                  text={service.title}
                  className="font-display text-h2 block"
                />
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-lead text-ink-soft">
                    {service.description}
                  </p>
                </Reveal>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <p className="label text-muted">{page.deliverablesLabel}</p>
                <ul className="mt-5 flex flex-col">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-b border-line py-3 text-sm text-ink-soft last:border-0"
                    >
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="border-y border-line bg-paper py-section">
          <div className="shell">
            <RevealText
              as="h2"
              text={page.engagements.title}
              className="font-display text-h2 block"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lead text-ink-soft">
                {page.engagements.lead}
              </p>
            </Reveal>

            <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
              {page.engagements.items.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.07}>
                  <div className="flex h-full flex-col bg-paper p-8 md:p-10">
                    <h3 className="font-display text-h3">{item.name}</h3>
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>

                    <dl className="mt-8 flex flex-col gap-4 border-t border-line pt-5">
                      <div>
                        <dt className="label text-muted">
                          {page.engagements.bestForLabel}
                        </dt>
                        <dd className="mt-2 text-sm text-ink">{item.bestFor}</dd>
                      </div>
                      <div>
                        <dt className="label text-muted">
                          {page.engagements.timelineLabel}
                        </dt>
                        <dd className="mt-2 text-sm text-ink">{item.timeline}</dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Faq title={page.faq.title} items={page.faq.items} />

        <CtaBlock
          title={page.cta.title}
          lead={page.cta.lead}
          action={page.cta.action}
          href={`/${locale}/contact`}
        />
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
