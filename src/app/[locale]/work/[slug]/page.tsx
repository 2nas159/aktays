import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getContent } from "@/content";
import { getPages } from "@/content/pages";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ProjectVisual from "@/components/ProjectVisual";
import RevealText from "@/components/motion/RevealText";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";

/** Every locale × every project, so each case study prerenders as static HTML. */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).work.projects.map((project) => ({ locale, slug: project.slug })),
  );
}

function findProject(locale: Locale, slug: string) {
  const projects = getContent(locale).work.projects;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return {
    project: projects[index],
    index,
    next: projects[(index + 1) % projects.length],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const found = findProject(locale, slug);
  if (!found) return {};
  return {
    title: `${found.project.client} — Aktays`,
    description: found.project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const found = findProject(locale, slug);
  if (!found) notFound();

  const { project, index, next } = found;
  const content = getContent(locale);
  const pages = getPages(locale);
  const { work, common } = pages;
  const study = work.studies[slug];
  if (!study) notFound();

  const labels = work.labels;

  return (
    <>
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <header className="shell pb-14 pt-36 md:pt-48">
          <Link href={`/${locale}/work`} className="label link-underline text-muted">
            <span aria-hidden className="flip-rtl">
              ←
            </span>{" "}
            {common.backToWork}
          </Link>

          <p className="label mt-12 text-accent">{project.client}</p>

          <RevealText
            as="h1"
            text={project.title}
            className="font-display text-display mt-6 block max-w-5xl"
          />

          <dl className="mt-14 grid gap-8 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: labels.client, value: project.client },
              { label: labels.category, value: project.category },
              { label: labels.year, value: project.year },
              { label: labels.services, value: project.services.join(", ") },
            ].map((item) => (
              <div key={item.label}>
                <dt className="label text-muted">{item.label}</dt>
                <dd className="mt-2 text-sm text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="shell">
          <Parallax distance={22} className="overflow-hidden">
            <div className="aspect-[16/9] w-full">
              <ProjectVisual project={project} index={index} />
            </div>
          </Parallax>
        </div>

        <section className="shell py-section">
          <Reveal>
            <p className="max-w-3xl text-lead text-ink md:text-h3 md:leading-snug">
              {study.intro}
            </p>
          </Reveal>

          <div className="mt-20 grid gap-12 border-t border-line pt-10 md:grid-cols-12 md:gap-10">
            <h2 className="label text-muted md:col-span-3">{labels.challenge}</h2>
            <div className="flex flex-col gap-5 md:col-span-8 md:col-start-5">
              {study.challenge.map((paragraph) => (
                <Reveal key={paragraph.slice(0, 24)}>
                  <p className="text-lead text-ink-soft">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-line pt-10 md:grid-cols-12 md:gap-10">
            <h2 className="label text-muted md:col-span-3">{labels.approach}</h2>
            <div className="md:col-span-8 md:col-start-5">
              {study.approach.map((step, stepIndex) => (
                <Reveal key={step.title} delay={stepIndex * 0.05}>
                  <article className="border-b border-line py-8 first:pt-0 last:border-0">
                    <div className="flex items-baseline gap-5">
                      <span className="label text-accent">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-h3">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-lead text-ink-soft md:ms-14">{step.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-section text-canvas" data-nav-theme="dark">
          <div className="shell">
            <h2 className="label text-canvas/50">{labels.outcome}</h2>

            <div className="mt-10 grid gap-12 md:grid-cols-12">
              <div className="flex flex-col gap-6 md:col-span-7">
                {study.outcome.map((paragraph) => (
                  <Reveal key={paragraph.slice(0, 24)}>
                    <p className="text-lead text-canvas/80">{paragraph}</p>
                  </Reveal>
                ))}
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <p className="label text-canvas/50">{labels.results}</p>
                <div className="mt-6 flex flex-col gap-8">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metric.label} className="border-t border-canvas/20 pt-5">
                      <RevealText
                        as="p"
                        text={metric.value}
                        delay={metricIndex * 0.08}
                        className="font-display text-h2 block leading-none"
                      />
                      <p className="label mt-3 text-canvas/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 grid gap-8 border-t border-canvas/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {study.credits.map((credit) => (
                <div key={credit.role}>
                  <p className="label text-canvas/50">{credit.role}</p>
                  <p className="mt-2 text-sm text-canvas/85">{credit.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shell py-section">
          <p className="label text-muted">{common.nextProject}</p>
          <Link href={`/${locale}/work/${next.slug}`} className="group mt-8 block">
            <div className="flex items-center justify-between gap-8 border-t border-line pt-8">
              <div>
                <h2 className="font-display text-h2 transition-colors duration-500 group-hover:text-accent">
                  {next.client}
                </h2>
                <p className="mt-3 max-w-lg text-sm text-ink-soft">{next.title}</p>
              </div>
              <span
                aria-hidden
                className="flip-rtl shrink-0 text-3xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
              >
                →
              </span>
            </div>
          </Link>
        </section>
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
