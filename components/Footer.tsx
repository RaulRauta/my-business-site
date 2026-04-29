import Link from "next/link";

type Lang = "ro" | "en";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#070707] px-6 py-16 text-zinc-400">
      {/* subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* mini CTA */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-white/4 p-8 shadow-2xl shadow-black/20 md:flex md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
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
            className="mt-8 inline-block rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.35)] md:mt-0"
          >
            {lang === "ro" ? "Hai să discutăm" : "Let’s talk"}
          </Link>
        </div>

        {/* animated divider */}
        <div className="mb-12 h-px w-full overflow-hidden bg-white/10">
          <div className="h-full w-1/3 animate-[footerLine_3s_ease-in-out_infinite] bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <p className="text-xl font-semibold tracking-tight text-white">
              Raul / Web Growth
            </p>

            <p className="mt-3 max-w-sm text-[14px] leading-7 text-zinc-500">
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
                  href: `/${lang}/portfolio`,
                  label: lang === "ro" ? "Portofoliu" : "Portfolio",
                },
                {
                  href: `/${lang}/contact`,
                  label: "Contact",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit transition hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
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
                href="mailto:your@email.com"
                className="w-fit transition hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
              >
                your@email.com
              </a>

              <Link
                href={`/${lang}/contact`}
                className="w-fit transition hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
              >
                {lang === "ro" ? "Trimite un mesaj" : "Send a message"}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <p className="text-zinc-500">© {year} Raul. All rights reserved.</p>

            <p className="text-zinc-600">
              Built with Next.js, Tailwind & Sanity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
