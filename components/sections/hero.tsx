"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={staggerItem} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Where <span className="text-primary">Hands</span> Speak Volumes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Real-time sign language translation and interactive learning platform bridging communication gaps between
              deaf and hearing communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/translate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Start Translating
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Learn Sign Language
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div variants={staggerItem} className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Hand illustration with particles */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl" />
              </motion.div>

              {/* Floating particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.cos(i) * 20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                  }}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
