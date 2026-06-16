'use client'

import { useState, useEffect } from 'react'

const skillCategories = [
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Java', 'Python', 'Express.js', 'API Design', 'REST APIs'],
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitLab CI', 'ArgoCD', 'Jenkins', 'Helm'],
  },
  {
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'MySQL', 'Git', 'Linux', 'Jenkins', 'Docker Compose', 'AWS Services'],
  },
]

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCategories((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-skill-category]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative bg-black py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Skills & Expertise</h2>
          <p className="mb-16 text-lg text-white/60">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              id={`skill-${index}`}
              data-skill-category
              className={`group transform rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 hover:from-blue-500/10 translate-y-0 opacity-100`}
            >
              <h3 className="mb-6 text-lg font-semibold text-white">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 transition duration-300 translate-x-0 opacity-100"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    <span className="text-sm text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
