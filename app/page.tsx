"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ProductsSection } from "@/components/products-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FaqSection } from "@/components/faq-section"
import { DownloadSection } from "@/components/download-section"
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
      <DownloadSection />
      <FaqSection />

      {/* CTA Section - "Siap Menjadi Bos Digital?" */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-background via-primary/8 to-accent/10 dark:via-background dark:to-primary/15 relative overflow-hidden" ref={ctaRef}>
        {/* Decorative elements with enhanced animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-60 -left-60 w-96 h-96 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-full blur-3xl"
            animate={{ y: [0, -50, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
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
            <div className="text-center mb-16 sm:mb-20 space-y-6">
              <motion.div
                className="inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isCtaInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-sm">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-primary tracking-wide">{t.language === "id" ? "Penawaran Terbatas" : "Limited Offer"}</span>
                </div>
              </motion.div>
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={isCtaInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <span className="block text-foreground">{t.cta.title}</span>
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                {t.cta.description}
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20"
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
                  className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/50 dark:from-slate-800/70 dark:to-slate-800/50 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.06 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </motion.div>
                  <p className="text-xs sm:text-sm font-bold text-center text-foreground">{feature.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <RegisterButton
                size="lg"
                className="rounded-full h-13 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-14 text-sm sm:text-base lg:text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-primary via-primary to-accent hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-13 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-14 text-sm sm:text-base lg:text-lg font-bold bg-white/80 dark:bg-slate-900/80 border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 hover:scale-110 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
              >
                <Link href="mailto:admin@agamofficial.my.id" className="flex items-center gap-2">
                  {t.cta.contactBtn}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
