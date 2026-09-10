"use client";

import PartnersGrid from "@/components/PartnersGrid";
import CtaBand from "@/components/CtaBand";
import { useLanguage } from "@/components/LanguageProvider";

export default function PartnersContent() {
  const { t } = useLanguage();
  const p = t.partners;

  return (
    <>
      <section className="bg-mist section-pad !pb-10 md:!pb-16">
        <div className="mx-auto max-w-content">
          <p className="eyebrow mb-4">{p.eyebrow}</p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-graphite sm:text-4xl md:text-5xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-steel md:mt-6 md:text-base">
            {p.intro}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content">
          {/* <p className="mb-8 max-w-xl text-sm text-steel">{p.note}</p> */}
          <PartnersGrid />
        </div>
      </section>

      <CtaBand title={p.ctaTitle} description={p.ctaDesc} />
    </>
  );
}
