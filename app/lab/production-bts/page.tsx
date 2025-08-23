"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ImageIcon } from "lucide-react"
import Image from "next/image"

interface ProjectBatch {
  id: string
  title: string
  description: string
  thumbnail: string
  media: Array<{
    type: "image" | "video"
    url: string
    caption?: string
    thumbnail?: string
    beforeAfter?: { before: string; after: string }
  }>
}

export default function ProductionBTSPage() {
  const [selectedBatch, setSelectedBatch] = useState<ProjectBatch | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  const projectBatches: ProjectBatch[] = [
    {
      id: "gotta-love-kira",
      title: "Gotta Love Kira",
      description:
        "Behind-the-scenes from the kinetic energy of Gotta Love Kira - from anxiety shots to wrap day celebrations",
      thumbnail: "/bts-kira-anxiety-shot.jpg",
      media: [
        {
          type: "image",
          url: "/bts-kira-anxiety-shot.jpg",
          caption: "Executing the through-the-wall anxiety shot with dramatic red lighting",
        },
        {
          type: "image",
          url: "/bts-kira-red-camera.jpg",
          caption: "Building the subspace RED camera setup at Notis Studios",
        },
        {
          type: "image",
          url: "/bts-kira-cast-house.jpg",
          caption: "Cast and crew celebrating wrap day at the house location",
        },
        {
          type: "image",
          url: "/bts-kira-rehearsal.jpg",
          caption: "Listening in as Derrick and Kira run through their lines",
        },
        {
          type: "image",
          url: "/bts-kira-gear-setup.jpg",
          caption: "Going through gear with Marcus and Dekoven at Notis Studios",
        },
        {
          type: "image",
          url: "/bts-kira-cast-school.jpg",
          caption: "Cast and crew wrap day photo at the school location",
        },
        {
          type: "image",
          url: "/bts-kira-kitchen-lines.jpg",
          caption: "Running lines with Kira and her dad Derrick in the kitchen",
        },
        {
          type: "image",
          url: "/bts-kira-wall-shot-setup.jpg",
          caption: "Setting up the shot for the anxiety through-the-wall sequence",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195173",
          caption: "Gotta love Kira thats a wrap at school a",
          thumbnail: "https://vumbnail.com/1112195173.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195204",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195204.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195145",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195145.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195133",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195133.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195113",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195113.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195106",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195106.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195097",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195097.jpg",
        },
      ],
    },
    {
      id: "short-films-music-videos",
      title: "Short Films & Music Videos",
      description:
        "Behind-the-scenes from various short films and music video productions - from BLXST's 'Headshots' to commercial work",
      thumbnail: "/bts-blxst-headshots.jpg",
      media: [
        {
          type: "image",
          url: "/bts-van-arson.jpg",
          caption: "In the van BTS with Arson walking through the shot",
        },
        {
          type: "image",
          url: "/bts-daniel-gate-check.jpg",
          caption: "Daniel and I checking the gate during production",
        },
        {
          type: "image",
          url: "/bts-la-ballerine.jpg",
          caption: "BTS from short film 'La Ballerine' for Mahogany Blues Swimwear",
        },
        {
          type: "image",
          url: "/bts-blxst-headshots.jpg",
          caption: "BTS from BLXST music video 'Headshots' with dramatic projection setup",
        },
        {
          type: "image",
          url: "/bts-van-arson-gear.jpg",
          caption: "On set in the van with Arson going over the scene while Daniel holds equipment",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195231",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195231.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195084",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195084.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195081",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195081.jpg",
        },
      ],
    },
    {
      id: "photoshoots-bts",
      title: "Photoshoots BTS",
      description:
        "Behind-the-scenes from swimwear shoots, glamour sessions, and product photography - capturing the process behind the perfect shot",
      thumbnail: "/bts-photoshoot-wrap.jpg",
      media: [
        {
          type: "image",
          url: "/bts-photoshoot-wrap.jpg",
          caption: "That's a wrap BTS with Tori Hardy and Savanna - celebrating another successful shoot",
        },
        {
          type: "image",
          url: "/bts-birthday-dallas.jpg",
          caption: "A birthday shoot in Dallas with dramatic studio lighting and sequined glamour",
        },
        {
          type: "image",
          url: "/bts-streetwear-dallas.jpg",
          caption: "Shooting for a streetwear brand in Downtown Dallas with urban skyline backdrop",
        },
        {
          type: "image",
          url: "/bts-maternity-shoot.jpg",
          caption: "Directing a maternity shoot with elaborate blue backdrop and golden throne setup",
        },
        {
          type: "image",
          url: "/bts-lamborghini-shoot.jpg",
          caption: "BTS with Tori Hardy and Savanna - luxury car photoshoot with professional lighting",
        },
        {
          type: "image",
          url: "/bts-ranae-fur-before.jpg",
          caption: "Ranae fur shoot - Before & After: Studio setup to dramatic final result",
          beforeAfter: {
            before: "/bts-ranae-fur-before.jpg",
            after: "/bts-ranae-fur-after.jpg",
          },
        },
        {
          type: "image",
          url: "/bts-beach-office.jpg",
          caption: "Another day at the office - beach photoshoot setup with mobile equipment cart",
        },
        {
          type: "image",
          url: "/bts-lamborghini-setup.jpg",
          caption: "BTS with Tori Hardy and Savanna - full production setup for luxury car shoot",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195264",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195264.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112368999",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112368999.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112371459",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112371459.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112367928",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112367928.jpg",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112373239",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112373239.jpg",
        },
      ],
    },
    {
      id: "west-adams-block-party",
      title: "West Adams Block Party BTS",
      description:
        "Behind-the-scenes from setting up stages and loading in on the street for the West Adams Block Party in front of Delicious Pizza on Adams Blvd",
      thumbnail: "/bts-block-party-doug-e-fresh.jpg",
      media: [
        {
          type: "image",
          url: "/bts-block-party-stage.jpg",
          caption: "Completed stage setup with Delicious branding and professional sound equipment",
        },
        {
          type: "image",
          url: "/bts-block-party-setup.jpg",
          caption: "Getting set up for the West Adams Block Party - load-in process in front of Delicious Pizza",
        },
        {
          type: "image",
          url: "/bts-block-party-loading.jpg",
          caption: "Loading in during early morning/evening with production trucks and equipment",
        },
        {
          type: "image",
          url: "/bts-block-party-shooting.jpg",
          caption:
            "Shooting the West Adams Block Party - capturing the energy and spontaneity of street-level performance",
        },
        {
          type: "image",
          url: "/bts-block-party-subwoofers.jpg",
          caption: "Those subwoofers are huge - massive audio arrays spread across the closed street",
        },
        {
          type: "image",
          url: "/bts-block-party-jbl-stack.jpg",
          caption: "The JBL audio stack and our awesome engineer - technical expertise for large-scale audio",
        },
        {
          type: "image",
          url: "/bts-block-party-tents.jpg",
          caption: "Pop up tents are almost set - vendor setup and community coming together",
        },
        {
          type: "image",
          url: "/bts-block-party-doug-e-fresh.jpg",
          caption: "On stage with Doug E Fresh at the West Adams Block Party - epic finale with massive crowd",
        },
      ],
    },
    {
      id: "in-my-own-world",
      title: "In My Own World",
      description:
        "A personal gallery mixing set design, studio moments, events, and art making - the quieter, more intimate side of the creative process",
      thumbnail: "/bts-personal-props.jpg",
      media: [
        {
          type: "video",
          url: "https://vimeo.com/1112195218",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195218.jpg",
        },
        {
          type: "image",
          url: "/bts-personal-props.jpg",
          caption: "Sometimes I try on the props - playful moments with costume pieces and dramatic lighting",
        },
        {
          type: "image",
          url: "/bts-personal-potions.jpg",
          caption:
            "Potion planning set design - glowing bottles and mystical laboratory aesthetics for fantasy projects",
        },
        {
          type: "image",
          url: "/bts-personal-preproduction.jpg",
          caption: "Gotta Love Kira BTS pre-production - probably ordering food while surrounded by lighting equipment",
        },
        {
          type: "video",
          url: "https://vimeo.com/1112195250",
          caption: "[Actual Vimeo Title Needed]",
          thumbnail: "https://vumbnail.com/1112195250.jpg",
        },
      ],
    },
  ]

  const closeModal = () => {
    setSelectedBatch(null)
    setCurrentMediaIndex(0)
  }

  const goToPrevious = () => {
    if (selectedBatch) {
      setCurrentMediaIndex((prev) => (prev === 0 ? selectedBatch.media.length - 1 : prev - 1))
    }
  }

  const goToNext = () => {
    if (selectedBatch) {
      setCurrentMediaIndex((prev) => (prev === selectedBatch.media.length - 1 ? 0 : prev + 1))
    }
  }

  const goToMedia = (index: number) => {
    setCurrentMediaIndex(index)
  }

  const renderMedia = (media: {
    type: "image" | "video"
    url: string
    caption?: string
    beforeAfter?: { before: string; after: string }
  }) => {
    if (media.type === "video" && media.url.includes("vimeo.com")) {
      const vimeoId = media.url.split("/").pop()
      return (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )
    } else if (media.type === "video") {
      return <video src={media.url} controls autoPlay className="w-full h-full object-cover" />
    } else if (media.beforeAfter) {
      return (
        <div className="w-full h-full flex">
          <div className="w-1/2 relative">
            <img
              src={media.beforeAfter.before || "/placeholder.svg"}
              alt="Before"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              Before
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              src={media.beforeAfter.after || "/placeholder.svg"}
              alt="After"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
              After
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <img
          src={media.url || "/placeholder.svg"}
          alt="BTS content"
          className="w-full h-full object-cover object-top"
        />
      )
    }
  }

  const renderCarouselThumbnail = (
    media: {
      type: "image" | "video"
      url: string
      thumbnail?: string
      beforeAfter?: { before: string; after: string }
    },
    index: number,
  ) => {
    const thumbnailUrl = media.thumbnail || media.url
    const isActive = index === currentMediaIndex

    return (
      <div
        key={index}
        className={`relative cursor-pointer transition-all duration-300 ${
          isActive ? "scale-110 ring-2 ring-fuchsia-500" : "scale-90 opacity-60 hover:opacity-80"
        }`}
        onClick={() => goToMedia(index)}
      >
        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200">
          {media.beforeAfter ? (
            <div className="w-full h-full flex">
              <img
                src={media.beforeAfter.before || "/placeholder.svg"}
                alt="Before"
                className="w-1/2 h-full object-cover object-top"
              />
              <img
                src={media.beforeAfter.after || "/placeholder.svg"}
                alt="After"
                className="w-1/2 h-full object-cover object-top"
              />
            </div>
          ) : (
            <img
              src={thumbnailUrl || "/placeholder.svg"}
              alt={`Media ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />
          )}
          {media.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedBatch) {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedBatch])

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-black hover:text-fuchsia-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lab
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-fuchsia-100 rounded-lg flex items-center justify-center">
              <Camera className="w-8 h-8 text-fuchsia-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-black">Production BTS</h1>
              <Badge variant="outline" className="text-green-600 border-green-300 mt-2">
                Active
              </Badge>
            </div>
          </div>

          <Card className="bg-white border-gray-200 mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-black leading-relaxed mb-6">
                This gallery is the living archive of my process. Every frame comes from the worlds I have built:
                "Headshots" with its kinetic energy, The Sitter with its psychological edge, the ultraviolet visions of
                Whitrion, and commercial shoots for fashion, swimwear, and restaurants. It extends to music festivals,
                recording sessions, and brand activations, where creativity collides with sound, light, and movement.
              </p>

              <p className="text-black leading-relaxed mb-6">
                These images and clips pull back the curtain on the work. They reveal the crews in motion, the
                improvisations that sparked new ideas, and the problem-solving that turned obstacles into style. They
                capture the sweat, the laughter, and the quiet precision that shape the final product but rarely appear
                on the screen.
              </p>

              <p className="text-black leading-relaxed mb-6">
                Production BTS is more than documentation. It is a record of collaboration and invention, the place
                where vision takes form and where the true story of creation unfolds.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  BTS
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Production
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Documentation
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Filmmaking
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-black border-gray-300">
                  Process
                </Badge>
              </div>
            </CardContent>
          </Card>

          {projectBatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {projectBatches.map((batch) => (
                <Card
                  key={batch.id}
                  className="bg-white border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedBatch(batch)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                      <img
                        src={batch.thumbnail || "/placeholder.svg"}
                        alt={batch.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-black mb-2">{batch.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{batch.description}</p>
                      <div className="flex items-center gap-2 text-fuchsia-500">
                        <ImageIcon className="w-4 h-4" />
                        <span className="text-sm">{batch.media.length} items</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-black mb-4">BTS Gallery</h3>
                <p className="text-black mb-6">
                  Project batches with behind-the-scenes photos and videos will be added here.
                </p>
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12">
                  <p className="text-gray-500">Behind-the-scenes content coming soon</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-white border-gray-200 mt-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-between gap-8">
                <div className="flex-shrink-0">
                  <Link href="/lab/dynamics-multiverse" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src="/dynamics-multiverse-banner.png"
                        alt="Dynamics Multiverse"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                <div className="flex-1 text-center">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">Ready to Document Your Story?</h3>
                  <p className="text-gray-600 mb-4">
                    Let's capture the behind-the-scenes magic of your next production with professional BTS coverage
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 bg-fuchsia-500 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-600 transition-colors"
                  >
                    Get In Touch
                  </Link>
                </div>

                <div className="flex-shrink-0">
                  <Link href="/lab/look-development" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src="/look-dev-personal-statement.png"
                        alt="Look Development Pipeline"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {selectedBatch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-fuchsia-500 z-10">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
                <div className="aspect-video bg-gray-100 relative">
                  {renderMedia(selectedBatch.media[currentMediaIndex])}
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-black mb-2">{selectedBatch.title}</h3>
                  {selectedBatch.media[currentMediaIndex]?.caption && (
                    <p className="text-gray-600 mb-4">{selectedBatch.media[currentMediaIndex].caption}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={goToPrevious}
                        className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-black rounded transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={goToNext}
                        className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-black rounded transition-colors"
                      >
                        Next
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-3 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors"
                      >
                        Exit Gallery
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">
                      {currentMediaIndex + 1} of {selectedBatch.media.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pb-8">
              <div className="flex items-center gap-4 max-w-4xl overflow-x-auto px-4">
                {selectedBatch.media.map((media, index) => renderCarouselThumbnail(media, index))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
