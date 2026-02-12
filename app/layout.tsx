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
  title: "BAYARKITA: Platform Agen Pulsa & PPOB Terpercaya #1 Indonesia - Daftar Gratis Selamanya",
  description:
    "BayarKita.com - Platform PPOB & agen pulsa terpercaya nasional. Gratis daftar selamanya, harga H2H termurah, transaksi instan, komisi downline unlimited. Mulai bisnis pulsa dari Rp 10rb. Support 24/7. Terdaftar PSE Komdigi.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BAYARKITA",
  },
  keywords: [
    "agen pulsa terpercaya nasional",
    "agen PPOB online indonesia",
    "distributor pulsa H2H termurah",
    "pulsa murah harga server",
    "bayarkita bayarkita.com",
    "aplikasi PPOB lengkap",
    "jual pulsa online gratis modal",
    "bisnis agen pulsa 2024 2025",
    "harga pulsa termurah nasional",
    "server PPOB pulsa terpercaya resmi",
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
    title: "BAYAR KITA: Pulsa & PPOB Terpercaya - Daftar Gratis Sekarang",
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
    title: "Bayar Kita: Pulsa & PPOB Terpercaya - Daftar Gratis",
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BAYARKITA",
    "url": "https://bayarkita.com",
    "logo": "https://bayarkita.com/logo.png",
    "description": "Platform PPOB & agen pulsa terpercaya dengan harga termurah dan transaksi instan 24 jam",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dusun Curah Rejo Wedian",
      "addressLocality": "Jember",
      "postalCode": "68171",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-7890",
      "contactType": "Customer Support",
      "email": "support@bayarkita.com"
    },
    "sameAs": [
      "https://www.facebook.com/bayarkita",
      "https://www.twitter.com/bayarkita",
      "https://www.instagram.com/bayarkita"
    ]
  }

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-3345566781682408">
        <Analytics />
        <SpeedInsights />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-title" content="BAYARKITA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(err => {
                  console.log('Service Worker registration failed:', err);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
