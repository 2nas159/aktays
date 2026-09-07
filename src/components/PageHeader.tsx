import RevealText from "./motion/RevealText";
import Reveal from "./motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: { label: string; value: string }[];
};

/** Shared hero for every inner page. Clears the fixed header. */
export default function PageHeader({ eyebrow, title, lead, meta }: Props) {
  return (
    <header className="shell pb-16 pt-36 md:pb-24 md:pt-48">
      <p className="label text-muted">{eyebrow}</p>

      <RevealText
        as="h1"
        text={title}
        className="font-display text-display mt-8 block max-w-5xl"
      />

      {lead ? (
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-lead text-ink-soft">{lead}</p>
        </Reveal>
      ) : null}

      {meta?.length ? (
        <Reveal delay={0.18}>
          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-6">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="label text-muted">{item.label}</dt>
                <dd className="mt-2 text-sm text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      ) : null}
    </header>
  );
}
