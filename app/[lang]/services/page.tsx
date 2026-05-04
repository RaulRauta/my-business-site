import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

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
        "Nu fac doar pagini care arată bine. Construiesc site-uri care explică rapid ce oferi, inspiră încredere și duc omul spre contact.",
      cta: "Hai să discutăm",
      secondary: "Vezi procesul",
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
          text: "Îți pot face o zonă de administrare pentru conținut, mesaje, proiecte sau lead-uri.",
        },
      ],
      includedTitle: "Ce primești concret",
      included: [
        "Design modern și responsive",
        "Structură clară pentru conversie",
        "Texte provizorii optimizate",
        "Pagini rapide și curate",
        "Pregătire pentru SEO basic",
        "Formular de contact pregătit pentru backend",
      ],
      packagesTitle: "Pachete orientative",
      packages: [
        {
          name: "Start",
          desc: "Pentru o afacere care are nevoie de o prezență online simplă și serioasă.",
          items: ["1–3 pagini", "Design responsive", "Contact simplu"],
        },
        {
          name: "Growth",
          desc: "Pentru business-uri care vor un site mai complet și orientat spre clienți.",
          items: [
            "4–6 pagini",
            "Structură de conversie",
            "CMS / conținut editabil",
          ],
        },
        {
          name: "Custom",
          desc: "Pentru proiecte mai complexe, cu funcționalități speciale și integrare backend.",
          items: [
            "Funcții custom",
            "Sanity / email / lead-uri",
            "Optimizare și suport",
          ],
        },
      ],
    },
    en: {
      badge: "Services",
      title: "Websites built for image, clarity and customers.",
      subtitle:
        "I don’t just build pages that look good. I build websites that explain your offer quickly, build trust and guide people toward contact.",
      cta: "Let’s talk",
      secondary: "See process",
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
          text: "I can build an admin area for content, messages, projects or leads.",
        },
      ],
      includedTitle: "What you get",
      included: [
        "Modern responsive design",
        "Clear conversion structure",
        "Optimized placeholder copy",
        "Fast and clean pages",
        "Basic SEO preparation",
        "Contact form ready for backend",
      ],
      packagesTitle: "Guideline packages",
      packages: [
        {
          name: "Start",
          desc: "For a business that needs a simple and serious online presence.",
          items: ["1–3 pages", "Responsive design", "Simple contact"],
        },
        {
          name: "Growth",
          desc: "For businesses that want a more complete, customer-focused website.",
          items: [
            "4–6 pages",
            "Conversion structure",
            "CMS / editable content",
          ],
        },
        {
          name: "Custom",
          desc: "For more complex projects with special features and backend integration.",
          items: [
            "Custom features",
            "Sanity / email / leads",
            "Optimization and support",
          ],
        },
      ],
    },
  }[lang];

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
                {lang === "ro" ? "Ideea de bază" : "Core idea"}
              </p>
              <p className="mt-4 text-2xl font-bold tracking-tight text-white">
                {lang === "ro"
                  ? "Site-ul tău trebuie să fie un vânzător tăcut, nu doar o carte de vizită."
                  : "Your website should be a silent salesperson, not just a business card."}
              </p>
              <p className="mt-4 leading-7 text-zinc-400">
                {lang === "ro"
                  ? "Fiecare secțiune trebuie să aibă un scop: să explice, să convingă sau să ducă omul spre acțiune."
                  : "Every section needs a purpose: explain, convince or guide people toward action."}
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {lang === "ro" ? "Livrabile" : "Deliverables"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.includedTitle}
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                {lang === "ro"
                  ? "Fără promisiuni vagi. Aici sunt lucrurile reale pe care le construim în jurul site-ului."
                  : "No vague promises. These are the real things we build around the website."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.included.map((item) => (
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

          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {lang === "ro" ? "Structură" : "Structure"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.packagesTitle}
            </h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.packages.map((pack) => (
                <article
                  key={pack.name}
                  className="rounded-3xl border border-emerald-400/10 bg-black/35 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_55px_rgba(52,211,153,0.12)]"
                >
                  <h3 className="text-2xl font-bold text-white">{pack.name}</h3>

                  <p className="mt-4 min-h-[84px] leading-7 text-zinc-400">
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
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {lang === "ro"
                ? "Nu știi exact ce îți trebuie?"
                : "Not sure exactly what you need?"}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {lang === "ro"
                ? "Îmi spui ce business ai și îți pot propune o structură potrivită, fără să te pierd în termeni tehnici."
                : "Tell me about your business and I can suggest the right structure without drowning you in technical terms."}
              <h2 className="text-3xl font-bold text-white mt-20">
                {lang === "ro" ? "Pentru cine este" : "Who this is for"}
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "Business-uri locale fără site",
                  "Site-uri vechi care nu aduc clienți",
                  "Oameni care vor ceva simplu și clar",
                  "Startup-uri care au nevoie de prezență online rapid",
                ].map((item) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-zinc-300">
                    ✦ {item}
                  </div>
                ))}
              </div>
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
