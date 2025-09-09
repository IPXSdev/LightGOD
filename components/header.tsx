"use client"

import type React from "react"

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
  const [isShopModalOpen, setIsShopModalOpen] = useState(false)
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

  const handleShopClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsShopModalOpen(true)
  }

  const closeShopModal = () => {
    setIsShopModalOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full border-b border-gray-200 backdrop-blur-md transition-all duration-300 ${
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
              <button
                onClick={handleShopClick}
                className="text-sm font-medium transition-colors hover:text-fuchsia-600 text-black"
              >
                Shop
              </button>
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
        className={`fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
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
            <button
              onClick={handleShopClick}
              className="text-lg font-medium transition-colors hover:text-fuchsia-600 text-black text-left"
            >
              Shop
            </button>
          </div>
        </nav>
      </div>

      {isShopModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeShopModal}>
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-black">Choose Your Shop</h2>
              <button onClick={closeShopModal} className="text-black hover:text-fuchsia-600 text-2xl font-bold">
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Fine Art Shop Card */}
              <Link
                href="/shop/fine-art"
                onClick={closeShopModal}
                className="group block bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-fuchsia-200"
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/fine-art-thumbnail.png"
                    alt="Fine Art"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Shop LightGod Fine Art</h3>
                <p className="text-gray-600 text-sm">
                  Original photography prints and art books featuring the Saturated Melanin collection
                </p>
              </Link>

              {/* Services Shop Card */}
              <Link
                href="/shop/services"
                onClick={closeShopModal}
                className="group block bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-fuchsia-200"
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/services-thumbnail.png"
                    alt="Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Shop LightGod Services</h3>
                <p className="text-gray-600 text-sm">
                  Professional creative services including web design, screenwriting, and consultations
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
