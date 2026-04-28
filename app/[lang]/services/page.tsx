import Link from "next/link";
import Navbar from "@/components/Navbar";
import { translations } from "@/lib/translations";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const content = {
    ro: {
      title: "Servicii gândite să transforme vizitatorii în clienți.",
      subtitle:
        "Nu construiesc doar site-uri frumoase. Construiesc experiențe online clare, rapide și orientate spre rezultate.",
      badge: "Servicii",
      cta: "Hai să discutăm",
      services: [
        {
          title: "Site de prezentare",
          text: "Pentru afaceri care au nevoie de o prezență online serioasă, modernă și ușor de înțeles.",
        },
        {
          title: "Landing page",
          text: "O pagină concentrată pe un singur scop: să transforme vizitatorii în cereri, apeluri sau programări.",
        },
        {
          title: "Redesign site existent",
          text: "Refac site-uri vechi, lente sau neclare și le transform în ceva modern, rapid și convingător.",
        },
        {
          title: "Optimizare pentru conversii",
          text: "Îmbunătățesc structura, textele și experiența utilizatorului ca site-ul să vândă mai bine.",
        },
        {
          title: "Mentenanță",
          text: "Actualizări, modificări, ajustări și suport ca site-ul să rămână curat și funcțional.",
        },
        {
          title: "Sanity CMS",
          text: "Îți pot face un sistem simplu prin care să administrezi texte, mesaje, proiecte sau conținut.",
        },
      ],
    },

    en: {
      title: "Services designed to turn visitors into customers.",
      subtitle:
        "I don’t just build good-looking websites. I build clear, fast online experiences focused on results.",
      badge: "Services",
      cta: "Let’s talk",
      services: [
        {
          title: "Presentation website",
          text: "For businesses that need a serious, modern and easy-to-understand online presence.",
        },
        {
          title: "Landing page",
          text: "A focused page built around one goal: turning visitors into leads, calls or bookings.",
        },
        {
          title: "Website redesign",
          text: "I rebuild outdated, slow or unclear websites into something modern, fast and convincing.",
        },
        {
          title: "Conversion optimization",
          text: "I improve structure, copy and user experience so the website performs better.",
        },
        {
          title: "Maintenance",
          text: "Updates, adjustments and support so the website stays clean, functional and reliable.",
        },
        {
          title: "Sanity CMS",
          text: "I can build a simple system where you manage content, messages, projects or leads.",
        },
      ],
    },
  };

  const t = content[lang] ?? content.ro;

  return (
    <>
      <Navbar lang={lang} />

      <main className="min-h-screen px-6 py-28">
        <section className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {t.badge}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300">{t.subtitle}</p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.06]"
              >
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {service.text}
                </p>
              </div>
            ))}
            <div className="mt-20 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
                {lang === "ro" ? "Diferența" : "The difference"}
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                {lang === "ro"
                  ? "Nu fac doar site-uri. Construiesc sisteme care aduc clienți."
                  : "I don’t just build websites. I build systems that bring clients."}
              </h2>

              <p className="mt-6 text-zinc-300">
                {lang === "ro"
                  ? "Majoritatea site-urilor arată bine, dar nu fac nimic. Eu mă concentrez pe structură, claritate și experiență, astfel încât oamenii să înțeleagă rapid ce oferi și să acționeze."
                  : "Most websites look good, but do nothing. I focus on structure, clarity and user experience so people understand quickly and take action."}
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold">
              {lang === "ro"
                ? "Ai nevoie de un site care să lucreze pentru tine?"
                : "Need a website that works for your business?"}
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-300">
              {lang === "ro"
                ? "Spune-mi ce business ai, iar eu îți pot propune o structură clară pentru un site care arată bine și are un scop real."
                : "Tell me about your business, and I can suggest a clear structure for a website that looks good and has a real purpose."}
            </p>

            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black transition hover:bg-emerald-300"
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
