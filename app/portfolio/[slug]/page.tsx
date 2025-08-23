import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PROJECTS } from "@/data/projects"
import ProjectClientPage from "./ProjectClientPage"

interface ProjectPageProps {
  params: { slug: string }
}

export const dynamicParams = false

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) return { title: "Project Not Found" }
  return { title: `${project.title} - LightGod`, description: project.summary }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()
  return <ProjectClientPage params={params} />
}
