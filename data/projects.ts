import type { Project } from "./types"
import { VIDEOS } from "./videos"

console.log("[v0] Loading projects data...")

export const PROJECTS: Project[] = [
  {
    slug: "video-gallery",
    title: "Directed & Produced – Watch",
    category: ["Filmmaking", "Music Video"],
    role: ["Director", "Producer", "Editor"],
    services: ["Direction", "Production", "Post"],
    cover: "/directed-produced.jpg",
    summary:
      "A curated selection of projects showcasing my multifaceted approach to filmmaking. I directed Gotta Love Kira as co-writer and executive producer, shot and edited music videos for Blxst and Nitro, and brought Peyton's vision to life through intimate storytelling.",
    videoGallery: VIDEOS,
  },
  {
    slug: "film-scripts",
    title: "Screenwriting & Punch-Ups",
    category: ["Writing", "Filmmaking"],
    role: ["Writer", "Script Doctor"],
    services: ["Original IP", "Rewrites", "Series Development"],
    cover: "/screenwriting-punchups.png",
    summary:
      "Features/pilots: Imani's Curse, Blockchain Bandits, The 3rd Mask, The Sitter, Through the Veil, Ghost Hustlers.",
    featuredVideo: {
      title: "Gotta Love Kira",
      url: "https://fawesome.tv/movies/10647411/gotta-love-kira",
      description:
        "Director, Co-Writer, EP, Supervising Editor - A heartwarming father-daughter story exploring themes of self-discovery, honesty, and mental well-being during adolescence.",
    },
    scriptGallery: [
      {
        title: "Ghost Hustlers Poster",
        image: "/images/screenwriting/ghost-hustlers-poster.png",
        description: "Stylized poster for supernatural comedy about college students turned ghost hunters",
      },
      {
        title: "Ghost Hustlers Synopsis",
        image: "/images/screenwriting/ghost-hustlers-synopsis.png",
        description: "Synopsis for paranormal comedy featuring the 'Paranormal Hustlers' crew",
      },
      {
        title: "Ghost Hustlers Script",
        image: "/images/screenwriting/ghost-hustlers-script.png",
        description: "Script excerpt showing character dialogue and supernatural investigation setup",
      },
    ],
    projectGallery: [
      {
        title: "Through the Veil Cover",
        image: "/images/screenwriting/through-the-veil-cover.png",
        description: "Supernatural thriller poster featuring mysterious entities and rural setting",
      },
      {
        title: "Through the Veil Concept Art",
        image: "/images/screenwriting/through-the-veil-concept.png",
        description: "Concept design grid showcasing supernatural elements and character designs",
      },
      {
        title: "Through the Veil Script Excerpt",
        image: "/images/screenwriting/through-the-veil-excerpt.png",
        description: "Script page showing tense dialogue and supernatural thriller atmosphere",
      },
    ],
  },
  {
    slug: "saturated-melanin",
    title: "Saturated Melanin (Fine Art Book)",
    category: ["Merch", "Photography"],
    year: 2024,
    role: ["Photographer", "Poet", "Creative Director"],
    services: ["Fine Art Photography", "Book Design", "Creative Direction"],
    nsfw: true,
    cover: "/saturated-melanin.png",
    summary: "Experimental nude fine art photography fused with poetry—melanin, light, heritage.",
    brief: "Coffee table book blending ultraviolet-driven photography with intimate verse.",
    process: "Concept → set/lighting → poetry pairing → layout → gallery edit.",
    results: "Flagship personal project; exhibition-ready series.",
    media: [{ type: "pdf", caption: "Private preview available on request." }],
  },
]

console.log(
  "[v0] Loaded",
  PROJECTS.length,
  "projects with slugs:",
  PROJECTS.map((p) => p.slug),
)
