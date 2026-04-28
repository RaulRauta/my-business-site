"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { translations } from "@/lib/translations";

type Lang = "ro" | "en";

export default function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link
          href={`/${lang}`}
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
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

        {/* DESKTOP NAV */}
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
          {/* LANGUAGE SWITCH */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
            <Link
              href={switchLang("ro")}
              onClick={() => setMenuOpen(false)}
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
              onClick={() => setMenuOpen(false)}
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

          {/* DESKTOP CTA */}
          <Link
            href={`/${lang}/contact`}
            className="hidden rounded-full bg-white px-5 py-2 text-[14px] font-semibold tracking-tight text-black transition hover:bg-emerald-400 lg:block"
          >
            {lang === "ro" ? "Discutăm" : "Let’s talk"}
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
            aria-label="Open menu"
          >
            <span className="relative h-4 w-4">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 6 : 0,
                }}
                className="absolute left-0 top-0 h-[2px] w-4 rounded-full bg-white"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="absolute left-0 top-[6px] h-[2px] w-4 rounded-full bg-white"
              />
              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -6 : 0,
                }}
                className="absolute left-0 top-[12px] h-[2px] w-4 rounded-full bg-white"
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-6 mb-5 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-2xl px-5 py-4 text-base font-semibold transition ${
                      isActive
                        ? "bg-emerald-400 text-black"
                        : "bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
