"use client";

import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { siteContact } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

export default function Footer({
  services,
  hasProducts = false,
  hasBlog = false,
}: {
  services: { slug: string; title: { fr: string; en: string } }[];
  hasProducts?: boolean;
  hasBlog?: boolean;
}) {
  const year = new Date().getFullYear();
  const { lang, t } = useLanguage();

  return (
    <footer className="border-t border-line bg-mist text-graphite">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-16 lg:px-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <Logo src="/images/Cardit1.png" alt="CARDIT" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{t.footer.navTitle}</h3>
            <ul className="space-y-2.5 text-sm text-steel">
              <li><Link className="hover:text-cyan-dim" href="/services">{t.nav.services}</Link></li>
              {hasProducts && <li><Link className="hover:text-cyan-dim" href="/produits">{t.nav.products}</Link></li>}
              {hasBlog && <li><Link className="hover:text-cyan-dim" href="/blog">{t.nav.blog}</Link></li>}
              <li><Link className="hover:text-cyan-dim" href="/about">{t.nav.about}</Link></li>
              <li><Link className="hover:text-cyan-dim" href="/partners">{t.nav.partners}</Link></li>
              <li><Link className="hover:text-cyan-dim" href="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{t.footer.pillarsTitle}</h3>
            <ul className="space-y-2.5 text-sm text-steel">
              {services.map((sv) => (
                <li key={sv.slug}><Link className="hover:text-cyan-dim" href={`/services/${sv.slug}`}>{sv.title[lang]}</Link></li>
              ))}
              <li><Link className="font-semibold hover:text-cyan-dim" href="/services">{t.footer.allPillars}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-2.5 text-sm text-steel">
              <li><a className="hover:text-cyan-dim" href={siteContact.emailHref}>{siteContact.email}</a></li>
              <li><a className="hover:text-cyan-dim" href={siteContact.phoneHref}>{siteContact.phone}</a></li>
              <li className="text-steel/80">{siteContact.address}</li>
            </ul>
            <div className="mt-5"><SocialLinks size="sm" /></div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-steel/80 md:flex-row">
          <p>© {year} CARDIT — {t.footer.rights}</p>
          {/* <p>{t.footer.builtWith}</p> */}
        </div>
      </div>
    </footer>
  );
}
