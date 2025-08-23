import type { Metadata } from "next"
import { PROJECTS } from "@/data/projects"
import ProjectClientPage from "./ProjectClientPage"

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

export default function ProjectPage(props: ProjectPageProps) {
  return <ProjectClientPage {...props} />
}
