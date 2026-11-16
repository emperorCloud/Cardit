"use client";

import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import SmartImage from "@/components/SmartImage";
import type { Post } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export function formatDate(date: string, lang: "fr" | "en") {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  const { lang, t } = useLanguage();
  const b = t.blog;

  return (
    <>
      <section className="bg-mist section-pad !pb-12 md:!pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-graphite md:text-6xl [text-wrap:balance]">
            {b.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-steel md:text-lg">{b.intro}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content">
          {posts.length === 0 ? (
            <p className="max-w-md text-steel">{b.empty}</p>
          ) : (
            <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <li key={p.id}>
                  <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-mist">
                      {p.image && <SmartImage src={p.image} alt={p.title[lang]} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />}
                    </div>
                    <p className="mt-5 text-sm text-steel">{formatDate(p.date, lang)}</p>
                    <h2 className="mt-1.5 font-display text-xl font-semibold leading-snug tracking-[-0.015em] text-graphite group-hover:text-cyan-dim">
                      {p.title[lang]}
                    </h2>
                    {p.excerpt[lang] && <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-steel">{p.excerpt[lang]}</p>}
                    <span className="mt-4 text-sm font-semibold text-graphite underline-offset-4 group-hover:underline">{b.readMore}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
