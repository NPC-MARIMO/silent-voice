"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Square, RotateCcw } from "lucide-react"

export function SignToTextTab() {
  const [isRecording, setIsRecording] = useState(false)
  const [translatedText, setTranslatedText] = useState("")
  const [confidence, setConfidence] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleStartStop = async () => {
    if (!isRecording) {
      // Start recording
      setIsRecording(true)
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
      }
    } else {
      // Stop recording and simulate translation
      setIsRecording(false)
      if (videoRef.current?.srcObject) {
        ;(videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop())
      }

      // Simulate translation result
      setTimeout(() => {
        setTranslatedText("Hello, how are you today?")
        setConfidence(92)
      }, 1500)
    }
  }

  const handleReset = () => {
    setTranslatedText("")
    setConfidence(0)
    setIsRecording(false)
    if (videoRef.current?.srcObject) {
      ;(videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop())
    }
  }

  return (
    <div className="space-y-8">
      {/* Camera Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Camera Feed</h3>
          <div className="relative bg-card rounded-lg overflow-hidden border border-border aspect-video">
            {isRecording ? (
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-muted-foreground">Camera feed will appear here</p>
                </div>
              </div>
            )}

            {/* Recording Indicator */}
            {isRecording && (
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm font-semibold">Recording</span>
              </motion.div>
            )}
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <button
              onClick={handleStartStop}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                isRecording
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {isRecording ? (
                <>
                  <Square className="w-4 h-4" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Recording
                </>
              )}
            </button>
            {translatedText && (
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Translation Results */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Translation Result</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-lg border border-border p-8 min-h-64 flex flex-col justify-between"
          >
            <div>
              {translatedText ? (
                <>
                  <p className="text-2xl leading-relaxed font-medium text-foreground mb-6">"{translatedText}"</p>

                  {/* Confidence Score */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-muted-foreground">Confidence</span>
                      <span className="text-sm font-bold text-primary">{confidence}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${confidence}%` }}
                        transition={{ duration: 0.8 }}
                        className="bg-primary h-full rounded-full"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center text-muted-foreground">
                  <p className="text-lg">Start recording to see translation results here</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Alphabet Reference */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">ASL Alphabet Reference</h3>
        <div className="bg-card rounded-lg border border-border p-8">
          <div className="grid grid-cols-6 md:grid-cols-9 gap-4">
            {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"].map(
              (letter) => (
                <div
                  key={letter}
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
