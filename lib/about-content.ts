import type { LocalizedText } from "./content";

type Item = { title: LocalizedText; text: LocalizedText };

export const ABOUT = {
  statement: {
    fr: "Transformer les idées en solutions technologiques concrètes, accessibles et adaptées aux réalités africaines.",
    en: "Turning ideas into concrete, accessible technology solutions adapted to African realities.",
  },
  statementText: {
    fr: "CARDIT conçoit, développe et déploie des solutions numériques et des technologies innovantes pensées depuis l'Afrique. Nous accompagnons entreprises, institutions, organisations et particuliers dans leur transformation numérique, tout en contribuant à la recherche, au développement et à l'innovation technologique sur le continent.",
    en: "CARDIT designs, develops and deploys digital solutions and innovative technologies conceived from Africa. We support companies, institutions, organizations and individuals in their digital transformation, while contributing to research, development and technological innovation across the continent.",
  },
  pillarsTitle: { fr: "Recherche, développement, innovation : un même fil conducteur", en: "Research, development, innovation: one common thread" },
  pillars: [
    {
      title: { fr: "Recherche", en: "Research" },
      text: {
        fr: "Nous explorons l'intelligence artificielle, la data science, la robotique et les systèmes embarqués pour identifier ce qui sera utile demain.",
        en: "We explore artificial intelligence, data science, robotics and embedded systems to identify what will be useful tomorrow.",
      },
    },
    {
      title: { fr: "Développement", en: "Development" },
      text: {
        fr: "Sites web, applications mobiles, logiciels sur mesure, solutions de gestion : nous transformons les besoins en produits fiables.",
        en: "Websites, mobile apps, custom software, management solutions: we turn needs into reliable products.",
      },
    },
    {
      title: { fr: "Innovation", en: "Innovation" },
      text: {
        fr: "Nous déployons des technologies éprouvées et émergentes là où elles créent une vraie valeur : processus, décisions, terrain.",
        en: "We deploy proven and emerging technologies where they create real value: processes, decisions, field operations.",
      },
    },
  ] as Item[],
  valuesTitle: { fr: "Ce qui guide chacun de nos projets", en: "What guides each of our projects" },
  values: [
    {
      title: { fr: "Ancrage local", en: "Local roots" },
      text: {
        fr: "Des solutions adaptées aux réalités africaines : connectivité, coûts, souveraineté des données.",
        en: "Solutions adapted to African realities: connectivity, costs, data sovereignty.",
      },
    },
    {
      title: { fr: "Exigence technique", en: "Technical rigor" },
      text: {
        fr: "La rigueur d'un centre de recherche : architecture solide, sécurité, documentation.",
        en: "The rigor of a research center: solid architecture, security, documentation.",
      },
    },
    {
      title: { fr: "Innovation utile", en: "Useful innovation" },
      text: {
        fr: "Pas de technologie pour la technologie : chaque solution répond à un besoin concret et mesurable.",
        en: "No technology for technology's sake: each solution answers a concrete, measurable need.",
      },
    },
    {
      title: { fr: "Accessibilité", en: "Accessibility" },
      text: {
        fr: "Des solutions pensées pour être comprises, adoptées et utilisées par vos équipes au quotidien.",
        en: "Solutions designed to be understood, adopted and used by your teams every day.",
      },
    },
  ] as Item[],
  domainsTitle: { fr: "Nos domaines d'intervention", en: "Our areas of work" },
  domains: [
    {
      title: { fr: "Numérique et logiciel", en: "Digital and software" },
      text: {
        fr: "Sites web, applications mobiles, logiciels sur mesure, ERP, CRM, GED, BPM, automatisation des processus.",
        en: "Websites, mobile apps, custom software, ERP, CRM, DMS, BPM, process automation.",
      },
    },
    {
      title: { fr: "IA et données", en: "AI and data" },
      text: {
        fr: "Intelligence artificielle générative, assistants IA, data science, Business Intelligence, Machine Learning.",
        en: "Generative AI, AI assistants, data science, Business Intelligence, Machine Learning.",
      },
    },
    {
      title: { fr: "Infrastructure et sécurité", en: "Infrastructure and security" },
      text: {
        fr: "Architecture cloud, virtualisation, réseaux et systèmes, sécurisation des infrastructures, audit informatique.",
        en: "Cloud architecture, virtualization, networks and systems, infrastructure security, IT audit.",
      },
    },
    {
      title: { fr: "Conseil, marketing et formation", en: "Consulting, marketing and training" },
      text: {
        fr: "Conseil technologique, référencement SEO, marketing digital, formation professionnelle.",
        en: "Technology consulting, SEO, digital marketing, professional training.",
      },
    },
    {
      title: { fr: "Robotique et systèmes autonomes", en: "Robotics and autonomous systems" },
      text: {
        fr: "Robotique, systèmes embarqués et solutions autonomes, de la recherche au prototype.",
        en: "Robotics, embedded systems and autonomous solutions, from research to prototype.",
      },
    },
  ] as Item[],
};
