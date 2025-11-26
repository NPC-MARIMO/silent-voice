"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { TrendingUp, Flame, Award, Target } from "lucide-react"

interface ProgressTrackerProps {
  completedLessons: number
  totalLessons: number
  streak: number
  achievements: number
}

export function ProgressTracker({ completedLessons, totalLessons, streak, achievements }: ProgressTrackerProps) {
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)

  const stats = [
    {
      icon: TrendingUp,
      label: "Progress",
      value: `${progressPercentage}%`,
      color: "text-blue-500",
    },
    {
      icon: Flame,
      label: "Current Streak",
      value: `${streak} days`,
      color: "text-orange-500",
    },
    {
      icon: Award,
      label: "Achievements",
      value: achievements.toString(),
      color: "text-yellow-500",
    },
    {
      icon: Target,
      label: "Lessons Completed",
      value: `${completedLessons}/${totalLessons}`,
      color: "text-green-500",
    },
  ]

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div key={index} variants={staggerItem} className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <Icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
