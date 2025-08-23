import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { VideoGallery } from "@/components/video-gallery"
import { NsfwGate } from "@/components/nsfw-gate"
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from "@/data/projects"

interface ProjectPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Lightgod`,
    description: project.summary,
  }
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

function ProjectContent({ project }: { project: any }) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug)
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-white/70 hover:text-white">
            <Link href="/portfolio">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          {project.cover && (
            <div className="aspect-video relative rounded-2xl overflow-hidden mb-8">
              <Image src={project.cover || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          {/* Meta Header */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-white/80">{project.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.role && (
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-white/60 mb-2">Role</h3>
                  <div className="space-y-1">
                    {project.role.map((role) => (
                      <p key={role} className="text-white">
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {project.year && (
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-white/60 mb-2">Year</h3>
                  <p className="text-white">{project.year}</p>
                </div>
              )}

              {project.services && (
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-white/60 mb-2">Services</h3>
                  <div className="space-y-1">
                    {project.services.map((service) => (
                      <p key={service} className="text-white">
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-white/60 mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat) => (
                    <Badge key={cat} variant="secondary" className="bg-[#FF1A2D]/20 text-[#FF1A2D] border-[#FF1A2D]/30">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {project.brief && (
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[#FF1A2D]">Brief</h2>
              <p className="text-lg text-white/80 leading-relaxed">{project.brief}</p>
            </section>
          )}

          {project.process && (
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[#FF1A2D]">Process</h2>
              <p className="text-lg text-white/80 leading-relaxed">{project.process}</p>
            </section>
          )}

          {project.results && (
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[#FF1A2D]">Results</h2>
              <p className="text-lg text-white/80 leading-relaxed">{project.results}</p>
            </section>
          )}

          {/* Special Content for Video Gallery */}
          {project.slug === "video-gallery" && (
            <section>
              <VideoGallery />
            </section>
          )}

          {/* Media Blocks */}
          {project.media && project.media.length > 0 && (
            <section>
              <h2 className="font-heading text-2xl font-bold mb-6 text-[#FF1A2D]">Media</h2>
              <div className="space-y-6">
                {project.media.map((media, index) => (
                  <div key={index}>
                    {media.type === "pdf" && (
                      <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-[#FF1A2D]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <div className="w-8 h-8 bg-[#FF1A2D] rounded" />
                          </div>
                          <p className="text-white/70">{media.caption}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.credits && (
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[#FF1A2D]">Credits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.credits.map((credit, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-white/60">{credit.role}</span>
                    <span className="text-white">{credit.name}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.links && (
            <section>
              <h2 className="font-heading text-2xl font-bold mb-4 text-[#FF1A2D]">Links</h2>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
          {prevProject ? (
            <Button asChild variant="ghost" className="text-white/70 hover:text-white">
              <Link href={`/portfolio/${prevProject.slug}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {prevProject.title}
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Button asChild variant="ghost" className="text-white/70 hover:text-white">
              <Link href={`/portfolio/${nextProject.slug}`}>
                {nextProject.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  if (project.nsfw) {
    return (
      <NsfwGate title={project.title}>
        <ProjectContent project={project} />
      </NsfwGate>
    )
  }

  return <ProjectContent project={project} />
}
