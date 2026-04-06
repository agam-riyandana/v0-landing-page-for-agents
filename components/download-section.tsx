"use client"

import { Button } from "@/components/ui/button"
import { Download, Smartphone } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"

export function DownloadSection() {
  const { t } = useLanguage()



  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t.download.title}
                <br />
                <span className="text-primary">{t.download.subtitle}</span>
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-[500px] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {t.download.description}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="/app-release.apk"
                download="app-release.apk"
                className="rounded-full h-12 sm:h-13 px-8 sm:px-10 text-base sm:text-lg font-bold group shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-primary/90 hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="flex items-center justify-center">
                  {t.download.cta}
                  <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {t.download.available} Android
            </motion.p>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>
            <motion.div
              className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border-2 border-primary/30 shadow-2xl p-8 sm:p-12 flex flex-col items-center justify-center min-h-[400px]"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02, y: -25 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Smartphone className="h-32 w-32 sm:h-40 sm:w-40 text-primary opacity-60" />
              </motion.div>
              <p className="mt-8 text-xl sm:text-2xl font-bold text-primary text-center">
                BAYARKITA
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
              }
