import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales } from "@/i18n/config";
import { getContent } from "@/content";
import { getPages } from "@/content/pages";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
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
  const { meta } = getPages(locale).contact;
  return { title: meta.title, description: meta.description };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const page = getPages(locale).contact;
  const { contact } = content;

  return (
    <>
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

        <section className="shell pb-section">
          <div className="grid gap-16 border-t border-line pt-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <ContactForm form={page.form} locale={locale} email={contact.email} />
            </div>

            <aside className="flex flex-col gap-8 md:col-span-4 md:col-start-9">
              <Reveal>
                <div>
                  <h2 className="label text-muted">{page.directTitle}</h2>
                  <a
                    href={`mailto:${contact.email}`}
                    className="link-underline mt-4 inline-block font-display text-h3"
                  >
                    {contact.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="border-t border-line pt-5">
                  <p className="label text-muted">{contact.phoneLabel}</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    dir="ltr"
                    className="link-underline mt-3 inline-block font-display text-h3"
                  >
                    {contact.phone}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="border-t border-line pt-5">
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {contact.socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="label link-underline text-ink"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="border-t border-line pt-5">
                  <p className="label text-muted">{content.hero.location}</p>
                  <p className="mt-3 text-sm text-muted">{page.responseNote}</p>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
