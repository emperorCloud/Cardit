"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/content";
import ServiceIcon from "./ServiceIcon";
import { useLanguage } from "./LanguageProvider";

export default function ServicesOverview({ services }: { services: Service[] }) {
  const { lang, t } = useLanguage();
  const o = t.servicesOverview;

  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-6 md:px-10 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-graphite sm:text-4xl md:text-5xl [text-wrap:balance]">
            {o.heading}
          </h2>
          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-graphite underline-offset-4 hover:text-cyan-dim hover:underline"
          >
            {o.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div>
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-5 transition-colors hover:bg-mist md:py-6"
                >
                  <ServiceIcon name={s.iconName} className="h-5 w-5 shrink-0 text-cyan-dim" strokeWidth={1.6} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-medium tracking-[-0.01em] text-graphite md:text-xl">
                      {s.title[lang]}
                    </span>
                    <span className="mt-0.5 line-clamp-1 block text-sm text-steel">{s.tagline[lang]}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-graphite/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-dim" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <p className="font-display text-lg font-medium text-graphite">{o.comboTitle}</p>
              <p className="mt-1 text-sm text-steel">{o.comboDesc}</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              {o.comboCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
