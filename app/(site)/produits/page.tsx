import { pageMeta } from "@/lib/seo";
import ProductsContent from "./ProductsContent";
import { getProducts } from "@/lib/content";

export const metadata = pageMeta({
  title: "Produits",
  description: "Les produits et solutions prêtes à déployer de CARDIT : logiciels, plateformes et outils pensés pour les réalités africaines.",
  path: "/produits",
});

export default async function ProductsPage() {
  return <ProductsContent products={await getProducts()} />;
}
