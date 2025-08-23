"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Map, ArrowLeft, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const worldAtlasImages = [
  {
    src: "/world-atlas-galaxy-bay.png",
    title: "Galaxy Bay - City by the Moon",
    description:
      "A self-contained metropolis nestled within the boundless multiverse, offering exclusive refuge for families during extended interstellar voyages.",
  },
  {
    src: "/world-atlas-moon-mountain.png",
    title: "Moon Mountain - Stone Condos",
    description:
      "Luxurious living experience that seamlessly blends nature's artistry with modern opulence in the ancient Eneo Mountains of Whitrion.",
  },
  {
    src: "/world-atlas-casting-pods.jpg",
    title: "Casting Pods - Instant Travel",
    description:
      "Revolutionary interstellar interaction and travel technology that empowers individuals to project their presence across unimaginable cosmic distances.",
  },
  {
    src: "/world-atlas-turbillion-isle.png",
    title: "Turbillion Isle - Timeless Arrays",
    description:
      "A unique haven where time stands still, creating an atmosphere of curiosity and serenity for deep thinkers and contemplative souls.",
  },
  {
    src: "/world-atlas-zentry-spa.jpg",
    title: "Zentry Spa - Mental Scaping",
    description:
      "A cosmic haven that elevates minds and spirits through mental massages, frequency baths, and alignment exercises for transformative journeys.",
  },
  {
    src: "/world-atlas-acrum-pods.png",
    title: "Acrum-Pods - A Cosmic BNB",
    description:
      "Remarkable interstellar lodgings that offer travelers immersive experiences across an array of planetary landscapes with modular, sustainable design.",
  },
  {
    src: "/world-atlas-moonset-pods.jpg",
    title: "Moonset Pods - Eternal Winters",
    description:
      "An extraordinary polar experience in the Radiant Garden Galaxy, where eternal winter and cold weather reign supreme beneath celestial moonbows.",
  },
  {
    src: "/world-atlas-horizon-villas.jpg",
    title: "Horizon Villas - Endless Daytime",
    description:
      "The Ultraviolet Multiverse's crowning jewel suspended between twin stars, offering an unparalleled interstellar paradise with perpetual sunshine.",
  },
  {
    src: "/world-atlas-fairy-fortress.jpg",
    title: "Fairy Fortress - Friendly Flyers",
    description:
      "A realm of wonder and tranquility inhabited by extraordinary butterfly-winged beings who possess the unique gift of universal communication.",
  },
]

export default function WorldAtlasPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-black hover:text-fuchsia-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lab
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-fuchsia-100 rounded-lg flex items-center justify-center">
              <Map className="w-8 h-8 text-fuchsia-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-black">World Atlas Demo</h1>
              <Badge variant="outline" className="text-yellow-600 border-yellow-300 mt-2">
                Prototype
              </Badge>
            </div>
          </div>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-black leading-relaxed mb-6">
                Interactive exploration of the Whitrion multiverse, featuring detailed maps, character profiles, and
                interconnected storylines. This prototype demonstrates how complex fictional worlds can be navigated and
                experienced through immersive digital interfaces.
              </p>

              <p className="text-black leading-relaxed mb-6">
                The World Atlas serves as both a reference tool and an interactive experience, allowing users to dive
                deep into the lore, geography, and inhabitants of each realm within the multiverse. Dynamic connections
                reveal how stories, characters, and locations influence each other across different narratives.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Worldbuilding
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Interactive
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Web
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Multiverse
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Prototype
                </Badge>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 flex justify-center">
            <div className="group cursor-pointer" onClick={() => setSelectedImage("/world-atlas-travel-guide.jpg")}>
              <Image
                src="/world-atlas-travel-guide.jpg"
                alt="Cosmic Traveler's Guide Cover"
                width={600}
                height={450}
                className="object-contain transition-transform duration-300 group-hover:scale-105 border-2 border-white shadow-lg rounded-lg"
              />
            </div>
          </div>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Portfolio Gallery</h2>
              <div className="grid grid-cols-3 gap-4">
                {worldAtlasImages
                  .filter((image) => image.src !== "/world-atlas-travel-guide.jpg")
                  .map((image, index) => (
                    <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                      <div className="relative w-full h-auto overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          width={400}
                          height={600}
                          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                      <div className="mt-2">
                        <h3 className="font-medium text-sm text-black truncate">{image.title}</h3>
                        <p className="text-xs text-gray-600 truncate">{image.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mt-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-8">
                <div className="flex-shrink-0">
                  <Link href="/lab/look-development" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src="/look-dev-personal-statement.png"
                        alt="Look Development Pipeline"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                <div className="flex-1 text-center">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">Need a Custom Multiverse Built?</h3>
                  <p className="text-gray-600 mb-4">
                    Let's create immersive worlds and interactive experiences that captivate your audience
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 bg-fuchsia-500 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-600 transition-colors"
                  >
                    Let's Build Together
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative max-h-[90vh] overflow-hidden rounded-lg">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="max-h-[90vh] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
