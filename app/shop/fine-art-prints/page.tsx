"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function FineArtPrintsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-black/70 hover:text-black">
            <Link href="/shop" onClick={scrollToTop}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black">Fine Art Prints</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Museum-quality prints from the Saturated Melanin collection. Each piece is carefully printed on archival
            paper for collectors and art enthusiasts.
          </p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center bg-gray-50 rounded-3xl p-12"
        >
          <h2 className="font-heading text-3xl font-bold mb-4 text-black">Prints Coming Soon</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            High-quality fine art prints from the Dear Frida and Saturated Muse series will be available soon. Each
            print will be produced on museum-grade archival paper with fade-resistant inks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-black">Dear Frida Series</h3>
              <p className="text-gray-600 text-sm">Bold red portraits with typography</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-black">Saturated Muse Series</h3>
              <p className="text-gray-600 text-sm">LED-lit artistic photography</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-black">Electric Fairy</h3>
              <p className="text-gray-600 text-sm">UV photography with neon florals</p>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
              <Link href="/contact" onClick={scrollToTop}>
                Get Notified When Available
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
