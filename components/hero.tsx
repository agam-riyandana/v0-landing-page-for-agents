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
    <section suppressHydrationWarning className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-background border-b-8 border-foreground">
      {/* Neo-Brutalism: Bold grid and geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
        <svg className="absolute top-0 right-0 w-96 h-96 opacity-10" viewBox="0 0 200 200">
          <rect x="10" y="10" width="180" height="180" fill="none" stroke="currentColor" strokeWidth="8"/>
          <rect x="30" y="30" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="4"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-foreground text-background font-black uppercase tracking-wider text-[10px] sm:text-xs md:text-sm border-3 border-foreground shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] sm:leading-[1] md:leading-[1.05] letter-spacing-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="block text-foreground">{t.hero.title}</span>
              <span className="block text-accent font-black">{t.hero.titleHighlight}</span>
              <span className="block text-foreground">{t.hero.titleEnd}</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[580px] leading-relaxed font-semibold text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <RegisterButton
                size="lg"
                className="h-12 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-12 text-sm sm:text-base lg:text-lg font-black group transition-all duration-200 relative overflow-hidden bg-accent text-accent-foreground border-3 border-foreground"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {t.hero.cta}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.span>
                </span>
              </RegisterButton>
              <LoginButton
                size="lg"
                className="h-12 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-12 text-sm sm:text-base lg:text-lg font-black transition-all duration-200 bg-card text-foreground border-3 border-foreground"
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
            className="relative mt-6 sm:mt-8 lg:mt-0 hidden sm:block perspective"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div
              className="relative bg-card border-4 border-foreground shadow-[8px_8px_0_rgba(0,0,0,0.3)] p-4 sm:p-6 md:p-8 overflow-hidden"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02, y: -15 }}
            >
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex justify-between items-center pb-3 sm:pb-4 border-b-3 border-foreground">
                  <div className="h-5 sm:h-6 md:h-8 w-20 sm:w-24 md:w-32 bg-muted"></div>
                  <div className="h-5 sm:h-6 md:h-8 w-5 sm:w-6 md:w-8 bg-foreground/20"></div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <motion.div
                    className="p-3 sm:p-4 bg-primary text-primary-foreground space-y-1 sm:space-y-1.5 shadow-[4px_4px_0_rgba(0,0,0,0.3)] border-3 border-foreground"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider">{t.hero.yourBalance}</p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-black">Rp 2.5jt</p>
                  </motion.div>
                  <motion.div
                    className="p-3 sm:p-4 bg-secondary space-y-1 sm:space-y-1.5 border-3 border-foreground shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider">
                      {t.hero.agentPoints}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-black text-foreground">1.250</p>
                  </motion.div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-foreground uppercase tracking-widest border-l-4 border-foreground pl-2">
                    {t.hero.transactionHistory}
                  </p>
                  {[1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-2 sm:p-3 bg-secondary border-2 border-foreground shadow-[3px_3px_0_rgba(0,0,0,0.1)]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-foreground text-background flex items-center justify-center font-black text-xs sm:text-sm border-2 border-foreground">
                          P
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-black text-foreground truncate">{t.language === "id" ? "Pulsa 50rb" : t.hero.pulse}</p>
                          <p className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground font-black opacity-80">
                            12 Jan • 14:20
                          </p>
                        </div>
                      </div>
                      <div className="px-3 sm:px-4 py-1.5 bg-foreground text-background font-black text-[10px] sm:text-xs md:text-sm border-2 border-foreground flex-shrink-0">
                        <p className="whitespace-nowrap">{t.hero.success}</p>
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
