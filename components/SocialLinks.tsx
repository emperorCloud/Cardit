import type { ReactNode } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { socials } from "@/lib/site";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/** Boutons « Suivez-nous » : un réseau sans lien renseigné dans lib/site.ts n'est pas affiché. */
export default function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  const items: { name: string; href: string; icon: ReactNode }[] = [
    { name: "LinkedIn", href: socials.linkedin, icon: <Linkedin className={icon} /> },
    { name: "Facebook", href: socials.facebook, icon: <Facebook className={icon} /> },
    { name: "Instagram", href: socials.instagram, icon: <Instagram className={icon} /> },
    { name: "X", href: socials.x, icon: <XIcon className={icon} /> },
    { name: "WhatsApp", href: socials.whatsapp, icon: <WhatsAppIcon className={icon} /> },
  ];

  return (
    <ul className="flex flex-wrap gap-2.5">
      {items
        .filter((i) => i.href)
        .map((i) => (
          <li key={i.name}>
            <a
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={i.name}
              title={i.name}
              className={`${box} flex items-center justify-center rounded-full border border-line bg-white text-graphite transition-colors hover:border-cyan hover:text-cyan-dim`}
            >
              {i.icon}
            </a>
          </li>
        ))}
    </ul>
  );
}
