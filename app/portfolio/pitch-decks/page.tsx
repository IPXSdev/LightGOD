"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// FORCE NEW DEPLOYMENT: 2025-08-24T23:45:00Z - FIXED IMPORT ERROR
const DECK_IMAGES = [
  {
    src: "/images/pitch-decks/the-sitter-cover.png",
    alt: "The Sitter Cover Page",
    title: "The Sitter Cover",
    description: "Sci-fi thriller pitch deck cover featuring futuristic control room setting",
  },
  {
    src: "/images/pitch-decks/the-sitter-comps.png",
    alt: "The Sitter Comparative Shows & Films",
    title: "The Sitter Comparatives",
    description: "Comparative analysis with similar shows and their viewership data",
  },
  {
    src: "/images/pitch-decks/gotta-love-kira-synopsis.png",
    alt: "Gotta Love Kira Synopsis",
    title: "Gotta Love Kira Synopsis",
    description: "Coming-of-age series synopsis about Kira's unique mental Sub-Space",
  },
  {
    src: "/images/pitch-decks/gotta-love-kira-cast.png",
    alt: "Gotta Love Kira Cast Page",
    title: "Gotta Love Kira Cast",
    description: "Cast overview featuring the main characters and ensemble",
  },
  {
    src: "/images/pitch-decks/millennial-heist-cover.png",
    alt: "Millennial Heist - Blockchain Bandits Cover",
    title: "Millennial Heist Cover",
    description: "Tech-thriller pitch deck with blockchain and cryptocurrency themes",
  },
  {
    src: "/images/pitch-decks/millennial-heist-synopsis.png",
    alt: "Millennial Heist Synopsis",
    title: "Millennial Heist Synopsis",
    description: "Synopsis for tech-savvy teens blockchain heist story",
  },
]

export default function NewPitchDecksPage() {
  console.log("[v0] NEW PITCH DECKS PAGE LOADED - IMPORT ERROR FIXED")
  console.log("[v0] Total deck images:", DECK_IMAGES.length)

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const openModal = (index: number) => {
    console.log("[v0] Opening modal for deck:", index)
    setSelectedImage(index)
  }

  const closeModal = () => {
    console.log("[v0] Closing modal")
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const next = (selectedImage + 1) % DECK_IMAGES.length
      console.log("[v0] Next image:", next)
      setSelectedImage(next)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const prev = selectedImage === 0 ? DECK_IMAGES.length - 1 : selectedImage - 1
      console.log("[v0] Previous image:", prev)
      setSelectedImage(prev)
    }
  }

  const handleImageError = (index: number) => {
    console.log("[v0] Image error for index:", index)
    setImageErrors((prev) => new Set(prev).add(index))
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            PITCH DECKS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Investor-ready presentations across entertainment, culture, and technology. Each deck crafted to captivate
            minds and unlock opportunities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {DECK_IMAGES.map((deck, index) => (
            <Card
              key={`deck-${index}-${deck.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="group cursor-pointer overflow-hidden bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-border/40 hover:border-red-500/60 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                {!imageErrors.has(index) ? (
                  <Image
                    src={deck.src || "/placeholder.svg"}
                    alt={deck.alt}
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => handleImageError(index)}
                    priority={index < 4}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-red-100 via-purple-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-6">🎬</div>
                      <h3 className="text-xl font-bold mb-2">{deck.title}</h3>
                      <p className="text-sm text-muted-foreground">Deck Loading...</p>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end justify-center pb-8">
                  <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-full px-8 py-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-sm font-bold text-foreground">VIEW FULL DECK</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="font-black text-2xl mb-4 text-foreground group-hover:text-red-600 transition-colors duration-300">
                  {deck.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{deck.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[98vw] max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Display */}
            {!imageErrors.has(selectedImage) ? (
              <Image
                src={DECK_IMAGES[selectedImage].src || "/placeholder.svg"}
                alt={DECK_IMAGES[selectedImage].alt}
                width={1920}
                height={1200}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                priority
                onError={() => handleImageError(selectedImage)}
              />
            ) : (
              <div className="bg-gradient-to-br from-red-900/60 via-purple-900/60 to-blue-900/60 backdrop-blur-lg rounded-2xl p-16 text-center max-w-lg">
                <div className="text-9xl mb-8">🎬</div>
                <h3 className="text-3xl font-bold mb-6 text-white">{DECK_IMAGES[selectedImage].title}</h3>
                <p className="text-white/90 text-xl leading-relaxed">{DECK_IMAGES[selectedImage].description}</p>
              </div>
            )}
          </div>

          {/* Navigation Controls - Fixed at Bottom */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-60">
            <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-gray-200/50">
              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:text-white hover:bg-black w-10 h-10 rounded-full transition-all duration-200 text-lg font-bold"
                onClick={prevImage}
              >
                ‹
              </Button>

              {/* Page Counter */}
              <div className="px-3">
                <p className="text-black font-semibold text-sm whitespace-nowrap">
                  {selectedImage + 1} of {DECK_IMAGES.length}
                </p>
              </div>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:text-white hover:bg-black w-10 h-10 rounded-full transition-all duration-200 text-lg font-bold"
                onClick={nextImage}
              >
                ›
              </Button>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-300 mx-1"></div>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:text-white hover:bg-black w-10 h-10 rounded-full transition-all duration-200 text-lg font-bold"
                onClick={closeModal}
              >
                ×
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
