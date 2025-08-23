import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ShaderBackground from "@/components/shader-background"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "Lightgod - Creative Technologist & Director",
  description:
    "Cinematic ideas. Electric execution. Creative technologist and director shaping worlds across film, Ai, design, and photography.",
  keywords: [
    "creative technologist",
    "director",
    "filmmaker",
    "Ai creative",
    "pitch decks",
    "photography",
    "worldbuilding",
  ],
  authors: [{ name: "Lightgod (Darion Harris)" }],
  openGraph: {
    title: "Lightgod - Creative Technologist & Director",
    description: "Cinematic ideas. Electric execution.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightgod - Creative Technologist & Director",
    description: "Cinematic ideas. Electric execution.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ShaderBackground>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
          </ShaderBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
