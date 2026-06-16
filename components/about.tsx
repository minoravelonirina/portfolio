'use client'

import { useState, useEffect } from 'react'

const stats = [
  { label: 'Years Experience', value: '03' },
  { label: 'Projects Completed', value: '08+' },
  { label: 'Technologies Mastered', value: '20+' },
]

const approach = [
  {
    number: '01',
    title: 'Understand Requirements',
    description: 'Deep dive into your business needs and technical requirements to design the perfect solution.',
  },
  {
    number: '02',
    title: 'Scalable Architecture',
    description: 'Design cloud-native solutions that scale with your business while maintaining performance.',
  },
  {
    number: '03',
    title: 'Automation First',
    description: 'Implement robust CI/CD pipelines and infrastructure automation for seamless deployments.',
  },
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

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
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">About Me</h2>
          <p className="text-lg text-white/60">
            Passionate computer science student specializing in DevOps, cloud architecture, and full-stack development
          </p>
        </div>

        <div className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 sm:p-12">
          <p className="mb-6 text-lg leading-relaxed text-white/80">
            I&apos;m a 3rd-year Computer Science student driven by a passion for building scalable, cloud-native
            applications. With hands-on experience in containerization, orchestration, and CI/CD automation, I combine
            frontend expertise with robust backend architecture and infrastructure automation to deliver complete
            solutions.
          </p>
          <p className="text-lg leading-relaxed text-white/80">
            My journey spans from automating deployment pipelines to designing highly available systems on cloud
            platforms. I&apos;m excited to contribute to a team where I can apply my DevOps mindset to real-world
            challenges and continue growing as a full-stack developer.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-center text-2xl font-bold text-white">My Approach</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {approach.map((item, index) => (
              <div
                key={index}
                className={`transform rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 transition duration-500 hover:border-blue-500/50 ${
                  isVisible ? `translate-y-0 opacity-100 delay-${index * 100}` : 'translate-y-10 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="mb-4 text-4xl font-bold text-blue-500">{item.number}</div>
                <h4 className="mb-3 text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 text-center transition duration-500 hover:border-blue-500/50 ${
                isVisible ? `translate-y-0 opacity-100 delay-${(index + 3) * 100}` : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
              }}
            >
              <div className="mb-3 text-4xl font-bold text-blue-500">{stat.value}</div>
              <p className="text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
