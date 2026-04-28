"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CustomSelect({
  lang,
  onChange,
}: {
  lang: "ro" | "en";
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options =
    lang === "ro"
      ? [
          "Website nou",
          "Redesign",
          "Landing page",
          "Mentenanță",
          "Nu sunt sigur",
        ]
      : ["New website", "Redesign", "Landing page", "Maintenance", "Not sure"];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-2xl border border-white/10 bg-[#111] px-5 py-4 pr-12 text-left text-zinc-300 outline-none transition hover:border-white/20 focus:border-emerald-400"
      >
        {selected || (lang === "ro" ? "Ce ai nevoie?" : "What do you need?")}
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
            className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setSelected(option);
                  onChange(option);
                  setOpen(false);
                }}
                className="block w-full px-5 py-3 text-left text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
