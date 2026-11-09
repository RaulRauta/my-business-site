"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import ModalShell from "@/components/ModalShell";

export type ServicePackage = {
  id: "start" | "growth" | "custom";
  name: string;
  eyebrow: string;
  price: number | null;
  description: string;
  benefits: string[];
  perfectFor: string;
  included: string[];
  timeline: string;
  extras: string[];
  cta: string;
  featured?: boolean;
};

type Campaign = {
  discountPercent: number;
  lastDay: string;
  expiresAt: number;
};

type ServicesPackagesProps = {
  lang: "ro" | "en";
  packages: ServicePackage[];
  campaign: Campaign | null;
  copy: {
    badge: string;
    title: string;
    text: string;
    startingFrom: string;
    mostPopular: string;
    viewDetails: string;
    perfectFor: string;
    included: string;
    timeline: string;
    extras: string;
    startProject: string;
    close: string;
    note: string;
    customPricing: string;
    customPrice: string;
    campaignTitle: string;
    campaignUntil: string;
    regularPrice: string;
    salePrice: string;
  };
};

function PackagePrice({
  price,
  campaign,
  copy,
  currency,
}: {
  price: ServicePackage["price"];
  campaign: Campaign | null;
  copy: ServicesPackagesProps["copy"];
  currency: Intl.NumberFormat;
}) {
  const showDiscount = campaign !== null && price !== null;
  const currentPrice = showDiscount
    ? price * (1 - campaign.discountPercent / 100)
    : price;

  return (
    <span className="block">
      <span className="block text-sm text-zinc-400">
        {price === null ? copy.customPricing : copy.startingFrom}
      </span>
      <span className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {showDiscount && (
          <span className="text-lg text-zinc-400">
            <span className="sr-only">{copy.regularPrice}: </span>
            <del>{currency.format(price)}</del>
          </span>
        )}
        <span
          className={`text-4xl font-black tabular-nums ${showDiscount ? "text-[#f5d59d]" : "text-white"}`}
        >
          {showDiscount && <span className="sr-only">{copy.salePrice}: </span>}
          {currentPrice === null
            ? copy.customPrice
            : currency.format(currentPrice)}
        </span>
      </span>
    </span>
  );
}

