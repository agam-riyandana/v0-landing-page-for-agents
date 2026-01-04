"use client"

import { Smartphone, Zap, Gamepad2, Tv, Globe, CreditCard } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ProductsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    {
      name: t.products.categories.pulsa.name,
      icon: Smartphone,
      price: t.products.categories.pulsa.price,
    },
    {
      name: t.products.categories.pln.name,
      icon: Zap,
      price: t.products.categories.pln.price,
    },
    {
      name: t.products.categories.game.name,
      icon: Gamepad2,
      price: t.products.categories.game.price,
    },
    {
      name: t.products.categories.data.name,
      icon: Globe,
      price: t.products.categories.data.price,
    },
    {
      name: t.products.categories.ppob.name,
      icon: Tv,
      price: t.products.categories.ppob.price,
    },
    {
      name: t.products.categories.ewallet.name,
      icon: CreditCard,
      price: t.products.categories.ewallet.price,
    },
  ]

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-12 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{t.products.title}</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl">{t.products.description}</p>
          </div>
          <div className="flex gap-2">
            <motion.div
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 text-primary rounded-full text-xs sm:text-sm font-bold border border-primary/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {t.products.badge1}
            </motion.div>
            <motion.div
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 text-primary rounded-full text-xs sm:text-sm font-bold border border-primary/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {t.products.badge2}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="p-4 sm:p-6 bg-secondary/50 rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="h-12 w-12 sm:h-14 sm:w-14 bg-background rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border shadow-sm"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <cat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </motion.div>
              <h3 className="font-bold text-xs sm:text-sm mb-1">{cat.name}</h3>
              <p className="text-[9px] sm:text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                {cat.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
