import type { Metadata } from "next";
import PartnersContent from "./PartnersContent";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "Les partenaires institutionnels, technologiques et académiques de CARDIT.",
};

export default function PartnersPage() {
  return <PartnersContent />;
}
