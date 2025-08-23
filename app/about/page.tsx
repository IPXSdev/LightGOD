"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Calendar } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Creative Excellence",
    description: "Recognized for innovative work across multiple disciplines",
  },
  {
    icon: Users,
    title: "Industry Collaborations",
    description: "Partnerships with leading brands, studios, and artists",
  },
  {
    icon: Calendar,
    title: "Years of Experience",
    description: "Decade+ of creative and technical expertise",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black">Creative Philosophy</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden max-w-md mx-auto">
              <Image src="/lightgod-portrait.jpg" alt="Lightgod Portrait" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6 text-lg text-black leading-relaxed">
              <p>
                I build worlds where cinema, design, and technology converge. My work spans psychological thrillers,
                music videos, and visual art, with projects that have reached global audiences. BLXST alone has been
                viewed more than 123,000 times on YouTube, a testament to the reach and resonance of my storytelling. At
                the center of my practice is The Sitter, a flagship series that anchors a connected universe of more
                than twenty original intellectual properties exploring power, identity, and time-bending consciousness.
              </p>
              <p>
                Raised in South Central Los Angeles and now based in Dallas, I work as a director, writer, and creative
                technologist. My projects have appeared on festival screens, in galleries, on streaming platforms, and
                inside pitch rooms where my decks have helped secure millions in funding. Whether I am directing a film,
                developing an Ai framework, or designing a story ecosystem, my purpose remains the same: to create work
                that does not simply communicate but transforms.
              </p>
              <p>I am LightGod. Cinema, design, and electricity take form in my practice.</p>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl font-bold mb-8 text-center text-black">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={highlight.title} className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <highlight.icon className="w-6 h-6 text-fuchsia-500" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2 text-black">{highlight.title}</h3>
                  <p className="text-black text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-black">Let's connect.</h2>
              <p className="text-black mb-8 max-w-2xl mx-auto">I'd love to hear about your creative. Let's chat.</p>
              <Button asChild className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
