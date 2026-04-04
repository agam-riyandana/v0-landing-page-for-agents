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
    <section suppressHydrationWarning className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Batik Indonesia Pattern Background - CSS Based */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:via-transparent dark:to-accent/10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(var(--primary), 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(var(--accent), 0.02) 0%, transparent 50%)'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/90 to-primary text-primary-foreground font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm border-2 border-primary shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="relative flex h-2.5 w-2.5"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 animate-pulse"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-lg"></span>
              </motion.span>
              <span className="leading-tight drop-shadow-sm">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight sm:leading-[1.1] md:leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-[580px] leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <RegisterButton
                size="lg"
                className="rounded-full h-10 sm:h-12 md:h-13 px-6 sm:px-8 md:px-10 text-xs sm:text-sm md:text-base lg:text-lg font-bold group shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-primary/90 hover:scale-105 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </RegisterButton>
              <LoginButton
                size="lg"
                variant="outline"
                className="rounded-full h-10 sm:h-12 md:h-13 px-6 sm:px-8 md:px-10 text-xs sm:text-sm md:text-base lg:text-lg font-bold bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all w-full sm:w-auto"
              />
            </motion.div>

            <motion.div
              className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 pt-2 sm:pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[t.hero.check1, t.hero.check2, t.hero.check3].map((text, i) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                  <span className="leading-tight">{text}</span>
                </motion.div>
              ))}
            </motion.div>


          </motion.div>

          <motion.div
            className="relative mt-6 sm:mt-8 lg:mt-0 hidden sm:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>
            <motion.div
              className="relative bg-card dark:bg-card rounded-lg sm:rounded-xl lg:rounded-2xl border border-border shadow-lg sm:shadow-xl lg:shadow-2xl p-3 sm:p-4 md:p-5 overflow-hidden"
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
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-border">
                  <div className="h-5 sm:h-6 md:h-8 w-20 sm:w-24 md:w-32 bg-muted rounded"></div>
                  <div className="h-5 sm:h-6 md:h-8 w-5 sm:w-6 md:w-8 bg-primary/20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <motion.div
                    className="p-3 sm:p-4 bg-primary text-primary-foreground rounded-lg sm:rounded-xl space-y-1 sm:space-y-1.5 shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider opacity-100">{t.hero.yourBalance}</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-black">Rp 2.5jt</p>
                  </motion.div>
                  <motion.div
                    className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 rounded-lg sm:rounded-xl space-y-1 sm:space-y-1.5 border-2 border-primary shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-700 dark:text-slate-200 font-black uppercase tracking-wider">
                      {t.hero.agentPoints}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-black text-foreground">1.250</p>
                  </motion.div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-foreground uppercase tracking-widest border-l-4 border-primary pl-2">
                    {t.hero.transactionHistory}
                  </p>
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-2 sm:p-3 bg-muted/80 rounded-lg sm:rounded-xl border-2 border-border/80 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5, backgroundColor: "hsl(var(--muted))" }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-xs sm:text-sm shadow-inner">
                          P
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-black text-foreground truncate">{t.language === "id" ? "Pulsa 50rb" : t.hero.pulse}</p>
                          <p className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground font-black opacity-80">
                            12 Jan • 14:20
                          </p>
                        </div>
                      </div>
                      <div className="px-2 sm:px-3 py-1 bg-emerald-600 dark:bg-emerald-700 rounded-full shadow-sm flex-shrink-0">
                        <p className="text-[8px] sm:text-[10px] md:text-xs font-black text-white whitespace-nowrap">{t.hero.success}</p>
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
