'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'


export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set())
  const t = useTranslations('Projects')
  const items = t.raw('items') as Array<{ title: string; description: string; technologies: string[]; highlights: string[]; image: string; url: string }> || []

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
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
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">{t('featured')}</h2>
          <p className="mb-16 text-lg text-white/60">{t('description')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((
            project: { title: string; 
                      description: string; 
                      technologies: string[]; 
                      highlights: string[]; 
                      image: string; 
                      url: string 
                    }, index: number) => (
            <div
              key={index}
              id={`project-${index}`}
              data-project
              className={`group transform rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 hover:from-blue-500/10 ${
                visibleProjects.has(`project-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: visibleProjects.has(`project-${index}`) ? `${index * 100}ms` : '0ms' }}
            >
              <div className="mb-6 overflow-hidden rounded-xl border border-white/5 bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={320}
                  className="aspect-3/2 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mb-6 text-white/70">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button className="absolute right-5 bottom-3" variant={'secondary'} size="lg">
                <a
                  href={project.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition hover:text-white"
                  aria-label="Repository"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
