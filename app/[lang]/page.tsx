import Intro from "@/components/Intro";
import { translations } from "@/lib/translations";

type Lang = "ro" | "en";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const t = translations[lang] ?? translations.ro;

  return (
    <main>
      <Intro />

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
          {t.heroTitle}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-300">{t.heroSubtitle}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={`/${lang}/contact`}
            className="rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black transition hover:bg-emerald-300"
          >
            {t.ctaPrimary}
          </a>

          <a
            href={`/${lang}/services`}
            className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </section>
    </main>
  );
}
