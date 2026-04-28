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
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/80 px-4 py-3 shadow-2xl shadow-black/30 md:px-5">
        <Link
          href={`/${lang}`}
          className="group flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-black transition group-hover:scale-105">
            R
          </span>

          <span className="hidden text-sm text-white sm:block">
            Raul
            <span className="ml-1 text-zinc-500"> / Web Growth</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  isActive ? "text-black" : "text-zinc-400 hover:text-white"
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

        <div className="flex items-center gap-2">
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
        </div>
      </div>
    </header>
  );
}
