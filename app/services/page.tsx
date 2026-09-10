import type { Metadata } from "next";
import ServicesIndexContent from "./ServicesIndexContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Les 12 pôles d'expertise de CARDIT : développement logiciel, solutions entreprise, cloud & infrastructure, réseaux, cybersécurité, data & IA, marketing digital, SEO, conseil, robotique & drones, formation, recherche & innovation.",
};

export default function ServicesPage() {
  return <ServicesIndexContent />;
}
