import type { Content } from "@/content";
import RevealText from "./motion/RevealText";
import Reveal from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";

export default function Contact({ content }: { content: Content }) {
  const { contact } = content;

  return (
    <section id="contact" className="shell py-section">
      <p className="label text-muted">{contact.eyebrow}</p>

      <RevealText
        as="h2"
        text={contact.title}
        className="font-display text-display mt-8 block max-w-5xl"
      />

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="max-w-xl text-lead text-ink-soft">{contact.lead}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 inline-block">
              <Magnetic>
                <a
                  href={`mailto:${contact.email}`}
                  data-cursor="true"
                  className="group inline-flex items-center gap-4 rounded-full bg-ink px-8 py-5 text-canvas transition-colors duration-500 hover:bg-accent"
                >
                  <span className="label">{contact.cta}</span>
                  <span
                    aria-hidden
                    className="flip-rtl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 md:col-span-5">
          <div className="border-t border-line pt-5">
            <p className="label text-muted">E-mail</p>
            <a
              href={`mailto:${contact.email}`}
              className="link-underline mt-2 inline-block font-display text-h3"
            >
              {contact.email}
            </a>
          </div>

          <div className="border-t border-line pt-5">
            <p className="label text-muted">{contact.phoneLabel}</p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="link-underline mt-2 inline-block font-display text-h3"
              dir="ltr"
            >
              {contact.phone}
            </a>
          </div>

          <div className="border-t border-line pt-5">
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
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
        </div>
      </div>
    </section>
  );
}
