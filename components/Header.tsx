"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "./LanguageProvider";

export default function Header({ hasProducts = false, hasBlog = false }: { hasProducts?: boolean; hasBlog?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, toggle, t } = useLanguage();

  const NAV = [
    { href: "/services", label: t.nav.services },
    ...(hasProducts ? [{ href: "/produits", label: t.nav.products }] : []),
    ...(hasBlog ? [{ href: "/blog", label: t.nav.blog }] : []),
    { href: "/about", label: t.nav.about },
    { href: "/partners", label: t.nav.partners },
    { href: "/contact", label: t.nav.contact },
  ];

  // Header qui "réagit" au scroll → signature premium
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Ferme le menu au changement de route
  useEffect(() => { setOpen(false); }, [pathname]);

  const LangButton = ({ compact = false }: { compact?: boolean }) => (
    <button
      type="button"
      onClick={toggle}
      title={t.langToggleLabel}
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-white font-display font-semibold text-graphite transition-colors hover:border-cyan/40 hover:text-cyan-dim ${
        compact ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"
      }`}
    >
      <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
      <span>{lang === "fr" ? "EN" : "FR"}</span>
    </button>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-white/80 backdrop-blur-xl"
            : "border-b border-transparent bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-6 md:h-20 md:px-10 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="CARDIT — accueil"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center"
          >
            <Logo src="/images/Cardit1.png" alt="CARDIT" />
          </Link>

          {/* Nav desktop — casse mixte, sobre, avec état actif */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 font-display text-sm font-medium transition-colors ${
                    active
                      ? "text-cyan-dim"
                      : "text-graphite/70 hover:text-graphite"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions desktop */}
          <div className="hidden items-center gap-2 md:flex">
            <LangButton />
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-cyan-dim px-5 py-2.5 font-display text-sm font-semibold text-white shadow-[0_6px_20px_-8px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-px hover:bg-cyan"
            >
              {t.nav.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Actions mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <LangButton compact />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full text-graphite transition-colors hover:bg-mist"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-graphite/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panneau */}
        <div
          className={`absolute inset-x-0 top-16 origin-top bg-white shadow-[0_24px_48px_-12px_rgba(15,23,42,0.15)] transition-transform duration-300 ease-out sm:top-16 ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <nav className="mx-auto max-w-content px-5 pb-8 pt-6 sm:px-6">
            <ul className="flex flex-col">
              {NAV.map((item, i) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-line py-4 font-display text-lg font-medium transition-colors ${
                        active ? "text-cyan-dim" : "text-graphite hover:text-cyan-dim"
                      }`}
                      style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-4 w-4 text-graphite/30" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-cyan-dim px-6 py-3.5 font-display text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(6,182,212,0.45)]"
            >
              {t.nav.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}