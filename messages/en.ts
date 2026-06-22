export default {
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
    me: 'I\'m Minosoa',
    textContent: "Passionate about building scalable web applications. Experienced in modern web development with practical knowledge of DevOps practices and Docker. Currently pursuing a degree in Computer Science with expertise spanning Backend, Frontend, and infrastructure automation.",
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
      { label: 'Years Experience', value: '0' },
      { label: 'Projects Completed', value: '08+' },
      { label: 'Tools & Technologies', value: '15+' },
    ],
    pContent1: 'I\'m a 3rd-year Computer Science student driven by a passion for building complete web applications. I enjoy working across the full stack, from creating clean and responsive interfaces to designing APIs, handling data, and connecting the frontend with reliable backend services.',
    pContent2: 'My experience includes React, Next.js, backend development, databases, and deployment workflows. I also bring a DevOps mindset through Docker, CI/CD, and automation, which helps me build applications that are not only functional but also maintainable and scalable.',
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
        image: '/mino skincare.png',
        url: 'https://github.com/minoravelonirina/mino-skincare'
      },
      {
        title: 'Python CI/CD with GitLab and Docker',
        description:
          'Minimal Python app used to demonstrate a full GitLab CI pipeline with linting, tests, build, and containerization.',
        technologies: ['Python', 'GitLab CI', 'Docker', 'Flake8', 'Pytest'],
        image: '/pipeline CI.png',
        url: 'https://gitlab.com/mino-group/app-python'
      },
      {
        title: 'Hazavao - AI Translation App',
        description: 'Intelligent translation application integrating ChatGPT API with containerized deployment.',
        technologies: ['Java', 'ChatGPT API', 'Docker', 'Backend Integration'],
        image: '/hazavao.png',
        url: 'https://github.com/minoravelonirina/HAZAVAO-STD23013'
      },
    ],
  },
  Contact: {
    title: "Let's Talk !",
    subtitle: "I'm always open to new opportunities and collaborations. Let's connect!",
    getInTouch: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    thanks: "Thanks for reaching out! I'll get back to you soon.",
    phone: 'Phone',
    location: 'Location',
    connect: 'Connect with me',
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