import type { Metadata } from "next";
import { siteUrl } from "./site";

/** Métadonnées complètes (canonique, Open Graph, Twitter) pour une page. */
export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const img = image || "/images/og-cover.png";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: `${title} | CARDIT`,
      description,
      siteName: "CARDIT",
      locale: "fr_FR",
      images: [{ url: img }],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}

/** Coupe proprement un texte pour une meta description (≈155 caractères). */
export function clip(text: string, max = 155) {
  const t = text.replace(/\s+/g, " ").replace(/[#*>`!\[\]]/g, "").trim();
  return t.length <= max ? t : t.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}
