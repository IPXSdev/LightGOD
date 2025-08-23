"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { VideoItem } from "@/data/types"

interface VideoModalProps {
  video: VideoItem
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const getEmbedUrl = (video: VideoItem) => {
    if (video.embedUrl) {
      // Add autoplay parameter to existing embed URL
      const separator = video.embedUrl.includes("?") ? "&" : "?"
      return `${video.embedUrl}${separator}autoplay=1`
    }
    return video.url
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
        <Button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70"
          variant="ghost"
          size="icon"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          {video.platform !== "external" ? (
            <iframe
              src={getEmbedUrl(video)}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              <div className="text-center">
                <p className="mb-4">This video opens on an external platform</p>
                <Button asChild className="bg-[#FF1A2D] hover:bg-[#FF1A2D]/80">
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    Open Video
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-white text-xl font-bold mb-2">{video.title}</h3>
          <p className="text-white/70 text-sm mb-3">{video.role}</p>
          {video.tags && (
            <div className="flex flex-wrap justify-center gap-2">
              {video.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
