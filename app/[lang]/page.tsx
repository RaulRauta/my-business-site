import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Lang = "ro" | "en";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Web Design",
      title: "Site-uri clare, moderne și orientate spre clienți.",
      subtitle:
        "Construiesc site-uri care explică rapid ce oferi, inspiră încredere și îi conduc pe vizitatori spre acțiune.",
      cta: "Hai să discutăm",
      secondary: "Vezi serviciile",
      sloganLabel: "Flowcraft concept",
      slogan: "Flow-ul care îți aduce rezultate.",
      explore: "Explorează",
      exploreTitle:
        "Vezi cum îți pot transforma ideea într-un site care vinde.",
      points: [
        "Primul impact decide dacă omul rămâne",
        "Claritatea bate design-ul complicat",
        "Site-ul trebuie să vândă, nu doar să arate bine",
      ],
    },
    en: {
      badge: "Web Design",
      title: "Clear, modern websites built for customers.",
      subtitle:
        "I build websites that explain your offer fast, build trust and guide visitors toward action.",
      cta: "Let’s talk",
      secondary: "View services",
      sloganLabel: "Flowcraft concept",
      slogan: "The flow that brings you results.",
      explore: "Explore",
      exploreTitle: "See exactly what I can build for your business.",
      points: [
        "First impression decides if people stay",
        "Clarity beats complexity",
        "A website should sell, not just look good",
      ],
    },
  }[lang];

  const exploreItems = [
    {
      href: `/${lang}/services`,
      title: lang === "ro" ? "Servicii" : "Services",
      text:
        lang === "ro"
          ? "Site-uri de prezentare, landing pages, redesign, mentenanță și CMS."
          : "Presentation websites, landing pages, redesign, maintenance and CMS.",
    },
    {
      href: `/${lang}/about`,
      title: "About",
      text:
        lang === "ro"
          ? "Află cum a apărut FlowCraft Studio și modul în care construiesc proiectele."
          : "Learn how FlowCraft Studio started and how I approach building projects.",
    },
    {
      href: `/${lang}/process`,
      title: lang === "ro" ? "Cum lucrez" : "Process",
      text:
        lang === "ro"
          ? "Pașii clari prin care transformăm ideea ta într-un site funcțional."
          : "The clear steps that turn your idea into a working website.",
    },
    {
      href: `/${lang}/projects`,
      title: "Projects",
      text:
        lang === "ro"
          ? "Proiecte și concepte construite cu scop, nu doar pentru aspect."
          : "Projects and concepts built with purpose, not just looks.",
    },
    {
      href: `/${lang}/contact`,
      title: "Contact",
      text:
        lang === "ro"
          ? "Trimite-mi detaliile și îți răspund cu o direcție clară."
          : "Send me the details and I’ll reply with a clear direction.",
    },
  ];

  return (
    <>
      <Navbar lang={lang} />

      <main className="px-6 pt-10 pb-24 md:pt-14">
        <section className="mx-auto max-w-7xl">
          {/* HERO */}
          <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-emerald-400/40" />

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.badge}
                </p>
              </div>

              {/* MOBILE / TABLET BRAND CARD */}
              <div className="mt-8 block animate-[heroReveal_0.9s_ease-out_0.28s_both] xl:hidden">
                <div className="relative overflow-hidden rounded-3xl border border-emerald-400/15 bg-black/35 p-6 shadow-[0_0_60px_rgba(52,211,153,0.1)] backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.12),transparent_45%)]" />

                  <div className="pointer-events-none absolute inset-y-0 left-[-60%] w-[70%] animate-[scanShine_5s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-emerald-400/20 bg-black/40 shadow-[0_0_25px_rgba(52,211,153,0.2)]">
                        <img
                          src="/logo-icon.png"
                          alt="Flowcraft logo"
                          className="h-full w-full object-cover scale-125"
                        />
                      </div>

                      <p className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                        Web Growth
                      </p>
                    </div>

                    <div className="mt-8">
                      <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
                        FlowCraft Studio
                      </h2>

                      <p className="mt-5 leading-7 text-zinc-400">
                        {lang === "ro"
                          ? "Structură, design și experiență construite într-un flow clar pentru client."
                          : "Structure, design and experience built into a clear customer flow."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="mt-8 max-w-4xl animate-[heroReveal_0.8s_ease-out_both] text-4xl font-bold tracking-tight text-white md:text-6xl">
                {t.title}
              </h1>

              <p className="mt-6 max-w-2xl animate-[heroReveal_0.8s_ease-out_0.12s_both] text-lg leading-8 text-zinc-300">
                {t.subtitle}
              </p>

              <div className="mt-10 flex animate-[heroReveal_0.8s_ease-out_0.22s_both] flex-col items-start gap-4 sm:flex-row">
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex w-fit items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_50px_rgba(52,211,153,0.5)]"
                >
                  {t.cta}
                </Link>

                <Link
                  href={`/${lang}/services`}
                  className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/[0.08]"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>

            {/* DESKTOP BRAND BANNER */}
            <div className="relative hidden animate-[heroReveal_0.9s_ease-out_0.25s_both] xl:block">
              <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative animate-[softFloat_6s_ease-in-out_infinite] overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-black/35 p-8 shadow-[0_0_80px_rgba(52,211,153,0.12)] backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.14),transparent_40%)]" />

                <div className="pointer-events-none absolute inset-y-0 left-[-60%] w-[70%] animate-[scanShine_5s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-emerald-400/20 bg-black/40 shadow-[0_0_35px_rgba(52,211,153,0.25)]">
                      <img
                        src="/logo-icon.png"
                        alt="Flowcraft logo"
                        className="h-full w-full object-cover scale-125"
                      />
                    </div>

                    <p className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                      Web Growth
                    </p>
                  </div>

                  <div className="mt-16">
                    <p className="text-sm font-semibold uppercase tracking-[0.45em] text-emerald-400/70">
                      Find your Flow
                    </p>

                    <h2 className="mt-4 text-5xl font-black tracking-tight text-white">
                      FlowCraft Studio
                    </h2>

                    <p className="mt-6 max-w-md leading-7 text-zinc-400">
                      {lang === "ro"
                        ? "Structură, design și experiență construite într-un flow clar pentru client."
                        : "Structure, design and experience built into a clear customer flow."}
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-3">
                    {[
                      lang === "ro" ? "Claritate" : "Clarity",
                      "UX",
                      lang === "ro" ? "Conversie" : "Conversion",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-semibold text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="mt-16 rounded-3xl border border-emerald-400/10 bg-black/35 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400/70">
                {t.sloganLabel}
              </p>

              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(52,211,153,0.2)] md:text-4xl">
                {t.slogan}
              </h2>

              <p className="max-w-2xl text-zinc-400">
                {lang === "ro"
                  ? "Design clar. Experiență fluidă. Rezultate reale."
                  : "Clear design. Smooth experience. Real results."}
              </p>
            </div>

            <div className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.explore}
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.exploreTitle}
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {exploreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-3xl border border-emerald-400/10 bg-black/35 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_55px_rgba(52,211,153,0.12)]"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20 transition group-hover:bg-emerald-400 group-hover:text-black">
                      →
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* WHY SECTION */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {t.points.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 text-zinc-300 backdrop-blur-xl transition hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(52,211,153,0.1)]"
              >
                <span className="text-lg text-emerald-400">✦</span>
                <p className="mt-3">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {lang === "ro" ? "Inspirație" : "Inspiration"}
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {lang === "ro"
                ? "Vrei să vezi cum ar putea arăta viitorul tău site?"
                : "Want to see how your future website could look?"}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              {lang === "ro"
                ? "Explorează concepte demo și proiecte în lucru construite pentru business-uri moderne."
                : "Explore demo concepts and work-in-progress projects built for modern businesses."}
            </p>

            <Link
              href={`/${lang}/projects`}
              className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_55px_rgba(52,211,153,0.5)]"
            >
              {lang === "ro" ? "Vezi Projects" : "View Projects"}
            </Link>
          </div>

          {/* FINAL CTA */}
          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold text-white">
              {lang === "ro"
                ? "Ai un business și vrei mai mulți clienți?"
                : "Have a business and want more clients?"}
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              {lang === "ro"
                ? "Construim un site care lucrează pentru tine, nu doar există."
                : "We can build a website that works for you, not just exists."}
            </p>

            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_55px_rgba(52,211,153,0.5)]"
            >
              {t.cta}
            </Link>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
