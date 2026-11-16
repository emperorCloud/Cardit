// cardit/app/(site)/page.tsx
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import ServicesOverview from "@/components/ServicesOverview";
import { Audiences, Faq, Process, Spotlight, WhyCardit } from "@/components/HomeSections";
import BlocksSection from "@/components/BlocksSection";
import DeploymentSection from "@/components/DeploymentSection";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { getBlocks, getServices } from "@/lib/content";
import { FAQ } from "@/lib/home-content";

export default async function HomePage() {
  const [services, blocks] = await Promise.all([getServices(), getBlocks()]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.items.map((q) => ({
      "@type": "Question",
      name: q.title.fr,
      acceptedAnswer: { "@type": "Answer", text: q.text.fr },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <StatsBand />
      <ServicesOverview services={services} />
      <WhyCardit />
      <Spotlight />
      <Process />
      <Audiences />
      <BlocksSection blocks={blocks} />
      <DeploymentSection />
      <Faq />
      <CtaBand />
    </>
  );
}
