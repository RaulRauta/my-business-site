"use client";

import { use, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CustomSelect from "@/components/CustomSelect";
import Footer from "@/components/Footer";

type Lang = "ro" | "en";

export default function ContactPage({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = use(params);

  const [service, setService] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
      phoneError: "Număr invalid. Folosește formatul +40 7xx xxx xxx.",
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
      phoneError: "Invalid number. Use the format +40 7xx xxx xxx.",
      serviceError: "Please select what you need.",
      sideTitle: "What happens next?",
      steps: [
        "You send me the details about your business.",
        "I analyze what you need.",
        "I reply with a clear proposal.",
      ],
    },
  }[lang];

  const formattedPhone = phoneDigits
    .replace(/\D/g, "")
    .slice(0, 9)
    .replace(/(\d{3})(?=\d)/g, "$1 ")
    .trim();

  const fullPhone = `+40 ${formattedPhone}`.trim();

  return (
    <>
      <Navbar lang={lang} />

      <main className="min-h-screen px-6 py-28">
        <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {t.badge}
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-300">{t.subtitle}</p>

            <form
              autoComplete="off"
              className="mt-12 grid gap-5"
              onSubmit={async (e) => {
                e.preventDefault();

                setLoading(true);
                setStatus("idle");
                setPhoneError("");
                setServiceError("");

                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                const digitsOnly = phoneDigits.replace(/\D/g, "");
                const phoneRegex = /^\d{9}$/;

                if (!phoneRegex.test(digitsOnly)) {
                  setPhoneError(t.phoneError);
                  setLoading(false);
                  return;
                }

                if (!service) {
                  setServiceError(t.serviceError);
                  setLoading(false);
                  return;
                }

                data.phone = `+40 ${formattedPhone}`;

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
                    setPhoneDigits("");

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
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder={t.name}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />

                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder={t.email}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <div
                    className={`flex items-center rounded-2xl border bg-black/30 transition ${
                      phoneError
                        ? "border-red-400/60"
                        : "border-white/10 focus-within:border-emerald-400/70 focus-within:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                    }`}
                  >
                    <span className="select-none pl-5 font-medium text-zinc-400">
                      +40
                    </span>

                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="off"
                      value={formattedPhone}
                      onChange={(e) => {
                        const digits = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 9);

                        setPhoneDigits(digits);
                        setPhoneError("");
                      }}
                      placeholder="712 345 678"
                      className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-zinc-500"
                    />
                  </div>

                  <input type="hidden" name="phoneFull" value={fullPhone} />

                  {phoneError && (
                    <p className="mt-2 text-sm text-red-400">{phoneError}</p>
                  )}
                </div>

                <input
                  name="business"
                  type="text"
                  autoComplete="off"
                  placeholder={t.business}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />
              </div>

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

              <input type="hidden" name="service" value={service} />

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
                  ? "Preferi să vorbești direct?"
                  : "Prefer to talk directly?"}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {lang === "ro"
                  ? "Poți folosi formularul sau mă poți contacta direct prin email ori telefon."
                  : "You can use the form or contact me directly by email or phone."}
              </p>

              <div className="mt-7 grid gap-3">
                <div className="group rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Email
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    your@email.com
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    {lang === "ro" ? "Telefon" : "Phone"}
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    +40 712 345 678
                  </p>
                </div>
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
