"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black">Official Merch Shop</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            One featured item now, with more amazing "drops" on the way.
          </p>
        </motion.div>

        {/* Featured Item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <Card className="group bg-white border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/saturated-melanin.png"
                  alt="Saturated Melanin Digital Edition"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-fuchsia-600 text-white">Featured</Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-black/80 text-white">
                    PDF
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-2 text-black">
                      Saturated Melanin: Digital Edition (PDF)
                    </h3>
                    <p className="text-lg font-semibold text-fuchsia-600">$1.00</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  A coffee-table art book in digital form by LightGod. Portraits and poems rendered ultraviolet; melanin
                  like myth.
                </p>
                <Button asChild className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                  <Link href="/shop/saturated-melanin-digital" onClick={scrollToTop}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gray-50 rounded-3xl p-12"
        >
          <h2 className="font-heading text-3xl font-bold mb-4 text-black">More Drops Coming Soon</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            New merch to come: custom designed limited edition Ultraviolet hoodies, beanies, bucket caps, and more.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
