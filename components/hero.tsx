"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm border-2 border-primary shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
              <span className="leading-tight drop-shadow-sm">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-[540px] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-semibold group"
              >
                <Link href="https://my.bayarkita.com/register">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-semibold bg-transparent border-primary text-primary hover:bg-primary/5"
              >
                <Link href="https://my.bayarkita.com/login">{t.hero.loginBtn}</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[t.hero.check1, t.hero.check2, t.hero.check3].map((text, i) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="leading-tight">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">
                Terdaftar di PSE Komdigi
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>
            <motion.div
              className="relative bg-card dark:bg-card rounded-2xl border border-border shadow-2xl p-4 sm:p-5 overflow-hidden"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02, y: -20 }}
            >
              <div className="space-y-4 sm:space-y-5">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div className="h-6 sm:h-8 w-24 sm:w-32 bg-muted rounded"></div>
                  <div className="h-6 sm:h-8 w-6 sm:w-8 bg-primary/20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-4 bg-primary text-primary-foreground rounded-xl space-y-1.5 shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider opacity-100">Saldo Anda</p>
                    <p className="text-xl sm:text-2xl font-black">Rp 2.5jt</p>
                  </motion.div>
                  <motion.div
                    className="p-4 bg-secondary rounded-xl space-y-1.5 border-2 border-primary shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[11px] sm:text-xs text-foreground font-black uppercase tracking-wider">
                      Poin Agen
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-primary">1.250</p>
                  </motion.div>
                </div>
                <div className="space-y-3">
                  <p className="text-[11px] sm:text-xs font-black text-foreground uppercase tracking-widest border-l-4 border-primary pl-2">
                    Histori Transaksi
                  </p>
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-3 bg-muted/80 rounded-xl border-2 border-border/80 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5, backgroundColor: "hsl(var(--muted))" }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-sm shadow-inner">
                          P
                        </div>
                        <div>
                          <p className="text-sm font-black text-foreground">Pulsa 50rb</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground font-black opacity-80">
                            12 Jan • 14:20
                          </p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-green-700 dark:bg-green-600 rounded-full shadow-sm">
                        <p className="text-[10px] sm:text-xs font-black text-white">Sukses</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
