import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Proces",
      title: "Un proces clar, fără haos și fără termeni inutili.",
      subtitle:
        "Știi mereu ce urmează, ce se construiește și de ce. Transformăm ideea într-un site funcțional pas cu pas.",
      cta: "Hai să discutăm",
      secondary: "Vezi serviciile",
      timelineBadge: "Flow de lucru",
      timelineTitle: "De la idee la site lansat.",
      deliveryBadge: "La final",
      deliveryTitle: "Ce primești când proiectul este gata",
      deliveryText:
        "Nu primești doar un design frumos. Primești un site funcțional, pregătit să fie folosit.",
      antiBadge: "Fără confuzie",
      antiTitle: "Nu trebuie să știi termeni tehnici.",
      antiText:
        "Tu îmi explici business-ul în cuvintele tale. Eu transform informația în structură, pagini, design și flow.",
      steps: [
        {
          number: "01",
          title: "Discuție",
          text: "Îmi spui ce business ai, ce vrei să obții și ce probleme are site-ul sau imaginea ta acum.",
        },
        {
          number: "02",
          title: "Structură",
          text: "Stabilim ce pagini sunt necesare, ce mesaj trebuie transmis și ce acțiune vrem de la vizitator.",
        },
        {
          number: "03",
          title: "Design",
          text: "Construiesc direcția vizuală astfel încât site-ul să fie clar, modern și potrivit pentru business.",
        },
        {
          number: "04",
          title: "Dezvoltare",
          text: "Transform designul într-un site rapid, flexibil și pregătit pentru lansare.",
        },
        {
          number: "05",
          title: "Feedback",
          text: "Facem ajustări pe conținut, layout și detalii până când direcția este corectă.",
        },
        {
          number: "06",
          title: "Lansare",
          text: "Site-ul este public, conectat la domeniu și pregătit să primească vizitatori.",
        },
      ],
      deliverables: [
        "Site responsive",
        "Formular de contact",
        "Structură clară",
        "Pagini rapide",
        "SEO basic",
        "Suport inițial",
      ],
      principles: [
        "Comunicare clară",
        "Pași simpli",
        "Decizii explicate",
        "Focus pe client",
      ],
      finalTitle: "Ai o idee, dar nu știi exact de unde să începi?",
      finalText:
        "Îmi trimiți detaliile și îți răspund cu o direcție clară pentru primul pas.",
    },
    en: {
      badge: "Process",
      title: "A clear process, without chaos or unnecessary jargon.",
      subtitle:
        "You always know what comes next, what is being built and why. We turn the idea into a working website step by step.",
      cta: "Let’s talk",
      secondary: "View services",
      timelineBadge: "Work flow",
      timelineTitle: "From idea to launched website.",
      deliveryBadge: "At the end",
      deliveryTitle: "What you receive when the project is ready",
      deliveryText:
        "You don’t just receive a nice design. You receive a working website ready to be used.",
      antiBadge: "No confusion",
      antiTitle: "You don’t need to know technical terms.",
      antiText:
        "You explain your business in your own words. I turn that information into structure, pages, design and flow.",
      steps: [
        {
          number: "01",
          title: "Discussion",
          text: "You tell me about your business, your goals and what problems your website or image currently has.",
        },
        {
          number: "02",
          title: "Structure",
          text: "We define what pages are needed, what message must be communicated and what action we want from visitors.",
        },
        {
          number: "03",
          title: "Design",
          text: "I build the visual direction so the website feels clear, modern and suitable for your business.",
        },
        {
          number: "04",
          title: "Development",
          text: "I turn the design into a fast, responsive website ready for launch.",
        },
        {
          number: "05",
          title: "Feedback",
          text: "We adjust content, layout and details until the direction feels right.",
        },
        {
          number: "06",
          title: "Launch",
          text: "The website goes live, connected to your domain and ready for visitors.",
        },
      ],
      deliverables: [
        "Responsive website",
        "Contact form",
        "Clear structure",
        "Fast pages",
        "Basic SEO",
        "Initial support",
      ],
      principles: [
        "Clear communication",
        "Simple steps",
        "Explained decisions",
        "Customer focus",
      ],
      finalTitle: "Have an idea, but not sure where to start?",
      finalText:
        "Send me the details and I’ll reply with a clear direction for the first step.",
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="px-6 py-24">
        <section className="mx-auto max-w-7xl">
          {/* HERO */}
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.badge}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
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
                  href={`/${lang}/services`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/[0.08]"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-400/10 bg-black/35 p-7 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Flowcraft method
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                {lang === "ro"
                  ? "Un flow simplu pentru un rezultat clar."
                  : "A simple flow for a clear result."}
              </h2>

              <div className="mt-7 grid gap-3">
                {t.principles.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-300"
                  >
                    <span className="mr-3 text-emerald-400">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="mt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {t.timelineBadge}
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.timelineTitle}
            </h2>

            <div className="mt-12 grid gap-6">
              {t.steps.map((step, index) => (
                <article
                  key={step.number}
                  className="group grid gap-6 rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.12)] md:grid-cols-[120px_1fr]"
                >
                  <div className="flex items-start gap-4 md:block">
                    <div className="text-4xl font-black tracking-tight text-emerald-400">
                      {step.number}
                    </div>

                    {index < t.steps.length - 1 && (
                      <div className="hidden h-16 w-px bg-emerald-400/20 md:mt-5 md:block" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* DELIVERY + ANTI CONFUSION */}
          <div className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-emerald-400/10 bg-black/35 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.deliveryBadge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {t.deliveryTitle}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">{t.deliveryText}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.deliverables.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-zinc-300"
                  >
                    <span className="mr-2 text-emerald-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-black/35 p-8 shadow-[0_0_70px_rgba(34,211,238,0.07)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                {t.antiBadge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {t.antiTitle}
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">{t.antiText}</p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {lang === "ro" ? "Pe scurt" : "In short"}
                </p>

                <p className="mt-3 text-xl font-bold text-white">
                  {lang === "ro"
                    ? "Tu vii cu ideea. Eu construiesc flow-ul."
                    : "You bring the idea. I build the flow."}
                </p>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t.finalTitle}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {t.finalText}
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
