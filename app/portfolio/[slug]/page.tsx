import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PROJECTS } from "@/data/projects"
import ProjectClientPage from "./ProjectClientPage"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const staticParams = PROJECTS.filter((p) => p.slug !== "pitch-decks").map((p) => ({ slug: p.slug }))
  return staticParams
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) {
    return { title: "Project Not Found" }
  }
  return { title: `${project.title} - LightGod`, description: project.summary }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) {
    notFound()
  }
  return <ProjectClientPage params={{ slug }} />
}
