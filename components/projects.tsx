'use client'

import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Highly Available WordPress',
    description: 'Complete containerization and deployment of WordPress with automated CI/CD pipeline.',
    technologies: ['Docker', 'GitLab CI', 'WordPress', 'Docker Compose'],
    highlights: ['Automated Build & Test', 'Multi-environment Setup', 'Reproducible Infrastructure'],
    icon: '📱',
  },
  {
    title: 'Cloud OwnCloud Deployment',
    description: 'Scalable cloud architecture deployment on AWS with database externalization.',
    technologies: ['AWS', 'EC2', 'RDS', 'S3', 'MySQL'],
    highlights: ['Auto-scaling', 'Database Backup', 'Cloud Storage Integration'],
    icon: '☁️',
  },
  {
    title: 'Marina - AI Translation App',
    description: 'Intelligent translation application integrating ChatGPT API with containerized deployment.',
    technologies: ['Java', 'ChatGPT API', 'Docker', 'Backend Integration'],
    highlights: ['API Integration', 'Container Packaging', 'Data Stream Management'],
    icon: '🤖',
  },
  {
    title: 'PicoCTF 2026 Challenge',
    description: 'Cybersecurity challenge completion with custom automation scripts.',
    technologies: ['Python', 'Scripting', 'Security Analysis', 'Linux'],
    highlights: ['Custom Automation', 'Vulnerability Analysis', 'System Hardening'],
    icon: '🔐',
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
              className={`group transform rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 hover:from-blue-500/10 translate-y-0 opacity-100`}
            >
              <div className="mb-4 text-5xl">{project.icon}</div>
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
