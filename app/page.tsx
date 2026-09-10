import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import ServicesOverview from "@/components/ServicesOverview";
import DeploymentSection from "@/components/DeploymentSection";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesOverview />
      <DeploymentSection />
      <CtaBand />
    </>
  );
}
