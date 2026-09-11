type ProjectPreviewProps = {
  variant: "blog" | "cafe" | "restaurant" | "landing" | "studio";
  label?: string;
  size?: "card" | "featured";
};

const variantStyles = {
  blog: {
    glow: "rgba(52,211,153,0.08)",
    accent: "bg-emerald-400/14",
    text: "text-emerald-300/70",
  },
  cafe: {
    glow: "rgba(217,180,111,0.2)",
    accent: "bg-[#d9b46f]/25",
    text: "text-[#f3d19c]/75",
  },
  restaurant: {
    glow: "rgba(251,191,36,0.2)",
    accent: "bg-amber-300/25",
    text: "text-amber-200/75",
  },
  landing: {
    glow: "rgba(34,211,238,0.16)",
    accent: "bg-cyan-400/25",
    text: "text-cyan-300/75",
  },
  studio: {
    glow: "rgba(163,180,141,0.18)",
    accent: "bg-[#a8b897]/30",
    text: "text-[#cbd8be]/75",
  },
};

export default function ProjectPreview({
  variant,
  label,
  size = "card",
}: ProjectPreviewProps) {
  const styles = variantStyles[variant];
  const height = size === "featured" ? "h-[22rem] md:h-[26rem]" : "h-56";

  return (
    <div
      className={`relative ${height} overflow-hidden border-b border-white/10 bg-[#07111a]/72`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 68% 28%, ${styles.glow}, transparent 45%)`,
        }}
      />

      <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/55" />

        <div className="ml-3 h-6 flex-1 rounded-full border border-white/10 bg-white/4" />

        {label && (
          <span
            className={`hidden text-[10px] font-semibold uppercase tracking-[0.22em] ${styles.text} sm:inline`}
          >
            {label}
          </span>
        )}
      </div>

      <div className="relative p-5 md:p-6">
        <div className="relative transition duration-500 group-hover:-translate-y-0.5">
          <div className={`h-6 w-3/4 rounded-full ${styles.accent}`} />
          <div className="mt-3 h-3 w-1/2 rounded-full bg-white/10" />

          {variant === "blog" && (
            <div className="mt-7 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/4 p-3"
                >
                  <div className="h-14 rounded-xl bg-emerald-400/6" />
                  <div className="mt-3 h-2 w-3/4 rounded-full bg-white/15" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          )}

          {(variant === "cafe" || variant === "restaurant") && (
            <div className="mt-7 grid grid-cols-[1.2fr_0.8fr] gap-4">
              <div className="relative h-28 overflow-hidden rounded-2xl border border-white/10 bg-white/6">
                <div
                  className={`absolute inset-x-0 bottom-0 h-16 ${styles.accent}`}
                />
                <div className="absolute left-4 top-4 h-3 w-20 rounded-full bg-white/20" />
                <div className="absolute bottom-4 left-4 h-8 w-24 rounded-full bg-black/35" />
              </div>

              <div className="grid gap-2">
                <div className={`h-8 rounded-xl ${styles.accent}`} />
                <div className="h-8 rounded-xl bg-white/6" />
                <div className="h-8 rounded-xl bg-white/6" />
              </div>
            </div>
          )}

          {variant === "landing" && (
            <div className="mt-7 grid grid-cols-[1fr_0.85fr] gap-4">
              <div>
                <div className="h-9 w-32 rounded-full bg-emerald-400/14" />
                <div className="mt-4 h-3 w-full rounded-full bg-white/10" />
                <div className="mt-2 h-3 w-3/4 rounded-full bg-white/10" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/4 p-3">
                <div className="h-3 w-2/3 rounded-full bg-white/15" />
                <div className="mt-3 h-8 rounded-xl bg-white/6" />
                <div className="mt-2 h-8 rounded-xl bg-white/6" />
              </div>
            </div>
          )}

          {variant === "studio" && (
            <div className="mt-7 grid grid-cols-[0.85fr_1.15fr] gap-4">
              <div className="grid gap-2">
                <div className="h-8 rounded-xl bg-white/[0.07]" />
                <div className={`h-8 rounded-xl ${styles.accent}`} />
                <div className="h-8 rounded-xl bg-white/[0.07]" />
              </div>

              <div className="h-28 rounded-2xl border border-white/10 bg-linear-to-br from-white/10 to-[#a8b897]/20" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
