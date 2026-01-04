"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[540px] leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-semibold group"
              >
                <Link href="/register">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-11 sm:h-12 px-6 sm:px-7 text-sm sm:text-base font-semibold bg-transparent border-primary text-primary hover:bg-primary/5"
              >
                <Link href="/login">{t.hero.loginBtn}</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4">
              {[t.hero.check1, t.hero.check2, t.hero.check3].map((text) => (
                <div key={text} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>
            <div className="relative bg-card dark:bg-card rounded-2xl border border-border shadow-2xl p-3 sm:p-4 overflow-hidden">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-border">
                  <div className="h-6 sm:h-8 w-24 sm:w-32 bg-muted rounded"></div>
                  <div className="h-6 sm:h-8 w-6 sm:w-8 bg-primary/10 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 bg-primary text-white rounded-xl space-y-1 sm:space-y-2">
                    <p className="text-[10px] sm:text-xs opacity-80">Saldo Anda</p>
                    <p className="text-lg sm:text-xl font-bold">Rp 2.5jt</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-secondary rounded-xl space-y-1 sm:space-y-2 border border-border">
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Poin Agen</p>
                    <p className="text-lg sm:text-xl font-bold text-primary">1.250</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Histori Transaksi
                  </p>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 sm:p-3 bg-muted/50 rounded-lg border border-border/50"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-background border rounded-full flex items-center justify-center text-primary font-bold text-xs sm:text-sm">
                          P
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold">Pulsa 50rb</p>
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground">12 Jan • 14:20</p>
                        </div>
                      </div>
                      <p className="text-[10px] sm:text-sm font-bold text-green-600">Sukses</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
