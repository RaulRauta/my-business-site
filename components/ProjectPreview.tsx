type ProjectPreviewProps = {
  variant: "blog" | "restaurant" | "landing";
};

export default function ProjectPreview({ variant }: ProjectPreviewProps) {
  if (variant === "blog") {
    return (
      <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/40 p-5">
        <div className="mb-5 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>

        <div className="h-5 w-2/3 rounded-full bg-emerald-400/25" />
        <div className="mt-3 h-3 w-1/2 rounded-full bg-white/10" />

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="h-16 rounded-xl bg-emerald-400/10" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-white/15" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "restaurant") {
    return (
      <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/40 p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.16),transparent_45%)]" />

        <div className="relative">
          <div className="mb-5 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>

          <div className="h-6 w-3/4 rounded-full bg-amber-300/25" />
          <div className="mt-3 h-3 w-1/2 rounded-full bg-white/10" />

          <div className="mt-6 grid grid-cols-[1.2fr_0.8fr] gap-4">
            <div className="h-24 rounded-2xl bg-white/[0.06] ring-1 ring-white/10" />
            <div className="grid gap-2">
              <div className="h-7 rounded-xl bg-amber-300/15" />
              <div className="h-7 rounded-xl bg-white/[0.05]" />
              <div className="h-7 rounded-xl bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/40 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.16),transparent_45%)]" />

      <div className="relative">
        <div className="mb-5 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>

        <div className="h-6 w-2/3 rounded-full bg-cyan-400/25" />
        <div className="mt-3 h-3 w-1/2 rounded-full bg-white/10" />

        <div className="mt-6 grid grid-cols-[1fr_0.8fr] gap-4">
          <div>
            <div className="h-8 w-32 rounded-full bg-emerald-400/25" />
            <div className="mt-4 h-3 w-full rounded-full bg-white/10" />
            <div className="mt-2 h-3 w-3/4 rounded-full bg-white/10" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="h-3 w-2/3 rounded-full bg-white/15" />
            <div className="mt-3 h-7 rounded-xl bg-white/[0.06]" />
            <div className="mt-2 h-7 rounded-xl bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  );
}
