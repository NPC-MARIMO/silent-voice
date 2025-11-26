"use client"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { LessonCard } from "@/components/learn/lesson-card"
import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/animations"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import type { Lesson } from "@/types"

// Mock lessons data
const MOCK_LESSONS: Record<string, Lesson[]> = {
  basics: [
    {
      id: "1",
      title: "The ASL Alphabet",
      category: "Basics",
      difficulty: "beginner",
      progress: 100,
      videoUrl: "#",
      description: "Learn all 26 letters of the American Sign Language alphabet with detailed demonstrations.",
      estimatedTime: 15,
      completed: true,
    },
    {
      id: "2",
      title: "Numbers 0-10",
      category: "Basics",
      difficulty: "beginner",
      progress: 75,
      videoUrl: "#",
      description: "Master signing numbers from 0 to 10 with correct hand shapes and positioning.",
      estimatedTime: 10,
      completed: false,
    },
    {
      id: "3",
      title: "Basic Hand Shapes",
      category: "Basics",
      difficulty: "beginner",
      progress: 50,
      videoUrl: "#",
      description: "Understand the foundational hand shapes used throughout sign language.",
      estimatedTime: 12,
      completed: false,
    },
  ],
  greetings: [
    {
      id: "4",
      title: "Hello & Goodbye",
      category: "Greetings",
      difficulty: "beginner",
      progress: 100,
      videoUrl: "#",
      description: "Learn how to greet and say goodbye in sign language.",
      estimatedTime: 8,
      completed: true,
    },
    {
      id: "5",
      title: "How Are You?",
      category: "Greetings",
      difficulty: "beginner",
      progress: 60,
      videoUrl: "#",
      description: "Practice asking how someone is doing and responding.",
      estimatedTime: 10,
      completed: false,
    },
  ],
  conversations: [
    {
      id: "6",
      title: "Introducing Yourself",
      category: "Conversations",
      difficulty: "intermediate",
      progress: 40,
      videoUrl: "#",
      description: "Learn to introduce yourself and share personal information.",
      estimatedTime: 20,
      completed: false,
    },
  ],
}

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category as string
  const lessons = MOCK_LESSONS[categoryId] || []

  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Back Button */}
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Categories
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">{categoryId.replace("-", " ")}</h1>
            <p className="text-lg text-muted-foreground">{lessons.length} lessons available</p>
          </div>

          {/* Lessons Grid */}
          {lessons.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {lessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No lessons found for this category.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
