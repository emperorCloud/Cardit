import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/data";
import { siteUrl } from "@/lib/site";
import ServiceDetailContent from "./ServiceDetailContent";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  const title = `${service.title.fr} — Pôle ${service.index}`;
  const description = `${service.tagline.fr} Découvrez les prestations CARDIT en ${service.title.fr.toLowerCase()} : ${service.highlights.fr.slice(0, 3).join(", ").toLowerCase()}.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/services/${service.slug}` },
    openGraph: {
      title: `${title} | CARDIT`,
      description,
      url: `${siteUrl}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
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