export default function ServicesPackages({
  lang,
  packages,
  copy,
  campaign,
}: ServicesPackagesProps) {
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(
    null,
  );
  const [expiredAt, setExpiredAt] = useState<number | null>(null);
  const expiresAt = campaign?.expiresAt;
  const activeCampaign =
    campaign && campaign.expiresAt !== expiredAt ? campaign : null;
  const locale = lang === "ro" ? "ro-RO" : "en-IE";
  const currency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    if (expiresAt === undefined) return;

    const deadline = expiresAt;
    let timeout: ReturnType<typeof setTimeout>;
    function checkExpiration() {
      clearTimeout(timeout);
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        setExpiredAt(deadline);
      } else {
        timeout = setTimeout(checkExpiration, Math.min(remaining, 2_147_483_647));
      }
    }

    timeout = setTimeout(checkExpiration, 0);
    window.addEventListener("pageshow", checkExpiration);
    document.addEventListener("visibilitychange", checkExpiration);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("pageshow", checkExpiration);
      document.removeEventListener("visibilitychange", checkExpiration);
    };
  }, [expiresAt]);

  function openPackage(pack: ServicePackage) {
    setSelectedPackage(pack);
  }

  const closePackage = useCallback(() => {
    setSelectedPackage(null);
  }, []);

  return (
    <section className="mt-16">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {copy.badge}
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            {copy.title}
          </h2>
        </div>

        <p className="max-w-xl leading-7 text-zinc-400">{copy.text}</p>
      </div>

      {activeCampaign && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-lg border border-[#d9b46f]/25 bg-linear-to-r from-[#d9b46f]/10 to-transparent px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-2xl font-bold tabular-nums text-[#f5d59d]">
              -{activeCampaign.discountPercent}%
            </span>
            <div>
              <p className="text-sm font-semibold text-[#f5d59d]">Black Friday</p>
              <p className="text-sm text-zinc-300">{copy.campaignTitle}</p>
            </div>
          </div>
          <p className="text-sm text-zinc-300">
            {copy.campaignUntil}{" "}
            <time
              dateTime={activeCampaign.lastDay}
              className="font-semibold text-white"
            >
              {new Intl.DateTimeFormat(locale, {
                day: "numeric",
                month: "long",
                timeZone: "UTC",
              }).format(new Date(activeCampaign.lastDay))}
            </time>
          </p>
        </div>
      )}

      <div className={`grid gap-6 lg:grid-cols-3 ${activeCampaign ? "mt-5" : "mt-10"}`}>
        {packages.map((pack) => (
          <button
            key={pack.id}
            type="button"
            onClick={() => openPackage(pack)}
            className={`group relative flex min-h-130 flex-col overflow-hidden rounded-3xl border p-7 text-left backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:scale-[1.005] focus:outline-none focus:ring-2 focus:ring-emerald-400/45 ${
              pack.featured
                ? "border-emerald-400/30 bg-emerald-400/8 shadow-[0_0_76px_rgba(52,211,153,0.12)] hover:border-emerald-400/38 hover:shadow-[0_0_92px_rgba(52,211,153,0.16)]"
                : pack.id === "custom"
                  ? "border-cyan-400/18 bg-cyan-400/7 shadow-[0_0_66px_rgba(34,211,238,0.08)] hover:border-cyan-300/32 hover:shadow-[0_0_80px_rgba(34,211,238,0.12)]"
                  : "border-emerald-400/12 bg-emerald-400/5 shadow-[0_0_66px_rgba(52,211,153,0.06)] hover:border-emerald-400/26 hover:shadow-[0_0_70px_rgba(52,211,153,0.1)]"
            }`}
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(52,211,153,0.08),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.055),transparent_38%)] opacity-60 transition group-hover:opacity-90" />
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-45" />

            <span className="relative z-10 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-zinc-300">
                {pack.eyebrow}
              </span>

              {pack.featured && (
                <span className="rounded-full bg-emerald-400 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-black shadow-[0_0_20px_rgba(52,211,153,0.22)]">
                  {copy.mostPopular}
                </span>
              )}
            </span>

            <span className="relative z-10 mt-8 block">
              <span className="text-3xl font-bold tracking-tight text-white">
                {pack.name}
              </span>

              <span className="mt-5 block">
                <PackagePrice
                  price={pack.price}
                  campaign={activeCampaign}
                  copy={copy}
                  currency={currency}
                />
              </span>

              <span className="mt-6 block min-h-21 leading-7 text-zinc-400">
                {pack.description}
              </span>
            </span>

            <span className="relative z-10 mt-7 grid gap-3">
              {pack.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="flex gap-3 text-sm text-zinc-300"
                >
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span>{benefit}</span>
                </span>
              ))}
            </span>

            <span className="relative z-10 mt-auto pt-8">
              <span
                className={`block rounded-full px-6 py-3 text-center font-semibold transition ${
                  pack.featured
                    ? "bg-emerald-400 text-black shadow-[0_0_26px_rgba(52,211,153,0.16)] group-hover:bg-emerald-300"
                    : "border border-white/10 bg-white/4 text-white group-hover:border-emerald-400/22 group-hover:bg-white/8"
                }`}
              >
                {copy.viewDetails}
              </span>
            </span>
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-500">{copy.note}</p>

      <ModalShell
        isOpen={Boolean(selectedPackage)}
        onClose={closePackage}
        labelledBy="service-package-modal-title"
        className="max-w-2xl border border-emerald-400/18 bg-[#071824]/95 p-5 shadow-[0_0_90px_rgba(52,211,153,0.13)] sm:p-8"
      >
        {selectedPackage && (
          <>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(52,211,153,0.09),transparent_34%),radial-gradient(circle_at_90%_25%,rgba(34,211,238,0.07),transparent_36%)]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                      {selectedPackage.eyebrow}
                    </p>

                    <h3
                      id="service-package-modal-title"
                      className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl"
                    >
                      {selectedPackage.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    aria-label={copy.close}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-xl text-white transition hover:border-emerald-400/22 hover:bg-white/8"
                  >
                    ×
                  </button>
                </div>

                {activeCampaign && selectedPackage.price !== null && (
                  <div className="mt-5 border-l border-[#d9b46f]/40 pl-4">
                    <p className="mb-2 text-sm font-semibold text-[#f5d59d]">
                      Black Friday · -{activeCampaign.discountPercent}%
                    </p>
                    <PackagePrice
                      price={selectedPackage.price}
                      campaign={activeCampaign}
                      copy={copy}
                      currency={currency}
                    />
                  </div>
                )}

                <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-3xl border border-emerald-400/12 bg-emerald-400/5 p-5">
                    <p className="text-sm font-semibold text-emerald-400">
                      {copy.perfectFor}
                    </p>
                    <p className="mt-3 leading-7 text-zinc-300">
                      {selectedPackage.perfectFor}
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/4 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {copy.timeline}
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        {selectedPackage.timeline}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-cyan-300/12 bg-cyan-300/5 p-5">
                    <p className="text-sm font-semibold text-emerald-400">
                      {copy.included}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedPackage.included.map((item) => (
                        <p
                          key={item}
                          className="flex gap-3 text-sm text-zinc-300"
                        >
                          <span className="text-emerald-400">✓</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-white/4 p-5">
                  <p className="text-sm font-semibold text-emerald-400">
                    {copy.extras}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedPackage.extras.map((extra) => (
                      <span
                        key={extra}
                        className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-300"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/${lang}/contact?package=${selectedPackage.id}&source=services`}
                    className="rounded-full bg-emerald-400 px-7 py-3 text-center font-semibold text-black shadow-[0_0_28px_rgba(52,211,153,0.14)] transition hover:bg-emerald-300"
                  >
                    {copy.startProject}
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    className="rounded-full border border-white/10 bg-white/4 px-7 py-3 font-semibold text-white transition hover:border-emerald-400/22 hover:bg-white/8"
                  >
                    {copy.close}
                  </button>
                </div>
              </div>
          </>
        )}
      </ModalShell>
    </section>
  );
}
