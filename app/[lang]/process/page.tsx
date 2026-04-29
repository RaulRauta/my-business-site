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
      title: "Cum lucrăm împreună, simplu și clar.",
      subtitle:
        "Fără complicații. Fiecare pas are un scop și te ține implicat în proces.",
      cta: "Hai să discutăm",
      steps: [
        {
          title: "Discuție inițială",
          text: "Îmi spui ce business ai, ce vrei să obții și ce probleme ai acum.",
        },
        {
          title: "Structură și direcție",
          text: "Îți propun o structură clară pentru site: ce pagini, ce mesaj, ce flow.",
        },
        {
          title: "Design și dezvoltare",
          text: "Construiesc site-ul cu focus pe claritate, viteză și experiență.",
        },
        {
          title: "Feedback și ajustări",
          text: "Facem modificări până când totul arată și funcționează corect.",
        },
        {
          title: "Lansare",
          text: "Site-ul este public și pregătit să primească vizitatori.",
        },
        {
          title: "Suport",
          text: "Rămân disponibil pentru modificări, update-uri și optimizări.",
        },
      ],
      extraTitle: "Ce contează în proces",
      extras: [
        "Comunicare clară, fără termeni complicați",
        "Fără pași inutili sau întârzieri",
        "Decizii bazate pe claritate, nu pe trenduri",
        "Focus pe rezultate, nu doar design",
      ],
    },
    en: {
      badge: "Process",
      title: "How we work together, simple and clear.",
      subtitle:
        "No unnecessary complexity. Every step has a purpose and keeps you involved.",
      cta: "Let’s talk",
      steps: [
        {
          title: "Initial discussion",
          text: "You tell me about your business, goals and current problems.",
        },
        {
          title: "Structure & direction",
          text: "I propose a clear structure: pages, messaging and flow.",
        },
        {
          title: "Design & development",
          text: "I build the website focusing on clarity, speed and experience.",
        },
        {
          title: "Feedback & revisions",
          text: "We refine everything until it looks and works right.",
        },
        {
          title: "Launch",
          text: "The website goes live and is ready for visitors.",
        },
        {
          title: "Support",
          text: "I remain available for updates, changes and improvements.",
        },
      ],
      extraTitle: "What matters in the process",
      extras: [
        "Clear communication, no technical confusion",
        "No unnecessary steps or delays",
        "Decisions based on clarity, not trends",
        "Focus on results, not just visuals",
      ],
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="px-6 py-28">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {t.badge}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {t.subtitle}
          </p>

          {/* STEPS */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.steps.map((step, index) => (
              <article
                key={step.title}
                className="group rounded-3xl border border-emerald-400/10 bg-black/35 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_55px_rgba(52,211,153,0.12)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-sm font-bold text-black shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                  {index + 1}
                </div>

                <h2 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h2>

                <p className="mt-3 leading-7 text-zinc-400">{step.text}</p>
              </article>
            ))}
          </div>

          {/* EXTRA */}
          <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {lang === "ro" ? "Principii" : "Principles"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.extraTitle}
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                {lang === "ro"
                  ? "Un proces bun nu înseamnă mai mulți pași, ci pași mai clari."
                  : "A good process doesn’t mean more steps, but clearer ones."}
              </p>
            </div>

            <div className="grid gap-4">
              {t.extras.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-300 backdrop-blur-xl"
                >
                  <span className="mr-3 text-emerald-400">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {lang === "ro" ? "Vrei să începem?" : "Ready to get started?"}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {lang === "ro"
                ? "Îmi spui ce ai în minte și construim un plan simplu și eficient."
                : "Tell me what you have in mind and we’ll build a clear and efficient plan."}
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
