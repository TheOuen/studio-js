'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function GSAPFadeUp({ children, delay = 0, duration = 1.2 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.set(element, {
      y: 100,
      opacity: 0
    })

    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [delay, duration])

  return <div ref={elementRef}>{children}</div>
}

export function GSAPStaggerChildren({ children, stagger = 0.15, delay = 0 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const childElements = container.children

    gsap.set(childElements, {
      y: 80,
      opacity: 0
    })

    gsap.to(childElements, {
      y: 0,
      opacity: 1,
      duration: 1.4,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [stagger, delay])

  return <div ref={containerRef}>{children}</div>
}

export function GSAPScaleOnHover({ children, scale = 1.05 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration: 0.6,
        ease: 'power3.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.6,
        ease: 'power3.out'
      })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [scale])

  return <div ref={elementRef}>{children}</div>
}

export function GSAPTextReveal({ children, delay = 0 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.set(element, {
      y: 60,
      opacity: 0,
      clipPath: 'inset(0 0 100% 0)'
    })

    gsap.to(element, {
      y: 0,
      opacity: 1,
      clipPath: 'inset(0 0 0% 0)',
      duration: 1.6,
      delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [delay])

  return <div ref={elementRef}>{children}</div>
}

export function GSAPParallax({ children, speed = 0.5 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [speed])

  return <div ref={elementRef}>{children}</div>
}

export function GSAPMorphOnScroll({ children }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.set(element, {
      borderRadius: '0px',
      scale: 0.8,
      opacity: 0
    })

    gsap.to(element, {
      borderRadius: '24px',
      scale: 1,
      opacity: 1,
      duration: 1.0, // Reduced from 1.8 to 1.0 for faster animation
      ease: 'power3.out', // Changed from power4.out to power3.out for snappier feel
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return <div ref={elementRef}>{children}</div>
} 