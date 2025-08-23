"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, ArrowLeft, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function LookDevelopmentPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryItems = [
    {
      id: "scifi-worldbuilding",
      src: "/look-dev-scifi-worldbuilding.png",
      alt: "Sci-Fi World Building Assets",
      title: "Sci-Fi World & Building",
      description: "Step Into the Future—One AI Vision at a Time.",
    },
    {
      id: "photorealistic",
      src: "/look-dev-photorealistic.png",
      alt: "Hyper Realistic Photo Quality Assets",
      title: "Picture Quality / Life-Like",
      description: "Sharper. Bolder. More Real Than Ever.",
    },
    {
      id: "animation",
      src: "/look-dev-animation.png",
      alt: "Animation Assets",
      title: "Animation Styling",
      description: "Bringing Imagination to Life—Frame by Frame.",
    },
    {
      id: "film-tv",
      src: "/look-dev-film-tv.png",
      alt: "Film & TV Assets",
      title: "Film & TV Assets",
      description: "Where Stories Begin: AI-Driven Cinematic Vision.",
    },
    {
      id: "art-illustration",
      src: "/look-dev-art-illustration.png",
      alt: "Art & Illustration Assets",
      title: "Art & Illustration",
      description: "Beyond the Brush—AI as the Ultimate Canvas.",
    },
    {
      id: "music",
      src: "/look-dev-music.png",
      alt: "Music Production Assets",
      title: "Music Production",
      description: "Composing the Future—One AI-Generated Song at a Time.",
    },
    {
      id: "technology",
      src: "/look-dev-technology.png",
      alt: "Technology Assets",
      title: "Technology Assets",
      description: "Designing Tomorrow, One Pixel at a Time.",
    },
    {
      id: "interior-design",
      src: "/look-dev-interior-design.png",
      alt: "Interior Design Assets",
      title: "Interior Design",
      description: "Spaces Reimagined, One AI Vision at a Time.",
    },
    {
      id: "fashion-apparel",
      src: "/look-dev-fashion-apparel.png",
      alt: "Fashion & Apparel Assets",
      title: "Fashion & Apparel",
      description: "Where AI Meets the Runway.",
    },
  ]

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

          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image src="/look-dev-banner.png" alt="Look Development Pipeline Banner" fill className="object-cover" />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-fuchsia-100 rounded-lg flex items-center justify-center">
              <Palette className="w-8 h-8 text-fuchsia-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-black">Look Development Pipeline</h1>
              <Badge variant="outline" className="text-blue-600 border-blue-300 mt-2">
                Ai-Powered Visual Development
              </Badge>
            </div>
          </div>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Overview</h2>
              <p className="text-lg text-black leading-relaxed mb-6">
                The Look Development Pipeline is an experimental framework I created to expand the boundaries of visual
                storytelling during pre-production. It reimagines the earliest stage of filmmaking and design, where
                tone and direction are set, by using advanced visual development tools to generate, refine, and
                accelerate concept art while preserving artistic authorship.
              </p>

              <h3 className="font-heading text-xl font-bold text-black mb-4">My Role</h3>
              <p className="text-black leading-relaxed mb-6">
                I conceived, designed, and executed the entire pipeline. I curated source material, built the workflow
                structure, and developed methods to generate and refine concept variations at scale. With this system, I
                transformed look development from a linear process into an adaptive creative environment that keeps pace
                with high-level production demands.
              </p>

              <h3 className="font-heading text-xl font-bold text-black mb-4">Process</h3>
              <ul className="text-black leading-relaxed mb-6 space-y-2">
                <li>• Curating visual references that capture the DNA of a project</li>
                <li>• Generating multiple aesthetic directions within hours instead of weeks</li>
                <li>• Refining outputs through iteration, editing, and post-production to maintain cohesion</li>
                <li>
                  • Delivering assets that support storyboards, character development, set design, and pitch decks
                </li>
              </ul>
              <p className="text-black leading-relaxed mb-6">
                This process creates speed and flexibility without compromising quality or vision.
              </p>

              <h3 className="font-heading text-xl font-bold text-black mb-4">Impact</h3>
              <p className="text-black leading-relaxed mb-6">
                The Look Development Pipeline significantly reduces production timelines while deepening creative
                exploration. It allows directors, producers, and creative teams to test multiple visual directions
                quickly, saving time and resources. The framework has been applied across film, animation, fashion,
                architecture, and technology, demonstrating its ability to adapt across industries.
              </p>

              <h3 className="font-heading text-xl font-bold text-black mb-4">Potential</h3>
              <p className="text-black leading-relaxed mb-6">
                The Look Development Pipeline has the capacity to reshape pre-production itself. It proves that early
                visual research can be both rapid and cinematic, offering high-end collaborators a process that
                transforms initial ideas into fully realized aesthetic worlds with precision and speed.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Ai-Powered
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Visual Development
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Pre-Production
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Concept Art
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Pipeline Design
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Creative Technology
                </Badge>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 flex justify-center">
            <div className="group cursor-pointer" onClick={() => setSelectedImage("/look-dev-personal-statement.png")}>
              <div className="relative w-auto overflow-hidden rounded-lg border-2 border-white shadow-lg">
                <Image
                  src="/look-dev-personal-statement.png"
                  alt="Personal Statement on Ai-Powered Creativity"
                  width={600}
                  height={400}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          </div>

          <Card className="bg-white border-gray-200">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Portfolio Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryItems.map((item) => (
                  <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium text-sm text-black truncate">{item.title}</h3>
                      <p className="text-xs text-gray-600 truncate">{item.description}</p>
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
                  <Link href="/lab/world-atlas" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src="/world-atlas-travel-guide.jpg"
                        alt="World Atlas Demo"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                <div className="flex-1 text-center">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">Ready to Transform Your Vision?</h3>
                  <p className="text-gray-600 mb-4">
                    Let's accelerate your creative process with cutting-edge visual development pipelines
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 bg-fuchsia-500 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-600 transition-colors"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

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
  )
}
