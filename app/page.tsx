import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
