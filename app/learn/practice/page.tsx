import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { PracticeInterface } from "@/components/practice/practice-interface"

export const metadata = {
  title: "Practice - SilentVoice",
  description: "Practice sign language with real-time feedback and accuracy scoring.",
}

export default function PracticePage() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Session</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Refine your sign language skills with interactive practice. Get real-time feedback on your accuracy, hand
              shape, movement speed, and positioning.
            </p>
          </div>

          {/* Practice Interface */}
          <PracticeInterface />
        </div>
      </div>
      <Footer />
    </main>
  )
}
