"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FilterBar } from "@/components/filter-bar"
import { ProjectCard } from "@/components/project-card"
import { PROJECTS } from "@/data/projects"
import type { Category } from "@/data/types"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category.includes(selectedCategory as Category)
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black">Portfolio</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Every frame, deck, and line of code is a vessel. This archive holds film, music videos, photography,
            experiments, and investor-ready decks, each one crafted to move minds and open doors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <p className="text-xl text-black">No projects found matching your criteria.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-gray-50 rounded-3xl p-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-black">Free Treatment Mini</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a 15-min intro discovery call; I'll draft a one-page concept.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              window.location.href = "/contact"
            }}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            Book Discovery
          </button>
        </motion.div>
      </div>
    </div>
  )
}
