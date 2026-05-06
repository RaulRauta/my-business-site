import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Intro from "@/components/Intro";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowcraft",
  description:
    "Flowcraft by Raul — site-uri moderne, clare și orientate spre conversie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} h-full`}>
      <body className="relative min-h-screen overflow-x-hidden bg-[#08111c] text-white">
        {/* BACKGROUND SYSTEM */}
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* SOFT BASE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.16),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_38%),linear-gradient(180deg,#08111c_0%,#071018_45%,#05070c_100%)]" />

          {/* GLOW 1 */}
          <div className="absolute left-[-12%] top-[-15%] h-[700px] w-[700px] rounded-full bg-emerald-400/30 blur-[150px] animate-[neonFloat_14s_ease-in-out_infinite]" />

          {/* GLOW 2 */}
          <div className="absolute bottom-[-18%] right-[-12%] h-[720px] w-[720px] rounded-full bg-cyan-400/25 blur-[170px] animate-[neonFloatReverse_18s_ease-in-out_infinite]" />

          {/* GLOW 3 */}
          <div className="absolute left-[35%] top-[28%] h-[560px] w-[560px] rounded-full bg-purple-500/18 blur-[150px] animate-[neonFloat_20s_ease-in-out_infinite]" />

          {/* SOFT VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
        </div>

        <Intro />

        {/* CONTENT */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
