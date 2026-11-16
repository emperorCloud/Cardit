// Configuration partagée (serveur + admin) des contenus éditables.
export type FieldKind = "text" | "textarea" | "image" | "number" | "bool";

export type Field = {
  name: string;
  label: string;
  kind: FieldKind;
  hint?: string;
  required?: boolean;
  half?: boolean;
  long?: boolean; // grande zone de texte (articles, descriptions)
};

export type EntityKey = "blocks" | "services" | "products" | "posts" | "partners" | "team";

export type EntityConfig = {
  key: EntityKey;
  table: string;
  label: string; // pluriel, pour l'onglet
  singular: string;
  titleField: string; // champ affiché dans la liste
  subtitleField?: string;
  imageField?: string;
  orderBy?: string;
  fields: Field[];
};

const common: Field[] = [
  { name: "position", label: "Ordre d'affichage", kind: "number", hint: "Le plus petit s'affiche en premier.", half: true },
  { name: "visible", label: "Visible sur le site", kind: "bool", half: true },
];

const seo: Field[] = [
  { name: "seo_title", label: "Titre Google (SEO)", kind: "text", hint: "Optionnel. Idéal : moins de 60 caractères.", half: true },
  { name: "seo_desc", label: "Description Google (SEO)", kind: "textarea", hint: "Optionnel. Idéal : 140 à 160 caractères.", half: true },
];

const RICH_HINT = "Titres : ## Titre. Listes : - élément. **gras**. Lien : [texte](https://…). Image : ![légende](https://…) sur sa propre ligne. Séparez les blocs par une ligne vide.";

