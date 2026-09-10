"use client";

import ContactForm from "@/components/ContactForm";
import { siteContact } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <p className="eyebrow mb-4">{c.eyebrow}</p>
          <h1 className="text-2xl font-bold leading-tight text-graphite sm:text-3xl md:text-4xl">
            {c.title}
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
            {c.intro}
          </p>

          <div className="mt-8 space-y-6 border-t border-line pt-8 md:mt-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-steel">{c.emailLabel}</p>
              <a href={siteContact.emailHref} className="font-display text-lg font-bold text-graphite hover:text-cyan-dim">
                {siteContact.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-steel">{c.phoneLabel}</p>
              <a href={siteContact.phoneHref} className="font-display text-lg font-bold text-graphite hover:text-cyan-dim">
                {siteContact.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-steel">{c.siteLabel}</p>
              <p className="font-display text-lg font-bold text-graphite">{siteContact.domain}</p>
              <p className="mt-1 text-sm text-steel">{siteContact.address}</p>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-line bg-mist p-6 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
