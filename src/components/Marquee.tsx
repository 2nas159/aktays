import type { Content } from "@/content";

/**
 * Seamless ticker. The track holds the list twice and translates exactly -50%,
 * so the loop point is invisible.
 */
export default function Marquee({ items }: { items: Content["marquee"] }) {
  const sequence = [...items, ...items];

  return (
    <div className="marquee-host border-y border-line py-6 select-none overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap will-change-transform">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="font-display text-h3 text-ink-soft">{item}</span>
            <span aria-hidden className="text-accent text-lg">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
