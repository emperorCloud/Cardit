"use client";

import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import RichText from "@/components/RichText";
import SmartImage from "@/components/SmartImage";
import type { Post } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";
import { formatDate } from "../BlogContent";

export default function PostContent({ post }: { post: Post }) {
  const { lang, t } = useLanguage();
  const b = t.blog;

  return (
    <>
      <article>
        <header className="bg-mist section-pad !pb-12 md:!pb-16">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-steel">
              <Link href="/" className="hover:text-cyan-dim">{b.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-cyan-dim">{t.nav.blog}</Link>
            </nav>
            <p className="text-sm text-steel">
              {b.published} <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-graphite md:text-5xl [text-wrap:balance]">
              {post.title[lang]}
            </h1>
            {post.excerpt[lang] && <p className="mt-5 text-lg leading-relaxed text-steel">{post.excerpt[lang]}</p>}
          </div>
        </header>

        <div className="section-pad bg-white !pt-10 md:!pt-14">
          <div className="mx-auto max-w-3xl">
            {post.image && (
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-mist">
                <SmartImage src={post.image} alt={post.title[lang]} priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
              </div>
            )}
            <RichText source={post.body[lang]} />
            <Link href="/blog" className="mt-14 inline-block text-sm font-semibold text-graphite underline-offset-4 hover:text-cyan-dim hover:underline">
              ← {b.back}
            </Link>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
