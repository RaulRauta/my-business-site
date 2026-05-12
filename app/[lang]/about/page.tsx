import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "About",
      title:
        "FlowCraft Studio a început din dorința de a construi site-uri care chiar se simt bine.",
      subtitle:
        "Nu construiesc doar pagini frumoase. Construiesc experiențe digitale clare, moderne și gândite să ajute un business să fie înțeles mai repede.",
      storyBadge: "Poveste",
      storyTitle: "Cum a început",
      story:
        "Am început construind proiecte proprii, învățând direct prin lucru real: structură, design, cod, branding, formulare, responsive, SEO și deploy. FlowCraft Studio a crescut natural din procesul ăsta — din multe iterații, greșeli reparate și dorința de a face fiecare detaliu să aibă sens.",
      philosophyBadge: "Filosofie",
      philosophyTitle: "Ce cred despre un site bun",
      principles: [
        "Un site trebuie să explice rapid ce face business-ul.",
        "Design-ul trebuie să susțină claritatea, nu să o acopere.",
        "Experiența pe telefon contează la fel de mult ca desktopul.",
        "Fiecare secțiune trebuie să conducă omul spre o acțiune clară.",
      ],
      personalBadge: "Mod de lucru",
      personalTitle: "De ce lucrez diferit",
      personal:
        "Fiind un studio mic, fiecare proiect primește atenție directă. Nu există comunicare pierdută între echipe, brief-uri uitate sau soluții făcute mecanic. Lucrez aproape de proiect, de business și de scopul real al site-ului.",
      ctaTitle: "Vrei să construim ceva clar pentru business-ul tău?",
      ctaText:
        "Spune-mi ce ai în minte și îți pot propune o direcție simplă, modernă și potrivită pentru etapa în care ești.",
      cta: "Hai să discutăm",
    },
    en: {
      badge: "About",
      title:
        "FlowCraft Studio started from the desire to build websites that actually feel right.",
      subtitle:
        "I do not just build nice-looking pages. I build clear, modern digital experiences designed to help a business be understood faster.",
      storyBadge: "Story",
      storyTitle: "How it started",
      story:
        "I started by building my own projects and learning through real work: structure, design, code, branding, forms, responsive layouts, SEO and deployment. FlowCraft Studio grew naturally from that process — from many iterations, fixed mistakes and the desire to make every detail matter.",
      philosophyBadge: "Philosophy",
      philosophyTitle: "What I believe a good website should do",
      principles: [
        "A website should explain the business quickly.",
        "Design should support clarity, not hide it.",
        "Mobile experience matters just as much as desktop.",
        "Every section should guide people toward a clear action.",
      ],
      personalBadge: "How I work",
      personalTitle: "Why the process feels different",
      personal:
        "Because this is a small studio, every project gets direct attention. There is no lost communication between teams, forgotten briefs or mechanical solutions. I stay close to the project, the business and the real purpose of the website.",
      ctaTitle: "Want to build something clear for your business?",
      ctaText:
        "Tell me what you have in mind and I can suggest a simple, modern direction that fits your current stage.",
      cta: "Let’s talk",
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

          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {t.subtitle}
          </p>

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-3xl border border-emerald-400/10 bg-black/35 p-8 shadow-[0_0_60px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.storyBadge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                {t.storyTitle}
              </h2>

              <p className="mt-5 leading-8 text-zinc-300">{t.story}</p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.philosophyBadge}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  {t.philosophyTitle}
                </h2>

                <div className="mt-7 grid gap-4">
                  {t.principles.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-zinc-300"
                    >
                      <span className="mr-3 text-emerald-400">✦</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.personalBadge}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  {t.personalTitle}
                </h2>

                <p className="mt-5 leading-8 text-zinc-300">{t.personal}</p>
              </div>
            </div>
          </div>

          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t.ctaTitle}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {t.ctaText}
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
