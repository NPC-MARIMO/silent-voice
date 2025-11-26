"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SignToTextTab } from "./sign-to-text-tab"
import { TextToSignTab } from "./text-to-sign-tab"

export function TranslationTabs() {
  const [activeTab, setActiveTab] = useState<"sign-to-text" | "text-to-sign">("sign-to-text")

  const tabs = [
    { id: "sign-to-text", label: "Sign to Text" },
    { id: "text-to-sign", label: "Text to Sign" },
  ]

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-8 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className="relative px-4 py-3 font-semibold transition-colors"
          >
            <span className={activeTab === tab.id ? "text-primary" : "text-muted-foreground"}>{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {activeTab === "sign-to-text" && <SignToTextTab />}
        {activeTab === "text-to-sign" && <TextToSignTab />}
      </div>
    </div>
  )
}
