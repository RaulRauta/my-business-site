import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

export default async function RestaurantConceptPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      badge: "Demo Concept",
      title: "Restaurant Concept",
      subtitle:
        "Un model de site pentru restaurante care vor să arate premium, să prezinte meniul clar și să ducă vizitatorul spre rezervare.",
      cta: "Vreau un site asemănător",
      back: "Înapoi la Projects",
      sections: [
        "Hero cinematic cu imagine, mesaj clar și buton de rezervare",
        "Secțiune de meniu organizată pe categorii",
        "Galerie pentru atmosferă, preparate și locație",
        "Secțiune de rezervări / contact rapid",
        "Design responsive pentru telefon",
      ],
      menuTitle: "Cum ar putea arăta structura",
      menuItems: [
        {
          title: "Homepage",
          text: "Prima impresie: atmosferă, poziționare și call-to-action clar.",
        },
        {
          title: "Meniu",
          text: "Preparatele organizate frumos, ușor de citit și adaptate pentru mobil.",
        },
        {
          title: "Rezervări",
          text: "Buton clar pentru apel, WhatsApp sau formular de rezervare.",
        },
      ],
      visualTitle: "Pentru ce tip de restaurant merge",
      visualText:
        "Perfect pentru restaurante, cafenele, wine bars, bistro-uri sau locații care vor o imagine online mai elegantă.",
      finalTitle: "Ai un restaurant și vrei un site asemănător?",
      finalText:
        "Putem porni de la această direcție și o adaptăm pentru stilul, meniul și atmosfera business-ului tău.",
    },
    en: {
      badge: "Demo Concept",
      title: "Restaurant Concept",
      subtitle:
        "A website model for restaurants that want to look premium, present the menu clearly and guide visitors toward booking.",
      cta: "I want something similar",
      back: "Back to Projects",
      sections: [
        "Cinematic hero with image, clear message and booking button",
        "Menu section organized by categories",
        "Gallery for atmosphere, dishes and location",
        "Reservation / quick contact section",
        "Responsive design for mobile",
      ],
      menuTitle: "How the structure could look",
      menuItems: [
        {
          title: "Homepage",
          text: "First impression: atmosphere, positioning and a clear call-to-action.",
        },
        {
          title: "Menu",
          text: "Dishes organized beautifully, easy to read and adapted for mobile.",
        },
        {
          title: "Bookings",
          text: "Clear button for call, WhatsApp or reservation form.",
        },
      ],
      visualTitle: "What type of restaurant it fits",
      visualText:
        "Perfect for restaurants, coffee shops, wine bars, bistros or places that want a more elegant online image.",
      finalTitle: "Have a restaurant and want something similar?",
      finalText:
        "We can start from this direction and adapt it to your style, menu and business atmosphere.",
    },
  }[lang];

  return (
    <>
      <Navbar lang={lang} />

      <main className="px-6 py-28">
        <section className="mx-auto max-w-7xl">
          <Link
            href={`/${lang}/projects`}
            className="text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            ← {t.back}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.badge}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                {t.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                {t.subtitle}
              </p>

              <Link
                href={`/${lang}/contact?package=growth&source=projects`}
                className="mt-9 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_55px_rgba(52,211,153,0.5)]"
              >
                {t.cta}
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-black/40 p-6 shadow-[0_0_80px_rgba(52,211,153,0.12)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.14),transparent_40%)]" />

              <div className="relative rounded-[1.5rem] border border-white/10 bg-black/45 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                    Aurelia
                  </p>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-400">
                    Reserve
                  </span>
                </div>

                <div className="mt-20">
                  <h2 className="text-4xl font-black tracking-tight text-white">
                    Fine dining, warm atmosphere.
                  </h2>

                  <p className="mt-5 max-w-md leading-7 text-zinc-400">
                    Seasonal dishes, elegant presentation and a booking flow
                    designed for mobile visitors.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  {["Menu", "Gallery", "Booking"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-semibold text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                Structure
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {t.menuTitle}
              </h2>
            </div>

            <div className="grid gap-5">
              {t.menuItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 rounded-3xl border border-emerald-400/10 bg-black/35 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Features
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {t.sections.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-300"
                >
                  <span className="mr-3 text-emerald-400">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {t.visualTitle}
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">{t.visualText}</p>
            </div>

            <div className="rounded-3xl border border-emerald-400/10 bg-black/40 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {t.finalTitle}
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">{t.finalText}</p>

              <Link
                href={`/${lang}/contact?package=growth&source=projects`}
                className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black shadow-[0_0_35px_rgba(52,211,153,0.25)] transition hover:bg-emerald-300 hover:shadow-[0_0_55px_rgba(52,211,153,0.5)]"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
