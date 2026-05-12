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

  const t = translations[lang];

  const navItems = [
    { href: `/${lang}/services`, label: t.navServices },
    { href: `/${lang}/process`, label: t.navProcess },
    { href: `/${lang}/projects`, label: "Projects" },
    { href: `/${lang}/about`, label: "About" },
    { href: `/${lang}/contact`, label: t.navContact },
  ];

  function switchLang(newLang: Lang) {
    return pathname.replace(`/${lang}`, `/${newLang}`);
  }

  return (
    <header className="relative z-20 w-full border-b border-emerald-400/10 bg-black/55 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* LOGO */}
        <Link
          href={`/${lang}`}
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-emerald-400/30 bg-black/40 text-sm font-black text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.25)] transition group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(52,211,153,0.45)]">
            <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(52,211,153,0.25),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
            <span className="relative z-10">F</span>
          </span>

          <div className="hidden leading-tight sm:block">
            <p className="text-base font-semibold tracking-tight text-white transition group-hover:text-emerald-400">
              Flowcraft
            </p>

            <p className="flow-text text-[10px] font-semibold tracking-[0.35em]">
              Studio
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center rounded-full border border-emerald-400/10 bg-black/35 p-1 shadow-[0_0_30px_rgba(52,211,153,0.08)] md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[14px] font-semibold tracking-tight transition-colors duration-300 ${
                  isActive ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.5)]"
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
          <div className="flex items-center rounded-full border border-cyan-400/10 bg-black/35 p-1 shadow-[0_0_25px_rgba(34,211,238,0.08)]">
            <Link
              href={switchLang("ro")}
              onClick={() => setMenuOpen(false)}
              className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                lang === "ro"
                  ? "bg-emerald-400 text-black md:bg-transparent"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {lang === "ro" && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 hidden rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.45)] md:block"
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
                  ? "bg-emerald-400 text-black md:bg-transparent"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {lang === "en" && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 hidden rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.45)] md:block"
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
            className="hidden rounded-full bg-white px-5 py-2 text-[14px] font-semibold tracking-tight text-black shadow-[0_0_25px_rgba(255,255,255,0.12)] transition hover:bg-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.55)] lg:block"
          >
            {lang === "ro" ? "Let’s talk" : "Let’s talk"}
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/10 bg-black/35 shadow-[0_0_25px_rgba(52,211,153,0.08)] md:hidden"
            aria-label="Open menu"
          >
            <span className="relative h-4 w-4">
              <motion.span
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 6 : 0,
                }}
                className="absolute left-0 top-0 h-[2px] w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.75)]"
              />

              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="absolute left-0 top-[6px] h-[2px] w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.75)]"
              />

              <motion.span
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -6 : 0,
                }}
                className="absolute left-0 top-[12px] h-[2px] w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.75)]"
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
            className="mx-6 mb-5 rounded-3xl border border-emerald-400/10 bg-black/60 p-4 shadow-[0_0_45px_rgba(52,211,153,0.1)] backdrop-blur-xl md:hidden"
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
                        ? "bg-emerald-400 text-black shadow-[0_0_24px_rgba(52,211,153,0.35)]"
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
