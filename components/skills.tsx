"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Frontend",
    icon: "⚡",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "JavaScript", "Material UI", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend & AI",
    icon: "🤖",
    skills: ["Node.js", "Express.js", "Hono.js", "NestJS", "ASP.NET Core", "GraphQL", "Socket.io", "Agentic AI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "AI Engineering",
    icon: "🧠",
    skills: ["LLM Integration", "Tool Calling", "RAG", "Prompt Engineering", "Anthropic Claude SDK", "OpenAI APIs", "AI Guardrails"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Databases & State",
    icon: "💾",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL Server", "Firebase", "React Query", "Redux Toolkit", "Zustand"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS (EC2, S3, Amplify)", "Azure DevOps", "Docker", "CI/CD Pipelines", "Deployment Automation", "Git Workflows"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Testing & Tools",
    icon: "✓",
    skills: ["Jest", "React Testing Library", "Playwright", "Selenium", "SonarQube", "Postman", "Microservices", "REST APIs"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "Project Management",
    icon: "📋",
    skills: ["Agile Scrum", "Git", "GitHub", "Jira", "Bitbucket", "Atlassian Suite", "Workflow Automation", "n8n"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    category: "Performance & Architecture",
    icon: "🏗️",
    skills: ["Performance Tuning", "Caching Optimization", "WebSocket", "Electron.js", "Cross-browser Compatibility", "System Design"],
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

      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-accent mb-8 rounded-full" />
          <p className="text-lg text-blue-300 max-w-3xl">
            5+ years building scalable systems with expertise in AI-powered platforms, live streaming infrastructure, and team leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="relative p-6 rounded-2xl border border-border/50 group-hover:border-accent/50 bg-card/30 backdrop-blur-sm transition-all duration-500 group-hover:bg-card/60 group-hover:shadow-2xl group-hover:shadow-accent/20 h-full">
                {/* Top accent line that expands on hover */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent rounded-t-2xl w-0 group-hover:w-full transition-all duration-500" />

                {/* Icon and category header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                {/* Skills grid with staggered animation on hover */}
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 group/skill transition-all duration-300 ${
                        hoveredIndex === index ? "translate-x-1" : ""
                      }`}
                      style={{
                        transitionDelay: hoveredIndex === index ? `${i * 40}ms` : "0ms",
                      }}
                    >
                      {/* Animated dot indicator */}
                      <div className="relative w-1.5 h-1.5">
                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-accent group-hover/skill:scale-150 transition-transform duration-300" />
                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse group-hover/skill:animate-none" />
                      </div>

                      {/* Skill badge with hover effect */}
                      <Badge
                        variant="secondary"
                        className="bg-accent/10 text-foreground hover:bg-accent/20 group-hover/skill:bg-accent/30 transition-all duration-300 cursor-default text-xs py-1"
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
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Components Built", value: "40+" },
            { label: "Team Size Led", value: "5+" },
            { label: "Bug Reduction", value: "25%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border/50 hover:border-accent/50 bg-card/30 hover:bg-card/60 transition-all duration-300 text-center group cursor-default"
            >
              <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-blue-300 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
