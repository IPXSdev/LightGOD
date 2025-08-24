"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const pitchDeckImages = [
  {
    src: "/images/pitch-decks/the-sitter-cover.png",
    alt: "The Sitter Cover Page",
    title: "The Sitter Cover",
  },
  {
    src: "/images/pitch-decks/the-sitter-comps.png",
    alt: "The Sitter Comparative Shows & Films",
    title: "The Sitter Comparatives",
  },
  {
    src: "/images/pitch-decks/gotta-love-kira-synopsis.png",
    alt: "Gotta Love Kira Synopsis",
    title: "Gotta Love Kira Synopsis",
  },
  {
    src: "/images/pitch-decks/gotta-love-kira-cast.png",
    alt: "Gotta Love Kira Cast Page",
    title: "Gotta Love Kira Cast",
  },
  {
    src: "/images/pitch-decks/millennial-heist-cover.png",
    alt: "Millennial Heist - Blockchain Bandits Cover",
    title: "Millennial Heist Cover",
  },
  {
    src: "/images/pitch-decks/millennial-heist-synopsis.png",
    alt: "Millennial Heist Synopsis",
    title: "Millennial Heist Synopsis",
  },
]

export default function PitchDecksPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % pitchDeckImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? pitchDeckImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pitch Decks</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Investor-ready decks across entertainment, culture, and tech. Each presentation crafted to move minds and
            open doors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {pitchDeckImages.map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden bg-background/80 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:scale-[1.02]"
              onClick={() => openModal(index)}
            >
              <div className="aspect-video relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="text-sm font-medium text-black">Click to view</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{image.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={prevImage}
            >
              ←
            </Button>
            <Button
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={nextImage}
            >
              →
            </Button>

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={pitchDeckImages[selectedImage].src || "/placeholder.svg"}
                alt={pitchDeckImages[selectedImage].alt}
                width={1920}
                height={1080}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
              <p className="text-white text-sm">
                {selectedImage + 1} of {pitchDeckImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
