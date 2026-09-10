"use client";

import Link from "next/link";
import { Phone, MessageCircle, LayoutGrid, Calculator } from "lucide-react";
import { siteContact, socials } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

export default function MobileQuickBar() {
  const { t } = useLanguage();
  const b = t.mobileBar;

  return (
    <nav
      aria-label="Actions rapides"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-line bg-white/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={siteContact.phoneHref}
        className="flex flex-col items-center gap-1 py-2.5 text-graphite active:bg-mist"
      >
        <Phone className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-[11px] font-medium">{b.call}</span>
      </a>

      <a
        href={socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-2.5 text-emerald-600 active:bg-mist"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-[11px] font-medium">{b.whatsapp}</span>
      </a>

      <Link
        href="/services"
        className="flex flex-col items-center gap-1 py-2.5 text-graphite active:bg-mist"
      >
        <LayoutGrid className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-[11px] font-medium">{b.services}</span>
      </Link>

      <Link
        href="/contact"
        className="flex flex-col items-center gap-1 border-l border-line bg-cyan text-white active:opacity-90"
      >
        <span className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5">
          <Calculator className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-[11px] font-semibold">{b.quote}</span>
        </span>
      </Link>
    </nav>
  );
}
