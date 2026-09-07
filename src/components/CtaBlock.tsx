import Link from "next/link";
import RevealText from "./motion/RevealText";
import Reveal from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";

type Props = { title: string; lead: string; action: string; href: string };

export default function CtaBlock({ title, lead, action, href }: Props) {
  return (
    <section className="bg-ink py-section text-canvas" data-nav-theme="dark">
      <div className="shell">
        <RevealText
          as="h2"
          text={title}
          className="font-display text-h2 block max-w-4xl"
        />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lead text-canvas/70">{lead}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 inline-block">
            <Magnetic>
              <Link
                href={href}
                data-cursor="true"
                className="group inline-flex items-center gap-4 rounded-full bg-canvas px-8 py-5 text-ink transition-colors duration-500 hover:bg-accent hover:text-canvas"
              >
                <span className="label">{action}</span>
                <span
                  aria-hidden
                  className="flip-rtl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
