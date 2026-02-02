"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ProductsSection } from "@/components/products-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FaqSection } from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Smartphone, Banknote, Users, Headphones, Shield } from "lucide-react"
import { RegisterButton } from "@/components/register-button"

export default function LandingPage() {
  const { t } = useLanguage()
  const ctaRef = useRef(null)
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductsSection />
      <BenefitsSection />
      <FaqSection />

      {/* CTA Section - "Siap Menjadi Bos Digital?" */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-primary/10 dark:via-background dark:to-primary/20 relative overflow-hidden" ref={ctaRef}>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isCtaInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  {t.cta.title}
                </h2>
              </motion.div>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.cta.description}
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16"
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { icon: Smartphone, label: t.language === "id" ? "Semua Produk" : "All Products" },
                { icon: Zap, label: t.language === "id" ? "Cepat & Mudah" : "Fast & Easy" },
                { icon: Banknote, label: t.language === "id" ? "Harga Termurah" : "Best Prices" },
                { icon: Users, label: t.language === "id" ? "Bonus Downline" : "Downline Bonus" },
                { icon: Shield, label: t.language === "id" ? "100% Aman" : "100% Safe" },
                { icon: Headphones, label: t.language === "id" ? "Support 24/7" : "24/7 Support" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur border border-primary/20 hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </motion.div>
                  <p className="text-xs sm:text-sm font-semibold text-center">{feature.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <RegisterButton
                size="lg"
                className="rounded-full h-13 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-bold"
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-13 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-bold bg-transparent"
              >
                <Link href="mailto:admin@agamofficial.my.id">{t.cta.contactBtn}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
