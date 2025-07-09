'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function IntroAnimation({ children, onComplete }) {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const mainContentRef = useRef(null)
  const overlayRef = useRef(null)
  const headerTextRef = useRef(null)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    const mainContent = mainContentRef.current
    const overlay = overlayRef.current
    const headerText = headerTextRef.current

    if (!container || !text || !mainContent || !overlay || !headerText) return

    // Set initial states
    gsap.set(text, {
      scale: 0.3,
      opacity: 0,
      y: 0
    })

    gsap.set(mainContent, {
      opacity: 0,
      y: 100
    })

    gsap.set(overlay, {
      background: '#000000'
    })

    gsap.set(container, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999
    })

    gsap.set(headerText, {
      opacity: 0,
      y: 0
    })

    // Create the animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimationComplete(true)
        if (onComplete) onComplete()
      }
    })

    // Phase 1: Text appears and scales to full size in center
    tl.to(text, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out'
    })
    
    // Phase 2: Pause for impact
    .to({}, { duration: 1 })
    
    // Phase 3: Text slides up to top of screen (keeping large size)
    .to(text, {
      y: '-35vh',
      duration: 1.2,
      ease: 'power2.inOut'
    })
    
    // Phase 4: Pause at top
    .to({}, { duration: 0.5 })
    
    // Phase 5: Fade out overlay
    .to(overlay, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
    
    // Phase 6: Transition from animation text to header text and show content
    .to(text, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, '-=0.8')
    
    .to(headerText, {
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    
    .to(mainContent, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.3')

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <>
      {/* Intro Animation Overlay */}
      <div 
        ref={containerRef}
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${
          isAnimationComplete ? 'pointer-events-none' : ''
        }`}
      >
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
        />
        
        <h1 
          ref={textRef}
          className="relative z-10 font-display text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] font-black text-white text-center leading-none tracking-tighter whitespace-nowrap"
          style={{ fontWeight: 900 }}
        >
          LANK CHILLED
        </h1>
      </div>

      {/* Header Text (visible after animation) - Large and full width */}
      <div className="sticky top-0 z-40 bg-black py-8">
        <div className="text-center">
          <h1 
            ref={headerTextRef}
            className="font-display text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] font-black text-white leading-none tracking-tighter whitespace-nowrap"
            style={{ fontWeight: 900 }}
          >
            LANK CHILLED
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="relative z-10">
        {children}
      </div>
    </>
  )
} 