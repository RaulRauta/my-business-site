"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { translations } from "@/lib/translations";

type Lang = "ro" | "en";

export default function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled((current) => {
          const next = window.scrollY > 20;
          return current === next ? current : next;
        });
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[lang];

  const navItems = [
    { href: `/${lang}/services`, label: t.navServices },
    { href: `/${lang}/process`, label: t.navProcess },
    {
      href: `/${lang}/projects`,
      label: lang === "ro" ? "Proiecte" : "Projects",
    },
    { href: `/${lang}/about`, label: lang === "ro" ? "Despre" : "About" },
    { href: `/${lang}/contact`, label: t.navContact },
  ];

  function switchLang(newLang: Lang) {
    return pathname.replace(`/${lang}`, `/${newLang}`);
  }

  return (
    <header
      data-main-navbar
      data-modal-shell
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07111a]/82 shadow-[0_18px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
          : "border-b border-white/7 bg-[#07111a]/46 backdrop-blur-md"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-400/18 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* LOGO */}
        <Link
          href={`/${lang}`}
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] transition duration-300 group-hover:border-emerald-400/24 group-hover:bg-emerald-400/8">
            <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(52,211,153,0.12),transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <Image
              src="/logo-icon.png"
              alt="FlowCraft Studio logo"
              width={28}
              height={28}
              className="relative z-10 h-7 w-7 object-contain"
            />
          </span>

          <div className="hidden leading-tight sm:block">
            <p className="text-base font-semibold tracking-tight text-white transition group-hover:text-emerald-300">
              Flowcraft
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-300/70">
              Studio
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center rounded-full border border-white/8 bg-white/[0.035] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.18)] md:flex">
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
                  <span className="absolute inset-0 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.16)] transition-all duration-300" />
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* LANGUAGE SWITCH */}
          <div className="flex items-center rounded-full border border-white/8 bg-white/[0.035] p-1">
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
                <span className="absolute inset-0 hidden rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.14)] transition-all duration-300 md:block" />
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
                <span className="absolute inset-0 hidden rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.14)] transition-all duration-300 md:block" />
              )}

              <span className="relative z-10">EN</span>
            </Link>
          </div>

          {/* DESKTOP CTA */}
          <Link
            href={`/${lang}/contact`}
            className="hidden rounded-full bg-white px-5 py-2 text-[14px] font-semibold tracking-tight text-black shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 lg:block"
          >
            {lang === "ro" ? "Hai să vorbim" : "Let’s talk"}
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] md:hidden"
            aria-label="Open menu"
          >
            <span className="relative h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-emerald-300 transition duration-300 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-emerald-300 transition duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-3 h-0.5 w-4 rounded-full bg-emerald-300 transition duration-300 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mx-4 mb-5 rounded-3xl border border-white/10 bg-[#07111a]/88 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-200 md:hidden">
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
                        ? "bg-emerald-300 text-black shadow-[0_0_16px_rgba(52,211,153,0.14)]"
                        : "bg-white/4 text-zinc-300 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
        </div>
      )}
    </header>
  );
}
