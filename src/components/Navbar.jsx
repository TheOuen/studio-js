'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-black text-white tracking-tight">LANK CHILLED</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#work" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Work
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a href="#home" className="block text-white/70 hover:text-white transition-colors text-sm font-medium">
              Home
            </a>
            <a href="#services" className="block text-white/70 hover:text-white transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#work" className="block text-white/70 hover:text-white transition-colors text-sm font-medium">
              Work
            </a>
            <a href="#contact" className="block text-white/70 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}