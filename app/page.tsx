"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ProductsSection } from "@/components/products-section"
import { FaqSection } from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export default function LandingPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductsSection />

      <FaqSection />

      {/* Pricing Teaser */}
      <section id="products" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-4 sm:space-y-6">
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
                  <Link href="/register">{t.cta.registerBtn}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base bg-transparent font-bold"
                >
                  <Link href="/contact">{t.cta.contactBtn}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-4 sm:space-y-6">
          <div className="text-lg sm:text-xl font-bold tracking-tighter text-primary">
            PULSA<span className="text-foreground">PRO</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">{t.footer.copyright}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
              {t.footer.terms}
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
              {t.footer.privacy}
            </Link>
            <Link href="#faq" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
              {t.footer.help}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
