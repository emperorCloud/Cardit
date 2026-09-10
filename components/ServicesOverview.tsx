"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import ServiceIcon from "./ServiceIcon";
import { useLanguage } from "./LanguageProvider";

export default function ServicesOverview() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="section-pad bg-white">
      <div className="mx-auto max-w-content">
        <p className="eyebrow mb-4">{t.servicesOverview.eyebrow}</p>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-6">
          <h2 className="max-w-xl text-2xl font-bold leading-tight text-graphite sm:text-3xl md:text-4xl">
            {t.servicesOverview.heading}
          </h2>
          <Link href="/services" className="btn-secondary shrink-0">
            {t.servicesOverview.cta}
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3 md:mt-14 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col items-start gap-3 overflow-hidden bg-white p-5 transition-colors hover:bg-mist sm:p-6"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.colors.accent} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="flex w-full items-start justify-between">
                <span className={`flex h-9 w-9 items-center justify-center rounded-sm border ${service.colors.iconBg}`}>
                  <ServiceIcon name={service.iconName} className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="font-display text-xs text-steel">{service.index}</span>
              </div>
              <h3 className="font-display text-sm font-bold leading-snug text-graphite sm:text-base">
                {service.title[lang]}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-6 rounded-sm border border-cyan/25 bg-cyan-soft p-6 sm:mt-8 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-7">
          <div>
            <p className="font-display text-base font-bold text-graphite sm:text-lg">
              {t.servicesOverview.comboTitle}
            </p>
            <p className="mt-1.5 text-sm text-steel">
              {t.servicesOverview.comboDesc}
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-block font-display text-sm uppercase tracking-wide text-cyan-dim hover:underline sm:mt-0 sm:shrink-0"
          >
            {t.servicesOverview.comboCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
