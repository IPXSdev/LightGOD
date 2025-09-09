"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Book, Shield, Star, Truck } from "lucide-react"

export default function SaturatedMelaninPhysicalPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePurchase = () => {
    alert("Stripe checkout will be implemented here")
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-black hover:text-fuchsia-600">
            <Link href="/shop/services" onClick={scrollToTop}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/saturated-melanin/book-cover.png"
                alt="Saturated Melanin Hardback Coffee Table Book"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-fuchsia-600 text-white">Hardcover</Badge>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-black">
                Saturated Melanin Coffee Table Book (Hard Back Version)
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                A premium coffee table art book featuring the complete Saturated Melanin photography series with
                accompanying poetry.
              </p>
              <div className="text-3xl font-bold text-fuchsia-600 mb-6">$97.00</div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Museum-quality fine art photography collection exploring themes of melanin, light, and heritage through
                ultraviolet-driven imagery and intimate verse.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Book className="w-5 h-5 text-fuchsia-600" />
                <span className="text-gray-700">Premium hardcover binding</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-fuchsia-600" />
                <span className="text-gray-700">Museum-quality printing</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-fuchsia-600" />
                <span className="text-gray-700">Collector's edition</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-fuchsia-600" />
                <span className="text-gray-700">Free shipping worldwide</span>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="space-y-4">
              <Button
                onClick={handlePurchase}
                className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg py-6"
              >
                Buy Hardback Book: $97.00
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Limited collector's edition. Ships within 2-3 business days.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold mb-4 text-black">About This Collection</h3>
              <p className="text-gray-700 leading-relaxed">
                This experimental fine art photography collection blends ultraviolet-driven imagery with intimate verse,
                exploring themes of melanin, light, and heritage. Each piece is carefully crafted to celebrate the
                beauty and complexity of identity through a unique artistic lens. The hardcover edition features premium
                paper stock and professional binding for a lasting collector's piece.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
