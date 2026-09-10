"use client";

import TeamGrid from "@/components/TeamGrid";
import CtaBand from "@/components/CtaBand";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <section className="bg-mist section-pad !pb-10 md:!pb-16">
        <div className="mx-auto max-w-content">
          <p className="eyebrow mb-4">{a.eyebrow}</p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-graphite sm:text-4xl md:text-5xl">
            {a.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm text-steel md:mt-6 md:text-base">
            {a.intro}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow mb-4">{a.missionEyebrow}</p>
            <p className="text-xl font-bold leading-snug text-graphite sm:text-2xl">
              {a.missionTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel">
              {a.missionText}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">{a.valuesEyebrow}</p>
            <div className="space-y-6">
              {a.values.map((value) => (
                <div key={value.title}>
                  <h3 className="font-display font-bold text-graphite">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="mx-auto max-w-content">
          <p className="eyebrow mb-4">{a.teamEyebrow}</p>
          <h2 className="max-w-xl text-2xl font-bold leading-tight text-graphite sm:text-3xl md:text-4xl">
            {a.teamTitle}
          </h2>
          {/* <p className="mt-4 max-w-xl text-sm text-steel">
            {a.teamNote}
          </p> */}
          <div className="mt-10 md:mt-12">
            <TeamGrid />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
