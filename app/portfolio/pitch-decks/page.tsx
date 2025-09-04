"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// DEPLOYMENT FORCE UPDATE: 2025-08-24T23:00:00Z
const PITCH_DECK_GALLERY = [
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

export default function PitchDecksGalleryPage() {
  console.log("[v0] FORCE DEPLOYMENT - Pitch Decks Gallery - 2025-08-24T23:00:00Z")
  console.log("[v0] Gallery images count:", PITCH_DECK_GALLERY.length)

  const [activeModal, setActiveModal] = useState<number | null>(null)
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  const openImageModal = (index: number) => {
    console.log("[v0] Opening modal for image:", index)
    setActiveModal(index)
  }

  const closeImageModal = () => {
    console.log("[v0] Closing modal")
    setActiveModal(null)
  }

  const navigateNext = () => {
    if (activeModal !== null) {
      const nextIndex = (activeModal + 1) % PITCH_DECK_GALLERY.length
      console.log("[v0] Navigate to next image:", nextIndex)
      setActiveModal(nextIndex)
    }
  }

  const navigatePrev = () => {
    if (activeModal !== null) {
      const prevIndex = activeModal === 0 ? PITCH_DECK_GALLERY.length - 1 : activeModal - 1
      console.log("[v0] Navigate to previous image:", prevIndex)
      setActiveModal(prevIndex)
    }
  }

  const handleImageLoadError = (index: number) => {
    console.log("[v0] Image failed to load:", index)
    setFailedImages((prev) => new Set(prev).add(index))
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Pitch Decks
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Investor-ready decks across entertainment, culture, and tech. Each presentation crafted to move minds and
            open doors.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {PITCH_DECK_GALLERY.map((deckImage, index) => (
            <Card
              key={`pitch-deck-${index}`}
              className="group cursor-pointer overflow-hidden bg-card/90 backdrop-blur-md border-2 border-border/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
              onClick={() => openImageModal(index)}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                {!failedImages.has(index) ? (
                  <Image
                    src={deckImage.src || "/placeholder.svg"}
                    alt={deckImage.alt}
                    fill
                    className="object-cover object-top transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => handleImageLoadError(index)}
                    priority={index < 4}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4">🎯</div>
                      <p className="text-lg font-semibold">{deckImage.title}</p>
                      <p className="text-sm text-muted-foreground mt-2">Loading...</p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <div className="bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-full px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-bold text-foreground">View Full Deck</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground">{deckImage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{deckImage.description}</p>
              </div>
            </Card>
          ))}
        </section>
      </div>

      {activeModal !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-16 right-0 text-white hover:bg-white/20 w-12 h-12 rounded-full"
              onClick={closeImageModal}
            >
              <X className="h-8 w-8" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full z-10"
              onClick={navigatePrev}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full z-10"
              onClick={navigateNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {!failedImages.has(activeModal) ? (
                <Image
                  src={PITCH_DECK_GALLERY[activeModal].src || "/placeholder.svg"}
                  alt={PITCH_DECK_GALLERY[activeModal].alt}
                  width={1920}
                  height={1200}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  priority
                  onError={() => handleImageLoadError(activeModal)}
                />
              ) : (
                <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-12 text-center max-w-md">
                  <div className="text-8xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{PITCH_DECK_GALLERY[activeModal].title}</h3>
                  <p className="text-white/80 text-lg">{PITCH_DECK_GALLERY[activeModal].description}</p>
                </div>
              )}
            </div>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
              <p className="text-white font-medium">
                {activeModal + 1} of {PITCH_DECK_GALLERY.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
