'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/Container'

function ChevronDownIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}

export function VideoHero({ videoSrc, children }) {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  const handleScrollDown = () => {
    const heroHeight = window.innerHeight
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
        />
        
        {/* Dark overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950/70" />
      </div>
      
      {/* Content positioned absolutely */}
      <div className="absolute inset-0 z-10 flex items-center">
        <Container className="pt-24">
          {children}
        </Container>
      </div>
      
      {/* Scroll down indicator */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white/80 transition-opacity duration-300 hover:text-white focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="mb-2 text-sm font-medium">Scroll</span>
        <ChevronDownIcon className="h-6 w-6 animate-bounce" />
      </button>
    </div>
  )
} 