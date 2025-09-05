'use client'

import { useEffect, useState } from 'react'

export function IntroAnimation({ children }) {
  // Temporarily disable animation - just show content immediately
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after a brief moment
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  if (!showContent) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <h1 className="font-display text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] font-black text-white text-center leading-none tracking-tighter whitespace-nowrap">
          LANK CHILLED
        </h1>
      </div>
    )
  }

  return (
    <>
      {/* Simple header */}
      <div className="sticky top-0 z-40 bg-black py-8">
        <div className="text-center">
          <h1 className="font-display text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] font-black text-white leading-none tracking-tighter whitespace-nowrap">
            LANK CHILLED
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  )
} 