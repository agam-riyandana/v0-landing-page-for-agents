"use client"

import { motion } from "framer-motion"
import { Download, Smartphone } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { Button } from "@/components/ui/button"

const GITHUB_APK_URL = "https://github.com/yourusername/bayarkita-app/releases/download/v1.0.0/bayarkita.apk"

export function DownloadSection() {
  const { t } = useLanguage()

  const handleDownload = () => {
    window.location.href = GITHUB_APK_URL
  }

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="p-6 rounded-full bg-primary/10 border-2 border-primary/20">
              <Smartphone className="h-12 w-12 text-primary" />
            </div>
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              {t.hero.downloadApp}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t.hero.downloadDesc}
            </p>
          </div>

          {/* Download Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base sm:text-lg font-semibold gap-2 shadow-lg hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              {t.hero.downloadNow}
            </Button>
          </motion.div>

          {/* Note */}
          <p className="text-sm text-muted-foreground">
            {t.hero.downloadClickHere}
          </p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "⚡", title: t.language === "id" ? "Cepat" : "Fast", desc: t.language === "id" ? "Proses instan" : "Instant process" },
              { icon: "🔒", title: t.language === "id" ? "Aman" : "Secure", desc: t.language === "id" ? "Enkripsi end-to-end" : "End-to-end encryption" },
              { icon: "📱", title: t.language === "id" ? "Mobile" : "Mobile", desc: t.language === "id" ? "Kerja offline" : "Works offline" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
