"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
