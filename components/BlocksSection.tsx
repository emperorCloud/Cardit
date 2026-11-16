"use client";

import Link from "next/link";
import type { Block } from "@/lib/content";
import SmartImage from "./SmartImage";
import { useLanguage } from "./LanguageProvider";

export default function BlocksSection({ blocks }: { blocks: Block[] }) {
  const { lang } = useLanguage();
  if (!blocks.length) return null;

  return (
    <>
      {blocks.map((b, i) => {
        const label = b.ctaLabel[lang];
        const external = b.ctaUrl?.startsWith("http");
        return (
          <section key={b.id} className={i % 2 === 0 ? "bg-mist" : "bg-white"}>
            <div className={`mx-auto grid max-w-content items-center gap-10 px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-16 ${b.image ? "md:grid-cols-2 md:gap-16" : ""}`}>
              <div className={i % 2 === 1 && b.image ? "md:order-2" : ""}>
                <h2 className="max-w-xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-graphite sm:text-4xl [text-wrap:balance]">
                  {b.title[lang]}
                </h2>
                {b.body[lang] && (
                  <p className="mt-5 max-w-lg whitespace-pre-line text-base leading-relaxed text-steel">{b.body[lang]}</p>
                )}
                {label && b.ctaUrl && (
                  <div className="mt-8">
                    {external ? (
                      <a href={b.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">{label}</a>
                    ) : (
                      <Link href={b.ctaUrl} className="btn-primary">{label}</Link>
                    )}
                  </div>
                )}
              </div>
              {b.image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-white">
                  <SmartImage src={b.image} alt={b.title[lang]} className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
