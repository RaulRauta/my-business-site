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
              <div className="mx-auto mt-8 w-full max-w-[380px] animate-[heroReveal_0.9s_ease-out_0.28s_both] xl:hidden">
                <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-black/45 p-5 shadow-[0_0_55px_rgba(52,211,153,0.1)] backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.12),transparent_45%)]" />

                  <div className="pointer-events-none absolute inset-y-0 left-[-60%] w-[70%] animate-[scanShine_5s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />

                  <div className="relative pt-4">
                    <div className="flex items-start justify-between">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-black/55 shadow-[0_0_25px_rgba(52,211,153,0.18)]">
                        <img
                          src="/logo-icon.png"
                          alt="Flowcraft logo"
                          className="h-9 w-9 object-contain"
                        />
                      </div>

                      <p className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                        Web Growth
                      </p>
                    </div>

                    <div className="mt-7">
                      <h2 className="mt-3 text-4xl font-black leading-none tracking-tight text-white">
                        FlowCraft Studio
                      </h2>

                      <p className="mt-5 max-w-[280px] text-base leading-7 text-zinc-400">
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
                  <div className="relative min-h-[82px]">
                    <div className="absolute left-1 top-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.35rem] border border-emerald-400/15 bg-black/55 shadow-[0_0_35px_rgba(52,211,153,0.16)]">
                      <img
                        src="/logo-icon.png"
                        alt="Flowcraft logo"
                        className="h-11 w-11 object-contain"
                      />
                    </div>

                    <p className="absolute right-1 top-5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
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

          {/* LIVE DEMOS */}
          <div className="mt-24 overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {lang === "ro" ? "Live Concepts" : "Live Concepts"}
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {lang === "ro"
                ? "Vezi cum ar putea arăta viitorul tău site."
                : "See what your future website could look like."}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              {lang === "ro"
                ? "Concepte interactive și demo-uri construite pentru business-uri moderne."
                : "Interactive concepts and demo experiences built for modern businesses."}
            </p>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              {/* RESTAURANT DEMO */}
              <Link
                href={`/${lang}/demo/restaurant`}
                className="group relative overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-black/50 p-6 transition sm:p-8 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_70px_rgba(52,211,153,0.16)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,140,0,0.12),transparent_40%)]" />

                <div className="relative">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                      Restaurant Demo
                    </span>

                    <span className="text-sm text-zinc-500 transition group-hover:text-emerald-300">
                      Open Live Demo →
                    </span>
                  </div>

                  <div className="mt-10 sm:mt-14">
                    <h3 className="max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                      {lang === "ro"
                        ? "Experiență premium pentru restaurante moderne."
                        : "Premium experience for modern restaurants."}
                    </h3>

                    <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                      {lang === "ro"
                        ? "Concept cinematic construit pentru atmosferă, rezervări și experiență."
                        : "A cinematic concept built for atmosphere, bookings and experience."}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
                    {["Menu", "Reservations", "Atmosphere", "Mobile UX"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </Link>

              {/* COFFEE DEMO */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-6 sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,70,30,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,200,120,0.08),transparent_40%)]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300">
                      Coffee Shop Demo
                    </span>

                    <h3 className="mt-10 text-2xl font-black tracking-tight text-white sm:mt-12 sm:text-3xl">
                      {lang === "ro"
                        ? "Specialty coffee experience."
                        : "Specialty coffee experience."}
                    </h3>

                    <p className="mt-5 leading-8 text-zinc-400">
                      {lang === "ro"
                        ? "Concept cozy & premium construit pentru cafenele moderne."
                        : "A cozy & premium concept built for modern coffee shops."}
                    </p>
                  </div>

                  <div className="mt-10">
                    <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
