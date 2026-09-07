import type { Content } from "@/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";

export default function Studio({ content }: { content: Content }) {
  const { studio } = content;

  return (
    <section id="studio" className="shell py-section">
      <SectionHeading eyebrow={studio.eyebrow} title={studio.title} index="04" />

      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3" />
        <div className="flex flex-col gap-6 md:col-span-9 md:max-w-3xl">
          {studio.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
              <p className={index === 0 ? "text-lead text-ink" : "text-lead text-ink-soft"}>
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-px border border-line bg-line md:mt-28 md:grid-cols-4">
        {studio.stats.map((stat, index) => (
          <div key={stat.label} className="bg-canvas p-6 md:p-10">
            <RevealText
              as="p"
              text={stat.value}
              delay={index * 0.08}
              className="font-display text-h2 block leading-none"
            />
            <p className="label mt-4 text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
