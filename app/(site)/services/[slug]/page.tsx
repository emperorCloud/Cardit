import type { Metadata } from "next";
import { clip, pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getServices } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import ServiceDetailContent from "./ServiceDetailContent";

export async function generateStaticParams() {
  return (await getServices()).map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const services = await getServices();
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  const auto = `${service.tagline.fr} Découvrez les prestations CARDIT en ${service.title.fr.toLowerCase()} : ${service.highlights.fr.slice(0, 3).join(", ").toLowerCase()}.`;
  return pageMeta({
    title: service.seoTitle || service.title.fr,
    description: service.seoDesc || clip(auto),
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const services = await getServices();
  const index = services.findIndex((s) => s.slug === params.slug);
  const service = services[index];
  if (!service) notFound();

  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title.fr,
    name: service.title.fr,
    description: service.tagline.fr,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "CARDIT",
    },
    areaServed: {
      "@type": "Country",
      name: "Cameroun",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title.fr,
      itemListElement: service.groups.map((group) => ({
        "@type": "OfferCatalog",
        name: group.label.fr,
        itemListElement: group.items.fr.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title.fr,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ServiceDetailContent service={service} prev={prev} next={next} />
    </>
  );
}
