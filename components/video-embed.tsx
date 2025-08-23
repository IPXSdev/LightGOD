"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { VideoModal } from "./video-modal"
import type { VideoItem } from "@/data/types"

interface VideoEmbedProps {
  video: VideoItem
  className?: string
  featured?: boolean
}

export function VideoEmbed({ video, className = "", featured = false }: VideoEmbedProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={`relative rounded-lg overflow-hidden cursor-pointer group ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={`relative ${featured ? "aspect-[16/9]" : "aspect-video"}`}>
          {video.thumbnail ? (
            <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
          )}

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
            <div
              className={`bg-[#FF1A2D]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${featured ? "w-20 h-20" : "w-16 h-16"}`}
            >
              <Play className={`text-white ml-1 ${featured ? "w-10 h-10" : "w-8 h-8"}`} />
            </div>
          </div>
        </div>

        <div className="p-4 bg-black/80">
          <h3 className={`font-heading font-bold mb-1 text-white ${featured ? "text-2xl" : "text-lg"}`}>
            {video.title}
          </h3>
          <p className={`text-white/70 ${featured ? "text-base" : "text-sm"}`}>{video.role}</p>
          {video.tags && (
            <div className="flex flex-wrap gap-1 mt-2">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className={`bg-white/20 text-white px-2 py-1 rounded ${featured ? "text-sm" : "text-xs"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <VideoModal video={video} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
