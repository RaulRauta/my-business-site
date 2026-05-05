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
      title: "Proiecte, concepte și modele de site construite cu scop clar.",
      subtitle:
        "Aici găsești exemple reale și modele de site care pot deveni baza unui proiect adaptat pentru business-ul tău.",
      cta: "Hai să discutăm",
      viewProject: "Vezi proiectul",
      projects: [
        {
          title: "Enciclopedia Florilor",
          slug: "enciclopedia-florilor",
          type: "Blog / CMS / SEO",
          text: "Platformă de conținut construită pentru claritate, structură și scalare.",
          status: "Proiect real",
          tags: ["Next.js", "Sanity", "CMS", "SEO"],
        },
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          type: "Model site restaurant",
          text: "Model pentru restaurante care vor să prezinte experiența, meniul și rezervările într-un mod clar.",
          status: "Model demo",
          tags: ["Restaurant", "Rezervări", "UX"],
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          type: "Model landing page",
          text: "Pagină orientată spre conversie pentru servicii locale, oferte sau campanii rapide.",
          status: "Model demo",
          tags: ["Landing", "Conversie", "Lead-uri"],
        },
      ],
    },
    en: {
      badge: "Portfolio",
      title:
        "Projects, concepts and website models built with a clear purpose.",
      subtitle:
        "Here you can find real examples and website models that can become the foundation for a project adapted to your business.",
      cta: "Let’s talk",
      viewProject: "View project",
      projects: [
        {
          title: "Flower Encyclopedia",
          slug: "enciclopedia-florilor",
          type: "Blog / CMS / SEO",
          text: "A content platform built for clarity, structure and scalability.",
          status: "Real project",
          tags: ["Next.js", "Sanity", "CMS", "SEO"],
        },
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          type: "Restaurant website model",
          text: "A model for restaurants that want to present their experience, menu and bookings clearly.",
          status: "Demo model",
          tags: ["Restaurant", "Bookings", "UX"],
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          type: "Landing page model",
          text: "A conversion-focused page for local services, offers or fast campaigns.",
          status: "Demo model",
          tags: ["Landing", "Conversion", "Leads"],
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

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {t.projects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/35 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.12)]"
              >
                <div className="relative flex h-56 items-center justify-center border-b border-white/10 bg-gradient-to-br from-white/[0.04] to-emerald-400/[0.08]">
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.16),transparent_70%)]" />

                  <span className="relative text-sm uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-emerald-400">
                    Preview
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-emerald-400">{project.type}</p>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                      {project.status}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-zinc-400">{project.text}</p>

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

                  <Link
                    href={`/${lang}/portfolio/${project.slug}`}
                    className="mt-7 inline-block text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                  >
                    {t.viewProject} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {lang === "ro"
                ? "Vrei un site pornind de la un model deja gândit?"
                : "Want a website based on an already structured model?"}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {lang === "ro"
                ? "Alegi direcția care ți se potrivește, iar eu adaptez structura, imaginile și conținutul pentru business-ul tău."
                : "You choose the direction that fits you, and I adapt the structure, images and content for your business."}
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
