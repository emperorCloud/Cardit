"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

type Localized = { fr: string; en: string };

export default function CtaBand({
  title,
  description,
}: {
  title?: Localized | string;
  description?: Localized | string;
}) {
  const { lang, t } = useLanguage();

  const displayTitle = typeof title === "string" ? title : title ? title[lang] : t.ctaBand.title;
  const displayDescription =
    typeof description === "string" ? description : description ? description[lang] : t.ctaBand.description;

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 rounded-sm border border-cyan/25 bg-cyan-soft px-7 py-10 md:flex-row md:items-center md:gap-8 md:px-14 md:py-12">
        <div>
          <h2 className="text-xl font-bold text-graphite sm:text-2xl md:text-3xl">{displayTitle}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">
            {displayDescription}
          </p>
        </div>
        <Link href="/contact" className="btn-primary w-full shrink-0 justify-center sm:w-auto">
          {t.ctaBand.button}
        </Link>
      </div>
    </section>
  );
}
