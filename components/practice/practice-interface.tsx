"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, Check, X } from "lucide-react"

interface PracticeSession {
  targetSign: string
  attempts: number
  bestScore: number
  currentAccuracy: number
}

export function PracticeInterface() {
  const [session, setSession] = useState<PracticeSession>({
    targetSign: "Hello",
    attempts: 0,
    bestScore: 0,
    currentAccuracy: 0,
  })

  const [isRecording, setIsRecording] = useState(false)
  const [isFeedbackShowing, setIsFeedbackShowing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleStartPractice = async () => {
    if (!isRecording) {
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
      // Stop and evaluate
      setIsRecording(false)
      if (videoRef.current?.srcObject) {
        ;(videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop())
      }

      // Simulate accuracy evaluation
      setTimeout(() => {
        const accuracy = Math.floor(Math.random() * 40) + 60 // 60-100%
        setSession((prev) => ({
          ...prev,
          attempts: prev.attempts + 1,
          currentAccuracy: accuracy,
          bestScore: Math.max(prev.bestScore, accuracy),
        }))
        setIsFeedbackShowing(true)
      }, 1500)
    }
  }

  const handleReset = () => {
    setSession((prev) => ({
      ...prev,
      currentAccuracy: 0,
    }))
    setIsFeedbackShowing(false)
    setIsRecording(false)
  }

  const handleNextSign = () => {
    setSession((prev) => ({
      ...prev,
      targetSign: Math.random() > 0.5 ? "Thank You" : "Please",
      currentAccuracy: 0,
    }))
    setIsFeedbackShowing(false)
  }

  const accuracy = session.currentAccuracy
  const feedbackColor = accuracy < 60 ? "text-red-500" : accuracy < 80 ? "text-yellow-500" : "text-green-500"
  const feedbackMessage = accuracy < 60 ? "Keep practicing!" : accuracy < 80 ? "Getting closer!" : "Excellent work!"

  return (
    <div className="space-y-8">
      {/* Practice Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Instructions & Target */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-4">Practice Target</h3>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-5xl font-bold text-primary text-center py-8 bg-primary/10 rounded-lg"
            >
              {session.targetSign}
            </motion.div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-4">How to Practice</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Watch the demonstration video</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Click "Start Recording" to begin</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Perform the sign in front of your camera</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Click "Stop Recording" to finish</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">5.</span>
                <span>Get instant feedback on your accuracy</span>
              </li>
            </ol>
          </div>

          {/* Statistics */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-4">Session Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Attempts</span>
                <span className="font-bold text-lg">{session.attempts}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Best Score</span>
                <span className="font-bold text-lg text-primary">{session.bestScore}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Video Feed */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold">Your Camera</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative bg-card rounded-lg overflow-hidden border border-border aspect-video"
          >
            {isRecording ? (
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-muted-foreground text-sm">Camera feed will appear here</p>
                </div>
              </div>
            )}

            {/* Recording Indicator */}
            {isRecording && (
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-xs font-semibold">Recording</span>
              </motion.div>
            )}
          </motion.div>

          {/* Controls */}
          <button
            onClick={handleStartPractice}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              isRecording
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {isRecording ? (
              <>
                <Pause className="w-4 h-4" />
                Stop Recording
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Start Recording
              </>
            )}
          </button>
        </div>

        {/* Right: Feedback */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold">Feedback & Results</h3>

          {isFeedbackShowing ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-lg border border-border p-8 space-y-6 min-h-96 flex flex-col justify-between"
            >
              {/* Accuracy Score */}
              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">Your Accuracy</p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <span className={`text-5xl font-bold ${feedbackColor}`}>{accuracy}%</span>
                </motion.div>
                <p className={`text-lg font-semibold ${feedbackColor}`}>{feedbackMessage}</p>
              </div>

              {/* Detailed Feedback */}
              <div className="space-y-3 border-t border-border pt-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Hand Shape</p>
                    <p className="text-xs text-muted-foreground">Correctly formed</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {accuracy >= 75 ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-semibold text-sm">Movement Speed</p>
                    <p className="text-xs text-muted-foreground">{accuracy >= 75 ? "Good pace" : "Needs adjustment"}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {accuracy >= 80 ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-semibold text-sm">Position</p>
                    <p className="text-xs text-muted-foreground">
                      {accuracy >= 80 ? "Excellent position" : "Fine-tune placement"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors font-semibold text-sm"
                >
                  Try Again
                </button>
                <button
                  onClick={handleNextSign}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors font-semibold text-sm"
                >
                  Next Sign
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-card rounded-lg border border-border p-8 min-h-96 flex items-center justify-center text-center">
              <div>
                <div className="text-6xl mb-4">👐</div>
                <p className="text-muted-foreground">Practice and get feedback here</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Reference */}
      <div className="bg-card rounded-lg border border-border p-8">
        <h3 className="text-lg font-semibold mb-4">Demonstration Video</h3>
        <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-muted-foreground mb-4">Video demonstration of "{session.targetSign}"</p>
            <button className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              <Volume2 className="w-4 h-4" />
              Play with Audio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
