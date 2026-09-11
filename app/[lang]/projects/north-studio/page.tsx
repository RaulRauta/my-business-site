import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Lang = "ro" | "en";

export const metadata: Metadata = {
  title: "North Studio Demo | FlowCraft Studio",
  description:
    "Clean barber studio demo with services, team, atmosphere and booking flow.",
};

export default async function NorthStudioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "ro" && lang !== "en") {
    notFound();
  }

  const currentLang = lang as Lang;

  const t = {
    ro: {
      nav: ["Servicii", "Studio", "Echipă", "Programare"],
      back: "Înapoi la proiecte",
      badge: "Barber Studio",
      title: "Tunsori precise. Grooming modern.",
      subtitle:
        "Un demo luminos pentru barber shop-uri care vor o imagine curată, o experiență calmă și programări ușor de făcut.",
      cta: "Programează-te",
      secondary: "Vezi serviciile",
      heroNote: "Deschis astăzi / 10:00 - 20:00",
      heroCardTitle: "North Signature Cut",
      heroCardText: "Consultanță scurtă, tuns precis și styling final.",
      servicesBadge: "Servicii",
      servicesTitle: "Clar pentru client. Ușor de ales.",
      servicesText:
        "Serviciile sunt prezentate simplu, cu prețuri clare și explicații scurte, ca vizitatorul să ajungă rapid la programare.",
      services: [
        {
          name: "Tuns clasic",
          desc: "Consultanță scurtă, tuns curat și styling final.",
          price: "80 lei",
        },
        {
          name: "Skin fade",
          desc: "Fade precis, contur curat și finisaj atent lucrat.",
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
        "Direcția vizuală pune accent pe lumină, texturi naturale și o atmosferă relaxată. Totul este gândit să pară premium fără să devină rece.",
      studioStats: [
        ["4.9", "rating clienți"],
        ["35 min", "durată medie"],
        ["3", "barberi"],
      ],
      teamBadge: "Echipă",
      teamTitle: "O prezentare umană, simplă și credibilă.",
      team: [
        ["Andrei", "Fade specialist"],
        ["Mihai", "Classic cuts"],
        ["Vlad", "Beard grooming"],
      ],
      bookingBadge: "Programări",
      bookingTitle: "Rezervă rapid o vizită.",
      bookingText:
        "O zonă de booking simplă, potrivită pentru clienți care vor să trimită o cerere fără complicații.",
      bookingName: "Nume",
      bookingPhone: "Telefon",
      bookingService: "Serviciu dorit",
      bookingDate: "Zi / oră preferată",
      bookingButton: "Trimite cererea",
      bookingNote: "Răspuns în aceeași zi, în timpul programului.",
      footerText:
        "Demo construit pentru a arăta cum poate fi prezentat un barber shop modern: clar, luminos și pregătit pentru programări.",
    },
    en: {
      nav: ["Services", "Studio", "Team", "Booking"],
      back: "Back to projects",
      badge: "Barber Studio",
      title: "Precision cuts. Modern grooming.",
      subtitle:
        "A bright polished demo for barber shops that want a clean image, a calm experience and easy booking.",
      cta: "Book now",
      secondary: "View services",
      heroNote: "Open today / 10:00 - 20:00",
      heroCardTitle: "North Signature Cut",
      heroCardText: "Short consultation, precise cut and final styling.",
      servicesBadge: "Services",
      servicesTitle: "Clear for customers. Easy to choose.",
      servicesText:
        "Services are presented simply, with clear pricing and short explanations, helping visitors move quickly toward booking.",
      services: [
        {
          name: "Classic haircut",
          desc: "Short consultation, clean cut and final styling.",
          price: "80 lei",
        },
        {
          name: "Skin fade",
          desc: "Precise fade, clean outline and careful finish.",
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
        "The visual direction focuses on light, natural textures and a relaxed atmosphere. Everything feels polished without becoming cold.",
      studioStats: [
        ["4.9", "client rating"],
        ["35 min", "average visit"],
        ["3", "barbers"],
      ],
      teamBadge: "Team",
      teamTitle: "A human, simple and credible presentation.",
      team: [
        ["Andrei", "Fade specialist"],
        ["Mihai", "Classic cuts"],
        ["Vlad", "Beard grooming"],
      ],
      bookingBadge: "Booking",
      bookingTitle: "Book a visit quickly.",
      bookingText:
        "A simple booking area for customers who want to send a request without friction.",
      bookingName: "Name",
      bookingPhone: "Phone",
      bookingService: "Preferred service",
      bookingDate: "Preferred day / time",
      bookingButton: "Send request",
      bookingNote: "Same-day reply during working hours.",
      footerText:
        "Demo built to show how a modern barber shop can be presented: clear, bright and ready for bookings.",
    },
  }[currentLang];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4efe5] text-[#151515]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_8%,rgba(111,127,99,0.18),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(217,180,111,0.16),transparent_30%),linear-gradient(180deg,#f8f4ec_0%,#f1eadf_48%,#eae0d1_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.8%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#fbf7ef]/82 px-4 py-3 shadow-[0_18px_60px_rgba(50,38,24,0.1)] backdrop-blur-xl sm:px-5">
          <Link
            href={`/${currentLang}/projects`}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#151515] text-sm font-bold text-white">
              NS
            </span>

            <div className="min-w-0">
              <p className="truncate text-sm font-black tracking-[0.22em]">
                NORTH
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                Studio
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["#services", t.nav[0]],
              ["#studio", t.nav[1]],
              ["#team", t.nav[2]],
              ["#booking", t.nav[3]],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-black/55 transition hover:text-black"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="rounded-full bg-[#151515] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f7f63] sm:px-5"
          >
            {t.cta}
          </a>
        </div>
      </header>

      <section className="relative z-10 px-4 pb-18 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link
              href={`/${currentLang}/projects`}
              className="mb-6 inline-flex text-sm font-semibold text-black/45 transition hover:text-[#6f7f63]"
            >
              {t.back}
            </Link>

            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6f7f63] shadow-[0_12px_30px_rgba(50,38,24,0.05)]">
              {t.badge}
            </p>

            <h1 className="max-w-4xl text-[clamp(3rem,12vw,6.7rem)] font-black leading-[0.9] tracking-tight">
              {t.title}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-black/60 sm:text-lg">
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="rounded-full bg-[#151515] px-8 py-4 text-center text-sm font-bold text-white shadow-[0_18px_45px_rgba(50,38,24,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f7f63]"
              >
                {t.cta}
              </a>

              <a
                href="#services"
                className="rounded-full border border-black/10 bg-white/68 px-8 py-4 text-center text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
              >
                {t.secondary}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#c9d6bd]/80 blur-3xl" />
            <div className="absolute -bottom-8 right-2 h-44 w-44 rounded-full bg-[#d9b46f]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/72 p-3 shadow-[0_32px_100px_rgba(50,38,24,0.14)] backdrop-blur-xl sm:rounded-[2.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1600&auto=format&fit=crop"
                alt="North Studio barber shop"
                width={1600}
                height={1040}
                priority
                className="h-[24rem] w-full rounded-[1.4rem] object-cover sm:h-[34rem] sm:rounded-[2rem]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/35 bg-white/72 p-5 shadow-[0_18px_60px_rgba(50,38,24,0.12)] backdrop-blur-xl sm:left-auto sm:w-80">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#6f7f63]">
                  {t.heroNote}
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">
                  {t.heroCardTitle}
                </h2>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  {t.heroCardText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="inline-flex rounded-full border border-black/10 bg-white/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6f7f63]">
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.map((service) => (
              <article
                key={service.name}
                className="group rounded-[1.75rem] border border-black/10 bg-white/72 p-6 shadow-[0_18px_60px_rgba(50,38,24,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#6f7f63]/35 hover:bg-white"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2e8] text-lg font-black text-[#6f7f63] transition group-hover:bg-[#6f7f63] group-hover:text-white">
                  NS
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

      <section id="studio" className="relative z-10 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop"
              alt="North Studio interior"
              width={1200}
              height={800}
              className="h-72 w-full rounded-[1.75rem] object-cover shadow-[0_22px_70px_rgba(50,38,24,0.1)] sm:h-80"
            />

            <Image
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop"
              alt="Barber tools"
              width={1200}
              height={800}
              className="h-72 w-full rounded-[1.75rem] object-cover shadow-[0_22px_70px_rgba(50,38,24,0.1)] sm:mt-12 sm:h-80"
            />
          </div>

          <div>
            <p className="inline-flex rounded-full border border-black/10 bg-white/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6f7f63]">
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
                  className="rounded-3xl border border-black/10 bg-white/72 p-5 shadow-[0_18px_60px_rgba(50,38,24,0.06)] backdrop-blur-xl"
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

      <section id="team" className="relative z-10 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="inline-flex rounded-full border border-black/10 bg-white/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#6f7f63]">
              {t.teamBadge}
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              {t.teamTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {t.team.map(([name, role], index) => (
              <article
                key={name}
                className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/72 shadow-[0_18px_60px_rgba(50,38,24,0.07)] backdrop-blur-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={[
                      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=1000&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1588771930296-88c2cb03f386?q=80&w=1000&auto=format&fit=crop",
                    ][index]}
                    alt={`${name} - ${role}`}
                    width={1000}
                    height={900}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.025]"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-tight">{name}</h3>
                  <p className="mt-2 font-semibold text-[#6f7f63]">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="relative z-10 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-black/10 bg-[#151515] p-5 text-white shadow-[0_32px_100px_rgba(50,38,24,0.18)] sm:p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#c9d6bd]">
              {t.bookingBadge}
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              {t.bookingTitle}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              {t.bookingText}
            </p>

            <p className="mt-8 rounded-3xl border border-white/10 bg-white/6 p-5 text-sm leading-6 text-white/55">
              {t.bookingNote}
            </p>
          </div>

          <form className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl sm:grid-cols-2 sm:p-6">
            {[
              t.bookingName,
              t.bookingPhone,
              t.bookingService,
              t.bookingDate,
            ].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-semibold">
                <span className="text-white/55">{label}</span>
                <input
                  type="text"
                  className="h-14 rounded-2xl border border-white/10 bg-white/8 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#c9d6bd]/45"
                  placeholder={label}
                />
              </label>
            ))}

            <button
              type="button"
              className="rounded-full bg-[#c9d6bd] px-7 py-4 font-bold text-[#151515] transition duration-300 hover:-translate-y-0.5 hover:bg-white sm:col-span-2"
            >
              {t.bookingButton}
            </button>
          </form>
        </div>
      </section>

      <footer className="relative z-10 px-4 pb-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-black/10 pt-8 text-sm text-black/50 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl leading-7">{t.footerText}</p>
          <Link
            href={`/${currentLang}/projects`}
            className="font-bold text-black transition hover:text-[#6f7f63]"
          >
            {t.back}
          </Link>
        </div>
      </footer>
    </main>
  );
}
