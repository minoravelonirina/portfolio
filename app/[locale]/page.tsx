import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="bg-black">
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
