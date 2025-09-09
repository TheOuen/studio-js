'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ContactModal } from './ContactModal'

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    <>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-4 pl-2 pr-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
        >
          <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="30" height="30" fill="black"/>
              <rect x="5" y="5" width="30" height="30" stroke="black" strokeWidth="2"/>
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-wide">Contact</span>
        </button>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
} 