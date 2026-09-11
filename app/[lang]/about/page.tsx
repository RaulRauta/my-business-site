import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";

type Lang = "ro" | "en";

type WorkItem = {
  title: string;
  text: string;
};

type MatterItem = {
  title: string;
  text: string;
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Despre studio",
      title:
        "Experiențe digitale construite cu structură, detaliu și atmosferă.",
      subtitle:
        "FlowCraftStudio creează website-uri moderne, orientate spre prezentare, încredere, claritate și experiențe mobile-first.",
      cta: "Începe un proiect",
      secondary: "Explorează proiectele",

      studioNote: {
        badge: "FlowCraftStudio",
        title: "Un studio mic, cu standarde clare.",
        text: "Fiecare proiect este tratat ca o experiență completă: mesaj, ritm vizual, interacțiune, mobil și detaliile care fac un site să pară intenționat.",
        items: ["claritate", "structură", "atmosferă", "polish"],
      },

      what: {
        badge: "Ce este FlowCraftStudio",
        title: "O abordare atentă pentru prima impresie digitală.",
        text: "Un website este adesea primul loc în care cineva îți judecă business-ul. Prezentarea influențează încrederea, iar detaliile schimbă felul în care oamenii percep calitatea. De aceea, un site bun nu este doar vizual. Are structură, ritm, claritate și o direcție care ajută vizitatorul să înțeleagă repede unde se află și de ce merită să rămână.",
      },

      work: {
        badge: "Cum lucrez",
        title: "Structură înainte de decor. Experiență înainte de efect.",
        text: "Fiecare decizie pornește de la business, public și obiectiv. Designul vine după ce direcția este clară, iar interacțiunile sunt folosite pentru a susține experiența, nu pentru a acoperi lipsa de structură.",
        items: [
          {
            title: "Construit în jurul business-ului",
            text: "Nu forțez proiectul într-un layout generic. Structura pornește de la ofertă, public și acțiunea pe care site-ul trebuie să o susțină.",
          },
          {
            title: "Gândire mobile-first",
            text: "Telefonul este tratat ca experiență principală, cu spacing, ierarhie și acțiuni clare pentru ecrane mici.",
          },
          {
            title: "Flow și claritate",
            text: "Secțiunile sunt așezate ca o conversație coerentă, astfel încât vizitatorul să înțeleagă rapid valoarea.",
          },
          {
            title: "Interacțiuni finisate",
            text: "Animațiile, hover-urile și tranzițiile rămân subtile, controlate și aliniate cu identitatea proiectului.",
          },
        ] as WorkItem[],
      },

      matters: {
        badge: "Ce contează",
        title: "Standardele care țin experiența curată.",
        items: [
          {
            title: "Claritate",
            text: "Mesajul trebuie să fie ușor de înțeles.",
          },
          {
            title: "Structură",
            text: "Fiecare secțiune are un rol precis.",
          },
          {
            title: "Atmosferă",
            text: "Vizualul trebuie să susțină percepția brandului.",
          },
          {
            title: "Mobil",
            text: "Experiența pe telefon trebuie să se simtă naturală.",
          },
          {
            title: "Performanță",
            text: "Site-ul trebuie să fie rapid și curat.",
          },
          {
            title: "Ritm vizual",
            text: "Spațiul, contrastul și ierarhia trebuie să respire.",
          },
          {
            title: "Prima impresie",
            text: "Primele secunde influențează încrederea.",
          },
          {
            title: "Detalii",
            text: "Polish-ul face diferența dintre decent și memorabil.",
          },
        ] as MatterItem[],
      },

      details: {
        badge: "De ce detaliile contează",
        title: "Oamenii simt când un site este construit intenționat.",
        text: "Utilizatorii judecă repede. Un spacing grăbit, un buton neclar sau o experiență slabă pe mobil pot schimba percepția înainte ca cineva să citească tot conținutul. Un website bine construit creează încredere prin felul în care se mișcă, respiră și conduce atenția. Nu trebuie să fie zgomotos. Trebuie să pară sigur pe el.",
        points: [
          "Prezentarea influențează încrederea.",
          "Experiența pe mobil decide deseori prima impresie.",
          "Claritatea ajută oamenii să acționeze fără fricțiune.",
        ],
      },

      final: {
        title: "Construit ca să îți reprezinte business-ul corect.",
        text: "FlowCraftStudio creează experiențe digitale moderne, gândite să se simtă intenționate, finisate și memorabile.",
        primary: "Începe un proiect",
        secondary: "Explorează proiectele",
      },
    },

    en: {
      badge: "About the studio",
      title: "Digital experiences built with structure, detail and atmosphere.",
      subtitle:
        "FlowCraftStudio creates modern websites focused on presentation, trust, clarity and mobile-first experiences.",
      cta: "Start a project",
      secondary: "Explore projects",

      studioNote: {
        badge: "FlowCraftStudio",
        title: "A small studio with clear standards.",
        text: "Every project is treated as a complete experience: message, visual rhythm, interaction, mobile behavior and the details that make a website feel intentional.",
        items: ["clarity", "structure", "atmosphere", "polish"],
      },

      what: {
        badge: "What FlowCraftStudio is",
        title: "A careful approach to the first digital impression.",
        text: "A website is often the first place where someone judges your business. Presentation shapes trust, and details change how people perceive quality. That is why a good website is not only visual. It has structure, rhythm, clarity and a direction that helps visitors understand where they are and why they should stay.",
      },

      work: {
        badge: "How I work",
        title: "Structure before decoration. Experience before effects.",
        text: "Every decision starts with the business, audience and goal. Design comes after the direction is clear, and interactions are used to support the experience, not to cover a lack of structure.",
        items: [
          {
            title: "Built around the business",
            text: "The project is not forced into a generic layout. The structure starts from the offer, audience and action the website needs to support.",
          },
          {
            title: "Mobile-first thinking",
            text: "The phone is treated as a primary experience, with spacing, hierarchy and clear actions for small screens.",
          },
          {
            title: "Flow and clarity",
            text: "Sections are arranged like a coherent conversation, helping visitors understand the value quickly.",
          },
          {
            title: "Polished interactions",
            text: "Animations, hover states and transitions stay subtle, controlled and aligned with the identity of the project.",
          },
        ] as WorkItem[],
      },

      matters: {
        badge: "What matters",
        title: "The standards that keep the experience clean.",
        items: [
          {
            title: "Clarity",
            text: "The message should be easy to understand.",
          },
          {
            title: "Structure",
            text: "Every section needs a precise role.",
          },
          {
            title: "Atmosphere",
            text: "The visuals should support brand perception.",
          },
          {
            title: "Mobile",
            text: "The phone experience should feel natural.",
          },
          {
            title: "Performance",
            text: "The website should feel fast and clean.",
          },
          {
            title: "Visual rhythm",
            text: "Space, contrast and hierarchy need room to breathe.",
          },
          {
            title: "First impression",
            text: "The first seconds influence trust.",
          },
          {
            title: "Details",
            text: "Polish separates decent from memorable.",
          },
        ] as MatterItem[],
      },

      details: {
        badge: "Why details matter",
        title: "People can feel when a website is built with intention.",
        text: "Users judge quickly. Rushed spacing, an unclear button or a weak mobile experience can shift perception before someone reads all the content. A well-crafted website builds trust through how it moves, breathes and guides attention. It does not need to be loud. It needs to feel sure of itself.",
        points: [
          "Presentation influences trust.",
          "Mobile experience often shapes the first impression.",
          "Clarity helps people act without friction.",
        ],
      },

      final: {
        title: "Built to represent your business properly.",
        text: "FlowCraftStudio creates modern digital experiences designed to feel intentional, polished and memorable.",
        primary: "Start a project",
        secondary: "Explore projects",
      },
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <PageReveal>
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

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/${lang}/contact`}
                  className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_24px_rgba(52,211,153,0.16)] transition duration-300 hover:bg-emerald-300 hover:shadow-[0_0_34px_rgba(52,211,153,0.24)]"
                >
                  {t.cta}
                </Link>

                <Link
                  href={`/${lang}/projects`}
                  className="rounded-full border border-white/10 bg-white/4 px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/8"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-7 shadow-[0_0_52px_rgba(52,211,153,0.07)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(52,211,153,0.18),transparent_34%),radial-gradient(circle_at_82%_80%,rgba(34,211,238,0.12),transparent_40%)]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  {t.studioNote.badge}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  {t.studioNote.title}
                </h2>

                <p className="mt-4 leading-7 text-zinc-400">
                  {t.studioNote.text}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {t.studioNote.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.what.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.what.title}
              </h2>
            </div>

            <div className="rounded-3xl border border-cyan-300/12 bg-cyan-300/5 p-7 shadow-[0_0_70px_rgba(34,211,238,0.07)] backdrop-blur-xl md:p-8">
              <p className="text-lg leading-8 text-zinc-300">{t.what.text}</p>
            </div>
          </section>

          <section className="mt-24">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.work.badge}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {t.work.title}
                </h2>

                <p className="mt-5 leading-8 text-zinc-400">{t.work.text}</p>
              </div>

              <div className="grid gap-5">
                {t.work.items.map((item, index) => (
                  <article
                    key={item.title}
                    className={`group rounded-3xl border border-emerald-400/10 bg-emerald-400/5 p-6 shadow-[0_0_32px_rgba(52,211,153,0.045)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/24 hover:shadow-[0_0_44px_rgba(52,211,153,0.08)] ${
                      index % 2 === 1 ? "lg:ml-10" : ""
                    }`}
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-sm font-black text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.12)]">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.matters.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.matters.title}
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.matters.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/5.5"
                >
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 overflow-hidden rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-7 shadow-[0_0_58px_rgba(52,211,153,0.07)] backdrop-blur-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  {t.details.badge}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {t.details.title}
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-zinc-300">
                  {t.details.text}
                </p>

                <div className="mt-7 grid gap-3">
                  {t.details.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-zinc-300"
                    >
                      <span className="mr-3 text-emerald-400">+</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24 rounded-3xl border border-emerald-400/14 bg-emerald-400/6 p-8 shadow-[0_0_80px_rgba(52,211,153,0.1)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.final.title}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              {t.final.text}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_24px_rgba(52,211,153,0.16)] transition duration-300 hover:bg-emerald-300 hover:shadow-[0_0_36px_rgba(52,211,153,0.24)]"
              >
                {t.final.primary}
              </Link>

              <Link
                href={`/${lang}/projects`}
                className="rounded-full border border-white/10 bg-white/4 px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/8"
              >
                {t.final.secondary}
              </Link>
            </div>
          </section>
          </section>
        </main>
      </PageReveal>

      <Footer lang={lang} />
    </>
  );
}
