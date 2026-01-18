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
      operators: t.products.categories.data.operators,
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
          className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{t.products.title}</h2>
            <p className="text-sm sm:text-base text-muted-foreground">{t.products.description}</p>
          </div>
          
          <div className="space-y-4 sm:space-y-5">
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base text-primary">PULSA & PAKET DATA</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t.products.categories.pulsa.name}</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base text-primary">TAGIHAN PPOB</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t.products.categories.pln.name}</p>
            </div>
            
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base text-primary">VOUCHER GAME & TOPUP ONLINE</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t.products.categories.game.name}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  className="h-12 w-12 sm:h-14 sm:w-14 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/20"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <cat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-foreground mb-1 line-clamp-2">{cat.name}</h3>
                  {cat.operators && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
                      {cat.operators}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
