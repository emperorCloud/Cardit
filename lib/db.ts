import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { ENTITIES } from "./entities";

type Sql = NeonQueryFunction<false, false>;

function url() {
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? "";
}

export function dbConfigured() {
  return Boolean(url());
}

/**
 * Lecture publique : mise en cache Next.js, invalidée par le tag "content"
 * à chaque modification faite depuis l'admin.
 */
export function publicSql(): Sql | null {
  if (!url()) return null;
  return neon(url(), { fetchOptions: { next: { tags: ["content"], revalidate: 3600 } } });
}

/** Admin : toujours des données fraîches. */
export function adminSql(): Sql | null {
  if (!url()) return null;
  return neon(url(), { fetchOptions: { cache: "no-store" } });
}

const T = {
  blocks: `CREATE TABLE IF NOT EXISTS cardit_blocks (
    id SERIAL PRIMARY KEY, title_fr TEXT NOT NULL DEFAULT '', title_en TEXT NOT NULL DEFAULT '',
    body_fr TEXT NOT NULL DEFAULT '', body_en TEXT NOT NULL DEFAULT '', image TEXT NOT NULL DEFAULT '',
    cta_label_fr TEXT NOT NULL DEFAULT '', cta_label_en TEXT NOT NULL DEFAULT '', cta_url TEXT NOT NULL DEFAULT '',
    position INT NOT NULL DEFAULT 0, visible BOOLEAN NOT NULL DEFAULT TRUE)`,
  services: `CREATE TABLE IF NOT EXISTS cardit_services (
    id SERIAL PRIMARY KEY, slug TEXT UNIQUE NOT NULL, icon TEXT NOT NULL DEFAULT 'Sparkles',
    title_fr TEXT NOT NULL DEFAULT '', title_en TEXT NOT NULL DEFAULT '',
    tagline_fr TEXT NOT NULL DEFAULT '', tagline_en TEXT NOT NULL DEFAULT '',
    highlights_fr TEXT NOT NULL DEFAULT '', highlights_en TEXT NOT NULL DEFAULT '',
    groups_fr TEXT NOT NULL DEFAULT '', groups_en TEXT NOT NULL DEFAULT '',
    position INT NOT NULL DEFAULT 0, visible BOOLEAN NOT NULL DEFAULT TRUE)`,
  products: `CREATE TABLE IF NOT EXISTS cardit_products (
    id SERIAL PRIMARY KEY, name_fr TEXT NOT NULL DEFAULT '', name_en TEXT NOT NULL DEFAULT '',
    desc_fr TEXT NOT NULL DEFAULT '', desc_en TEXT NOT NULL DEFAULT '', image TEXT NOT NULL DEFAULT '',
    price TEXT NOT NULL DEFAULT '', url TEXT NOT NULL DEFAULT '',
    position INT NOT NULL DEFAULT 0, visible BOOLEAN NOT NULL DEFAULT TRUE)`,
  partners: `CREATE TABLE IF NOT EXISTS cardit_partners (
    id SERIAL PRIMARY KEY, name TEXT NOT NULL DEFAULT '', url TEXT NOT NULL DEFAULT '', logo TEXT NOT NULL DEFAULT '',
    position INT NOT NULL DEFAULT 0, visible BOOLEAN NOT NULL DEFAULT TRUE)`,
  team: `CREATE TABLE IF NOT EXISTS cardit_team (
    id SERIAL PRIMARY KEY, name TEXT NOT NULL DEFAULT '', role_fr TEXT NOT NULL DEFAULT '', role_en TEXT NOT NULL DEFAULT '',
    bio_fr TEXT NOT NULL DEFAULT '', bio_en TEXT NOT NULL DEFAULT '', photo TEXT NOT NULL DEFAULT '',
    position INT NOT NULL DEFAULT 0, visible BOOLEAN NOT NULL DEFAULT TRUE)`,
  posts: `CREATE TABLE IF NOT EXISTS cardit_posts (
    id SERIAL PRIMARY KEY, slug TEXT UNIQUE NOT NULL, title_fr TEXT NOT NULL DEFAULT '', title_en TEXT NOT NULL DEFAULT '',
    excerpt_fr TEXT NOT NULL DEFAULT '', excerpt_en TEXT NOT NULL DEFAULT '', body_fr TEXT NOT NULL DEFAULT '', body_en TEXT NOT NULL DEFAULT '',
    image TEXT NOT NULL DEFAULT '', published_at TEXT NOT NULL DEFAULT '', seo_title TEXT NOT NULL DEFAULT '', seo_desc TEXT NOT NULL DEFAULT '',
    position INT NOT NULL DEFAULT 0, visible BOOLEAN NOT NULL DEFAULT TRUE)`,
  settings: `CREATE TABLE IF NOT EXISTS cardit_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL DEFAULT '')`,
};

// Colonnes ajoutées après la première version (sans effet si déjà présentes).
const ALTERS = [
  `ALTER TABLE cardit_services ADD COLUMN IF NOT EXISTS seo_title TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE cardit_services ADD COLUMN IF NOT EXISTS seo_desc TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE cardit_products ADD COLUMN IF NOT EXISTS slug TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE cardit_products ADD COLUMN IF NOT EXISTS seo_title TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE cardit_products ADD COLUMN IF NOT EXISTS seo_desc TEXT NOT NULL DEFAULT ''`,
  `CREATE UNIQUE INDEX IF NOT EXISTS cardit_products_slug_uq ON cardit_products (slug) WHERE slug <> ''`,
];

let ready: Promise<void> | null = null;

/** Crée les tables au premier appel (aucune migration manuelle à lancer). */
export function ensureSchema(sql: Sql): Promise<void> {
  if (!ready) {
    ready = (async () => {
      for (const q of Object.values(T)) await sql.query(q);
      for (const q of ALTERS) await sql.query(q);
    })().catch((e) => {
      ready = null;
      throw e;
    });
  }
  return ready;
}

export const SEEDED_KEY = "seeded";

// Garde-fou : on n'interpole que des noms issus de la configuration.
export function tableOf(entity: string) {
  const cfg = (ENTITIES as Record<string, { table: string }>)[entity];
  return cfg?.table ?? null;
}
