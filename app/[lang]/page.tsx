import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Fragment } from "react";

type Lang = "ro" | "en";

type Pillar = {
  label: string;
  title: string;
  text: string;
};

type DemoItem = {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  tags: string[];
  tone: "gold" | "amber";
  preview: {
    line: string;
    detail: string;
  };
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "ro" && lang !== "en") {
    notFound();
  }

  const currentLang = lang as Lang;

  const t = {
    ro: {
      badge: "Digital experience studio",
      title: "Website-uri construite cu claritate, atmosferă și intenție.",
      subtitle:
        "FlowCraftStudio creează experiențe digitale moderne pentru business-uri care vor să fie înțelese rapid, să inspire încredere și să transforme vizitatorii în clienți.",
      cta: "Începe un proiect",
      secondary: "Vezi serviciile",
      motto: "Find your Flow",
      proof: ["Structură clară", "Mobile-first", "Design cu ritm"],
      previewLabel: "Studio direction",
      previewTitle: "Un site trebuie să ghideze, nu doar să impresioneze.",
      previewText:
        "Fiecare secțiune are un rol: să explice, să creeze încredere sau să ducă vizitatorul spre acțiune.",
      pillarsLabel: "Ce construim",
      pillarsTitle: "Mai puțin zgomot vizual. Mai multă direcție.",
      processLabel: "FlowCraft method",
      processTitle:
        "Designul bun începe cu structură, apoi devine atmosferă.",
      processText:
        "Pornim de la business, public și obiectiv. Apoi construim flow-ul, ierarhia vizuală, interacțiunile și detaliile care fac experiența să pară completă.",
      projectsLabel: "Live concepts",
      projectsTitle: "Demo-uri construite ca experiențe reale.",
      projectsText:
        "Concepte explorabile pentru cafenele, restaurante și business-uri moderne, gândite să arate cum poate prinde formă un brand online.",
      finalTitle: "Ai nevoie de un site care să pară la fel de serios ca business-ul tău?",
      finalText:
        "Construim o direcție digitală clară, elegantă și ușor de folosit pe telefon.",
      finalSecondary: "Explorează proiectele",
    },
    en: {
      badge: "Digital experience studio",
      title: "Websites built with clarity, atmosphere and intention.",
      subtitle:
        "FlowCraftStudio creates modern digital experiences for businesses that need to be understood quickly, build trust and turn visitors into customers.",
      cta: "Start a Project",
      secondary: "View services",
      motto: "Find your Flow",
      proof: ["Clear structure", "Mobile-first", "Designed rhythm"],
      previewLabel: "Studio direction",
      previewTitle: "A website should guide, not just impress.",
      previewText:
        "Every section has a role: explain, build trust or guide the visitor toward action.",
      pillarsLabel: "What we build",
      pillarsTitle: "Less visual noise. More direction.",
      processLabel: "FlowCraft method",
      processTitle:
        "Good design starts with structure, then becomes atmosphere.",
      processText:
        "We start with the business, audience and goal. Then we shape the flow, hierarchy, interactions and details that make the experience feel complete.",
      projectsLabel: "Live concepts",
      projectsTitle: "Demos built as real experiences.",
      projectsText:
        "Explorable concepts for cafés, restaurants and modern businesses, designed to show how a brand can take shape online.",
      finalTitle: "Need a website that feels as serious as your business?",
      finalText:
        "We shape a clear, elegant digital direction that works naturally on mobile.",
      finalSecondary: "Explore projects",
    },
  }[currentLang];

  const pillars: Pillar[] = [
    {
      label: "01",
      title: currentLang === "ro" ? "Claritate" : "Clarity",
      text:
        currentLang === "ro"
          ? "Oferta, secțiunile și acțiunile importante trebuie înțelese fără efort."
          : "The offer, sections and key actions should be understood without effort.",
    },
    {
      label: "02",
      title: currentLang === "ro" ? "Atmosferă" : "Atmosphere",
      text:
        currentLang === "ro"
          ? "Un site bun are ritm, contrast și o senzație vizuală memorabilă."
          : "A good website has rhythm, contrast and a memorable visual feeling.",
    },
    {
      label: "03",
      title: "Conversion flow",
      text:
        currentLang === "ro"
          ? "Designul trebuie să ducă natural spre contact, rezervare sau cerere."
          : "The design should naturally guide people toward contact, booking or inquiry.",
    },
  ];

  const demos: DemoItem[] = [
    {
      href: `/${currentLang}/projects/morrow-cafe`,
      eyebrow: currentLang === "ro" ? "Cafenea / flagship concept" : "Café / flagship concept",
      title: "Morrow Café",
      text:
        currentLang === "ro"
          ? "Un demo cald și editorial pentru o cafenea modernă, construit în jurul atmosferei, meniului și rezervării."
          : "A warm editorial demo for a modern café, built around atmosphere, menu and booking.",
      tags: ["Hospitality", "Mobile-first", "Editorial UI"],
      tone: "gold",
      preview: {
        line: currentLang === "ro" ? "Meniu / atmosferă / rezervare" : "Menu / atmosphere / booking",
        detail: currentLang === "ro" ? "Cafenea modernă" : "Modern café",
      },
    },
    {
      href: `/${currentLang}/demo/restaurant`,
      eyebrow:
        currentLang === "ro" ? "Restaurant / fine dining flow" : "Restaurant / fine dining flow",
      title: "Restaurant Concept",
      text:
        currentLang === "ro"
          ? "O structură cinematică pentru restaurante care au nevoie de prezentare clară și rezervare simplă."
          : "A cinematic structure for restaurants that need clear presentation and simple booking.",
      tags: ["Restaurant", "Booking", "Atmosphere"],
      tone: "amber",
      preview: {
        line: currentLang === "ro" ? "Fine dining / booking / experiență" : "Fine dining / booking / experience",
        detail: currentLang === "ro" ? "Restaurant cinematic" : "Cinematic restaurant",
      },
    },
  ];

  return (
    <>
      <Navbar lang={currentLang} />

      <main className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(52,211,153,0.09),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,0.075),transparent_34%),linear-gradient(180deg,rgba(7,17,26,0)_0%,rgba(7,17,26,0.68)_42%,rgba(5,12,20,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-36 h-px bg-linear-to-r from-transparent via-white/12 to-transparent" />

        <section className="relative mx-auto grid max-w-7xl gap-12 pb-10 lg:min-h-[76vh] lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <div className="animate-[revealUp_0.55s_ease-out_both] flex flex-wrap items-center gap-3">
              <span className="h-px w-10 bg-emerald-300/45" />
              <p className="studio-label">{t.badge}</p>
            </div>

            <h1 className="mt-7 max-w-5xl animate-[revealUp_0.55s_ease-out_0.06s_both] text-[clamp(2.55rem,8.5vw,4.85rem)] font-black leading-[0.96] tracking-tight text-white">
              {t.title}
            </h1>

            <p className="mt-7 max-w-2xl animate-[revealUp_0.55s_ease-out_0.12s_both] text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              {t.subtitle}
            </p>

            <div className="mt-8 flex animate-[revealUp_0.55s_ease-out_0.18s_both] flex-wrap gap-2">
              {t.proof.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex animate-[revealUp_0.55s_ease-out_0.24s_both] flex-col gap-3 sm:flex-row">
              <Link
                href={`/${currentLang}/contact`}
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-7 py-3.5 font-semibold text-black shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                {t.cta}
                <span className="ml-2">-&gt;</span>
              </Link>

              <Link
                href={`/${currentLang}/services`}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.065]"
              >
                {t.secondary}
              </Link>
            </div>
          </div>

          <div className="relative animate-[revealUp_0.65s_ease-out_0.14s_both]">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_45%_18%,rgba(52,211,153,0.12),transparent_42%)] blur-3xl" />

            <div className="studio-surface relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-emerald-300/35 to-transparent" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#09141f]/84">
                <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/65" />
                  <span className="ml-2 min-w-0 flex-1 truncate rounded-full border border-white/8 bg-white/[0.035] px-3 py-1.5 text-[11px] text-zinc-500">
                    flowcraftstudio.app
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Image
                          src="/logo-icon.png"
                          alt="FlowCraft Studio logo"
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                          priority
                        />
                      </div>
                      <div>
                        <p className="studio-label text-[0.68rem]">
                          {t.motto}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                          FlowCraftStudio
                        </p>
                      </div>
                    </div>

                    <span className="hidden rounded-full border border-white/8 bg-white/[0.035] px-3 py-2 text-xs text-zinc-500 sm:block">
                      2026
                    </span>
                  </div>

                  <div className="mt-12 max-w-lg">
                    <p className="studio-label">{t.previewLabel}</p>
                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                      {t.previewTitle}
                    </h2>
                    <p className="mt-5 leading-7 text-zinc-400">
                      {t.previewText}
                    </p>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-emerald-300/12 bg-[linear-gradient(135deg,rgba(52,211,153,0.09),rgba(34,211,238,0.04),rgba(255,255,255,0.025))] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/70">
                        Flow map
                      </p>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.45)]" />
                    </div>
                    <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                      {[
                        currentLang === "ro" ? "Prim contact" : "First impression",
                        currentLang === "ro" ? "Încredere" : "Trust",
                        currentLang === "ro" ? "Acțiune" : "Action",
                      ].map((item, index) => (
                        <Fragment key={item}>
                          <div
                            className="rounded-xl border border-white/8 bg-white/[0.045] px-3 py-3 text-center text-[11px] font-semibold text-zinc-300"
                          >
                            {item}
                          </div>
                          {index < 2 && (
                            <div className="h-px w-5 bg-linear-to-r from-emerald-300/20 to-cyan-300/30" />
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {t.proof.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="studio-divider relative mx-auto max-w-7xl" />

        <section className="relative mx-auto mt-20 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="studio-label">{t.pillarsLabel}</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {t.pillarsTitle}
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-zinc-400 lg:ml-auto">
              {t.processText}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="group rounded-[1.5rem] border border-white/8 bg-white/[0.028] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.045]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/70">
                  {pillar.label}
                </p>
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto mt-20 max-w-7xl">
          <div className="studio-surface overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="studio-label">{t.processLabel}</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  {t.processTitle}
                </h2>
                <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
                  {t.processText}
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  currentLang === "ro" ? "Discovery" : "Discovery",
                  currentLang === "ro" ? "Structură" : "Structure",
                  currentLang === "ro" ? "Direcție vizuală" : "Visual direction",
                  currentLang === "ro" ? "Development" : "Development",
                  currentLang === "ro" ? "Polish & launch" : "Polish & launch",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4"
                  >
                    <span className="text-sm font-semibold text-zinc-300">
                      {step}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.22em] text-emerald-300/60">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto mt-20 max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="studio-label">{t.projectsLabel}</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {t.projectsTitle}
              </h2>
            </div>
            <p className="max-w-md leading-7 text-zinc-400">{t.projectsText}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {demos.map((demo) => (
              <Link
                key={demo.href}
                href={demo.href}
                className={`group relative overflow-hidden rounded-[2rem] border bg-white/[0.032] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045] sm:p-7 ${
                  demo.tone === "gold"
                    ? "border-[#d9b46f]/18 hover:border-[#d9b46f]/34"
                    : "border-amber-300/18 hover:border-amber-300/34"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-70 ${
                    demo.tone === "gold"
                      ? "bg-[radial-gradient(circle_at_18%_12%,rgba(217,180,111,0.13),transparent_38%)]"
                      : "bg-[radial-gradient(circle_at_18%_12%,rgba(251,191,36,0.12),transparent_38%)]"
                  }`}
                />
                <div className="relative">
                  <div
                    className={`mb-7 overflow-hidden rounded-[1.35rem] border border-white/8 ${
                      demo.tone === "gold"
                        ? "bg-[#21170f]/70"
                        : "bg-[#1f150a]/70"
                    }`}
                  >
                    <div className="flex items-center gap-2 border-b border-white/8 bg-black/18 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-white/18" />
                      <span className="h-2 w-2 rounded-full bg-white/18" />
                      <span className="h-2 w-2 rounded-full bg-white/18" />
                      <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                        Live preview
                      </span>
                    </div>
                    <div className="relative h-44 overflow-hidden p-4">
                      <div
                        className={`absolute inset-0 transition duration-500 group-hover:scale-[1.025] ${
                          demo.tone === "gold"
                            ? "bg-[radial-gradient(circle_at_22%_12%,rgba(217,180,111,0.22),transparent_34%),linear-gradient(135deg,rgba(217,180,111,0.12),rgba(255,255,255,0.04))]"
                            : "bg-[radial-gradient(circle_at_22%_12%,rgba(251,191,36,0.2),transparent_34%),linear-gradient(135deg,rgba(251,191,36,0.11),rgba(255,255,255,0.04))]"
                        }`}
                      />
                      <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                            {demo.preview.detail}
                          </p>
                          <p className="mt-3 max-w-[13rem] text-xl font-black leading-tight tracking-tight text-white">
                            {demo.title}
                          </p>
                        </div>
                        <div>
                          <div className="h-1.5 w-24 rounded-full bg-white/40" />
                          <div className="mt-2 h-1.5 w-36 rounded-full bg-white/18" />
                          <p className="mt-4 text-xs font-semibold text-white/55">
                            {demo.preview.line}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      {demo.eyebrow}
                    </p>
                    <span className="text-sm font-semibold text-zinc-500 transition group-hover:text-white">
                      Open demo -&gt;
                    </span>
                  </div>

                  <h3 className="mt-10 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {demo.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                    {demo.text}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative mx-auto mt-20 max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-300/16 bg-[linear-gradient(135deg,rgba(52,211,153,0.095),rgba(34,211,238,0.045),rgba(255,255,255,0.025))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.24)] sm:p-8 md:p-10">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {t.finalTitle}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              {t.finalText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${currentLang}/contact`}
                className="rounded-full bg-emerald-300 px-7 py-3.5 text-center font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                {t.cta}
              </Link>

              <Link
                href={`/${currentLang}/projects`}
                className="rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 text-center font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.065]"
              >
                {t.finalSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={currentLang} />
    </>
  );
}
