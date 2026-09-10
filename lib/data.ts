export type LocalizedText = { fr: string; en: string };
export type LocalizedList = { fr: string[]; en: string[] };

export type ServiceGroup = {
  label: LocalizedText;
  items: LocalizedList;
};

export type ServiceColors = {
  accent: string; // gradient classes, e.g. "from-indigo-600 to-violet-600"
  badge: string;
  iconBg: string;
  text: string;
  border: string;
  lightBg: string;
};

export type Service = {
  slug: string;
  index: string;
  iconName: string;
  colors: ServiceColors;
  title: LocalizedText;
  tagline: LocalizedText;
  highlights: LocalizedList;
  groups: ServiceGroup[];
};

export const services: Service[] = [
  {
    slug: "developpement-logiciel",
    index: "01",
    iconName: "Code2",
    colors: {
      accent: "from-indigo-600 to-violet-600",
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
      text: "text-indigo-600",
      border: "border-indigo-200 hover:border-indigo-400",
      lightBg: "bg-indigo-50/50",
    },
    title: { fr: "Développement logiciel", en: "Software Development" },
    tagline: {
      fr: "Des solutions logicielles sur mesure, performantes, évolutives et sécurisées.",
      en: "Custom, high-performance, scalable and secure software solutions.",
    },
    highlights: {
      fr: ["Applications Web & SaaS", "Applications Mobiles (Android / iOS)", "Applications Desktop (Windows, macOS, Linux)", "API & Intégrations", "Sites Vitrines & E-commerce"],
      en: ["Web & SaaS Applications", "Mobile Applications (Android / iOS)", "Desktop Applications (Windows, macOS, Linux)", "APIs & Integrations", "Corporate & E-commerce Websites"],
    },
    groups: [
      { label: { fr: "Applications web", en: "Web applications" }, items: { fr: ["Sites vitrines", "E-commerce", "Applications métier / SaaS"], en: ["Corporate websites", "E-commerce", "Business / SaaS applications"] } },
      { label: { fr: "Applications mobiles", en: "Mobile applications" }, items: { fr: ["Android", "iOS"], en: ["Android", "iOS"] } },
      { label: { fr: "Applications desktop", en: "Desktop applications" }, items: { fr: ["Windows", "macOS", "Linux"], en: ["Windows", "macOS", "Linux"] } },
      { label: { fr: "Intégration", en: "Integration" }, items: { fr: ["API & intégration de systèmes"], en: ["API & systems integration"] } },
    ],
  },
  {
    slug: "solutions-entreprise",
    index: "02",
    iconName: "Building2",
    colors: {
      accent: "from-emerald-600 to-teal-600",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      text: "text-emerald-600",
      border: "border-emerald-200 hover:border-emerald-400",
      lightBg: "bg-emerald-50/50",
    },
    title: { fr: "Solutions Entreprise", en: "Enterprise Solutions" },
    tagline: {
      fr: "Optimisez vos processus et boostez votre performance.",
      en: "Optimize your processes and boost your performance.",
    },
    highlights: {
      fr: ["ERP / CRM", "Gestion documentaire", "Automatisation des processus", "Systèmes d'information", "Solutions métiers dédiées", "Portails & Intranets"],
      en: ["ERP / CRM", "Document management", "Process automation", "Information systems", "Dedicated business solutions", "Portals & Intranets"],
    },
    groups: [
      { label: { fr: "Gestion d'entreprise", en: "Business management" }, items: { fr: ["Logiciels sur mesure", "ERP", "CRM", "Gestion documentaire"], en: ["Custom software", "ERP", "CRM", "Document management"] } },
      { label: { fr: "Processus & systèmes", en: "Processes & systems" }, items: { fr: ["Automatisation des processus", "Systèmes d'information", "Solutions métiers dédiées"], en: ["Process automation", "Information systems", "Dedicated business solutions"] } },
      { label: { fr: "Collaboration", en: "Collaboration" }, items: { fr: ["Portails & Intranets"], en: ["Portals & intranets"] } },
    ],
  },
  {
    slug: "cloud-infrastructure",
    index: "03",
    iconName: "Cloud",
    colors: {
      accent: "from-sky-600 to-cyan-600",
      badge: "bg-sky-50 text-sky-700 border-sky-200",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200",
      text: "text-sky-600",
      border: "border-sky-200 hover:border-sky-400",
      lightBg: "bg-sky-50/50",
    },
    title: { fr: "Cloud & Infrastructure", en: "Cloud & Infrastructure" },
    tagline: {
      fr: "Des infrastructures cloud robustes, sécurisées et hautement disponibles.",
      en: "Robust, secure and highly available cloud infrastructure.",
    },
    highlights: {
      fr: ["Cloud Privé, Public & Hybride", "Virtualisation & Conteneurisation", "DevOps & Infrastructure as Code", "Kubernetes", "Sauvegarde & Disaster Recovery"],
      en: ["Private, Public & Hybrid Cloud", "Virtualization & Containerization", "DevOps & Infrastructure as Code", "Kubernetes", "Backup & Disaster Recovery"],
    },
    groups: [
      { label: { fr: "Cloud", en: "Cloud" }, items: { fr: ["Cloud privé", "Cloud public", "Cloud hybride"], en: ["Private cloud", "Public cloud", "Hybrid cloud"] } },
      { label: { fr: "Infrastructure", en: "Infrastructure" }, items: { fr: ["Virtualisation", "Serveurs & stockage", "Infrastructure as Code", "Conteneurisation", "Kubernetes"], en: ["Virtualization", "Servers & storage", "Infrastructure as Code", "Containerization", "Kubernetes"] } },
      { label: { fr: "Continuité", en: "Business continuity" }, items: { fr: ["Sauvegarde & réplication", "Disaster Recovery / Continuité d'activité"], en: ["Backup & replication", "Disaster recovery / business continuity"] } },
    ],
  },
  {
    slug: "reseaux-systemes",
    index: "04",
    iconName: "Network",
    colors: {
      accent: "from-amber-600 to-orange-600",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
      text: "text-amber-600",
      border: "border-amber-200 hover:border-amber-400",
      lightBg: "bg-amber-50/50",
    },
    title: { fr: "Réseaux & Systèmes", en: "Networks & Systems" },
    tagline: {
      fr: "Conception, déploiement et administration de réseaux et systèmes fiables.",
      en: "Design, deployment and administration of reliable networks and systems.",
    },
    highlights: {
      fr: ["Architecture réseau", "Installation & Configuration", "Sécurité réseau (Firewall, VPN)", "Supervision & Maintenance", "Administration systèmes"],
      en: ["Network Architecture", "Installation & Configuration", "Network Security (Firewall, VPN)", "Monitoring & Maintenance", "Systems Administration"],
    },
    groups: [
      { label: { fr: "Réseau", en: "Network" }, items: { fr: ["Architecture réseau", "Installation & configuration", "Wi-Fi professionnel", "VPN", "Firewall", "Routage & switching"], en: ["Network architecture", "Installation & configuration", "Professional Wi-Fi", "VPN", "Firewall", "Routing & switching"] } },
      { label: { fr: "Exploitation", en: "Operations" }, items: { fr: ["Supervision", "Administration systèmes"], en: ["Monitoring", "Systems administration"] } },
    ],
  },
  {
    slug: "cybersecurite",
    index: "05",
    iconName: "ShieldAlert",
    colors: {
      accent: "from-red-600 to-rose-600",
      badge: "bg-red-50 text-red-700 border-red-200",
      iconBg: "bg-red-50 text-red-600 border-red-200",
      text: "text-red-600",
      border: "border-red-200 hover:border-red-400",
      lightBg: "bg-red-50/50",
    },
    title: { fr: "Cybersécurité", en: "Cybersecurity" },
    tagline: {
      fr: "Protégez vos données et sécurisez vos infrastructures.",
      en: "Protect your data and secure your infrastructure.",
    },
    highlights: {
      fr: ["Audit & Analyse de vulnérabilités", "Sécurisation des infrastructures", "Gestion des accès & Identités", "Surveillance & Détection d'intrusions", "Sensibilisation & Conformité"],
      en: ["Audit & Vulnerability Analysis", "Infrastructure Hardening", "Access & Identity Management", "Intrusion Monitoring & Detection", "Awareness & Compliance"],
    },
    groups: [
      { label: { fr: "Audit & prévention", en: "Audit & prevention" }, items: { fr: ["Audit de sécurité", "Analyse des vulnérabilités"], en: ["Security audit", "Vulnerability analysis"] } },
      { label: { fr: "Protection", en: "Protection" }, items: { fr: ["Sécurisation des infrastructures", "Sécurité réseau", "Gestion des accès", "Sauvegardes sécurisées"], en: ["Infrastructure hardening", "Network security", "Access management", "Secure backups"] } },
      { label: { fr: "Réaction & conformité", en: "Response & compliance" }, items: { fr: ["Sensibilisation", "Plan de réponse aux incidents"], en: ["Awareness training", "Incident response plan"] } },
    ],
  },
  {
    slug: "data-intelligence-artificielle",
    index: "06",
    iconName: "Cpu",
    colors: {
      accent: "from-purple-600 to-fuchsia-600",
      badge: "bg-purple-50 text-purple-700 border-purple-200",
      iconBg: "bg-purple-50 text-purple-600 border-purple-200",
      text: "text-purple-600",
      border: "border-purple-200 hover:border-purple-400",
      lightBg: "bg-purple-50/50",
    },
    title: { fr: "Data & Intelligence Artificielle", en: "Data & Artificial Intelligence" },
    tagline: {
      fr: "Transformez vos données en décisions intelligentes et en valeur.",
      en: "Turn your data into intelligent decisions and value.",
    },
    highlights: {
      fr: ["Analyse de données & BI", "Tableaux de bord & Reporting", "Machine Learning", "IA Générative & LLM", "Automatisation intelligente"],
      en: ["Data Analysis & BI", "Dashboards & Reporting", "Machine Learning", "Generative AI & LLMs", "Intelligent Automation"],
    },
    groups: [
      { label: { fr: "Données", en: "Data" }, items: { fr: ["Analyse de données", "Business Intelligence", "Tableaux de bord"], en: ["Data analysis", "Business Intelligence", "Dashboards"] } },
      { label: { fr: "Intelligence artificielle", en: "Artificial intelligence" }, items: { fr: ["Machine Learning", "IA générative", "Intégration LLM", "Chatbots & assistants IA"], en: ["Machine Learning", "Generative AI", "LLM integration", "Chatbots & AI assistants"] } },
      { label: { fr: "Automatisation", en: "Automation" }, items: { fr: ["Automatisation intelligente"], en: ["Intelligent automation"] } },
    ],
  },
  {
    slug: "marketing-digital",
    index: "07",
    iconName: "Megaphone",
    colors: {
      accent: "from-pink-600 to-rose-600",
      badge: "bg-pink-50 text-pink-700 border-pink-200",
      iconBg: "bg-pink-50 text-pink-600 border-pink-200",
      text: "text-pink-600",
      border: "border-pink-200 hover:border-pink-400",
      lightBg: "bg-pink-50/50",
    },
    title: { fr: "Marketing Digital", en: "Digital Marketing" },
    tagline: {
      fr: "Développez votre présence en ligne et générez plus de résultats.",
      en: "Grow your online presence and generate real results.",
    },
    highlights: {
      fr: ["Stratégie digitale", "Community Management", "Publicité en ligne (Ads)", "Création de contenu", "Branding & Communication"],
      en: ["Digital Strategy", "Community Management", "Online Advertising (Ads)", "Content Creation", "Branding & Communication"],
    },
    groups: [
      { label: { fr: "Stratégie", en: "Strategy" }, items: { fr: ["Stratégie digitale", "Branding numérique"], en: ["Digital strategy", "Digital branding"] } },
      { label: { fr: "Présence & contenu", en: "Presence & content" }, items: { fr: ["Community management", "Création de contenu", "Communication digitale"], en: ["Community management", "Content creation", "Digital communication"] } },
      { label: { fr: "Acquisition", en: "Acquisition" }, items: { fr: ["Publicité digitale"], en: ["Digital advertising"] } },
    ],
  },
  {
    slug: "seo-visibilite",
    index: "08",
    iconName: "SearchCheck",
    colors: {
      accent: "from-blue-600 to-cyan-600",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      text: "text-blue-600",
      border: "border-blue-200 hover:border-blue-400",
      lightBg: "bg-blue-50/50",
    },
    title: { fr: "SEO & Visibilité", en: "SEO & Visibility" },
    tagline: {
      fr: "Améliorez votre visibilité et attirez un trafic qualifié durablement.",
      en: "Improve your visibility and attract sustainable, qualified traffic.",
    },
    highlights: {
      fr: ["Audit SEO", "SEO Technique", "Référencement Naturel", "SEO Local", "Optimisation de Contenu", "Analytics & Suivi"],
      en: ["SEO Audit", "Technical SEO", "Organic Search Ranking", "Local SEO", "Content Optimization", "Analytics & Tracking"],
    },
    groups: [
      { label: { fr: "Référencement", en: "Search ranking" }, items: { fr: ["SEO technique", "SEO local", "Référencement naturel", "Audit SEO"], en: ["Technical SEO", "Local SEO", "Organic search ranking", "SEO audit"] } },
      { label: { fr: "Optimisation & mesure", en: "Optimization & measurement" }, items: { fr: ["Optimisation de contenu", "Analytics & mesure de performance"], en: ["Content optimization", "Analytics & performance tracking"] } },
    ],
  },
  {
    slug: "conseil-audit",
    index: "09",
    iconName: "Compass",
    colors: {
      accent: "from-amber-600 to-yellow-600",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      iconBg: "bg-amber-50 text-amber-700 border-amber-200",
      text: "text-amber-700",
      border: "border-amber-200 hover:border-amber-400",
      lightBg: "bg-amber-50/50",
    },
    title: { fr: "Conseil & Audit", en: "Consulting & Audit" },
    tagline: {
      fr: "Des experts pour analyser, optimiser et sécuriser votre environnement IT.",
      en: "Experts to analyze, optimize and secure your IT environment.",
    },
    highlights: {
      fr: ["Audit IT & Sécurité", "Architecture Logicielle & Cloud", "Conseil en Transformation Digitale", "Analyse de Performance", "Accompagnement stratégique"],
      en: ["IT & Security Audit", "Software & Cloud Architecture", "Digital Transformation Consulting", "Performance Analysis", "Strategic Support"],
    },
    groups: [
      { label: { fr: "Audit", en: "Audit" }, items: { fr: ["Audit infrastructure", "Audit systèmes d'information"], en: ["Infrastructure audit", "Information systems audit"] } },
      { label: { fr: "Architecture & stratégie", en: "Architecture & strategy" }, items: { fr: ["Conseil informatique", "Architecture logicielle", "Architecture cloud", "Transformation numérique"], en: ["IT consulting", "Software architecture", "Cloud architecture", "Digital transformation"] } },
      { label: { fr: "Accompagnement", en: "Support" }, items: { fr: ["Accompagnement technologique"], en: ["Technology enablement"] } },
    ],
  },
  {
    slug: "robotique-systemes-autonomes",
    index: "10",
    iconName: "Bot",
    colors: {
      accent: "from-teal-600 to-emerald-600",
      badge: "bg-teal-50 text-teal-700 border-teal-200",
      iconBg: "bg-teal-50 text-teal-600 border-teal-200",
      text: "text-teal-600",
      border: "border-teal-200 hover:border-teal-400",
      lightBg: "bg-teal-50/50",
    },
    title: { fr: "Robotique & Systèmes Autonomes", en: "Robotics & Autonomous Systems" },
    tagline: {
      fr: "Concevons aujourd'hui les solutions autonomes de demain.",
      en: "Designing today's autonomous solutions for tomorrow.",
    },
    highlights: {
      fr: ["Drones (Agriculture, Cartographie, Surveillance, Inspection)", "Robots Mobiles & Industriels", "Systèmes Autonomes", "IA Embarquée & Vision par Ordinateur", "Prototypage & Intégration"],
      en: ["Drones (Agriculture, Mapping, Surveillance, Inspection)", "Mobile & Industrial Robots", "Autonomous Systems", "Edge AI & Computer Vision", "Prototyping & Integration"],
    },
    groups: [
      { label: { fr: "Drones agricoles", en: "Agricultural drones" }, items: { fr: ["Surveillance des cultures", "Cartographie agricole", "Analyse de parcelles", "Suivi de croissance", "Détection de problèmes"], en: ["Crop monitoring", "Agricultural mapping", "Field analysis", "Growth tracking", "Issue detection"] } },
      { label: { fr: "Drones de cartographie", en: "Mapping drones" }, items: { fr: ["Photogrammétrie", "Modélisation 3D", "Topographie", "Cartographie de terrains"], en: ["Photogrammetry", "3D modeling", "Topography", "Land mapping"] } },
      { label: { fr: "Drones de surveillance", en: "Surveillance drones" }, items: { fr: ["Surveillance de sites", "Inspection d'infrastructures", "Monitoring environnemental"], en: ["Site surveillance", "Infrastructure inspection", "Environmental monitoring"] } },
      { label: { fr: "Drones spécialisés", en: "Specialized drones" }, items: { fr: ["Conception selon le besoin"], en: ["Custom design on request"] } },
      { label: { fr: "Robotique", en: "Robotics" }, items: { fr: ["Robots mobiles", "Robots autonomes", "Robots de surveillance", "Robots agricoles", "Robots d'inspection", "Prototypes robotiques"], en: ["Mobile robots", "Autonomous robots", "Surveillance robots", "Agricultural robots", "Inspection robots", "Robotic prototypes"] } },
      { label: { fr: "Systèmes autonomes", en: "Autonomous systems" }, items: { fr: ["Véhicules autonomes", "Systèmes de navigation", "Systèmes embarqués", "Capteurs & IoT", "Téléopération", "Navigation autonome"], en: ["Autonomous vehicles", "Navigation systems", "Embedded systems", "Sensors & IoT", "Teleoperation", "Autonomous navigation"] } },
      { label: { fr: "IA embarquée", en: "Edge AI" }, items: { fr: ["Computer Vision", "Détection d'objets", "Reconnaissance d'images", "Analyse vidéo", "Navigation intelligente", "Edge AI"], en: ["Computer vision", "Object detection", "Image recognition", "Video analysis", "Intelligent navigation", "Edge AI"] } },
      { label: { fr: "Notre méthode R&D", en: "Our R&D method" }, items: { fr: ["Étude du besoin", "Conception", "Prototypage", "Développement", "Tests", "Déploiement", "Maintenance & évolution"], en: ["Needs assessment", "Design", "Prototyping", "Development", "Testing", "Deployment", "Maintenance & evolution"] } },
    ],
  },
  {
    slug: "formation",
    index: "11",
    iconName: "GraduationCap",
    colors: {
      accent: "from-orange-500 to-amber-600",
      badge: "bg-orange-50 text-orange-700 border-orange-200",
      iconBg: "bg-orange-50 text-orange-600 border-orange-200",
      text: "text-orange-600",
      border: "border-orange-200 hover:border-orange-400",
      lightBg: "bg-orange-50/50",
    },
    title: { fr: "Formation", en: "Training" },
    tagline: {
      fr: "Développez les compétences de vos équipes avec des formations pratiques et certifiantes.",
      en: "Build your teams' skills with practical, certified training.",
    },
    highlights: {
      fr: ["Développement Web & Mobile", "Cloud & DevOps", "Réseaux & Systèmes", "Cybersécurité", "Data & IA", "Formation en entreprise"],
      en: ["Web & Mobile Development", "Cloud & DevOps", "Networks & Systems", "Cybersecurity", "Data & AI", "Corporate Training"],
    },
    groups: [
      { label: { fr: "Domaines de formation", en: "Training areas" }, items: { fr: ["Développement web", "Développement mobile", "Cloud", "DevOps", "Réseaux", "Cybersécurité", "IA", "Data"], en: ["Web development", "Mobile development", "Cloud", "DevOps", "Networks", "Cybersecurity", "AI", "Data"] } },
      { label: { fr: "Formats", en: "Formats" }, items: { fr: ["Formation professionnelle en entreprise"], en: ["Corporate / on-site training"] } },
    ],
  },
  {
    slug: "recherche-innovation",
    index: "12",
    iconName: "FlaskConical",
    colors: {
      accent: "from-blue-600 to-indigo-600",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
      text: "text-blue-600",
      border: "border-blue-200 hover:border-blue-400",
      lightBg: "bg-blue-50/50",
    },
    title: { fr: "Recherche & Innovation", en: "Research & Innovation" },
    tagline: {
      fr: "Innover aujourd'hui pour construire les solutions de demain.",
      en: "Innovating today to build tomorrow's solutions.",
    },
    highlights: {
      fr: ["Recherche & Développement", "Prototypage & Expérimentation", "Innovation Technologique", "Veille Technologique", "Partenariats & Incubation"],
      en: ["Research & Development", "Prototyping & Experimentation", "Technological Innovation", "Technology Watch", "Partnerships & Incubation"],
    },
    groups: [
      { label: { fr: "R&D", en: "R&D" }, items: { fr: ["R&D technologique", "Prototypage", "Expérimentation de nouvelles technologies"], en: ["Technological R&D", "Prototyping", "New technology experimentation"] } },
      { label: { fr: "Innovation", en: "Innovation" }, items: { fr: ["Innovation numérique", "Laboratoire technologique", "Développement de solutions innovantes"], en: ["Digital innovation", "Technology lab", "Innovative solution development"] } },
      { label: { fr: "Écosystème", en: "Ecosystem" }, items: { fr: ["Veille technologique", "Partenariats & incubation"], en: ["Technology watch", "Partnerships & incubation"] } },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "NANTSA BEAUREILO",
    role: { fr: "CEO", en: "CEO" },
    bio: { fr: "Architecte d'infrastructures cloud et IoT. ", 
      en: "Infrastructure, cloud Architect and IoT." },
    photo: "/images/team/Nantsa.png",
  },
  {
    name: "Mounchikpou Njiemessa Mohamed Nasser",
    role: { fr: "CTO", en: "CTO" },
    bio: { fr: "Ingénieur DevOps & Multi-Cloud | Chef de Projet SI", 
      en: "DevOps & Multi-Cloud Engineer | IT Project Manager" },
    photo: "/images/team/Mohamed.png",
  },
  {
    name: "Ntolo jeanne",
    role: { fr: "CMO", en: "CMO" },
    bio: { fr: "Manager marketing et SEO.", en: "Marketing and SEO Manager." },
    photo: "/images/team/Ntolo.png",
  },
  {
    name: "Nana Tondji Emmanuel",
    role: { fr: "COO", en: "COO" },
    bio: { fr: "Chef de Projet.", en: "Project Manager" },
    photo: "/images/team/Nana.png",
  },
];

export type Partner = {
  name: string;
  logo?: string;
  url?: string;
};

export const partners: Partner[] = [
  { name: "Partenaire 1", logo: "/images/partners/placeholder.png" },
  { name: "Partenaire 2", logo: "/images/partners/placeholder.png" },
  { name: "Partenaire 3", logo: "/images/partners/placeholder.png" },
  { name: "Partenaire 4", logo: "/images/partners/placeholder.png" },
  { name: "Partenaire 5", logo: "/images/partners/placeholder.png" },
  { name: "Partenaire 6", logo: "/images/partners/placeholder.png" },
];

export const stats: { value: string; label: LocalizedText }[] = [
  { value: "12", label: { fr: "Pôles d'expertise", en: "Areas of expertise" } },
  { value: "100%", label: { fr: "Solutions sur-mesure", en: "Tailor-made solutions" } },
  { value: "24/7", label: { fr: "Supervision infrastructure", en: "Infrastructure monitoring" } },
  { value: "Local", label: { fr: "Ancrage africain", en: "African footprint" } },
];
