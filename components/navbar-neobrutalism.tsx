'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/components/language-context'

export function NavbarNeoBrutalism() {
  const { t, language, setLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-black text-2xl hover:scale-110 transition-transform">
            <img src="/logo.png" alt="BAYARKITA" className="h-12 w-12 sm:h-16 sm:w-16 border-3 border-black" />
            <span className="hidden sm:block text-black" style={{ fontFamily: 'var(--font-lexend, Lexend)' }}>
              BAYARKITA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#products" className="font-bold text-lg border-2 border-black px-4 py-2 hover:bg-primary hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              {language === 'id' ? 'Produk' : 'Products'}
            </Link>
            <Link href="#pricing" className="font-bold text-lg border-2 border-black px-4 py-2 hover:bg-primary hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              {language === 'id' ? 'Harga' : 'Pricing'}
            </Link>
            <Link href="#testimonials" className="font-bold text-lg border-2 border-black px-4 py-2 hover:bg-primary hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              {language === 'id' ? 'Testimoni' : 'Testimonials'}
            </Link>
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="font-bold text-base border-2 border-black px-3 py-2 hover:bg-accent hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
            <a
              href="#login"
              className="font-black text-lg bg-primary text-white border-3 border-black px-6 py-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              {language === 'id' ? 'Masuk' : 'Login'}
            </a>
            <a
              href="#register"
              className="font-black text-lg bg-accent text-black border-3 border-black px-6 py-2 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              {language === 'id' ? 'Daftar' : 'Register'}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden border-3 border-black p-2 hover:bg-accent transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-4 border-black bg-white pb-4 space-y-3">
            <Link href="#products" className="block font-bold text-lg border-3 border-black px-4 py-3 bg-white hover:bg-primary hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              {language === 'id' ? 'Produk' : 'Products'}
            </Link>
            <Link href="#pricing" className="block font-bold text-lg border-3 border-black px-4 py-3 bg-white hover:bg-primary hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              {language === 'id' ? 'Harga' : 'Pricing'}
            </Link>
            <Link href="#testimonials" className="block font-bold text-lg border-3 border-black px-4 py-3 bg-white hover:bg-primary hover:text-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              {language === 'id' ? 'Testimoni' : 'Testimonials'}
            </Link>
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="w-full font-bold text-lg border-3 border-black px-4 py-3 bg-accent text-black hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
            <a
              href="#login"
              className="block font-black text-lg bg-primary text-white border-3 border-black px-4 py-3 text-center hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            >
              {language === 'id' ? 'Masuk' : 'Login'}
            </a>
            <a
              href="#register"
              className="block font-black text-lg bg-accent text-black border-3 border-black px-4 py-3 text-center hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            >
              {language === 'id' ? 'Daftar' : 'Register'}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
