import Link from "next/link";

type Lang = "ro" | "en";

const contactEmail = "raulflorinrauta@gmail.com";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#040910]/78 px-4 py-16 text-zinc-400 backdrop-blur-xl sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_0%,rgba(52,211,153,0.07),transparent_34%),radial-gradient(circle_at_86%_28%,rgba(34,211,238,0.055),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 rounded-[1.75rem] border border-white/8 bg-white/[0.035] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:flex md:items-center md:justify-between md:p-10">
          <div>
            <p className="studio-label">
              {lang === "ro" ? "Următorul pas" : "Next step"}
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              {lang === "ro"
                ? "Ai o idee de site? Hai să-i dăm formă."
                : "Have a website idea? Let’s shape it."}
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-zinc-500">
              {lang === "ro"
                ? "Spune-mi ce business ai și construim o direcție clară pentru un site modern, rapid și orientat spre clienți."
                : "Tell me about your business and we’ll build a clear direction for a modern, fast and customer-focused website."}
            </p>
          </div>

          <Link
            href={`/${lang}/contact`}
            className="mt-8 inline-block rounded-full bg-emerald-300 px-7 py-3 text-sm font-semibold text-black shadow-[0_16px_46px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-white md:mt-0"
          >
            {lang === "ro" ? "Hai să discutăm" : "Let’s talk"}
          </Link>
        </div>

        <div className="studio-divider mb-12" />

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-white">
                Flowcraft
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/60">
                Studio
              </p>
            </div>

            <p className="mt-4 max-w-sm text-[14px] leading-7 text-zinc-500">
              {lang === "ro"
                ? "Site-uri moderne, clare și gândite să transforme vizitatorii în clienți."
                : "Modern, clear websites designed to turn visitors into customers."}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              {lang === "ro" ? "Navigare" : "Navigation"}
            </p>

            <div className="mt-4 grid gap-3 text-sm">
              {[
                {
                  href: `/${lang}/services`,
                  label: lang === "ro" ? "Servicii" : "Services",
                },
                {
                  href: `/${lang}/process`,
                  label: lang === "ro" ? "Proces" : "Process",
                },
                {
                  href: `/${lang}/projects`,
                  label: lang === "ro" ? "Proiecte" : "Projects",
                },
                {
                  href: `/${lang}/about`,
                  label: lang === "ro" ? "Despre" : "About",
                },
                {
                  href: `/${lang}/contact`,
                  label: "Contact",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>

            <div className="mt-4 grid gap-3 text-sm">
              <a
                href={`mailto:${contactEmail}`}
                className="w-fit transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
              >
                {contactEmail}
              </a>

              <Link
                href={`/${lang}/contact`}
                className="w-fit transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
              >
                {lang === "ro" ? "Trimite un mesaj" : "Send a message"}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <p className="text-zinc-500">
              © {year} Flowcraft Studio. All rights reserved.
            </p>

            <p className="text-zinc-600">
              {lang === "ro"
                ? "Creat cu grijă de FlowCraft Studio."
                : "Crafted by FlowCraft Studio."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
