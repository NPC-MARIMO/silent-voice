"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

export function TextToSignTab() {
  const [inputText, setInputText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 3000)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Input */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Enter Text</h3>
          <div className="space-y-2">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type something to see the sign language demonstration..."
              className="w-full h-40 px-4 py-3 bg-card rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{inputText.length} characters</span>
              <span className="text-sm text-muted-foreground">Max 500</span>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={handlePlay}
            disabled={!inputText}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                Playing...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Play Demonstration
              </>
            )}
          </button>
        </div>

        {/* Video Display */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Sign Language Video</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-lg overflow-hidden border border-border aspect-video flex items-center justify-center"
          >
            {isPlaying ? (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-6xl"
              >
                👐
              </motion.div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-2">🎬</div>
                <p className="text-muted-foreground">Video demonstration will play here</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Sign Alphabet Reference */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">ASL Alphabet Reference</h3>
        <div className="bg-card rounded-lg border border-border p-8">
          <div className="grid grid-cols-6 md:grid-cols-9 gap-4">
            {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"].map(
              (letter) => (
                <div
                  key={letter}
                  onClick={() => setInputText((prev) => prev + letter)}
                  className="aspect-square bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  <span className="text-2xl font-bold text-primary">{letter}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
