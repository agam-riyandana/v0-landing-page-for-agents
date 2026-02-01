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

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background" ref={ctaRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{t.cta.title}</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t.cta.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full h-12 sm:h-13 px-8 sm:px-10 text-sm sm:text-base font-bold"
              >
                <Link href="https://my.bayarkita.com/register">{t.cta.registerBtn}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 sm:h-13 px-8 sm:px-10 text-sm sm:text-base font-bold bg-transparent"
              >
                <Link href="mailto:admin@agamofficial.my.id">{t.cta.contactBtn}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
