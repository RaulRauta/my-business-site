"use client";

import { use, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CustomSelect from "@/components/CustomSelect";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";
import { useSearchParams } from "next/navigation";
import CountryCodeSelect from "@/components/CountryCodeSelect";

type Lang = "ro" | "en";

export default function ContactPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = use(params);
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");
  const source = searchParams.get("source");

  const defaultService =
    selectedPackage === "start" || selectedPackage === "growth"
      ? lang === "ro"
        ? "Website nou"
        : "New website"
      : selectedPackage === "custom"
        ? lang === "ro"
          ? "Nu sunt sigur"
          : "Not sure"
        : "";

  const [service, setService] = useState(defaultService);
  const [serviceError, setServiceError] = useState("");
  const [countryCode, setCountryCode] = useState("+40");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const initialPackage =
    selectedPackage === "start" ||
    selectedPackage === "growth" ||
    selectedPackage === "custom"
      ? selectedPackage
      : "";

  const [chosenPackage, setChosenPackage] = useState(initialPackage);

  const t = {
    ro: {
      badge: "Contact",
      title: "Hai să vorbim despre site-ul tău.",
      subtitle:
        "Spune-mi ce business ai, ce vrei să obții și unde ești acum. Îți voi răspunde cu o direcție clară.",
      name: "Nume",
      email: "Email",
      phone: "Telefon",
      business: "Tip business",
      message: "Mesaj",
      button: "Trimite mesajul",
      loading: "Se trimite...",
      success: "Mesaj trimis cu succes. Îți voi răspunde cât de curând.",
      error: "A apărut o eroare. Încearcă din nou.",
      phoneError: "Număr invalid. Alege prefixul și introdu un număr valid.",
      serviceError: "Selectează ce ai nevoie.",
      sideTitle: "Ce se întâmplă după?",
      liveStatus: "Disponibil pentru proiecte noi",
      replyTime: "Răspuns de obicei în 24h",
      steps: [
        "Îmi trimiți detaliile despre business.",
        "Analizez ce ai nevoie.",
        "Îți răspund cu o propunere clară.",
      ],
    },
    en: {
      badge: "Contact",
      title: "Let’s talk about your website.",
      subtitle:
        "Tell me what business you have, what you want to achieve and where you are right now. I’ll reply with a clear direction.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      business: "Business type",
      message: "Message",
      button: "Send message",
      loading: "Sending...",
      success: "Message sent successfully. I’ll get back to you soon.",
      error: "Something went wrong. Please try again.",
      phoneError: "Invalid number. Choose the prefix and enter a valid number.",
      serviceError: "Please select what you need.",
      sideTitle: "What happens next?",
      liveStatus: "Available for new projects",
      replyTime: "Usually replying within 24h",
      steps: [
        "You send me the details about your business.",
        "I analyze what you need.",
        "I reply with a clear proposal.",
      ],
    },
  }[lang];

  const packageInfo = {
    start: {
      label: "Start",
      ro: "Perfect pentru business-uri care au nevoie de un site clar, rapid și profesionist.",
      en: "Perfect for businesses that need a clear, fast and professional website.",
    },
    growth: {
      label: "Growth",
      ro: "Ideal pentru business-uri care vor o structură mai puternică și orientată spre conversie.",
      en: "Ideal for businesses that want a stronger, conversion-focused structure.",
    },
    custom: {
      label: "Custom",
      ro: "Pentru proiecte complexe, cu funcționalități și structură complet personalizate.",
      en: "For complex projects with fully custom structure and functionality.",
    },
  } as const;

  const selectedPackageInfo =
    selectedPackage === "start" ||
    selectedPackage === "growth" ||
    selectedPackage === "custom"
      ? packageInfo[selectedPackage]
      : null;
  const leadSource = source === "services" ? "services-page" : "direct-contact";
  const phonePlaceholders: Record<string, string> = {
    "+40": "712 345 678",
    "+44": "7911 123 456",
    "+353": "85 123 4567",
    "+49": "151 2345 6789",
    "+39": "312 345 6789",
    "+34": "612 345 678",
    "+33": "6 12 34 56 78",
    "+31": "6 12345678",
    "+32": "470 12 34 56",
    "+1": "202 555 0182",
  };
  const phoneLengths: Record<string, number> = {
    "+40": 9,
    "+44": 10,
    "+353": 9,
    "+49": 11,
    "+39": 10,
    "+34": 9,
    "+33": 9,
    "+31": 9,
    "+32": 9,
    "+1": 10,
  };

  const maxPhoneLength = phoneLengths[countryCode] || 15;
  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");

    switch (countryCode) {
      case "+40":
      case "+34":
        return digits.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1 $2 $3").trim();

      case "+44":
        return digits.replace(/(\d{4})(\d{3})(\d{0,3})/, "$1 $2 $3").trim();

      case "+353":
        return digits.replace(/(\d{2})(\d{3})(\d{0,4})/, "$1 $2 $3").trim();

      case "+49":
        return digits.replace(/(\d{3})(\d{4})(\d{0,4})/, "$1 $2 $3").trim();

      case "+39":
        return digits.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1 $2 $3").trim();

      case "+33":
        return digits
          .replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{0,2})/, "$1 $2 $3 $4 $5")
          .trim();

      case "+31":
        return digits.replace(/(\d{1})(\d{4})(\d{0,4})/, "$1 $2 $3").trim();

      case "+32":
        return digits
          .replace(/(\d{3})(\d{2})(\d{2})(\d{0,2})/, "$1 $2 $3 $4")
          .trim();

      case "+1":
        return digits.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1 $2 $3").trim();

      default:
        return digits;
    }
  };

  const phonePlaceholder = phonePlaceholders[countryCode] || "712 345 678";

  return (
    <>
      <Navbar lang={lang} />

      <PageReveal>
        <main className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(52,211,153,0.13),transparent_28%),radial-gradient(circle_at_90%_24%,rgba(34,211,238,0.09),transparent_32%),linear-gradient(180deg,rgba(8,24,36,0)_0%,rgba(7,18,28,0.88)_48%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-40 h-px bg-linear-to-r from-transparent via-emerald-400/18 to-transparent" />

          <section className="relative mx-auto grid w-full max-w-7xl min-w-0 gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.72fr)] lg:gap-16">
          <div className="relative w-full min-w-0 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {t.badge}
              </p>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.08)]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
                {t.liveStatus}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-300">{t.subtitle}</p>
            <p className="mt-4 text-sm font-medium text-zinc-500">
              {t.replyTime}
            </p>
            {selectedPackageInfo && (
              <div className="mx-auto mt-10 w-full min-w-0 rounded-3xl border border-emerald-400/22 bg-emerald-400/7 p-5 shadow-[0_0_55px_rgba(52,211,153,0.12)] backdrop-blur-xl sm:p-6 lg:mx-0 lg:max-w-none">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  {lang === "ro" ? "Pachet selectat" : "Selected package"}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {(["start", "growth", "custom"] as const).map((pack) => (
                    <button
                      key={pack}
                      type="button"
                      onClick={() => setChosenPackage(pack)}
                      className={`rounded-2xl border px-5 py-4 text-left font-semibold transition ${
                        chosenPackage === pack
                          ? "border-emerald-400 bg-emerald-400 text-black shadow-[0_0_30px_rgba(52,211,153,0.35)]"
                          : "border-white/10 bg-black/30 text-zinc-300 duration-300 hover:border-emerald-400/40 hover:bg-white/[0.04] hover:text-white hover:shadow-[0_0_24px_rgba(52,211,153,0.08)]"
                      }`}
                    >
                      {pack === "start" && "Start"}
                      {pack === "growth" && "Growth"}
                      {pack === "custom" && "Custom"}
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/4 p-6">
                  <h2 className="text-3xl font-bold text-white">
                    {chosenPackage === "start" && "Start"}
                    {chosenPackage === "growth" && "Growth"}
                    {chosenPackage === "custom" && "Custom"}
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
                    {chosenPackage === "start" &&
                      (lang === "ro"
                        ? "Perfect pentru business-uri care au nevoie de un site clar, rapid și profesionist."
                        : "Perfect for businesses that need a clear, fast and professional website.")}

                    {chosenPackage === "growth" &&
                      (lang === "ro"
                        ? "Ideal pentru business-uri care vor o structură mai puternică și orientată spre conversie."
                        : "Ideal for businesses that want a stronger, conversion-focused structure.")}

                    {chosenPackage === "custom" &&
                      (lang === "ro"
                        ? "Pentru proiecte complexe, cu funcționalități și structură complet personalizate."
                        : "For complex projects with fully custom structure and functionality.")}
                  </p>
                </div>
              </div>
            )}

            <form
              autoComplete="off"
              className="mt-14 grid w-full min-w-0 gap-5 rounded-3xl border border-cyan-300/12 bg-cyan-300/5 p-5 text-left shadow-[0_0_60px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-7"
              onSubmit={async (e) => {
                e.preventDefault();

                setLoading(true);
                setStatus("idle");
                setServiceError("");

                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                const digitsOnly = phoneNumber.replace(/\D/g, "");

                if (digitsOnly.length !== maxPhoneLength) {
                  setPhoneError(t.phoneError);
                  setLoading(false);
                  return;
                }

                if (!selectedPackageInfo && !service) {
                  setServiceError(t.serviceError);
                  setLoading(false);
                  return;
                }

                data.phone = `${countryCode} ${phoneNumber}`;
                data.countryCode = countryCode;
                data.leadSource = leadSource;

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    setStatus("success");
                    form.reset();
                    setService("");
                    setPhoneNumber("");
                    setCountryCode("+40");

                    form.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });

                    setTimeout(() => setStatus("idle"), 4000);
                  } else {
                    setStatus("error");
                    setTimeout(() => setStatus("idle"), 4000);
                  }
                } catch {
                  setStatus("error");
                  setTimeout(() => setStatus("idle"), 4000);
                }

                setLoading(false);
              }}
            >
              <div className="grid w-full min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder={t.name}
                  className="block w-full min-w-0 rounded-2xl border border-white/10 bg-[#071824]/58 px-5 py-4 outline-none transition duration-300 placeholder:text-zinc-500 hover:border-cyan-300/22 focus:border-emerald-400/60 focus:bg-emerald-400/7 focus:shadow-[0_0_18px_rgba(52,211,153,0.12)]"
                />

                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder={t.email}
                  className="block w-full min-w-0 rounded-2xl border border-white/10 bg-[#071824]/58 px-5 py-4 outline-none transition duration-300 placeholder:text-zinc-500 hover:border-cyan-300/22 focus:border-emerald-400/60 focus:bg-emerald-400/7 focus:shadow-[0_0_18px_rgba(52,211,153,0.12)]"
                />

                <input
                  name="business"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder={t.business}
                  className="block w-full min-w-0 rounded-2xl border border-white/10 bg-[#071824]/58 px-5 py-4 outline-none transition duration-300 placeholder:text-zinc-500 hover:border-cyan-300/22 focus:border-emerald-400/60 focus:bg-emerald-400/7 focus:shadow-[0_0_18px_rgba(52,211,153,0.12)] lg:col-span-2"
                />
              </div>

              <div className="relative flex w-full min-w-0 overflow-visible rounded-2xl border border-white/10 bg-[#071824]/58 transition duration-300 hover:border-cyan-300/22 focus-within:border-emerald-400/60 focus-within:bg-emerald-400/7 focus-within:shadow-[0_0_18px_rgba(52,211,153,0.12)]">
                <CountryCodeSelect
                  lang={lang}
                  value={countryCode}
                  onChange={setCountryCode}
                />

                <div className="min-w-0 flex-1">
                  <input
                    name="phoneNumber"
                    type="tel"
                    inputMode="numeric"
                    required
                    autoComplete="off"
                    value={phoneNumber}
                    onChange={(e) => {
                      const digits = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, maxPhoneLength);

                      const value = formatPhoneNumber(digits);
                      setPhoneNumber(value);
                      setPhoneError("");
                    }}
                    placeholder={phonePlaceholder}
                    className="block w-full min-w-0 bg-transparent px-5 py-4 outline-none placeholder:text-zinc-500"
                  />

                  {phoneError && (
                    <p className="mt-2 text-sm text-red-400">{phoneError}</p>
                  )}
                </div>
              </div>

              {!selectedPackageInfo && (
                <div>
                  <CustomSelect
                    lang={lang}
                    onChange={(value) => {
                      setService(value);
                      setServiceError("");
                    }}
                  />

                  {serviceError && (
                    <p className="mt-2 text-sm text-red-400">{serviceError}</p>
                  )}
                </div>
              )}

              <input type="hidden" name="service" value={service} />
              <input
                type="hidden"
                name="selectedPackage"
                value={chosenPackage}
              />
              <input type="hidden" name="leadSource" value={leadSource} />
              <input type="hidden" name="countryCode" value={countryCode} />
              <input
                type="hidden"
                name="phone"
                value={`${countryCode} ${phoneNumber}`}
              />
              <textarea
                name="message"
                required
                autoComplete="off"
                placeholder={t.message}
                rows={7}
                className="block w-full min-w-0 resize-none rounded-2xl border border-white/10 bg-[#071824]/58 px-5 py-4 outline-none transition duration-300 placeholder:text-zinc-500 hover:border-cyan-300/22 focus:border-emerald-400/60 focus:bg-emerald-400/7 focus:shadow-[0_0_18px_rgba(52,211,153,0.12)]"
              />

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-300"
                  >
                    {t.success}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-4 text-sm text-red-300"
                  >
                    {t.error}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-emerald-400 px-7 py-4 font-semibold text-black shadow-[0_0_28px_rgba(52,211,153,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_0_42px_rgba(52,211,153,0.28)] disabled:opacity-60"
              >
                {loading ? t.loading : t.button}
              </button>
            </form>
          </div>

          <aside className="w-full min-w-0 lg:sticky lg:top-28 lg:h-fit">
            <div className="min-w-0 border-b border-white/10 pb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {lang === "ro" ? "Contact direct" : "Direct contact"}
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {lang === "ro"
                  ? "Preferi să vorbim direct?"
                  : "Prefer to talk directly?"}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {lang === "ro"
                  ? "Poți folosi formularul sau mă poți contacta prin email ori telefon."
                  : "You can use the form or contact me directly by email or phone."}
              </p>

              <div className="group mt-7 min-w-0">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </p>
                <p className="mt-1 wrap-break-word font-semibold text-white">
                  raulflorinrauta@gmail.com
                </p>
              </div>

              <div className="group mt-6 min-w-0">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {lang === "ro" ? "Telefon" : "Phone"}
                </p>
                <a
                  href="tel:+40743419106"
                  className="mt-1 inline-block font-semibold text-white transition-colors hover:text-emerald-300"
                >
                  +40 743 419 106
                </a>
              </div>
            </div>

            <div className="relative mt-10 min-w-0">
              <h3 className="text-xl font-bold text-white">{t.sideTitle}</h3>

              <div className="relative mt-6 space-y-5">
                <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-linear-to-b from-emerald-400/0 via-emerald-400/30 to-emerald-400/0" />
                {t.steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/35 bg-[#0d1b17] font-bold text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.16)]">
                      {index + 1}
                    </div>

                    <p className="pt-1 leading-7 text-zinc-300">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </aside>
          </section>
        </main>
      </PageReveal>

      <Footer lang={lang} />
    </>
  );
}
