import { Navbar } from "@/components/navbar"

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Syarat & Ketentuan</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p>Selamat datang di BAYARKITA. Dengan mendaftar sebagai agen, Anda menyetujui ketentuan berikut:</p>
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Pendaftaran</h2>
            <p>Pendaftaran agen bersifat gratis selamanya. Anda bertanggung jawab atas keamanan akun Anda.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">2. Layanan Produk</h2>
            <p>
              Kami menyediakan berbagai produk digital (Pulsa, PPOB, Game). Harga dapat berubah sewaktu-waktu sesuai
              kebijakan provider.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">3. Transaksi & Deposit</h2>
            <p>
              Anda dapat melakukan transaksi dengan saldo deposit atau melalui metode pembayaran langsung tanpa deposit.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
