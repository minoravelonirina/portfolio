export default {
  HomePage: {
    title: 'Welcome',
    cta: 'Get started',
  },
  Nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
  },
  Hero: {
    welcome: "Welcome to my portfolio",
    role: 'Full Stack Developer',
    downloadCv: 'Download CV',
    getInTouch: 'Get in Touch',
  },
  About: {
    title: 'About Me',
    subtitle: 'Passionate computer science student focused on full-stack development and modern web applications',
    approachTitle: 'My Approach',
    approach: [
      {
        number: '01',
        title: 'Understand the Product',
        description: 'Clarify user needs, business goals, and technical constraints before designing the right solution.',
      },
      {
        number: '02',
        title: 'Build Clean Interfaces',
        description: 'Create responsive and accessible frontend experiences with React, Next.js, and modern UI practices.',
      },
      {
        number: '03',
        title: 'Connect Reliable Systems',
        description: 'Develop APIs, database integrations, and backend features that make applications stable and useful.',
      },
    ],
    stats: [
      { label: 'Years Experience', value: '~03' },
      { label: 'Projects Completed', value: '08+' },
      { label: 'Tools & Technologies', value: '15+' },
    ],
  },
  Projects: {
    featured: 'Featured Projects',
    description: 'Real-world implementations demonstrating my expertise',
    items: [
      {
        title: 'Mino Skincare',
        description:
          'Full-stack skincare E-commerce application combining a brand showcase website with product catalog, authentication, cart management, orders, and a documented REST API.',
        technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Docker', 'OpenAPI'],
        highlights: [
          'Responsive product catalog',
          'JWT authentication',
          'Cart and order management',
          'Prisma data modeling',
          'OpenAPI documentation',
        ],
      },
      {
        title: 'Python CI/CD with GitLab and Docker',
        description:
          'Minimal Python app used to demonstrate a full GitLab CI pipeline with linting, tests, build, and containerization.',
        technologies: ['Python', 'GitLab CI', 'Docker', 'Flake8', 'Pytest'],
        highlights: [
          'Three-stage GitLab CI: lint, test, build',
          'Static code analysis before merge',
          'Unit tests with Pytest',
          'Automated Docker image build',
        ],
      },
      {
        title: 'Hazavao - AI Translation App',
        description: 'Intelligent translation application integrating ChatGPT API with containerized deployment.',
        technologies: ['Java', 'ChatGPT API', 'Docker', 'Backend Integration'],
        highlights: ['API integration', 'Container packaging', 'Streamed data handling'],
      },
    ],
  },
  Contact: {
    title: "Let's Talk",
    subtitle: "I'm always open to new opportunities and collaborations. Let's connect!",
    getInTouch: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    thanks: "Thanks for reaching out! I'll get back to you soon.",
  },
  Services: {
    title: 'Services',
    subtitle: 'Focused solutions across web development, backend systems, and deployment automation',
    items: [
      {
        title: 'Frontend Development',
        description: 'Creating responsive, accessible, and polished interfaces with modern web technologies.',
        image: '/frontend.jpg',
      },
      {
        title: 'Backend Development',
        description: 'Building reliable APIs, server-side features, and data flows for scalable applications.',
        image: '/backend.jpg',
      },
      {
        title: 'DevOps & Automation',
        description: 'Automating deployment workflows and preparing applications for cloud-native environments.',
        image: '/devops.jpg',
      },
    ],
  },
  Skills: {
    title: 'Skills & Expertise',
    subtitle: 'A comprehensive toolkit for building modern, scalable applications',
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
    copyright: '© 2024 Minosoa Ravelonirina. All rights reserved. Built with Next.js, React & Tailwind CSS.',
  },
} as const