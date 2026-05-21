import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectPreview from "@/components/ProjectPreview";
import type { ReactNode } from "react";

type Lang = "ro" | "en";
type PreviewVariant = "blog" | "cafe" | "restaurant" | "landing" | "studio";

type CaseSnapshot = {
  purpose: string;
  direction: string;
  result: string;
};

type Project = {
  title: string;
  slug: string;
  preview: PreviewVariant;
  category: string;
  description: string;
  badge: string;
  previewLabel: string;
  tags: string[];
  highlights?: string[];
  demoHref: string;
  detailsHref?: string;
  external?: boolean;
  accent: "warm" | "gold" | "green" | "cyan" | "sage";
  snapshot: CaseSnapshot;
};

const accentClasses = {
  warm: "border-amber-300/25 hover:border-amber-300/45 hover:shadow-[0_0_80px_rgba(251,191,36,0.14)]",
  gold: "border-[#d9b46f]/25 hover:border-[#d9b46f]/45 hover:shadow-[0_0_85px_rgba(217,180,111,0.16)]",
  green:
    "border-emerald-400/15 hover:border-emerald-400/40 hover:shadow-[0_0_70px_rgba(52,211,153,0.13)]",
  cyan: "border-cyan-300/15 hover:border-cyan-300/40 hover:shadow-[0_0_70px_rgba(34,211,238,0.12)]",
  sage: "border-[#a8b897]/20 hover:border-[#a8b897]/45 hover:shadow-[0_0_75px_rgba(168,184,151,0.14)]",
};

const ctaAccentClasses = {
  warm: "border-amber-300/20 bg-amber-300/10 text-amber-100 hover:border-amber-300/40 hover:bg-amber-300/15",
  gold: "border-[#d9b46f]/20 bg-[#d9b46f]/10 text-[#f3d19c] hover:border-[#d9b46f]/40 hover:bg-[#d9b46f]/15",
  green:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-400/15",
  cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200 hover:border-cyan-300/40 hover:bg-cyan-300/15",
  sage: "border-[#a8b897]/20 bg-[#a8b897]/10 text-[#d8e4cd] hover:border-[#a8b897]/40 hover:bg-[#a8b897]/15",
};

function ProjectLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}

