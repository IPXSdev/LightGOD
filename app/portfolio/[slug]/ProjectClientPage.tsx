"use client"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { VideoGallery } from "@/components/video-gallery"
import { VideoEmbed } from "@/components/video-embed"
import { NsfwGate } from "@/components/nsfw-gate"
import { ArrowLeft } from "lucide-react"
import { PROJECTS } from "@/data/projects"
import { VIDEOS } from "@/data/videos"

interface ProjectPageProps {
  params: { slug: string }
}

function ProjectContent({ project }: { project: any }) {
  const currentIndex = project ? PROJECTS.findIndex((p) => p.slug === project.slug) : -1
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const showGottaLoveKiraModal = () => {
    const modal = document.createElement("div")
    modal.className = "fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
    modal.onclick = (e) => {
      if (e.target === modal) modal.remove()
    }
    modal.innerHTML = `
      <div class="relative max-w-2xl max-h-full">
        <button class="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl" onclick="this.closest('.fixed').remove()">×</button>
        <img src="/images/screenwriting/gotta-love-kira-poster.png" alt="Gotta Love Kira Poster" class="max-w-full max-h-full object-contain rounded-lg" />
      </div>
    `
    document.body.appendChild(modal)
  }

  const getProjectCTA = () => {
    if (!project) return { button: "Start a Project", subtext: "Let's bring your vision to life.", href: "/contact" }

    switch (project.slug) {
      case "pitch-decks":
        return {
          button: "Start my deck",
          subtext: "Tell me the vision; I'll outline the story and design system.",
          href: "/contact",
        }
      case "video-gallery":
        return {
          button: "Book direction",
          subtext: "Music video, short, or commercial: let's plan the treatment.",
          href: "/contact",
        }
      case "film-scripts":
        return {
          button: "Start a punch-up",
          subtext: "Coverage, notes, and rewrites with market-ready pacing.",
          href: "/contact",
        }
      case "ai-portfolio":
        return {
          button: "Explore look development",
          subtext: "Key art, storyboards, and fast variations: guided by human authorship.",
          href: "/contact",
        }
      case "saturated-melanin":
        return {
          button: "View Merch",
          subtext: "Digital PDF now; collector's hard copy coming.",
          href: "/shop/saturated-melanin-digital",
        }
      case "cosmic-travel-guide":
        return {
          button: "Build a world",
          subtext: "Bibles, lore systems, and pitch artifacts that scale across formats.",
          href: "/contact",
        }
      default:
        return {
          button: "Start a Project",
          subtext: "Let's bring your vision to life.",
          href: "/contact",
        }
    }
  }

  const cta = getProjectCTA()

  const gottaLoveKiraVideo = VIDEOS.find((video) => video.id === "gottalovekira")

  if (!project) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Project Not Found</h1>
            <Button asChild variant="ghost" className="text-white/70 hover:text-white">
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
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-white/70 hover:text-white">
            <Link href="/portfolio" onClick={scrollToTop}>
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
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </div>
        )}

        {/* Project Title and Summary */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>
          <p className="text-xl text-white/80">{project.summary}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Role */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">ROLE</h3>
            <div className="space-y-2">
              {project.role?.map((role: string) => (
                <p key={role} className="text-white/70">
                  {role}
                </p>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">SERVICES</h3>
            <div className="space-y-2">
              {project.services?.map((service: string) => (
                <p key={service} className="text-white/70">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">CATEGORIES</h3>
            <div className="flex flex-wrap gap-2">
              {project.category?.map((cat: string) => (
                <Badge key={cat} className="bg-pink-600/20 text-pink-300 border-pink-600/30">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {(project.media ||
          project.videoGallery ||
          project.featuredVideo ||
          project.scriptGallery ||
          project.projectGallery) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Media</h2>

            {/* Featured Video */}
            {project.featuredVideo && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">{project.featuredVideo.title}</h3>

                {gottaLoveKiraVideo && (
                  <div className="mb-6">
                    <VideoEmbed
                      video={{
                        ...gottaLoveKiraVideo,
                        thumbnail: "/images/screenwriting/gotta-love-kira-poster.png",
                      }}
                      featured={true}
                    />
                  </div>
                )}

                <p className="text-white/70 text-sm mb-6">{project.featuredVideo.description}</p>

                <div className="mt-6">
                  <Image
                    src="/images/screenwriting/gotta-love-kira-fawesome.png"
                    alt="Gotta Love Kira on Fawesome"
                    width={800}
                    height={400}
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Script Gallery */}
            {project.scriptGallery && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Ghost Hustlers</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.scriptGallery.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="cursor-pointer group"
                      onClick={() => {
                        const modal = document.createElement("div")
                        modal.className = "fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                        modal.onclick = (e) => {
                          if (e.target === modal) modal.remove()
                        }
                        modal.innerHTML = `
                          <div class="relative max-w-6xl max-h-[95vh] w-full h-full flex items-center justify-center">
                            <button class="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10" onclick="this.closest('.fixed').remove()">×</button>
                            <img src="${item.image}" alt="${item.title}" class="max-w-full max-h-full object-contain rounded-lg" />
                          </div>
                        `
                        document.body.appendChild(modal)
                      }}
                    >
                      <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover object-top"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Gallery */}
            {project.projectGallery && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Through the Veil</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.projectGallery.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="cursor-pointer group"
                      onClick={() => {
                        const modal = document.createElement("div")
                        modal.className = "fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                        modal.onclick = (e) => {
                          if (e.target === modal) modal.remove()
                        }
                        modal.innerHTML = `
                          <div class="relative max-w-6xl max-h-[95vh] w-full h-full flex items-center justify-center">
                            <button class="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl z-10" onclick="this.closest('.fixed').remove()">×</button>
                            <img src="${item.image}" alt="${item.title}" class="max-w-full max-h-full object-contain rounded-lg" />
                          </div>
                        `
                        document.body.appendChild(modal)
                      }}
                    >
                      <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover object-top"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Gallery */}
            {project.videoGallery && (
              <div className="mb-8">
                <VideoGallery videos={project.videoGallery} />
              </div>
            )}

            {/* PDF Media */}
            {project.media && (
              <div className="bg-white/5 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {project.media.map((item: any, index: number) => (
                  <p key={index} className="text-white/70">
                    {item.caption}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {/* NSFW Gate */}
        {project.nsfw && (
          <div className="mb-8">
            <NsfwGate title={project.title} />
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center bg-white/5 rounded-2xl p-8">
            <Link
              href={cta.href}
              onClick={scrollToTop}
              className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors mb-3"
            >
              {cta.button}
            </Link>
            <p className="text-white/70 text-sm">{cta.subtext}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectClientPage(props: ProjectPageProps) {
  console.log("[v0] Looking for project with slug:", props.params.slug)
  console.log(
    "[v0] Available projects:",
    PROJECTS.map((p) => p.slug),
  )

  const project = PROJECTS.find((p) => p.slug === props.params.slug)

  console.log("[v0] Found project:", project?.title)
  return <ProjectContent project={project} />
}
