import type { EntityConfig } from "./entities";
import { slugify } from "./content";

/** Ne garde que les champs déclarés dans la config, avec le bon type. */
export function cleanValues(
  cfg: EntityConfig,
  body: unknown
): { values: Record<string, string | number | boolean> } | { error: string } {
  if (!body || typeof body !== "object") return { error: "Requête invalide." };
  const input = body as Record<string, unknown>;
  const values: Record<string, string | number | boolean> = {};

  for (const f of cfg.fields) {
    const raw = input[f.name];
    if (f.kind === "bool") values[f.name] = raw === true || raw === "true";
    else if (f.kind === "number") values[f.name] = Number.isFinite(Number(raw)) ? Math.trunc(Number(raw)) : 0;
    else values[f.name] = String(raw ?? "").trim().slice(0, f.kind === "textarea" ? 6000 : 500);

    if (f.required && !values[f.name]) return { error: `Le champ « ${f.label} » est obligatoire.` };
  }

  if (cfg.key === "services") {
    const slug = slugify(String(values.slug || values.title_fr));
    if (!slug) return { error: "Adresse de page invalide." };
    values.slug = slug;
    values.icon = String(values.icon || "Sparkles").replace(/[^A-Za-z0-9]/g, "") || "Sparkles";
  }
  if (cfg.key === "products") {
    values.slug = slugify(String(values.slug || values.name_fr));
  }
  if (cfg.key === "posts") {
    const slug = slugify(String(values.slug || values.title_fr));
    if (!slug) return { error: "Adresse de page invalide." };
    values.slug = slug;
    const d = String(values.published_at);
    values.published_at = /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : new Date().toISOString().slice(0, 10);
  }
  return { values };
}
