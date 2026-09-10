"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Layers, CheckCircle2, MessageCircle } from "lucide-react";
import CircuitContour from "./CircuitContour";
import { useLanguage } from "./LanguageProvider";
import { socials } from "@/lib/site";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white text-graphite">
      <CircuitContour className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-100/60 via-sky-50/50 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-content px-6 pb-16 pt-14 md:px-10 md:pb-28 md:pt-24 lg:px-16">
        <div
          className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-cyan/40 bg-white/90 px-3.5 py-1.5 shadow-sm md:mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-display text-[11px] font-bold uppercase tracking-wider text-cyan-dim">
            {t.hero.eyebrow}
          </span>
        </div>

        <h1
          className="max-w-3xl animate-fade-up font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl md:leading-[1.05]"
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.titleStart}
          <span className="bg-gradient-to-r from-cyan-dim via-cyan to-sky-600 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
          {t.hero.titleEnd}
        </h1>

        <p
          className="mt-5 max-w-xl animate-fade-up text-sm leading-relaxed text-steel md:mt-6 md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row md:mt-10 md:gap-3.5"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-gradient-to-r from-cyan-600 via-cyan to-sky-600 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-cyan/25 transition-all hover:-translate-y-0.5 hover:shadow-cyan/40"
          >
            <Sparkles className="h-4 w-4" />
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/services" className="btn-secondary">
            <Layers className="h-4 w-4 text-cyan-dim" />
            {t.hero.ctaSecondary}
          </Link>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-emerald-300 bg-emerald-50 px-5 py-3.5 font-display text-sm font-bold text-emerald-800 shadow-sm transition-colors hover:bg-emerald-100/80"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600" />
            {t.hero.ctaWhatsapp}
          </a>
        </div>

        <div
          className="mt-6 flex animate-fade-up flex-wrap items-center gap-2 md:mt-8"
          style={{ animationDelay: "0.35s" }}
        >
          {t.hero.techPills.map((pill) => (
            <span
              key={pill}
              className="rounded-lg border border-line bg-mist px-2.5 py-1 text-xs font-semibold text-graphite/80"
            >
              {pill}
            </span>
          ))}
        </div>

        <div
          className="mt-6 grid animate-fade-up grid-cols-1 gap-3 border-t border-line pt-6 text-xs font-semibold text-graphite/80 sm:grid-cols-3 md:mt-8"
          style={{ animationDelay: "0.4s" }}
        >
          {t.hero.reassurance.map((line) => (
            <div key={line} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-dim" />
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
