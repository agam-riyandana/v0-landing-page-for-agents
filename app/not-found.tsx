"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-context"

export default function NotFound() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background dark:via-background dark:to-primary/20 relative overflow-hidden flex items-center justify-center px-4 py-12 pt-32 sm:pt-40">
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
              {[1, 2, 3].map((icon) => (
                <motion.div
                  key={icon}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: icon * 0.2,
                  }}
                  className="p-3 rounded-full bg-primary/10 border border-primary/20"
                >
                  <Search className="h-5 w-5 text-primary/60" />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              variants={itemVariants}
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 group"
              >
                {language === "id" ? "Kembali ke Beranda" : "Back to Home"}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
              <Link
                href="/harga"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-8 py-3 rounded-full font-semibold border-2 border-foreground hover:bg-foreground/10 transition-all duration-200"
              >
                {language === "id" ? "Lihat Harga" : "View Pricing"}
              </Link>
            </motion.div>

            {/* Helpful Tip */}
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
    </>
  )
}
