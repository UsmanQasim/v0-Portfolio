"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

    if (titleRef.current) observer.observe(titleRef.current)
    if (formRef.current) observer.observe(formRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 tracking-tight opacity-0">
          Let's Work Together
        </h2>
        <div className="w-12 h-1 bg-accent mb-8 rounded-full mx-auto" />

        <p className="text-lg text-muted-foreground mb-12 opacity-0 stagger-1">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <form
          ref={formRef}
          className="space-y-6 opacity-0 stagger-2"
          onSubmit={(e) => {
            e.preventDefault()
            // Handle form submission
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-muted-foreground mb-6">Or connect with me on:</p>
          <div className="flex justify-center gap-6">
            {[
              { name: "GitHub", url: "#" },
              { name: "LinkedIn", url: "#" },
              { name: "Twitter", url: "#" },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
