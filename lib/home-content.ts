import type { LocalizedText } from "./content";

type Item = { title: LocalizedText; text: LocalizedText };

export const WHY = {
  title: { fr: "Un partenaire technologique qui comprend votre terrain", en: "A technology partner that understands your reality" },
  intro: {
    fr: "De la stratégie au déploiement, une même équipe conçoit des solutions adaptées à vos contraintes réelles.",
    en: "From strategy to deployment, one team designs solutions adapted to your real-world constraints.",
  },
  items: [
    {
      title: { fr: "Pensé depuis l'Afrique", en: "Designed from Africa" },
      text: {
        fr: "Connectivité, budgets, souveraineté des données : nous concevons pour vos conditions réelles, pas pour un contexte importé.",
        en: "Connectivity, budgets, data sovereignty: we design for your real conditions, not for an imported context.",
      },
    },
    {
      title: { fr: "Un seul interlocuteur", en: "A single point of contact" },
      text: {
        fr: "Logiciel, cloud, sécurité, data, IA, marketing : une équipe, un projet cohérent, moins de coordination pour vous.",
        en: "Software, cloud, security, data, AI, marketing: one team, one coherent project, less coordination for you.",
      },
    },
    {
      title: { fr: "Du sur-mesure, pas du générique", en: "Tailor-made, not generic" },
      text: {
        fr: "Chaque solution part de votre besoin et de vos processus, puis évolue avec votre activité.",
        en: "Every solution starts from your needs and processes, then evolves with your business.",
      },
    },
    {
      title: { fr: "L'exigence d'un centre de recherche", en: "The rigor of a research center" },
      text: {
        fr: "Architecture solide, sécurité intégrée, documentation : la rigueur de la R&D appliquée à vos livrables.",
        en: "Solid architecture, built-in security, documentation: R&D rigor applied to your deliverables.",
      },
    },
  ] as Item[],
};

export const SPOTLIGHT = {
  title: { fr: "Robotique et systèmes autonomes : notre laboratoire d'innovation", en: "Robotics and autonomous systems: our innovation lab" },
  text: {
    fr: "Drones, robots mobiles, IA embarquée : notre pôle R&D conçoit, prototype et déploie des solutions autonomes pour l'agriculture, la cartographie, la surveillance et l'inspection.",
    en: "Drones, mobile robots, edge AI: our R&D unit designs, prototypes and deploys autonomous solutions for agriculture, mapping, surveillance and inspection.",
  },
  points: {
    fr: ["Drones agricoles, de cartographie et de surveillance", "Robots mobiles, agricoles et d'inspection", "IA embarquée et vision par ordinateur", "De l'étude du besoin au prototype, puis au déploiement"],
    en: ["Agricultural, mapping and surveillance drones", "Mobile, agricultural and inspection robots", "Edge AI and computer vision", "From needs study to prototype, then deployment"],
  },
  cta: { fr: "Découvrir le pôle", en: "Explore the unit" },
  href: "/services/robotique-systemes-autonomes",
};

export const PROCESS = {
  title: { fr: "Un parcours clair, de l'idée à la mise en production", en: "A clear path, from idea to production" },
  steps: [
    {
      title: { fr: "Cadrage", en: "Scoping" },
      text: {
        fr: "Nous écoutons votre besoin, analysons votre contexte et définissons ensemble objectifs et périmètre.",
        en: "We listen to your needs, analyze your context and define objectives and scope together.",
      },
    },
    {
      title: { fr: "Proposition", en: "Proposal" },
      text: {
        fr: "Vous recevez une approche technique, un plan de déploiement et un devis détaillé.",
        en: "You receive a technical approach, a deployment plan and a detailed quote.",
      },
    },
    {
      title: { fr: "Réalisation", en: "Delivery" },
      text: {
        fr: "Conception, développement et tests, avec des points d'étape réguliers pour garder la maîtrise.",
        en: "Design, development and testing, with regular checkpoints so you stay in control.",
      },
    },
    {
      title: { fr: "Déploiement et suivi", en: "Go-live and follow-up" },
      text: {
        fr: "Mise en production, prise en main par vos équipes et accompagnement dans la durée.",
        en: "Go-live, onboarding of your teams and long-term support.",
      },
    },
  ] as Item[],
  note: { fr: "Premier retour sous 48 h ouvrées après votre demande.", en: "First reply within 48 business hours of your request." },
};

