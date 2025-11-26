export interface User {
  id: string
  name: string
  email: string
  progress: number
  streak: number
  joinedDate: Date
  level: "beginner" | "intermediate" | "advanced"
}

export interface Lesson {
  id: string
  title: string
  category: string
  difficulty: "beginner" | "intermediate" | "advanced"
  progress: number
  videoUrl: string
  description: string
  estimatedTime: number
  completed: boolean
}

export interface TranslationResult {
  text: string
  confidence: number
  timestamp: Date
  isFinal: boolean
}

export interface PracticeSession {
  signId: string
  userAccuracy: number
  attempts: number
  bestScore: number
  feedback: string[]
  completedAt: Date
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
  lessonCount: number
  difficulty: "beginner" | "intermediate" | "advanced"
}

export interface Feature {
  icon: string
  title: string
  description: string
}
