import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "CARDIT — Centre Africain de Recherche, Développement et l'Innovation Technologique. Notre mission, nos valeurs et notre équipe.",
};

export default function AboutPage() {
  return <AboutContent />;
}
