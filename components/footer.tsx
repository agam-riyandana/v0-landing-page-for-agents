"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"
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
    <footer className="relative bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10 border-t border-border/50">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="BAYARKITA Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform group-hover:scale-110"
              />
              <div>
                <div className="text-lg sm:text-xl font-bold tracking-tighter text-primary">
                  BAYARKITA
                </div>
                <p className="text-xs text-muted-foreground">{t.language === "id" ? "Platform Pembayaran Digital" : "Digital Payment Platform"}</p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
              {t.footer.subtitle}
            </p>
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm sm:text-base text-foreground">
              {t.language === "id" ? "Alamat" : "Address"}
            </h3>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t.footer.address}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t.language === "id" ? "Email:" : "Email:"} <a href={`mailto:${t.footer.email}`} className="text-primary hover:underline">{t.footer.email}</a>
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t.language === "id" ? "Telepon:" : "Phone:"} <a href={`tel:${t.footer.phone}`} className="text-primary hover:underline">{t.footer.phone}</a>
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm sm:text-base text-foreground">
              {t.language === "id" ? "Tautan Penting" : "Important Links"}
            </h3>
            <div className="space-y-2">
              <Link href="/terms" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.footer.terms}
              </Link>
              <Link href="/privacy" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="/tutorial" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.language === "id" ? "Tutorial" : "Tutorial"}
              </Link>
              <Link href="#faq" className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.footer.help}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-border/30 mb-8"></div>

        {/* Social and Copyright */}
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground">
            {t.language === "id" 
              ? `© ${currentYear} BAYARKITA. Hak Cipta Dilindungi Undang-Undang.`
              : `© ${currentYear} BAYARKITA. All Rights Reserved.`
            }
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
