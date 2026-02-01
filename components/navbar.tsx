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
      <div className="container mx-auto px-4 h-20 sm:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="BAYARKITA Logo" 
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline text-lg sm:text-xl font-bold tracking-tighter text-primary">
            BAYARKITA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.features}
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.products}
          </Link>
          <Link href="/harga" className="text-sm font-medium hover:text-primary transition-colors">
            {t.language === "id" ? "Harga" : "Pricing"}
          </Link>
          <Link href="#payment" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.payment}
          </Link>
          <Link href="/tutorial" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.tutorial}
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.faq}
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          {/* Theme and Language Toggles */}
          <div className="flex items-center gap-0.5">
            <LanguageSwitcher />
            <ModeToggle />
          </div>

          {/* Desktop Login and Register */}
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <LoginButton
              variant="ghost"
              size="sm"
              asLink
              className="hidden lg:inline-flex text-sm font-medium hover:text-primary transition-colors px-4 py-2 h-10"
            />
            <RegisterButton
              variant="default"
              size="sm"
              className="rounded-full px-6 h-10 text-sm font-semibold"
            />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden ml-2">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
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
                  {t.language === "id" ? "Harga" : "Pricing"}
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
