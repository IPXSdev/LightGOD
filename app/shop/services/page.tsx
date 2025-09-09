"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const serviceProducts = [
  {
    id: "custom-web-design",
    name: "Custom Web Design (W/Ecom)",
    price: "$2,550.00 USD",
    image: "/custom-web-design-service.jpg",
    description:
      "Full custom website design and development with e-commerce functionality, tailored to your brand vision.",
    category: "Premium Service",
  },
  {
    id: "screenplay-punchups",
    name: "Screenplay & Script Punch-Ups",
    price: "$395.00 USD",
    image: "/screenplay-writing-service.jpg",
    description: "Professional screenplay and script enhancement services to elevate your storytelling and dialogue.",
    category: "Professional",
  },
  {
    id: "website-design-startup",
    name: "Website Design (Start-up)",
    price: "$650.00 USD",
    image: "/startup-website-design.jpg",
    description:
      "Affordable website design package perfect for startups and small businesses looking to establish their online presence.",
    category: "Startup Special",
  },
  {
    id: "pitch-deck-design",
    name: "Pitch Deck Design and Creation (Up to 15 Slides/Pages)",
    price: "$1,650.00 USD",
    image: "/pitch-deck-design-service.jpg",
    description: "Professional pitch deck design and creation service to help you secure funding and partnerships.",
    category: "Business",
  },
  {
    id: "website-copywriting",
    name: "Website Copywriting",
    price: "$35.00 USD",
    image: "/copywriting-service.jpg",
    description: "Compelling website copy that converts visitors into customers with persuasive and engaging content.",
    category: "Quick Service",
  },
  {
    id: "discovery-chat-30",
    name: "Discovery Chat (30 min.)",
    price: "$35.00 USD",
    image: "/consultation-meeting.jpg",
    description: "30-minute consultation to discuss your project needs, goals, and explore how we can work together.",
    category: "Consultation",
  },
  {
    id: "discovery-chat-60",
    name: "Full Project Discovery Chat (60 min.)",
    price: "$65.00 USD",
    image: "/project-consultation-meeting.jpg",
    description:
      "Comprehensive 60-minute consultation for in-depth project planning, strategy development, and detailed requirement analysis.",
    category: "Extended",
  },
]

const categories = [
  "All",
  "Premium Service",
  "Professional",
  "Startup Special",
  "Business",
  "Quick Service",
  "Consultation",
  "Extended",
]

export default function ServicesShop() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showShopModal, setShowShopModal] = useState(false)

  const filteredProducts =
    selectedCategory === "All"
      ? serviceProducts
      : serviceProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
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
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">LightGod Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional creative services including web design, screenwriting, consultations, and custom creative
              solutions.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-fuchsia-600 text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-fuchsia-50 hover:border-fuchsia-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video relative">
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
                    {product.category === "Consultation" || product.category === "Extended"
                      ? "Book Now"
                      : product.category === "Premium Service" || product.category === "Professional"
                        ? "Get Quote"
                        : "Order"}
                  </button>
                </div>
              </div>
            </div>
          ))}
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
