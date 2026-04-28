"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { translations } from "@/lib/translations";

type Lang = "ro" | "en";

export default function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  if (pathname === `/${lang}`) return null;

  const t = translations[lang];

  const navItems = [
    { href: `/${lang}/services`, label: t.navServices },
    { href: `/${lang}/process`, label: t.navProcess },
    { href: `/${lang}/portfolio`, label: t.navPortfolio },
    { href: `/${lang}/contact`, label: t.navContact },
  ];

  function switchLang(newLang: Lang) {
    return pathname.replace(`/${lang}`, `/${newLang}`);
  }

  return (
    <header className="w-full border-b border-white/10 bg-[#080808]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href={`/${lang}`} className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-sm font-black text-black transition group-hover:scale-105">
            R
          </span>

          <div className="hidden leading-tight sm:block">
            <p className="text-base font-semibold tracking-tight text-white">
              Raul
            </p>
            <p className="text-[11px] tracking-wide text-zinc-500">
              Web Growth
            </p>
          </div>
        </Link>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[14px] font-semibold tracking-tight transition-colors duration-300 ${
                  isActive ? "text-black" : "text-zinc-500 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 45,
                      mass: 0.6,
                    }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
            <Link
              href={switchLang("ro")}
              className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                lang === "ro"
                  ? "bg-white text-black md:bg-transparent"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {lang === "ro" && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 hidden rounded-full bg-white md:block"
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 45,
                    mass: 0.6,
                  }}
                />
              )}
              <span className="relative z-10">RO</span>
            </Link>

            <Link
              href={switchLang("en")}
              className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                lang === "en"
                  ? "bg-white text-black md:bg-transparent"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {lang === "en" && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 hidden rounded-full bg-white md:block"
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 45,
                    mass: 0.6,
                  }}
                />
              )}
              <span className="relative z-10">EN</span>
            </Link>
          </div>

          <Link
            href={`/${lang}/contact`}
            className="hidden rounded-full bg-white px-5 py-2 text-[14px] font-semibold tracking-tight text-black transition hover:bg-emerald-400 lg:block"
          >
            {lang === "ro" ? "Discutăm" : "Let’s talk"}
          </Link>
        </div>
      </div>
    </header>
  );
}
