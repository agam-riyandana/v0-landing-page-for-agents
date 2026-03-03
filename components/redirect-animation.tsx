"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Smartphone, Zap, CreditCard } from "lucide-react"

interface RedirectAnimationProps {
  message: string
  redirectUrl: string
  delay?: number
}

const floatingVariants = {
  animate: (i: number) => ({
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3 + i * 0.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
}

export function RedirectAnimation({ message, redirectUrl, delay = 2 }: RedirectAnimationProps) {
  const [counter, setCounter] = useState(delay)
  const [redirected, setRedirected] = useState(false)

  useEffect(() => {
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
    if (counter === 0 && !redirected) {
      setRedirected(true)
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
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          custom={0}
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 opacity-10"
        >
          <CreditCard className="h-20 w-20 text-primary" />
        </motion.div>
        <motion.div
          custom={1}
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-32 right-12 opacity-10"
        >
          <Zap className="h-24 w-24 text-accent" />
        </motion.div>
        <motion.div
          custom={2}
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/3 right-20 opacity-10"
        >
          <Smartphone className="h-20 w-20 text-primary" />
        </motion.div>
      </div>

      {/* Main card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="relative bg-gradient-to-br from-background to-card border border-primary/20 rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md mx-4 text-center space-y-8"
      >
        {/* Decorative top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-t-3xl opacity-60" />

        {/* Icon container with multiple rotating elements */}
        <div className="flex justify-center items-center h-24">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute"
          >
            <div className="h-24 w-24 rounded-full border-4 border-primary/20 border-t-primary" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute"
          >
            <div className="h-20 w-20 rounded-full border-3 border-accent/20 border-b-accent" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10"
          >
            <Smartphone className="h-12 w-12 text-primary" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-3 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            {message}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            Anda akan dialihkan dalam{" "}
            <motion.span
              key={counter}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="font-bold text-primary text-lg"
            >
              {counter}
            </motion.span>
            {" "}detik...
          </motion.p>
        </div>

        {/* Progress bar with gradient animation */}
        <div className="w-full h-2 bg-border rounded-full overflow-hidden relative z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
            key={delay}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: delay, ease: "linear" }}
          />
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-primary/10 rounded-lg p-3 flex items-center gap-2"
          >
            <CreditCard className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-xs font-semibold text-foreground">Credit</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-accent/10 rounded-lg p-3 flex items-center gap-2"
          >
            <Zap className="h-5 w-5 text-accent flex-shrink-0" />
            <span className="text-xs font-semibold text-foreground">PPOB</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
