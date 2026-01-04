import { Navbar } from "@/components/navbar"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Kebijakan Privasi</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p>Privasi Anda adalah prioritas kami. Halaman ini menjelaskan bagaimana kami mengelola data Anda.</p>
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Data yang Dikumpulkan</h2>
            <p>
              Kami mengumpulkan informasi identitas dasar seperti Nama, Nomor HP, dan alamat email untuk keperluan
              transaksi agen.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">2. Penggunaan Data</h2>
            <p>
              Data digunakan untuk memproses transaksi, mengirimkan notifikasi status, dan meningkatkan layanan kami.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
