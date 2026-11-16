"use client";

import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBand from "@/components/CtaBand";
import { useLanguage } from "@/components/LanguageProvider";
import type { Service } from "@/lib/content";

export default function ServiceDetailContent({ service, prev, next }: { service: Service; prev: Service; next: Service }) {
  const { lang, t } = useLanguage();
  const s = t.serviceDetail;

  return (
    <>
      <section className="bg-mist section-pad !pb-12 md:!pb-16">
        <div className="mx-auto max-w-content">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-steel">
            <Link href="/" className="hover:text-cyan-dim">{s.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-cyan-dim">{s.breadcrumbServices}</Link>
            <span className="mx-2">/</span>
            <span className="text-graphite">{service.title[lang]}</span>
          </nav>
          <ServiceIcon name={service.iconName} className="h-8 w-8 text-cyan-dim" strokeWidth={1.4} />
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-graphite md:text-6xl [text-wrap:balance]">
            {service.title[lang]}
          </h1>
          <p className="mt-6 max-w-xl text-base text-steel md:text-lg">{service.tagline[lang]}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content">
          {service.highlights[lang].length > 0 && (
            <>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-graphite">{s.highlights}</h2>
              <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
                {service.highlights[lang].map((point) => (
                  <li key={point} className="flex items-start gap-3 border-t border-line py-4 text-sm text-graphite/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}

          {service.groups.length > 0 && (
            <>
              <h2 className="mt-16 font-display text-2xl font-semibold tracking-[-0.02em] text-graphite">{s.details}</h2>
              <div className="mt-6 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {service.groups.map((g) => (
                  <div key={g.label.fr} className="border-t border-line pt-4">
                    <p className="font-display text-sm font-semibold text-cyan-dim">{g.label[lang]}</p>
                    <ul className="mt-3 space-y-2">
                      {g.items[lang].map((item) => (
                        <li key={item} className="text-sm text-steel">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="border-t border-line bg-white px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-content flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/services/${prev.slug}`} className="text-sm text-steel hover:text-cyan-dim">← {prev.title[lang]}</Link>
          <Link href="/services" className="text-sm font-semibold text-graphite hover:text-cyan-dim">{s.allPillars}</Link>
          <Link href={`/services/${next.slug}`} className="text-sm text-steel hover:text-cyan-dim sm:text-right">{next.title[lang]} →</Link>
        </div>
      </section>

      <CtaBand title={`${s.ctaTitlePrefix} ${service.title[lang].toLowerCase()} ?`} description={s.ctaDesc} />
    </>
  );
}
