"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type ServicePackage = {
  id: "start" | "growth" | "custom";
  name: string;
  eyebrow: string;
  price: string;
  description: string;
  benefits: string[];
  perfectFor: string;
  included: string[];
  timeline: string;
  extras: string[];
  cta: string;
  featured?: boolean;
};

type ServicesPackagesProps = {
  lang: "ro" | "en";
  packages: ServicePackage[];
  copy: {
    badge: string;
    title: string;
    text: string;
    startingFrom: string;
    mostPopular: string;
    viewDetails: string;
    perfectFor: string;
    included: string;
    timeline: string;
    extras: string;
    startProject: string;
    close: string;
    note: string;
    customPricing: string;
  };
};

export default function ServicesPackages({
  lang,
  packages,
  copy,
}: ServicesPackagesProps) {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(
    null,
  );

  useEffect(() => {
    if (!selectedPackage) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedPackage(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPackage]);

  return (
    <section className="mt-16">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {copy.badge}
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            {copy.title}
          </h2>
        </div>

        <p className="max-w-xl leading-7 text-zinc-400">{copy.text}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {packages.map((pack) => (
          <button
            key={pack.id}
            type="button"
            onClick={() => setSelectedPackage(pack)}
            className={`group relative flex min-h-130 flex-col overflow-hidden rounded-3xl border p-7 text-left backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
              pack.featured
                ? "border-emerald-400/45 bg-emerald-400/8 shadow-[0_0_100px_rgba(52,211,153,0.18)] hover:border-emerald-300 hover:shadow-[0_0_120px_rgba(52,211,153,0.28)]"
                : pack.id === "custom"
                  ? "border-cyan-400/20 bg-black/45 shadow-[0_0_80px_rgba(34,211,238,0.08)] hover:border-cyan-300/50 hover:shadow-[0_0_110px_rgba(34,211,238,0.18)]"
                  : "border-white/10 bg-black/35 shadow-[0_0_70px_rgba(0,0,0,0.25)] hover:border-emerald-400/40 hover:shadow-[0_0_90px_rgba(52,211,153,0.16)]"
            }`}
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(52,211,153,0.16),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.1),transparent_38%)] opacity-70 transition group-hover:opacity-100" />
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-50" />

            <span className="relative z-10 flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-zinc-300">
                {pack.eyebrow}
              </span>

              {pack.featured && (
                <span className="rounded-full bg-emerald-400 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-black shadow-[0_0_26px_rgba(52,211,153,0.45)]">
                  {copy.mostPopular}
                </span>
              )}
            </span>

            <span className="relative z-10 mt-8 block">
              <span className="text-3xl font-bold tracking-tight text-white">
                {pack.name}
              </span>

              <span className="mt-5 block text-sm uppercase tracking-[0.25em] text-zinc-500">
                {pack.id === "custom" ? copy.customPricing : copy.startingFrom}
              </span>

              <span className="mt-1 block text-4xl font-black tracking-tight text-white">
                {pack.price}
              </span>

              <span className="mt-6 block min-h-21 leading-7 text-zinc-400">
                {pack.description}
              </span>
            </span>

            <span className="relative z-10 mt-7 grid gap-3">
              {pack.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="flex gap-3 text-sm text-zinc-300"
                >
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span>{benefit}</span>
                </span>
              ))}
            </span>

            <span className="relative z-10 mt-auto pt-8">
              <span
                className={`block rounded-full px-6 py-3 text-center font-semibold transition ${
                  pack.featured
                    ? "bg-emerald-400 text-black shadow-[0_0_32px_rgba(52,211,153,0.28)] group-hover:bg-emerald-300"
                    : "border border-white/10 bg-white/4 text-white group-hover:border-emerald-400/40 group-hover:bg-white/8"
                }`}
              >
                {copy.viewDetails}
              </span>
            </span>
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-500">{copy.note}</p>

      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-1000 flex items-end justify-center bg-black/75 px-4 py-4 backdrop-blur-xl sm:items-center sm:py-8"
            onMouseDown={() => setSelectedPackage(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-4xl border border-emerald-400/20 bg-[#07111c]/95 p-5 shadow-[0_0_120px_rgba(52,211,153,0.2)] sm:p-8"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(52,211,153,0.18),transparent_34%),radial-gradient(circle_at_90%_25%,rgba(34,211,238,0.14),transparent_36%)]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                      {selectedPackage.eyebrow}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
                      {selectedPackage.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    aria-label={copy.close}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-xl text-white transition hover:border-emerald-400/40 hover:bg-white/8"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm font-semibold text-emerald-400">
                      {copy.perfectFor}
                    </p>
                    <p className="mt-3 leading-7 text-zinc-300">
                      {selectedPackage.perfectFor}
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/4 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {copy.timeline}
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        {selectedPackage.timeline}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm font-semibold text-emerald-400">
                      {copy.included}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedPackage.included.map((item) => (
                        <p
                          key={item}
                          className="flex gap-3 text-sm text-zinc-300"
                        >
                          <span className="text-emerald-400">✓</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-white/4 p-5">
                  <p className="text-sm font-semibold text-emerald-400">
                    {copy.extras}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedPackage.extras.map((extra) => (
                      <span
                        key={extra}
                        className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-300"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/${lang}/contact?package=${selectedPackage.id}&source=services`}
                    className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300"
                  >
                    {copy.startProject}
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    className="rounded-full border border-white/10 bg-white/4 px-7 py-3 font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/8"
                  >
                    {copy.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
