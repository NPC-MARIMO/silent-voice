"use client"

import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Users, Heart, Zap } from "lucide-react"

export default function AboutClientPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About SilentVoice</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our mission is to break down communication barriers and make sign language accessible to everyone
            </p>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Inclusive",
                description: "We believe everyone deserves equal access to communication and learning opportunities",
              },
              {
                icon: Zap,
                title: "Innovative",
                description: "Using cutting-edge AI technology to make sign language translation accurate and instant",
              },
              {
                icon: Users,
                title: "Community-Driven",
                description: "Built with feedback from deaf communities and sign language experts worldwide",
              },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="bg-card rounded-lg border border-border p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              A passionate group of developers, designers, and deaf community members working together
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", role: "Co-founder & CEO", image: "👩‍💼" },
                { name: "Marcus Johnson", role: "Lead Developer", image: "👨‍💻" },
                { name: "Lisa Rodriguez", role: "Deaf Community Advisor", image: "👩‍🎓" },
              ].map((member, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-8">
                  <div className="text-5xl mb-4 text-center">{member.image}</div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
