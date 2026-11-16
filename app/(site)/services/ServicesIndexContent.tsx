"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import ServiceIcon from "@/components/ServiceIcon";
import type { Service } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesIndexContent({ services }: { services: Service[] }) {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-mist section-pad !pb-12 md:!pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-graphite md:text-6xl [text-wrap:balance]">
            {t.servicesIndex.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-steel md:text-lg">{t.servicesIndex.intro}</p>
        </div>
      </section>

      <section className="section-pad bg-white !pt-6 md:!pt-10">
        <ul className="mx-auto grid max-w-content gap-x-16 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="border-t border-line">
              <Link href={`/services/${s.slug}`} className="group flex items-start gap-4 py-8">
                <ServiceIcon name={s.iconName} className="mt-1 h-5 w-5 shrink-0 text-cyan-dim" strokeWidth={1.6} />
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-xl font-medium tracking-[-0.01em] text-graphite">{s.title[lang]}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{s.tagline[lang]}</p>
                  <p className="mt-3 text-xs leading-relaxed text-graphite/60">
                    {s.highlights[lang].slice(0, 3).join(" · ")}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-graphite/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-dim" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
