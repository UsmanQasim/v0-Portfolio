"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

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
    ;[nameRef, titleRef, subtitleRef, ctaRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-accent/10 rounded-full animate-pulse" />
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col justify-center">
          {/* Minimalistic Hero */}
          <div ref={nameRef} className="opacity-0 mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-2">
              Usman Qasim
            </h1>
            <div className="h-1.5 w-40 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
          </div>

          {/* Minimal Description */}
          <div ref={titleRef} className="opacity-0 mb-8 flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-medium text-blue-300">
              Senior Full Stack Engineer • AI Systems • Tech Lead
            </p>
            <p ref={subtitleRef} className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
              5+ years building scalable SaaS & AI platforms. Specialized in Next.js, TypeScript, and agentic AI.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="opacity-0 stagger-3 flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 text-center text-sm"
            >
              View My Work
            </Link>
            <Link
              href="#experience"
              className="px-6 py-3 rounded-lg border-1.5 border-accent/50 text-foreground font-semibold hover:bg-accent/10 hover:border-accent transition-all duration-300 text-center text-sm"
            >
              Experience
            </Link>
          </div>

          {/* Social Links - Horizontal Compact */}
          <div className="opacity-0 stagger-4 flex flex-wrap gap-4 pt-4">
            <Link
              href="https://github.com/UsmanQasim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2 text-sm hover:underline"
            >
              <span>GitHub</span>
            </Link>
            <div className="text-foreground/30">•</div>
            <Link
              href="https://www.linkedin.com/in/qasimusman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2 text-sm hover:underline"
            >
              <span>LinkedIn</span>
            </Link>
            <div className="text-foreground/30">•</div>
            <Link
              href="https://chatley.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2 text-sm hover:underline"
            >
              <span>Chatley</span>
            </Link>
            <div className="text-foreground/30">•</div>
            <Link
              href="mailto:1998usman@gmail.com"
              className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2 text-sm hover:underline"
            >
              <span>Email</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-foreground/50 font-medium">Scroll</span>
          <svg className="w-5 h-5 text-accent/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
