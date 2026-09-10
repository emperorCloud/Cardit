"use client";

import { stats } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export default function StatsBand() {
  const { lang } = useLanguage();

  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:gap-8 md:px-10 md:py-14 lg:px-16">
        {stats.map((stat) => (
          <div key={stat.label.fr} className="text-center md:text-left">
            <p className="font-display text-2xl font-bold text-graphite md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-steel">
              {stat.label[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
