'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(true)
  const observerRef = useRef(null)

  useEffect(() => {
    const footer = document.querySelector('footer') || document.querySelector('[data-footer]')
    
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide button when footer is visible
        setIsVisible(!entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    observer.observe(footer)
    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Link
        href="/contact"
        className="inline-flex items-center gap-4 pl-2 pr-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
      >
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
            alt="Contact"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-lg tracking-wide">Contact</span>
      </Link>
    </div>
  )
} 