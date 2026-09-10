import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez CARDIT pour discuter de votre projet : développement, cloud, cybersécurité, data & IA, marketing digital, robotique & drones, formation.",
};

export default function ContactPage() {
  return <ContactContent />;
}
