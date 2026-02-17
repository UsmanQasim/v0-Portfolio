"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Frontend & AI",
    icon: "⚡",
    skills: ["Next.js", "React.js", "TypeScript", "Agentic AI", "LLM Integration", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend & Cloud",
    icon: "🔧",
    skills: ["Node.js", "ASP.NET Core", "Express.js", "Amazon EC2", "Azure", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Database & State",
    icon: "📊",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "React Query", "Redux Toolkit", "Firebase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "DevOps & Testing",
    icon: "🚀",
    skills: ["Azure DevOps", "AWS", "Docker", "Jest", "Playwright", "Selenium", "CI/CD"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Leadership & Design",
    icon: "👥",
    skills: [
      "Team Mentorship",
      "Code Review",
      "Architecture Design",
      "Design Systems",
      "Agile",
      "Technical Leadership",
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Visualization & Tools",
    icon: "🎨",
    skills: ["Recharts", "Framer Motion", "Material UI", "Shadcn UI", "REST APIs", "Microservices"],
    color: "from-yellow-500 to-orange-500",
  },
]

export default function Skills() {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-accent mb-8 rounded-full" />
          <p className="text-lg text-foreground/80 max-w-2xl">
            A comprehensive toolkit built over 5+ years, specializing in Agentic AI, cloud infrastructure, and
            full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                categoryRefs.current[index] = el
              }}
              className="opacity-0 group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl`}
              />

              {/* Card with epic border and glow effect */}
              <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-accent/50 bg-card/30 backdrop-blur-sm transition-all duration-500 group-hover:bg-card/60 group-hover:shadow-2xl group-hover:shadow-accent/20">
                {/* Top accent line that expands on hover */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent rounded-t-2xl w-0 group-hover:w-full transition-all duration-500" />

                {/* Icon and category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                {/* Skills grid with staggered animation on hover */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 group/skill transition-all duration-300 ${
                        hoveredIndex === index ? "translate-x-2" : ""
                      }`}
                      style={{
                        transitionDelay: hoveredIndex === index ? `${i * 50}ms` : "0ms",
                      }}
                    >
                      {/* Animated dot indicator */}
                      <div className="relative w-2 h-2">
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent group-hover/skill:scale-150 transition-transform duration-300" />
                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent/50 animate-pulse group-hover/skill:animate-none" />
                      </div>

                      {/* Skill badge with hover effect */}
                      <Badge
                        variant="secondary"
                        className="bg-accent/10 text-foreground hover:bg-accent/20 group-hover/skill:bg-accent/30 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Bottom accent line that expands on hover */}
                <div className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-accent to-transparent rounded-b-2xl w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Shipped", value: "15+" },
            { label: "Team Members Led", value: "8+" },
            { label: "Technologies", value: "25+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border/50 hover:border-accent/50 bg-card/30 hover:bg-card/60 transition-all duration-300 text-center group cursor-default"
            >
              <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/70 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
