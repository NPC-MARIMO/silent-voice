"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const STEPS = [
  {
    step: 1,
    title: "Choose Your Mode",
    description: "Select between Translate (real-time sign-to-text/text-to-sign) or Learn (structured lessons)",
  },
  {
    step: 2,
    title: "Set Up Camera",
    description: "Enable your camera for sign detection or prepare your workspace for interactive learning",
  },
  {
    step: 3,
    title: "Get Instant Results",
    description: "Receive immediate translations with confidence scores and detailed accuracy metrics",
  },
  {
    step: 4,
    title: "Track Progress",
    description: "Monitor your improvement over time with detailed statistics and achievement badges",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get started in just a few simple steps</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((item, index) => (
            <motion.div key={index} variants={staggerItem} className="relative">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-6 w-12 h-1 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
