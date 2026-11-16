"use client";

import TeamGrid from "@/components/TeamGrid";
import CtaBand from "@/components/CtaBand";
import type { TeamMember } from "@/lib/content";
import { ABOUT } from "@/lib/about-content";
import { useLanguage } from "@/components/LanguageProvider";

const wrap = "mx-auto max-w-content";
const h2 = "font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-graphite md:text-4xl [text-wrap:balance]";

export default function AboutContent({ team }: { team: TeamMember[] }) {
  const { lang, t } = useLanguage();
  const a = t.about;

  return (
    <>
      <section className="bg-mist section-pad !pb-12 md:!pb-16">
        <div className={wrap}>
          <p className="max-w-md text-sm text-steel">{a.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-graphite md:text-6xl [text-wrap:balance]">
            {a.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel md:text-lg">{a.intro}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-20`}>
          <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-graphite md:text-4xl [text-wrap:balance]">
            {ABOUT.statement[lang]}
          </p>
          <p className="self-end text-base leading-relaxed text-steel">{ABOUT.statementText[lang]}</p>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className={wrap}>
          <h2 className={`${h2} max-w-2xl`}>{ABOUT.pillarsTitle[lang]}</h2>
          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {ABOUT.pillars.map((p) => (
              <li key={p.title.fr} className="border-t border-graphite/15 pt-5">
                <h3 className="font-display text-xl font-medium text-graphite">{p.title[lang]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{p.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <h2 className={h2}>{ABOUT.valuesTitle[lang]}</h2>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {ABOUT.values.map((v) => (
              <li key={v.title.fr} className="border-t border-line pt-5">
                <h3 className="font-display text-lg font-medium text-graphite">{v.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{v.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <h2 className={h2}>{ABOUT.domainsTitle[lang]}</h2>
          <ul className="divide-y divide-graphite/10 border-y border-graphite/10">
            {ABOUT.domains.map((d) => (
              <li key={d.title.fr} className="grid gap-2 py-5 md:grid-cols-[2fr_3fr] md:gap-8">
                <h3 className="font-display text-lg font-medium text-graphite">{d.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-steel">{d.text[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {team.length > 0 && (
        <section className="section-pad bg-white">
          <div className={wrap}>
            <h2 className={`${h2} max-w-xl`}>{a.teamTitle}</h2>
            <div className="mt-10 md:mt-12">
              <TeamGrid team={team} />
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
