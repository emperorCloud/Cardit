export type Lang = "fr" | "en";

export const UI_TEXT = {
  fr: {
    nav: {
      services: "Services",
      products: "Produits",
      blog: "Blog",
      about: "À propos",
      partners: "Partenaires",
      contact: "Contact",
      cta: "Demander un devis",
    },
    hero: {
      eyebrow: "Centre Africain de Recherche, Développement & Innovation Technologique",
      titleStart: "Nous concevons les technologies qui font avancer ",
      titleHighlight: "l'Afrique",
      titleEnd: "",
      subtitle:
        "12 pôles d'expertise : développement logiciel, cloud, cybersécurité, data & IA, marketing digital, robotique & drones, formation et recherche — un seul partenaire technologique, de l'idée au déploiement.",
      ctaPrimary: "Demander un devis",
      ctaSecondary: "Découvrir nos services",
      ctaWhatsapp: "WhatsApp",
      techPills: ["Cloud & DevOps", "Cybersécurité", "Data & IA", "Drones & Robotique"],
      reassurance: [
        "Laboratoire R&D local à Douala",
        "Drones & IA autonomes",
        "Accompagnement de bout en bout",
      ],
    },
    servicesOverview: {
      eyebrow: "Ce que nous faisons",
      heading: "Douze pôles d'expertise, une seule ambition : innover depuis l'Afrique",
      cta: "Tous nos services",
      seeDetail: "Voir le détail →",
      comboTitle: "Un besoin qui combine plusieurs pôles ?",
      comboDesc: "C'est notre spécialité : nous assemblons ces expertises autour d'un même projet.",
      comboCta: "Parlons de votre projet →",
    },
    deployment: {
      eyebrow: "Infrastructure",
      heading: "Le déploiement pensé selon vos contraintes, pas l'inverse",
    },
    stats: {
      pillars: "Pôles d'expertise",
      custom: "Solutions sur-mesure",
      supervision: "Supervision infrastructure",
      local: "Ancrage africain",
    },
    ctaBand: {
      title: "Un projet en tête ? Obtenez votre devis.",
      description:
        "Décrivez votre besoin en quelques lignes. Nous revenons vers vous avec une première approche technique, un plan de déploiement et un devis adaptés à votre contexte.",
      button: "Demander un devis",
      whatsapp: "Écrire sur WhatsApp",
      note: "Premier retour sous 48 h ouvrées.",
    },
    footer: {
      description:
        "Centre Africain de Recherche, Développement et Innovation Technologique. Nous concevons et déployons des solutions numériques et des technologies de terrain, pensées depuis l'Afrique.",
      navTitle: "Navigation",
      pillarsTitle: "Pôles d'expertise",
      allPillars: "Voir les 12 pôles →",
      contactTitle: "Contact",
      addressTodo: "Adresse à compléter",
      rights: "Tous droits réservés.",
      builtWith: "Conçu et déployé avec Next.js",
    },
    about: {
      eyebrow: "À propos de CARDIT",
      title: "Centre Africain de Recherche, Développement et l'Innovation Technologique",
      intro:
        "CARDIT accompagne entreprises, institutions et porteurs de projets dans la conception et le déploiement de solutions numériques et technologiques, du logiciel au terrain.",
      missionEyebrow: "Notre mission",
      missionTitle: "Rendre accessibles, depuis l'Afrique, des technologies de niveau mondial.",
      missionText:
        "Nous réunissons des compétences en ingénierie logicielle, infrastructure, marketing digital, intelligence artificielle et robotique aérienne pour offrir un accompagnement complet, de la recherche à la mise en production.",
      valuesEyebrow: "Nos valeurs",
      values: [
        {
          title: "Ancrage local",
          description:
            "Nous concevons des solutions adaptées aux réalités africaines : connectivité, coûts, souveraineté des données.",
        },
        {
          title: "Exigence technique",
          description:
            "Chaque projet est mené avec la rigueur d'un centre de recherche : architecture solide, sécurité, documentation.",
        },
        {
          title: "Innovation utile",
          description:
            "Nous n'ajoutons pas de technologie pour la technologie : chaque solution répond à un besoin concret et mesurable.",
        },
      ],
      teamEyebrow: "L'équipe",
      teamTitle: "Les personnes derrière CARDIT",
      teamNote: "Photos et biographies à compléter dans lib/data.ts.",
    },
    products: {
      title: "Des produits conçus pour les réalités africaines",
      intro: "Solutions prêtes à déployer, adaptables à votre organisation.",
      empty: "Notre catalogue arrive bientôt. En attendant, parlez-nous de votre besoin.",
      cta: "Demander une démo",
      learnMore: "En savoir plus",
    },
    blog: {
      title: "Actualités et analyses",
      intro: "Technologie, innovation et transformation numérique vues depuis l'Afrique.",
      empty: "Les premiers articles arrivent bientôt.",
      readMore: "Lire l'article",
      back: "Tous les articles",
      home: "Accueil",
      published: "Publié le",
    },
    partners: {
      eyebrow: "Nos partenaires",
      title: "Ils nous font confiance et co-construisent avec nous",
      intro:
        "CARDIT collabore avec des institutions, entreprises technologiques et partenaires académiques pour porter des projets à fort impact.",
      note: "Logos à ajouter dans /public/images/partners/ puis référencés dans lib/data.ts.",
      ctaTitle: "Devenir partenaire de CARDIT",
      ctaDesc: "Institution, entreprise ou centre de recherche : discutons des collaborations possibles.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Discutons de votre projet",
      intro:
        "Décrivez-nous votre besoin : notre équipe revient vers vous sous 48h ouvrées avec une première approche technique.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      siteLabel: "Site",
      followLabel: "Suivez-nous",
      form: {
        name: "Nom complet",
        email: "Email",
        company: "Entreprise / organisation",
        phone: "Téléphone",
        domain: "Domaine concerné",
        message: "Votre message",
        submit: "Envoyer le message",
        sending: "Envoi en cours…",
        sentTitle: "Message envoyé",
        sentDesc: "Merci, notre équipe revient vers vous sous 48h ouvrées.",
        errorMessage: "L'envoi a échoué. Réessayez, ou écrivez-nous directement par email ou WhatsApp.",
      },
    },
    servicesIndex: {
      eyebrow: "Nos 12 pôles d'expertise",
      title: "Des solutions technologiques complètes, pensées pour l'Afrique",
      intro:
        "De la conception logicielle au déploiement d'infrastructures, en passant par la visibilité digitale, la robotique et les drones, chaque pôle peut être mobilisé seul ou combiné selon votre projet. Cliquez sur un pôle pour voir le détail complet.",
    },
    serviceDetail: {
      breadcrumbHome: "Accueil",
      breadcrumbServices: "Services",
      pillarOf: "Pôle",
      highlights: "Points forts",
      details: "Détail du pôle",
      allPillars: "Tous les pôles",
      ctaTitlePrefix: "Un projet",
      ctaDesc:
        "Décrivez-nous votre besoin : nous vous recommandons la meilleure approche technique et un plan de déploiement adapté.",
    },
    langToggleLabel: "Switch to English",
    mobileBar: {
      call: "Appeler",
      whatsapp: "WhatsApp",
      services: "Services",
      quote: "Devis",
    },
  },
  en: {
    nav: {
      services: "Services",
      products: "Products",
      blog: "Blog",
      about: "About",
      partners: "Partners",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      eyebrow: "African Center for Research, Development & Technological Innovation",
      titleStart: "We build the technology moving ",
      titleHighlight: "Africa",
      titleEnd: " forward",
      subtitle:
        "12 areas of expertise: software development, cloud, cybersecurity, data & AI, digital marketing, robotics & drones, training and research — one technology partner, from idea to deployment.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "Explore our services",
      ctaWhatsapp: "WhatsApp",
      techPills: ["Cloud & DevOps", "Cybersecurity", "Data & AI", "Drones & Robotics"],
      reassurance: [
        "Local R&D lab in Douala",
        "Autonomous drones & AI",
        "End-to-end support",
      ],
    },
    servicesOverview: {
      eyebrow: "What we do",
      heading: "Twelve areas of expertise, one ambition: innovating from Africa",
      cta: "All our services",
      seeDetail: "See detail →",
      comboTitle: "A need that spans several pillars?",
      comboDesc: "That's our specialty: we combine these areas of expertise around a single project.",
      comboCta: "Let's talk about your project →",
    },
    deployment: {
      eyebrow: "Infrastructure",
      heading: "Deployment designed around your constraints, not the other way around",
    },
    stats: {
      pillars: "Areas of expertise",
      custom: "Tailor-made solutions",
      supervision: "Infrastructure monitoring",
      local: "African footprint",
    },
    ctaBand: {
      title: "A project in mind? Get your quote.",
      description:
        "Describe your needs in a few lines. We come back to you with an initial technical approach, a deployment plan and a quote tailored to your context.",
      button: "Request a quote",
      whatsapp: "Message us on WhatsApp",
      note: "First reply within 48 business hours.",
    },
    footer: {
      description:
        "African Center for Research, Development and Technological Innovation. We design and deploy digital solutions and field technology, built from Africa.",
      navTitle: "Navigation",
      pillarsTitle: "Areas of expertise",
      allPillars: "See all 12 pillars →",
      contactTitle: "Contact",
      addressTodo: "Address to be added",
      rights: "All rights reserved.",
      builtWith: "Designed and deployed with Next.js",
    },
    about: {
      eyebrow: "About CARDIT",
      title: "African Center for Research, Development and Technological Innovation",
      intro:
        "CARDIT supports companies, institutions and project owners in designing and deploying digital and technological solutions, from software to the field.",
      missionEyebrow: "Our mission",
      missionTitle: "Making world-class technology accessible, from Africa.",
      missionText:
        "We bring together expertise in software engineering, infrastructure, digital marketing, artificial intelligence and aerial robotics to offer end-to-end support, from research to production.",
      valuesEyebrow: "Our values",
      values: [
        {
          title: "Local grounding",
          description:
            "We design solutions adapted to African realities: connectivity, costs, data sovereignty.",
        },
        {
          title: "Technical rigor",
          description:
            "Every project is run with the rigor of a research center: solid architecture, security, documentation.",
        },
        {
          title: "Useful innovation",
          description:
            "We don't add technology for its own sake: every solution answers a concrete, measurable need.",
        },
      ],
      teamEyebrow: "The team",
      teamTitle: "The people behind CARDIT",
      teamNote: "Photos and bios to be added in lib/data.ts.",
    },
    products: {
      title: "Products built for African realities",
      intro: "Ready-to-deploy solutions, adaptable to your organization.",
      empty: "Our catalog is coming soon. In the meantime, tell us about your needs.",
      cta: "Request a demo",
      learnMore: "Learn more",
    },
    blog: {
      title: "News and insights",
      intro: "Technology, innovation and digital transformation seen from Africa.",
      empty: "The first articles are coming soon.",
      readMore: "Read the article",
      back: "All articles",
      home: "Home",
      published: "Published on",
    },
    partners: {
      eyebrow: "Our partners",
      title: "They trust us and build alongside us",
      intro:
        "CARDIT collaborates with institutions, technology companies and academic partners to drive high-impact projects.",
      note: "Add logos to /public/images/partners/ then reference them in lib/data.ts.",
      ctaTitle: "Become a CARDIT partner",
      ctaDesc: "Institution, company or research center: let's discuss possible collaborations.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      intro:
        "Tell us about your needs: our team will get back to you within 48 business hours with an initial technical approach.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      siteLabel: "Website",
      followLabel: "Follow us",
      form: {
        name: "Full name",
        email: "Email",
        company: "Company / organization",
        phone: "Phone",
        domain: "Relevant area",
        message: "Your message",
        submit: "Send message",
        sending: "Sending…",
        sentTitle: "Message sent",
        sentDesc: "Thank you, our team will get back to you within 48 business hours.",
        errorMessage: "Something went wrong. Please try again, or reach us directly by email or WhatsApp.",
      },
    },
    servicesIndex: {
      eyebrow: "Our 12 areas of expertise",
      title: "Complete technology solutions, built for Africa",
      intro:
        "From software design to infrastructure deployment, digital visibility, robotics and drones, each pillar can be mobilized alone or combined for your project. Click a pillar to see the full detail.",
    },
    serviceDetail: {
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",
      pillarOf: "Pillar",
      highlights: "Highlights",
      details: "Pillar detail",
      allPillars: "All pillars",
      ctaTitlePrefix: "A",
      ctaDesc:
        "Tell us about your needs: we'll recommend the best technical approach and a tailored deployment plan.",
    },
    langToggleLabel: "Passer en français",
    mobileBar: {
      call: "Call",
      whatsapp: "WhatsApp",
      services: "Services",
      quote: "Quote",
    },
  },
} as const;
