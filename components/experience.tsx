"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    title: "Frontend Lead | Full Stack Developer",
    company: "Forthlogic AI",
    period: "2024/08 – Present",
    location: "Remote, USA",
    duration: "6 months",
    description:
      "Leading frontend architecture and development for AI-powered enterprise solutions. Architecting Agentic AI systems with Node.js backends and cloud infrastructure. Mentoring engineers and establishing engineering best practices.",
    highlights: ["Agentic AI", "Next.js", "Node.js", "AWS EC2", "Team Leadership", "Architecture"],
  },
  {
    title: "Frontend Developer - React/Next.js",
    company: "A3E Systems",
    period: "2024/08 – 2025/02",
    location: "Remote",
    duration: "7 months",
    description:
      "Developed reusable and responsive UI components using Tailwind CSS and TypeScript. Integrated React Query for efficient server-state handling and focused on UI/UX improvements and codebase maintainability.",
    highlights: ["React Query", "TypeScript", "Tailwind CSS", "Component Design"],
  },
  {
    title: "Frontend Engineer - React/Next.js",
    company: "Whetstonez PVT LTD",
    period: "2023/06 – 2024/06",
    location: "Lahore, Pakistan",
    duration: "1 year",
    description:
      "Built a real-time game streaming platform with Next.js and Tailwind CSS. Delivered feature-rich, mobile-first UIs and collaborated with designers and backend engineers on MavenX.gg.",
    highlights: ["Next.js", "Real-time Features", "Mobile-first", "Recharts"],
  },
  {
    title: "Full Stack Developer - React | ASP.NET Core",
    company: "Route Trading LTD",
    period: "2021/05 – 2023/04",
    location: "Remote, UK",
    duration: "2 years",
    description:
      "Transitioned from Trainee to Full Stack Developer leading initiatives in healthcare and fintech apps. Delivered high-quality code on both frontend (React, Next.js) and backend (ASP.NET Core, SQL Server).",
    highlights: ["React", "ASP.NET Core", "SQL Server", "Fintech", "Healthcare"],
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
