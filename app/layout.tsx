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
  title: "BAYARKITA - Solusi Agen Pulsa & PPOB Termurah & Terpercaya",
  description:
    "Daftar jadi agen pulsa gratis selamanya. Tersedia produk pulsa, PPOB, cetak struk custom, dan fitur downline. Bisa deposit atau langsung beli tanpa deposit.",
  keywords: [
    "bayar kita",
    "agen pulsa",
    "PPOB",
    "pulsa murah",
    "daftar agen gratis",
    "bisnis pulsa",
    "jualan pulsa",
    "pembayaran digital",
    "bisnis PPOB",
    "bisnis online Jember",
    "bisnis online Jakarta",
    "bisnis online Surabaya",
    "bisnis online Madura",
    "harga pulsa murah",
    "kategori pembayaran lengkap",
    "peluang bisnis PPOB",
    "agen downline",
    "virtual account",
    "QRIS",
    "retail outlet",
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
    title: "BAYARKITA - Solusi Agen Pulsa & PPOB Termurah & Terpercaya",
    description:
      "Daftar jadi agen pulsa gratis selamanya. Tersedia produk pulsa, PPOB, cetak struk custom, dan fitur downline.",
    url: "https://bayarkita.com",
    siteName: "BAYARKITA",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAYARKITA - Solusi Agen Pulsa & PPOB Termurah & Terpercaya",
    description:
      "Daftar jadi agen pulsa gratis selamanya. Tersedia produk pulsa, PPOB, cetak struk custom, dan fitur downline.",
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
