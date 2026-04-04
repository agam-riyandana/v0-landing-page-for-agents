"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-context"
import { Menu, Download, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RegisterButton } from "@/components/register-button"
import { LoginButton } from "@/components/login-button"
import { useEffect, useState } from "react"

export function Navbar() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar on scroll
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      // Add shadow and background opacity when scrolled
      setIsScrolled(currentScrollY > 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      {/* Floating container with glassmorphism */}
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3 md:mt-4 transition-all duration-300 ${
        isScrolled ? "max-w-6xl" : ""
      }`}>
        <div className={`rounded-2xl md:rounded-3xl backdrop-blur-xl transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 border border-border/40 shadow-2xl" 
            : "bg-background/60 border border-border/20 shadow-xl hover:shadow-2xl"
        }`}>
          <div className={`flex items-center justify-between gap-2 transition-all duration-300 ${
            isScrolled ? "px-4 sm:px-6 h-14 sm:h-16" : "px-4 sm:px-6 h-16 sm:h-20 md:h-24"
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 group flex-shrink-0 min-w-0">
              <div className={`transition-all duration-300 ${isScrolled ? "h-8 w-8 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"}`}>
                <img 
                  src="/logo.png" 
                  alt="BAYARKITA Logo" 
                  className="h-full w-full object-contain transition-transform group-hover:scale-110 group-hover:drop-shadow-lg flex-shrink-0"
                />
              </div>
              <span className={`hidden xs:inline font-bold tracking-tight text-primary whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 ${
                isScrolled ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"
              }`}>
                BAYARKITA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-2">
              <Link href="#features" className={`font-medium text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
              }`}>
                {t?.nav?.features || "Features"}
              </Link>
              <Link href="#products" className={`font-medium text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
              }`}>
                {t?.nav?.products || "Products"}
              </Link>
              <Link href="/harga" className={`font-medium text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
              }`}>
                {t?.language === "id" ? "Harga" : t?.nav?.pricing || "Pricing"}
              </Link>
              <Link href="#payment" className={`font-medium text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
              }`}>
                {t?.nav?.payment || "Payment"}
              </Link>
              <Link href="/blog" className={`font-medium text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
              }`}>
                {t?.nav?.blog || "Blog"}
              </Link>
              <Link href="/tutorial" className={`font-medium text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
              }`}>
                {t?.nav?.tutorial || "Tutorial"}
              </Link>
              <Link href="#faq" className={`font-medium text-foreground/80 hover:text-primary transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                isScrolled ? "text-xs xl:text-sm" : "text-sm xl:text-base"
              }`}>
                {t?.nav?.faq || "FAQ"}
              </Link>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-1 sm:gap-1.5 ml-auto">
              {/* Download Button - Prominent */}
              <a
                href="/app-release.apk"
                download="app-release.apk"
                className={`hidden sm:inline-flex rounded-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-2xl font-bold text-white transition-all hover:scale-110 hover:-translate-y-0.5 items-center justify-center gap-2 whitespace-nowrap ${
                  isScrolled 
                    ? "h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm" 
                    : "h-9 sm:h-10 md:h-11 px-4 sm:px-5 md:px-6 text-sm sm:text-base"
                }`}
              >
                <Download className={isScrolled ? "h-3.5 w-3.5 sm:h-4 sm:w-4" : "h-4 w-4 sm:h-5 sm:w-5"} />
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
                  className={`hidden lg:inline-flex font-medium hover:text-primary transition-all px-3 py-2 h-9 rounded-lg hover:bg-primary/10 ${
                    isScrolled ? "text-xs" : "text-sm"
                  }`}
                />
                <RegisterButton
                  variant="default"
                  size="sm"
                  className={`rounded-full font-semibold transition-all hover:scale-105 hover:-translate-y-0.5 ${
                    isScrolled 
                      ? "px-4 h-9 text-xs lg:text-sm" 
                      : "px-5 lg:px-6 h-10 lg:h-11 text-sm lg:text-base"
                  }`}
                />
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden ml-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-primary/10 rounded-lg">
                    <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6 bg-background/80 backdrop-blur-xl border border-border/40 shadow-2xl rounded-3xl">
                  <div className="h-full flex flex-col gap-6">
                    <div className="flex flex-col gap-1 flex-1">
                      {/* Navigation Links */}
                      <nav className="space-y-1">
                        <Link href="#features" className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-3 rounded-xl">
                          {t?.nav?.features || "Features"}
                        </Link>
                        <Link href="#products" className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-3 rounded-xl">
                          {t?.nav?.products || "Products"}
                        </Link>
                        <Link href="#payment" className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-3 rounded-xl">
                          {t?.nav?.payment || "Payment"}
                        </Link>
                        <Link href="/blog" className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-3 rounded-xl">
                          {t?.nav?.blog || "Blog"}
                        </Link>
                        <Link href="/tutorial" className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-3 rounded-xl">
                          {t?.nav?.tutorial || "Tutorial"}
                        </Link>
                        <Link href="/harga" className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-3 rounded-xl">
                          {t?.language === "id" ? "Harga" : t?.nav?.pricing || "Pricing"}
                        </Link>
                        <Link href="#faq" className="block text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-3 rounded-xl">
                          {t?.nav?.faq || "FAQ"}
                        </Link>
                      </nav>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <a
                        href="/app-release.apk"
                        download="app-release.apk"
                        className="flex items-center justify-center gap-2 w-full bg-background hover:bg-background/80 border border-border text-center text-sm font-semibold text-foreground rounded-xl px-4 py-3 transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md"
                      >
                        <Download className="h-4 w-4" />
                        {t?.download?.cta || "Download"}
                      </a>
                      <LoginButton
                        variant="outline"
                        size="lg"
                        className="w-full rounded-xl h-11 text-sm font-semibold transition-all hover:bg-background/80 hover:border-primary hover:text-primary hover:shadow-md"
                      />
                      <RegisterButton
                        variant="default"
                        size="lg"
                        className="w-full rounded-xl h-11 text-sm font-semibold transition-all hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                      />
                    </div>

                    {/* Theme and Language Toggles */}
                    <div className="flex items-center gap-2 justify-center pt-2 border-t border-border/30">
                      <span className="text-xs font-medium text-foreground/60 mr-auto">Settings:</span>
                      <LanguageSwitcher />
                      <ModeToggle />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
