/**
 * "Live demo" pill. `overlay` gives it a solid dark backing for sitting on top
 * of a screenshot, where the default translucent fill would vanish.
 */
export default function LiveBadge({ overlay = false }: { overlay?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center gap-2 rounded-full border border-accent/30 px-2.5 py-1 text-[11px] uppercase tracking-wider text-accent ${
        overlay ? 'bg-black/80 backdrop-blur-sm' : 'bg-accent/[0.06]'
      }`}
    >
      {/* The ping is decorative; motion-safe so it does not animate for
          anyone who has asked the OS for reduced motion. */}
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      Live demo
    </span>
  )
}
