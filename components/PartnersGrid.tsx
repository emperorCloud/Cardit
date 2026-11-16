"use client";

import type { Partner } from "@/lib/content";
import SmartImage from "./SmartImage";
import { useLanguage } from "./LanguageProvider";

export default function PartnersGrid({ partners }: { partners: Partner[] }) {
  const { lang } = useLanguage();

  if (!partners.length) {
    return (
      <p className="max-w-md text-steel">
        {lang === "fr"
          ? "Nos partenariats seront présentés ici prochainement."
          : "Our partnerships will be showcased here soon."}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
      {partners.map((p) => {
        const inner = (
          <>
            {p.logo ? (
              <div className="relative h-14 w-full">
                <SmartImage src={p.logo} alt={p.name} sizes="200px" className="object-contain grayscale transition-all group-hover:grayscale-0" />
              </div>
            ) : (
              <span className="font-display text-base font-medium text-graphite">{p.name}</span>
            )}
          </>
        );
        const cls = "group flex aspect-[3/2] items-center justify-center bg-white p-8";
        return (
          <li key={p.name} className="bg-white">
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name} className={`${cls} h-full w-full transition-colors hover:bg-mist`}>
                {inner}
              </a>
            ) : (
              <div className={cls}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
