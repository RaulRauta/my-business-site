import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";
type PackageName = "Start" | "Growth" | "Custom";

type ServiceItem = {
  title: string;
  text: string;
};

type PackageItem = {
  name: PackageName;
  price: string;
  desc: string;
  items: string[];
  cta: string;
  featured: boolean;
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
      title: "Site-uri construite pentru imagine, claritate și clienți.",
      subtitle:
        "Construiesc site-uri care explică rapid ce oferi, inspiră încredere și duc vizitatorii spre acțiune.",
      cta: "Hai să discutăm",
      secondary: "Vezi procesul",

      core: {
        badge: "Ideea de bază",
        title:
          "Site-ul tău trebuie să fie un vânzător tăcut, nu doar o carte de vizită.",
        text: "Fiecare secțiune trebuie să aibă un scop: să explice, să convingă sau să ducă omul spre acțiune.",
      },

      servicesTitle: "Ce pot construi",
      servicesText:
        "De la site-uri simple de prezentare până la proiecte custom cu CMS, formular, lead-uri și structură adaptată.",
      services: [
        {
          title: "Site de prezentare",
          text: "Pentru afaceri care au nevoie de o imagine online serioasă, modernă și ușor de înțeles.",
        },
        {
          title: "Landing page",
          text: "O pagină concentrată pe un singur scop: cereri, apeluri, rezervări sau vânzări.",
        },
        {
          title: "Redesign",
          text: "Transform un site vechi, lent sau neclar într-unul curat, rapid și convingător.",
        },
        {
          title: "Optimizare conversii",
          text: "Îmbunătățesc structura, textele și experiența ca vizitatorii să acționeze mai ușor.",
        },
        {
          title: "Mentenanță",
          text: "Actualizări, mici modificări, verificări și suport ca site-ul să rămână stabil.",
        },
        {
          title: "CMS / Sanity",
          text: "Zonă de administrare pentru conținut, mesaje, proiecte sau lead-uri.",
        },
      ] as ServiceItem[],

      included: {
        badge: "Livrabile",
        title: "Ce primești concret",
        text: "Fără promisiuni vagi. Aici sunt lucrurile reale pe care le construim în jurul site-ului.",
        items: [
          "Design modern și responsive",
          "Structură clară pentru conversie",
          "Pagini rapide și curate",
          "Pregătire pentru SEO basic",
          "Formular de contact funcțional",
          "Lansare pe domeniul tău",
        ],
      },

      packages: {
        badge: "Pachete",
        title: "Alege direcția potrivită pentru business-ul tău.",
        from: "începând de la",
        customPrice: "preț personalizat",
        recommended: "Recomandat",
        note: "Prețurile sunt orientative și pot varia în funcție de complexitatea proiectului.",
        items: [
          {
            name: "Start",
            price: "300€",
            desc: "Pentru business-uri care vor o prezență online rapidă, clară și profesionistă.",
            items: [
              "Model optimizat",
              "1–3 pagini",
              "Text și imagini adaptate",
              "Design responsive",
              "Formular de contact",
            ],
            cta: "Alege Start",
            featured: false,
          },
          {
            name: "Growth",
            price: "600€",
            desc: "Pentru business-uri care vor un site mai complet, cu structură mai puternică.",
            items: [
              "4–6 pagini",
              "Structură orientată spre conversie",
              "CMS / conținut editabil",
              "Secțiuni extra",
              "Optimizare basic",
            ],
            cta: "Alege Growth",
            featured: true,
          },
          {
            name: "Custom",
            price: "",
            desc: "Pentru proiecte care au nevoie de o abordare complet personalizată.",
            items: [
              "Design construit de la zero",
              "Structură custom",
              "Funcționalități speciale",
              "Integrare backend",
              "Consultanță și suport",
            ],
            cta: "Discută Custom",
            featured: false,
          },
        ] as PackageItem[],
      },

      final: {
        title: "Nu știi exact ce îți trebuie?",
        text: "Îmi spui ce business ai și îți pot propune o structură potrivită, fără să te pierd în termeni tehnici.",
      },
    },

    en: {
      badge: "Services",
      title: "Websites built for image, clarity and customers.",
      subtitle:
        "I build websites that explain your offer fast, build trust and guide visitors toward action.",
      cta: "Let’s talk",
      secondary: "See process",

      core: {
        badge: "Core idea",
        title:
          "Your website should be a silent salesperson, not just a business card.",
        text: "Every section needs a purpose: explain, convince or guide people toward action.",
      },

      servicesTitle: "What I can build",
      servicesText:
        "From simple presentation websites to custom projects with CMS, forms, leads and adapted structure.",
      services: [
        {
          title: "Presentation website",
          text: "For businesses that need a serious, modern and easy-to-understand online presence.",
        },
        {
          title: "Landing page",
          text: "A focused page built around one goal: requests, calls, bookings or sales.",
        },
        {
          title: "Redesign",
          text: "I turn old, slow or unclear websites into clean, fast and convincing ones.",
        },
        {
          title: "Conversion optimization",
          text: "I improve structure, copy and experience so visitors take action more easily.",
        },
        {
          title: "Maintenance",
          text: "Updates, small changes, checks and support so your website stays stable.",
        },
        {
          title: "CMS / Sanity",
          text: "An admin area for content, messages, projects or leads.",
        },
      ] as ServiceItem[],

      included: {
        badge: "Deliverables",
        title: "What you get",
        text: "No vague promises. These are the real things we build around the website.",
        items: [
          "Modern responsive design",
          "Clear conversion structure",
          "Fast and clean pages",
          "Basic SEO preparation",
          "Working contact form",
          "Launch on your domain",
        ],
      },

      packages: {
        badge: "Packages",
        title: "Choose the right direction for your business.",
        from: "starting from",
        customPrice: "custom pricing",
        recommended: "Recommended",
        note: "Prices are guidelines and may vary depending on project complexity.",
        items: [
          {
            name: "Start",
            price: "300€",
            desc: "For businesses that want a fast, clear and professional online presence.",
            items: [
              "Optimized model",
              "1–3 pages",
              "Text and images adapted",
              "Responsive design",
              "Contact form",
            ],
            cta: "Choose Start",
            featured: false,
          },
          {
            name: "Growth",
            price: "600€",
            desc: "For businesses that want a more complete website with a stronger structure.",
            items: [
              "4–6 pages",
              "Conversion-focused structure",
              "CMS / editable content",
              "Extra sections",
              "Basic optimization",
            ],
            cta: "Choose Growth",
            featured: true,
          },
          {
            name: "Custom",
            price: "",
            desc: "For projects that need a fully personalized approach.",
            items: [
              "Design built from zero",
              "Custom structure",
              "Special features",
              "Backend integration",
              "Consulting and support",
            ],
            cta: "Discuss Custom",
            featured: false,
          },
        ] as PackageItem[],
      },

      final: {
        title: "Not sure exactly what you need?",
        text: "Tell me about your business and I can suggest the right structure without drowning you in technical terms.",
      },
    },
  }[lang];

  function packageCardClass(pack: PackageItem) {
    if (pack.featured) {
      return "border border-emerald-400/40 bg-emerald-400/[0.07] shadow-[0_0_80px_rgba(52,211,153,0.16)]";
    }

    if (pack.name === "Custom") {
      return "border border-cyan-400/20 bg-black/45 shadow-[0_0_70px_rgba(34,211,238,0.08)]";
    }

    return "border border-emerald-400/10 bg-black/35 hover:border-emerald-400/40 hover:shadow-[0_0_55px_rgba(52,211,153,0.12)]";
  }

  function packageButtonClass(pack: PackageItem) {
    if (pack.featured) {
      return "bg-emerald-400 text-black hover:bg-emerald-300";
    }

    if (pack.name === "Custom") {
      return "border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400 hover:text-black";
    }

    return "border border-white/10 bg-white/[0.04] text-white hover:border-emerald-400/40 hover:bg-white/[0.08]";
  }

  return (
    <>
      <Navbar lang={lang} />

      <main className="px-6 py-24">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {t.badge}
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                {t.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {t.subtitle}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/${lang}/contact`}
                  className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_50px_rgba(52,211,153,0.45)]"
                >
                  {t.cta}
                </Link>

                <Link
                  href={`/${lang}/process`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-center font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/[0.08]"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-400/10 bg-black/35 p-7 shadow-[0_0_60px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              <p className="text-sm font-semibold text-emerald-400">
                {t.core.badge}
              </p>

              <p className="mt-4 text-2xl font-bold tracking-tight text-white">
                {t.core.title}
              </p>

              <p className="mt-4 leading-7 text-zinc-400">{t.core.text}</p>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {lang === "ro" ? "Servicii" : "Services"}
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.servicesTitle}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              {t.servicesText}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-black/30 p-7 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_55px_rgba(52,211,153,0.12)]"
                >
                  <div className="mb-6 h-10 w-10 rounded-2xl bg-emerald-400/10 shadow-[0_0_25px_rgba(52,211,153,0.12)] ring-1 ring-emerald-400/20 transition group-hover:bg-emerald-400/20" />

                  <h2 className="text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-zinc-400">{service.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.included.badge}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.included.title}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">{t.included.text}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.included.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-300 backdrop-blur-xl"
                >
                  <span className="mr-3 text-emerald-400">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {t.packages.badge}
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.packages.title}
            </h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.packages.items.map((pack) => (
                <article
                  key={pack.name}
                  className={`relative rounded-3xl p-7 backdrop-blur-xl transition hover:-translate-y-1 ${packageCardClass(
                    pack,
                  )}`}
                >
                  {pack.featured && (
                    <p className="mb-5 w-fit rounded-full bg-emerald-400 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
                      {t.packages.recommended}
                    </p>
                  )}

                  {pack.name === "Custom" && (
                    <p className="mb-5 w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Premium
                    </p>
                  )}

                  <h3 className="text-2xl font-bold text-white">{pack.name}</h3>

                  <div className="mt-4">
                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                      {pack.price ? t.packages.from : t.packages.customPrice}
                    </p>

                    <p className="mt-1 text-4xl font-black tracking-tight text-white">
                      {pack.price || "Custom"}
                    </p>
                  </div>

                  <p className="mt-5 min-h-[84px] leading-7 text-zinc-400">
                    {pack.desc}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {pack.items.map((item) => (
                      <p key={item} className="text-sm text-zinc-300">
                        <span className="mr-2 text-emerald-400">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>

                  <Link
                    href={`/${lang}/contact?package=${pack.name.toLowerCase()}&source=services`}
                    className={`mt-8 block rounded-full px-6 py-3 text-center font-semibold transition ${packageButtonClass(
                      pack,
                    )}`}
                  >
                    {pack.cta}
                  </Link>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm text-zinc-500">{t.packages.note}</p>
          </div>

          <div className="mt-20 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t.final.title}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {t.final.text}
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
