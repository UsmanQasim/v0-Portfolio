"use client"

import { useEffect, useRef } from "react"

const projects = [
  {
    title: "Chatley AI",
    description:
      "Advanced Agentic AI platform leveraging LLM integrations for intelligent automation. Architected with Next.js, Node.js, and cloud infrastructure. Implemented complex AI workflows and real-time data processing with performance optimization at scale.",
    tags: ["Agentic AI", "Next.js", "Node.js", "Amazon EC2", "LLM Integration", "Real-time Data"],
    period: "2024 – Present",
    impact: "AI Platform",
    link: "https://www.chatley.ai/",
  },
  {
    title: "MavenX.gg",
    description:
      "Game streaming platform (Twitch-like) with real-time streaming and analytics. Built UI with Next.js and Tailwind CSS, implemented data visualization via Recharts to boost user engagement.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Recharts", "Microservices"],
    period: "2023 – 2024",
    impact: "KSA Market",
  },
  {
    title: "Money Router (MR)",
    description:
      "Fintech application with comprehensive financial management. Led frontend overhaul to Next.js improving load times and UI consistency. Built reusable components and optimized performance across the platform.",
    tags: ["Next.js", "React Query", "Node.js", "Tailwind CSS", "Performance"],
    period: "2022 – 2023",
    impact: "Enterprise Fintech",
  },
  {
    title: "General Practitioner (GP)",
    description:
      "Healthcare platform with form-driven, responsive UI. Developed secure API integration, implemented role-based routing and form validation with Yup. Focused on accessibility and user experience.",
    tags: ["React.js", "Material UI", "Redux", ".NET Core", "Healthcare"],
    period: "2021 – 2023",
    impact: "Healthcare Platform",
  },
]

export default function Projects() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in")
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
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
        <div className="w-12 h-1 bg-accent mb-16 rounded-full" />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className="opacity-0 group p-8 rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:bg-card/50 hover:shadow-lg hover:shadow-accent/10 flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors flex-1">{project.title}</h3>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                  {project.period}
                </span>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed flex-1">{project.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-foreground/60">Impact:</span>
                  <span className="text-sm font-medium text-accent">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-sm text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
