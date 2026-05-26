import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Intro from "@/components/Intro";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowcraftstudio.app"),

  title: {
    default: "FlowCraftStudio — Cinematic Web Experiences",
    template: "%s | FlowCraft Studio",
  },

  description:
    "Cinematic websites crafted for modern brands, restaurants and digital experiences.",

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/logo-icon.png",
  },

  openGraph: {
    title: "FlowCraftStudio — Cinematic Web Experiences",
    description:
      "Cinematic websites crafted for modern brands, restaurants and digital experiences.",
    url: "https://flowcraftstudio.app",
    siteName: "FlowCraft Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FlowCraftStudio — Cinematic Web Experiences",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FlowCraftStudio — Cinematic Web Experiences",
    description:
      "Cinematic websites crafted for modern brands, restaurants and digital experiences.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="2SsmGRtGh4gKP3FOorBi-qcr52ovMNVPmENP34oTt0E"
        />
      </head>

      <body className="relative min-h-screen overflow-x-hidden bg-[#08111c] text-white">
        {/* BACKGROUND SYSTEM */}
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* BASE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.1),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.08),transparent_38%),linear-gradient(180deg,#08111c_0%,#071018_45%,#05070c_100%)]" />

          {/* GLOW 1 */}
          <div className="absolute left-[-12%] top-[-15%] h-[700px] w-[700px] rounded-full bg-emerald-400/18 blur-[160px] animate-[neonFloat_14s_ease-in-out_infinite]" />

          {/* GLOW 2 */}
          <div className="absolute bottom-[-18%] right-[-12%] h-[720px] w-[720px] rounded-full bg-cyan-400/14 blur-[180px] animate-[neonFloatReverse_18s_ease-in-out_infinite]" />

          {/* GLOW 3 */}
          <div className="absolute left-[35%] top-[28%] h-[560px] w-[560px] rounded-full bg-purple-500/10 blur-[160px] animate-[neonFloat_20s_ease-in-out_infinite]" />

          {/* VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
        </div>

        <Intro />

        {/* CONTENT */}
        <div className="relative z-10">{children}</div>

        {/* VERCEL */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
