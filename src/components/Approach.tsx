import type { Content } from "@/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function Approach({ content }: { content: Content }) {
  const { approach } = content;

  return (
    <section id="approach" className="shell py-section">
      <SectionHeading
        eyebrow={approach.eyebrow}
        title={approach.title}
        lead={approach.lead}
        index="03"
      />

      <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-4">
          {/* Sticky counterweight — keeps a fixed point while the steps scroll past. */}
          <div className="sticky top-28 hidden md:block">
            <p className="font-display text-mega leading-none text-line select-none">
              {approach.steps.length}
            </p>
            <p className="label mt-4 text-muted">{approach.eyebrow}</p>
          </div>
        </div>

        <div className="md:col-span-8">
          {approach.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="border-t border-line py-10 last:border-b md:py-14">
                <div className="flex items-baseline gap-6">
                  <span className="label text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-h3">{step.title}</h3>
                </div>
                <p className="mt-5 max-w-2xl text-lead text-ink-soft md:ms-16">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
