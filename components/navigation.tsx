'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm text-white/80 transition hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm text-white/80 transition hover:text-white"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-white/80 transition hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm text-white/80 transition hover:text-white"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm text-white/80 transition hover:text-white"
          >
            Projects
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://blobs.vusercontent.net/blob/CV_Minosoa_RAVELONIRINA_Final%20%281%29-fjPz4XduiOYqluKt4QV6FF6fcN8bhB.pdf"
            download
            className="hidden rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 sm:inline-block"
          >
            Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
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
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-sm text-white/80 transition hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-sm text-white/80 transition hover:text-white"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm text-white/80 transition hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-sm text-white/80 transition hover:text-white"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-sm text-white/80 transition hover:text-white"
            >
              Projects
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
