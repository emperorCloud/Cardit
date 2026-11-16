import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getProducts } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import { clip, pageMeta } from "@/lib/seo";
import ProductDetailContent from "./ProductDetailContent";

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = (await getProducts()).find((p) => p.slug === params.slug);
  if (!product) return {};
  return pageMeta({
    title: product.seoTitle || product.name.fr,
    description: product.seoDesc || clip(product.desc.fr) || `${product.name.fr} — solution CARDIT.`,
    path: `/produits/${product.slug}`,
    image: product.image,
  });
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = (await getProducts()).find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const url = `${siteUrl}/produits/${product.slug}`;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name.fr,
    description: product.seoDesc || clip(product.desc.fr, 300),
    url,
    image: product.image ? [product.image.startsWith("/") ? `${siteUrl}${product.image}` : product.image] : [`${siteUrl}/images/og-cover.png`],
    brand: { "@type": "Brand", name: "CARDIT" },
    manufacturer: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "CARDIT" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Produits", item: `${siteUrl}/produits` },
      { "@type": "ListItem", position: 3, name: product.name.fr, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ProductDetailContent product={product} />
    </>
  );
}
