import { Smartphone, Zap, Gamepad2, Tv, Globe, CreditCard } from "lucide-react"

const categories = [
  { name: "Pulsa Isi Ulang", icon: Smartphone, price: "Mulai Rp 1.000" },
  { name: "Token PLN", icon: Zap, price: "Admin Termurah" },
  { name: "Top Up Game", icon: Gamepad2, price: "Proses Instan" },
  { name: "Paket Data", icon: Globe, price: "Kuota Nasional" },
  { name: "Tagihan PPOB", icon: Tv, price: "PDAM, BPJS, HP" },
  { name: "E-Wallet", icon: CreditCard, price: "Dana, Ovo, GoPay" },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Produk Digital Terlengkap</h2>
            <p className="text-muted-foreground max-w-xl">
              Kami menyediakan ratusan produk digital dengan harga bersaing yang siap Anda jualkan kapan saja tanpa
              perlu stok manual.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-bold border border-primary/10">
              100+ Operator
            </div>
            <div className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-bold border border-primary/10">
              Update Realtime
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-6 bg-secondary/50 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group cursor-pointer"
            >
              <div className="h-14 w-14 bg-background rounded-full flex items-center justify-center mx-auto mb-4 border shadow-sm group-hover:scale-110 transition-transform">
                <cat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">{cat.name}</h3>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{cat.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
