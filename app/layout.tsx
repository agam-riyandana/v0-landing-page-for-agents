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
  title: "BayarKita: Platform Agen Pulsa & PPOB Terpercaya - Daftar Gratis 2024",
  description:
    "Bergabunglah dengan BayarKita - Platform agen pulsa & PPOB #1 di Indonesia. ✓ Daftar gratis selamanya ✓ Harga H2H termurah ✓ Transaksi instan 24 jam ✓ Tanpa deposit ✓ Komisi downline unlimited. Mulai bisnis pulsa & PPOB Anda sekarang juga!",
  keywords: [
    "agen pulsa terpercaya",
    "agen PPOB online",
    "distributor pulsa termurah Indonesia",
    "pulsa H2H murah",
    "bayarkita",
    "bayar kita",
    "aplikasi PPOB terbaik",
    "jual pulsa online gratis",
    "bisnis agen pulsa 2024",
    "harga pulsa termurah",
    "server pulsa nasional",
    "token listrik PLN online",
    "bayar tagihan listrik online",
    "agen top up Dana Gopay OVO",
    "bisnis online kecil-kecilan",
    "peluang usaha PPOB menguntungkan",
    "sistem downline komisi unlimited",
    "aplikasi transaksi pulsa mudah",
    "cara daftar agen pulsa",
    "modal kecil bisnis online",
    "pembayaran digital aman terpercaya",
    "Virtual Account bank",
    "QRIS pembayaran instan",
    "Retail Outlet Alfamart Indomaret",
    "paket data Telkomsel XL Indosat",
    "voucher game termurah",
    "bayar air tagihan air online",
    "BPJS kesehatan online",
    "agen kuota internet",
    "deposit langsung beli",
    "cetak struk custom label",
    "komisi downline sistem MLM",
    "server pulsa stabil 24/7",
    "customer service agen 24 jam",
    "transaksi cepat tanpa antri",
    "join agen pulsa gratis",
  ],
  authors: [{ name: "BAYARKITA Team" }],
  creator: "BAYARKITA",
  publisher: "BAYARKITA",
  metadataBase: new URL("https://bayarkita.com"),
  alternates: {
    canonical: "https://bayarkita.com/",
    languages: {
      "id-ID": "https://bayarkita.com/",
      en: "https://bayarkita.com/en",
    },
  },
  openGraph: {
    title: "BayarKita: Pulsa & PPOB Terpercaya - Daftar Gratis Sekarang",
    description:
      "Platform #1 untuk agen pulsa & PPOB. Transaksi cepat, harga termurah, gratis selamanya, komisi unlimited. Raih penghasilan tambahan atau bisnis utama Anda!",
    url: "https://bayarkita.com",
    siteName: "BAYARKITA",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://bayarkita.com/logo.png",
        width: 1200,
        height: 630,
        alt: "BAYARKITA - Platform Pulsa & PPOB Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BayarKita: Pulsa & PPOB Terpercaya - Daftar Gratis",
    description: "Bisnis pulsa & PPOB dari rumah. Gratis daftar, harga termurah, support 24/7. Mulai sekarang!",
    creator: "@bayarkita",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
  },
  generator: "BAYARKITA",
  referrer: "strict-origin-when-cross-origin",
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
