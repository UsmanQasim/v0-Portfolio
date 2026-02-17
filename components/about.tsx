"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Me</h2>
            <div className="w-12 h-1 bg-accent mb-8 rounded-full" />
          </div>

          <div ref={contentRef} className="space-y-6 text-lg text-foreground/80 opacity-0">
            <p className="leading-relaxed">
              I'm a passionate Full Stack Developer with 5+ years of hands-on experience architecting scalable,
              performant web applications that drive business impact. Currently serving as Frontend Lead at{" "}
              <span className="text-accent font-medium">Forthlogic AI</span>, where I'm pioneering Agentic AI systems
              and designing cloud-native solutions.
            </p>

            <p className="leading-relaxed">
              My journey spans fintech, healthcare, and streaming platforms—delivering enterprise-grade solutions across
              the entire stack. I specialize in Next.js, React, and ASP.NET Core ecosystems, with deep expertise in
              performance optimization, cloud infrastructure (AWS EC2, Azure), and mentoring high-performing engineering
              teams.
            </p>

            <p className="leading-relaxed">
              What drives me is building products that matter. I'm obsessed with clean architecture, maintainable code,
              and fostering collaborative engineering cultures. Whether it's architecting complex systems, leading
              technical initiatives, or mentoring junior developers—I bring strategic thinking and execution excellence
              to every project.
            </p>

            <div className="pt-6">
              <p className="text-sm text-foreground/60 mb-4">Key Focus Areas:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground/80">Agentic AI & LLM Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground/80">Frontend Architecture & Design Systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground/80">Cloud Infrastructure & DevOps</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground/80">Team Leadership & Engineering Excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
