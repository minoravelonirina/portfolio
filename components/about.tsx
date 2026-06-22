"use client"

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const stats = [
  { label: 'Years Experience', value: '~03' },
  { label: 'Projects Completed', value: '08+' },
  { label: 'Tools & Technologies', value: '15+' },
]

const approach = [
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
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('About')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative bg-black py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">{t('title')}</h2>
          <p className="text-lg text-white/60">{t('subtitle')}</p>
        </div>

        <div className="mb-20 rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-8 sm:p-12">
          <p className="mb-6 text-lg leading-relaxed text-white/80">
            I&apos;m a 3rd-year Computer Science student driven by a passion for building complete web applications.
            I enjoy working across the full stack, from creating clean and responsive interfaces to designing APIs,
            handling data, and connecting the frontend with reliable backend services.
          </p>
          <p className="text-lg leading-relaxed text-white/80">
            My experience includes React, Next.js, backend development, databases, and deployment workflows. I also
            bring a DevOps mindset through Docker, CI/CD, and automation, which helps me build applications that are
            not only functional, but also easier to deploy, maintain, and improve.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">{t('approachTitle')}</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`transform rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 ${
                  isVisible ? `translate-y-0 opacity-100 delay-${index * 100}` : 'translate-y-10 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="mb-4 text-4xl font-bold text-blue-500">{t(`approach.${index}.number`)}</div>
                <h4 className="mb-3 text-lg font-semibold text-white">{t(`approach.${index}.title`)}</h4>
                <p className="text-white/60">{t(`approach.${index}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`transform rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-8 text-center transition duration-500 hover:border-blue-500/50 ${
                isVisible ? `translate-y-0 opacity-100 delay-${(index + 3) * 100}` : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
              }}
            >
              <div className="mb-3 text-4xl font-bold text-blue-500">{t(`stats.${index}.value`)}</div>
              <p className="text-white/60">{t(`stats.${index}.label`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
