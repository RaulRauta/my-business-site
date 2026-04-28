"use client";

import { use, useState } from "react";
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
      sideTitle: "What happens next?",
      steps: [
        "You send me the details about your business.",
        "I analyze what you need.",
        "I reply with a clear proposal.",
      ],
    },
  }[lang];

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

            <form className="mt-12 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder={t.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400"
                />

                <input
                  name="email"
                  type="email"
                  placeholder={t.email}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="phone"
                  type="text"
                  placeholder={t.phone}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400"
                />

                <input
                  name="business"
                  type="text"
                  placeholder={t.business}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400"
                />
              </div>

              {/* CUSTOM SELECT */}
              <CustomSelect lang={lang} onChange={setService} />

              {/* HIDDEN INPUT (trimite valoarea) */}
              <input type="hidden" name="service" value={service} />

              <textarea
                name="message"
                placeholder={t.message}
                rows={7}
                className="resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none transition placeholder:text-zinc-500 focus:border-emerald-400"
              />

              <button
                type="submit"
                className="rounded-full bg-emerald-400 px-7 py-4 font-semibold text-black transition hover:bg-emerald-300"
              >
                {t.button}
              </button>
            </form>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 lg:sticky lg:top-28 lg:h-fit">
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
