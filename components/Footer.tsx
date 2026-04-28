import Link from "next/link";

type Lang = "ro" | "en";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 py-10 text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
        <div>
          <p className="text-lg font-semibold text-white">Raul / Web Growth</p>
          <p className="mt-3 max-w-sm text-sm leading-6">
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
            <Link href={`/${lang}/services`} className="hover:text-white">
              {lang === "ro" ? "Servicii" : "Services"}
            </Link>
            <Link href={`/${lang}/process`} className="hover:text-white">
              {lang === "ro" ? "Proces" : "Process"}
            </Link>
            <Link href={`/${lang}/portfolio`} className="hover:text-white">
              {lang === "ro" ? "Portofoliu" : "Portfolio"}
            </Link>
            <Link href={`/${lang}/contact`} className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">
            {lang === "ro" ? "Contact" : "Contact"}
          </p>

          <div className="mt-4 grid gap-3 text-sm">
            <a href="mailto:your@email.com" className="hover:text-white">
              your@email.com
            </a>

            <Link href={`/${lang}/contact`} className="hover:text-white">
              {lang === "ro" ? "Trimite un mesaj" : "Send a message"}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>© {year} Raul. All rights reserved.</p>
        <p className="text-zinc-500">
          {lang === "ro"
            ? "Built with Next.js, Tailwind & Sanity."
            : "Built with Next.js, Tailwind & Sanity."}
        </p>
      </div>
    </footer>
  );
}
