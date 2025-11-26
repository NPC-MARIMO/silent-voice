"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="py-20 px-4 sm:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-6 text-foreground">Our Mission</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
              We're building the world's most accessible sign language platform. Our mission is to democratize sign
              language education and real-time translation technology.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Whether you're Deaf, hard of hearing, or hearing, SilentVoice enables meaningful communication without
              compromise.
            </p>
            <ul className="space-y-3">
              {[
                "Accurate real-time translation",
                "Personalized learning paths",
                "Community-driven content",
                "Privacy-first approach",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "70M+", label: "Sign language users worldwide" },
              { number: "50+", label: "Languages supported" },
              { number: "1M+", label: "Active learners" },
              { number: "99.9%", label: "Translation accuracy" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 text-center hover:border-primary/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
