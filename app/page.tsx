import { About } from '@/components/portfolio/about'
import { Certifications } from '@/components/portfolio/certifications'
import { Contact } from '@/components/portfolio/contact'
import { Education } from '@/components/portfolio/education'
import { Footer } from '@/components/portfolio/footer'
import { Hero } from '@/components/portfolio/hero'
import { Journey } from '@/components/portfolio/journey'
import { Navbar } from '@/components/portfolio/navbar'
import { Projects } from '@/components/portfolio/projects'
import { Resume } from '@/components/portfolio/resume'
import { Skills } from '@/components/portfolio/skills'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
