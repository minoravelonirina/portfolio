'use client'

import { useState, useEffect } from 'react'

const services = [
  {
    title: 'Full Stack Development',
    description: 'Building complete web applications with modern frontend frameworks and scalable backend solutions.',
    icon: '🚀',
    details: ['React & Next.js', 'Node.js & Java', 'API Design', 'Database Architecture'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Designing and deploying scalable cloud architectures on AWS and GCP with best practices.',
    icon: '☁️',
    details: ['AWS (EC2, RDS, S3)', 'Google Cloud Platform', 'Cloud Security', 'Cost Optimization'],
  },
  {
    title: 'DevOps & Automation',
    description: 'Creating robust CI/CD pipelines and containerized solutions with Docker and Kubernetes.',
    icon: '⚙️',
    details: ['Docker & Kubernetes', 'GitLab CI/CD', 'ArgoCD', 'Infrastructure as Code'],
  },
  {
    title: 'System Administration',
    description: 'Managing Linux systems, monitoring, and ensuring optimal performance and security.',
    icon: '🔧',
    details: ['Linux Administration', 'System Monitoring', 'Security Hardening', 'Performance Tuning'],
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-service-card]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative bg-black py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Services</h2>
          <p className="mb-16 text-lg text-white/60">Comprehensive solutions for modern development challenges</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              id={`service-${index}`}
              data-service-card
              className={`group transform rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 hover:from-blue-500/10 translate-y-0 opacity-100 ${
                visibleCards.has(`service-${index}`)
                  ? 'translate-y-0'
                  : ''
              }`}
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mb-6 text-white/60">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
