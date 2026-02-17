import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Usman Qasim - Frontend Lead & Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years building scalable web applications. Frontend Lead at MTBS, specializing in Next.js, React, and ASP.NET Core.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
