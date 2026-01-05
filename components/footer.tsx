"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"

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
    <footer className="py-8 sm:py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 text-center space-y-6 sm:space-y-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center h-16 w-16 bg-primary text-primary-foreground rounded-2xl font-black text-3xl shadow-xl mb-2">
            BK
          </div>
          <div className="text-lg sm:text-xl font-bold tracking-tighter text-primary">
            BAYAR<span className="text-foreground">KITA</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground">
          © {currentYear} BAYARKITA Digital Solution. {t.footer.copyright}
        </p>

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
  )
}
