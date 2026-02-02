"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function NotFound() {
  const { t, language } = useLanguage()

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background dark:via-background dark:to-primary/20 relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Text Animation */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              >
                4
              </motion.div>
              <motion.div
                className="relative h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Search className="w-full h-full text-primary/60" />
              </motion.div>
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary/60 via-primary/80 to-primary bg-clip-text text-transparent"
              >
                4
              </motion.div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-foreground"
            >
              {language === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found"}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto"
          >
            {language === "id"
              ? "Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Mari kembali ke halaman utama dan lanjutkan petualangan Anda bersama BAYARKITA."
              : "Sorry, the page you're looking for doesn't exist or has been moved. Let's go back to the homepage and continue your journey with BAYARKITA."}
          </motion.p>

          {/* Floating Icons */}
          <motion.div
            className="flex justify-center gap-6 sm:gap-8 py-6 sm:py-8"
            variants={itemVariants}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary/40"
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="text-primary/30"
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="text-primary/40"
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full h-12 sm:h-13 px-8 sm:px-10 text-sm sm:text-base font-bold group"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {language === "id" ? "Kembali ke Beranda" : "Back to Home"}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-12 sm:h-13 px-8 sm:px-10 text-sm sm:text-base font-bold bg-transparent group"
            >
              <Link href="#features">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {language === "id" ? "Lihat Fitur" : "View Features"}
              </Link>
            </Button>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            variants={itemVariants}
            className="pt-6 sm:pt-8"
          >
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-semibold text-primary">
                  {language === "id" ? "💡 Tip:" : "💡 Tip:"}
                </span>{" "}
                {language === "id"
                  ? "Pastikan URL sudah benar atau gunakan menu navigasi untuk menemukan apa yang Anda cari."
                  : "Make sure the URL is correct or use the navigation menu to find what you're looking for."}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
