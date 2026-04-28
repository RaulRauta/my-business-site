"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { translations } from "@/lib/translations";

type Lang = "ro" | "en";

export default function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 120 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
    <>
      <motion.header
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 top-5 z-50 w-full px-4"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-5">
          <Link
            href={`/${lang}`}
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3 font-semibold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-black transition group-hover:scale-105">
              R
            </span>

            <span className="hidden text-sm text-white sm:block">
              Raul
              <span className="ml-1 text-zinc-500">/ Web Growth</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
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
            {/* LANGUAGE SWITCH */}
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

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
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
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-4 right-4 top-24 z-40 rounded-3xl border border-white/10 bg-black/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
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
    </>
  );
}
