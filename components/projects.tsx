'use client'

import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Python CI/CD avec GitLab et Docker',
    description:
      'Application Python volontairement minimale servant de support a une pipeline CI/CD complete sur GitLab CI, avec lint, tests, build et conteneurisation Docker.',
    technologies: ['Python', 'GitLab CI', 'Docker', 'Flake8', 'Pytest'],
    highlights: [
      'Pipeline GitLab CI en trois stages: lint, test, build',
      'Analyse statique du code Python avant validation',
      'Execution des tests unitaires avec Pytest',
      'Construction automatique de l image Docker',
    ],
    icon: 'CI',
  },
  {
    title: 'Mino Skincare',
    description:
      'Full-stack skincare E-commerce application combining a brand showcase website with product catalog, authentication, cart management, orders, and a documented REST API.',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Docker', 'OpenAPI'],
    highlights: [
      'Catalogue produit responsive',
      'Authentification JWT',
      'Gestion du panier et des commandes',
      'Modelisation Prisma',
      'Documentation OpenAPI',
    ],
    icon: 'EC',
  },
  {
    title: 'Hazavao - AI Translation App',
    description: 'Intelligent translation application integrating ChatGPT API with containerized deployment.',
    technologies: ['Java', 'ChatGPT API', 'Docker', 'Backend Integration'],
    highlights: ['API Integration', 'Container Packaging', 'Data Stream Management'],
    icon: 'AI',
  },
  {
    title: 'PicoCTF 2026 Challenge',
    description: 'Cybersecurity challenge completion with custom automation scripts.',
    technologies: ['Python', 'Scripting', 'Security Analysis', 'Linux'],
    highlights: ['Custom Automation', 'Vulnerability Analysis', 'System Hardening'],
    icon: 'CTF',
  },
]

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-project]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative bg-black py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Featured Projects</h2>
          <p className="mb-16 text-lg text-white/60">Real-world implementations demonstrating my expertise</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              id={`project-${index}`}
              data-project
              className="group transform rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 hover:from-blue-500/10 translate-y-0 opacity-100"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-sm font-bold text-blue-300">
                {project.icon}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mb-6 text-white/70">{project.description}</p>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-blue-400">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="h-1 w-1 rounded-full bg-blue-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
