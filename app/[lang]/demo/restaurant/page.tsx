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
      navStory: "Experiență",
      navGallery: "Galerie",
      navReserve: "Rezervare",

      heroTitle:
        "Foc, atmosferă și fine dining într-un spațiu construit pentru experiență.",
      heroText:
        "AURELIA combină atmosfera cinematică, plating-ul modern și o experiență rafinată într-un spațiu creat pentru seri memorabile.",
      heroButton: "Rezervă o masă",

      menuBadge: "Meniu",
      menuTitle: "Preparatele semnătură",

      storyBadge: "Experiență",
      storyTitle: "Ingrediente simple. Experiență rafinată.",
      storyText:
        "Acest demo arată cum poate arăta un site pentru un restaurant care vrea să transmită atmosferă, rafinament și claritate.",

      galleryBadge: "Galerie",
      galleryTitle: "Detalii care definesc experiența",

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

      heroTitle:
        "Fire, atmosphere and fine dining built around the experience.",
      heroText:
        "AURELIA blends cinematic atmosphere, modern plating and refined dining into a space designed for memorable evenings.",
      heroButton: "Book a table",

      menuBadge: "Menu",
      menuTitle: "Signature dishes",

      storyBadge: "Story",
      storyTitle: "Simple ingredients. Refined experience.",
      storyText:
        "This demo shows how a website can look for a restaurant that wants to communicate atmosphere, elegance and clarity.",

      galleryBadge: "Gallery",
      galleryTitle: "Details that shape the experience",

      reserveBadge: "Booking",
      reserveTitle: "Ready to turn the idea into something real?",
      reserveText:
        "This demo can become the base of a custom website for your restaurant.",
      reserveButton: "Contact FlowCraft",
    },
  }[lang];

  const menuCategories = [
    {
      title: lang === "ro" ? "Starters" : "Starters",
      items: [
        {
          name: "Charred Burrata",
          desc: "Smoked tomatoes / basil oil / sourdough",
          price: "€18",
        },
        {
          name: "Beef Tartare",
          desc: "Cured egg yolk / mustard seeds / grilled bread",
          price: "€22",
        },
      ],
    },
    {
      title: lang === "ro" ? "Main Courses" : "Main Courses",
      items: [
        {
          name: "Black Angus Steak",
          desc: "Smoked butter / herbs / potato purée",
          price: "€38",
        },
        {
          name: "Truffle Pasta",
          desc: "Fresh pasta / parmesan / black truffle",
          price: "€26",
        },
        {
          name: "Salmon Teriyaki",
          desc: "Sticky glaze / sesame / greens",
          price: "€31",
        },
      ],
    },
    {
      title: lang === "ro" ? "Desserts" : "Desserts",
      items: [
        {
          name: "Burnt Basque Cheesecake",
          desc: "Vanilla cream / sea salt caramel",
          price: "€14",
        },
        {
          name: "Dark Chocolate Crémeux",
          desc: "Coffee crumble / smoked cream",
          price: "€16",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="relative z-60 bg-amber-200 px-3 py-2 text-center text-[10px] font-semibold leading-5 text-black sm:px-4 sm:text-xs">
        {lang === "ro"
          ? "Demo website creat de FlowCraft Studio — restaurant fictiv folosit pentru prezentare."
          : "Demo website created by FlowCraft Studio — fictional restaurant used for presentation."}
      </div>
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between px-4 sm:mt-14">
          <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-3 shadow-[0_0_45px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <a href="#" className="group">
              <p className="text-lg font-black tracking-tight text-white transition group-hover:text-amber-200">
                AURELIA
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/70">
                Fire Dining
              </p>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
              <a href="#menu" className="transition hover:text-amber-200">
                {t.navMenu}
              </a>
              <a href="#story" className="transition hover:text-amber-200">
                {t.navStory}
              </a>
              <a href="#gallery" className="transition hover:text-amber-200">
                {t.navGallery}
              </a>
            </nav>
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="#menu"
                className="rounded-full border border-white/10 bg-white/4 px-3 py-2 text-xs font-semibold text-zinc-300"
              >
                Menu
              </a>

              <a
                href="#booking"
                className="rounded-full bg-amber-200 px-4 py-2 text-xs font-semibold text-black"
              >
                Book
              </a>
            </div>
            <a
              href="#booking"
              className="hidden rounded-full bg-amber-200 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-100 md:block"
            >
              {t.navReserve}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center animate-[slowZoom_18s_ease-in-out_infinite_alternate]" />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/65" />

          {/* CINEMATIC LIGHT */}
          <div className="absolute inset-0 animate-[ambientFloat_10s_ease-in-out_infinite] bg-[radial-gradient(circle_at_top,rgba(255,220,140,0.18),transparent_40%)]" />

          {/* VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 sm:py-32">
          <div className="max-w-3xl animate-[heroReveal_0.9s_ease-out_both]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-amber-200 sm:text-sm sm:tracking-[0.45em]">
              AURELIA • FIRE DINING
            </p>

            <h1 className="mt-6 text-[2.7rem] font-black leading-[0.92] tracking-tight text-white sm:mt-8 sm:text-6xl md:text-8xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:mt-7 sm:text-xl sm:leading-9">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-3">
              {[
                lang === "ro" ? "Open Fire Kitchen" : "Open Fire Kitchen",
                lang === "ro" ? "Chef Experience" : "Chef Experience",
                lang === "ro" ? "Reservation Only" : "Reservation Only",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/4 px-3 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4">
              <a
                href="#booking"
                className="w-full rounded-full bg-amber-200 px-6 py-3 text-center text-base font-semibold text-black transition hover:bg-amber-100 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                {t.heroButton}
              </a>

              <a
                href="#menu"
                className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                {lang === "ro" ? "Vezi meniul" : "View Menu"}
              </a>
            </div>
          </div>
        </div>

        {/* FLOATING EXPERIENCE CARD */}
        <div className="absolute bottom-10 right-10 hidden w-[320px] animate-[softFloat_6s_ease-in-out_infinite] overflow-hidden rounded-4xl border border-white/10 bg-black/45 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block">
          <div className="h-40 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

          <div className="p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200">
              AURELIA EXPERIENCE
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white">
              {lang === "ro"
                ? "Fine dining construit în jurul atmosferei."
                : "Fine dining built around atmosphere."}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {lang === "ro"
                ? "Un spațiu modern unde focul, plating-ul și lumina definesc experiența."
                : "A modern space where fire, plating and light define the experience."}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-zinc-500">
              <span>Since 2019</span>
              <span className="text-amber-200">Fine Dining</span>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200">
                {t.menuBadge}
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                {t.menuTitle}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                {lang === "ro"
                  ? "Un meniu construit în jurul focului, ingredientelor sezoniere și plating-ului modern."
                  : "A menu built around fire, seasonal ingredients and modern plating."}
              </p>
            </div>

            <a
              href="#booking"
              className="w-fit rounded-full border border-amber-200/20 bg-amber-200/10 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-200 hover:text-black"
            >
              {lang === "ro" ? "Rezervă experiența" : "Book the experience"}
            </a>
          </div>

          {/* CHEF HIGHLIGHTS */}
          <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="group relative min-h-130 overflow-hidden rounded-[2.5rem] border border-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-200">
                  Chef’s Highlight
                </p>

                <h3 className="mt-4 max-w-xl text-4xl font-black tracking-tight text-white">
                  Black Angus over open fire.
                </h3>

                <p className="mt-5 max-w-md leading-7 text-zinc-300">
                  {lang === "ro"
                    ? "Unt afumat, ierburi proaspete și piure fin de cartofi."
                    : "Smoked butter, fresh herbs and silky potato purée."}
                </p>

                <p className="mt-6 text-2xl font-semibold text-amber-200">
                  €38
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  name: "Truffle Pasta",
                  desc:
                    lang === "ro"
                      ? "Paste proaspete, parmezan și trufe negre."
                      : "Fresh pasta, parmesan and black truffle.",
                  price: "€26",
                  image:
                    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  name: "Dark Chocolate Crémeux",
                  desc:
                    lang === "ro"
                      ? "Crumble de cafea și cremă afumată."
                      : "Coffee crumble and smoked cream.",
                  price: "€16",
                  image:
                    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group grid overflow-hidden rounded-4xl border border-white/10 bg-zinc-950/70 md:grid-cols-[0.8fr_1.2fr]"
                >
                  <div
                    className="min-h-55 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
                      Signature
                    </p>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">{item.desc}</p>

                    <p className="mt-6 text-xl font-semibold text-amber-200">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FULL MENU */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {menuCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-4xl border border-white/10 bg-black/35 p-7 shadow-[0_0_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-amber-200/30 hover:shadow-[0_0_70px_rgba(251,191,36,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
                  {category.title}
                </p>

                <div className="mt-7 grid gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold text-white">
                          {item.name}
                        </h3>

                        <span className="shrink-0 text-lg font-semibold text-amber-200">
                          {item.price}
                        </span>
                      </div>

                      <p className="mt-3 leading-7 text-zinc-400">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="story" className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200">
                {lang === "ro" ? "Experiență" : "Experience"}
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                {lang === "ro"
                  ? "Nu vii doar pentru mâncare. Vii pentru seară."
                  : "You do not come only for food. You come for the evening."}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                {lang === "ro"
                  ? "AURELIA este construită în jurul atmosferei: lumină caldă, foc deschis, plating modern și un ritm lent care lasă loc conversațiilor."
                  : "AURELIA is built around atmosphere: warm light, open fire, modern plating and a slower rhythm that leaves space for conversation."}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  lang === "ro" ? "Foc deschis" : "Open fire",
                  lang === "ro" ? "Lumină caldă" : "Warm light",
                  lang === "ro" ? "Meniu sezonier" : "Seasonal menu",
                  lang === "ro" ? "Rezervări intime" : "Intimate bookings",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-sm font-semibold text-zinc-300"
                  >
                    <span className="mr-3 text-amber-200">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group relative min-h-130 overflow-hidden rounded-[2.5rem] border border-white/10 sm:row-span-2">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-7">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200">
                    Slow evenings
                  </p>
                  <p className="mt-3 leading-7 text-zinc-300">
                    {lang === "ro"
                      ? "Un spațiu creat pentru mese lungi și conversații reale."
                      : "A space created for long dinners and real conversations."}
                  </p>
                </div>
              </div>

              <div className="group relative min-h-62.5 overflow-hidden rounded-4xl border border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Bar & wine
                </p>
              </div>

              <div className="group relative min-h-62.5 overflow-hidden rounded-4xl border border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Chef details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative overflow-hidden px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-200">
                {t.galleryBadge}
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                {t.galleryTitle}
              </h2>
            </div>

            <p className="max-w-md leading-7 text-zinc-500">
              {lang === "ro"
                ? "Detalii, texturi și momente construite pentru o experiență care rămâne în minte."
                : "Details, textures and moments shaped for an experience that stays with you."}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="group relative min-h-130 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-1 hover:border-amber-200/25 hover:shadow-[0_0_90px_rgba(251,191,36,0.08)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-amber-200 backdrop-blur-sm">
                    Atmosphere
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-zinc-300 backdrop-blur-sm">
                    Fine Dining
                  </span>
                </div>
                <p className="mt-3 max-w-md text-zinc-300">
                  {lang === "ro"
                    ? "Lumină caldă, mese lungi și o atmosferă construită în jurul conversațiilor."
                    : "Warm light, long tables and an atmosphere built around conversation."}
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
                  label: lang === "ro" ? "Interior" : "Interior",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
                  label: lang === "ro" ? "Bar & atmosferă" : "Bar & atmosphere",
                },
              ].map((item) => (
                <div
                  key={item.image}
                  className="group relative min-h-61.75 overflow-hidden rounded-4xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.2)] transition duration-500 hover:-translate-y-1 hover:border-amber-200/20"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

                  <p className="absolute bottom-6 left-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION EXPERIENCE */}
      <section
        id="booking"
        className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center scale-105" />
          <div className="absolute inset-0 bg-black/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-4xl border border-white/10 bg-black/45 p-7 backdrop-blur-xl sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              {t.reserveBadge}
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              {lang === "ro"
                ? "Rezervă o seară la AURELIA."
                : "Book an evening at AURELIA."}
            </h2>

            <p className="mt-6 leading-8 text-zinc-300">
              {lang === "ro"
                ? "Alege data, ora și numărul de persoane. Formularul este demo, dar arată cum ar putea funcționa rezervarea pe un site real."
                : "Choose the date, time and number of guests. This is a demo form, showing how booking could work on a real website."}
            </p>

            <div className="mt-9 grid gap-4">
              {[
                lang === "ro" ? "Marți–Duminică" : "Tue–Sun",
                "18:00–23:00",
                "+40 700 000 000",
                "Strada Luminii 12, București",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-sm font-semibold text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-black/55 p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder={lang === "ro" ? "Nume" : "Name"}
                className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-amber-200/50"
              />

              <input
                type="tel"
                placeholder={lang === "ro" ? "Telefon" : "Phone"}
                className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-amber-200/50"
              />

              <input
                type="date"
                className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-zinc-400 outline-none focus:border-amber-200/50"
              />

              <input
                type="time"
                className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-zinc-400 outline-none focus:border-amber-200/50"
              />

              <select className="rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-zinc-400 outline-none focus:border-amber-200/50 sm:col-span-2">
                <option>{lang === "ro" ? "2 persoane" : "2 guests"}</option>
                <option>{lang === "ro" ? "3 persoane" : "3 guests"}</option>
                <option>{lang === "ro" ? "4 persoane" : "4 guests"}</option>
                <option>{lang === "ro" ? "5+ persoane" : "5+ guests"}</option>
              </select>

              <textarea
                rows={4}
                placeholder={
                  lang === "ro" ? "Mesaj opțional" : "Optional message"
                }
                className="resize-none rounded-2xl border border-white/10 bg-white/4 px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-amber-200/50 sm:col-span-2"
              />
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-amber-200 px-8 py-4 text-base font-semibold text-black transition hover:bg-amber-100"
            >
              {lang === "ro" ? "Trimite rezervarea" : "Send reservation"}
            </button>

            <p className="mt-5 text-center text-xs leading-6 text-zinc-500">
              {lang === "ro"
                ? "Formular demo — datele nu sunt trimise către un restaurant real."
                : "Demo form — details are not sent to a real restaurant."}
            </p>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-black tracking-tight text-white">
              AURELIA
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-amber-200/70">
              Fine Dining Experience
            </p>

            <p className="mt-6 max-w-md leading-7 text-zinc-500">
              {lang === "ro"
                ? "Concept demo creat pentru prezentarea unui website rafinat de restaurant."
                : "Demo concept created to showcase a refined restaurant website."}
            </p>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                {lang === "ro" ? "Locație" : "Location"}
              </p>

              <p className="mt-4 leading-7 text-zinc-500">
                Strada Luminii 12
                <br />
                București
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                {lang === "ro" ? "Program" : "Hours"}
              </p>

              <p className="mt-4 leading-7 text-zinc-500">
                Tue – Sun
                <br />
                18:00 — 23:00
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                Contact
              </p>

              <p className="mt-4 leading-7 text-zinc-500">
                +40 700 000 000
                <br />
                hello@aurelia-demo.com
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-8 text-center text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2026 AURELIA — Demo by FlowCraft Studio</p>

          <p>
            {lang === "ro"
              ? "Website demo pentru prezentare."
              : "Demo website for presentation purposes."}
          </p>
        </div>
      </footer>
    </main>
  );
}
