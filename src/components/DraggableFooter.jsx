'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function DraggableFooter() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const locationTimeRef = useRef(null)
  const contactButtonsRef = useRef(null)
  const decorativeElementsRef = useRef(null)
  const socialLinksRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const title = titleRef.current
    const locationTime = locationTimeRef.current
    const contactButtons = contactButtonsRef.current
    const decorativeElements = decorativeElementsRef.current
    const socialLinks = socialLinksRef.current

    if (!container) return

    // Set initial states - elements start above the screen
    if (title) {
      gsap.set(title, { y: -100, opacity: 0 })
    }
    if (locationTime) {
      gsap.set(locationTime, { y: -80, opacity: 0 })
    }
    if (contactButtons) {
      gsap.set(contactButtons.children, { y: -120, opacity: 0, rotation: -10 })
    }
    if (decorativeElements) {
      gsap.set(decorativeElements.children, { y: -150, opacity: 0, rotation: 20 })
    }
    if (socialLinks) {
      gsap.set(socialLinks, { y: -60, opacity: 0 })
    }

    // Create scroll-triggered animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate elements dropping down in sequence
    tl.to(locationTime, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })
    .to(title, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .to(contactButtons?.children || [], {
      y: 0,
      opacity: 1,
      rotation: 0,
      duration: 1.2,
      ease: 'back.out(1.7)',
      stagger: 0.15
    }, '-=0.3')
    .to(decorativeElements?.children || [], {
      y: 0,
      opacity: 1,
      rotation: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      stagger: 0.1
    }, '-=0.8')
    .to(socialLinks, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.5')

    // Add hover effects after animation completes
    tl.call(() => {
      // Add hover effects to contact buttons
      if (contactButtonsRef.current && typeof window !== 'undefined') {
        const buttons = contactButtonsRef.current.querySelectorAll('a')
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.1, rotation: Math.random() * 3 - 1.5, duration: 0.3, ease: "power2.out" })
          })
          button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
          })
        })
      }

      // Add hover effects to decorative elements
      if (decorativeElementsRef.current && typeof window !== 'undefined') {
        const elements = decorativeElementsRef.current.querySelectorAll('[class*="cursor-pointer"]')
        Array.from(elements).forEach(element => {
          element.addEventListener('mouseenter', () => {
            gsap.to(element, { scale: 1.2, rotation: Math.random() * 15 - 7.5, duration: 0.3, ease: "power2.out" })
          })
          element.addEventListener('mouseleave', () => {
            gsap.to(element, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
          })
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      // Draggable instances are automatically cleaned up when components unmount
    }
  }, [])



  return (
    <div 
      className="bg-gradient-to-br from-pink-100 via-white to-pink-50 py-20"
      ref={containerRef}
      data-footer
    >
      <Container>
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 mx-4 shadow-2xl border border-pink-100">
          {/* Header with Location & Time */}
          <div ref={locationTimeRef} className="flex justify-between items-center mb-16">
            <span className="text-lg font-bold text-pink-600">
              Cape Town, South Africa
            </span>
            <span className="text-lg font-bold text-pink-600">
              {new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
              }).toUpperCase()}
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-black text-pink-600 mb-20 text-center leading-[0.9] tracking-tight">
            Let's work together!
          </h2>
          
          {/* Interactive Contact Elements Layout */}
          <div className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center mb-20">
            
            {/* Left Decorative Elements */}
            <div ref={decorativeElementsRef} className="absolute left-0 lg:left-8 top-1/2 transform -translate-y-1/2">
              {/* Say Hi Bubble */}
              <div 
                className="w-24 h-24 lg:w-32 lg:h-32 bg-yellow-400 rounded-full flex items-center justify-center transform -rotate-12 cursor-pointer select-none shadow-xl mb-8 transition-all duration-300 hover:scale-110"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(-12deg)`
                }}
              >
                <span className="text-lg lg:text-xl font-black text-black leading-tight text-center">say<br/>hi!!</span>
              </div>
              
              {/* Leopard Print Circle */}
              <div 
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full cursor-pointer select-none shadow-lg transition-all duration-300 hover:scale-110"
                style={{ 
                  background: 'radial-gradient(circle at 30% 20%, #D2691E 20%, #8B4513 20%, #8B4513 40%, #D2691E 40%, #D2691E 60%, #8B4513 60%)',
                  backgroundSize: '12px 12px',
                  transform: `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(${Math.random() * 20 - 10}deg)`
                }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Contact Buttons */}
            <div ref={contactButtonsRef} className="flex flex-col items-center gap-6 lg:gap-8">
              {/* Reach out - Top */}
              <a
                href="mailto:mike@lankchilled.com?subject=Project Inquiry&body=Hi Mike,%0D%0A%0D%0AI came across your website and would like to inquire about a potential project. I'm interested in discussing:%0D%0A%0D%0A- [Your project type: Web Design, Development, 3D Rendering, etc.]%0D%0A- [Brief project description]%0D%0A- [Timeline and budget if known]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards"
                className="bg-green-400 hover:bg-green-500 text-black font-black text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-full transition-all duration-300 shadow-lg hover:scale-105 transform"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                Reach out
              </a>
              
              {/* Let's chat - Middle */}
              <a
                href="/contact"
                className="bg-red-700 hover:bg-red-800 text-white font-black text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-full transition-all duration-300 shadow-lg hover:scale-105 transform"
                style={{ 
                  transform: `translate(${Math.random() * 30 - 15}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                Let's chat
              </a>
              
              {/* Send a message - Bottom (Largest) */}
              <a
                href="mailto:mike@lankchilled.com?subject=Project Inquiry&body=Hi Mike,%0D%0A%0D%0AI came across your website and would like to inquire about a potential project. I'm interested in discussing:%0D%0A%0D%0A- [Your project type: Web Design, Development, 3D Rendering, etc.]%0D%0A- [Brief project description]%0D%0A- [Timeline and budget if known]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards"
                className="bg-pink-500 hover:bg-pink-600 text-white font-black text-2xl lg:text-3xl px-12 lg:px-16 py-6 lg:py-8 rounded-full transition-all duration-300 shadow-xl hover:scale-105 transform"
                style={{ 
                  transform: `translate(${Math.random() * 25 - 12.5}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                Send a message
              </a>
            </div>

            {/* Right Mail Icon */}
            <div className="absolute right-0 lg:right-8 top-1/2 transform -translate-y-1/2">
              <div 
                className="w-24 h-24 lg:w-32 lg:h-32 bg-cyan-400 rounded-full flex items-center justify-center transform rotate-12 cursor-pointer select-none shadow-xl transition-all duration-300 hover:scale-110"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(12deg)`
                }}
              >
                <svg className="w-12 h-12 lg:w-16 lg:h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          <div ref={socialLinksRef} className="flex justify-between items-center">
            <span className="text-pink-600 font-bold text-lg">©2025</span>
            
            <div className="flex gap-8 lg:gap-12">
              <a href="#" className="text-pink-600 font-medium hover:text-pink-800 transition-colors text-lg">Instagram</a>
              <a href="#" className="text-pink-600 font-medium hover:text-pink-800 transition-colors text-lg">YouTube</a>
              <a href="#" className="text-pink-600 font-medium hover:text-pink-800 transition-colors text-lg">Unsplash</a>
              <a href="#" className="text-pink-600 font-medium hover:text-pink-800 transition-colors text-lg">TikTok</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 