import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectPreview from "@/components/ProjectPreview";

type Lang = "ro" | "en";
type PreviewVariant = "blog" | "restaurant" | "landing";

type Project = {
  title: string;
  slug: string;
  preview: PreviewVariant;
  type: string;
  text: string;
  status: string;
  tags: string[];
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Projects",
      title:
        "Concepte, proiecte în lucru și direcții vizuale pentru site-uri moderne.",
      subtitle:
        "Aici poți vedea cum poate arăta un site construit cu scop clar: structură, imagine, experiență și direcție pentru client.",
      cta: "Hai să discutăm",
      viewProject: "Vezi proiectul",
      demoBadge: "Demo Concepts",
      demoTitle: "Modele de site pentru diferite tipuri de business.",
      demoText:
        "Concepte create pentru a arăta cum poate fi construită o prezență online modernă, chiar înainte de adaptarea finală pentru un client real.",
      wipBadge: "Work in Progress",
      wipTitle: "Proiecte aflate în dezvoltare.",
      wipText:
        "Proiecte reale sau active care sunt încă în lucru, dar arată direcția, structura și nivelul de execuție.",
      finalTitle: "Vrei să vezi cum ar putea arăta viitorul tău site?",
      finalText:
        "Alegi o direcție potrivită, iar eu adaptez structura, textele, imaginile și experiența pentru business-ul tău.",
      demoProjects: [
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          preview: "restaurant" as PreviewVariant,
          type: "Model site restaurant",
          text: "Model pentru restaurante care vor să prezinte experiența, meniul și rezervările într-un mod clar.",
          status: "Demo concept",
          tags: ["Restaurant", "Rezervări", "UX"],
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          preview: "landing" as PreviewVariant,
          type: "Model landing page",
          text: "Pagină orientată spre conversie pentru servicii locale, oferte sau campanii rapide.",
          status: "Demo concept",
          tags: ["Landing", "Conversie", "Lead-uri"],
        },
      ] as Project[],
      wipProjects: [
        {
          title: "Enciclopedia Florilor",
          slug: "enciclopedia-florilor",
          preview: "blog" as PreviewVariant,
          type: "Blog / CMS / SEO",
          text: "Platformă de conținut construită pentru claritate, structură și scalare.",
          status: "Work in progress",
          tags: ["Next.js", "Sanity", "CMS", "SEO"],
        },
      ] as Project[],
    },
    en: {
      badge: "Projects",
      title:
        "Concepts, work in progress and visual directions for modern websites.",
      subtitle:
        "Here you can see how a website can look when it is built with a clear purpose: structure, image, experience and customer direction.",
      cta: "Let’s talk",
      viewProject: "View project",
      demoBadge: "Demo Concepts",
      demoTitle: "Website models for different types of businesses.",
      demoText:
        "Concepts created to show how a modern online presence can be built before the final adaptation for a real client.",
      wipBadge: "Work in Progress",
      wipTitle: "Projects currently in development.",
      wipText:
        "Real or active projects that are still in progress, but show the direction, structure and execution level.",
      finalTitle: "Want to see how your future website could look?",
      finalText:
        "Choose a direction that fits, and I adapt the structure, copy, images and experience for your business.",
      demoProjects: [
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          preview: "restaurant" as PreviewVariant,
          type: "Restaurant website model",
          text: "A model for restaurants that want to present the experience, menu and bookings clearly.",
          status: "Demo concept",
          tags: ["Restaurant", "Bookings", "UX"],
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          preview: "landing" as PreviewVariant,
          type: "Landing page model",
          text: "A conversion-focused page for local services, offers or fast campaigns.",
          status: "Demo concept",
          tags: ["Landing", "Conversion", "Leads"],
        },
      ] as Project[],
      wipProjects: [
        {
          title: "Flower Encyclopedia",
          slug: "enciclopedia-florilor",
          preview: "blog" as PreviewVariant,
          type: "Blog / CMS / SEO",
          text: "A content platform built for clarity, structure and scalability.",
          status: "Work in progress",
          tags: ["Next.js", "Sanity", "CMS", "SEO"],
        },
      ] as Project[],
    },
  }[lang];

  function ProjectCard({ project }: { project: Project }) {
    return (
      <article className="group overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/35 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_60px_rgba(52,211,153,0.12)]">
        <ProjectPreview variant={project.preview} />

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
            href={
              project.slug === "restaurant-concept"
                ? `/${lang}/demo/restaurant`
                : `/${lang}/projects/${project.slug}`
            }
            className="mt-7 inline-block text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            {t.viewProject} →
          </Link>
        </div>
      </article>
    );
  }

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

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {t.subtitle}
          </p>

          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {t.demoBadge}
            </p>

            <div className="mt-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.demoTitle}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">{t.demoText}</p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {t.demoProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div className="mt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {t.wipBadge}
            </p>

            <div className="mt-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.wipTitle}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">{t.wipText}</p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {t.wipProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

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
