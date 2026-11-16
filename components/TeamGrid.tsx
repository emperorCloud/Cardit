"use client";

import type { TeamMember } from "@/lib/content";
import SmartImage from "./SmartImage";
import { useLanguage } from "./LanguageProvider";

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  const { lang } = useLanguage();

  return (
    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m) => (
        <li key={m.name + m.role.fr} className="group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist">
            {m.photo && (
              <SmartImage
                src={m.photo}
                alt={m.name}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            )}
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-graphite">{m.name}</h3>
          <p className="text-sm font-medium text-cyan-dim">{m.role[lang]}</p>
          <p className="mt-2 text-sm leading-relaxed text-steel">{m.bio[lang]}</p>
        </li>
      ))}
    </ul>
  );
}
