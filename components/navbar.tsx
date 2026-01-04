"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-context"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter text-primary">
          PULSA<span className="text-foreground">PRO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.features}
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.products}
          </Link>
          <Link href="#payment" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.payment}
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
            <Link
              href="/login"
              className="hidden lg:inline-flex text-sm font-medium hover:text-primary transition-colors px-3 py-2"
            >
              {t.nav.login}
            </Link>
            <Button asChild size="sm" className="rounded-full px-5 h-9 text-sm font-semibold">
              <Link href="/register">{t.nav.register}</Link>
            </Button>
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
                <Link href="#faq" className="text-base font-medium hover:text-primary transition-colors px-2 py-1">
                  {t.nav.faq}
                </Link>
                <div className="border-t border-border pt-6 space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full h-11 text-sm font-semibold bg-transparent"
                  >
                    <Link href="/login">{t.nav.login}</Link>
                  </Button>
                  <Button asChild className="w-full rounded-full h-11 text-sm font-semibold">
                    <Link href="/register">{t.nav.register}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
