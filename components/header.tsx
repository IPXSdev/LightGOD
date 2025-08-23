"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Lab", href: "/lab" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false)
    scrollToTop()
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "bg-white/95 py-2 shadow-sm" : "bg-white/80 py-4"
        }`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-heading text-2xl font-bold tracking-tight" onClick={scrollToTop}>
              <span className="text-black">Light</span>
              <span className="text-black">God</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={scrollToTop}
                  className={`text-sm font-medium transition-colors hover:text-fuchsia-600 ${
                    pathname === item.href ? "text-fuchsia-600" : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-16" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleMobileMenuClick(item.href)}
                className={`text-lg font-medium transition-colors hover:text-fuchsia-600 ${
                  pathname === item.href ? "text-fuchsia-600" : "text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
