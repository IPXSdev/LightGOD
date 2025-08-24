"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DynamicsMultiversePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-black hover:text-fuchsia-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lab
          </Link>

          <div className="mb-8">
            <Image
              src="/dynamics-cover.png"
              alt="The Dynamics Multiverse - Art / Film / Fashion / Music / Technology"
              width={1200}
              height={600}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-fuchsia-100 rounded-lg flex items-center justify-center">
              <Globe className="w-8 h-8 text-fuchsia-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-black">The Dynamics Multiverse</h1>
              <Badge variant="outline" className="text-purple-600 border-purple-300 mt-2">
                Web3 Case Study
              </Badge>
            </div>
          </div>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Overview</h2>
              <p className="text-lg text-black leading-relaxed mb-6">
                The Dynamics Multiverse was a pioneering creative ecosystem designed to merge art, film, music, fashion,
                and blockchain technology into one expansive universe. Built around 11,011 uniquely coded dynamic NFTs,
                the project introduced the IPXS (Intellectual Property Xchange System), a proprietary licensing protocol
                that allowed holders to monetize their characters across merchandise, film, and media. At its core, the
                project sought to transform NFTs from static images into living intellectual properties tied to
                cinematic lore and real-world utility.
              </p>

              <h3 className="font-heading text-xl font-bold text-black mb-4">My Role</h3>
              <p className="text-black leading-relaxed mb-6">
                I envisioned, created, and structured the entire project from concept to execution. I designed the
                architecture of the IPXS platform, mapped the full ecosystem, and authored the generative lore that gave
                each NFT its character backstory. I built the narrative spine of the multiverse, tying blockchain
                mechanics to cinematic mythology. My colleague BlooWoods executed the visual character designs, bringing
                my written concepts to life.
              </p>

              <h3 className="font-heading text-xl font-bold text-black mb-4">Challenge</h3>
              <p className="text-black leading-relaxed mb-6">
                The ambition was unprecedented: to merge dynamic blockchain coding with cinematic storytelling, giving
                each NFT a role within a larger film-ready universe. But launching such a complex project required
                significant trust in Web3 markets. The NFT boom of 2021 gave way to a sudden bear market. As investor
                confidence in crypto futures collapsed, the volatility of the space made it impossible to sustain the
                capital and momentum required for launch.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Web3
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  NFT
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Worldbuilding
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  IP Licensing
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Metaverse
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Approach</h2>
              <p className="text-black leading-relaxed mb-6">
                The project was built as both an artistic experiment and a market-disrupting venture. The strategy
                included:
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-black mb-2">Proprietary Licensing Infrastructure:</h4>
                  <p className="text-black">
                    A fully designed IPXS system that empowered NFT holders to license and monetize their assets.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Generative Lore:</h4>
                  <p className="text-black">
                    A mythology spanning characters, histories, and conflicts, written to enable adaptation into film,
                    television, and music projects.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Community Utility:</h4>
                  <p className="text-black">
                    Members-only IRL events, access to the UV Arena metaverse, and brand collaborations across
                    entertainment and fashion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Investor-Ready Design:</h4>
                  <p className="text-black">
                    A cinematic deck that translated a deeply technical idea into an engaging story world with real
                    commercial pathways.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <Image
                src="/dynamics-strategy.png"
                alt="What's Our Strategy - Building community and transparent NFT project"
                width={1200}
                height={600}
                className="w-full rounded-lg mb-6"
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Generative Lore System</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Image
                  src="/dynamics-generative-lore.png"
                  alt="Generative Lore - Interactive character backstory generation system"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/dynamics-lore-deep-dive.png"
                  alt="Origin Stories and Generative Lore Deep Dive"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Dynamic NFTs & IPXS Technology</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Image
                  src="/dynamics-coding.png"
                  alt="Dynamic NFTs & Programmability - Three phase evolution system"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/dynamics-ipxs.png"
                  alt="IPXS - Intellectual Property Exchange System"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Who Are The Dynamics?</h2>
              <Image
                src="/dynamics-who-are-dynamics.png"
                alt="Who Are The Dynamics - Civilization lore and mythology"
                width={1200}
                height={600}
                className="w-full rounded-lg mb-6"
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Market Research & Comparisons</h2>
              <Image
                src="/dynamics-project-comparisons.png"
                alt="NFT Project Comparisons - Market analysis of successful projects"
                width={1200}
                height={600}
                className="w-full rounded-lg mb-6"
              />
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-black mb-6">Outcome & Impact</h2>
              <p className="text-black leading-relaxed mb-6">
                Though the project did not launch due to the market crash, its potential was clear. Capital was raised
                during the development phase, validating the strength of the vision. The structure demonstrated how NFTs
                could evolve beyond collectibles into full-scale transmedia franchises. The Dynamics Multiverse became a
                case study in how worldbuilding, technology, and design can intersect to create future-ready ecosystems,
                and how market conditions, rather than creative vision, can shape the fate of innovation.
              </p>

              <h3 className="font-heading text-xl font-bold text-black mb-4">Legacy</h3>
              <p className="text-black leading-relaxed mb-6">
                Had the project launched in a stable market, it could have become a category-defining NFT franchise..
                More specifically, one that merged licensing, community utility, and cinematic IP into a unified
                experience. The framework continues to stand as proof of concept for how intellectual property, when
                combined with technology and mythology, can expand into global entertainment.
              </p>

              <p className="text-black leading-relaxed">
                This case underscores my ability to design and synthesize entire creative universes: structuring
                platforms, writing lore, and aligning teams toward an integrated vision that bridges art, film, and
                future technology.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 mt-8">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-black mb-2">Have a Complex Vision to Execute?</h3>
                <p className="text-gray-600 mb-4">
                  Let's collaborate on ambitious projects that merge technology, storytelling, and innovative design
                </p>
                <Link
                  href="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 bg-fuchsia-500 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-600 transition-colors"
                >
                  Discuss Your Project
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
