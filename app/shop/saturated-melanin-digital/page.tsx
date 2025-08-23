"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Download, Shield, Star } from "lucide-react"

export default function SaturatedMelaninDigitalPage() {
  const [showVipModal, setShowVipModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [socialHandle, setSocialHandle] = useState("")
  const [consent, setConsent] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleVipSignup = () => {
    if (email && consent) {
      setShowSuccess(true)
      setTimeout(() => {
        setShowVipModal(false)
        setShowSuccess(false)
        setEmail("")
        setSocialHandle("")
        setConsent(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-black hover:text-fuchsia-600">
            <Link href="/shop" onClick={scrollToTop}>
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
                src="/saturated-melanin.png"
                alt="Saturated Melanin Digital Edition"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-fuchsia-600 text-white">Digital PDF</Badge>
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
                Saturated Melanin: Digital Edition (PDF)
              </h1>
              <p className="text-xl text-gray-600 mb-6">A coffee-table art book in digital form by LightGod.</p>
              <div className="text-3xl font-bold text-fuchsia-600 mb-6">$1.00</div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Portraits and poems rendered ultraviolet; melanin like myth. Immediate digital download (PDF).
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-fuchsia-600" />
                <span className="text-gray-700">Immediate digital download</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-fuchsia-600" />
                <span className="text-gray-700">High-resolution PDF format</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-fuchsia-600" />
                <span className="text-gray-700">Exclusive fine art photography</span>
              </div>
            </div>

            {/* Purchase Button */}
            <div className="space-y-4">
              <Button
                onClick={() => setShowVipModal(true)}
                className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg py-6"
              >
                Buy Digital PDF: $1.00
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Personal use only. You'll receive VIP alerts for the signed collector's hard copy.
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
                beauty and complexity of identity through a unique artistic lens.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* VIP Signup Modal */}
      <Dialog open={showVipModal} onOpenChange={setShowVipModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get VIP alerts for the official drop</DialogTitle>
            <DialogDescription className="text-gray-600">
              Join the community for drop alerts and priority access to the signed hard-copy collector's edition.
            </DialogDescription>
          </DialogHeader>

          {!showSuccess ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="social">Social handle (optional)</Label>
                <Input
                  id="social"
                  value={socialHandle}
                  onChange={(e) => setSocialHandle(e.target.value)}
                  placeholder="@yourusername"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                />
                <Label htmlFor="consent" className="text-sm text-gray-600">
                  By joining, you agree to receive infrequent launch emails.
                </Label>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleVipSignup}
                  disabled={!email || !consent}
                  className="flex-1 bg-fuchsia-600 hover:bg-fuchsia-700"
                >
                  Sign me up
                </Button>
                <Button variant="ghost" onClick={() => setShowVipModal(false)} className="text-gray-500">
                  No thanks
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">You're in!</h3>
              <p className="text-gray-600 mb-4">We'll email VIP alerts and official drop details.</p>
              <p className="text-sm text-gray-500">Checkout opens soon.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
