"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, scaleOnHover } from "@/lib/animations"
import { Search } from "lucide-react"
import { CATEGORIES } from "@/lib/constants"

type DifficultyFilter = "all" | "beginner" | "intermediate" | "advanced"

export function CategoryGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("all")

  const filteredCategories = CATEGORIES.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDifficulty = difficultyFilter === "all" || category.difficulty === difficultyFilter
    return matchesSearch && matchesDifficulty
  })

  const difficultyColors = {
    beginner: "bg-green-500/10 text-green-700 border-green-200",
    intermediate: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
    advanced: "bg-red-500/10 text-red-700 border-red-200",
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Difficulty Filter */}
        <div className="flex gap-2 flex-wrap md:justify-end">
          {["all", "beginner", "intermediate", "advanced"].map((level) => (
            <button
              key={level}
              onClick={() => setDifficultyFilter(level as DifficultyFilter)}
              className={`px-4 py-2 rounded-lg border transition-colors capitalize ${
                difficultyFilter === level
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:bg-muted"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCategories.map((category) => (
          <Link key={category.id} href={`/learn/${category.id}`}>
            <motion.div
              variants={staggerItem}
              whileHover={scaleOnHover.whileHover}
              transition={scaleOnHover.transition}
              className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border capitalize ${difficultyColors[category.difficulty]}`}
                  >
                    {category.difficulty}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">{category.lessonCount} lessons</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No categories found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}
