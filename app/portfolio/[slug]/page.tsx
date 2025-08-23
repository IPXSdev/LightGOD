import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PROJECTS } from "@/data/projects"
import ProjectClientPage from "./ProjectClientPage"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  console.log("[v0] generateStaticParams called")
  const staticParams = PROJECTS.map((p) => ({ slug: p.slug }))
  console.log("[v0] Generated static params:", staticParams)
  return staticParams
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  console.log("[v0] generateMetadata called with slug:", slug)
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) {
    console.log("[v0] Project not found for slug:", slug)
    return { title: "Project Not Found" }
  }
  console.log("[v0] Found project:", project.title)
  return { title: `${project.title} - LightGod`, description: project.summary }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  console.log("[v0] ProjectPage called with slug:", slug)
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) {
    console.log("[v0] Project not found, calling notFound()")
    notFound()
  }
  console.log("[v0] Rendering ProjectClientPage for:", project.title)
  return <ProjectClientPage params={{ slug }} />
}
