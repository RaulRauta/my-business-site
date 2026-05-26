import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";

type Lang = "ro" | "en";

type JourneyStep = {
  number: string;
  title: string;
  kicker: string;
  text: string;
  points: string[];
};

type Expectation = {
  title: string;
  text: string;
};

type Principle = {
  title: string;
  text: string;
};

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Proces",
      title: "Fiecare experiență memorabilă începe cu un proces clar.",
      subtitle:
        "Construim site-uri prin colaborare, structură și atenție la detalii, de la prima conversație până la lansare.",
      cta: "Începe un proiect",
      secondary: "Vezi proiectele",

      studioCard: {
        badge: "FlowCraftStudio method",
        title: "Un workflow de studio, nu o listă grăbită de task-uri.",
        text: "Fiecare etapă are un rol: să clarifice, să construiască încredere și să ducă proiectul mai aproape de o experiență digitală completă.",
        items: ["strategie", "claritate", "design", "polish"],
      },

      intro: {
        badge: "Filosofie",
        title: "Mai mult decât construirea unui site.",
        text: "Un site bun nu înseamnă doar pagini frumoase. Înseamnă branding coerent, experiență pentru utilizator, structură orientată spre conversie, prezentare clară, încredere și detalii care se simt bine pe mobil.",
        highlights: [
          "Branding și prezentare",
          "Experiență mobile-first",
          "Structură pentru conversie",
          "Detalii finisate",
        ],
      },

      journey: {
        badge: "Journey",
        title: "Cum arată colaborarea, pas cu pas.",
        text: "Procesul este gândit ca o călătorie clară. Știi ce se întâmplă, de ce se întâmplă și ce rol are fiecare etapă în rezultatul final.",
        steps: [
          {
            number: "01",
            title: "Discovery & Vision",
            kicker: "Înțelegem direcția",
            text: "Începem cu business-ul, obiectivele, publicul, stilul dorit și lucrurile care fac oferta ta diferită.",
            points: [
              "obiective clare",
              "public țintă",
              "direcție de stil",
              "puncte de diferențiere",
            ],
          },
          {
            number: "02",
            title: "Structure & Planning",
            kicker: "Construim arhitectura",
            text: "Planificăm paginile, secțiunile, mesajele și flow-ul utilizatorului, cu gândire mobile-first de la început.",
            points: [
              "pagini și secțiuni",
              "direcție de conținut",
              "flow pentru utilizator",
              "arhitectură clară",
            ],
          },
          {
            number: "03",
            title: "Design Direction",
            kicker: "Dăm formă atmosferei",
            text: "Stabilim direcția vizuală: tipografie, spațiere, culori, ritm și senzația interactivă a site-ului.",
            points: [
              "identitate vizuală",
              "tipografie",
              "spacing",
              "atmosferă",
            ],
          },
          {
            number: "04",
            title: "Development",
            kicker: "Transformăm direcția în produs",
            text: "Implementăm site-ul responsive, cu performanță bună, interacțiuni fluide, animații moderne și structură optimizată.",
            points: [
              "implementare responsive",
              "performanță",
              "interacțiuni fluide",
              "optimizare",
            ],
          },
          {
            number: "05",
            title: "Feedback & Refinement",
            kicker: "Rafinăm până se simte complet",
            text: "Revizuim împreună, ajustăm secțiuni, rafinăm detalii, îmbunătățim interacțiuni și facem experiența să pară finisată.",
            points: [
              "review colaborativ",
              "detalii vizuale",
              "secțiuni îmbunătățite",
              "polish final",
            ],
          },
          {
            number: "06",
            title: "Launch & Support",
            kicker: "Pregătim lansarea",
            text: "Facem verificările finale, publicăm site-ul, pregătim lansarea și discutăm următorii pași pentru scalare.",
            points: [
              "deployment",
              "testare finală",
              "ghidare post-lansare",
              "scalabilitate",
            ],
          },
        ] as JourneyStep[],
      },

      expectations: {
        badge: "Ce poți aștepta",
        title: "O colaborare structurată, clară și atentă la detalii.",
        items: [
          {
            title: "Comunicare clară",
            text: "Știi unde suntem în proiect, ce urmează și ce decizii trebuie luate.",
          },
          {
            title: "Workflow transparent",
            text: "Fiecare etapă are un scop și contribuie direct la calitatea rezultatului final.",
          },
          {
            title: "Abordare mobile-first",
            text: "Experiența pe telefon este tratată ca o prioritate, nu ca o adaptare rapidă.",
          },
          {
            title: "Atenție la detalii",
            text: "Spacing, contraste, microinteracțiuni și ritm vizual sunt rafinate atent.",
          },
          {
            title: "Experiențe rapide și moderne",
            text: "Structură curată, încărcare rapidă și o navigare care se simte naturală.",
          },
          {
            title: "Colaborare flexibilă",
            text: "Procesul rămâne structurat, dar se adaptează la nevoile reale ale proiectului.",
          },
        ] as Expectation[],
      },

      why: {
        badge: "De ce contează",
        title:
          "Structura schimbă felul în care oamenii îți percep business-ul.",
        text: "Utilizatorii judecă rapid. Un site grăbit poate părea neclar, generic sau nesigur. Un proces bun creează o experiență coerentă, în care brandul, mesajul, mobilul și detaliile lucrează împreună.",
        principles: [
          {
            title: "Brandul se simte în detalii",
            text: "Fonturile, spațiul, ritmul și tonul vizual afectează imediat percepția.",
          },
          {
            title: "Mobilul decide prima impresie",
            text: "Pentru mulți vizitatori, telefonul este prima interacțiune reală cu business-ul.",
          },
          {
            title: "Claritatea creează încredere",
            text: "O structură simplă și bine gândită ajută oamenii să înțeleagă repede de ce să te aleagă.",
          },
        ] as Principle[],
      },

      final: {
        title: "Hai să construim ceva ce clienții tăi își amintesc.",
        text: "FlowCraftStudio creează experiențe digitale construite să îți reprezinte business-ul la cel mai bun nivel.",
        primary: "Începe un proiect",
        secondary: "Vezi proiectele",
      },
    },

    en: {
      badge: "Process",
      title: "Every memorable experience starts with a clear process.",
      subtitle:
        "We build websites through collaboration, structure and attention to detail, from the first conversation to launch.",
      cta: "Start a project",
      secondary: "View projects",

      studioCard: {
        badge: "FlowCraftStudio method",
        title: "A studio workflow, not a rushed checklist.",
        text: "Every stage has a role: clarify, build trust and move the project closer to a complete digital experience.",
        items: ["strategy", "clarity", "design", "polish"],
      },

      intro: {
        badge: "Philosophy",
        title: "More than just building a website.",
        text: "A strong website is not just a set of good-looking pages. It means coherent branding, user experience, conversion-focused structure, clear presentation, trust and details that feel right on mobile.",
        highlights: [
          "Branding and presentation",
          "Mobile-first experience",
          "Conversion structure",
          "Polished details",
        ],
      },

      journey: {
        badge: "Journey",
        title: "How the collaboration works, step by step.",
        text: "The process is shaped as a clear journey. You know what happens, why it happens and how each stage contributes to the final result.",
        steps: [
          {
            number: "01",
            title: "Discovery & Vision",
            kicker: "Understanding the direction",
            text: "We start with the business, goals, audience, desired style and what makes your offer different.",
            points: [
              "clear goals",
              "target audience",
              "style direction",
              "points of difference",
            ],
          },
          {
            number: "02",
            title: "Structure & Planning",
            kicker: "Building the architecture",
            text: "We plan the pages, sections, messages and user flow, with mobile-first thinking from the start.",
            points: [
              "pages and sections",
              "content direction",
              "user flow",
              "clear architecture",
            ],
          },
          {
            number: "03",
            title: "Design Direction",
            kicker: "Shaping the atmosphere",
            text: "We define the visual direction: typography, spacing, colors, rhythm and the interactive feeling of the website.",
            points: ["visual identity", "typography", "spacing", "atmosphere"],
          },
          {
            number: "04",
            title: "Development",
            kicker: "Turning direction into product",
            text: "We implement the responsive website with good performance, smooth interactions, modern animations and optimized structure.",
            points: [
              "responsive implementation",
              "performance",
              "smooth interactions",
              "optimization",
            ],
          },
          {
            number: "05",
            title: "Feedback & Refinement",
            kicker: "Refining until it feels complete",
            text: "We review together, adjust sections, polish details, improve interactions and make the experience feel finished.",
            points: [
              "collaborative review",
              "visual details",
              "improved sections",
              "final polish",
            ],
          },
          {
            number: "06",
            title: "Launch & Support",
            kicker: "Preparing the launch",
            text: "We run final checks, publish the website, prepare the launch and discuss the next steps for future scaling.",
            points: [
              "deployment",
              "final testing",
              "post-launch guidance",
              "scalability",
            ],
          },
        ] as JourneyStep[],
      },

      expectations: {
        badge: "What clients can expect",
        title: "A structured collaboration with clarity and care.",
        items: [
          {
            title: "Clear communication",
            text: "You know where the project stands, what comes next and which decisions need to be made.",
          },
          {
            title: "Transparent workflow",
            text: "Every stage has a purpose and contributes directly to the quality of the final result.",
          },
          {
            title: "Mobile-first approach",
            text: "The phone experience is treated as a priority, not as a quick adjustment.",
          },
          {
            title: "Attention to detail",
            text: "Spacing, contrast, microinteractions and visual rhythm are carefully refined.",
          },
          {
            title: "Fast modern experiences",
            text: "Clean structure, fast loading and navigation that feels natural.",
          },
          {
            title: "Flexible collaboration",
            text: "The process stays structured, but adapts to the real needs of the project.",
          },
        ] as Expectation[],
      },

      why: {
        badge: "Why it matters",
        title: "Structure changes how people perceive your business.",
        text: "Users judge quickly. A rushed website can feel unclear, generic or unreliable. A good process creates a coherent experience where brand, message, mobile behavior and details work together.",
        principles: [
          {
            title: "Brand lives in the details",
            text: "Fonts, spacing, rhythm and visual tone immediately affect perception.",
          },
          {
            title: "Mobile shapes the first impression",
            text: "For many visitors, the phone is the first real interaction with your business.",
          },
          {
            title: "Clarity builds trust",
            text: "A simple, thoughtful structure helps people quickly understand why they should choose you.",
          },
        ] as Principle[],
      },

      final: {
        title: "Let’s build something your customers remember.",
        text: "FlowCraftStudio creates digital experiences designed to represent your business at its best.",
        primary: "Start a project",
        secondary: "View projects",
      },
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <PageReveal>
        <main className="px-6 py-24">
          <section className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.badge}
              </p>

              <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                {t.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {t.subtitle}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/${lang}/contact`}
                  className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_50px_rgba(52,211,153,0.45)]"
                >
                  {t.cta}
                </Link>

                <Link
                  href={`/${lang}/projects`}
                  className="rounded-full border border-white/10 bg-white/4 px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/8"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/35 p-7 shadow-[0_0_80px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(52,211,153,0.18),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.12),transparent_40%)]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  {t.studioCard.badge}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  {t.studioCard.title}
                </h2>

                <p className="mt-4 leading-7 text-zinc-400">
                  {t.studioCard.text}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {t.studioCard.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.intro.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.intro.title}
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-7 shadow-[0_0_70px_rgba(52,211,153,0.07)] backdrop-blur-xl">
              <p className="text-lg leading-8 text-zinc-300">{t.intro.text}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {t.intro.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-zinc-300"
                  >
                    <span className="mr-3 text-emerald-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.journey.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.journey.title}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">{t.journey.text}</p>
            </div>

            <div className="relative mt-14">
              <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-linear-to-b from-emerald-400/0 via-emerald-400/40 to-emerald-400/0 md:block" />

              <div className="grid gap-6">
                {t.journey.steps.map((step, index) => (
                  <article
                    key={step.number}
                    className={`group relative grid gap-6 rounded-3xl border border-white/10 bg-black/35 p-6 shadow-[0_0_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_80px_rgba(52,211,153,0.12)] md:grid-cols-[96px_1fr] ${
                      index % 2 === 1 ? "lg:ml-16" : "lg:mr-16"
                    }`}
                  >
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-lg font-black text-emerald-300 shadow-[0_0_28px_rgba(52,211,153,0.16)]">
                        {step.number}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
                        {step.kicker}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                        {step.text}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {step.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-zinc-300"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.expectations.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.expectations.title}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.expectations.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-[0_0_45px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_70px_rgba(52,211,153,0.12)]"
                >
                  <div className="mb-5 h-10 w-10 rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-400/20" />
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 grid gap-8 overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/40 p-7 shadow-[0_0_90px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.why.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.why.title}
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">{t.why.text}</p>
            </div>

            <div className="grid gap-4">
              {t.why.principles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/4 p-5"
                >
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_80px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.final.title}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              {t.final.text}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_55px_rgba(52,211,153,0.5)]"
              >
                {t.final.primary}
              </Link>

              <Link
                href={`/${lang}/projects`}
                className="rounded-full border border-white/10 bg-white/4 px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/8"
              >
                {t.final.secondary}
              </Link>
            </div>
          </section>
          </section>
        </main>
      </PageReveal>

      <Footer lang={lang} />
    </>
  );
}
