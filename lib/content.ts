import { publicSql, ensureSchema, SEEDED_KEY } from "./db";
import { services as staticServices, team as staticTeam } from "./data";

export type LocalizedText = { fr: string; en: string };
export type LocalizedList = { fr: string[]; en: string[] };
export type ServiceGroup = { label: LocalizedText; items: LocalizedList };

export type Service = {
  slug: string;
  iconName: string;
  title: LocalizedText;
  tagline: LocalizedText;
  highlights: LocalizedList;
  groups: ServiceGroup[];
  seoTitle?: string;
  seoDesc?: string;
};
export type TeamMember = { name: string; role: LocalizedText; bio: LocalizedText; photo?: string };
export type Partner = { name: string; logo?: string; url?: string };
export type Product = {
  id: number;
  slug: string;
  seoTitle?: string;
  seoDesc?: string;
  name: LocalizedText;
  desc: LocalizedText;
  image?: string;
  price?: string;
  url?: string;
};
export type Post = {
  id: number;
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  image?: string;
  date: string; // AAAA-MM-JJ
  seoTitle?: string;
  seoDesc?: string;
};
export type Block = {
  id: number;
  title: LocalizedText;
  body: LocalizedText;
  image?: string;
  ctaLabel: LocalizedText;
  ctaUrl?: string;
};

type Row = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

/* ---------- Conversions texte <-> structure (utilisées aussi pour l'import initial) ---------- */

const lines = (s: string) => (s ?? "").split("\n").map((l) => l.trim()).filter(Boolean);

export function parseGroups(fr: string, en: string): ServiceGroup[] {
  const f = lines(fr);
  const e = lines(en);
  const split = (line: string) => {
    const i = line.indexOf(":");
    const label = i === -1 ? line : line.slice(0, i).trim();
    const items = i === -1 ? [] : line.slice(i + 1).split(";").map((x) => x.trim()).filter(Boolean);
    return { label, items };
  };
  return f.map((line, i) => {
    const a = split(line);
    const b = e[i] ? split(e[i]) : a;
    return {
      label: { fr: a.label, en: b.label },
      items: { fr: a.items, en: b.items.length ? b.items : a.items },
    };
  });
}

const groupsToText = (groups: ServiceGroup[], lang: "fr" | "en") =>
  groups.map((g) => `${g.label[lang]}: ${g.items[lang].join("; ")}`).join("\n");

export function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/* ---------- Contenu initial (importé depuis lib/data.ts) ---------- */

export function seedServiceRows(): Row[] {
  return staticServices.map((s, i) => ({
    slug: s.slug,
    icon: s.iconName,
    title_fr: s.title.fr,
    title_en: s.title.en,
    tagline_fr: s.tagline.fr,
    tagline_en: s.tagline.en,
    highlights_fr: s.highlights.fr.join("\n"),
    highlights_en: s.highlights.en.join("\n"),
    groups_fr: groupsToText(s.groups, "fr"),
    groups_en: groupsToText(s.groups, "en"),
    position: (i + 1) * 10,
    visible: true,
  }));
}

export function seedTeamRows(): Row[] {
  return staticTeam.map((m, i) => ({
    name: m.name,
    role_fr: m.role.fr,
    role_en: m.role.en,
    bio_fr: m.bio.fr,
    bio_en: m.bio.en,
    photo: m.photo ?? "",
    position: (i + 1) * 10,
    visible: true,
  }));
}

/* ---------- Mappers ---------- */

const mapService = (r: Row): Service => ({
  slug: r.slug,
  iconName: r.icon || "Sparkles",
  title: { fr: r.title_fr, en: r.title_en || r.title_fr },
  tagline: { fr: r.tagline_fr, en: r.tagline_en || r.tagline_fr },
  highlights: {
    fr: lines(r.highlights_fr),
    en: lines(r.highlights_en).length ? lines(r.highlights_en) : lines(r.highlights_fr),
  },
  groups: parseGroups(r.groups_fr, r.groups_en),
  seoTitle: r.seo_title || undefined,
  seoDesc: r.seo_desc || undefined,
});

