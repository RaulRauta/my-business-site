import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

      <body className="relative min-h-screen overflow-x-hidden bg-[#040910] text-white">
        {/* BACKGROUND SYSTEM */}
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* BASE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(52,211,153,0.09),transparent_36%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.075),transparent_34%),radial-gradient(circle_at_45%_48%,rgba(15,118,110,0.045),transparent_44%),linear-gradient(180deg,#06111a_0%,#040b12_48%,#03070c_100%)]" />

          {/* GLOW 1 */}
          <div className="absolute left-[-14%] top-[-18%] h-[660px] w-[660px] rounded-full bg-emerald-400/14 blur-[170px]" />

          {/* GLOW 2 */}
          <div className="absolute bottom-[-20%] right-[-14%] h-[720px] w-[720px] rounded-full bg-cyan-400/12 blur-[190px]" />

          {/* GLOW 3 */}
          <div className="absolute left-[34%] top-[32%] h-[520px] w-[520px] rounded-full bg-teal-300/7 blur-[170px]" />

          {/* VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.34)_100%)]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">{children}</div>

        {/* VERCEL */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
