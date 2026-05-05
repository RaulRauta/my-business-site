import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

const projects = {
  ro: {
    "enciclopedia-florilor": {
      title: "Enciclopedia Florilor",
      label: "Proiect real",
      type: "Blog / CMS / SEO",
      description:
        "Platformă de conținut construită pentru claritate, structură și scalare.",
      liveUrl: "#",
      challenge:
        "Provocarea a fost construirea unei structuri clare pentru un proiect bazat pe articole, categorii și conținut editabil.",
      solution:
        "Am construit o structură modernă cu Next.js și Sanity CMS, astfel încât conținutul să poată fi administrat rapid și organizat.",
      features: [
        "Design responsive",
        "Structură de blog",
        "Integrare Sanity CMS",
        "Pagini dinamice pentru articole",
        "Structură pregătită pentru SEO",
        "Layout curat și ușor de citit",
      ],
      stack: ["Next.js", "Tailwind", "Sanity", "TypeScript"],
    },
    "restaurant-concept": {
      title: "Restaurant Concept",
      label: "Model demo",
      type: "Restaurant website model",
      description:
        "Model pentru restaurante care vor să prezinte atmosfera, meniul și rezervările într-un mod clar.",
      liveUrl: "#",
      challenge:
        "Un restaurant are nevoie să transmită rapid experiența, să prezinte meniul și să ofere o cale simplă către rezervare.",
      solution:
        "Modelul este construit în jurul experienței vizuale, cu secțiuni clare pentru atmosferă, meniu, locație și contact.",
      features: [
        "Hero vizual premium",
        "Secțiune meniu",
        "Galerie imagine",
        "CTA rezervare",
        "Program și locație",
        "Layout mobil-first",
      ],
      stack: ["Next.js", "Tailwind", "UI Design"],
    },
    "business-landing": {
      title: "Business Landing",
      label: "Model demo",
      type: "Landing page model",
      description:
        "Pagină orientată spre conversie pentru servicii locale, oferte sau campanii rapide.",
      liveUrl: "#",
      challenge:
        "Business-urile locale au nevoie de o pagină scurtă, clară și orientată spre cereri directe.",
      solution:
        "Modelul pune accent pe mesaj, beneficii, dovadă socială și formular de contact rapid.",
      features: [
        "Structură orientată spre conversie",
        "CTA-uri clare",
        "Secțiuni de beneficii",
        "Formular de contact",
        "Design rapid și curat",
        "Adaptabil pentru nișe diferite",
      ],
      stack: ["Next.js", "Tailwind", "Conversion UX"],
    },
  },
  en: {
    "enciclopedia-florilor": {
      title: "Flower Encyclopedia",
      label: "Real project",
      type: "Blog / CMS / SEO",
      description:
        "A content platform built for clarity, structure and scalability.",
      liveUrl: "#",
      challenge:
        "The challenge was building a clear structure for a project based on articles, categories and editable content.",
      solution:
        "I built a modern structure with Next.js and Sanity CMS, allowing content to be managed quickly and clearly.",
      features: [
        "Responsive design",
        "Blog structure",
        "Sanity CMS integration",
        "Dynamic article pages",
        "SEO-ready structure",
        "Clean and readable layout",
      ],
      stack: ["Next.js", "Tailwind", "Sanity", "TypeScript"],
    },
    "restaurant-concept": {
      title: "Restaurant Concept",
      label: "Demo model",
      type: "Restaurant website model",
      description:
        "A model for restaurants that want to present atmosphere, menu and bookings clearly.",
      liveUrl: "#",
      challenge:
        "A restaurant website needs to quickly communicate the experience, present the menu and offer an easy path to booking.",
      solution:
        "The model is built around visual experience, with clear sections for atmosphere, menu, location and contact.",
      features: [
        "Premium visual hero",
        "Menu section",
        "Image gallery",
        "Booking CTA",
        "Schedule and location",
        "Mobile-first layout",
      ],
      stack: ["Next.js", "Tailwind", "UI Design"],
    },
    "business-landing": {
      title: "Business Landing",
      label: "Demo model",
      type: "Landing page model",
      description:
        "A conversion-focused page for local services, offers or fast campaigns.",
      liveUrl: "#",
      challenge:
        "Local businesses need a short, clear page focused on direct requests.",
      solution:
        "The model focuses on messaging, benefits, social proof and a fast contact form.",
      features: [
        "Conversion-focused structure",
        "Clear CTAs",
        "Benefit sections",
        "Contact form",
        "Fast and clean design",
        "Adaptable to different niches",
      ],
      stack: ["Next.js", "Tailwind", "Conversion UX"],
    },
  },
};

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ lang: Lang; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = projects[lang][slug as keyof (typeof projects)[typeof lang]];

  if (!project) notFound();

  return (
    <>
      <Navbar lang={lang} />

      <main className="px-6 py-28">
        <section className="mx-auto max-w-7xl">
          <Link
            href={`/${lang}/portfolio`}
            className="text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            ← {lang === "ro" ? "Înapoi la portofoliu" : "Back to portfolio"}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {project.type}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-400/10 bg-black/35 p-7 shadow-[0_0_60px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              <p className="text-sm font-semibold text-emerald-400">
                {project.label}
              </p>

              <p className="mt-4 text-2xl font-bold tracking-tight text-white">
                {lang === "ro"
                  ? "Construit pentru claritate, structură și experiență."
                  : "Built for clarity, structure and experience."}
              </p>

              <Link
                href={project.liveUrl}
                className="mt-7 inline-block rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
              >
                {lang === "ro" ? "Vezi live" : "View live"}
              </Link>
            </div>
          </div>

          <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-black/35 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl">
            <div className="flex h-[420px] items-center justify-center bg-gradient-to-br from-white/[0.04] to-emerald-400/[0.08]">
              <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Project Preview
              </span>
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {lang === "ro" ? "Provocare" : "Challenge"}
              </p>

              <p className="mt-5 leading-8 text-zinc-300">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {lang === "ro" ? "Soluție" : "Solution"}
              </p>

              <p className="mt-5 leading-8 text-zinc-300">{project.solution}</p>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {lang === "ro" ? "Ce include" : "What it includes"}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-300 backdrop-blur-xl"
                >
                  <span className="mr-3 text-emerald-400">✦</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {lang === "ro"
                ? "Vrei un site construit pe o structură asemănătoare?"
                : "Want a website built on a similar structure?"}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {lang === "ro"
                ? "Pot adapta această direcție pentru business-ul tău, cu texte, imagini și structură potrivite."
                : "I can adapt this direction for your business, with suitable copy, images and structure."}
            </p>

            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_55px_rgba(52,211,153,0.5)]"
            >
              {lang === "ro" ? "Hai să discutăm" : "Let’s talk"}
            </Link>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
