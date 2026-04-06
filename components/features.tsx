"use client"

import { ShieldCheck, Printer, History, Users, CreditCard, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Features() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: t.features.feature1Title,
      description: t.features.feature1Desc,
      icon: ShoppingBag,
    },
    {
      title: t.features.feature2Title,
      description: t.features.feature2Desc,
      icon: Printer,
    },
    {
      title: t.features.feature3Title,
      description: t.features.feature3Desc,
      icon: History,
    },
    {
      title: t.features.feature4Title,
      description: t.features.feature4Desc,
      icon: Users,
    },
    {
      title: t.features.feature5Title,
      description: t.features.feature5Desc,
      icon: ShieldCheck,
    },
    {
      title: t.features.feature6Title,
      description: t.features.feature6Desc,
      icon: CreditCard,
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">{t.features.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.features.description}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-6 sm:p-8 bg-white dark:bg-slate-900/80 rounded-2xl border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
