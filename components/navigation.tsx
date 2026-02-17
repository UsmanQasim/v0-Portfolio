"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface NavigationProps {
  scrollY: number
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (scrollY > lastScrollY && scrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(scrollY)
  }, [scrollY, lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold tracking-tight gradient-text">
          UQ
        </Link>

        <Link
          href="https://www.linkedin.com/in/qasimusman/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
        >
          Connect
        </Link>
      </div>
    </nav>
  )
}
