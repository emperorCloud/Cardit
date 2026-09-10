# CARDIT — Site web

Centre Africain de Recherche, Développement et l'Innovation Technologique.
Site vitrine construit avec **Next.js 14 (App Router)**, **TypeScript** et
**Tailwind CSS**, prêt pour un déploiement sur **Vercel**.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000

## Structure du projet

```
app/
  layout.tsx        → métadonnées SEO globales, polices, header/footer
  page.tsx           → page d'accueil
  services/page.tsx  → détail des 5 domaines d'expertise
  about/page.tsx      → mission, valeurs, équipe
  partners/page.tsx   → grille partenaires
  contact/page.tsx    → formulaire de contact
  sitemap.ts / robots.ts → SEO technique
components/          → composants réutilisables (Header, Footer, Hero, etc.)
lib/data.ts           → contenu éditable : services, équipe, partenaires, stats
public/images/         → logo, favicon, photos équipe, logos partenaires
```

## Ajouter votre logo (PNG fourni)

1. Déposez votre fichier `logo-lion.png` (tête de lion, fond transparent de
   préférence) dans `public/images/logo-lion.png` — il remplacera le
   placeholder actuel automatiquement (le composant `components/Logo.tsx`
   pointe déjà vers ce chemin).
2. Le wordmark « CARDiT » est actuellement recréé en SVG (texte en gras,
   « iT » en cyan) pour rester net à toutes les tailles. Si vous préférez
   utiliser votre PNG complet du logo (lion + texte) à la place, remplacez le
   contenu de `components/Logo.tsx` par une simple balise `<Image>` pointant
   vers votre fichier.

## Favicon

Remplacez :
- `public/favicon.ico`
- `public/images/apple-touch-icon.png` (180×180)
- `public/images/og-cover.png` (1200×630, image de partage réseaux sociaux)

## Équipe & partenaires

Éditez `lib/data.ts` :
- `team` → nom, rôle, bio, photo (`public/images/team/…`)
- `partners` → nom, logo (`public/images/partners/…`), lien
- `services` → les 12 pôles d'expertise. Chaque pôle a : `highlights`
  (points forts affichés en carte) et `groups` (arborescence détaillée
  affichée dans le bloc dépliable de la page `/services`).

## SEO

- Métadonnées globales dans `app/layout.tsx` (title, description, Open
  Graph, Twitter card) + données structurées **JSON-LD** (`Organization`,
  `WebSite`).
- **Chaque pôle a sa propre page indexable** : `app/services/[slug]/page.tsx`
  génère 12 pages statiques (`/services/developpement-logiciel`,
  `/services/cybersecurite`, etc.), chacune avec son propre `<title>`, sa
  description, son URL canonique et son JSON-LD `Service` + `BreadcrumbList`.
  `/services` reste une page d'index qui renvoie vers ces 12 pages (pas de
  contenu dupliqué).
- `app/sitemap.ts` liste automatiquement les pages statiques **et** les 12
  pages de pôles ; `app/robots.ts` génère `/robots.txt`.
- L'URL du site et les coordonnées (téléphone, email) sont centralisées dans
  `lib/site.ts` — à mettre à jour si elles changent, tout le site suit.

## Formulaire de contact

`components/ContactForm.tsx` est prêt côté interface mais n'envoie pas
encore de véritable email. Pour l'activer, deux options :
1. Créer une route API `app/api/contact/route.ts` qui envoie l'email
   (ex. via [Resend](https://resend.com)) et l'appeler depuis le formulaire.
2. Utiliser un service tiers (Formspree, Getform…) en pointant l'action du
   formulaire vers leur endpoint.

## Déploiement sur Vercel

1. Poussez ce projet sur GitHub/GitLab/Bitbucket.
2. Sur [vercel.com](https://vercel.com), cliquez sur **New Project** et
   importez le dépôt.
3. Vercel détecte automatiquement Next.js — aucune configuration
   supplémentaire n'est nécessaire.
4. Ajoutez votre nom de domaine dans **Settings → Domains**.

## Personnalisation des couleurs / typographies

Tous les tokens de design (couleurs, polices) sont centralisés dans
`tailwind.config.ts` et `app/layout.tsx` (import des polices Google Fonts
`Space Grotesk` et `Manrope`). Voir aussi `DESIGN_NOTES.md` pour le
raisonnement de la direction artistique.
