import { pageMeta } from "@/lib/seo";
import ContactContent from "./ContactContent";

export const metadata = pageMeta({
  title: "Contact",
  description: "Contactez CARDIT pour discuter de votre projet : développement, cloud, cybersécurité, data & IA, marketing digital, robotique & drones, formation.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
