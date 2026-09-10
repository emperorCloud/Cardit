"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const NAV = [
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/partners", label: t.nav.partners },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" aria-label="CARDIT — accueil" onClick={() => setOpen(false)}>
          <Logo src="/images/Cardit1.png" alt="CARDIT" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm uppercase tracking-wide text-steel transition-colors hover:text-cyan-dim"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <button
            type="button"
            onClick={toggle}
            title={t.langToggleLabel}
            className="flex items-center gap-1.5 rounded-sm border border-line bg-mist px-3 py-2 font-display text-xs font-bold uppercase tracking-wide text-graphite transition-colors hover:border-cyan hover:text-cyan-dim"
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span>{lang === "fr" ? "EN" : "FR"}</span>
          </button>

          <Link href="/contact" className="btn-primary">
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1 rounded-sm border border-line bg-mist px-2.5 py-1.5 font-display text-xs font-bold text-graphite"
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span>{lang === "fr" ? "EN" : "FR"}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center text-graphite"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-white px-6 py-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-sm uppercase tracking-wide text-graphite/80 transition-colors hover:text-cyan-dim"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 justify-center"
          >
            {t.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}
