"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative py-20 px-4 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans mb-6 text-foreground text-balance">
            Breaking Barriers Through Sign Language
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            SilentVoice is dedicated to making sign language accessible to everyone. We believe communication should
            have no barriers, and technology should empower, not limit.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
