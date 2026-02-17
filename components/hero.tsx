"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

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
    ;[nameRef, titleRef, subtitleRef, statsRef, ctaRef].forEach((ref) => {
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
          {/* Name and Title Combined */}
          <div ref={nameRef} className="opacity-0 mb-6">
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">Usman Qasim</h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full" />
            </div>
            <p className="text-xl md:text-2xl text-foreground/70 font-medium tracking-wide">
              Frontend Lead & Full Stack Developer
            </p>
          </div>

          {/* Main Headline with Badge */}
          <div ref={titleRef} className="opacity-0 mb-6 flex flex-col gap-3">
            <div className="inline-flex w-fit gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-medium text-accent uppercase tracking-widest">
                Specialized in Agentic AI
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
              <span className="block">Building Scalable</span>
              <span className="gradient-text block text-5xl md:text-6xl lg:text-7xl">Enterprise Systems</span>
              <span className="block">with Modern Tech</span>
            </h2>
          </div>

          {/* Compact Description */}
          <p
            ref={subtitleRef}
            className="opacity-0 stagger-1 text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl mb-6"
          >
            5+ years architecting web applications. Currently leading frontend at{" "}
            <span className="text-accent font-semibold">Forthlogic AI (USA)</span>, specializing in Agentic AI systems.
            Proven expertise across fintech, healthcare, and streaming platforms.
          </p>

          {/* Stats in Single Row */}
          <div ref={statsRef} className="opacity-0 stagger-2 grid grid-cols-3 gap-4 mb-8 w-fit">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative px-4 py-3 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-accent">5+</div>
                <div className="text-xs text-foreground/60 mt-1">Yrs Experience</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative px-4 py-3 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                <div className="text-xs text-foreground/60 mt-1">Projects</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative px-4 py-3 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-accent">8+</div>
                <div className="text-xs text-foreground/60 mt-1">Team Members</div>
              </div>
            </div>
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
