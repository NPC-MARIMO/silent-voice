"use client"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { CategoryGrid } from "@/components/learn/category-grid"
import { ProgressTracker } from "@/components/learn/progress-tracker"

export default function LearnPage() {
  // Mock data for progress tracking
  const mockProgress = {
    completedLessons: 12,
    totalLessons: 48,
    streak: 7,
    achievements: 5,
  }

  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn Sign Language</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Master sign language through structured, interactive lessons. Progress at your own pace with real-time
              feedback and achievement tracking.
            </p>
          </div>

          {/* Progress Tracker */}
          <ProgressTracker
            completedLessons={mockProgress.completedLessons}
            totalLessons={mockProgress.totalLessons}
            streak={mockProgress.streak}
            achievements={mockProgress.achievements}
          />

          {/* Category Grid */}
          <CategoryGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
