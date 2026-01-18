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

      {/* Pricing Teaser */}
      <section id="products" className="py-16 sm:py-20 lg:py-24" ref={ctaRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 bg-white/10 rounded-full blur-3xl"></div>
            <motion.div
              className="relative z-10 space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t.cta.title}</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
                {t.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base font-bold"
                >
                  <Link href="https://my.bayarkita.com/register">{t.cta.registerBtn}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base bg-transparent font-bold"
                >
                  <Link href="mailto:admin@agamofficial.my.id">{t.cta.contactBtn}</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
