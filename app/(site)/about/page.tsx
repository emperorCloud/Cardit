import { pageMeta } from "@/lib/seo";
import AboutContent from "./AboutContent";
import { getTeam } from "@/lib/content";

export const metadata = pageMeta({
  title: "À propos",
  description: "CARDIT — Centre Africain de Recherche, Développement et l'Innovation Technologique. Notre mission, nos valeurs et notre équipe.",
  path: "/about",
});

export default async function AboutPage() {
  return <AboutContent team={await getTeam()} />;
}
