"use client"
import { useState } from "react"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const fineArtProducts = [
  {
    id: "fine-art-prints",
    name: "Original LightGod Fine Art Prints On Steel",
    price: "$333.00 USD",
    image: "/images/saturated-melanin/saturated-muse-2.png",
    description:
      "Museum-quality fine art prints on steel featuring original LightGod photography from the Saturated Melanin series.",
    category: "Limited Edition",
  },
  {
    id: "saturated-melanin-hardback",
    name: "Saturated Melanin Coffee Table Book (Hard Back Version)",
    price: "$97.00 USD",
    image: "/images/saturated-melanin/book-cover.png",
    description:
      "A premium coffee table art book featuring the complete Saturated Melanin photography series with accompanying poetry.",
    category: "Hardcover",
  },
  {
    id: "saturated-melanin-digital",
    name: "Saturated Melanin: Digital Edition (PDF)",
    price: "$3.00 USD",
    image: "/images/saturated-melanin/book-cover.png",
    description:
      "Digital PDF version of the Saturated Melanin collection, perfect for immediate access to the complete artistic series.",
    category: "Digital Product",
  },
  {
    id: "saturated-melanin-shoot",
    name: "Saturated Melanin Series Shoot",
    price: "$1,100.00 USD",
    image: "/images/saturated-melanin/electric-fairy.png",
    description:
      "A photo and video package capturing your essence in the signature Saturated Melanin style with UV lighting and artistic direction.",
    category: "Experience",
  },
]

export default function FineArtShop() {
  const [showShopModal, setShowShopModal] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => setShowShopModal(true)}
            className="inline-flex items-center text-black hover:text-fuchsia-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </button>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">LightGod Fine Art</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Original photography collections and art books celebrating the beauty of saturated melanin and artistic
              expression.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Limited Edition", "Hardcover", "Digital Product", "Experience"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category
                  ? "bg-fuchsia-600 text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-fuchsia-50 hover:border-fuchsia-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fineArtProducts
            .filter((product) => activeFilter === "All" || product.category === activeFilter)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-fuchsia-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-fuchsia-600">{product.price}</span>
                    <button className="bg-fuchsia-600 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 transition-colors font-medium text-sm">
                      {product.category === "Experience" ? "Book Now" : "View Details"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-4">More Fine Art Coming Soon</h2>
            <p className="text-gray-600">
              Additional photography collections and limited edition prints will be available soon. Stay tuned for new
              artistic expressions and exclusive releases.
            </p>
          </div>
        </div>
      </div>

      {showShopModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Choose Your Shop</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="group cursor-pointer bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-transparent hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
                onClick={() => (window.location.href = "/shop/fine-art")}
              >
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                  <img src="/fine-art-thumbnail.png" alt="Fine Art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Shop LightGod Fine Art</h3>
                <p className="text-gray-600">Original photography collections and art books</p>
              </div>

              <div
                className="group cursor-pointer bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 border-2 border-transparent hover:border-green-300 transition-all duration-300 hover:shadow-lg"
                onClick={() => (window.location.href = "/shop/services")}
              >
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                  <img src="/services-thumbnail.png" alt="Services" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Shop LightGod Services</h3>
                <p className="text-gray-600">Professional creative services and consultations</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setShowShopModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
