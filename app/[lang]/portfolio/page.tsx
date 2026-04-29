import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      title: "Proiecte gândite pentru claritate și conversie.",
      subtitle:
        "Fiecare proiect nu este doar design, ci o structură care ajută vizitatorul să înțeleagă rapid și să acționeze.",
      cta: "Hai să discutăm",
      projects: [
        {
          title: "Enciclopedia Florilor",
          type: "Blog premium / CMS",
          text: "Un blog elegant pentru un business de peisagistică, construit cu Next.js și Sanity.",
          tags: ["Next.js", "Sanity", "CMS", "SEO"],
        },
        {
          title: "Restaurant Local",
          type: "Concept site prezentare",
          text: "Structură pentru un restaurant orientată spre rezervări și prezentare clară.",
          tags: ["UX", "Conversion", "Menu UI"],
        },
        {
          title: "Landing Page servicii",
          type: "Concept conversie",
          text: "O pagină construită pentru a transforma vizitatorii în cereri de ofertă.",
          tags: ["Landing", "Copy", "Conversion"],
        },
      ],
    },
    en: {
      badge: "Portfolio",
      title: "Projects built for clarity and conversion.",
      subtitle:
        "Each project is not just design, but a structure that helps visitors understand fast and take action.",
      cta: "Let’s talk",
      projects: [
        {
          title: "Flower Encyclopedia",
          type: "Premium blog / CMS",
          text: "An elegant blog for a landscaping business, built with Next.js and Sanity.",
          tags: ["Next.js", "Sanity", "CMS", "SEO"],
        },
        {
          title: "Local Restaurant",
          type: "Presentation concept",
          text: "A structure focused on bookings and clear presentation.",
          tags: ["UX", "Conversion", "Menu UI"],
        },
        {
          title: "Service Landing Page",
          type: "Conversion concept",
          text: "A page built to turn visitors into quote requests.",
          tags: ["Landing", "Copy", "Conversion"],
        },
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

          {/* PROJECTS */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {t.projects.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/35 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.12)]"
              >
                {/* PREVIEW */}
                <div className="relative flex h-56 items-center justify-center border-b border-white/10 bg-gradient-to-br from-white/[0.04] to-emerald-400/[0.08]">
                  <span className="text-sm uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-emerald-400">
                    Preview
                  </span>

                  {/* glow hover */}
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15),transparent_70%)]" />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <p className="text-sm text-emerald-400">{project.type}</p>

                  <h2 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-zinc-400">{project.text}</p>

                  {/* TAGS */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/${lang}/contact`}
                    className="mt-6 inline-block text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                  >
                    {lang === "ro" ? "Discută proiect →" : "Discuss project →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* FINAL CTA */}
          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {lang === "ro"
                ? "Vrei ca următorul proiect să fie al tău?"
                : "Want your project to be next?"}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {lang === "ro"
                ? "Îți pot construi un site clar, modern și orientat spre rezultate."
                : "I can build you a clear, modern and results-focused website."}
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