export const ENTITIES: Record<EntityKey, EntityConfig> = {
  blocks: {
    key: "blocks",
    table: "cardit_blocks",
    label: "Blocs",
    singular: "bloc",
    titleField: "title_fr",
    subtitleField: "body_fr",
    imageField: "image",
    fields: [
      { name: "title_fr", label: "Titre (français)", kind: "text", required: true, half: true },
      { name: "title_en", label: "Titre (anglais)", kind: "text", half: true },
      { name: "body_fr", label: "Texte (français)", kind: "textarea", half: true },
      { name: "body_en", label: "Texte (anglais)", kind: "textarea", half: true },
      { name: "image", label: "Image", kind: "image" },
      { name: "cta_label_fr", label: "Bouton (français)", kind: "text", half: true, hint: "Laisser vide pour ne pas afficher de bouton." },
      { name: "cta_label_en", label: "Bouton (anglais)", kind: "text", half: true },
      { name: "cta_url", label: "Lien du bouton", kind: "text", hint: "Ex. /contact ou https://…" },
      ...common,
    ],
  },
  services: {
    key: "services",
    table: "cardit_services",
    label: "Services",
    singular: "service",
    titleField: "title_fr",
    subtitleField: "tagline_fr",
    fields: [
      { name: "title_fr", label: "Nom (français)", kind: "text", required: true, half: true },
      { name: "title_en", label: "Nom (anglais)", kind: "text", half: true },
      { name: "slug", label: "Adresse de la page", kind: "text", hint: "Vide = généré depuis le nom. Ex. cloud-infrastructure", half: true },
      { name: "icon", label: "Icône", kind: "text", hint: "Nom d'icône Lucide : Code2, Cloud, ShieldCheck…", half: true },
      { name: "tagline_fr", label: "Accroche (français)", kind: "textarea", half: true },
      { name: "tagline_en", label: "Accroche (anglais)", kind: "textarea", half: true },
      { name: "highlights_fr", label: "Points forts (français)", kind: "textarea", hint: "Un point par ligne.", half: true },
      { name: "highlights_en", label: "Points forts (anglais)", kind: "textarea", hint: "Un point par ligne.", half: true },
      { name: "groups_fr", label: "Détail du pôle (français)", kind: "textarea", hint: "Une ligne par groupe : Titre: élément 1; élément 2", half: true },
      { name: "groups_en", label: "Détail du pôle (anglais)", kind: "textarea", hint: "Même ordre que le français.", half: true },
      ...seo,
      ...common,
    ],
  },
  products: {
    key: "products",
    table: "cardit_products",
    label: "Produits",
    singular: "produit",
    titleField: "name_fr",
    subtitleField: "desc_fr",
    imageField: "image",
    fields: [
      { name: "name_fr", label: "Nom (français)", kind: "text", required: true, half: true },
      { name: "name_en", label: "Nom (anglais)", kind: "text", half: true },
      { name: "slug", label: "Adresse de la page", kind: "text", hint: "Vide = générée depuis le nom.", half: true },
      { name: "desc_fr", label: "Description (français)", kind: "textarea", long: true, hint: RICH_HINT, half: true },
      { name: "desc_en", label: "Description (anglais)", kind: "textarea", long: true, half: true },
      { name: "image", label: "Image", kind: "image" },
      { name: "price", label: "Prix ou formule", kind: "text", hint: "Ex. Sur devis, à partir de 150 000 FCFA", half: true },
      { name: "url", label: "Lien externe", kind: "text", hint: "Optionnel. Sinon le bouton mène au contact.", half: true },
      ...seo,
      ...common,
    ],
  },
  posts: {
    key: "posts",
    table: "cardit_posts",
    label: "Blog",
    singular: "article",
    titleField: "title_fr",
    subtitleField: "excerpt_fr",
    imageField: "image",
    orderBy: "published_at DESC, id DESC",
    fields: [
      { name: "title_fr", label: "Titre (français)", kind: "text", required: true, half: true },
      { name: "title_en", label: "Titre (anglais)", kind: "text", half: true },
      { name: "slug", label: "Adresse de la page", kind: "text", hint: "Vide = générée depuis le titre.", half: true },
      { name: "published_at", label: "Date de publication", kind: "text", hint: "AAAA-MM-JJ. Vide = aujourd'hui.", half: true },
      { name: "excerpt_fr", label: "Résumé (français)", kind: "textarea", hint: "2 phrases : affiché dans la liste et sur Google.", half: true },
      { name: "excerpt_en", label: "Résumé (anglais)", kind: "textarea", half: true },
      { name: "body_fr", label: "Article (français)", kind: "textarea", long: true, hint: RICH_HINT },
      { name: "body_en", label: "Article (anglais)", kind: "textarea", long: true, hint: "Laissez vide pour réutiliser le français." },
      { name: "image", label: "Image de couverture", kind: "image" },
      ...seo,
      { name: "visible", label: "Publié sur le site", kind: "bool" },
    ],
  },
  partners: {
    key: "partners",
    table: "cardit_partners",
    label: "Partenaires",
    singular: "partenaire",
    titleField: "name",
    subtitleField: "url",
    imageField: "logo",
    fields: [
      { name: "name", label: "Nom", kind: "text", required: true, half: true },
      { name: "url", label: "Site web", kind: "text", half: true },
      { name: "logo", label: "Logo", kind: "image" },
      ...common,
    ],
  },
  team: {
    key: "team",
    table: "cardit_team",
    label: "Équipe",
    singular: "membre",
    titleField: "name",
    subtitleField: "role_fr",
    imageField: "photo",
    fields: [
      { name: "name", label: "Nom", kind: "text", required: true },
      { name: "role_fr", label: "Fonction (français)", kind: "text", half: true },
      { name: "role_en", label: "Fonction (anglais)", kind: "text", half: true },
      { name: "bio_fr", label: "Bio (français)", kind: "textarea", half: true },
      { name: "bio_en", label: "Bio (anglais)", kind: "textarea", half: true },
      { name: "photo", label: "Photo", kind: "image" },
      ...common,
    ],
  },
};

export const ENTITY_KEYS = Object.keys(ENTITIES) as EntityKey[];
