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
      <section className="py-20 sm:py-24 lg:py-32 bg-background border-t-8 border-b-8 border-foreground relative overflow-hidden" ref={ctaRef}>
        {/* Neo-Brutalism: Bold grid lines and geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute top-10 right-20 w-32 h-32 border-8 border-foreground/20 opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 border-8 border-foreground/10 opacity-10"></div>
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
                  className="flex flex-col items-center gap-3 p-4 sm:p-6 bg-card border-3 border-foreground shadow-[4px_4px_0_rgba(0,0,0,0.2)] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.06 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="p-3 bg-foreground border-2 border-foreground"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-background" />
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
                className="h-13 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-14 text-sm sm:text-base lg:text-lg font-black bg-accent text-accent-foreground border-3 border-foreground"
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-14 text-sm sm:text-base lg:text-lg font-black bg-card text-foreground border-3 border-foreground"
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
