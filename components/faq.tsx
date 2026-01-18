"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apakah benar pendaftaran agen gratis selamanya?",
    answer: "Ya, pendaftaran di BAYARKITA  100% gratis tanpa biaya aktivasi atau biaya bulanan apapun selamanya.",
  },
  {
    question: "Apakah saya harus deposit saldo terlebih dahulu untuk bertransaksi?",
    answer:
      "Tidak wajib. Anda bisa menggunakan fitur 'Langsung Beli' menggunakan metode pembayaran retail atau QRIS, atau Anda bisa mengisi deposit saldo untuk kemudahan transaksi yang lebih cepat.",
  },
  {
    question: "Bagaimana cara mengatur keuntungan saya?",
    answer:
      "Anda dapat menggunakan fitur 'Edit Harga Struk' sebelum mencetak atau membagikan struk ke pelanggan. Anda bebas menentukan harga jual sendiri.",
  },
  {
    question: "Apakah aplikasi mendukung cetak struk via printer bluetooth?",
    answer:
      "Tentu! Aplikasi kami mendukung pencetakan struk melalui printer thermal bluetooth dengan label toko yang bisa dicustom sesuai keinginan.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami mendukung berbagai metode pembayaran mulai dari Virtual Account (BCA, BNI, Mandiri, BRI), Retail Outlet (Alfamart, Indomaret), hingga QRIS (Gopay, OVO, Dana, LinkAja).",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pertanyaan Umum (FAQ)</h2>
          <p className="text-muted-foreground">
            Temukan jawaban atas pertanyaan yang paling sering ditanyakan oleh agen kami.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
