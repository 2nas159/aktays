import type { Project } from "@/content/types";

/**
 * Placeholder case-study artwork, generated from each project's two-colour
 * palette. Swap the inner markup for an <Image /> once real photography exists —
 * the wrapper already handles ratio, radius and overflow.
 */
export default function ProjectVisual({
  project,
  index,
  className = "",
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  const [from, to] = project.palette;

  return (
    <div
      className={`relative isolate h-full w-full overflow-hidden ${className}`}
      style={{ backgroundColor: from }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(120% 90% at 20% 15%, ${to}cc 0%, transparent 60%), linear-gradient(155deg, ${from} 0%, ${to} 140%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-1/3 start-[-15%] h-[80%] w-[80%] rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: to }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="label text-white/70">{String(index + 1).padStart(2, "0")}</span>
        <span className="font-display text-4xl leading-none text-white/90">
          {project.client}
        </span>
      </div>
    </div>
  );
}
