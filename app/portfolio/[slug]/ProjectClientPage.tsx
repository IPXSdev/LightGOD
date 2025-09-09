"use client"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PROJECTS } from "@/data/projects"
import { useState, useEffect } from "react"
import { VideoGallery } from "@/components/video-gallery"

interface ProjectPageProps {
  params: { slug: string }
}

function ProjectContent({ project }: { project: any }) {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [modalImage, setModalImage] = useState<{ src: string; title: string; index: number } | null>(null)
  const [scriptModalImage, setScriptModalImage] = useState<{
    src: string
    title: string
    description: string
    index: number
    gallery: string
  } | null>(null)
  const [showAgeVerification, setShowAgeVerification] = useState(false)
  const [ageVerified, setAgeVerified] = useState(false)

  useEffect(() => {
    if (project?.nsfw && !ageVerified) {
      setShowAgeVerification(true)
    }
  }, [project, ageVerified])

  const handleAgeVerification = (confirmed: boolean) => {
    if (confirmed) {
      setAgeVerified(true)
      setShowAgeVerification(false)
    } else {
      window.history.back()
    }
  }

  if (showAgeVerification) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🔞</div>
          <h2 className="text-2xl font-bold text-black mb-4">Age Verification Required</h2>
          <p className="text-gray-600 mb-6">
            This content contains mature themes and is intended for adults only. You must be 18 years or older to view
            this content.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => handleAgeVerification(true)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold"
            >
              I am 18 or older - Enter
            </button>
            <button
              onClick={() => handleAgeVerification(false)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-6 rounded-lg font-semibold"
            >
              I am under 18 - Exit
            </button>
          </div>
        </div>
      </div>
    )
  }

  const galleryImages = [
    { image: "/images/saturated-melanin/book-cover.png", title: "Book Cover" },
    { image: "/images/saturated-melanin/contents.png", title: "Contents" },
    { image: "/images/saturated-melanin/electric-fairy.png", title: "The Electric Fairy" },
    { image: "/images/saturated-melanin/dear-frida-1.png", title: "Dear Frida I" },
    { image: "/images/saturated-melanin/dear-frida-2.png", title: "Dear Frida II" },
    { image: "/images/saturated-melanin/dear-frida-3.png", title: "Dear Frida III" },
    { image: "/images/saturated-melanin/saturated-muse-1.png", title: "Flora Amora" },
    { image: "/images/saturated-melanin/saturated-muse-2.png", title: "Blue Resonance" },
    { image: "/images/saturated-melanin/saturated-muse-3.png", title: "Red Illumination" },
    { image: "/images/saturated-melanin/end.png", title: "END" },
  ]

  const openScriptModal = (imageIndex: number, gallery: string) => {
    const galleryData = gallery === "script" ? project.scriptGallery : project.projectGallery
    const image = galleryData[imageIndex]
    if (image) {
      setScriptModalImage({
        src: image.image,
        title: image.title,
        description: image.description,
        index: imageIndex,
        gallery,
      })
    }
  }

  const closeScriptModal = () => {
    setScriptModalImage(null)
  }

  const navigateScriptModal = (direction: "prev" | "next") => {
    if (!scriptModalImage) return
    const galleryData = scriptModalImage.gallery === "script" ? project.scriptGallery : project.projectGallery
    let newIndex = scriptModalImage.index
    if (direction === "prev") {
      newIndex = newIndex > 0 ? newIndex - 1 : galleryData.length - 1
    } else {
      newIndex = newIndex < galleryData.length - 1 ? newIndex + 1 : 0
    }
    const newImage = galleryData[newIndex]
    setScriptModalImage({
      src: newImage.image,
      title: newImage.title,
      description: newImage.description,
      index: newIndex,
      gallery: scriptModalImage.gallery,
    })
  }

  const openImageModal = (imageIndex: number) => {
    const image = galleryImages[imageIndex]
    if (image) {
      setModalImage({ src: image.image, title: image.title, index: imageIndex })
    }
  }

  const closeModal = () => {
    setModalImage(null)
  }

  const navigateModal = (direction: "prev" | "next") => {
    if (!modalImage) return
    let newIndex = modalImage.index
    if (direction === "prev") {
      newIndex = newIndex > 0 ? newIndex - 1 : galleryImages.length - 1
    } else {
      newIndex = newIndex < galleryImages.length - 1 ? newIndex + 1 : 0
    }
    const newImage = galleryImages[newIndex]
    setModalImage({ src: newImage.image, title: newImage.title, index: newIndex })
  }

  const handlePurchaseSelection = (type: string) => {
    setShowPurchaseModal(false)
    if (type === "digital") {
      window.location.href = "/shop/saturated-melanin-digital"
    } else if (type === "physical") {
      window.location.href = "/shop/saturated-melanin-physical"
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">Project Not Found</h1>
            <Button asChild variant="ghost" className="text-black/70 hover:text-black">
              <Link href="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-black/70 hover:text-black">
            <Link href="/portfolio">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {project.cover && (
          <div className="mb-8">
            <Image
              src={project.cover || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover object-top rounded-2xl"
            />
          </div>
        )}

        <div className="mb-8">
          {project.slug === "video-gallery" ? (
            <div className="text-center mb-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent uppercase tracking-tight drop-shadow-lg">
                DIRECTED & PRODUCED
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent uppercase tracking-tight mt-2 drop-shadow-lg">
                BY LIGHTGOD
              </h2>
            </div>
          ) : project.slug === "film-scripts" ? (
            <div className="text-center mb-4">
              <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent uppercase tracking-tight max-w-4xl mx-auto drop-shadow-lg">
                SCREENWRITING & PUNCH-UPS
              </h1>
            </div>
          ) : (
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent uppercase tracking-tight drop-shadow-lg">
              {project.slug === "saturated-melanin" ? "SATURATED MELANIN" : project.title}
            </h1>
          )}
          {project.slug === "saturated-melanin" && (
            <p className="text-lg text-black mb-4 font-medium">A Fine Art Coffee Table Book</p>
          )}
          <p className="text-xl text-black/80">{project.summary}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">ROLE</h3>
            <div className="space-y-2">
              {project.role?.map((role: string) => (
                <p key={role} className="text-black/70">
                  {role}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">SERVICES</h3>
            <div className="space-y-2">
              {project.services?.map((service: string) => (
                <p key={service} className="text-black/70">
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">CATEGORIES</h3>
            <div className="flex flex-wrap gap-2">
              {project.category?.map((cat: string) => (
                <Badge key={cat} className="bg-pink-600/20 text-pink-700 border-pink-600/30">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {(project.videoGallery ||
          project.featuredVideo ||
          project.scriptGallery ||
          project.projectGallery ||
          project.slug === "saturated-melanin") && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent uppercase tracking-wide drop-shadow-lg">
              Media
            </h2>

            {project.videoGallery && (
              <div className="mb-12">
                <VideoGallery videos={project.videoGallery} />
              </div>
            )}

            {project.featuredVideo && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  Featured Project
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-semibold text-black mb-2">{project.featuredVideo.title}</h4>
                  <p className="text-black/70 mb-4">{project.featuredVideo.description}</p>
                  <Link
                    href={project.featuredVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
                  >
                    Watch Now
                  </Link>
                </div>
              </div>
            )}

            {project.scriptGallery && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  Ghost Hustlers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {project.scriptGallery.map((item: any, index: number) => (
                    <div key={index} className="cursor-pointer" onClick={() => openScriptModal(index, "script")}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-sm text-black/70 mt-2">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.projectGallery && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  Through the Veil
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {project.projectGallery.map((item: any, index: number) => (
                    <div key={index} className="cursor-pointer" onClick={() => openScriptModal(index, "project")}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-sm text-black/70 mt-2">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.slug === "saturated-melanin" && (
              <>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {galleryImages.slice(0, 9).map((item, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => openImageModal(index)}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mb-8">
                  <div className="inline-block cursor-pointer" onClick={() => openImageModal(9)}>
                    <Image
                      src="/images/saturated-melanin/end.png"
                      alt="END"
                      width={400}
                      height={300}
                      className="w-64 h-48 object-cover rounded-lg mx-auto"
                    />
                  </div>
                </div>
                <div className="flex gap-4 justify-center mb-8">
                  <button
                    onClick={() => setShowPurchaseModal(true)}
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
                  >
                    Purchase Book
                  </button>
                  <Link
                    href="/shop/fine-art"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
                  >
                    Order Prints
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    href="/shop/fine-art"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    📸 Book your Saturated Skin Art Shoot
                  </Link>
                </div>
              </>
            )}
          </div>
        )}

        {scriptModalImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeScriptModal}
          >
            <div className="relative max-w-6xl max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white text-4xl z-10 w-12 h-12 bg-black/50 rounded-full"
                onClick={closeScriptModal}
              >
                ×
              </button>
              <Image
                src={scriptModalImage.src || "/placeholder.svg"}
                alt={scriptModalImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{scriptModalImage.title}</h3>
                <p className="text-sm">{scriptModalImage.description}</p>
              </div>
              <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-white/90 rounded-full px-6 py-3">
                <button onClick={() => navigateScriptModal("prev")}>‹</button>
                <span>
                  {scriptModalImage.index + 1} of{" "}
                  {scriptModalImage.gallery === "script" ? project.scriptGallery.length : project.projectGallery.length}
                </span>
                <button onClick={() => navigateScriptModal("next")}>›</button>
              </div>
            </div>
          </div>
        )}

        {modalImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="relative max-w-6xl max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white text-4xl z-10 w-12 h-12 bg-black/50 rounded-full"
                onClick={closeModal}
              >
                ×
              </button>
              <Image
                src={modalImage.src || "/placeholder.svg"}
                alt={modalImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              {modalImage.index >= 0 && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-white/90 rounded-full px-6 py-3">
                  <button onClick={() => navigateModal("prev")}>‹</button>
                  <span>
                    {modalImage.index + 1} of {galleryImages.length}
                  </span>
                  <button onClick={() => navigateModal("next")}>›</button>
                </div>
              )}
            </div>
          </div>
        )}

        {showPurchaseModal && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Choose Your Edition</h3>
              <div className="space-y-4">
                <button
                  onClick={() => handlePurchaseSelection("digital")}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-fuchsia-600 text-left"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-black">Digital Edition (PDF)</h4>
                    <span className="text-xl font-bold text-fuchsia-600">$3.00</span>
                  </div>
                  <p className="text-gray-600 text-sm">Immediate download • High-resolution PDF</p>
                </button>
                <button
                  onClick={() => handlePurchaseSelection("physical")}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-fuchsia-600 text-left"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-black">Hardback Coffee Table Book</h4>
                    <span className="text-xl font-bold text-fuchsia-600">$97.00</span>
                  </div>
                  <p className="text-gray-600 text-sm">Premium hardcover • Museum-quality printing</p>
                </button>
              </div>
              <button
                onClick={() => setShowPurchaseModal(false)}
                className="w-full mt-6 py-3 text-gray-500 hover:text-black"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectClientPage(props: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === props.params.slug)
  return <ProjectContent project={project} />
}
