"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "High School Student",
    text: "SilentVoice made learning sign language so accessible and fun! I can practice anytime, anywhere. The real-time feedback has been invaluable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Professional Translator",
    text: "The real-time translation feature is incredibly accurate. It helps me bridge communication gaps instantly and professionally.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Deaf Community Advocate",
    text: "Finally, a platform that truly understands the importance of accessible communication. This is changing lives in our community.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of people breaking down communication barriers
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem} className="p-8 bg-card rounded-xl border border-border">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
