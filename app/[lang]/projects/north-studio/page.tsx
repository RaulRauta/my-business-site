import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type Lang = "ro" | "en";

export const metadata: Metadata = {
  title: "North Studio Demo | FlowCraft Studio",
  description:
    "Demo clean pentru barber shop modern, cu servicii, echipă, galerie și programări.",
};

export default async function NorthStudioPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;

  const t = {
    ro: {
      bookingBadge: "Programări",
      bookingTitle: "Rezervă rapid o vizită.",
      bookingText:
        "O secțiune simplă, clară și prietenoasă pentru clienți care vor să se programeze rapid.",
      bookingName: "Nume",
      bookingPhone: "Telefon",
      bookingService: "Serviciu dorit",
      bookingDate: "Zi / oră preferată",
      bookingButton: "Trimite cererea",
      bookingNote: "Răspuns în aceeași zi, în timpul programului.",
      servicesBadge: "Servicii",
      servicesTitle: "Servicii clare, prezentate cu grijă.",
      servicesText:
        "O structură simplă care ajută clientul să înțeleagă rapid ce poate rezerva.",
      services: [
        {
          name: "Tuns clasic",
          desc: "Consultanță scurtă, tuns curat și styling final.",
          price: "80 lei",
        },
        {
          name: "Skin fade",
          desc: "Fade precis, finisaj curat și contur atent lucrat.",
          price: "100 lei",
        },
        {
          name: "Barbă",
          desc: "Contur, scurtare, prosop cald și hidratare.",
          price: "60 lei",
        },
        {
          name: "Full grooming",
          desc: "Tuns, barbă, styling și experiență completă.",
          price: "140 lei",
        },
      ],

      studioBadge: "Studio",
      studioTitle: "Un spațiu curat, luminos și construit pentru încredere.",
      studioText:
        "Designul pune accent pe detalii, lumină naturală și o atmosferă relaxată, fără vibe întunecat sau agresiv.",
      studioStats: [
        ["4.9", "rating clienți"],
        ["35 min", "durată medie"],
        ["3", "barberi"],
      ],

      back: "Înapoi la proiecte",
      badge: "Barber Studio",
      title: "Tunsori precise. Grooming modern.",
      subtitle:
        "Un demo luminos pentru barber shop-uri care vor o imagine curată, încredere și programări rapide.",
      cta: "Programează-te",
      secondary: "Vezi serviciile",
    },
    en: {
      bookingBadge: "Booking",
      bookingTitle: "Book a visit quickly.",
      bookingText:
        "A simple, clear and friendly section for customers who want to book fast.",
      bookingName: "Name",
      bookingPhone: "Phone",
      bookingService: "Preferred service",
      bookingDate: "Preferred day / time",
      bookingButton: "Send request",
      bookingNote: "Same-day reply during working hours.",
      servicesBadge: "Services",
      servicesTitle: "Clear services, presented with polish.",
      servicesText:
        "A simple structure that helps customers quickly understand what they can book.",
      services: [
        {
          name: "Classic haircut",
          desc: "Short consultation, clean cut and final styling.",
          price: "80 lei",
        },
        {
          name: "Skin fade",
          desc: "Precise fade, clean finish and sharp detailing.",
          price: "100 lei",
        },
        {
          name: "Beard trim",
          desc: "Shape, trim, warm towel and hydration.",
          price: "60 lei",
        },
        {
          name: "Full grooming",
          desc: "Haircut, beard, styling and complete experience.",
          price: "140 lei",
        },
      ],

      studioBadge: "Studio",
      studioTitle: "A clean, bright space built around trust.",
      studioText:
        "The design focuses on detail, natural light and a relaxed atmosphere, without a dark or aggressive vibe.",
      studioStats: [
        ["4.9", "client rating"],
        ["35 min", "average visit"],
        ["3", "barbers"],
      ],

      back: "Back to projects",
      badge: "Barber Studio",
      title: "Precision cuts. Modern grooming.",
      subtitle:
        "A bright polished demo for barber shops that want a clean image, trust and fast bookings.",
      cta: "Book now",
      secondary: "View services",
    },
  }[lang];

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#151515]">
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#f7f3ea]/85 px-5 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <Link href={`/${lang}/projects`} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#151515] text-sm font-bold text-white">
              NS
            </span>

            <div>
              <p className="text-sm font-bold tracking-[0.22em]">NORTH</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                Studio
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#services"
              className="text-sm font-semibold text-black/55 hover:text-black"
            >
              Services
            </a>
            <a
              href="#studio"
              className="text-sm font-semibold text-black/55 hover:text-black"
            >
              Studio
            </a>
            <a
              href="#booking"
              className="text-sm font-semibold text-black/55 hover:text-black"
            >
              Booking
            </a>
          </nav>

          <a
            href="#booking"
            className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6f7f63]"
          >
            {t.cta}
          </a>
        </div>
      </header>

      <div className="fixed bottom-4 left-1/2 z-50 w-full -translate-x-1/2 px-4 sm:w-auto">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-3 rounded-full border border-black/10 bg-white/85 px-4 py-3 text-xs text-black/55 shadow-[0_18px_60px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          <span className="hidden sm:inline">FlowCraftStudio Demo</span>
          <span className="hidden h-1 w-1 rounded-full bg-black/30 sm:block" />
          <Link
            href={`/${lang}/projects`}
            className="font-semibold text-black hover:text-[#6f7f63]"
          >
            {t.back}
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:pt-48">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6f7f63]">
              {t.badge}
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/60">
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-full bg-[#151515] px-8 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6f7f63]"
              >
                {t.cta}
              </a>

              <a
                href="#services"
                className="rounded-full border border-black/10 bg-white/70 px-8 py-4 text-center text-sm font-bold text-black transition hover:-translate-y-0.5 hover:border-black/25"
              >
                {t.secondary}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#c9d6bd] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1600&auto=format&fit=crop"
                alt="North Studio barber shop"
                width={1600}
                height={1040}
                priority
                className="h-130 w-full rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6f7f63]">
                {t.servicesBadge}
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                {t.servicesTitle}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/55">
              {t.servicesText}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.services.map((service) => (
              <article
                key={service.name}
                className="group rounded-4xl border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#6f7f63]/40 hover:shadow-[0_24px_90px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2e8] text-lg font-black text-[#6f7f63] transition group-hover:bg-[#6f7f63] group-hover:text-white">
                  ✂
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black tracking-tight">
                    {service.name}
                  </h3>

                  <span className="shrink-0 rounded-full bg-[#eef2e8] px-3 py-1 text-xs font-bold text-[#6f7f63]">
                    {service.price}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-black/55">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="studio" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop"
              alt="North Studio interior"
              width={1200}
              height={800}
              className="h-80 w-full rounded-4xl object-cover shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
            />

            <Image
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop"
              alt="Barber tools"
              width={1200}
              height={800}
              className="h-80 w-full rounded-4xl object-cover shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:mt-12"
            />
          </div>

          <div>
            <p className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6f7f63]">
              {t.studioBadge}
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              {t.studioTitle}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              {t.studioText}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.studioStats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-black/10 bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-3xl font-black tracking-tight">{value}</p>
                  <p className="mt-2 text-sm font-semibold text-black/45">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Studio */}
      <section id="studio" className="px-6 py-24">
        ...
      </section>

      {/* Booking */}
      <section id="booking" className="px-6 py-24">
        ...
      </section>
    </main>
  );
}
