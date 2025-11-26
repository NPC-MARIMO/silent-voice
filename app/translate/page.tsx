import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { TranslationTabs } from "@/components/translate/translation-tabs"

export const metadata = {
  title: "Translate - SilentVoice",
  description: "Real-time sign language translation. Convert between sign language and text instantly.",
}

export default function TranslatePage() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Real-time Translation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Translate between sign language and text instantly. Use your camera for live translation or convert text
              to sign language demonstrations.
            </p>
          </div>

          <TranslationTabs />
        </div>
      </div>
      <Footer />
    </main>
  )
}