export const AUDIENCES = {
  title: { fr: "Des solutions pour chaque type d'organisation", en: "Solutions for every type of organization" },
  items: [
    {
      title: { fr: "Entreprises et PME", en: "Companies and SMEs" },
      text: {
        fr: "Gestion (ERP, CRM, GED, BPM), automatisation des processus, site web, marketing digital.",
        en: "Management (ERP, CRM, DMS, BPM), process automation, website, digital marketing.",
      },
    },
    {
      title: { fr: "Institutions et administrations", en: "Institutions and public bodies" },
      text: {
        fr: "Systèmes d'information, infrastructures sécurisées, audit informatique, conseil technologique.",
        en: "Information systems, secured infrastructure, IT audit, technology consulting.",
      },
    },
    {
      title: { fr: "Organisations et associations", en: "Organizations and associations" },
      text: {
        fr: "Outils de pilotage, data et Business Intelligence, plateformes sur mesure, formation des équipes.",
        en: "Management tools, data and Business Intelligence, custom platforms, team training.",
      },
    },
    {
      title: { fr: "Particuliers et porteurs de projet", en: "Individuals and project owners" },
      text: {
        fr: "Site web, application mobile, accompagnement de l'idée jusqu'au produit.",
        en: "Website, mobile app, support from idea to product.",
      },
    },
  ] as Item[],
};

export const FAQ = {
  title: { fr: "Questions fréquentes", en: "Frequently asked questions" },
  items: [
    {
      title: { fr: "Comment obtenir un devis ?", en: "How do I get a quote?" },
      text: {
        fr: "Décrivez votre besoin via le formulaire de contact ou sur WhatsApp. Notre équipe revient vers vous sous 48 h ouvrées avec une première approche et les prochaines étapes.",
        en: "Describe your needs through the contact form or on WhatsApp. Our team replies within 48 business hours with an initial approach and next steps.",
      },
    },
    {
      title: { fr: "Quelles informations préparer pour ma demande ?", en: "What should I prepare for my request?" },
      text: {
        fr: "Votre objectif, votre contexte (activité, taille, outils existants), vos contraintes (délais, budget indicatif) et le périmètre souhaité. Un besoin encore flou suffit : nous vous aidons à le préciser.",
        en: "Your goal, your context (business, size, existing tools), your constraints (deadlines, indicative budget) and the desired scope. A still-vague need is enough: we help you refine it.",
      },
    },
    {
      title: { fr: "Comment le prix est-il établi ?", en: "How is the price set?" },
      text: {
        fr: "Chaque projet est chiffré selon son périmètre, sa complexité et son calendrier. Vous recevez un devis détaillé avant de vous engager.",
        en: "Each project is priced according to its scope, complexity and timeline. You receive a detailed quote before committing.",
      },
    },
    {
      title: { fr: "Pouvez-vous intervenir sur plusieurs domaines à la fois ?", en: "Can you work across several areas at once?" },
      text: {
        fr: "Oui. Développement, cloud, sécurité, data et IA, marketing : nos pôles se combinent pour traiter un projet complet avec un seul interlocuteur.",
        en: "Yes. Development, cloud, security, data and AI, marketing: our units combine to handle a full project with a single point of contact.",
      },
    },
    {
      title: { fr: "Où sera hébergée la solution et que deviennent mes données ?", en: "Where will the solution be hosted and what happens to my data?" },
      text: {
        fr: "Selon vos contraintes : auto-hébergement sur une infrastructure que vous contrôlez, cloud public ou architecture hybride. Nous vous conseillons l'option la plus adaptée à vos exigences de souveraineté, de coûts et de connectivité.",
        en: "Depending on your constraints: self-hosting on infrastructure you control, public cloud or a hybrid setup. We advise the option best suited to your sovereignty, cost and connectivity requirements.",
      },
    },
    {
      title: { fr: "Je n'ai pas encore de projet précis, puis-je vous contacter ?", en: "I don't have a precise project yet. Can I still contact you?" },
      text: {
        fr: "Oui. L'audit informatique et le conseil technologique permettent de clarifier votre besoin et d'identifier les priorités avant de lancer un développement.",
        en: "Yes. IT audit and technology consulting help clarify your needs and identify priorities before starting development.",
      },
    },
  ] as Item[],
};