const mapTeam = (r: Row): TeamMember => ({
  name: r.name,
  role: { fr: r.role_fr, en: r.role_en || r.role_fr },
  bio: { fr: r.bio_fr, en: r.bio_en || r.bio_fr },
  photo: r.photo || undefined,
});

/* ---------- Lecture (avec repli sur lib/data.ts tant que la base est vide) ---------- */

async function select(table: string, order = "position, id"): Promise<Row[] | null> {
  const sql = publicSql();
  if (!sql) return null;
  try {
    await ensureSchema(sql);
    return (await sql.query(
      `SELECT * FROM ${table} WHERE visible = TRUE ORDER BY ${order}`
    )) as Row[];
  } catch (e) {
    console.error(`[content] lecture de ${table} impossible`, e);
    return null;
  }
}

async function isSeeded(): Promise<boolean> {
  const sql = publicSql();
  if (!sql) return false;
  try {
    await ensureSchema(sql);
    const r = (await sql.query(`SELECT value FROM cardit_settings WHERE key = $1`, [SEEDED_KEY])) as Row[];
    return r.length > 0;
  } catch {
    return false;
  }
}

export async function getServices(): Promise<Service[]> {
  if (await isSeeded()) {
    const rows = await select("cardit_services");
    if (rows) return rows.map(mapService);
  }
  return staticServices.map((s) => ({
    slug: s.slug,
    iconName: s.iconName,
    title: s.title,
    tagline: s.tagline,
    highlights: s.highlights,
    groups: s.groups,
  }));
}

export async function getTeam(): Promise<TeamMember[]> {
  if (await isSeeded()) {
    const rows = await select("cardit_team");
    if (rows) return rows.map(mapTeam);
  }
  return staticTeam.map((m) => ({ name: m.name, role: m.role, bio: m.bio, photo: m.photo }));
}

export async function getPartners(): Promise<Partner[]> {
  const rows = await select("cardit_partners");
  return (rows ?? []).map((r) => ({ name: r.name, logo: r.logo || undefined, url: r.url || undefined }));
}

export async function getProducts(): Promise<Product[]> {
  const rows = await select("cardit_products");
  return (rows ?? []).map((r) => ({
    id: r.id,
    slug: r.slug || String(r.id),
    seoTitle: r.seo_title || undefined,
    seoDesc: r.seo_desc || undefined,
    name: { fr: r.name_fr, en: r.name_en || r.name_fr },
    desc: { fr: r.desc_fr, en: r.desc_en || r.desc_fr },
    image: r.image || undefined,
    price: r.price || undefined,
    url: r.url || undefined,
  }));
}

export async function getBlocks(): Promise<Block[]> {
  const rows = await select("cardit_blocks");
  return (rows ?? []).map((r) => ({
    id: r.id,
    title: { fr: r.title_fr, en: r.title_en || r.title_fr },
    body: { fr: r.body_fr, en: r.body_en || r.body_fr },
    image: r.image || undefined,
    ctaLabel: { fr: r.cta_label_fr, en: r.cta_label_en || r.cta_label_fr },
    ctaUrl: r.cta_url || undefined,
  }));
}

export async function getPosts(): Promise<Post[]> {
  const rows = await select("cardit_posts", "published_at DESC, id DESC");
  return (rows ?? []).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: { fr: r.title_fr, en: r.title_en || r.title_fr },
    excerpt: { fr: r.excerpt_fr, en: r.excerpt_en || r.excerpt_fr },
    body: { fr: r.body_fr, en: r.body_en || r.body_fr },
    image: r.image || undefined,
    date: r.published_at,
    seoTitle: r.seo_title || undefined,
    seoDesc: r.seo_desc || undefined,
  }));
}
