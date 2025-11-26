import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"
import { ImpactSection } from "@/components/about/impact-section"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
export const metadata = {
  title: "About - SilentVoice",
  description:
    "Learn about SilentVoice mission to bridge communication gaps through sign language translation and learning.",
}

export default function AboutPage() {
  return (

    <main className="min-h-screen bg-background">
            <Navigation />
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <ImpactSection />
      <Footer />
    </main>
  )
}
