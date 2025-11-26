"use client"

import { motion } from "framer-motion"

const impactItems = [
  {
    title: "Accessibility",
    description: "Making communication truly accessible for everyone, regardless of hearing ability.",
  },
  {
    title: "Economic Empowerment",
    description: "Enabling Deaf professionals to access job opportunities and participate fully in the workplace.",
  },
  {
    title: "Education",
    description: "Providing resources for sign language learners at all proficiency levels.",
  },
  {
    title: "Cultural Preservation",
    description: "Celebrating and preserving sign language heritage while embracing modern technology.",
  },
]

export function ImpactSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-4 text-foreground">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">How we're making a difference in the world</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-primary/20 bg-gradient-to-br from-accent/10 to-transparent hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
