import Link from "next/link";

type Lang = "ro" | "en";

export default async function RestaurantDemoPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      navMenu: "Meniu",
      navStory: "Poveste",
      navGallery: "Galerie",
      navReserve: "Rezervare",

      heroTitle: "Fine dining într-o atmosferă caldă și elegantă.",
      heroText:
        "Un concept demo pentru restaurante care vor un site modern, cinematic și orientat spre rezervări.",
      heroButton: "Rezervă o masă",

      menuBadge: "Meniu",
      menuTitle: "Preparatele semnătură",

      storyBadge: "Poveste",
      storyTitle: "Ingrediente simple. Experiență premium.",
      storyText:
        "Acest demo arată cum poate arăta un site pentru un restaurant care vrea să transmită atmosferă, rafinament și claritate.",

      galleryBadge: "Galerie",
      galleryTitle: "Atmosferă și plating",

      reserveBadge: "Rezervare",
      reserveTitle: "Pregătit să transformi ideea în ceva real?",
      reserveText:
        "Acest demo poate deveni baza unui site personalizat pentru restaurantul tău.",
      reserveButton: "Contactează FlowCraft",
    },

    en: {
      navMenu: "Menu",
      navStory: "Story",
      navGallery: "Gallery",
      navReserve: "Booking",

      heroTitle: "Fine dining in a warm and elegant atmosphere.",
      heroText:
        "A demo concept for restaurants that want a modern, cinematic website focused on bookings.",
      heroButton: "Book a table",

      menuBadge: "Menu",
      menuTitle: "Signature dishes",

      storyBadge: "Story",
      storyTitle: "Simple ingredients. Premium experience.",
      storyText:
        "This demo shows how a website can look for a restaurant that wants to communicate atmosphere, elegance and clarity.",

      galleryBadge: "Gallery",
      galleryTitle: "Atmosphere and plating",

      reserveBadge: "Booking",
      reserveTitle: "Ready to turn the idea into something real?",
      reserveText:
        "This demo can become the base of a custom website for your restaurant.",
      reserveButton: "Contact FlowCraft",
    },
  }[lang];

  const dishes = [
    {
      name: "Black Angus Steak",
      desc: "Smoked butter / herbs / potato purée",
    },
    {
      name: "Truffle Pasta",
      desc: "Fresh pasta / parmesan / black truffle",
    },
    {
      name: "Salmon Teriyaki",
      desc: "Sticky glaze / sesame / greens",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xl font-black tracking-tight">AURELIA</p>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">
              Fine Dining
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
            <a href="#menu" className="transition hover:text-white">
              {t.navMenu}
            </a>

            <a href="#story" className="transition hover:text-white">
              {t.navStory}
            </a>

            <a href="#gallery" className="transition hover:text-white">
              {t.navGallery}
            </a>

            <a href="#booking" className="transition hover:text-white">
              {t.navReserve}
            </a>
          </nav>

          <button className="rounded-full border border-amber-300/20 bg-amber-300 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-200">
            Reserve
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center scale-105" />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/65" />

          {/* CINEMATIC LIGHT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,140,0.18),transparent_40%)]" />

          {/* VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-amber-200">
              Restaurant Concept
            </p>

            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              {t.heroText}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-amber-200 px-8 py-4 text-lg font-semibold text-black transition hover:bg-amber-100">
                {t.heroButton}
              </button>

              <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* FLOATING INFO CARD */}
        <div className="absolute bottom-10 right-10 hidden rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-xl lg:block">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
            Aurelia
          </p>

          <p className="mt-4 max-w-xs text-zinc-300">
            Fine dining experience with cinematic atmosphere and modern
            presentation.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            {t.menuBadge}
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            {t.menuTitle}
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className="rounded-[2rem] border border-white/10 bg-zinc-900/60 p-7"
              >
                <div className="h-56 rounded-[1.5rem] bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

                <h3 className="mt-6 text-2xl font-bold">{dish.name}</h3>

                <p className="mt-3 text-zinc-400">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10">
            <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              {t.storyBadge}
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              {t.storyTitle}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              {t.storyText}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            {t.galleryBadge}
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            {t.galleryTitle}
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              "photo-1414235077428-338989a2e8c0",
              "photo-1552566626-52f8b828add9",
              "photo-1514933651103-005eec06c04b",
            ].map((id) => (
              <div
                key={id}
                className={`aspect-[4/5] rounded-[2rem] border border-white/10 bg-cover bg-center`}
                style={{
                  backgroundImage: `url(https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="booking" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-amber-300/10 bg-zinc-900/70 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            {t.reserveBadge}
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            {t.reserveTitle}
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            {t.reserveText}
          </p>

          <Link
            href={`/${lang}/contact`}
            className="mt-10 inline-block rounded-full bg-amber-300 px-7 py-4 font-semibold text-black transition hover:bg-amber-200"
          >
            {t.reserveButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
