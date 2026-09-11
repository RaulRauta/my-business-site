import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";
import ServicesPackages, {
  type ServicePackage,
} from "@/components/ServicesPackages";

type Lang = "ro" | "en";

type SimpleItem = {
  title: string;
  text: string;
};

type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Servicii",
      title:
        "Pachete clare pentru un site rafinat, construit să aducă acțiune.",
      subtitle:
        "Alegi direcția potrivită, vezi ce primești și pornești cu o structură construită pentru încredere, claritate și conversie.",
      cta: "Începe un proiect",
      secondary: "Vezi procesul",
      heroNote: "Ofertă clară, fără haos tehnic",

      packages: {
        badge: "Pachete",
        title: "Alege nivelul potrivit pentru business-ul tău.",
        text: "Pachetele sunt gândite ca puncte clare de pornire. Fiecare poate fi ajustat în funcție de brand, obiectiv și complexitate.",
        startingFrom: "Începând de la",
        customPricing: "Preț",
        mostPopular: "Cel mai ales",
        viewDetails: "Vezi detalii",
        perfectFor: "Perfect pentru",
        included: "Ce include",
        timeline: "Timeline estimat",
        extras: "Extra opțional",
        startProject: "Începe un proiect",
        close: "Închide",
        note: "Prețurile sunt orientative și pot varia în funcție de complexitatea proiectului.",
        items: [
          {
            id: "start",
            name: "Start",
            eyebrow: "Prezență clară",
            price: "300€",
            description:
              "Pentru business-uri mici care au nevoie de o prezență online curată, rapidă și profesionistă.",
            benefits: [
              "Landing page sau site mic",
              "Optimizare mobil",
              "Buton contact / WhatsApp",
              "SEO de bază",
            ],
            perfectFor:
              "Business-uri mici, servicii locale sau proiecte la început care vor să arate serios online fără să intre într-un proiect complicat.",
            included: [
              "Landing page custom sau site mic de prezentare",
              "Optimizare pentru mobil",
              "Buton contact / WhatsApp",
              "Setare SEO de bază",
              "Structură rapidă la încărcare",
              "Suport la lansare",
            ],
            timeline: "3-5 zile",
            extras: [
              "Copywriting",
              "Secțiune extra",
              "Galerie",
              "Monitorizare",
            ],
            cta: "Vezi detalii",
          },
          {
            id: "growth",
            name: "Growth",
            eyebrow: "Focus pe conversie",
            price: "600€",
            description:
              "Pentru business-uri care vor o prezență mai puternică, mai multă claritate și o structură orientată spre conversie.",
            benefits: [
              "Website multi-secțiune",
              "Direcție vizuală rafinată",
              "Microinteracțiuni",
              "Flow pentru rezervări/contact",
              "Finisaj mobile-first",
            ],
            perfectFor:
              "Business-uri care au deja o ofertă clară și vor un site care să prezinte brandul mai bine, să creeze încredere și să conducă vizitatorii spre cerere, rezervare sau contact.",
            included: [
              "Website multi-secțiune",
              "Direcție vizuală rafinată",
              "Animații și microinteracțiuni mai puternice",
              "Secțiune de contact / rezervări",
              "Structură SEO de bază",
              "Integrare social media",
              "Finisaj mobile-first",
              "Suport la lansare",
            ],
            timeline: "1-2 săptămâni",
            extras: [
              "CMS",
              "Pagini extra",
              "SEO extins",
              "Integrare analytics",
            ],
            cta: "Vezi detalii",
            featured: true,
          },
          {
            id: "custom",
            name: "Experiență personalizată",
            eyebrow: "Sistem personalizat",
            price: "Personalizat",
            description:
              "Pentru branduri care au nevoie de ceva unic, avansat sau construit foarte specific în jurul experienței.",
            benefits: [
              "Structură personalizată",
              "UI/UX avansat",
              "CMS / blog opțional",
              "Setup multilingv opțional",
              "Scalabil pe termen lung",
            ],
            perfectFor:
              "Branduri, concepte speciale sau proiecte care au nevoie de o experiență digitală distinctă, funcționalități speciale sau o structură care poate crește în timp.",
            included: [
              "Structură personalizată pentru website",
              "Direcție UI/UX avansată",
              "CMS / blog opțional",
              "Setup multilingv opțional",
              "Rezervări / formulare personalizate opțional",
              "Animații avansate opțional",
              "Structură scalabilă",
              "Suport la lansare",
            ],
            timeline: "În funcție de complexitate",
            extras: [
              "Strategie conținut",
              "Integrări personalizate",
              "Automatizări",
              "Sistem de design",
            ],
            cta: "Vezi detalii",
          },
        ] as ServicePackage[],
      },

      why: {
        badge: "De ce FlowCraftStudio",
        title: "De ce să nu folosești doar un template?",
        text: "Un template poate arăta decent, dar business-ul tău are nevoie de o structură gândită pentru ofertă, client și acțiunea pe care vrei să o obții.",
        items: [
          {
            title: "Construit în jurul business-ului tău",
            text: "Nu forțez oferta într-un layout generic. Structura pornește de la ce vinzi și cui vinzi.",
          },
          {
            title: "Finisaj mobile-first",
            text: "Nu doar redimensionare responsive, ci o experiență care se simte naturală pe telefon.",
          },
          {
            title: "Identitate vizuală memorabilă",
            text: "Culori, ritm, spacing și detalii care fac site-ul să pară coerent și memorabil.",
          },
          {
            title: "Structură pentru conversie",
            text: "Fiecare secțiune are un rol: explică, construiește încredere sau duce spre contact.",
          },
          {
            title: "Experiență rapidă și modernă",
            text: "Cod curat, pagini rapide și interacțiuni subtile care nu obosesc vizitatorul.",
          },
          {
            title: "Ghidare până la lansare",
            text: "Primești suport pentru direcție, conținut, lansare și pașii de după publicare.",
          },
        ] as SimpleItem[],
      },

      process: {
        badge: "Proces",
        title: "Un flow clar, de la idee la lansare.",
        steps: [
          {
            step: "01",
            title: "Discovery",
            text: "Înțeleg business-ul, oferta, publicul și rezultatul pe care îl urmărești.",
          },
          {
            step: "02",
            title: "Structure",
            text: "Așezăm secțiunile, mesajele și flow-ul care conduce vizitatorul spre acțiune.",
          },
          {
            step: "03",
            title: "Design direction",
            text: "Construiesc direcția vizuală: clară, rafinată și potrivită pentru brand.",
          },
          {
            step: "04",
            title: "Development",
            text: "Transform designul într-un site rapid, responsive și pregătit pentru lansare.",
          },
          {
            step: "05",
            title: "Feedback & polish",
            text: "Rafinăm detaliile: conținut, spacing, mobile, interacțiuni și claritate.",
          },
          {
            step: "06",
            title: "Launch",
            text: "Publicăm site-ul și te ghidez prin pașii finali de domeniu, hosting și verificări.",
          },
        ] as ProcessStep[],
      },

      services: {
        badge: "Ce pot construi",
        title: "Servicii care pot intra în pachetul potrivit.",
        text: "Pachetul stabilește direcția, iar serviciile se adaptează în funcție de ce are nevoie business-ul tău.",
        items: [
          {
            title: "Site de prezentare",
            text: "O prezență serioasă, clară și modernă pentru business-uri care vor să inspire încredere.",
          },
          {
            title: "Landing page",
            text: "O pagină concentrată pe cereri, apeluri, rezervări sau vânzări.",
          },
          {
            title: "Redesign",
            text: "Transform un site vechi sau neclar într-o experiență mai curată, rapidă și convingătoare.",
          },
          {
            title: "CMS / Sanity",
            text: "Administrare pentru conținut, proiecte, articole sau lead-uri, când proiectul are nevoie.",
          },
          {
            title: "Booking / formulare",
            text: "Flow-uri de contact, rezervare sau cereri adaptate pentru business-ul tău.",
          },
          {
            title: "Mentenanță",
            text: "Actualizări, mici modificări, verificări și suport după lansare.",
          },
        ] as SimpleItem[],
      },

      final: {
        title: "Nu știi exact ce pachet ți se potrivește?",
        text: "Spune-mi ce business ai și ce vrei să obții, iar eu îți propun o direcție clară fără să te pierd în termeni tehnici.",
      },
    },

    en: {
      badge: "Services",
      title: "Clear packages for a polished website built to drive action.",
      subtitle:
        "Choose the right direction, understand what you get and start with a structure built for trust, clarity and conversion.",
      cta: "Start a project",
      secondary: "See process",
      heroNote: "Clear offer, no technical chaos",

      packages: {
        badge: "Packages",
        title: "Choose the right level for your business.",
        text: "The packages are clear starting points. Each one can be adjusted depending on brand, goals and complexity.",
        startingFrom: "Starting from",
        customPricing: "Pricing",
        mostPopular: "Most Popular",
        viewDetails: "Explore package",
        perfectFor: "Perfect for",
        included: "What is included",
        timeline: "Estimated timeline",
        extras: "Optional extras",
        startProject: "Start a project",
        close: "Close",
        note: "Prices are guidelines and may vary depending on project complexity.",
        items: [
          {
            id: "start",
            name: "Start",
            eyebrow: "Clean presence",
            price: "300€",
            description:
              "For small businesses that need a clean, fast and professional online presence.",
            benefits: [
              "Landing page or small website",
              "Mobile optimization",
              "Contact / WhatsApp CTA",
              "Basic SEO",
            ],
            perfectFor:
              "Small businesses, local services or early-stage projects that need to look serious online without starting a complex build.",
            included: [
              "Custom landing page or small presentation website",
              "Mobile optimization",
              "Contact / WhatsApp CTA",
              "Basic SEO setup",
              "Fast-loading structure",
              "Launch support",
            ],
            timeline: "3-5 days",
            extras: ["Copywriting", "Extra section", "Gallery", "Tracking"],
            cta: "Explore package",
          },
          {
            id: "growth",
            name: "Growth",
            eyebrow: "Conversion focus",
            price: "600€",
            description:
              "For businesses that want a stronger brand presence, more clarity and a conversion-focused structure.",
            benefits: [
              "Multi-section website",
              "Refined visual direction",
              "Microinteractions",
              "Booking / contact flow",
              "Mobile-first polish",
            ],
            perfectFor:
              "Businesses with a clear offer that want a website to present the brand better, build trust and guide visitors toward requests, bookings or contact.",
            included: [
              "Multi-section website",
              "Refined visual direction",
              "Stronger animations and microinteractions",
              "Contact / reservation / booking section",
              "Basic SEO structure",
              "Social media integration",
              "Mobile-first polish",
              "Launch support",
            ],
            timeline: "1-2 weeks",
            extras: [
              "CMS",
              "Extra pages",
              "Extended SEO",
              "Analytics integration",
            ],
            cta: "Explore package",
            featured: true,
          },
          {
            id: "custom",
            name: "Custom Experience",
            eyebrow: "Tailored system",
            price: "Custom",
            description:
              "For brands that need something unique, advanced or highly tailored around the experience.",
            benefits: [
              "Custom structure",
              "Advanced UI/UX",
              "CMS / blog optional",
              "Multilingual optional",
              "Scalable long-term",
            ],
            perfectFor:
              "Brands, special concepts or projects that need a distinct digital experience, special features or a structure that can scale over time.",
            included: [
              "Custom website structure",
              "Advanced UI/UX direction",
              "CMS / blog optional",
              "Multilingual setup optional",
              "Booking / custom forms optional",
              "Advanced animations optional",
              "Scalable structure",
              "Launch support",
            ],
            timeline: "Depends on scope",
            extras: [
              "Content strategy",
              "Custom integrations",
              "Automations",
              "Design system",
            ],
            cta: "Explore package",
          },
        ] as ServicePackage[],
      },

      why: {
        badge: "Why FlowCraftStudio",
        title: "Why not just use a template?",
        text: "A template can look decent, but your business needs a structure shaped around your offer, your customer and the action you want them to take.",
        items: [
          {
            title: "Built around your business",
            text: "Your offer is not forced into a generic layout. The structure starts from what you sell and who you sell to.",
          },
          {
            title: "Mobile-first polish",
            text: "Not just responsive resizing, but an experience that feels natural on a phone.",
          },
          {
            title: "Memorable visual identity",
            text: "Colors, rhythm, spacing and details that make the website feel coherent and memorable.",
          },
          {
            title: "Conversion-focused structure",
            text: "Every section has a role: explain, build trust or guide people toward contact.",
          },
          {
            title: "Fast, clean, modern experience",
            text: "Clean code, fast pages and subtle interactions that do not overwhelm visitors.",
          },
          {
            title: "Launch guidance and support",
            text: "You get support with direction, content, launch and the steps after publishing.",
          },
        ] as SimpleItem[],
      },

      process: {
        badge: "Process",
        title: "A clear flow from idea to launch.",
        steps: [
          {
            step: "01",
            title: "Discovery",
            text: "I understand the business, the offer, the audience and the result you want.",
          },
          {
            step: "02",
            title: "Structure",
            text: "We map the sections, messages and flow that guide visitors toward action.",
          },
          {
            step: "03",
            title: "Design direction",
            text: "I build the visual direction: clear, refined and aligned with your brand.",
          },
          {
            step: "04",
            title: "Development",
            text: "I turn the direction into a fast, responsive website ready for launch.",
          },
          {
            step: "05",
            title: "Feedback & polish",
            text: "We refine content, spacing, mobile behavior, interactions and clarity.",
          },
          {
            step: "06",
            title: "Launch",
            text: "We publish the website and I guide you through domain, hosting and final checks.",
          },
        ] as ProcessStep[],
      },

      services: {
        badge: "What I can build",
        title: "Services that can shape the right package.",
        text: "The package sets the direction, and the services adapt to what your business actually needs.",
        items: [
          {
            title: "Presentation website",
            text: "A serious, clear and modern presence for businesses that want to build trust.",
          },
          {
            title: "Landing page",
            text: "A focused page built around requests, calls, bookings or sales.",
          },
          {
            title: "Redesign",
            text: "I turn an old or unclear website into a cleaner, faster and more convincing experience.",
          },
          {
            title: "CMS / Sanity",
            text: "Content, project, article or lead management when the project needs it.",
          },
          {
            title: "Booking / forms",
            text: "Contact, reservation or request flows adapted to your business.",
          },
          {
            title: "Maintenance",
            text: "Updates, small changes, checks and support after launch.",
          },
        ] as SimpleItem[],
      },

      final: {
        title: "Not sure which package fits?",
        text: "Tell me about your business and what you want to achieve, and I will suggest a clear direction without burying you in technical terms.",
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
                  href={`/${lang}/process`}
                  className="rounded-full border border-white/10 bg-white/4 px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/8"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-7 shadow-[0_0_48px_rgba(52,211,153,0.07)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(52,211,153,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.12),transparent_38%)]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  {t.heroNote}
                </p>

                <p className="mt-5 text-3xl font-bold tracking-tight text-white">
                  FlowCraftStudio
                </p>

                <p className="mt-4 leading-7 text-zinc-400">
                  {lang === "ro"
                    ? "Strategie, structură, design și dezvoltare într-un flow coerent, construit pentru business-uri care vor să pară mai clare și mai serioase online."
                    : "Strategy, structure, design and development in one coherent flow, built for businesses that want to feel clearer and more established online."}
                </p>
              </div>
            </div>
          </div>

          <ServicesPackages
            lang={lang}
            packages={t.packages.items}
            copy={t.packages}
          />

          <section className="mt-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.why.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.why.title}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">{t.why.text}</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.why.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-emerald-400/10 bg-emerald-400/5 p-6 shadow-[0_0_32px_rgba(52,211,153,0.045)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/24 hover:shadow-[0_0_44px_rgba(52,211,153,0.08)]"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 overflow-hidden rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-7 shadow-[0_0_52px_rgba(52,211,153,0.07)] backdrop-blur-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {t.process.badge}
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.process.title}
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.process.steps.map((step) => (
                <article
                  key={step.step}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-6"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(52,211,153,0.12),transparent_34%)]" />
                  <div className="relative">
                    <p className="text-sm font-black text-emerald-400">
                      {step.step}
                    </p>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-7 text-zinc-400">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.services.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.services.title}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">{t.services.text}</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-cyan-300/10 bg-cyan-300/5 p-7 shadow-[0_0_30px_rgba(34,211,238,0.045)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/24 hover:shadow-[0_0_40px_rgba(52,211,153,0.08)]"
                >
                  <div className="mb-6 h-10 w-10 rounded-2xl bg-emerald-400/10 shadow-[0_0_25px_rgba(52,211,153,0.12)] ring-1 ring-emerald-400/20 transition group-hover:bg-emerald-400/20" />
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">{service.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-8 shadow-[0_0_52px_rgba(52,211,153,0.07)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t.final.title}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {t.final.text}
            </p>

            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black shadow-[0_0_24px_rgba(52,211,153,0.16)] transition duration-300 hover:bg-emerald-300 hover:shadow-[0_0_36px_rgba(52,211,153,0.24)]"
            >
              {t.cta}
            </Link>
          </section>
          </section>
        </main>
      </PageReveal>

      <Footer lang={lang} />
    </>
  );
}
