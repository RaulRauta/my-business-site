import Link from "next/link";
import Navbar from "@/components/Navbar";

type Lang = "ro" | "en";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Portofoliu",
      title: "Proiecte și concepte construite cu scop clar.",
      subtitle:
        "Fiecare proiect trebuie să arate bine, dar mai ales să fie ușor de înțeles și să ghideze vizitatorul spre acțiune.",
      cta: "Hai să discutăm",
      projects: [
        {
          title: "Enciclopedia Florilor",
          type: "Blog premium / CMS",
          text: "Un blog elegant pentru un business de peisagistică, construit cu Next.js și Sanity CMS.",
        },
        {
          title: "Restaurant Local",
          type: "Concept site prezentare",
          text: "Structură pentru un restaurant care vrea rezervări, vizibilitate și prezentare clară a meniului.",
        },
        {
          title: "Landing Page servicii",
          type: "Concept conversie",
          text: "O pagină concentrată pe un singur scop: transformarea vizitatorilor în cereri de ofertă.",
        },
      ],
    },
    en: {
      badge: "Portfolio",
      title: "Projects and concepts built with a clear purpose.",
      subtitle:
        "Every project should look good, but more importantly, it should be easy to understand and guide visitors toward action.",
      cta: "Let’s talk",
      projects: [
        {
          title: "Flower Encyclopedia",
          type: "Premium blog / CMS",
          text: "An elegant blog for a landscaping business, built with Next.js and Sanity CMS.",
        },
        {
          title: "Local Restaurant",
          type: "Presentation website concept",
          text: "A structure for a restaurant that wants bookings, visibility and a clear menu presentation.",
        },
        {
          title: "Service Landing Page",
          type: "Conversion concept",
          text: "A focused page with one goal: turning visitors into quote requests.",
        },
      ],
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="min-h-screen px-6 py-28">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {t.badge}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300">{t.subtitle}</p>

          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {t.projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.06]"
              >
                <div className="flex h-56 items-center justify-center border-b border-white/10 bg-gradient-to-br from-white/[0.08] to-emerald-400/[0.08]">
                  <span className="text-sm uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-emerald-400">
                    Preview
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-sm text-emerald-400">{project.type}</p>

                  <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>

                  <p className="mt-4 leading-7 text-zinc-400">{project.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold">
              {lang === "ro"
                ? "Vrei ca următorul proiect de aici să fie al tău?"
                : "Want your project to be the next one here?"}
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-300">
              {lang === "ro"
                ? "Putem construi un site clar, modern și gândit să ajute oamenii să înțeleagă rapid ce oferi."
                : "We can build a clear, modern website designed to help people quickly understand what you offer."}
            </p>

            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              {t.cta}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
