"use client"

import { ShieldCheck, Printer, History, Users, CreditCard, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      title: t.features.feature1Title,
      description: t.features.feature1Desc,
      icon: ShoppingBag,
    },
    {
      title: t.features.feature2Title,
      description: t.features.feature2Desc,
      icon: Printer,
    },
    {
      title: t.features.feature3Title,
      description: t.features.feature3Desc,
      icon: History,
    },
    {
      title: t.features.feature4Title,
      description: t.features.feature4Desc,
      icon: Users,
    },
    {
      title: t.features.feature5Title,
      description: t.features.feature5Desc,
      icon: ShieldCheck,
    },
    {
      title: t.features.feature6Title,
      description: t.features.feature6Desc,
      icon: CreditCard,
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{t.features.title}</h2>
          <p className="text-sm sm:text-base text-muted-foreground">{t.features.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-background rounded-2xl border border-border hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