function ProjectCard({
  project,
  labels,
}: {
  project: Project;
  labels: {
    openDemo: string;
    purpose: string;
    direction: string;
    result: string;
  };
}) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-black/35 shadow-[0_0_45px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 ${accentClasses[project.accent]}`}
    >
      <ProjectPreview
        variant={project.preview}
        label={project.previewLabel}
        size="card"
      />

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-emerald-400">{project.category}</p>

          <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-zinc-300">
            {project.badge}
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h2>

        <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="grid gap-3 text-sm leading-6 text-zinc-400">
            <p>
              <span className="font-semibold text-zinc-200">
                {labels.purpose}:
              </span>{" "}
              {project.snapshot.purpose}
            </p>
            <p>
              <span className="font-semibold text-zinc-200">
                {labels.direction}:
              </span>{" "}
              {project.snapshot.direction}
            </p>
            <p>
              <span className="font-semibold text-zinc-200">
                {labels.result}:
              </span>{" "}
              {project.snapshot.result}
            </p>
          </div>
        </div>

        <ProjectLink
          href={project.demoHref}
          external={project.external}
          className={`mt-6 inline-flex rounded-full border px-5 py-2.5 text-sm font-semibold transition ${ctaAccentClasses[project.accent]}`}
        >
          {labels.openDemo} {project.external ? "↗" : "->"}
        </ProjectLink>
      </div>
    </article>
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Proiecte",
      title: "Experiențe digitale construite pentru explorare.",
      subtitle:
        "Explorează demo-uri concept live, create pentru a arăta structură, atmosferă, polish pe mobil și prezentare realistă.",
      proofItems: [
        "Demo-uri live",
        "Mobile-first",
        "Concepte construite",
        "Focus pe conversie",
      ],
      openDemo: "Deschide demo-ul",
      openLiveDemo: "Deschide demo-ul live",
      viewDetails: "Vezi detalii",
      galleryBadge: "Galerie curată",
      galleryTitle: "Demo-uri construite ca experiențe reale.",
      galleryText:
        "Fiecare concept are o direcție clară, o structură adaptabilă și un flow pe care îl poți deschide, testa și imagina în jurul unui business real.",
      snapshotLabels: {
        purpose: "Scop",
        direction: "Direcție",
        result: "Rezultat",
      },
      proofSection: {
        badge: "Ce demonstrează",
        title: "Nu doar vizualuri. Experiențe funcționale.",
        text: "Aceste demo-uri sunt exemple construite pentru a arăta cum poate funcționa o prezență digitală modernă: structură reală de pagină, execuție mobile-first, atmosferă vizuală, secțiuni de conversie, interacțiuni subtile și prezentare specifică business-ului.",
        items: [
          "Structură reală, nu doar machetă decorativă",
          "Experiență mobile-first cu ierarhie clară",
          "Prezentare adaptată fiecărui tip de business",
          "Interacțiuni și CTA-uri gândite pentru utilizare",
        ],
      },
      final: {
        title: "Vrei ca business-ul tău să se simtă la fel de finisat online?",
        text: "FlowCraftStudio poate construi o experiență de website în jurul brandului, publicului și obiectivelor tale.",
        primary: "Începe un proiect",
        secondary: "Vezi serviciile",
      },
      featured: {
        eyebrow: "Flagship Demo",
        title: "Morrow Café",
        category: "Restaurant / cafenea premium",
        description:
          "Un demo cald și cinematic pentru cafenele moderne, construit cu atmosferă, meniu elegant, galerie editorială și flow clar pentru rezervare.",
        highlights: [
          "Hero cinematic",
          "Meniu prezentat editorial",
          "Galerie de atmosferă",
          "Rezervare mobile-first",
        ],
      },
      projects: [
        {
          title: "Morrow Café",
          slug: "morrow-cafe",
          preview: "cafe" as PreviewVariant,
          category: "Restaurant / cafenea",
          description:
            "Concept premium pentru cafenele moderne, cu atmosferă caldă și prezentare memorabilă.",
          badge: "Flagship Demo",
          previewLabel: "Live demo",
          tags: ["Restaurant", "Mobile-first", "Premium UI"],
          demoHref: `/${lang}/projects/morrow-cafe`,
          accent: "gold",
          snapshot: {
            purpose: "Să prezinte atmosfera și oferta într-un mod clar.",
            direction:
              "Structură mobile-first cu imagine caldă și ritm editorial.",
            result: "Un demo live care se simte pregătit pentru un brand real.",
          },
        },
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          preview: "restaurant" as PreviewVariant,
          category: "Restaurant demo",
          description:
            "Model pentru restaurante care vor să prezinte experiența, meniul și rezervările rapid.",
          badge: "Live Demo",
          previewLabel: "Open demo",
          tags: ["Rezervări", "Meniu", "UX"],
          demoHref: `/${lang}/demo/restaurant`,
          detailsHref: `/${lang}/projects/restaurant-concept`,
          accent: "warm",
          snapshot: {
            purpose:
              "Să construiască încredere rapid și să ducă spre rezervare.",
            direction:
              "Preview cinematic cu secțiuni clare pentru meniu și contact.",
            result:
              "O structură adaptabilă pentru restaurante, bistro-uri sau wine bars.",
          },
        },
        {
          title: "North Studio",
          slug: "north-studio",
          preview: "studio" as PreviewVariant,
          category: "Local business demo",
          description:
            "Demo luminos pentru barber shop-uri care au nevoie de servicii clare și programări rapide.",
          badge: "Local Business Demo",
          previewLabel: "Live demo",
          tags: ["Servicii", "Programări", "Trust"],
          demoHref: `/${lang}/projects/north-studio`,
          accent: "sage",
          snapshot: {
            purpose: "Să prezinte serviciile și să inspire încredere locală.",
            direction:
              "Design curat, luminos, cu acțiuni simple pentru programare.",
            result:
              "Un demo prietenos, ușor de adaptat pentru servicii locale.",
          },
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          preview: "landing" as PreviewVariant,
          category: "Landing page concept",
          description:
            "Pagină concentrată pentru servicii locale, oferte sau campanii rapide.",
          badge: "Concept Demo",
          previewLabel: "Concept",
          tags: ["Conversie", "Lead-uri", "Responsive"],
          demoHref: `/${lang}/projects/business-landing`,
          accent: "cyan",
          snapshot: {
            purpose: "Să explice rapid o ofertă și să genereze cereri.",
            direction: "Mesaj direct, beneficii clare și CTA-uri vizibile.",
            result: "Un concept scurt, curat și orientat spre acțiune.",
          },
        },
        {
          title: "Enciclopedia Florilor",
          slug: "enciclopedia-florilor",
          preview: "blog" as PreviewVariant,
          category: "Blog / CMS / SEO",
          description:
            "Platformă de conținut construită pentru claritate, structură și scalare.",
          badge: "Live Preview",
          previewLabel: "Live preview",
          tags: ["CMS", "SEO", "Responsive"],
          demoHref: "https://blog-plum-nine-49.vercel.app",
          detailsHref: `/${lang}/projects/enciclopedia-florilor`,
          external: true,
          accent: "green",
          snapshot: {
            purpose: "Să organizeze conținut editabil într-o structură clară.",
            direction:
              "Blog modern cu categorii, pagini dinamice și layout aerisit.",
            result: "Un preview live pregătit pentru creștere de conținut.",
          },
        },
      ] as Project[],
    },
    en: {
      badge: "Projects",
      title: "Digital experiences built to be explored.",
      subtitle:
        "Explore live concept websites crafted to show structure, atmosphere, mobile polish and real-world presentation.",
      proofItems: [
        "Live demos",
        "Mobile-first",
        "Built concepts",
        "Conversion-focused",
      ],
      openDemo: "Open Demo",
      openLiveDemo: "Open Live Demo",
      viewDetails: "View Details",
      galleryBadge: "Curated gallery",
      galleryTitle: "Demos built as real experiences.",
      galleryText:
        "Each concept has a clear direction, an adaptable structure and a flow you can open, test and imagine around a real business.",
      snapshotLabels: {
        purpose: "Purpose",
        direction: "Direction",
        result: "Result",
      },
      proofSection: {
        badge: "What these demos show",
        title: "Not just visuals. Working experiences.",
        text: "These demos are built examples designed to show how a modern digital presence can work: real page structure, mobile-first execution, visual atmosphere, conversion sections, subtle interaction and business-specific presentation.",
        items: [
          "Real structure, not decorative mockups",
          "Mobile-first experience with clear hierarchy",
          "Presentation shaped for each business type",
          "Interactions and CTAs designed for use",
        ],
      },
      final: {
        title: "Want your business to feel this polished online?",
        text: "FlowCraftStudio can shape a website experience around your brand, audience and goals.",
        primary: "Start a Project",
        secondary: "View Services",
      },
      featured: {
        eyebrow: "Flagship Demo",
        title: "Morrow Café",
        category: "Restaurant / premium café",
        description:
          "A warm cinematic demo for modern cafés, built with atmosphere, elegant menu presentation, editorial gallery and a clear reservation flow.",
        highlights: [
          "Cinematic hero",
          "Editorial menu presentation",
          "Atmospheric gallery",
          "Mobile-first reservation",
        ],
      },
      projects: [
        {
          title: "Morrow Café",
          slug: "morrow-cafe",
          preview: "cafe" as PreviewVariant,
          category: "Restaurant / café",
          description:
            "Premium concept for modern cafés, with warm atmosphere and memorable presentation.",
          badge: "Flagship Demo",
          previewLabel: "Live demo",
          tags: ["Restaurant", "Mobile-first", "Premium UI"],
          demoHref: `/${lang}/projects/morrow-cafe`,
          accent: "gold",
          snapshot: {
            purpose: "Present the atmosphere and offer clearly.",
            direction:
              "Mobile-first structure with warm visuals and editorial rhythm.",
            result:
              "A live demo that feels ready to adapt around a real brand.",
          },
        },
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          preview: "restaurant" as PreviewVariant,
          category: "Restaurant demo",
          description:
            "A model for restaurants that want to present experience, menu and bookings quickly.",
          badge: "Live Demo",
          previewLabel: "Open demo",
          tags: ["Bookings", "Menu", "UX"],
          demoHref: `/${lang}/demo/restaurant`,
          detailsHref: `/${lang}/projects/restaurant-concept`,
          accent: "warm",
          snapshot: {
            purpose: "Build trust quickly and guide visitors toward booking.",
            direction:
              "Cinematic preview with clear sections for menu and contact.",
            result:
              "An adaptable structure for restaurants, bistros or wine bars.",
          },
        },
        {
          title: "North Studio",
          slug: "north-studio",
          preview: "studio" as PreviewVariant,
          category: "Local business demo",
          description:
            "Bright demo for barber shops that need clear services and fast booking.",
          badge: "Local Business Demo",
          previewLabel: "Live demo",
          tags: ["Services", "Booking", "Trust"],
          demoHref: `/${lang}/projects/north-studio`,
          accent: "sage",
          snapshot: {
            purpose: "Present services and build local trust.",
            direction: "Clean, bright design with simple booking actions.",
            result: "A friendly demo that adapts well to local service brands.",
          },
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          preview: "landing" as PreviewVariant,
          category: "Landing page concept",
          description:
            "Focused page for local services, offers or fast campaigns.",
          badge: "Concept Demo",
          previewLabel: "Concept",
          tags: ["Conversion", "Leads", "Responsive"],
          demoHref: `/${lang}/projects/business-landing`,
          accent: "cyan",
          snapshot: {
            purpose: "Explain an offer quickly and generate requests.",
            direction: "Direct message, clear benefits and visible CTAs.",
            result: "A short, clean concept shaped around action.",
          },
        },
        {
          title: "Flower Encyclopedia",
          slug: "enciclopedia-florilor",
          preview: "blog" as PreviewVariant,
          category: "Blog / CMS / SEO",
          description:
            "A content platform built for clarity, structure and scalability.",
          badge: "Live Preview",
          previewLabel: "Live preview",
          tags: ["CMS", "SEO", "Responsive"],
          demoHref: "https://blog-plum-nine-49.vercel.app",
          detailsHref: `/${lang}/projects/enciclopedia-florilor`,
          external: true,
          accent: "green",
          snapshot: {
            purpose: "Organize editable content in a clear structure.",
            direction:
              "Modern blog with categories, dynamic pages and spacious layout.",
            result: "A live preview prepared for content growth.",
          },
        },
      ] as Project[],
    },
  }[lang];

  const featuredProject = t.projects[0];
  const cardLabels = {
    openDemo: t.openDemo,
    purpose: t.snapshotLabels.purpose,
    direction: t.snapshotLabels.direction,
    result: t.snapshotLabels.result,
  };

  return (
    <>
      <Navbar lang={lang} />

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
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-3xl border border-emerald-400/10 bg-black/35 p-5 shadow-[0_0_80px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              {t.proofItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-sm font-semibold text-zinc-300"
                >
                  <span className="mr-2 text-emerald-400">+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <section className="mt-20 overflow-hidden rounded-4xl border border-[#d9b46f]/20 bg-black/40 shadow-[0_0_100px_rgba(217,180,111,0.11)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="p-7 md:p-10">
                <span className="inline-flex rounded-full border border-[#d9b46f]/20 bg-[#d9b46f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f3d19c]">
                  {t.featured.eyebrow}
                </span>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  {t.featured.category}
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {t.featured.title}
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
                  {t.featured.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {t.featured.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-sm text-zinc-300"
                    >
                      <span className="mr-2 text-[#f3d19c]">+</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ProjectLink
                    href={featuredProject.demoHref}
                    className="rounded-full bg-[#d9b46f] px-7 py-3 text-center font-semibold text-[#120d0a] shadow-[0_0_35px_rgba(217,180,111,0.22)] transition hover:bg-white hover:shadow-[0_0_55px_rgba(217,180,111,0.35)]"
                  >
                    {t.openLiveDemo}
                  </ProjectLink>

                  {featuredProject.detailsHref && (
                    <Link
                      href={featuredProject.detailsHref}
                      className="rounded-full border border-white/10 bg-white/4 px-7 py-3 text-center font-semibold text-white transition hover:border-[#d9b46f]/40 hover:bg-white/8"
                    >
                      {t.viewDetails}
                    </Link>
                  )}
                </div>
              </div>

              <div className="relative border-t border-white/10 lg:border-l lg:border-t-0">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(217,180,111,0.18),transparent_45%)]" />
                <div className="relative p-5 md:p-8">
                  <ProjectPreview
                    variant="cafe"
                    label="Live demo"
                    size="featured"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.galleryBadge}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {t.galleryTitle}
                </h2>
              </div>

              <p className="max-w-md leading-7 text-zinc-400">
                {t.galleryText}
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {t.projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  labels={cardLabels}
                />
              ))}
            </div>
          </section>

          <section className="mt-24 grid gap-8 overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/40 p-7 shadow-[0_0_90px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.proofSection.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.proofSection.title}
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                {t.proofSection.text}
              </p>
            </div>

            <div className="grid gap-4">
              {t.proofSection.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-zinc-300"
                >
                  <span className="mr-3 text-emerald-400">+</span>
                  {item}
                </div>
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
                href={`/${lang}/services`}
                className="rounded-full border border-white/10 bg-white/4 px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/8"
              >
                {t.final.secondary}
              </Link>
            </div>
          </section>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
