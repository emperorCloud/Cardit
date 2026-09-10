import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import MobileQuickBar from "@/components/MobileQuickBar";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteUrl, siteContact } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CARDIT — Centre Africain de Recherche, Développement et Innovation Technologique",
    template: "%s | CARDIT",
  },
  description:
    "CARDIT réunit 12 pôles d'expertise : développement logiciel, solutions entreprise, cloud & infrastructure, réseaux, cybersécurité, data & IA, marketing digital, SEO, conseil & audit, robotique & drones, formation et recherche & innovation.",
  keywords: [
    "CARDIT",
    "développement web Afrique",
    "application mobile Afrique",
    "cloud auto-hébergé",
    "cybersécurité Afrique",
    "SEO Afrique",
    "data et intelligence artificielle",
    "drones agricoles",
    "drones civils",
    "robotique",
    "marketing digital",
    "formation informatique",
    "CARDIT Cameroun",
  ],
  authors: [{ name: "CARDIT" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "CARDIT",
    title: "CARDIT — Recherche, Développement et Innovation Technologique",
    description:
      "12 pôles d'expertise : développement, cloud, cybersécurité, data & IA, marketing digital, robotique & drones, formation. CARDIT accompagne vos projets technologiques de l'idée au déploiement.",
    images: [{ url: "/images/og-cover.png", width: 1200, height: 630, alt: "CARDIT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CARDIT — Recherche, Développement et Innovation Technologique",
    description:
      "12 pôles d'expertise : développement, cloud, cybersécurité, data & IA, marketing digital, robotique & drones, formation.",
    images: ["/images/og-cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "CARDIT",
  alternateName:
    "Centre Africain de Recherche, Développement et l'Innovation Technologique",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-lion.png`,
  image: `${siteUrl}/images/og-cover.png`,
  description:
    "Centre africain réunissant 12 pôles d'expertise technologique : développement logiciel, cloud & infrastructure, cybersécurité, data & IA, marketing digital, robotique & drones, formation et recherche & innovation.",
  telephone: siteContact.phone,
  email: siteContact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bonamoussadi",
    addressLocality: "Douala",
    addressCountry: "CM",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteContact.phone,
      email: siteContact.email,
      contactType: "customer service",
      areaServed: "CM",
      availableLanguage: ["French"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "CARDIT",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: {
  children: import("react").ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <LanguageProvider>
          <Header />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileQuickBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
