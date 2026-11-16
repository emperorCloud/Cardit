import { pageMeta } from "@/lib/seo";
import PartnersContent from "./PartnersContent";
import { getPartners } from "@/lib/content";

export const metadata = pageMeta({
  title: "Partenaires",
  description: "Les partenaires institutionnels, technologiques et académiques de CARDIT.",
  path: "/partners",
});

export default async function PartnersPage() {
  return <PartnersContent partners={await getPartners()} />;
}
