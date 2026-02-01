"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Smartphone, Zap, Gamepad2, Globe, Tv, Wallet, Banknote, ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HargaPage() {
  const { t, language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState(0)

  const products = [
    {
      title: "PULSA & PAKET DATA",
      description: t.products.categories.pulsa.name,
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
      details: language === "id" 
        ? ["Semua Operator (Telkomsel, XL, Indosat, Three, Axis, Smartfren, B.YU)", "Harga Langsung dari Server", "Proses Instan", "Bisa Paket Data Unlimited"]
        : ["All Operators (Telkomsel, XL, Indosat, Three, Axis, Smartfren, B.YU)", "Direct Server Price", "Instant Process", "Unlimited Data Packages Available"],
    },
    {
      title: "TAGIHAN PPOB",
      description: t.products.categories.pln.name,
      icon: Zap,
      color: "from-amber-500 to-amber-600",
      details: language === "id"
        ? ["Bayar Listrik PLN (Prabayar & Pascabayar)", "Air PDAM", "BPJS Kesehatan & Ketenagakerjaan", "Internet & Telepon"]
        : ["Pay PLN Electricity (Prepaid & Postpaid)", "Water (PDAM)", "BPJS Health & Employment", "Internet & Phone"],
    },
    {
      title: "VOUCHER GAME & TOPUP ONLINE",
      description: t.products.categories.game.name,
      icon: Gamepad2,
      color: "from-purple-500 to-purple-600",
      details: language === "id"
        ? ["Free Fire Diamond", "Mobile Legends UC", "PUBG UC", "Valorant Points", "Genshin Impact", "Emote & Skin Tools"]
        : ["Free Fire Diamond", "Mobile Legends UC", "PUBG UC", "Valorant Points", "Genshin Impact", "Emote & Skin Tools"],
    },
    {
      title: "E-WALLET TOPUP",
      description: t.products.categories.ewallet.name,
      icon: Wallet,
      color: "from-pink-500 to-pink-600",
      details: language === "id"
        ? ["Top Up Dana", "Top Up GoPay", "Top Up Link Aja", "Top Up OVO", "Top Up SHOPEEPAY", "Admin Paling Murah"]
        : ["Top Up Dana", "Top Up GoPay", "Top Up Link Aja", "Top Up OVO", "Top Up SHOPEEPAY", "Lowest Admin Fee"],
    },
    {
      title: "TRANSFER BANK (Coming Soon)",
      description: t.products.categories.transfer.name,
      icon: Banknote,
      color: "from-red-500 to-red-600",
      details: language === "id"
        ? ["Semua Bank Indonesia", "Proses Cepat", "Admin Terjangkau", "Coming Soon"]
        : ["All Indonesian Banks", "Fast Process", "Affordable Admin", "Coming Soon"],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 sm:pt-32">
        {/* Header */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center space-y-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                {language === "id" ? "Daftar Harga Produk" : "Product Price List"}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                {language === "id" 
                  ? "Lihat semua produk digital yang tersedia dengan harga termurah se-Indonesia"
                  : "See all available digital products with the cheapest prices in Indonesia"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Product Selector */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {language === "id" ? "Pilih Kategori Produk" : "Select Product Category"}
                </h2>
                <div className="space-y-3">
                  {products.map((product, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedCategory(i)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left group ${
                        selectedCategory === i
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            selectedCategory === i
                              ? `bg-gradient-to-br ${product.color}`
                              : "bg-muted"
                          }`}
                        >
                          {selectedCategory === i ? <product.icon className="h-5 w-5 text-white" /> : <product.icon className="h-5 w-5 text-muted-foreground" />}
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{product.title}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Product Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                key={selectedCategory}
                className="space-y-6"
              >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  {products[selectedCategory].icon && 
                    (() => {
                      const IconComponent = products[selectedCategory].icon
                      return <IconComponent className="h-10 w-10 flex-shrink-0" />
                    })()
                  }
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold">{products[selectedCategory].title}</h3>
                    <p className="text-white/80 text-sm mt-1">{products[selectedCategory].description}</p>
                  </div>
                </div>
              </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="space-y-3"
                >
                  <h4 className="font-bold text-foreground">
                    {language === "id" ? "Detail Produk:" : "Product Details:"}
                  </h4>
                  <div className="space-y-2">
                    {products[selectedCategory].details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border"
                      >
                        <ChevronDown className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 rotate-180" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full h-12 text-base font-semibold"
                  >
                    <Link href="https://my.bayarkita.com/register">
                      {language === "id" ? "Mulai Transaksi Sekarang" : "Start Transaction Now"}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-10">
              {language === "id" ? "Pertanyaan Umum" : "Common Questions"}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: language === "id" ? "Apakah harga bisa berubah?" : "Can prices change?",
                  a: language === "id"
                    ? "Harga produk mengikuti fluktuasi harga dari server. Kami akan memberitahu update harga penting melalui notifikasi aplikasi."
                    : "Product prices follow server price fluctuations. We will notify you of important price updates through the app notification.",
                },
                {
                  q: language === "id" ? "Berapa lama proses transaksi?" : "How long does the transaction process take?",
                  a: language === "id"
                    ? "Sebagian besar transaksi selesai dalam hitungan detik. Beberapa produk tertentu mungkin membutuhkan waktu 1-5 menit tergantung operator."
                    : "Most transactions are completed in seconds. Some specific products may take 1-5 minutes depending on the operator.",
                },
                {
                  q: language === "id" ? "Ada diskon untuk pembelian dalam jumlah besar?" : "Are there discounts for bulk purchases?",
                  a: language === "id"
                    ? "Hubungi tim CS kami untuk mengetahui program loyalitas dan diskon khusus untuk mitra agen dengan volume transaksi tinggi."
                    : "Contact our CS team to learn about loyalty programs and special discounts for agent partners with high transaction volumes.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-lg border px-4">
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
