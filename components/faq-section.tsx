"use client"

import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion"
import {
  FileText, CheckCircle2, TrendingUp, CreditCard, Wallet, Users,
  Shield, Clock, RefreshCw, Headphones, Zap
} from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function FaqSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState<string | undefined>()

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1, icon: FileText, color: "from-blue-500 to-blue-600" },
    { q: t.faq.q2, a: t.faq.a2, icon: CheckCircle2, color: "from-green-500 to-green-600" },
    { q: t.faq.q3, a: t.faq.a3, icon: TrendingUp, color: "from-purple-500 to-purple-600" },
    { q: t.faq.q4, a: t.faq.a4, icon: CreditCard, color: "from-orange-500 to-orange-600" },
    { q: t.faq.q5, a: t.faq.a5, icon: Wallet, color: "from-pink-500 to-pink-600" },
    { q: t.faq.q6, a: t.faq.a6, icon: Users, color: "from-indigo-500 to-indigo-600" },
    { q: t.faq.q7, a: t.faq.a7, icon: Shield, color: "from-cyan-500 to-cyan-600" },
    { q: t.faq.q8, a: t.faq.a8, icon: Clock, color: "from-amber-500 to-amber-600" },
    { q: t.faq.q9, a: t.faq.a9, icon: RefreshCw, color: "from-red-500 to-red-600" },
    { q: t.faq.q10, a: t.faq.a10, icon: Headphones, color: "from-teal-500 to-teal-600" },
    { q: t.faq.q11, a: t.faq.a11, icon: Zap, color: "from-yellow-500 to-yellow-600" },
  ]

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-primary/3 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{t.faq.title}</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t.faq.description}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-3 sm:space-y-4"
            value={activeIndex}
            onValueChange={setActiveIndex}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group bg-gradient-to-r from-background to-primary/5 dark:from-background dark:to-primary/10 rounded-2xl border border-border/50 hover:border-primary/30 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left px-5 sm:px-7 py-4 sm:py-5 hover:no-underline group">
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <motion.div
                        className={`flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br ${faq.color} flex items-center justify-center shadow-md`}
                        animate={{ 
                          scale: activeIndex === `item-${index}` ? 1.1 : 1,
                          rotate: activeIndex === `item-${index}` ? 360 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <faq.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </motion.div>
                      <span className="text-sm sm:text-base font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {faq.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 sm:px-7 py-4 sm:py-5 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.a}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
