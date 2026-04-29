"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "ro" | "en";

export default function HomeMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const links = [
    {
      href: `/${lang}/services`,
      label: lang === "ro" ? "Servicii" : "Services",
    },
    { href: `/${lang}/process`, label: lang === "ro" ? "Proces" : "Process" },
    {
      href: `/${lang}/portfolio`,
      label: lang === "ro" ? "Portofoliu" : "Portfolio",
    },
    { href: `/${lang}/contact`, label: "Contact" },
  ];

  function switchLang(newLang: Lang) {
    return `/${newLang}`;
  }

  return (
    <div ref={menuRef} className="fixed right-6 top-6 z-50">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-black/45 shadow-[0_0_25px_rgba(52,211,153,0.18)] backdrop-blur-xl transition hover:scale-105"
      >
        <span className="relative h-4 w-5">
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-emerald-400"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-emerald-400"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            className="absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-emerald-400"
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-64 overflow-hidden rounded-3xl border border-emerald-400/10 bg-black/70 p-3 shadow-[0_0_45px_rgba(52,211,153,0.12)] backdrop-blur-xl"
          >
            <div className="grid gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-emerald-400 hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t border-white/10 pt-3">
              <div className="flex gap-2">
                <Link
                  href={switchLang("ro")}
                  className={`flex-1 rounded-2xl px-4 py-2 text-center text-xs font-semibold transition ${
                    lang === "ro"
                      ? "bg-emerald-400 text-black"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white"
                  }`}
                >
                  RO
                </Link>

                <Link
                  href={switchLang("en")}
                  className={`flex-1 rounded-2xl px-4 py-2 text-center text-xs font-semibold transition ${
                    lang === "en"
                      ? "bg-emerald-400 text-black"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white"
                  }`}
                >
                  EN
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
