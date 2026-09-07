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
  const { meta } = getPages(locale).studio;
  return { title: meta.title, description: meta.description };
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const pages = getPages(locale);
  const page = pages.studio;

  return (
    <>
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

        <section className="shell pb-section">
          <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-12">
            <div className="md:col-span-3" />
            <div className="flex flex-col gap-6 md:col-span-8 md:col-start-5">
              {page.story.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
                  <p className={index === 0 ? "text-lead text-ink" : "text-lead text-ink-soft"}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {content.studio.stats.map((stat, index) => (
              <div key={stat.label} className="bg-canvas p-6 md:p-8">
                <RevealText
                  as="p"
                  text={stat.value}
                  delay={index * 0.07}
                  className="font-display text-h2 block leading-none"
                />
                <p className="label mt-4 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-paper py-section">
          <div className="shell">
            <RevealText
              as="h2"
              text={page.principles.title}
              className="font-display text-h2 block"
            />

            <div className="mt-14">
              {page.principles.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10">
                    <div className="flex items-baseline gap-5 md:col-span-5">
                      <span className="label text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-h3">{item.title}</h3>
                    </div>
                    <p className="text-lead text-ink-soft md:col-span-6 md:col-start-7">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="shell py-section">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <RevealText
                as="h2"
                text={page.rhythm.title}
                className="font-display text-h2 block"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-lead text-ink-soft">{page.rhythm.lead}</p>
              </Reveal>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              {page.rhythm.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="border-t border-line py-8 last:border-b">
                    <h3 className="label text-accent">{item.title}</h3>
                    <p className="mt-4 text-lead text-ink-soft">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="shell pb-section">
          <div className="border-t border-line pt-10">
            <RevealText
              as="h2"
              text={page.disciplines.title}
              className="font-display text-h2 block"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lead text-ink-soft">{page.disciplines.lead}</p>
            </Reveal>

            <ul className="mt-12 flex flex-wrap gap-3">
              {page.disciplines.items.map((item, index) => (
                <Reveal key={item} delay={Math.min(index * 0.02, 0.3)}>
                  <li className="label border border-line px-4 py-3 text-ink-soft transition-colors duration-500 hover:border-accent hover:text-accent">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

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
