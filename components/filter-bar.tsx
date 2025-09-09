"use client"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { Category } from "@/data/types"

const categories: (Category | "All")[] = [
  "All",
  "Ai",
  "Filmmaking",
  "Music Video",
  "Pitch Decks",
  "Photography",
  "Concept/Web",
  "Worldbuilding",
  "Writing",
  "Merch",
]

interface FilterBarProps {
  selectedCategory: Category | "All"
  onCategoryChange: (category: Category | "All") => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function FilterBar({ selectedCategory, onCategoryChange, searchQuery, onSearchChange }: FilterBarProps) {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleCategoryChange = (category: Category | "All") => {
    if (category === "Merch") {
      window.location.href = "/shop/fine-art"
      scrollToTop()
      return
    }

    onCategoryChange(category)
    scrollToTop()
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" />
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white border-2 border-black text-black placeholder:text-gray-600 font-bold shadow-lg"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`cursor-pointer transition-colors ${
              selectedCategory === category
                ? "bg-[#FF1A2D] text-white hover:bg-[#FF1A2D]/80"
                : "border-black/20 text-black hover:border-[#FF1A2D]/50 hover:text-[#FF1A2D]"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
