"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TutorialPage() {
  const { t, language } = useLanguage()

  const steps = [
    {
      number: "1",
      title: language === "id" ? "Login / Daftar Akun" : "Login / Register Account",
      description:
        language === "id"
          ? "Mulai dengan login atau daftar di my.bayarkita.com Daftarnya cepat, cukup gunakan nomor WhatsApp dan email aktif untuk langsung bisa transaksi."
          : "Start with login or register at my.bayarkita.com Registration is quick, just use your WhatsApp number and active email to start transacting.",
      details: [
        language === "id" ? "Kunjungi my.bayarkita.com" : "Visit my.bayarkita.com",
        language === "id" ? "Isi nomor WhatsApp dan email" : "Fill in WhatsApp number and email",
        language === "id" ? "Verifikasi melalui Email" : "Verify through Email",
        language === "id" ? "Akun siap digunakan" : "Account ready to use",
      ],
    },
    {
      number: "2",
      title: language === "id" ? "Isi Saldo Deposit" : "Fill Deposit Balance",
      description:
        language === "id"
          ? "Top up saldo dengan mudah lewat transfer bank, QRIS, atau virtual account. Proses cepat dan otomatis, tanpa perlu konfirmasi manual."
          : "Top up balance easily via bank transfer, QRIS, or virtual account. Fast and automatic process, no manual confirmation needed.",
      details: [
        language === "id" ? "Pilih metode pembayaran (Bank/QRIS)" : "Choose payment method (Bank/QRIS)",
        language === "id" ? "Lakukan transfer sesuai nominal" : "Transfer according to amount",
        language === "id" ? "Saldo otomatis masuk" : "Balance automatically credited",
        language === "id" ? "Mulai transaksi" : "Start transaction",
      ],
    },
    {
      number: "3",
      title: language === "id" ? "Pilih Produk" : "Choose Product",
      description:
        language === "id"
          ? "Tersedia berbagai layanan seperti pulsa, paket data, token listrik, voucher game, dan tagihan PPOB. Pilih sesuai kebutuhanmu dan pastikan nominalnya benar."
          : "Various services available such as credit, data packages, electricity tokens, game vouchers, and PPOB bills. Choose according to your needs and make sure the amount is correct.",
      details: [
        language === "id" ? "Pilih kategori produk" : "Choose product category",
        language === "id" ? "Tentukan nominal/operator" : "Determine amount/operator",
        language === "id" ? "Input nomor tujuan" : "Enter destination number",
        language === "id" ? "Review detail transaksi" : "Review transaction details",
      ],
    },
    {
      number: "4",
      title: language === "id" ? "Transaksi & Selesai" : "Transaction & Complete",
      description:
        language === "id"
          ? "Klik Bayar Sekarang dan sistem otomatis memproses transaksi kamu. Bukti transaksi bisa langsung diunduh dan dicek di riwayat pesanan."
          : "Click Pay Now and the system automatically processes your transaction. Transaction proof can be downloaded immediately and checked in order history.",
      details: [
        language === "id" ? "Klik tombol Bayar Sekarang" : "Click Pay Now button",
        language === "id" ? "Tunggu konfirmasi dari sistem" : "Wait for system confirmation",
        language === "id" ? "Unduh bukti transaksi" : "Download transaction proof",
        language === "id" ? "Lihat di riwayat transaksi" : "View in transaction history",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 bg-secondary">
        <div className="container mx-auto">
          <motion.div
            className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {language === "id" ? "Panduan Lengkap" : "Complete Guide"}
              <br />
              <span className="text-primary">BAYARKITA</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "id"
                ? "Ikuti langkah-langkah mudah di bawah untuk memulai bisnis digital Anda bersama BAYARKITA"
                : "Follow the easy steps below to start your digital business with BAYARKITA"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 sm:left-7 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 hidden sm:block" />
                )}

                <div className="flex gap-6 sm:gap-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-white font-bold text-lg sm:text-xl shadow-lg relative z-10">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="bg-secondary rounded-xl p-4 sm:p-6 border border-border space-y-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 sm:mt-20 p-6 sm:p-8 bg-primary rounded-2xl text-white text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              {language === "id" ? "Siap Memulai?" : "Ready to Start?"}
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              {language === "id"
                ? "Daftar gratis sekarang dan mulai transaksi pertama Anda"
                : "Register for free now and start your first transaction"}
            </p>
            <Link
              href="https://my.bayarkita.com/register"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white/90 transition-colors text-sm sm:text-base"
            >
              {language === "id" ? "Daftar Sekarang" : "Register Now"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
