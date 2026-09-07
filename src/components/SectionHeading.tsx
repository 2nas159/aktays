import RevealText from "./motion/RevealText";
import Reveal from "./motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  index?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({ eyebrow, title, lead, index, tone = "light" }: Props) {
  const muted = tone === "dark" ? "text-canvas/55" : "text-muted";
  const soft = tone === "dark" ? "text-canvas/75" : "text-ink-soft";

  return (
    <div className="grid gap-8 border-t border-current/15 pt-6 md:grid-cols-12">
      <div className="md:col-span-3">
        <p className={`label flex items-center gap-3 ${muted}`}>
          {index ? <span className="text-accent">{index}</span> : null}
          {eyebrow}
        </p>
      </div>
      <div className="md:col-span-9">
        <RevealText as="h2" text={title} className="font-display text-h2 block" />
        {lead ? (
          <Reveal delay={0.15}>
            <p className={`mt-6 max-w-2xl text-lead ${soft}`}>{lead}</p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
