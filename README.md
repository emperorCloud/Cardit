# CARDIT — Site web + administration

Next.js 14 (App Router), TypeScript, Tailwind. Contenu éditable via Neon (Postgres) et Vercel Blob (images).

## Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Rôle |
| --- | --- |
| `DATABASE_URL` (ou `POSTGRES_URL`) | Neon — ajoutée par l'intégration Neon de Vercel |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob — ajoutée quand un Blob store est connecté au projet |
| `ADMIN_PASSWORD` | Mot de passe de l'administration |
| `ADMIN_SECRET` | Chaîne aléatoire (32+ caractères) qui signe la session |
| `RESEND_API_KEY` | Formulaire de contact (l'ancien nom `RESEND_API_CarditKEY` reste accepté) |

Modèle dans `.env.example`. Sans `DATABASE_URL`, le site fonctionne avec le contenu de `lib/data.ts`.

## Administration

- Adresse : `/admin` — aucun lien ni bouton sur le site, page exclue de Google (`noindex` + `robots.txt`).
- Onglets : **Blocs** (sections libres de la page d'accueil), **Services**, **Produits**, **Blog**, **Partenaires**, **Équipe**.
- Chaque élément peut être ajouté, modifié, masqué (œil) ou supprimé. « Ordre d'affichage » : le plus petit passe en premier.
- Première connexion : onglet Services → **Importer le contenu actuel** (copie les 12 pôles et l'équipe dans la base, une seule fois).
- Les tables sont créées automatiquement au premier accès, préfixées `cardit_` (aucun conflit avec d'autres tables de la même base).
- Les modifications sont visibles en quelques secondes (cache invalidé à chaque enregistrement).
- Images : 4 Mo maximum par fichier (limite des fonctions Vercel). Un lien d'image externe peut aussi être collé.

Format du champ « Détail du pôle » (une ligne par groupe, mêmes lignes en français et en anglais) :
`Développement web: Sites vitrines; Applications web; Portails`

## Blog, produits et SEO

- Le lien **Blog** n'apparaît dans le menu qu'à partir du premier article publié ; idem pour **Produits**.
- Texte des articles et des produits (zone « Article » / « Description ») : `## Titre`, `### Sous-titre`, `- liste`, `1. liste numérotée`, `**gras**`, `[texte](https://…)`, `![légende](https://…)` (image sur sa propre ligne). Séparez les blocs par une ligne vide. Une image envoyée via un champ Image peut être réutilisée en collant son lien.
- Chaque service, produit et article a un **Titre Google** et une **Description Google** optionnels ; vides, ils sont générés automatiquement.
- Chaque page a une URL canonique, Open Graph et Twitter card. Données structurées : Organization, WebSite, Service, Product, BlogPosting, BreadcrumbList. Le sitemap inclut services, fiches produit et articles.
- Après la mise en ligne : soumettre `https://cardit.cm/sitemap.xml` dans Google Search Console.

## Contenu de départ

- L'accueil (pourquoi CARDIT, robotique, parcours, publics, FAQ), la page À propos et la bande « devis » sont écrits dans `lib/home-content.ts`, `lib/about-content.ts` et `lib/i18n.ts` (français et anglais).
- Dans `/admin`, les onglets **Blog** et **Produits** proposent d'importer 3 articles et 5 offres d'exemple. Ils arrivent **masqués** : relisez, ajustez, puis publiez avec l'icône œil.

## Développement local

```bash
npm install
cp .env.example .env.local   # puis remplir
npm run dev
```

## Déploiement

1. Pousser sur GitHub (le `.env` est ignoré par git).
2. Vercel → Storage : connecter Neon et Blob au projet, puis définir `ADMIN_PASSWORD` et `ADMIN_SECRET`.
3. Redéployer, ouvrir `/admin`.
