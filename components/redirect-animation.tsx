"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Loader } from "lucide-react"

interface RedirectAnimationProps {
  message: string
  redirectUrl: string
  delay?: number
}

export function RedirectAnimation({ message, redirectUrl, delay = 2 }: RedirectAnimationProps) {
  const [counter, setCounter] = useState(delay)
  const [redirected, setRedirected] = useState(false)

  useEffect(() => {
    // Start countdown
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Redirect when counter reaches 0
    if (counter === 0 && !redirected) {
      setRedirected(true)
      // Use window.open for better compatibility, or direct redirect
      if (typeof window !== "undefined") {
        window.location.href = redirectUrl
      }
    }
  }, [counter, redirectUrl, redirected])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        className="bg-background rounded-2xl shadow-2xl p-8 sm:p-10 max-w-md mx-4 border border-primary/20 text-center space-y-6"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Loader className="h-12 w-12 text-primary mx-auto" />
        </motion.div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">{message}</h2>
          <p className="text-sm text-muted-foreground">
            Anda akan dialihkan dalam <span className="font-bold text-primary">{counter}</span> detik...
          </p>
        </div>

        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-primary/70 to-primary/50"
            key={delay}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: delay, ease: "linear" }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
