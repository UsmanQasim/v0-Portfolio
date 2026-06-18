"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    title: "Development Head",
    company: "Forthlogic AI",
    period: "07/2025 – Present",
    location: "Remote, USA",
    duration: "Current",
    description:
      "Leading a distributed engineering team with 5+ developers. Developed live call streaming and SMS features for AI voice agents. Reduced production bugs by 25% through improved CI/CD processes. Integrated AI SDK for tool calling and implemented guardrails. Drove revenue-generating strategies and cost optimization.",
    highlights: ["Team Leadership", "Live Call Streaming", "AI SDK", "CI/CD", "Guardrails"],
  },
  {
    title: "Frontend Developer - React/Next.js",
    company: "A3E Systems",
    period: "08/2024 – 02/2025",
    location: "Remote",
    duration: "6 months",
    description:
      "Built 40+ reusable UI components reducing frontend dev time by 35%. Implemented React Query caching and optimistic updates, reducing API requests by 30%. Optimized frontend data flow and refactored shared components across modules.",
    highlights: ["React Query", "Component Architecture", "Tailwind CSS", "Performance"],
  },
  {
    title: "Frontend Lead & Full Stack Developer",
    company: "MTBS Route Trading",
    period: "01/2021 – 07/2025",
    location: "Remote, UK",
    duration: "4.5 years",
    description:
      "Led frontend architecture for enterprise web solutions using Next.js and ASP.NET backends. Mentored junior developers and conducted code reviews. Implemented advanced caching reducing data retrieval times by 70%. Collaborated with UI/UX and QA teams on scalable features.",
    highlights: ["Next.js", "Team Mentorship", "Caching Optimization", "ASP.NET", "Architecture"],
  },
  {
    title: "Bachelor of Computer Science",
    company: "PMAS University, Rawalpindi",
    period: "Graduated",
    location: "Rawalpindi",
    duration: "4 years",
    description:
      "Team project leader and teaching assistant for core courses. Participated in tech seminars and hackathons. Built strong foundation in software engineering, data structures, and system design.",
    highlights: ["Project Leadership", "Teaching Assistant", "System Design", "Academics"],
  },
]

export default function Experience() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Experience</h2>
        <div className="w-12 h-1 bg-accent mb-16 rounded-full" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className="opacity-0 group p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:bg-card/50"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <p className="text-accent font-medium">{exp.company}</p>
                    <span className="text-foreground/60 text-sm">•</span>
                    <p className="text-foreground/70 text-sm">{exp.location}</p>
                  </div>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-foreground/70 text-sm whitespace-nowrap">{exp.period}</p>
                  <p className="text-xs text-accent/70 mt-1">{exp.duration}</p>
                </div>
              </div>

              <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-sm text-accent"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
