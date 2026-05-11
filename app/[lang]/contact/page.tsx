"use client";

import { use, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CustomSelect from "@/components/CustomSelect";
import Footer from "@/components/Footer";
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
      ro: "Pentru proiecte premium cu funcționalități și structură complet personalizate.",
      en: "For premium projects with fully custom structure and functionality.",
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

      <main className="min-h-screen px-4 py-20 md:px-6 md:py-28">
        <section className="grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="w-full text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {t.badge}
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-300">{t.subtitle}</p>
            {selectedPackageInfo && (
              <div className="mx-auto mt-10 w-full rounded-3xl border border-emerald-400/20 bg-black/35 p-6 shadow-[0_0_55px_rgba(52,211,153,0.1)] backdrop-blur-xl lg:mx-0 lg:max-w-none">
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
                          : "border-white/10 bg-black/30 text-zinc-300 hover:border-emerald-400/40 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {pack === "start" && "Start"}
                      {pack === "growth" && "Growth"}
                      {pack === "custom" && "Custom"}
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
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
                        ? "Pentru proiecte premium cu funcționalități și structură complet personalizate."
                        : "For premium projects with fully custom structure and functionality.")}
                  </p>
                </div>
              </div>
            )}

            <form
              autoComplete="off"
              className="mt-12 grid w-full gap-5 text-left"
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
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder={t.name}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />

                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder={t.email}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />
              </div>

              <div className="relative flex rounded-2xl border border-white/10 bg-black/30 focus-within:border-emerald-400/70 focus-within:shadow-[0_0_22px_rgba(52,211,153,0.18)]">
                <CountryCodeSelect
                  lang={lang}
                  value={countryCode}
                  onChange={setCountryCode}
                />

                <div>
                  <input
                    name="phoneNumber"
                    type="tel"
                    inputMode="numeric"
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
                    className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-zinc-500"
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
                className="resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
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
                className="rounded-full bg-emerald-400 px-7 py-4 font-semibold text-black transition hover:bg-emerald-300 disabled:opacity-60"
              >
                {loading ? t.loading : t.button}
              </button>
            </form>
          </div>

          <aside className="rounded-3xl border border-emerald-400/10 bg-black/35 p-8 shadow-[0_0_70px_rgba(52,211,153,0.08)] backdrop-blur-xl lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                {lang === "ro" ? "Contact direct" : "Direct contact"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                {lang === "ro"
                  ? "Preferi să vorbim direct?"
                  : "Prefer to talk directly?"}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {lang === "ro"
                  ? "Poți folosi formularul sau mă poți contacta prin email ori telefon."
                  : "You can use the form or contact me directly by email or phone."}
              </p>

              <div className="group rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </p>
                <p className="mt-1 break-words font-semibold text-white">
                  raulflorinrauta@gmail.com
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {lang === "ro" ? "Telefon" : "Phone"}
                </p>
                <p className="mt-1 font-semibold text-white">+40 000 000 000</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold text-white">{t.sideTitle}</h3>

              <div className="mt-6 space-y-5">
                {t.steps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400 font-bold text-black shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                      {index + 1}
                    </div>

                    <p className="pt-1 leading-7 text-zinc-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
