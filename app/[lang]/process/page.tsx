import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Proces",
      title: "Cum lucrez, de la idee până la site lansat.",
      subtitle:
        "Un site bun nu începe cu designul. Începe cu înțelegerea business-ului, a clientului și a scopului final.",
      cta: "Hai să discutăm",
      steps: [
        {
          title: "Discuția inițială",
          text: "Îmi spui ce business ai, ce vrei să obții și ce probleme ai acum cu prezența online.",
        },
        {
          title: "Structură și strategie",
          text: "Stabilim ce pagini sunt necesare, ce trebuie să vadă clientul și cum îl ghidăm spre contact.",
        },
        {
          title: "Design și direcție vizuală",
          text: "Construim un stil clar, modern și potrivit afacerii tale, fără elemente puse doar ca să fie frumoase.",
        },
        {
          title: "Dezvoltare",
          text: "Transform designul într-un site rapid, responsive și pregătit să funcționeze corect pe telefon și desktop.",
        },
        {
          title: "Lansare",
          text: "Punem site-ul online, verificăm paginile, linkurile, formularele și experiența generală.",
        },
        {
          title: "Optimizare și suport",
          text: "După lansare putem ajusta texte, secțiuni și elemente pentru rezultate mai bune.",
        },
      ],
    },
    en: {
      badge: "Process",
      title: "How I work, from idea to launched website.",
      subtitle:
        "A good website doesn’t start with design. It starts with understanding the business, the customer and the final goal.",
      cta: "Let’s talk",
      steps: [
        {
          title: "Initial discussion",
          text: "You tell me what business you have, what you want to achieve and what problems you currently have online.",
        },
        {
          title: "Structure and strategy",
          text: "We define what pages are needed, what the customer needs to see and how we guide them toward contact.",
        },
        {
          title: "Visual direction",
          text: "We build a clear, modern style that fits your business, without adding elements just because they look nice.",
        },
        {
          title: "Development",
          text: "I turn the structure into a fast, responsive website that works properly on mobile and desktop.",
        },
        {
          title: "Launch",
          text: "We put the website online, test the pages, links, forms and overall experience.",
        },
        {
          title: "Optimization and support",
          text: "After launch, we can adjust copy, sections and elements to improve results.",
        },
      ],
    },
  }[lang];

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

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {t.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 font-bold text-black">
                    {index + 1}
                  </div>

                  <h2 className="text-xl font-semibold">{step.title}</h2>
                </div>

                <p className="mt-5 leading-7 text-zinc-400">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <h2 className="max-w-2xl text-3xl font-bold">
              {lang === "ro"
                ? "Vrei să începem cu o structură clară pentru site-ul tău?"
                : "Want to start with a clear structure for your website?"}
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-300">
              {lang === "ro"
                ? "Îmi spui ce business ai, iar eu te ajut să transformăm ideea într-un site serios, clar și orientat spre clienți."
                : "Tell me what business you have, and I’ll help turn the idea into a serious, clear and client-focused website."}
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
