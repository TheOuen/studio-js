'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { ContactModal } from './ContactModal'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        const buttons = contactButtonsRef.current.querySelectorAll('button')
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
            <span className="text-[clamp(16px,1.6vw,24px)] font-bold text-pink-600">
              Cape Town, South Africa
            </span>
            <span className="text-[clamp(16px,1.6vw,24px)] font-bold text-pink-600">
              {(() => {
                const time = new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                });
                const [timepart, period] = time.split(' ');
                const [hours, minutes] = timepart.split(':');
                return (
                  <>
                    <span>{hours}</span>
                    <span className="blink-animation">:</span>
                    <span>{minutes}</span>
                    <span> {period}</span>
                  </>
                );
              })()}
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 ref={titleRef} className="text-[clamp(50px,6vw,72px)] font-black text-pink-600 mb-20 text-center leading-[0.85] tracking-tight">
            Let&apos;s work <span className="text-pink-800">together!</span>
          </h2>
          
          {/* Interactive Contact Elements Layout */}
          <div className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center mb-20">
            
            {/* Left Decorative Elements */}
            <div ref={decorativeElementsRef} className="absolute left-0 lg:left-8 top-1/2 transform -translate-y-1/2">
              {/* Say Hi Bubble */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-24 h-24 lg:w-32 lg:h-32 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transform -rotate-12 cursor-pointer select-none shadow-xl mb-8 transition-all duration-300 hover:scale-110"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(-12deg)`
                }}
              >
                <span className="text-lg lg:text-xl font-black text-black leading-tight text-center">say<br/>hi!!</span>
              </button>
              
              {/* Leopard Print Circle */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full cursor-pointer select-none shadow-lg transition-all duration-300 hover:scale-110 hover:brightness-110"
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
              </button>
            </div>

            {/* Center Contact Buttons */}
            <div ref={contactButtonsRef} className="flex flex-col items-center gap-6 lg:gap-8">
              {/* Reach out - Top */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-400 hover:bg-green-500 text-black font-black text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-full transition-all duration-300 shadow-lg hover:scale-105 transform cursor-pointer"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                Reach out
              </button>
              
              {/* Let's chat - Middle */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-700 hover:bg-red-800 text-white font-black text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-full transition-all duration-300 shadow-lg hover:scale-105 transform cursor-pointer"
                style={{ 
                  transform: `translate(${Math.random() * 30 - 15}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                Let&apos;s chat
              </button>
              
              {/* Send a message - Bottom (Largest) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-black text-2xl lg:text-3xl px-12 lg:px-16 py-6 lg:py-8 rounded-full transition-all duration-300 shadow-xl hover:scale-105 transform cursor-pointer"
                style={{ 
                  transform: `translate(${Math.random() * 25 - 12.5}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                Send a message
              </button>
            </div>

            {/* Right Mail Icon */}
            <div className="absolute right-0 lg:right-8 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-24 h-24 lg:w-32 lg:h-32 bg-cyan-400 hover:bg-cyan-500 rounded-full flex items-center justify-center transform rotate-12 cursor-pointer select-none shadow-xl transition-all duration-300 hover:scale-110"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(12deg)`
                }}
              >
                <svg className="w-12 h-12 lg:w-16 lg:h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Footer Links */}
          <div ref={socialLinksRef} className="flex justify-between items-center">
            <span className="text-[clamp(16px,1.6vw,24px)] font-bold text-pink-600">©2025</span>
            
            <div className="flex gap-8 lg:gap-12">
              {[
                { name: 'Instagram', href: '#' },
                { name: 'YouTube', href: '#' },
                { name: 'Unsplash', href: '#' },
                { name: 'TikTok', href: '#' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="relative group inline-block"
                >
                  <div className="px-4 overflow-hidden h-10 py-2">
                    <div className="flex flex-col transition-transform duration-200 ease-[cubic-bezier(0.64,0.57,0.67,1.53)] group-hover:-translate-y-1/2">
                      <span className="text-[clamp(16px,1.6vw,24px)] font-medium text-pink-600 group-hover:text-pink-800 transition-colors mb-1.5">
                        {social.name}
                      </span>
                      <span className="text-[clamp(16px,1.6vw,24px)] font-medium text-pink-600 group-hover:text-pink-800 transition-colors mb-1.5">
                        {social.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover preview effect */}
                  <div className="left-1/2 -translate-x-1/2 absolute -top-48 w-[200px] h-[120px] p-2 rounded-lg bg-pink-200/25 backdrop-blur-md opacity-0 translate-y-4 scale-95 pointer-events-none group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-10">
                    <div className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{social.name}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
} 