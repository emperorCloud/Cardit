"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AUDIENCES, FAQ, PROCESS, SPOTLIGHT, WHY } from "@/lib/home-content";
import { useLanguage } from "./LanguageProvider";

const wrap = "mx-auto max-w-content px-5 sm:px-6 md:px-10 lg:px-16";
const h2 = "font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-graphite sm:text-4xl md:text-5xl [text-wrap:balance]";

export function WhyCardit() {
  const { lang } = useLanguage();
  return (
    <section className="bg-mist py-20 md:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className={h2}>{WHY.title[lang]}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-steel md:text-lg">{WHY.intro[lang]}</p>
        </div>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {WHY.items.map((it) => (
            <li key={it.title.fr} className="border-t border-graphite/15 pt-5">
              <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-graphite">{it.title[lang]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{it.text[lang]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Spotlight() {
  const { lang } = useLanguage();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={wrap}>
        <div className="grid gap-10 rounded-3xl border border-line bg-white p-7 shadow-card sm:p-10 md:grid-cols-[6fr_5fr] md:gap-16 md:p-14">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-graphite md:text-4xl [text-wrap:balance]">
              {SPOTLIGHT.title[lang]}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-steel">{SPOTLIGHT.text[lang]}</p>
            <Link href={SPOTLIGHT.href} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-graphite underline-offset-4 hover:text-cyan-dim hover:underline">
              {SPOTLIGHT.cta[lang]}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <ul className="divide-y divide-line self-center border-y border-line">
            {SPOTLIGHT.points[lang].map((p) => (
              <li key={p} className="flex items-center gap-3 py-4 text-sm text-graphite/85">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const { lang } = useLanguage();
  return (
    <section className="bg-mist py-20 md:py-32">
      <div className={wrap}>
        <h2 className={`${h2} max-w-3xl`}>{PROCESS.title[lang]}</h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS.steps.map((s, i) => (
            <li key={s.title.fr} className="relative">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan/50 bg-white font-display text-sm font-semibold text-cyan-dim">
                {i + 1}
              </span>
              <span aria-hidden className="absolute left-12 right-0 top-[18px] hidden h-px bg-line lg:block" />
              <h3 className="mt-5 font-display text-xl font-medium tracking-[-0.01em] text-graphite">{s.title[lang]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{s.text[lang]}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-sm text-steel">{PROCESS.note[lang]}</p>
      </div>
    </section>
  );
}

export function Audiences() {
  const { lang } = useLanguage();
  return (
    <section className="bg-white py-20 md:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
        <h2 className={h2}>{AUDIENCES.title[lang]}</h2>
        <ul className="divide-y divide-line border-y border-line">
          {AUDIENCES.items.map((it) => (
            <li key={it.title.fr} className="grid gap-2 py-6 md:grid-cols-[2fr_3fr] md:gap-8">
              <h3 className="font-display text-lg font-medium tracking-[-0.01em] text-graphite">{it.title[lang]}</h3>
              <p className="text-sm leading-relaxed text-steel">{it.text[lang]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  const { lang } = useLanguage();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
        <h2 className={h2}>{FAQ.title[lang]}</h2>
        <div className="divide-y divide-line border-y border-line">
          {FAQ.items.map((q) => (
            <details key={q.title.fr} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium tracking-[-0.01em] text-graphite marker:hidden [&::-webkit-details-marker]:hidden">
                {q.title[lang]}
                <span aria-hidden className="text-xl text-cyan-dim transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">{q.text[lang]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
