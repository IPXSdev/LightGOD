"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Palette, Camera, Map } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const labProjects = [
  {
    title: "The Dynamics Multiverse (Web3 Case Study)",
    description: "Dynamic NFTs + IP licensing (IPXS) + UV Arena metaverse.",
    icon: Globe,
    tags: ["Web3", "NFT", "Worldbuilding"],
    status: "Case Study",
    slug: "dynamics-multiverse",
    thumbnails: ["/dynamics-cover.png", "/dynamics-multiverse.png", "/dynamics-strategy.png"],
  },
  {
    title: "Look Development Pipeline",
    description: "Experimental visual development using Ai-assisted concept art",
    icon: Palette,
    tags: ["Ai", "Visual Development", "Film"],
    status: "Research",
    slug: "look-development",
    thumbnails: ["/look-dev-interior-design.png", "/look-dev-fashion-apparel.png", "/look-dev-interior-design.png"],
  },
  {
    title: "World Atlas Demo",
    description: "Interactive exploration of the Whitrion multiverse",
    icon: Map,
    tags: ["Worldbuilding", "Interactive", "Web"],
    status: "Prototype",
    slug: "world-atlas",
    thumbnails: ["/world-atlas-galaxy-bay.png", "/world-atlas-horizon-villas.jpg", "/world-atlas-zentry-spa.jpg"],
  },
  {
    title: "Production BTS",
    description: "Behind-the-scenes documentation from film and video productions",
    icon: Camera,
    tags: ["BTS", "Production", "Documentation"],
    status: "Active",
    slug: "production-bts",
    thumbnails: ["/bts-block-party-stage.jpg", "/bts-personal-preproduction.jpg", "/bts-block-party-doug-e-fresh.jpg"],
  },
]

export default function LabPage() {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black">The Lab</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A living, interactive gallery: on‑set BTS photos and video, studio process, world‑building slides, and
            tests. The future gets prototyped here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/lab/${project.slug}`} className="block" onClick={scrollToTop}>
                <Card className="group bg-white border-gray-200 hover:border-fuchsia-500/50 transition-all duration-300 h-full cursor-pointer">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.thumbnails.map((thumbnail, thumbIndex) => (
                        <div key={thumbIndex} className="aspect-video relative overflow-hidden rounded-lg">
                          <Image
                            src={thumbnail || "/placeholder.svg"}
                            alt={`${project.title} thumbnail ${thumbIndex + 1}`}
                            fill
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-fuchsia-500" />
                      </div>
                      <Badge
                        variant="outline"
                        className={`border-gray-300 text-xs ${
                          project.status === "Active"
                            ? "text-green-600 border-green-300"
                            : project.status === "Research"
                              ? "text-blue-600 border-blue-300"
                              : project.status === "Prototype"
                                ? "text-yellow-600 border-yellow-300"
                                : project.status === "Case Study"
                                  ? "text-purple-600 border-purple-300"
                                  : "text-purple-600 border-purple-300"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-3 text-black group-hover:text-fuchsia-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-black mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-gray-100 text-black border-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-12 text-center">
              <h2 className="font-heading text-3xl font-bold mb-4 text-black">More Experiments Coming Soon</h2>
              <p className="text-black max-w-2xl mx-auto">
                The Lab is constantly evolving. New experiments in Ai creativity, interactive storytelling, and
                immersive experiences are always in development. Check back regularly for updates.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
