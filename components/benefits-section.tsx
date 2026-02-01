"use client"

import {
  User, CreditCard, TrendingUp, Zap, Smartphone, Lock, Users, Headphones
} from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function BenefitsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    { text: t.benefits.benefit1, icon: User, color: "from-blue-500 to-blue-600" },
    { text: t.benefits.benefit2, icon: CreditCard, color: "from-green-500 to-green-600" },
    { text: t.benefits.benefit3, icon: TrendingUp, color: "from-purple-500 to-purple-600" },
    { text: t.benefits.benefit4, icon: Zap, color: "from-orange-500 to-orange-600" },
    { text: t.benefits.benefit5, icon: Smartphone, color: "from-pink-500 to-pink-600" },
    { text: t.benefits.benefit6, icon: Lock, color: "from-cyan-500 to-cyan-600" },
    { text: t.benefits.benefit7, icon: Users, color: "from-indigo-500 to-indigo-600" },
    { text: t.benefits.benefit8, icon: Headphones, color: "from-amber-500 to-amber-600" },
  ]

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
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-primary/3 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{t.benefits.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t.benefits.description}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-background border border-border/50 hover:border-primary/30">
                {/* Icon Header */}
                <motion.div
                  className={`h-24 sm:h-28 bg-gradient-to-br ${benefit.color} relative overflow-hidden flex items-center justify-center`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <benefit.icon className="h-12 sm:h-14 w-12 sm:w-14 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <p className="text-sm sm:text-base font-bold text-foreground leading-snug line-clamp-3">
                    {benefit.text}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
