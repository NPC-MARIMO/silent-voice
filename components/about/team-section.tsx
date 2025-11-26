"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "/professional-woman-with-sign-language-background.jpg",
    bio: "Deaf advocate and tech entrepreneur with 10+ years in AI research.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    image: "/professional-man-technology-engineer.jpg",
    bio: "Former ML engineer at major tech company, passionate about accessibility.",
  },
  {
    name: "Lisa Rodriguez",
    role: "Head of Product",
    image: "/professional-woman-product-manager.png",
    bio: "UX/accessibility expert focused on inclusive design practices.",
  },
  {
    name: "David Kim",
    role: "Head of Community",
    image: "/professional-man-community-builder.jpg",
    bio: "Sign language educator and community organizer.",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 px-4 sm:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-4 text-foreground">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Diverse expertise united by a shared vision</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-4 overflow-hidden rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
