"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { RegisterButton } from "@/components/register-button"
import { LoginButton } from "@/components/login-button"

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
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm border-2 border-blue-600 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="leading-tight drop-shadow-sm">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-[580px] leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <RegisterButton
                size="lg"
                className="rounded-full h-12 sm:h-13 px-8 sm:px-10 text-base sm:text-lg font-bold group shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-primary/90 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </RegisterButton>
              <LoginButton
                size="lg"
                variant="outline"
                className="rounded-full h-12 sm:h-13 px-8 sm:px-10 text-base sm:text-lg font-bold bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all"
              />
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
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-300 dark:border-green-700 mt-6 sm:mt-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <span className="text-xs sm:text-sm font-bold text-green-700 dark:text-green-300">
                {t.language === "id" ? "Terdaftar di PSE Komdigi" : "Registered with Komdigi PSE"}
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
                    className="p-4 bg-blue-600 text-white rounded-xl space-y-1.5 shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider opacity-100">{t.language === "id" ? "Saldo Anda" : "Your Balance"}</p>
                    <p className="text-xl sm:text-2xl font-black">Rp 2.5jt</p>
                  </motion.div>
                  <motion.div
                    className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1.5 border-2 border-blue-600 shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-200 font-black uppercase tracking-wider">
                      {t.language === "id" ? "Poin Agen" : "Agent Points"}
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">1.250</p>
                  </motion.div>
                </div>
                <div className="space-y-3">
                  <p className="text-[11px] sm:text-xs font-black text-foreground uppercase tracking-widest border-l-4 border-blue-600 pl-2">
                    {t.language === "id" ? "Histori Transaksi" : "Transaction History"}
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
                        <div className="h-10 w-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm shadow-inner">
                          P
                        </div>
                        <div>
                          <p className="text-sm font-black text-foreground">{t.language === "id" ? "Pulsa 50rb" : "Pulse 50k"}</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground font-black opacity-80">
                            12 Jan • 14:20
                          </p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-emerald-600 dark:bg-emerald-700 rounded-full shadow-sm">
                        <p className="text-[10px] sm:text-xs font-black text-white">{t.language === "id" ? "Sukses" : "Success"}</p>
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
