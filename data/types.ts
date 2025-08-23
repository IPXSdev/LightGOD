export type Category =
  | "Ai"
  | "Filmmaking"
  | "Music Video"
  | "Pitch Decks"
  | "Photography"
  | "Concept/Web"
  | "Worldbuilding"
  | "Writing"
  | "Merch"

export type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; platform: "youtube" | "vimeo" | "external"; url: string; embedUrl?: string; title?: string }
  | { type: "pdf"; src?: string; caption?: string }

export interface Project {
  slug: string
  title: string
  category: Category[]
  year?: number
  role: string[]
  services: string[]
  nsfw?: boolean
  cover?: string
  summary: string
  brief?: string
  process?: string
  results?: string
  credits?: Array<{ role: string; name: string }>
  links?: Array<{ label: string; href: string }>
  media?: MediaItem[]
}

export interface Service {
  slug: string
  title: string
  icon?: string
  image?: string
  tagline: string
  overview: string
  deliverables: string[]
  processSteps: string[]
  ctaLabel: string
}

export interface VideoItem {
  id: string
  title: string
  role: string
  platform: "youtube" | "vimeo" | "external"
  url: string
  embedUrl?: string
  thumbnail?: string
  tags?: string[]
  featured?: boolean
}
