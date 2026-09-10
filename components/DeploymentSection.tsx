"use client";

import { useLanguage } from "./LanguageProvider";

const OPTIONS = {
  fr: [
    {
      title: "Auto-hébergement",
      tag: "Souveraineté & maîtrise",
      description:
        "Vos données et vos services restent sur une infrastructure que vous contrôlez : data center local, serveurs dédiés ou environnement hybride.",
      points: [
        "Souveraineté totale des données",
        "Coûts maîtrisés sur le long terme",
        "Adapté aux contraintes de connectivité",
        "Conformité renforcée pour secteurs sensibles",
      ],
    },
    {
      title: "Cloud public",
      tag: "Scalabilité & rapidité",
      description:
        "Déploiement sur les plateformes cloud majeures (AWS, Azure, GCP, Vercel) pour une mise en production rapide et une montée en charge automatique.",
      points: [
        "Mise en ligne rapide",
        "Scalabilité automatique",
        "Haute disponibilité mondiale",
        "Intégration CI/CD",
      ],
    },
  ],
  en: [
    {
      title: "Self-hosting",
      tag: "Sovereignty & control",
      description:
        "Your data and services stay on infrastructure you control: local data center, dedicated servers, or a hybrid environment.",
      points: [
        "Full data sovereignty",
        "Predictable long-term costs",
        "Adapted to connectivity constraints",
        "Enhanced compliance for sensitive sectors",
      ],
    },
    {
      title: "Public cloud",
      tag: "Scalability & speed",
      description:
        "Deployment on major cloud platforms (AWS, Azure, GCP, Vercel) for fast go-live and automatic scaling.",
      points: [
        "Fast go-live",
        "Automatic scalability",
        "Global high availability",
        "CI/CD integration",
      ],
    },
  ],
} as const;

export default function DeploymentSection() {
  const { lang, t } = useLanguage();
  const options = OPTIONS[lang];

  return (
    <section className="section-pad bg-mist">
      <div className="mx-auto max-w-content">
        <p className="eyebrow mb-4">{t.deployment.eyebrow}</p>
        <h2 className="max-w-xl text-2xl font-bold leading-tight text-graphite sm:text-3xl md:text-4xl">
          {t.deployment.heading}
        </h2>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {options.map((option) => (
            <div
              key={option.title}
              className="rounded-sm border border-line bg-white p-7 transition-colors hover:border-cyan md:p-8"
            >
              <span className="font-display text-xs uppercase tracking-[0.2em] text-cyan-dim">
                {option.tag}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-graphite md:text-2xl">{option.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {option.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-graphite/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
