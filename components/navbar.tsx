"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-context"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RegisterButton } from "@/components/register-button"
import { LoginButton } from "@/components/login-button"

export function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-2 sm:px-4 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2.5 group flex-shrink-0 min-w-0">
          <img 
            src="/logo.png" 
            alt="BAYARKITA Logo" 
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 object-contain transition-transform group-hover:scale-110 flex-shrink-0"
          />
          <span className="hidden xs:inline text-sm sm:text-base md:text-lg font-bold tracking-tight text-primary whitespace-nowrap overflow-hidden text-ellipsis">
            BAYARKITA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-6">
          <Link href="#features" className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
            {t?.nav?.features || "Features"}
          </Link>
          <Link href="#products" className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
            {t?.nav?.products || "Products"}
          </Link>
          <Link href="/harga" className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
            {t?.language === "id" ? "Harga" : t?.nav?.pricing || "Pricing"}
          </Link>
          <Link href="#payment" className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
            {t?.nav?.payment || "Payment"}
          </Link>
          <Link href="/tutorial" className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
            {t?.nav?.tutorial || "Tutorial"}
          </Link>
          <Link href="#faq" className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
            {t?.nav?.faq || "FAQ"}
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-0.5 sm:gap-1 ml-auto">
          {/* Download Button - Prominent */}
          <a
            href="/app-release.apk"
            download="app-release.apk"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-5 text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 items-center justify-center"
          >
            {t?.download?.cta || "Download"}
          </a>

          {/* Theme and Language Toggles */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <LanguageSwitcher />
            <ModeToggle />
          </div>

          {/* Desktop Login and Register */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 ml-0.5 lg:ml-1">
            <LoginButton
              variant="ghost"
              size="sm"
              asLink
              className="hidden lg:inline-flex text-xs xl:text-sm font-medium hover:text-primary transition-colors px-2 lg:px-3 py-2 h-8 lg:h-9"
            />
            <RegisterButton
              variant="default"
              size="sm"
              className="rounded-full px-3 lg:px-5 h-8 lg:h-9 text-xs lg:text-sm font-semibold"
            />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden ml-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] flex flex-col">
              <div className="flex flex-col gap-4 mt-8 flex-1">
                {/* Download Button - Mobile Prominent */}
                <a
                  href="/app-release.apk"
                  download="app-release.apk"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg h-10 text-sm font-bold text-white transition-all hover:scale-105 sm:hidden flex items-center justify-center"
                >
                  {t?.download?.cta || "Download App"}
                </a>

                <Link href="#features" className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                  {t?.nav?.features || "Features"}
                </Link>
                <Link href="#products" className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                  {t?.nav?.products || "Products"}
                </Link>
                <Link href="#payment" className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                  {t?.nav?.payment || "Payment"}
                </Link>
                <Link href="/tutorial" className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                  {t?.nav?.tutorial || "Tutorial"}
                </Link>
                <Link href="/harga" className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                  {t?.language === "id" ? "Harga" : t?.nav?.pricing || "Pricing"}
                </Link>
                <Link href="#faq" className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                  {t?.nav?.faq || "FAQ"}
                </Link>
                <div className="border-t border-border pt-6 space-y-2">
                  <LoginButton
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full h-12 text-sm font-semibold"
                  />
                  <RegisterButton
                    variant="default"
                    size="lg"
                    className="w-full rounded-full h-12 text-sm font-semibold"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
