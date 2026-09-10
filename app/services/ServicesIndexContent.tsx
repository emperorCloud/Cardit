"use client";

import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesIndexContent() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-mist section-pad !pb-10 md:!pb-16">
        <div className="mx-auto max-w-content">
          <p className="eyebrow mb-4">{t.servicesIndex.eyebrow}</p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-graphite sm:text-4xl md:text-5xl">
            {t.servicesIndex.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-steel md:mt-6 md:text-base">
            {t.servicesIndex.intro}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative flex flex-col overflow-hidden rounded-sm border bg-white p-6 transition-colors ${service.colors.border} hover:bg-mist/50`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.colors.accent}`}
              />
              <div className="flex items-center justify-between">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border ${service.colors.iconBg}`}>
                  <ServiceIcon name={service.iconName} className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className={`rounded-full border px-2.5 py-1 font-display text-xs font-bold ${service.colors.badge}`}>
                  {service.index} / 12
                </span>
              </div>

              <h2 className="mt-4 font-display text-lg font-bold text-graphite">
                {service.title[lang]}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {service.tagline[lang]}
              </p>

              <ul className="mt-4 space-y-1.5">
                {service.highlights[lang].slice(0, 3).map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-graphite/75">
                    <span className={`mt-1 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r ${service.colors.accent}`} />
                    {point}
                  </li>
                ))}
              </ul>

              <span className={`mt-5 font-display text-xs uppercase tracking-wide ${service.colors.text} group-hover:underline`}>
                {t.servicesOverview.seeDetail}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
