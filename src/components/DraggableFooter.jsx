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
      if (contactButtons && typeof window !== 'undefined') {
        const buttons = contactButtons.querySelectorAll('a')
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.05, rotation: Math.random() * 5 - 2.5, duration: 0.3, ease: "power2.out" })
          })
          button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
          })
        })
      }

      // Add hover effects to decorative elements
      if (decorativeElements && typeof window !== 'undefined') {
        const elements = decorativeElements.children
        Array.from(elements).forEach(element => {
          element.addEventListener('mouseenter', () => {
            gsap.to(element, { scale: 1.1, rotation: Math.random() * 10 - 5, duration: 0.3, ease: "power2.out" })
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

  const contactButtons = [
    { id: 'reach-out', text: 'Reach out', color: 'bg-green-500', href: 'mailto:mike@lankchilled.com?subject=Project Inquiry&body=Hi Mike,%0D%0A%0D%0AI came across your website and would like to inquire about a potential project. I\'m interested in discussing:%0D%0A%0D%0A- [Your project type: Web Design, Development, 3D Rendering, etc.]%0D%0A- [Brief project description]%0D%0A- [Timeline and budget if known]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards' },
    { id: 'lets-chat', text: "Let's chat", color: 'bg-red-700', href: '/contact' },
    { id: 'send-message', text: 'Send a message', color: 'bg-pink-500', href: 'mailto:mike@lankchilled.com?subject=Project Inquiry&body=Hi Mike,%0D%0A%0D%0AI came across your website and would like to inquire about a potential project. I\'m interested in discussing:%0D%0A%0D%0A- [Your project type: Web Design, Development, 3D Rendering, etc.]%0D%0A- [Brief project description]%0D%0A- [Timeline and budget if known]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards' }
  ]

  const decorativeElements = [
    { id: 'say-bubble', text: 'say hi!!', color: 'bg-yellow-400', textColor: 'text-black' },
    { id: 'mail-icon', color: 'bg-cyan-400', isIcon: true }
  ]

  return (
    <div 
      className="bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 py-20"
      ref={containerRef}
      data-footer
    >
      <Container>
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="bg-white rounded-3xl p-8 mx-4 shadow-2xl">
            {/* Location & Time */}
            <div ref={locationTimeRef} className="flex justify-between items-center mb-12">
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
            <h2 ref={titleRef} className="text-4xl sm:text-5xl font-black text-pink-600 mb-12 text-center leading-tight">
              Let&apos;s work<br/>together!
            </h2>
            
            {/* Email Section */}
            <div ref={contactButtonsRef} className="mb-8">
              <div className="bg-pink-100 rounded-2xl p-6">
                <p className="text-lg font-bold text-pink-600 mb-2">Email me</p>
                <a 
                  href="mailto:mike@lankchilled.com?subject=Project Inquiry&body=Hi Mike,%0D%0A%0D%0AI came across your website and would like to inquire about a potential project. I'm interested in discussing:%0D%0A%0D%0A- [Your project type: Web Design, Development, 3D Rendering, etc.]%0D%0A- [Brief project description]%0D%0A- [Timeline and budget if known]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards"
                  className="text-xl font-medium text-pink-500 hover:text-pink-700 transition-colors"
                >
                  mike@lankchilled.com
                </a>
              </div>
            </div>
            
            {/* Message Button */}
            <div className="mb-12">
              <a
                href="mailto:mike@lankchilled.com?subject=Project Inquiry&body=Hi Mike,%0D%0A%0D%0AI came across your website and would like to inquire about a potential project. I'm interested in discussing:%0D%0A%0D%0A- [Your project type: Web Design, Development, 3D Rendering, etc.]%0D%0A- [Brief project description]%0D%0A- [Timeline and budget if known]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards"
                className="block w-full bg-pink-400 hover:bg-pink-500 text-white font-black text-2xl py-6 rounded-2xl text-center transition-colors shadow-lg"
              >
                Send me a message
              </a>
            </div>
            
            {/* Social Links */}
            <div ref={socialLinksRef}>
              <div className="grid grid-cols-2 gap-4 text-center text-pink-600">
                <a href="#" className="font-medium hover:text-pink-800 transition-colors">Instagram</a>
                <a href="#" className="font-medium hover:text-pink-800 transition-colors">Unsplash</a>
                <a href="#" className="font-medium hover:text-pink-800 transition-colors">YouTube</a>
                <a href="#" className="font-medium hover:text-pink-800 transition-colors">TikTok</a>
              </div>
              <div className="text-center mt-4">
                <span className="text-pink-600 font-medium">©2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <FadeIn className="hidden lg:block text-center">
          <div ref={locationTimeRef} className="mb-8">
            <span className="text-sm font-medium text-white/80 tracking-widest uppercase">
              Cape Town, South Africa
            </span>
            <span className="ml-8 text-sm font-medium text-yellow-300">
              {new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })} AM
            </span>
          </div>
          
          <h2 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-16 tracking-tight">
            Let&apos;s work together!
          </h2>
          
          {/* Draggable Contact Elements */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <div ref={contactButtonsRef} className="flex flex-wrap items-center justify-center gap-12 relative max-w-4xl">
              
              {/* Contact Buttons - Much Larger */}
              {contactButtons.map((button, index) => (
                <a
                  key={button.id}
                  href={button.href}
                  className={`px-12 py-6 lg:px-16 lg:py-8 ${button.color} text-white font-black text-2xl lg:text-3xl rounded-full transition-all duration-300 shadow-2xl cursor-pointer select-none border-4 border-white/20`}
                  style={{ 
                    transform: `translate(${Math.random() * 15 - 7.5}px, ${Math.random() * 15 - 7.5}px) rotate(${Math.random() * 6 - 3}deg)`
                  }}
                >
                  {button.text}
                </a>
              ))}
            </div>

            {/* Decorative Elements */}
            <div ref={decorativeElementsRef} className="absolute inset-0 pointer-events-none">
              {/* Left decorative element - Say Hi */}
              <div 
                className="absolute -left-32 lg:-left-40 top-1/2 transform -translate-y-1/2 w-24 h-24 lg:w-28 lg:h-28 bg-yellow-400 rounded-full flex items-center justify-center -rotate-12 cursor-pointer select-none shadow-xl pointer-events-auto transition-all duration-300"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(-12deg)`
                }}
              >
                <span className="text-lg lg:text-xl font-black text-black leading-tight text-center">say<br/>hi!!</span>
              </div>
              
              {/* Right decorative element - Mail Icon */}
              <div 
                className="absolute -right-32 lg:-right-40 top-1/2 transform -translate-y-1/2 w-24 h-24 lg:w-28 lg:h-28 bg-cyan-400 rounded-full flex items-center justify-center rotate-12 cursor-pointer select-none shadow-xl pointer-events-auto transition-all duration-300"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(12deg)`
                }}
              >
                <svg className="w-12 h-12 lg:w-14 lg:h-14 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              
              {/* Pattern decorative element */}
              <div 
                className="absolute -left-44 lg:-left-52 -top-16 w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center cursor-pointer select-none shadow-lg pointer-events-auto transition-all duration-300"
                style={{ 
                  background: 'radial-gradient(circle, #8B4513 30%, #D2691E 30%, #D2691E 35%, #8B4513 35%, #8B4513 40%, #D2691E 40%, #D2691E 45%, #8B4513 45%)',
                  backgroundSize: '8px 8px',
                  transform: `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(${Math.random() * 20 - 10}deg)`
                }}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={socialLinksRef} className="text-center border-t border-white/20 pt-8 mt-16">
            <p className="text-sm text-white/60 mb-4">©2025</p>
            <div className="flex justify-center items-center gap-8 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <a href="#" className="hover:text-white transition-colors">Unsplash</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
} 