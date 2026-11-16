import { pageMeta } from "@/lib/seo";
import ServicesIndexContent from "./ServicesIndexContent";
import { getServices } from "@/lib/content";

export const metadata = pageMeta({
  title: "Services",
  description: "Les pôles d'expertise de CARDIT : développement logiciel, solutions entreprise, cloud & infrastructure, réseaux, cybersécurité, data & IA, marketing digital, SEO, conseil, robotique & drones, formation, recherche & innovation.",
  path: "/services",
});

export default async function ServicesPage() {
  return <ServicesIndexContent services={await getServices()} />;
}
