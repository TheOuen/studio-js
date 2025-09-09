'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export function IntroAnimation({ children }) {
  const [showContent, setShowContent] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const textRef = useRef(null)
  const overlayRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true)
      }
    })

    // Set initial states
    gsap.set(textRef.current, {
      scale: 1.2,
      opacity: 0
    })
    
    gsap.set(navRef.current, {
      opacity: 0,
      y: -20
    })

    // Animation sequence
    tl.to(textRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(textRef.current, {
      scale: 0.15,
      x: '-42vw',
      y: '-45vh',
      duration: 1.5,
      delay: 1,
      ease: 'power3.inOut'
    })
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => setShowContent(true)
    }, '-=0.4')
    .to(navRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <>
      {/* Intro Animation Overlay */}
      {!animationComplete && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <h1 
            ref={textRef}
            className="font-display text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] font-black text-white text-center leading-none tracking-tighter whitespace-nowrap"
          >
            LANK CHILLED
          </h1>
        </div>
      )}

      {/* Navigation Bar */}
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-display text-2xl font-black text-white tracking-tight">
              LANK CHILLED
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-white/70 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      {showContent && (
        <div className="relative z-10 pt-16">
          {children}
        </div>
      )}
    </>
  )
} 