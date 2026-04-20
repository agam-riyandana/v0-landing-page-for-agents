"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { Facebook, Instagram, Twitter, MessageCircle, Heart, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/asliagam", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/realagam1", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: MessageCircle, href: "https://wa.me/yournumber", label: "WhatsApp" },
  ]

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-background border-t-4 border-black pt-12 sm:pt-16 lg:pt-20">
      <div className="container relative mx-auto px-4 py-12 sm:py-16">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-4 p-4 sm:p-6 border-4 border-black rounded-lg" style={{backgroundColor: '#FFFFFF'}}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
                <img 
                  src="/logo.png" 
                  alt="BAYARKITA Logo" 
                  className="relative h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold tracking-tighter text-primary flex items-center gap-2">
                  BAYARKITA
                  <Zap className="h-5 w-5 text-accent fill-accent" />
                </div>
                <p className="text-xs text-muted-foreground">{t.footer.platformName}</p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t.footer.subtitle}
            </p>
          </div>

          {/* Address Section */}
          <div className="space-y-4 p-4 sm:p-6 border-4 border-black rounded-lg" style={{backgroundColor: '#FFFFFF'}}>
            <h3 className="font-black text-sm sm:text-base text-foreground" style={{fontSize: '1.1rem', fontWeight: 800}}>
              {t.common.address}
            </h3>
            <div className="space-y-3 pl-4 border-l-4 border-black">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors">
                {t.footer.address}
              </p>
              <p className="text-xs sm:text-sm">
                <span className="text-muted-foreground">{t.common.email}</span> 
                <a href={`mailto:${t.footer.email}`} className="text-primary hover:text-primary/80 transition-colors font-semibold ml-1">{t.footer.email}</a>
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4 p-4 sm:p-6 border-4 border-black rounded-lg" style={{backgroundColor: '#FFFFFF'}}>
            <h3 className="font-black text-sm sm:text-base text-foreground" style={{fontSize: '1.1rem', fontWeight: 800}}>
              {t.footer.importantLinks}
            </h3>
            <div className="space-y-2">
              <Link href="/terms" className="group block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2">
                <span className="h-1 w-1 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-200"></span>
                {t.footer.terms}
              </Link>
              <Link href="/privacy" className="group block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2">
                <span className="h-1 w-1 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-200"></span>
                {t.footer.privacy}
              </Link>
              <Link href="/tutorial" className="group block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2">
                <span className="h-1 w-1 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-200"></span>
                {t.footer.tutorial}
              </Link>
              <Link href="#faq" className="group block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-200 flex items-center gap-2">
                <span className="h-1 w-1 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-200"></span>
                {t.footer.help}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-8"></div>

        {/* Social and Copyright */}
        <motion.div
          className="space-y-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 border border-border/30">
            <p className="text-sm sm:text-base font-bold text-foreground mb-3">
              {t.language === "id" ? "Bergabunglah dengan ribuan agen sukses kami" : "Join thousands of successful agents"}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              {t.language === "id" ? "Mulai bisnis Anda hari ini dan raih kesempatan emas" : "Start your business today and seize the golden opportunity"}
            </p>
            <a href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-200 px-6 py-2.5 rounded-full font-semibold text-sm">
              {t.language === "id" ? "Daftar Sekarang" : "Register Now"}
              <Heart className="h-4 w-4 fill-current" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ikuti Kami</span>
            <div className="flex justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, i) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary hover:from-primary hover:to-accent hover:text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
        </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-border/20">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              {t.language === "id" 
                ? `© ${currentYear} BAYARKITA. ${t.footer.copyright}`
                : `© ${currentYear} ${t.footer.copyright}`
              }
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              {t.language === "id" ? "Platform pembayaran digital terpercaya di Indonesia" : "Indonesia's trusted digital payment platform"}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
