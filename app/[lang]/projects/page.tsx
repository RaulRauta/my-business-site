import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";
import ProjectsShowroom, {
  type ShowroomProject,
} from "@/components/ProjectsShowroom";

type Lang = "ro" | "en";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Showroom de proiecte",
      title: "Proiecte care arată ce poate deveni un website.",
      subtitle:
        "Fiecare demo explorează o direcție diferită: restaurante, servicii locale, experiențe interactive și branding digital.",
      contact: "Contact",
      services: "Servicii",
      proof: ["Restaurante", "Servicii", "Interactiv", "Branding digital"],
      showroom: {
        featuredLabel: "Demo evidențiat",
        viewDemo: "Vezi demo-ul",
        details: "Detalii",
        closeDetails: "Închide detaliile",
        openLiveDemo: "Deschide demo-ul",
        unavailableDemo: "În pregătire",
        whatShows: "Ce arată demo-ul",
        bestFor: "Potrivit pentru",
        miniPreview: "Preview",
        demoGridBadge: "Galerie demo",
        demoGridTitle: "Demo-uri clare, construite pentru explorare.",
        demoGridText:
          "Fiecare concept arată ce este, pentru cine este și ce demonstrează, fără explicații tehnice inutile.",
        wipBadge: "În dezvoltare",
        wipTitle: "Concepte active și direcții în dezvoltare.",
        wipText:
          "Idei, experimente și proiecte care testează structuri noi, conținut și prezentări digitale.",
      },
      featured: {
        title: "Morrow Café",
        slug: "morrow-cafe",
        preview: "cafe",
        businessType: "Cafenea",
        description:
          "Un demo cald și cinematic pentru cafenele moderne, cu meniu, atmosferă și rezervare clară.",
        badge: "Demo principal",
        previewLabel: "Demo live",
        chips: ["experiență vizuală", "structură clară", "mobile-first"],
        demoHref: `/${lang}/projects/morrow-cafe`,
        accent: "gold",
        detail: {
          shows: [
            "Cum se prezintă atmosfera unui local",
            "Cum se organizează meniul simplu",
            "Cum duce vizitatorul spre rezervare",
            "Cum arată un flow bun pe telefon",
          ],
          bestFor: ["cafenele", "specialty coffee", "coffee shops", "hospitality"],
          miniTitle: "Meniu, galerie și rezervare într-un singur flow.",
          miniText:
            "Preview-ul arată cum poate fi construită o experiență completă pentru un local.",
        },
      } satisfies ShowroomProject,
      demos: [
        {
          title: "Morrow Café",
          slug: "morrow-cafe",
          preview: "cafe",
          businessType: "Cafenea",
          description:
            "Concept pentru localuri care vor atmosferă, meniu și rezervări ușor de parcurs.",
          badge: "Demo principal",
          previewLabel: "Demo live",
          chips: ["atmosferă", "structură meniu", "flow rezervare"],
          demoHref: `/${lang}/projects/morrow-cafe`,
          accent: "gold",
          detail: {
            shows: [
              "Prima impresie a localului",
              "Meniu scurt și clar",
              "Galerie cu atmosferă",
              "Rezervare simplă",
            ],
            bestFor: ["cafenele", "specialty coffee", "coffee shops"],
            miniTitle: "O experiență caldă, ușor de explorat.",
            miniText:
              "Arată cum un local poate deveni memorabil online fără să aglomereze pagina.",
          },
        },
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          preview: "restaurant",
          businessType: "Restaurant demo",
          description:
            "Model pentru restaurante care vor să prezinte rapid experiența, meniul și rezervarea.",
          badge: "Demo live",
          previewLabel: "Deschide demo",
          chips: ["experiență vizuală", "flow rezervare", "structură meniu"],
          demoHref: `/${lang}/demo/restaurant`,
          detailsHref: `/${lang}/projects/restaurant-concept`,
          accent: "warm",
          detail: {
            shows: [
              "Atmosferă încă din hero",
              "Secțiuni clare pentru meniu",
              "CTA vizibil pentru rezervare",
              "Structură bună pe mobil",
            ],
            bestFor: ["restaurants", "wine bars", "food concepts"],
            miniTitle: "Un flow gândit pentru rezervări.",
            miniText:
              "Preview-ul arată cum poate fi prezentat un restaurant fără explicații complicate.",
          },
        },
        {
          title: "North Studio",
          slug: "north-studio",
          preview: "studio",
          businessType: "Demo business local",
          description:
            "Demo pentru barber shop-uri și servicii locale care au nevoie de încredere și programări rapide.",
          badge: "Business local",
          previewLabel: "Demo live",
          chips: ["flow servicii", "programări", "încredere"],
          demoHref: `/${lang}/projects/north-studio`,
          accent: "sage",
          detail: {
            shows: [
              "Servicii ușor de comparat",
              "Programare la vedere",
              "Imagine curată pentru business local",
              "Structură prietenoasă pe telefon",
            ],
            bestFor: ["local businesses", "barber shops", "service providers"],
            miniTitle: "Servicii clare, prezentate cu încredere.",
            miniText:
              "Arată cum un business local poate părea mai organizat și mai ușor de contactat.",
          },
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          preview: "landing",
          businessType: "Landing page concept",
          description:
            "Pagină scurtă pentru servicii, oferte sau campanii care trebuie să genereze cereri.",
          badge: "Demo concept",
          previewLabel: "Concept",
          chips: ["lead-uri", "conversie", "mobile-first"],
          demoHref: `/${lang}/projects/business-landing`,
          disabledDemo: true,
          accent: "cyan",
          detail: {
            shows: [
              "Mesaj rapid de înțeles",
              "Beneficii puse în ordine",
              "CTA-uri clare",
              "Formă scurtă pentru cereri",
            ],
            bestFor: ["service providers", "local offers", "campaigns"],
            miniTitle: "O pagină construită pentru acțiune.",
            miniText:
              "Preview-ul arată cum o ofertă poate fi explicată simplu și dusă spre contact.",
          },
        },
      ] satisfies ShowroomProject[],
      wip: [
        {
          title: "Enciclopedia Florilor",
          slug: "enciclopedia-florilor",
          preview: "blog",
          businessType: "Content / CMS",
          description:
            "Platformă de conținut pentru articole, categorii și structură pregătită pentru creștere.",
          badge: "În testare",
          previewLabel: "Preview live",
          chips: ["CMS", "SEO", "content structure"],
          demoHref: "https://blog-plum-nine-49.vercel.app",
          detailsHref: `/${lang}/projects/enciclopedia-florilor`,
          external: true,
          accent: "green",
          detail: {
            shows: [
              "Cum poate fi organizat conținutul",
              "Structură pentru articole",
              "Layout ușor de citit",
              "Direcție bună pentru SEO",
            ],
            bestFor: ["blogs", "content projects", "resource libraries"],
            miniTitle: "Conținut organizat într-o structură scalabilă.",
            miniText:
              "Preview live pentru o direcție de platformă editorială și CMS.",
          },
        },
      ] satisfies ShowroomProject[],
    },
    en: {
      badge: "Projects showroom",
      title: "Projects built to show what a website can become.",
      subtitle:
        "Each demo explores a different direction: restaurants, local services, interactive experiences and digital branding.",
      contact: "Contact",
      services: "Services",
      proof: ["Restaurants", "Services", "Interactive", "Digital branding"],
      showroom: {
        featuredLabel: "Featured demo",
        viewDemo: "View demo",
        details: "Details",
        closeDetails: "Close details",
        openLiveDemo: "Open live demo",
        unavailableDemo: "In progress",
        whatShows: "What this demo shows",
        bestFor: "Best for",
        miniPreview: "Mini preview",
        demoGridBadge: "Demo gallery",
        demoGridTitle: "Clear demos built for exploration.",
        demoGridText:
          "Each concept shows what it is, who it is for and what it proves, without unnecessary technical explanations.",
        wipBadge: "Work in Progress",
        wipTitle: "Active concepts and directions in development.",
        wipText:
          "Ideas, experiments and projects testing new structures, content and digital presentation.",
      },
      featured: {
        title: "Morrow Café",
        slug: "morrow-cafe",
        preview: "cafe",
        businessType: "Café",
        description:
          "A warm cinematic demo for modern cafés, with menu, atmosphere and a clear reservation flow.",
        badge: "Flagship demo",
        previewLabel: "Live demo",
        chips: ["visual experience", "clear structure", "mobile-first"],
        demoHref: `/${lang}/projects/morrow-cafe`,
        accent: "gold",
        detail: {
          shows: [
            "How a venue can present atmosphere",
            "How the menu can stay simple",
            "How visitors move toward booking",
            "How the flow feels on mobile",
          ],
          bestFor: ["cafés", "specialty coffee", "coffee shops", "hospitality"],
          miniTitle: "Menu, gallery and booking in one flow.",
          miniText:
            "The preview shows how a complete experience can be shaped for a venue.",
        },
      } satisfies ShowroomProject,
      demos: [
        {
          title: "Morrow Café",
          slug: "morrow-cafe",
          preview: "cafe",
          businessType: "Café",
          description:
            "Concept for venues that need atmosphere, menu and booking in an easy flow.",
          badge: "Flagship demo",
          previewLabel: "Live demo",
          chips: ["atmosphere", "menu structure", "booking flow"],
          demoHref: `/${lang}/projects/morrow-cafe`,
          accent: "gold",
          detail: {
            shows: [
              "First impression for the venue",
              "Short and clear menu",
              "Atmospheric gallery",
              "Simple booking path",
            ],
            bestFor: ["cafés", "specialty coffee", "coffee shops"],
            miniTitle: "A warm experience, easy to explore.",
            miniText:
              "Shows how a venue can feel memorable online without crowding the page.",
          },
        },
        {
          title: "Restaurant Concept",
          slug: "restaurant-concept",
          preview: "restaurant",
          businessType: "Restaurant demo",
          description:
            "Model for restaurants that need to present experience, menu and booking fast.",
          badge: "Live demo",
          previewLabel: "Open demo",
          chips: ["visual experience", "booking flow", "menu structure"],
          demoHref: `/${lang}/demo/restaurant`,
          detailsHref: `/${lang}/projects/restaurant-concept`,
          accent: "warm",
          detail: {
            shows: [
              "Atmosphere from the hero",
              "Clear menu sections",
              "Visible booking CTA",
              "Good mobile structure",
            ],
            bestFor: ["restaurants", "wine bars", "food concepts"],
            miniTitle: "A flow shaped for bookings.",
            miniText:
              "The preview shows how a restaurant can be presented without complicated explanations.",
          },
        },
        {
          title: "North Studio",
          slug: "north-studio",
          preview: "studio",
          businessType: "Local business demo",
          description:
            "Demo for barber shops and local services that need trust and fast booking.",
          badge: "Local business",
          previewLabel: "Live demo",
          chips: ["service flow", "booking", "trust"],
          demoHref: `/${lang}/projects/north-studio`,
          accent: "sage",
          detail: {
            shows: [
              "Easy-to-compare services",
              "Booking in clear view",
              "Clean local business image",
              "Friendly mobile structure",
            ],
            bestFor: ["local businesses", "barber shops", "service providers"],
            miniTitle: "Clear services, presented with trust.",
            miniText:
              "Shows how a local business can feel organized and easy to contact.",
          },
        },
        {
          title: "Business Landing",
          slug: "business-landing",
          preview: "landing",
          businessType: "Landing page concept",
          description:
            "Short page for services, offers or campaigns that need to generate requests.",
          badge: "Concept demo",
          previewLabel: "Concept",
          chips: ["lead capture", "conversion", "mobile-first"],
          demoHref: `/${lang}/projects/business-landing`,
          disabledDemo: true,
          accent: "cyan",
          detail: {
            shows: [
              "Message understood quickly",
              "Benefits in the right order",
              "Clear CTAs",
              "Short request flow",
            ],
            bestFor: ["service providers", "local offers", "campaigns"],
            miniTitle: "A page built around action.",
            miniText:
              "The preview shows how an offer can be explained simply and guided toward contact.",
          },
        },
      ] satisfies ShowroomProject[],
      wip: [
        {
          title: "Flower Encyclopedia",
          slug: "enciclopedia-florilor",
          preview: "blog",
          businessType: "Content / CMS",
          description:
            "Content platform for articles, categories and a structure prepared for growth.",
          badge: "Testing",
          previewLabel: "Live preview",
          chips: ["CMS", "SEO", "content structure"],
          demoHref: "https://blog-plum-nine-49.vercel.app",
          detailsHref: `/${lang}/projects/enciclopedia-florilor`,
          external: true,
          accent: "green",
          detail: {
            shows: [
              "How content can be organized",
              "Structure for articles",
              "Readable layout",
              "Good SEO direction",
            ],
            bestFor: ["blogs", "content projects", "resource libraries"],
            miniTitle: "Content organized in a scalable structure.",
            miniText:
              "Live preview for an editorial platform and CMS direction.",
          },
        },
      ] satisfies ShowroomProject[],
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <PageReveal>
        <main className="relative overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(52,211,153,0.16),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.12),transparent_30%),linear-gradient(180deg,transparent,rgba(7,18,28,0.9)_38%)]" />
          <div className="pointer-events-none absolute left-0 top-56 h-px w-full bg-linear-to-r from-transparent via-emerald-400/25 to-transparent" />

          <section className="relative mx-auto max-w-7xl">
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

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${lang}/contact`}
                  className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_24px_rgba(52,211,153,0.16)] transition duration-300 hover:bg-emerald-300 hover:shadow-[0_0_36px_rgba(52,211,153,0.24)]"
                >
                  {t.contact}
                </Link>

                <Link
                  href={`/${lang}/services`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/[0.08]"
                >
                  {t.services}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-5 shadow-[0_0_52px_rgba(52,211,153,0.07)] backdrop-blur-xl">
              {t.proof.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-zinc-300"
                >
                  <span className="mr-2 text-emerald-400">+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ProjectsShowroom
            copy={t.showroom}
            featured={t.featured}
            demos={t.demos}
            wip={t.wip}
          />
          </section>
        </main>
      </PageReveal>

      <Footer lang={lang} />
    </>
  );
}
