"use client";

import Image from "next/image";
import { team } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export default function TeamGrid() {
  const { lang } = useLanguage();

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((member) => (
        <div key={member.name + member.role.fr} className="group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-mist">
            {member.photo && (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            )}
          </div>
          <h3 className="mt-4 font-display text-lg font-bold text-charcoal">
            {member.name}
          </h3>
          <p className="text-xs uppercase tracking-wide text-cyan-dim">
            {member.role[lang]}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
            {member.bio[lang]}
          </p>
        </div>
      ))}
    </div>
  );
}
