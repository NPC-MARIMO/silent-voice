"use client"

import { motion } from "framer-motion"
import { Heart, Users, Zap, Lock } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Inclusive",
    description: "We design for everyone—Deaf, hard of hearing, and hearing communities alike.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Our platform grows through user feedback and collaborative content creation.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We leverage cutting-edge AI and computer vision for accurate, real-time translation.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data is yours. We never train on personal content without explicit consent.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 px-4 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-4 text-foreground">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
