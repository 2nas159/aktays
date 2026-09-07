import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getContent } from "@/content";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);

  return (
    <>
      <Preloader word="Aktays" />
      <ScrollProgress />
      <Nav content={content} locale={locale} />

      <main id="top">
        <Hero content={content} />
        <Marquee items={content.marquee} />
        <Services content={content} locale={locale} />
        <Work content={content} locale={locale} />
        <Approach content={content} />
        <Testimonials content={content} />
        <Studio content={content} />
        <Contact content={content} />
      </main>

      <Footer content={content} locale={locale} />
    </>
  );
}
