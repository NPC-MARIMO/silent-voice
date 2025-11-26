"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem, scaleOnHover } from "@/lib/animations"
import { Zap, BookOpen, BarChart3 } from "lucide-react"

const FEATURES = [
  {
    icon: Zap,
    title: "Real-time Translation",
    description: "Sign to text and text to sign conversion with instant, accurate results powered by advanced AI",
  },
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Structured lessons with video demonstrations and progress tracking to master sign language",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Feedback",
    description: "Practice with instant accuracy scoring and personalized recommendations for improvement",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to break down communication barriers and learn sign language effectively
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={scaleOnHover.whileHover}
                transition={scaleOnHover.transition}
                className="p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
