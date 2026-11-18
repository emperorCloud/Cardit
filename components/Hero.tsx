"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CircuitContour from "./CircuitContour";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";
import { socials } from "@/lib/site";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Le seul mouvement de la page : le tracé se dessine une fois au chargement */}
      <CircuitContour className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[75%] w-full opacity-70 md:block" />

      <div className="relative mx-auto max-w-content px-5 pb-20 pt-16 sm:px-6 md:px-10 md:pb-32 md:pt-28 lg:px-16">
        <p className="max-w-sm text-sm leading-snug text-steel">{h.eyebrow}</p>

        <h1 className="mt-6 max-w-5xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-graphite sm:text-6xl lg:text-[5.25rem] [text-wrap:balance]">
          {h.titleStart}
          {h.titleHighlight}
          {h.titleEnd}
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-steel md:text-lg">{h.subtitle}</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-primary group !min-h-[52px] whitespace-nowrap !px-4 sm:!px-7">
            {h.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !min-h-[52px] whitespace-nowrap !px-4 sm:!px-7"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">{h.ctaWhatsapp}</span>
          </a>
          <Link href="/services" className="col-span-2 py-2 text-center text-sm sm:col-span-1 sm:px-2 sm:text-left sm:ml-2 font-medium text-graphite underline-offset-4 hover:text-cyan-dim hover:underline sm:ml-2">
            {h.ctaSecondary}
          </Link>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-3 border-t border-line pt-6 text-sm text-steel sm:grid-cols-3 md:mt-24">
          {h.reassurance.map((line) => (
            <li key={line} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
