"use client"

import { motion } from "framer-motion"
import { scaleOnHover } from "@/lib/animations"
import type { Lesson } from "@/types"
import { CheckCircle2, PlayCircle } from "lucide-react"

interface LessonCardProps {
  lesson: Lesson
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <motion.div
      whileHover={scaleOnHover.whileHover}
      transition={scaleOnHover.transition}
      className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{lesson.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
          </div>
          {lesson.completed && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground font-semibold">Progress</span>
            <span className="text-xs font-bold text-primary">{lesson.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${lesson.progress}%` }}
              transition={{ duration: 0.8 }}
              className="bg-primary h-full rounded-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">{lesson.estimatedTime} min</span>
          <PlayCircle className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  )
}
