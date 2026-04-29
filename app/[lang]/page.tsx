import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        "Construiesc site-uri care explică rapid ce oferi, inspiră încredere și duc vizitatorii spre acțiune.",
      cta: "Hai să discutăm",
      secondary: "Vezi serviciile",
      sectionTitle: "De ce contează",
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
      sectionTitle: "Why it matters",
      points: [
        "First impression decides if people stay",
        "Clarity beats complexity",
        "A website should sell, not just look good",
      ],
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="px-6 py-28">
        <section className="mx-auto max-w-7xl">
          {/* HERO */}
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {t.badge}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {t.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_50px_rgba(52,211,153,0.5)]"
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

          {/* HERO CARD */}
          <div className="mt-16 rounded-3xl border border-emerald-400/10 bg-black/35 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="text-2xl font-bold text-white">
              {lang === "ro"
                ? "Un site bun nu este doar design."
                : "A good website is not just design."}
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              {lang === "ro"
                ? "Este modul în care explici ce faci, cum ajuți și de ce cineva ar trebui să te aleagă."
                : "It’s how you explain what you do, how you help and why someone should choose you."}
            </p>
          </div>

          {/* WHY SECTION */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {t.points.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 text-zinc-300 backdrop-blur-xl transition hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(52,211,153,0.1)]"
              >
                <span className="text-emerald-400 text-lg">✦</span>
                <p className="mt-3">{point}</p>
              </div>
            ))}
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
                ? "Putem construi un site care să lucreze pentru tine, nu doar să existe."
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
