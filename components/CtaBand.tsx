"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";
import { socials } from "@/lib/site";

/** Appel à l'action « devis » : titre et description peuvent être surchargés par la page. */
export default function CtaBand({ title, description }: { title?: string; description?: string }) {
  const { t } = useLanguage();
  const c = t.ctaBand;

  return (
    <section className="bg-white px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-content overflow-hidden rounded-3xl border border-line bg-mist px-6 py-12 sm:px-10 md:px-16 md:py-20">
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-graphite sm:text-4xl md:text-5xl [text-wrap:balance]">
          {title ?? c.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-steel md:text-lg">{description ?? c.description}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-primary group !min-h-[52px] !px-7">
            {c.button}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary !min-h-[52px] !px-7">
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            {c.whatsapp}
          </a>
        </div>
        <p className="mt-6 text-sm text-steel">{c.note}</p>
      </div>
    </section>
  );
}
