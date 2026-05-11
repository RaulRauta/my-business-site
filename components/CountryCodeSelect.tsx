"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CountryCodeSelectProps = {
  lang: "ro" | "en";
  value: string;
  onChange: (value: string) => void;
};

const countries = [
  { code: "+40", ro: "România", en: "Romania" },
  { code: "+44", ro: "Regatul Unit", en: "United Kingdom" },
  { code: "+353", ro: "Irlanda", en: "Ireland" },
  { code: "+49", ro: "Germania", en: "Germany" },
  { code: "+39", ro: "Italia", en: "Italy" },
  { code: "+34", ro: "Spania", en: "Spain" },
  { code: "+33", ro: "Franța", en: "France" },
  { code: "+31", ro: "Olanda", en: "Netherlands" },
  { code: "+32", ro: "Belgia", en: "Belgium" },
  { code: "+1", ro: "SUA / Canada", en: "USA / Canada" },
];

export default function CountryCodeSelect({
  lang,
  value,
  onChange,
}: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const selected =
    countries.find((country) => country.code === value) || countries[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-left outline-none transition hover:border-emerald-400/40 focus:border-emerald-400/70 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)] sm:justify-between"
      >
        <span className="font-semibold text-white">{selected.code}</span>
        <span className="ml-3 hidden truncate text-sm text-zinc-400 sm:block">
          {lang === "ro" ? selected.ro : selected.en}
        </span>
      </button>

      <motion.div
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
      >
        ▼
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-50 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#111] shadow-2xl"
          >
            {countries.map((country) => (
              <button
                key={`${country.code}-${country.en}`}
                type="button"
                onClick={() => {
                  onChange(country.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-5 py-3 text-left transition hover:bg-white/10 hover:text-white ${
                  selected.code === country.code
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-zinc-300"
                }`}
              >
                <span className="font-semibold">{country.code}</span>
                <span className="text-sm">
                  {lang === "ro" ? country.ro : country.en}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
