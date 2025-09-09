"use client"

import { VideoEmbed } from "./video-embed"
import { VIDEOS } from "@/data/videos"
import type { VideoItem } from "@/data/types"

interface VideoGalleryProps {
  videos?: VideoItem[]
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  const videoList = videos || VIDEOS
  const featuredReel = videoList.find((video) => video.featured)
  const otherVideos = videoList.filter((video) => !video.featured)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold mb-4 text-black">Directed & Produced</h2>
        <p className="text-black">
          A selection of music videos, series, and creative projects showcasing cinematic storytelling.
        </p>
      </div>

      {featuredReel && (
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <VideoEmbed video={featuredReel} featured={true} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherVideos.map((video) => (
          <VideoEmbed key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
