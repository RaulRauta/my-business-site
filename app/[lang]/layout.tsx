"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { use, useEffect } from "react";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const pathname = usePathname();
  const { lang: routeLang } = use(params);
  const lang = routeLang === "en" ? "en" : "ro";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen text-white">
      <motion.div
        key={pathname}
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
