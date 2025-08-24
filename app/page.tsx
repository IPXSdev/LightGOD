"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Film, Tag, Sparkles, Code } from "lucide-react"
import { PROJECTS } from "@/data/projects"
import { SERVICES } from "@/data/services"
import Image from "next/image"

const featuredProjects = PROJECTS.filter((p) => ["video-gallery", "pitch-decks", "film-scripts"].includes(p.slug)).sort(
  (a, b) => {
    const order = ["video-gallery", "pitch-decks", "film-scripts"]
    return order.indexOf(a.slug) - order.indexOf(b.slug)
  },
)

const featuredServices = SERVICES.slice(0, 6)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight"
          >
            <div className="text-black mb-2 text-5xl sm:text-7xl">STORYTELLING THAT DELIVERS.</div>
            <div className="text-fuchsia-600">DESIGN THAT WINS.</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-black mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            {
              "I am LightGod, a director, creative technologist, and strategist with proven impact across film, design, and storytelling. My reel has reached hundreds of thousands of viewers worldwide. I have developed original series, designed decks that have secured millions in funding, and shaped scripts that elevated projects from concept to screen. I specialize in building story ecosystems that resonate with audiences and expand into lasting franchises."
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-lg px-6 sm:px-8 py-4 text-base sm:text-lg rounded-xl"
            >
              <Link href="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent px-6 sm:px-8 py-4 text-base sm:text-lg rounded-xl"
            >
              <Link href="/services">Start a Project</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black mb-6 text-black">Featured Commissions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <Card className="group bg-gray-100 border-0 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl h-80 cursor-pointer">
                    <CardContent className="p-0 h-full relative">
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={project.cover || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex items-center justify-center h-32">
                        <h3 className="font-heading text-lg font-bold text-black text-center group-hover:text-fuchsia-600 transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-black mb-6 text-black">Creative Services</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Film Direction", icon: Film, href: "/portfolio/video-gallery" },
              { name: "Pitch Decks", icon: Tag, href: "/portfolio/pitch-decks" },
              { name: "Creative Development", icon: Sparkles, href: "/lab/look-development" },
              { name: "Worldbuilding", icon: Code, href: "/lab/world-atlas" },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="block"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }, 100)
                  }}
                >
                  <div className="bg-gray-100 rounded-2xl p-8 text-center border-0 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="w-16 h-16 bg-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      {service.icon && <service.icon className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-black">{service.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-3xl p-8 sm:p-16 text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Ready to collaborate?
            </h2>
            <p className="text-lg sm:text-xl text-white mb-8">
              Every commission starts with a conversation. Bring me the spark; I'll bring the system.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-lg px-6 sm:px-8 py-4 text-base sm:text-lg rounded-xl"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
