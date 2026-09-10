"use client";

import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBand from "@/components/CtaBand";
import { useLanguage } from "@/components/LanguageProvider";
import type { Service } from "@/lib/data";

export default function ServiceDetailContent({
  service,
  prev,
  next,
}: {
  service: Service;
  prev: Service;
  next: Service;
}) {
  const { lang, t } = useLanguage();
  const s = t.serviceDetail;

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.colors.accent}`} />
        <div className={`section-pad !pb-10 md:!pb-14 ${service.colors.lightBg}`}>
          <div className="mx-auto max-w-content">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-steel">
              <Link href="/" className="hover:text-cyan-dim">{s.breadcrumbHome}</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-cyan-dim">{s.breadcrumbServices}</Link>
              <span className="mx-2">/</span>
              <span className="text-graphite">{service.title[lang]}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border ${service.colors.iconBg}`}>
                <ServiceIcon name={service.iconName} className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <span className={`rounded-full border px-3 py-1.5 font-display text-xs font-bold ${service.colors.badge}`}>
                {s.pillarOf} {service.index} / 12
              </span>
            </div>

            <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-graphite sm:text-4xl md:text-5xl">
              {service.title[lang]}
            </h1>
            <p className="mt-4 max-w-xl text-sm text-steel md:text-base">
              {service.tagline[lang]}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content">
          <h2 className="eyebrow mb-5">{s.highlights}</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.highlights[lang].map((point) => (
              <li
                key={point}
                className={`flex items-start gap-2.5 rounded-sm border bg-white p-4 text-sm text-graphite/85 ${service.colors.border}`}
              >
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${service.colors.accent}`} />
                {point}
              </li>
            ))}
          </ul>

          <h2 className="eyebrow mb-5 mt-14">{s.details}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.groups.map((group) => (
              <div key={group.label.fr} className={`rounded-sm border-l-2 pl-4 ${service.colors.border.split(" ")[0]}`}>
                <p className={`font-display text-sm font-bold ${service.colors.text}`}>{group.label[lang]}</p>
                <ul className="mt-2.5 space-y-1.5">
                  {group.items[lang].map((item) => (
                    <li key={item} className="text-sm text-steel">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mist px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-content flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/services/${prev.slug}`} className="text-sm text-steel hover:text-cyan-dim">
            ← {s.pillarOf} {prev.index} · {prev.title[lang]}
          </Link>
          <Link href="/services" className="font-display text-xs uppercase tracking-wide text-graphite hover:text-cyan-dim">
            {s.allPillars}
          </Link>
          <Link href={`/services/${next.slug}`} className="text-sm text-steel hover:text-cyan-dim sm:text-right">
            {s.pillarOf} {next.index} · {next.title[lang]} →
          </Link>
        </div>
      </section>

      <CtaBand
        title={`${s.ctaTitlePrefix} ${service.title[lang].toLowerCase()} ?`}
        description={s.ctaDesc}
      />
    </>
  );
}
