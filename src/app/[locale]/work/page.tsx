import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales } from "@/i18n/config";
import { getContent } from "@/content";
import { getPages } from "@/content/pages";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageHeader from "@/components/PageHeader";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/motion/Reveal";
import CtaBlock from "@/components/CtaBlock";

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
  const { meta } = getPages(locale).work;
  return { title: meta.title, description: meta.description };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const pages = getPages(locale);
  const { work } = pages;
  const projects = content.work.projects;

  return (
    <>
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <PageHeader
          eyebrow={work.eyebrow}
          title={work.title}
          lead={work.lead}
          meta={[{ label: work.countLabel, value: String(projects.length) }]}
        />

        <section className="shell pb-section">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-28">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={(index % 2) * 0.08}
                /* Offset every second card so the grid reads as a column of
                   staggered plates rather than a table of thumbnails. */
                className={index % 2 === 1 ? "md:mt-24" : undefined}
              >
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  data-cursor={work.labels.overview}
                  className="group block"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <div className="h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
                      <ProjectVisual project={project} index={index} />
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-line pt-5">
                    <h2 className="font-display text-h3">{project.client}</h2>
                    <span className="label text-muted">{project.year}</span>
                  </div>

                  <p className="mt-3 max-w-md text-sm text-ink-soft">{project.title}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <li key={service} className="label border border-line px-3 py-2 text-muted">
                        {service}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBlock
          title={pages.services.cta.title}
          lead={pages.services.cta.lead}
          action={pages.common.startProject}
          href={`/${locale}/contact`}
        />
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
