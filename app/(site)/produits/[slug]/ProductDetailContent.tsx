"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import RichText from "@/components/RichText";
import SmartImage from "@/components/SmartImage";
import type { Product } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductDetailContent({ product }: { product: Product }) {
  const { lang, t } = useLanguage();
  const p = t.products;

  return (
    <>
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-steel">
            <Link href="/" className="hover:text-cyan-dim">{t.blog.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/produits" className="hover:text-cyan-dim">{t.nav.products}</Link>
            <span className="mx-2">/</span>
            <span className="text-graphite">{product.name[lang]}</span>
          </nav>

          <div className={`grid items-start gap-10 ${product.image ? "lg:grid-cols-2 lg:gap-16" : ""}`}>
            {product.image && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-mist">
                <SmartImage src={product.image} alt={product.name[lang]} priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
            )}
            <div>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-graphite md:text-5xl [text-wrap:balance]">
                {product.name[lang]}
              </h1>
              {product.price && <p className="mt-3 text-base font-medium text-cyan-dim">{product.price}</p>}
              <div className="mt-6">
                <RichText source={product.desc[lang]} />
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">{p.cta}</Link>
                {product.url && (
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-graphite hover:text-cyan-dim">
                    {p.learnMore} <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
