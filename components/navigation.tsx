'use client'

import { useState, type CSSProperties, type MouseEvent } from 'react'

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
]

type NavMenuButtonProps = {
  label: string
  sectionId: string
  isMobile?: boolean
  onSelect: (id: string) => void
}

function NavMenuButton({ label, sectionId, isMobile = false, onSelect }: NavMenuButtonProps) {
  const updateUnderline = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const cursorX = event.clientX - rect.left
    const width = Math.min(Math.max((cursorX / rect.width) * 100, 18), 100)

    event.currentTarget.style.setProperty('--underline-width', `${width}%`)
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(sectionId)}
      onFocus={(event) => event.currentTarget.style.setProperty('--underline-width', '100%')}
      onMouseMove={updateUnderline}
      onMouseLeave={(event) => event.currentTarget.style.setProperty('--underline-width', '0%')}
      style={{ '--underline-width': '0%' } as CSSProperties}
      className={`group relative pb-2 text-sm text-white/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none ${
        isMobile ? 'block w-full text-left' : ''
      }`}
    >
      <span>{label}</span>
      <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-(--underline-width) rounded-full bg-white opacity-0 transition-[width,opacity] duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
    </button>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (!element) return

    setIsOpen(false)

    const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 0
    const elementTop = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: Math.max(elementTop - navHeight, 0),
      behavior: 'smooth',
    })
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <span className="text-sm font-bold text-white">MR</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <NavMenuButton
              key={item.id}
              label={item.label}
              sectionId={item.id}
              onSelect={scrollToSection}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="/CV_Minosoa_RAVELONIRINA.pdf"
            download
            className="hidden rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 sm:inline-block"
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/80 px-4 py-4 md:hidden">
          <div className="space-y-3">
            {navItems.map((item) => (
              <NavMenuButton
                key={item.id}
                label={item.label}
                sectionId={item.id}
                isMobile
                onSelect={scrollToSection}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
