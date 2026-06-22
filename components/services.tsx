"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'



export default function Services() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const t = useTranslations('Services')
  const items = (t.raw('items') as Array<{ title: string; description: string; image: string }>) || []

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 }
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
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">{t('title')}</h2>
          <p className="mb-16 text-lg text-white/60">{t('subtitle')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((service: any, index: number) => (
            <div
              key={index}
              id={`service-${index}`}
              data-service-card
              className={`group transform rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 hover:from-blue-500/10 ${
                visibleCards.has(`service-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: visibleCards.has(`service-${index}`) ? `${index * 100}ms` : '0ms' }}
            >
              <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={480}
                  height={320}
                  className="aspect-3/2 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
