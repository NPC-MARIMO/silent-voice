"use client"

import Link from "next/link"
import { Hand, Mail, Linkedin, Github, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    Product: [
      { label: "Translate", href: "/translate" },
      { label: "Learn", href: "/learn" },
      { label: "Practice", href: "/learn/practice" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Support", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  }

  return (
    <footer className="bg-foreground text-foreground-reverse mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-card rounded-lg">
                <Hand className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg text-card">SilentVoice</span>
            </Link>
            <p className="text-sm text-card/80 leading-relaxed">
              Bridging communication gaps through real-time sign language translation and interactive learning.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 bg-card/10 hover:bg-card/20 rounded-lg transition-colors">
                <Twitter className="w-4 h-4 text-card" />
              </a>
              <a href="#" className="p-2 bg-card/10 hover:bg-card/20 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4 text-card" />
              </a>
              <a href="#" className="p-2 bg-card/10 hover:bg-card/20 rounded-lg transition-colors">
                <Github className="w-4 h-4 text-card" />
              </a>
              <a
                href="mailto:hello@silentvoice.com"
                className="p-2 bg-card/10 hover:bg-card/20 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-card" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-card mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-card/70 hover:text-card transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-card/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-card/70">© {currentYear} SilentVoice. All rights reserved.</p>
          <div className="flex items-center gap-1 text-sm text-card/70">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>for deaf and hearing communities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
