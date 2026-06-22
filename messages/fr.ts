import { url } from "inspector/promises";

export default {
  Nav: {
    home: 'Accueil',
    services: 'Services',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
  },
  Hero: {
    welcome: "Bienvenue sur mon portfolio",
    role: 'Développeuse Full Stack',
    downloadCv: 'Télécharger le CV',
    getInTouch: 'Contactez-moi',
    me: 'Je suis Minosoa',
    textContent: "Passionnée par la création d'applications web scalables. Expérimentée dans le développement web moderne avec des connaissances pratiques des pratiques DevOps et de Docker. Actuellement en cours d'obtention d'un diplôme en informatique avec une expertise couvrant le Backend, le Frontend et l'automatisation de l'infrastructure.",
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
      { label: 'Années d\'expérience', value: '0' },
      { label: 'Projets terminés', value: '08+' },
      { label: 'Outils & Technologies', value: '15+' },
    ],
    pContent1: "Je suis une étudiante en informatique de 3ème année animée par une passion pour la création d'applications web complètes. J'aime travailler sur l'ensemble du stack, de la création d'interfaces propres et responsives à la conception d'APIs, en passant par la gestion des données et la connexion du frontend avec des services backend fiables.",
    pContent2: "Mon expérience inclut React, Next.js, le développement backend, les bases de données et les workflows de déploiement. J'apporte également une mentalité DevOps à travers Docker, CI/CD et l'automatisation, ce qui m'aide à construire des applications qui sont non seulement fonctionnelles mais aussi maintenables et scalables.",
  },
  Projects: {
    featured: 'Mes Projets',
    description: "Implémentations réelles démontrant mon expertise",
    items: [
      {
        title: 'Mino Skincare',
        description:
          "Application e-commerce complète pour les soins de la peau combinant site vitrine, catalogue produit, authentification, gestion du panier, commandes et API REST documentée.",
        technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Docker', 'OpenAPI'],
        image: '/mino skincare.png',
        url: 'https://github.com/minoravelonirina/mino-skincare'
      },
      
      {
        title: 'CI/CD Python avec GitLab et Docker',
        description:
          "Application Python minimale servant de support à une pipeline GitLab CI complète avec lint, tests, build et conteneurisation.",
        technologies: ['Python', 'GitLab CI', 'Docker', 'Flake8', 'Pytest'],
        image: '/pipeline CI.png',
        url: 'https://gitlab.com/mino-group/app-python'
      },
      {
        title: 'Hazavao - Application de traduction IA',
        description: "Application de traduction intelligente intégrant l'API ChatGPT et un déploiement conteneurisé.",
        technologies: ['Java', 'ChatGPT API', 'Docker', 'Intégration backend'],
        image: '/hazavao.png',
        url: 'https://github.com/minoravelonirina/HAZAVAO-STD23013'
      },
    ],
  },
  Contact: {
    title: "Parlons-en !",
    subtitle: "Je suis toujours ouvert à de nouvelles opportunités et collaborations. Entrons en contact !",
    getInTouch: 'Entrer en contact',
    name: 'Nom',
    email: 'E-mail',
    message: 'Message',
    send: 'Envoyer le message',
    sending: 'Envoi...',
    thanks: "Merci pour votre message ! Je vous répondrai bientôt.",
    phone: 'Téléphone',
    location: "Résidense",
    connect: 'Connectez-vous',
  },
  Services: {
    title: 'Services',
    subtitle: "Solutions ciblées en développement web, systèmes backend, et automatisation de déploiement",
    items: [
      {
        title: 'Développement Frontend',
        description: "Création d'interfaces responsives, accessibles et soignées avec les technologies web modernes.",
        image: '/frontend.jpg',
      },
      {
        title: 'Développement Backend',
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
        title: 'Développement Backend',
        skills: ['Node.js', 'Java', 'Python', 'Express.js', 'API Design', 'REST APIs'],
      },
      {
        title: 'Développement Frontend',
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