import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"

const _geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400", "500", "700"],
  fallback: ["monospace"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export const metadata: Metadata = {
  title: "BayarKita: Platform Agen Pulsa & PPOB Termurah - Daftar Gratis Sekarang",
  description:
    "Bergabunglah dengan BayarKita - Platform agen pulsa & PPOB terpercaya di Indonesia. Daftar gratis, harga H2H termurah, transaksi cepat 24 jam tanpa deposit, metode pembayaran lengkap (Virtual Account, QRIS, Retail Outlet). Raih peluang bisnis online dengan modal kecil!",
  keywords: [
    "agen pulsa",
    "agen PPOB",
    "distributor pulsa termurah",
    "pulsa H2H",
    "bayar kita",
    "aplikasi PPOB",
    "jual pulsa online",
    "bisnis agen pulsa",
    "harga pulsa murah",
    "server pulsa nasional",
    "token listrik PLN",
    "bayar tagihan online",
    "agen top up Dana OVO GoPay",
    "bisnis online Jember",
    "bisnis online Surabaya",
    "bisnis online Jakarta",
    "peluang usaha PPOB",
    "agen downline sistem",
    "aplikasi transaksi pulsa",
    "cara daftar agen pulsa gratis",
    "modal kecil bisnis online",
    "pembayaran digital terpercaya",
    "Virtual Account pembayaran",
    "QRIS pembayaran digital",
    "Retail Outlet pembayaran",
    "paket data semua operator",
    "Top Up game termurah",
    "bayar listrik online",
    "kategori pembayaran lengkap",
    "agen kuota internet",
    "deposit dan langsung beli",
    "cetak struk custom",
    "fitur downline komisi",
    "server pulsa terpercaya",
    "transaksi otomatis 24 jam",
    "support agen 24/7",
  ],
  authors: [{ name: "BAYARKITA" }],
  creator: "BAYARKITA",
  publisher: "BAYARKITA",
  metadataBase: new URL("https://bayarkita.com"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "BayarKita: Layanan Pulsa & PPOB Online 24 Jam Nonstop",
    description:
      "Platform PPOB & Server Pulsa Nasional terbaik. Gabung mitra BayarKita sekarang: Pendaftaran gratis, harga H2H bersaing, & transaksi detik. Cuan maksimal!",
    url: "https://bayarkita.com",
    siteName: "BAYARKITA",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BayarKita: Layanan Pulsa & PPOB Online 24 Jam Nonstop",
    description:
      "Platform PPOB & Server Pulsa Nasional terbaik. Gabung mitra BayarKita sekarang: Pendaftaran gratis, harga H2H bersaing, & transaksi detik. Cuan maksimal!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "DTSWY5jhmq08dcL2jy287ddXoN_jvwCeq2IVdxucAbI",
    yandex: "your-yandex-verification-code",
  },
  generator: "BAYARKITA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head></head>
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <SpeedInsights />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
