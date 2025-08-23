"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code } from "lucide-react"
import { SERVICES } from "@/data/services"

export default function ServicesPage() {
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
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black">SERVICES</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Let's transforms your ideas into cinematic realities. Commission a lane below or combine them into a custom
            ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              id={service.slug}
            >
              <Card className="group bg-white border-gray-200 hover:border-fuchsia-500/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-fuchsia-100 rounded-xl flex items-center justify-center mb-4">
                      <Code className="w-8 h-8 text-fuchsia-500" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold mb-2 text-black group-hover:text-fuchsia-500 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-fuchsia-500 font-medium mb-4">{service.tagline}</p>
                  </div>

                  <p className="text-black mb-6 leading-relaxed">{service.overview}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-mono text-sm uppercase tracking-wider text-gray-600 mb-3">What you get</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {service.deliverables.map((deliverable) => (
                          <div key={deliverable} className="text-sm text-black flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-mono text-sm uppercase tracking-wider text-gray-600 mb-3">How it flows</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.processSteps.map((step, stepIndex) => (
                          <div key={step} className="flex items-center">
                            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-black">
                              {stepIndex + 1}. {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button asChild className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white w-full">
                      <Link href="/contact" onClick={scrollToTop}>
                        {service.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-black">Ready to Collaborate?</h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Every project begins with a conversation. Let's discuss your vision and create something extraordinary
              together.
            </p>
            <Button asChild size="lg" className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white">
              <Link href="/contact" onClick={scrollToTop}>
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
