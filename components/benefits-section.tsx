"use client"

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function BenefitsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    t.benefits.benefit1,
    t.benefits.benefit2,
    t.benefits.benefit3,
    t.benefits.benefit4,
    t.benefits.benefit5,
    t.benefits.benefit6,
    t.benefits.benefit7,
    t.benefits.benefit8,
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{t.benefits.title}</h2>
          <p className="text-sm sm:text-base text-muted-foreground">{t.benefits.description}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-secondary rounded-xl border border-border hover:border-primary/30 transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-medium text-foreground">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
