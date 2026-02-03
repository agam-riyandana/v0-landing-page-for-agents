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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="BAYARKITA Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline text-base sm:text-lg lg:text-xl font-bold tracking-tighter text-primary whitespace-nowrap">
            BAYARKITA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          <Link href="#features" className="text-xs xl:text-sm font-medium hover:text-primary transition-colors">
            {t.nav.features}
          </Link>
          <Link href="#products" className="text-xs xl:text-sm font-medium hover:text-primary transition-colors">
            {t.nav.products}
          </Link>
          <Link href="/harga" className="text-xs xl:text-sm font-medium hover:text-primary transition-colors">
            {t.language === "id" ? "Harga" : t.nav.pricing}
          </Link>
          <Link href="#payment" className="text-xs xl:text-sm font-medium hover:text-primary transition-colors">
            {t.nav.payment}
          </Link>
          <Link href="/tutorial" className="text-xs xl:text-sm font-medium hover:text-primary transition-colors">
            {t.nav.tutorial}
          </Link>
          <Link href="#faq" className="text-xs xl:text-sm font-medium hover:text-primary transition-colors">
            {t.nav.faq}
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          {/* Theme and Language Toggles */}
          <div className="flex items-center gap-0.5">
            <LanguageSwitcher />
            <ModeToggle />
          </div>

          {/* Desktop Login and Register */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 ml-1 lg:ml-2">
            <LoginButton
              variant="ghost"
              size="sm"
              asLink
              className="hidden lg:inline-flex text-xs xl:text-sm font-medium hover:text-primary transition-colors px-3 lg:px-4 py-2 h-9 lg:h-10"
            />
            <RegisterButton
              variant="default"
              size="sm"
              className="rounded-full px-4 lg:px-6 h-9 lg:h-10 text-xs lg:text-sm font-semibold"
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
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="#features" className="text-base font-medium hover:text-primary transition-colors px-2 py-1">
                  {t.nav.features}
                </Link>
                <Link href="#products" className="text-base font-medium hover:text-primary transition-colors px-2 py-1">
                  {t.nav.products}
                </Link>
                <Link href="#payment" className="text-base font-medium hover:text-primary transition-colors px-2 py-1">
                  {t.nav.payment}
                </Link>
                <Link href="/tutorial" className="text-base font-medium hover:text-primary transition-colors px-2 py-1">
                  {t.nav.tutorial}
                </Link>
                <Link href="/harga" className="text-base font-medium hover:text-primary transition-colors px-2 py-1">
                  {t.language === "id" ? "Harga" : t.nav.pricing}
                </Link>
                <Link href="#faq" className="text-base font-medium hover:text-primary transition-colors px-2 py-1">
                  {t.nav.faq}
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
