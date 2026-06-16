'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black pt-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-purple-900/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="transform transition duration-1000 translate-y-0 opacity-100">
            <p className="mb-2 text-sm text-blue-400">Welcome to my portfolio</p>
            <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl">
              I&apos;m Minosoa <br />
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              Passionate about building scalable web applications. 
              Experienced in modern web development with practical knowledge of DevOps practices and Docker. 
              Currently pursuing a degree in Computer Science with expertise spanning Backend, 
              Frontend, and infrastructure automation.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/CV_Minosoa_RAVELONIRINA.pdf"
                download
                className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95"
              >
                Download CV
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6">
              <a
                href="https://www.linkedin.com/in/minosoa-ravelonirina-413b70303/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://github.com/minoravelonirina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:minoravelonirina@gmail.com"
                className="text-white/60 transition hover:text-white"
                aria-label="Email"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="transform transition duration-1000 delay-300 translate-y-0 opacity-100">
            <div className="relative mx-auto flex h-96 w-80 items-center justify-center sm:h-96 sm:w-96">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/30" />
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-600/20 to-purple-600/20 blur opacity-0 transition duration-1000" />

              <Image
                src="/profile.png"
                alt="Minosoa Ravelonirina"
                width={320}
                height={400}
                className="relative z-10 h-full w-full object-contain object-center drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
