"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/data/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 150) // Updated scroll timing for better mobile compatibility
  }

  return (
    <Card className="group bg-white/5 border-white/10 hover:border-[#FF1A2D]/50 transition-all duration-300 overflow-hidden">
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={project.cover || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.category.slice(0, 2).map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className="bg-white text-black border-2 border-black font-bold shadow-lg"
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
        {project.nsfw && (
          <div className="absolute top-4 right-4">
            <Badge variant="destructive" className="bg-red-500/80 text-white">
              18+
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-[#FF1A2D] transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 mb-4">{project.summary}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.role.slice(0, 2).map((role) => (
              <span key={role} className="text-xs text-white/50 font-mono">
                {role}
              </span>
            ))}
          </div>
          <Link
            href={`/portfolio/${project.slug}`}
            onClick={scrollToTop}
            prefetch={true}
            className="inline-flex items-center text-[#FF1A2D] hover:text-[#FF1A2D]/80 transition-colors"
          >
            View <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
