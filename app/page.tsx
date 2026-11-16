import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import ServicesOverview from "@/components/ServicesOverview";
import DeploymentSection from "@/components/DeploymentSection";
import CtaBand from "@/components/CtaBand";
import { getServices } from "@/lib/content";

export default async function HomePage() {
  const services = await getServices();

  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesOverview services={services} />
      <DeploymentSection />
      <CtaBand />
    </>
  );
}