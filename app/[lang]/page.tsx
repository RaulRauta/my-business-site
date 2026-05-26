import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

type Lang = "ro" | "en";

type ExploreItem = {
  href: string;
  title: string;
  text: string;
  label: string;
};

type DemoItem = {
  href: string;
  badge: string;
  title: string;
  text: string;
  tags: string[];
  tone: "amber" | "gold";
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
      badge: "Digital Experience Studio",
      title: "Experiențe digitale construite cu claritate, ritm și atmosferă.",
      subtitle:
        "FlowCraftStudio creează website-uri moderne care prezintă business-ul clar, inspiră încredere și transformă prima impresie într-un motiv de contact.",
      cta: "Începe un proiect",
      secondary: "Vezi serviciile",
      heroNote: "Digital experiences / mobile-first / conversion flow",
      motto: "Find your Flow",
      previewLabel: "Find your Flow",
      previewTitle: "Website experience",
      previewText:
        "Structură, design și interacțiuni rafinate într-un flow clar pentru client.",
      previewStats: ["Claritate", "Mobile-first", "Polish"],
      sloganLabel: "FlowCraft signature",
      slogan: "Un site bun nu doar arată bine. Se simte intenționat.",
      sloganText:
        "Fiecare secțiune are un rol: prezintă, construiește încredere sau conduce vizitatorul spre acțiune.",
      explore: "Explorează",
      exploreTitle:
        "Un flow complet pentru un business care vrea să pară serios online.",
      points: [
        "Prima impresie decide dacă oamenii rămân.",
        "Claritatea face oferta ușor de înțeles.",
        "Mobile-ul trebuie să se simtă natural, nu doar redimensionat.",
      ],
      demosBadge: "Live concepts",
      demosTitle: "Demo-uri care arată cum poate prinde formă un brand.",
      demosText:
        "Concepte interactive construite pentru restaurante, cafenele și business-uri moderne care au nevoie de prezentare, atmosferă și acțiune.",
      finalTitle: "Ai un business care merită o prezență online mai bună?",
      finalText:
        "Construim o experiență digitală care lucrează pentru tine, nu doar există pe internet.",
      finalSecondary: "Explorează proiectele",
    },
    en: {
      badge: "Digital Experience Studio",
      title: "Digital experiences built with clarity, rhythm and atmosphere.",
      subtitle:
        "FlowCraftStudio creates modern websites that present your business clearly, build trust and turn the first impression into a reason to get in touch.",
      cta: "Start a Project",
      secondary: "View services",
      heroNote: "Digital experiences / mobile-first / conversion flow",
      motto: "Find your Flow",
      previewLabel: "Find your Flow",
      previewTitle: "Website experience",
      previewText:
        "Structure, design and refined interactions shaped into a clear customer flow.",
      previewStats: ["Clarity", "Mobile-first", "Polish"],
      sloganLabel: "FlowCraft signature",
      slogan: "A good website does not just look polished. It feels intentional.",
      sloganText:
        "Every section has a role: present, build trust or guide the visitor toward action.",
      explore: "Explore",
      exploreTitle:
        "A complete flow for a business that wants to feel serious online.",
      points: [
        "First impression decides if people stay.",
        "Clarity makes the offer easy to understand.",
        "Mobile should feel natural, not merely resized.",
      ],
      demosBadge: "Live concepts",
      demosTitle: "Demos that show how a brand can take shape.",
      demosText:
        "Interactive concepts built for restaurants, cafés and modern businesses that need presentation, atmosphere and action.",
      finalTitle: "Have a business that deserves a better online presence?",
      finalText:
        "We build a digital experience that works for you, not just exists on the internet.",
      finalSecondary: "Explore projects",
    },
  }[currentLang];

  const exploreItems: ExploreItem[] = [
    {
      href: `/${currentLang}/services`,
      title: currentLang === "ro" ? "Pachete clare" : "Clear packages",
      label: currentLang === "ro" ? "Servicii" : "Services",
      text:
        currentLang === "ro"
          ? "Alege o direcție potrivită pentru etapa business-ului tău."
          : "Choose a direction that fits the current stage of your business.",
    },
    {
      href: `/${currentLang}/process`,
      title:
        currentLang === "ro" ? "Proces structurat" : "Structured process",
      label: currentLang === "ro" ? "Proces" : "Process",
      text:
        currentLang === "ro"
          ? "Colaborare clară, de la discovery până la lansare."
          : "Clear collaboration, from discovery to launch.",
    },
    {
      href: `/${currentLang}/projects`,
      title:
        currentLang === "ro" ? "Demo-uri explorabile" : "Explorable demos",
      label: "Projects",
      text:
        currentLang === "ro"
          ? "Vezi concepte live create pentru business-uri reale."
          : "View live concepts crafted for real business use cases.",
    },
    {
      href: `/${currentLang}/about`,
      title:
        currentLang === "ro" ? "Perspectivă de studio" : "Studio perspective",
      label: "About",
      text:
        currentLang === "ro"
          ? "Află cum sunt gândite claritatea, atmosfera și detaliile."
          : "See how clarity, atmosphere and details are approached.",
    },
  ];

  const demos: DemoItem[] = [
    {
      href: `/${currentLang}/projects/morrow-cafe`,
      badge: "Flagship Demo",
      title:
        currentLang === "ro"
          ? "Morrow Café / hospitality cinematic"
          : "Morrow Café / hospitality cinematic",
      text:
        currentLang === "ro"
          ? "Un demo cald, editorial, construit pentru atmosferă, meniu și rezervare."
          : "A warm editorial demo built around atmosphere, menu and booking.",
      tags: ["Hospitality", "Refined UI", "Mobile-first"],
      tone: "gold",
    },
    {
      href: `/${currentLang}/demo/restaurant`,
      badge: "Live Demo",
      title:
        currentLang === "ro"
          ? "Restaurant Concept / fine dining flow"
          : "Restaurant Concept / fine dining flow",
      text:
        currentLang === "ro"
          ? "O structură cinematică pentru restaurante care vor prezentare și conversie."
          : "A cinematic structure for restaurants that need presentation and conversion.",
      tags: ["Restaurant", "Bookings", "Experience"],
      tone: "amber",
    },
  ];

  return (
    <>
      <Navbar lang={currentLang} />

      <main className="relative overflow-hidden px-6 pb-24 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(52,211,153,0.14),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.1),transparent_32%),linear-gradient(180deg,rgba(8,24,36,0)_0%,rgba(7,18,28,0.82)_42%,rgba(6,16,26,0.95)_100%)]" />
        <div className="pointer-events-none absolute left-0 top-40 h-px w-full bg-linear-to-r from-transparent via-emerald-400/24 to-transparent" />
        <div className="pointer-events-none absolute right-[-15%] top-28 h-80 w-[46rem] rotate-[-18deg] bg-linear-to-r from-transparent via-cyan-300/10 to-transparent blur-3xl" />

        <section className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <div>
              <div className="animate-[revealUp_0.8s_ease-out_both] flex items-center gap-4">
                <span className="h-px w-10 bg-emerald-400/35" />
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.badge}
                </p>
              </div>

              <h1 className="mt-8 max-w-5xl animate-[revealUp_0.9s_ease-out_0.08s_both] text-5xl font-black leading-[0.94] tracking-tight text-white md:text-7xl">
                {t.title}
              </h1>

              <p className="mt-7 max-w-2xl animate-[revealUp_0.9s_ease-out_0.18s_both] text-lg leading-8 text-zinc-300 md:text-xl">
                {t.subtitle}
              </p>

              <div className="mt-9 flex animate-[revealUp_0.9s_ease-out_0.28s_both] flex-wrap gap-3">
                <span className="rounded-full border border-emerald-400/14 bg-emerald-400/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  {t.heroNote}
                </span>

              </div>

              <div className="mt-10 flex animate-[revealUp_0.9s_ease-out_0.36s_both] flex-col items-start gap-4 sm:flex-row">
                <Link
                  href={`/${currentLang}/contact`}
                  className="group inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-7 py-3.5 text-center font-semibold text-black shadow-[0_0_28px_rgba(52,211,153,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_0_46px_rgba(52,211,153,0.24)] sm:w-fit"
                >
                  {t.cta}
                  <span className="ml-2 transition group-hover:translate-x-1">
                    -&gt;
                  </span>
                </Link>

                <Link
                  href={`/${currentLang}/services`}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-center font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/22 hover:bg-white/[0.08] sm:w-fit"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>

            <div className="relative animate-[revealUp_1s_ease-out_0.22s_both]">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-emerald-400/12 via-cyan-300/8 to-transparent blur-3xl" />
              <div className="relative animate-[studioFloat_7s_ease-in-out_infinite] overflow-hidden rounded-[2rem] border border-emerald-400/16 bg-emerald-400/7 p-4 shadow-[0_0_78px_rgba(52,211,153,0.1)] backdrop-blur-xl md:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(52,211,153,0.16),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.12),transparent_42%)]" />
                <div className="pointer-events-none absolute inset-y-0 left-[-70%] w-[60%] animate-[signatureSweep_6s_ease-in-out_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent blur-2xl" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/12 bg-[#071824]/82">
                  <div className="flex items-center gap-2 border-b border-cyan-300/10 bg-cyan-300/7 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    <div className="ml-3 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-500">
                      flowcraftstudio.app
                    </div>
                  </div>

                  <div className="relative p-5 md:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/16 bg-emerald-400/8 shadow-[0_0_22px_rgba(52,211,153,0.12)]">
                          <Image
                            src="/logo-icon.png"
                            alt="Flowcraft logo"
                            width={36}
                            height={36}
                            className="h-9 w-9 object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                            {t.previewLabel}
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            FlowCraftStudio
                          </p>
                        </div>
                      </div>

                      <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-400 sm:block">
                        2026
                      </div>
                    </div>

                    <div className="mt-14">
                      <h2 className="max-w-md text-4xl font-black leading-none tracking-tight text-white md:text-5xl">
                        {t.previewTitle}
                      </h2>
                      <p className="mt-5 max-w-md leading-7 text-zinc-400">
                        {t.previewText}
                      </p>
                    </div>

                    <div className="mt-9 grid grid-cols-3 gap-3">
                      {t.previewStats.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center text-xs font-semibold text-zinc-300 md:text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-20">
            <div className="absolute inset-x-0 -top-8 h-px bg-linear-to-r from-transparent via-emerald-400/14 to-transparent" />
            <div className="rounded-[2rem] border border-emerald-400/12 bg-emerald-400/6 p-7 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400/70">
                {t.sloganLabel}
              </p>

              <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {t.slogan}
                </h2>

                <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                  {t.sloganText}
                </p>
              </div>
            </div>
          </div>

          <section className="relative mt-24">
            <div className="pointer-events-none absolute inset-x-0 top-12 h-px bg-linear-to-r from-transparent via-cyan-300/15 to-transparent" />
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.explore}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.exploreTitle}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {exploreItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group animate-[revealUp_0.8s_ease-out_both] rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-emerald-400/28 hover:bg-emerald-400/8 hover:shadow-[0_0_54px_rgba(52,211,153,0.1)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400/80">
                      {item.label}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-zinc-400 transition group-hover:border-emerald-400/22 group-hover:text-emerald-300">
                      -&gt;
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="relative mt-24 grid gap-5 md:grid-cols-3">
            {t.points.map((point, index) => (
              <div
                key={point}
                className="group rounded-3xl border border-cyan-300/12 bg-cyan-300/5 p-6 text-zinc-300 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/24 hover:shadow-[0_0_42px_rgba(34,211,238,0.09)]"
              >
                <div className="mb-5 h-10 w-10 rounded-2xl border border-emerald-400/14 bg-emerald-400/6 shadow-[0_0_20px_rgba(52,211,153,0.06)] transition group-hover:bg-emerald-400/12" />
                <p className="text-lg leading-8">{point}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                  0{index + 1}
                </p>
              </div>
            ))}
          </section>

          <section className="relative mt-24 overflow-hidden rounded-[2rem] border border-cyan-300/12 bg-cyan-300/5 p-7 shadow-[0_0_76px_rgba(34,211,238,0.08)] backdrop-blur-xl md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/20 to-transparent" />
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.demosBadge}
                </p>
                <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {t.demosTitle}
                </h2>
              </div>

              <p className="max-w-md leading-7 text-zinc-400">{t.demosText}</p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              {demos.map((demo) => (
                <Link
                  key={demo.href}
                  href={demo.href}
                  className={`group relative overflow-hidden rounded-[2rem] border bg-[#071824]/72 p-6 shadow-[0_0_70px_rgba(52,211,153,0.06)] transition duration-500 hover:-translate-y-1.5 sm:p-8 ${
                    demo.tone === "gold"
                      ? "border-[#d9b46f]/20 hover:border-[#d9b46f]/45 hover:shadow-[0_0_95px_rgba(217,180,111,0.14)]"
                      : "border-amber-300/20 hover:border-amber-300/45 hover:shadow-[0_0_95px_rgba(251,191,36,0.13)]"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 ${
                      demo.tone === "gold"
                        ? "bg-[radial-gradient(circle_at_25%_15%,rgba(217,180,111,0.17),transparent_36%)]"
                        : "bg-[radial-gradient(circle_at_25%_15%,rgba(251,191,36,0.16),transparent_36%)]"
                    }`}
                  />

                  <div className="relative">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <span
                        className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] ${
                          demo.tone === "gold"
                            ? "border-[#d9b46f]/20 bg-[#d9b46f]/10 text-[#f3d19c]"
                            : "border-amber-300/20 bg-amber-300/10 text-amber-200"
                        }`}
                      >
                        {demo.badge}
                      </span>
                      <span className="text-sm font-semibold text-zinc-500 transition group-hover:text-white">
                        Open Live Demo -&gt;
                      </span>
                    </div>

                    <div className="mt-12">
                      <h3 className="max-w-2xl text-3xl font-black tracking-tight text-white md:text-5xl">
                        {demo.title}
                      </h3>
                      <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                        {demo.text}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {demo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
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

          <section className="relative mt-24 overflow-hidden rounded-[2rem] border border-emerald-400/14 bg-emerald-400/6 p-8 shadow-[0_0_76px_rgba(52,211,153,0.09)] backdrop-blur-xl md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(52,211,153,0.09),rgba(34,211,238,0.055),transparent)]" />
            <div className="relative">
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.finalTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                {t.finalText}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/${currentLang}/contact`}
                  className="rounded-full bg-emerald-400 px-7 py-3.5 text-center font-semibold text-black shadow-[0_0_28px_rgba(52,211,153,0.14)] transition hover:bg-emerald-300 hover:shadow-[0_0_44px_rgba(52,211,153,0.24)]"
                >
                  {t.cta}
                </Link>

                <Link
                  href={`/${currentLang}/projects`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-center font-semibold text-white transition hover:border-emerald-400/22 hover:bg-white/[0.08]"
                >
                  {t.finalSecondary}
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer lang={currentLang} />
    </>
  );
}
