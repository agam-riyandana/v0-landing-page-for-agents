import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PULSAPRO - Solusi Agen Pulsa & PPOB Termurah & Terpercaya",
  description:
    "Daftar jadi agen pulsa gratis selamanya. Tersedia produk pulsa, PPOB, cetak struk custom, dan fitur downline. Bisa deposit atau langsung beli tanpa deposit.",
  keywords: [
    "agen pulsa",
    "PPOB",
    "pulsa murah",
    "daftar agen gratis",
    "bisnis pulsa",
    "jualan pulsa",
    "pembayaran digital",
    "deposit pulsa",
    "cetak struk",
    "agen downline",
    "virtual account",
    "QRIS",
    "retail outlet",
  ],
  authors: [{ name: "PULSAPRO" }],
  creator: "PULSAPRO",
  publisher: "PULSAPRO",
  metadataBase: new URL("https://pulsapro.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PULSAPRO - Solusi Agen Pulsa & PPOB Termurah & Terpercaya",
    description:
      "Daftar jadi agen pulsa gratis selamanya. Tersedia produk pulsa, PPOB, cetak struk custom, dan fitur downline.",
    url: "https://pulsapro.vercel.app",
    siteName: "PULSAPRO",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PULSAPRO - Solusi Agen Pulsa & PPOB Termurah & Terpercaya",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
