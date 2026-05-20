import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morrow Café Demo | FlowCraft Studio",
  description:
    "Demo premium pentru o cafenea modernă, construit cu atmosferă cinematică, meniu elegant, galerie editorială și sistem de rezervare.",
};

function MorrowNavbar({ t }: { t: any }) {
  return (
    <header className="fixed left-0 top-0 z-[999] w-full px-4 pt-4">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center rounded-full border border-[#d9b46f]/15 bg-[#0f0906]/90 px-5 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d9b46f]/25 bg-[#d9b46f]/10 text-sm font-bold text-[#d9b46f]">
            MC
          </span>

          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-white">
              MORROW
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d9b46f]">
              Café House
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {[
            [t.menu, "#menu"],
            [t.gallery, "#gallery"],
            [t.visit, "#visit"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/60 transition hover:bg-[#d9b46f]/10 hover:text-[#f3d19c]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a
            href="#visit"
            className="rounded-full bg-[#d9b46f] px-6 py-3 text-sm font-bold text-[#120d0a] shadow-[0_0_35px_rgba(217,180,111,0.2)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            {t.reserve}
          </a>
        </div>
      </div>
    </header>
  );
}

type Lang = "ro" | "en";

export default async function MorrowCafeDemo({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      footerText:
        "Creat pentru dimineți lente, cafea intensă și conversații care rămân mai mult decât ultima înghițitură.",
      demoCredit: "Concept demo realizat de FlowCraftStudio",
      exploreTitle: "Explorează",
      contactTitle: "Contact",
      rights: "© 2026 Morrow Café. Toate drepturile rezervate.",
      back: "Înapoi la proiecte",
      menu: "Meniu",
      experience: "Experiență",
      gallery: "Galerie",
      visit: "Vizitează",
      reserve: "Rezervă",
      heroBadge: "Cafenea de specialitate",
      heroTitle1: "Dimineți lente.",
      heroTitle2: "Cafea intensă.",
      heroText:
        "Cafea de specialitate, deserturi artizanale și un spațiu creat pentru conversații bune, lucru liniștit și dimineți care nu se grăbesc.",
      viewMenu: "Vezi meniul",
      bookTable: "Rezervă o masă",
      signatureMenu: "Meniu Signature",
      menuTitle: "Creat pentru ritualul tău zilnic.",
      menuText:
        "Un meniu scurt, curat și memorabil — construit pentru produse care pot fi înțelese rapid și dorite imediat.",

      menuItems: [
        {
          name: "Flat White",
          category: "Cafea",
          desc: "Espresso dublu, lapte catifelat, balans perfect.",
          price: "18 lei",
        },
        {
          name: "Vanilla Cold Brew",
          category: "Cold Bar",
          desc: "Cold brew infuzat lent, vanilie, gheață clară.",
          price: "22 lei",
        },
        {
          name: "Croissant cu fistic",
          category: "Patiserie",
          desc: "Croissant cu cremă fină de fistic și fulgi crocanți.",
          price: "21 lei",
        },
        {
          name: "Basque Cheesecake",
          category: "Desert",
          desc: "Textură cremoasă, crustă caramelizată, gust intens.",
          price: "24 lei",
        },
      ],
      morrowSelection: "Selecție Morrow",

      experienceBadge: "Experiența",
      experienceTitle: "Mai mult decât cafea. Un loc cu ritm.",
      galleryBadge: "Galerie",
      galleryTitle: "Colțuri calde, mese liniștite, lumină aurie.",
      galleryText:
        "O galerie gândită ca moodboard de brand: atmosferă, detalii, lumină și mici momente care fac cafeneaua memorabilă.",
      galleryImages: [
        "Interior",
        "Latte Art",
        "Patiserie",
        "Dimineață lentă",
        "Coffee Bar",
      ],
      visitBadge: "Vizitează-ne",
      visitTitle: "Rezervă colțul tău.",
      reservationTitle: "Spune-ne când ajungi.",
      reservationText:
        "Acest formular demo arată cum o cafenea poate colecta cereri de rezervare într-un mod elegant și simplu.",
      name: "Nume",
      phone: "Telefon",
      guests: "Persoane",
      date: "Data",
      time: "Ora",
      request: "Cerere specială",
      send: "Trimite cererea de rezervare",
      avgReply: "Timp mediu de răspuns",
      avgReplyText: "Sub 15 minute în timpul programului.",
      visitText:
        "Rezervă o masă liniștită pentru dimineți lente, sesiuni de lucru sau conversații la golden hour.",

      addressLabel: "Adresă",
      phoneLabel: "Telefon",
      weekdaysLabel: "Luni — Vineri",
      weekendLabel: "Weekend",

      reservationBadge: "Cerere rezervare",
      reviewsBadge: "Note de la oaspeți",
      reviewsTitle: "Momente mici, păstrate bine.",
      reviewsText:
        "Social proof subtil, construit ca parte din experiență — nu ca o secțiune agresivă de vânzare.",
      reviews: [
        {
          name: "Andreea M.",
          text: "Cel mai bun flat white pe care l-am băut în București. Atmosfera e calmă, caldă și foarte bine gândită.",
        },
        {
          name: "Matei R.",
          text: "Locul perfect pentru lucru dimineața. Muzică discretă, lumină bună și deserturi excelente.",
        },
        {
          name: "Ioana P.",
          text: "Pare genul de cafenea în care intri pentru o cafea și ajungi să stai două ore fără să-ți dai seama.",
        },
      ],
    },
    en: {
      footerText:
        "Built for slow mornings, bold coffee and conversations that stay with you longer than the last sip.",
      demoCredit: "Demo concept by FlowCraftStudio",
      exploreTitle: "Explore",
      contactTitle: "Contact",
      rights: "© 2026 Morrow Café. All rights reserved.",
      back: "Back to projects",
      menu: "Menu",
      experience: "Experience",
      gallery: "Gallery",
      visit: "Visit",
      reserve: "Reserve",
      heroBadge: "Specialty Coffee House",
      heroTitle1: "Slow mornings.",
      heroTitle2: "Bold coffee.",
      heroText:
        "Specialty coffee, artisan desserts and a space built for good conversations, quiet work and mornings that do not rush.",
      viewMenu: "View menu",
      bookTable: "Book a table",
      signatureMenu: "Signature Menu",
      menuTitle: "Crafted for your daily ritual.",
      menuText:
        "A short, clean and memorable menu — built around products that are easy to understand and instantly desirable.",

      menuItems: [
        {
          name: "Flat White",
          category: "Coffee",
          desc: "Double espresso, silky milk and perfect balance.",
          price: "18 lei",
        },
        {
          name: "Vanilla Cold Brew",
          category: "Cold Bar",
          desc: "Slow-steeped cold brew, vanilla and clear ice.",
          price: "22 lei",
        },
        {
          name: "Pistachio Croissant",
          category: "Bakery",
          desc: "Croissant with fine pistachio cream and crisp flakes.",
          price: "21 lei",
        },
        {
          name: "Basque Cheesecake",
          category: "Dessert",
          desc: "Creamy texture, caramelized crust and deep flavor.",
          price: "24 lei",
        },
      ],
      morrowSelection: "Morrow selection",

      experienceBadge: "The Experience",
      experienceTitle: "More than coffee. A place with rhythm.",
      galleryBadge: "Gallery",
      galleryTitle: "Warm corners, quiet tables, golden light.",
      galleryText:
        "A gallery designed like a brand moodboard: atmosphere, details, light and small moments that make the café memorable.",
      galleryImages: [
        "Interior",
        "Latte Art",
        "Pastry",
        "Slow Morning",
        "Coffee Bar",
      ],
      visitBadge: "Visit Us",
      visitTitle: "Reserve your corner.",
      reservationTitle: "Tell us when you’re coming.",
      reservationText:
        "This demo form shows how a café can collect booking requests in a polished, low-friction way.",
      name: "Name",
      phone: "Phone",
      guests: "Guests",
      date: "Date",
      time: "Time",
      request: "Special request",
      send: "Send reservation request",
      avgReply: "Average reply time",
      avgReplyText: "Under 15 minutes during opening hours.",
      visitText:
        "Book a quiet table for slow mornings, focused work sessions or golden-hour conversations.",

      addressLabel: "Address",
      phoneLabel: "Phone",
      weekdaysLabel: "Weekdays",
      weekendLabel: "Weekend",

      reservationBadge: "Reservation request",
      reviewsBadge: "Guest Notes",
      reviewsTitle: "Little moments, remembered well.",
      reviewsText:
        "Subtle social proof, built as part of the experience — not as an aggressive sales section.",
      reviews: [
        {
          name: "Andrea M.",
          text: "The best flat white I’ve had in Bucharest. The atmosphere is calm, warm and beautifully designed.",
        },
        {
          name: "Matthew R.",
          text: "The perfect place to work in the morning. Soft music, good light and excellent desserts.",
        },
        {
          name: "Joanna P.",
          text: "It feels like the kind of café where you walk in for coffee and somehow stay for two hours.",
        },
      ],
    },
  }[lang];

  const menuImages = [
    "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <main className="min-h-screen bg-[#120d0a] text-[#f7efe5]">
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      <MorrowNavbar t={t} />
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d9b46f]/20 to-transparent" />
      {/* Demo badge */}
      <div className="fixed bottom-4 left-1/2 z-50 w-full -translate-x-1/2 px-4 sm:bottom-5 sm:w-auto">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-3 rounded-full border border-[#d9b46f]/20 bg-[#120d0a]/75 px-4 py-3 text-xs text-white/65 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <span className="hidden sm:inline">FlowCraftStudio Demo</span>

          <span className="hidden h-1 w-1 rounded-full bg-[#d9b46f]/60 sm:block" />

          <Link
            href={`/${lang}/projects`}
            className="font-semibold text-[#d9b46f] transition hover:text-white"
          >
            {t.back}
          </Link>
        </div>
      </div>
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d9b46f]/20 to-transparent" />
      {/* Hero */}
      <section className="relative flex min-h-screen items-start overflow-hidden px-6 pb-24 pt-44 md:pt-48">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1800&auto=format&fit=crop"
            alt="Morrow Café interior"
            className="h-full w-full scale-[1.03] object-cover opacity-35 saturate-[0.9]"
          />
          <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[#d9b46f]/10 blur-[140px]" />

          <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-orange-900/20 blur-[160px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120d0a] via-[#120d0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a] via-transparent to-[#120d0a]/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-[#d9b46f]/20 bg-[#d9b46f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f3d19c] backdrop-blur-xl">
              {t.heroBadge}
            </p>

            <h1 className="font-cormorant max-w-4xl text-5xl font-semibold leading-[0.9] tracking-tight text-white sm:text-6xl md:text-8xl">
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              {t.heroText}
            </p>

            <div className="mt-10 grid gap-4 sm:flex sm:flex-wrap">
              <a
                href="#menu"
                className="rounded-full bg-[#d9b46f] px-8 py-4 text-center text-sm font-semibold text-[#120d0a] shadow-[0_0_40px_rgba(217,180,111,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_60px_rgba(217,180,111,0.35)]"
              >
                {t.viewMenu}
              </a>
              <a
                href="#visit"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-center text-sm font-semibold text-white/90 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#d9b46f] hover:text-[#d9b46f]"
              >
                {t.bookTable}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d9b46f]/20 to-transparent" />
      {/* Menu */}
      <section id="menu" className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#d9b46f]/5 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-900/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="inline-flex rounded-full border border-[#d9b46f]/20 bg-[#d9b46f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f3d19c]">
                {t.signatureMenu}
              </p>

              <h2 className="font-cormorant mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
                {t.menuTitle}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/55">
              {t.menuText}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.menuItems.map((item, index) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#d9b46f]/35 hover:bg-white/[0.06] hover:shadow-[0_25px_90px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={menuImages[index]}
                    alt={item.name}
                    className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a] via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#f3d19c] backdrop-blur-xl">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-sm font-semibold text-[#d9b46f]">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.desc}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/35">
                    {t.morrowSelection}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d9b46f]/20 to-transparent" />
      {/* Gallery */}
      <section id="gallery" className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#d9b46f]/20 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="inline-flex rounded-full border border-[#d9b46f]/20 bg-[#d9b46f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f3d19c]">
              {t.galleryBadge}
            </p>

            <h2 className="font-cormorant mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl">
              {t.galleryTitle}
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              {t.galleryText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4 md:grid-rows-[220px_220px]">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 md:col-span-2 md:row-span-2">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1400&auto=format&fit=crop"
                alt="Coffee shop interior"
                className="h-80 min-h-0 w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 md:h-full md:min-h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a]/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 text-sm uppercase tracking-[0.3em] text-[#f3d19c]">
                {t.galleryImages[0]}
              </p>
            </div>

            {[
              {
                label: t.galleryImages[1],
                src: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1200&auto=format&fit=crop",
              },
              {
                label: t.galleryImages[2],
                src: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1200&auto=format&fit=crop",
              },
              {
                label: t.galleryImages[3],
                src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",
              },
              {
                label: t.galleryImages[4],
                src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((image) => (
              <div
                key={image.label}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10"
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-56 w-full object-cover opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100 md:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a]/65 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.25em] text-[#f3d19c]">
                  {image.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d9b46f]/20 to-transparent" />

      {/* Reviews */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="inline-flex rounded-full border border-[#d9b46f]/20 bg-[#d9b46f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f3d19c]">
                {t.reviewsBadge}
              </p>

              <h2 className="font-cormorant mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
                {t.reviewsTitle}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-[#e7ddd2]/55">
              {t.reviewsText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#d9b46f]/30 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex gap-1 text-[#d9b46f]">★★★★★</div>

                <p className="leading-7 text-white/60">“{review.text}”</p>

                <p className="mt-6 text-sm font-semibold text-white">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d9b46f]/8 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1b120d]/85 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[520px] overflow-hidden p-8 md:p-10">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400&auto=format&fit=crop"
                alt="Morrow Café location"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a] via-[#120d0a]/75 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="inline-flex rounded-full border border-[#d9b46f]/20 bg-[#d9b46f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f3d19c]">
                    {t.visitBadge}
                  </p>

                  <h2 className="font-cormorant mt-5 max-w-xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
                    {t.visitTitle}
                  </h2>

                  <p className="mt-5 max-w-md leading-7 text-white/60">
                    {t.visitText}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    [t.addressLabel, "Str. Atelierului 18, București"],
                    [t.phoneLabel, "+40 721 000 418"],
                    [t.weekdaysLabel, "08:00 — 21:00"],
                    [t.weekendLabel, "09:00 — 23:00"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#d9b46f]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold text-[#d9b46f]">
                  {t.reservationBadge}
                </p>
                <h3 className="font-cormorant mt-2 text-4xl font-semibold text-white">
                  {t.reservationTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {t.reservationText}
                </p>
              </div>

              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46f]/50"
                    placeholder={t.name}
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46f]/50"
                    placeholder={t.phone}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46f]/50"
                    placeholder={t.guests}
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46f]/50"
                    placeholder={t.date}
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46f]/50"
                    placeholder={t.time}
                  />
                </div>

                <textarea
                  className="min-h-32 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d9b46f]/50"
                  placeholder={t.request}
                />

                <button
                  type="button"
                  className="mt-2 rounded-full bg-[#d9b46f] px-7 py-4 text-sm font-semibold text-[#120d0a] shadow-[0_0_40px_rgba(217,180,111,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_60px_rgba(217,180,111,0.35)]"
                >
                  {t.send}
                </button>
              </form>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  {t.avgReply}
                </p>
                <p className="mt-2 text-sm text-white/65">{t.avgReplyText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d9b46f]/20 to-transparent" />
      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-white/10 px-6 py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d9b46f]/8 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9b46f]/30 bg-[#d9b46f]/10 text-sm font-bold text-[#d9b46f]">
                  MC
                </span>

                <div>
                  <p className="text-lg font-semibold tracking-[0.2em] text-white">
                    MORROW
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d9b46f]">
                    Café House
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                {t.footerText}
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/30">
                {t.demoCredit}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#d9b46f]">
                {t.exploreTitle}
              </p>

              <div className="mt-5 grid gap-3 text-sm text-white/50">
                <a href="#menu" className="transition hover:text-[#d9b46f]">
                  {t.menu}
                </a>
                <a href="#gallery" className="transition hover:text-[#d9b46f]">
                  {t.gallery}
                </a>
                <a href="#visit" className="transition hover:text-[#d9b46f]">
                  {t.visit}
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#d9b46f]">
                {t.contactTitle}
              </p>

              <div className="mt-5 grid gap-3 text-sm text-white/50">
                <p>Str. Atelierului 18, București</p>
                <p>+40 721 000 418</p>
                <p>@morrow.cafe</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
            <p>{t.rights}</p>

            <div className="flex gap-5">
              <a href="#" className="transition hover:text-[#d9b46f]">
                Instagram
              </a>
              <a href="#" className="transition hover:text-[#d9b46f]">
                Facebook
              </a>
              <a href="#" className="transition hover:text-[#d9b46f]">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
