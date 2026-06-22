"use client"

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const skillCategories = [
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
]

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState(new Set())
  const t = useTranslations('Skills')
  const categories = t.raw('categories') as Array<{ title: string; skills: string[] }> || skillCategories

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCategories((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
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
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">{t('title')}</h2>
          <p className="mb-16 text-lg text-white/60">{t('subtitle')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category: any, index: number) => (
            <div
              key={index}
              id={`skill-${index}`}
              data-skill-category
              className={`group transform rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 hover:from-blue-500/10 ${
                visibleCategories.has(`skill-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: visibleCategories.has(`skill-${index}`) ? `${index * 80}ms` : '0ms' }}
            >
              <h3 className="mb-6 text-lg font-semibold text-white">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 transition duration-300 translate-x-0 opacity-100">
                    <span className="h-2 w-2 rounded-full bg-linear-to-r from-blue-400 to-purple-500" />
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
