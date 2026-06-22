export default {
  HomePage: {
    title: 'Bienvenue',
    cta: 'Commencer',
  },
  Nav: {
    home: 'Accueil',
    services: 'Services',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
  },
  Hero: {
    welcome: "Bienvenue sur mon portfolio",
    role: 'Développeur Full Stack',
    downloadCv: 'Télécharger le CV',
    getInTouch: 'Contactez-moi',
  },
  About: {
    title: 'À propos de moi',
    subtitle: 'Étudiant en informatique passionné par le développement full-stack et les applications web modernes',
    approachTitle: 'Mon approche',
    approach: [
      {
        number: '01',
        title: 'Comprendre le produit',
        description: 'Clarifier les besoins utilisateurs, objectifs métier et contraintes techniques avant de concevoir la bonne solution.',
      },
      {
        number: '02',
        title: 'Construire des interfaces propres',
        description: "Créer des interfaces frontend responsives et accessibles avec React, Next.js et de bonnes pratiques UI.",
      },
      {
        number: '03',
        title: 'Connecter des systèmes fiables',
        description: "Développer des APIs, intégrations de bases de données et fonctionnalités backend rendant les applications stables et utiles.",
      },
    ],
    stats: [
      { label: 'Années d\'expérience', value: '~03' },
      { label: 'Projets terminés', value: '08+' },
      { label: 'Outils & Technologies', value: '15+' },
    ],
  },
  Projects: {
    featured: 'Projets en vedette',
    description: "Implémentations réelles démontrant mon expertise",
    items: [
      {
        title: 'Mino Skincare',
        description:
          "Application e-commerce complète pour les soins de la peau combinant site vitrine, catalogue produit, authentification, gestion du panier, commandes et API REST documentée.",
        technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Docker', 'OpenAPI'],
        highlights: [
          'Catalogue produit responsive',
          'Authentification JWT',
          'Gestion du panier et des commandes',
          'Modélisation Prisma',
          'Documentation OpenAPI',
        ],
      },
      {
        title: 'CI/CD Python avec GitLab et Docker',
        description:
          "Application Python minimale servant de support à une pipeline GitLab CI complète avec lint, tests, build et conteneurisation.",
        technologies: ['Python', 'GitLab CI', 'Docker', 'Flake8', 'Pytest'],
        highlights: [
          'Pipeline GitLab CI en trois stages : lint, test, build',
          'Analyse statique du code avant merge',
          "Tests unitaires avec Pytest",
          "Construction automatique de l'image Docker",
        ],
      },
      {
        title: 'Hazavao - Application de traduction IA',
        description: "Application de traduction intelligente intégrant l'API ChatGPT et un déploiement conteneurisé.",
        technologies: ['Java', 'ChatGPT API', 'Docker', 'Intégration backend'],
        highlights: ['Intégration API', 'Packaging conteneur', 'Gestion de flux de données'],
      },
    ],
  },
  Contact: {
    title: "Parlons",
    subtitle: "Je suis toujours ouvert à de nouvelles opportunités et collaborations. Entrons en contact !",
    getInTouch: 'Entrer en contact',
    name: 'Nom',
    email: 'E-mail',
    message: 'Message',
    send: 'Envoyer le message',
    sending: 'Envoi...',
    thanks: "Merci pour votre message ! Je vous répondrai bientôt.",
  },
  Services: {
    title: 'Services',
    subtitle: "Solutions ciblées en développement web, systèmes backend, et automatisation de déploiement",
    items: [
      {
        title: 'Frontend Development',
        description: "Création d'interfaces responsives, accessibles et soignées avec les technologies web modernes.",
        image: '/frontend.jpg',
      },
      {
        title: 'Backend Development',
        description: "Construire des APIs fiables, des fonctionnalités server-side et des flux de données pour des applications scalables.",
        image: '/backend.jpg',
      },
      {
        title: 'DevOps & Automation',
        description: "Automatiser les workflows de déploiement et préparer les applications pour des environnements cloud-native.",
        image: '/devops.jpg',
      },
    ],
  },
  Skills: {
    title: 'Compétences & Expertise',
    subtitle: "Une boîte à outils complète pour construire des applications modernes et scalables",
    categories: [
      {
        title: 'Backend Development',
        skills: ['Node.js', 'Java', 'Python', 'Express.js', 'API Design', 'REST APIs'],
      },
      {
        title: 'Frontend Development',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
      },
      {
        title: 'Cloud & DevOps',
        skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitLab CI', 'Terraform'],
      },
      {
        title: 'Databases & Tools',
        skills: ['PostgreSQL', 'MySQL', 'Git', 'Linux', 'Figma'],
      },
    ],
  },
  Footer: {
    copyright: '© 2024 Minosoa Ravelonirina. Tous droits réservés. Construit avec Next.js, React & Tailwind CSS.',
  },
} as const