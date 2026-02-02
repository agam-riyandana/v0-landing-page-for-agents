"use client"

import { Smartphone, Zap, Gamepad2, Tv, Globe, CreditCard, Wallet, Banknote } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

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
      icon: Wallet,
      price: t.products.categories.ewallet.price,
      products: t.products.categories.ewallet.products,
    },
    {
      name: t.products.categories.transfer.name,
      icon: Banknote,
      price: t.products.categories.transfer.price,
      status: t.products.categories.transfer.status,
      products: t.products.categories.transfer.products,
    },
  ]

  // Highlight the main three products
  const mainProducts = [
    {
      title: "PULSA & PAKET DATA",
      description: t.products.categories.pulsa.name,
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
      index: 0,
    },
    {
      title: "TAGIHAN PPOB",
      description: t.products.categories.pln.name,
      icon: Zap,
      color: "from-amber-500 to-amber-600",
      index: 1,
    },
    {
      title: "VOUCHER GAME & TOPUP ONLINE",
      description: t.products.categories.game.name,
      icon: Gamepad2,
      color: "from-purple-500 to-purple-600",
      index: 2,
    },
  ]

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{t.products.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t.products.description}</p>
        </motion.div>

        {/* Main Products Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {mainProducts.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-background border border-border/50 hover:border-primary/30">
                  {/* Icon Background */}
                  <motion.div
                    className={`h-32 sm:h-40 bg-gradient-to-br ${product.color} relative overflow-hidden flex items-center justify-center`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <product.icon className="h-16 sm:h-20 w-16 sm:w-20 text-white drop-shadow-lg" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="font-bold text-base sm:text-lg text-foreground leading-tight">{product.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <Link href="https://my.bayarkita.com">
                      <motion.div
                        className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all cursor-pointer"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span>{t.language === "id" ? "Pelajari Selengkapnya" : "Learn More"}</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-center font-bold text-sm sm:text-base text-foreground">Produk Lainnya</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {categories.slice(3).map((cat, i) => (
                <motion.div
                  key={cat.name}
                  className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/50 transition-all text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="h-10 w-10 sm:h-12 sm:w-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-primary/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <cat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </motion.div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground line-clamp-2">{cat.name}</p>
                  {cat.status && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded">
                      {cat.status}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
