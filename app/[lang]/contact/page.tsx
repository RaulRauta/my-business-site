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
  const [phone, setPhone] = useState("+40");
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
      phoneError: "Număr invalid. Folosește formatul +407xxxxxxxx.",
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
      phoneError: "Invalid number. Use the format +407xxxxxxxx.",
      sideTitle: "What happens next?",
      steps: [
        "You send me the details about your business.",
        "I analyze what you need.",
        "I reply with a clear proposal.",
      ],
    },
  }[lang];

  function handlePhoneChange(value: string) {
    let cleaned = value.replace(/[^\d+]/g, "");

    if (!cleaned.startsWith("+40")) {
      cleaned = "+40" + cleaned.replace(/^\+?40?/, "");
    }

    const rest = cleaned.slice(3).replace(/\D/g, "").slice(0, 9);
    setPhone("+40" + rest);
    setPhoneError("");
  }

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
              className="mt-12 grid gap-5"
              onSubmit={async (e) => {
                e.preventDefault();

                setLoading(true);
                setStatus("idle");
                setPhoneError("");

                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                const phoneValue = String(data.phone || "").trim();
                const phoneRegex = /^\+40\d{9}$/;

                if (!phoneRegex.test(phoneValue)) {
                  setPhoneError(t.phoneError);
                  setLoading(false);
                  return;
                }

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
                  setPhone("+40");

                  form.scrollIntoView({ behavior: "smooth", block: "start" });

                  setTimeout(() => {
                    setStatus("idle");
                  }, 4000);
                } else {
                  setStatus("error");

                  form.scrollIntoView({ behavior: "smooth", block: "start" });

                  setTimeout(() => {
                    setStatus("idle");
                  }, 4000);
                }

                setLoading(false);
              }}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder={t.name}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t.email}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`w-full rounded-2xl border bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:bg-black/40 ${
                      phoneError
                        ? "border-red-400/60 focus:border-red-400"
                        : "border-white/10 focus:border-emerald-400/70 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                    }`}
                  />

                  {phoneError && (
                    <p className="mt-2 text-sm text-red-400">{phoneError}</p>
                  )}
                </div>

                <input
                  name="business"
                  type="text"
                  placeholder={t.business}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/70 focus:bg-black/40 focus:shadow-[0_0_22px_rgba(52,211,153,0.18)]"
                />
              </div>

              <CustomSelect lang={lang} onChange={setService} />

              <input type="hidden" name="service" value={service} />

              <textarea
                name="message"
                required
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
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-400 px-7 py-4 font-semibold text-black transition hover:bg-emerald-300 hover:shadow-[0_0_45px_rgba(52,211,153,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                {loading && (
                  <span className="relative z-10 h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                )}

                <span className="relative z-10">
                  {loading ? t.loading : t.button}
                </span>
              </button>
            </form>
          </div>

          <aside className="rounded-3xl border border-emerald-400/10 bg-black/35 p-8 shadow-[0_0_55px_rgba(52,211,153,0.08)] backdrop-blur-xl lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-2xl font-bold">{t.sideTitle}</h2>

            <div className="mt-8 space-y-6">
              {t.steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400 font-bold text-black">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-zinc-300">{step}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
