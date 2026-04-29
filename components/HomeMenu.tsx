"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "ro" | "en";

export default function HomeMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-black/40 backdrop-blur-xl shadow-[0_0_25px_rgba(52,211,153,0.2)] transition hover:scale-105"
      >
        <div className="flex flex-col gap-[4px]">
          <span className="h-[2px] w-5 bg-emerald-400" />
          <span className="h-[2px] w-5 bg-emerald-400" />
          <span className="h-[2px] w-5 bg-emerald-400" />
        </div>
      </button>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#05070c] flex flex-col justify-center items-center"
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              ✕
            </button>

            {/* LINKS */}
            <div className="flex flex-col items-center gap-8 text-3xl font-bold">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-white transition hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
