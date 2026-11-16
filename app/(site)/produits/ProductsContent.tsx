"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import SmartImage from "@/components/SmartImage";
import type { Product } from "@/lib/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductsContent({ products }: { products: Product[] }) {
  const { lang, t } = useLanguage();
  const p = t.products;

  return (
    <>
      <section className="bg-mist section-pad !pb-12 md:!pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-graphite md:text-6xl [text-wrap:balance]">
            {p.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-steel md:text-lg">{p.intro}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-content">
          {products.length === 0 ? (
            <p className="max-w-md text-steel">{p.empty}</p>
          ) : (
            <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((item) => (
                <li key={item.id} className="flex flex-col">
                  <Link href={`/produits/${item.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-mist">
                      {item.image && <SmartImage src={item.image} alt={item.name[lang]} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />}
                    </div>
                    <h2 className="mt-5 font-display text-xl font-semibold tracking-[-0.015em] text-graphite group-hover:text-cyan-dim">{item.name[lang]}</h2>
                  </Link>
                  {item.price && <p className="mt-1 text-sm font-medium text-cyan-dim">{item.price}</p>}
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-steel">{item.desc[lang].replace(/[#*>`]|!?\[([^\]]*)\]\([^)]*\)/g, "$1")}</p>
                  <div className="mt-5 flex items-center gap-5 text-sm font-semibold">
                    <Link href={`/produits/${item.slug}`} className="text-graphite underline-offset-4 hover:text-cyan-dim hover:underline">{p.learnMore}</Link>
                    {item.url && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-steel hover:text-cyan-dim">
                        {p.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
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
