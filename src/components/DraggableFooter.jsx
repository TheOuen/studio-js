'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { ContactModal } from './ContactModal'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin)
}

export function DraggableFooter() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const locationTimeRef = useRef(null)
  const contactButtonsRef = useRef(null)
  const decorativeElementsRef = useRef(null)
  const socialLinksRef = useRef(null)
  const interactiveAreaRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const draggableInstancesRef = useRef([])
  const allDraggableElementsRef = useRef([])

  // Collision detection and bouncing physics
  const checkCollisions = () => {
    const elements = allDraggableElementsRef.current
    
    for (let i = 0; i < elements.length; i++) {
      for (let j = i + 1; j < elements.length; j++) {
        const el1 = elements[i]
        const el2 = elements[j]
        
        if (!el1 || !el2) continue
        
        const rect1 = el1.getBoundingClientRect()
        const rect2 = el2.getBoundingClientRect()
        
        // Calculate distance between centers
        const dx = (rect1.left + rect1.width/2) - (rect2.left + rect2.width/2)
        const dy = (rect1.top + rect1.height/2) - (rect2.top + rect2.height/2)
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Calculate minimum distance for collision (using average radius)
        const radius1 = Math.max(rect1.width, rect1.height) / 2
        const radius2 = Math.max(rect2.width, rect2.height) / 2
        const minDistance = radius1 + radius2
        
        // If collision detected
        if (distance < minDistance && distance > 0) {
          // Calculate bounce vectors
          const angle = Math.atan2(dy, dx)
          const force = (minDistance - distance) * 0.5
          
          // Apply bounce forces
          const bounce1X = Math.cos(angle) * force
          const bounce1Y = Math.sin(angle) * force
          const bounce2X = -bounce1X
          const bounce2Y = -bounce1Y
          
          // Get current positions
          const currentX1 = gsap.getProperty(el1, 'x')
          const currentY1 = gsap.getProperty(el1, 'y')
          const currentX2 = gsap.getProperty(el2, 'x')
          const currentY2 = gsap.getProperty(el2, 'y')
          
          // Apply bounce animation
          gsap.to(el1, {
            x: currentX1 + bounce1X,
            y: currentY1 + bounce1Y,
            duration: 0.3,
            ease: "power2.out"
          })
          
          gsap.to(el2, {
            x: currentX2 + bounce2X,
            y: currentY2 + bounce2Y,
            duration: 0.3,
            ease: "power2.out"
          })
          
          // Add rotation for more dynamic effect
          gsap.to(el1, {
            rotation: `+=${Math.random() * 30 - 15}`,
            duration: 0.4,
            ease: "power2.out"
          })
          
          gsap.to(el2, {
            rotation: `+=${Math.random() * 30 - 15}`,
            duration: 0.4,
            ease: "power2.out"
          })
          
          // Scale effect for impact
          gsap.to([el1, el2], {
            scale: 1.1,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
          })
        }
      }
    }
  }

  useEffect(() => {
    const container = containerRef.current
    const title = titleRef.current
    const locationTime = locationTimeRef.current
    const contactButtons = contactButtonsRef.current
    const decorativeElements = decorativeElementsRef.current
    const socialLinks = socialLinksRef.current
    const interactiveArea = interactiveAreaRef.current

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

    // Add drag functionality and collision detection after animation completes
    tl.call(() => {
      allDraggableElementsRef.current = []
      
      // Create a universal draggable setup function
      const createDraggableElement = (element, config = {}) => {
        const defaultConfig = {
          type: 'x,y',
          bounds: interactiveArea,
          inertia: true,
          throwProps: true,
          edgeResistance: 0.65,
          onDragStart: function() {
            gsap.to(this.target, { 
              scale: 1.15, 
              rotation: Math.random() * 10 - 5,
              duration: 0.2,
              ease: "power2.out",
              zIndex: 1000
            })
            this.target.style.cursor = 'grabbing'
          },
          onDrag: function() {
            // Add wiggle during drag
            gsap.to(this.target, { 
              rotation: Math.sin(Date.now() * 0.01) * 5,
              duration: 0.1 
            })
            // Check collisions during drag
            checkCollisions()
          },
          onDragEnd: function() {
            gsap.to(this.target, { 
              scale: 1, 
              duration: 0.4,
              ease: "back.out(1.7)",
              zIndex: 'auto'
            })
            this.target.style.cursor = 'grab'
            
            // Final bounce effect
            gsap.to(this.target, {
              rotation: Math.random() * 20 - 10,
              duration: 0.6,
              ease: "elastic.out(1, 0.4)"
            })
          },
          onThrowUpdate: function() {
            // Physics during throw
            const velocity = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY)
            gsap.to(this.target, {
              rotation: velocity * 0.3 * (Math.random() > 0.5 ? 1 : -1),
              duration: 0.1
            })
            // Check collisions during throw
            checkCollisions()
          },
          onClick: function(e) {
            // Allow click if drag distance is minimal (under 5 pixels)
            const dragDistance = Math.sqrt((this.x - this.startX) ** 2 + (this.y - this.startY) ** 2)
            if (this.isDragging && dragDistance > 5) {
              e.stopImmediatePropagation()
              e.preventDefault()
            }
          },
          minimumMovement: 10
        }
        
        const mergedConfig = { ...defaultConfig, ...config }
        const draggableInstance = Draggable.create(element, mergedConfig)[0]
        
        draggableInstancesRef.current.push(draggableInstance)
        allDraggableElementsRef.current.push(element)
        
        element.style.cursor = 'grab'
        
        return draggableInstance
      }

      // Make contact buttons draggable
      if (contactButtonsRef.current && typeof window !== 'undefined') {
        const buttons = contactButtonsRef.current.querySelectorAll('button')
        buttons.forEach((button, index) => {
          const draggableInstance = createDraggableElement(button, {
            edgeResistance: 0.7
          })
          
          // Hover effects (when not dragging)
          button.addEventListener('mouseenter', () => {
            if (!draggableInstance.isDragging) {
              gsap.to(button, { 
                scale: 1.05, 
                rotation: Math.random() * 6 - 3, 
                duration: 0.3, 
                ease: "power2.out" 
              })
            }
          })
          button.addEventListener('mouseleave', () => {
            if (!draggableInstance.isDragging) {
              gsap.to(button, { 
                scale: 1, 
                duration: 0.3, 
                ease: "power2.out" 
              })
            }
          })
        })
      }

      // Make decorative elements draggable
      if (decorativeElementsRef.current && typeof window !== 'undefined') {
        const elements = decorativeElementsRef.current.querySelectorAll('button')
        elements.forEach((element, index) => {
          const draggableInstance = createDraggableElement(element, {
            edgeResistance: 0.8,
            onDragStart: function() {
              gsap.to(this.target, { 
                scale: 1.3, 
                rotation: Math.random() * 15 - 7.5,
                duration: 0.2,
                ease: "power2.out",
                zIndex: 1000
              })
              this.target.style.cursor = 'grabbing'
            },
            onDrag: function() {
              gsap.to(this.target, { 
                rotation: Math.sin(Date.now() * 0.02) * 8,
                duration: 0.1 
              })
              checkCollisions()
            }
          })
          
          // Hover effects
          element.addEventListener('mouseenter', () => {
            if (!draggableInstance.isDragging) {
              gsap.to(element, { 
                scale: 1.4, 
                rotation: Math.random() * 25 - 12.5, 
                duration: 0.3, 
                ease: "power2.out" 
              })
            }
          })
          element.addEventListener('mouseleave', () => {
            if (!draggableInstance.isDragging) {
              gsap.to(element, { 
                scale: 1, 
                duration: 0.3, 
                ease: "power2.out" 
              })
            }
          })
        })
      }

      // Make the mail icon in the right decorative area draggable
      const rightMailIcon = interactiveArea?.querySelector('.absolute.right-0 button')
      if (rightMailIcon) {
        const draggableInstance = createDraggableElement(rightMailIcon, {
          edgeResistance: 0.8,
          onDragStart: function() {
            gsap.to(this.target, { 
              scale: 1.25, 
              rotation: Math.random() * 15 - 7.5,
              duration: 0.2,
              ease: "power2.out",
              zIndex: 1000
            })
            this.target.style.cursor = 'grabbing'
          }
        })
        
        rightMailIcon.addEventListener('mouseenter', () => {
          if (!draggableInstance.isDragging) {
            gsap.to(rightMailIcon, { 
              scale: 1.15, 
              rotation: Math.random() * 20 - 10, 
              duration: 0.3, 
              ease: "power2.out" 
            })
          }
        })
        rightMailIcon.addEventListener('mouseleave', () => {
          if (!draggableInstance.isDragging) {
            gsap.to(rightMailIcon, { 
              scale: 1, 
              duration: 0.3, 
              ease: "power2.out" 
            })
          }
        })
      }

      // Set up continuous collision monitoring during interactions
      let collisionInterval
      const startCollisionMonitoring = () => {
        collisionInterval = setInterval(checkCollisions, 16) // ~60fps
      }
      
      const stopCollisionMonitoring = () => {
        if (collisionInterval) {
          clearInterval(collisionInterval)
          collisionInterval = null
        }
      }

      // Monitor when any dragging starts/stops
      draggableInstancesRef.current.forEach(instance => {
        const originalOnDragStart = instance.vars.onDragStart
        const originalOnDragEnd = instance.vars.onDragEnd
        
        instance.vars.onDragStart = function() {
          if (originalOnDragStart) originalOnDragStart.call(this)
          startCollisionMonitoring()
        }
        
        instance.vars.onDragEnd = function() {
          if (originalOnDragEnd) originalOnDragEnd.call(this)
          setTimeout(stopCollisionMonitoring, 500) // Continue monitoring briefly after drag ends
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      // Clean up draggable instances
      draggableInstancesRef.current.forEach(instance => {
        if (instance && instance.kill) {
          instance.kill()
        }
      })
      draggableInstancesRef.current = []
      allDraggableElementsRef.current = []
    }
  }, [])

  return (
    <div 
      className="bg-black py-20"
      ref={containerRef}
      data-footer
    >
      <Container>
        <div className="bg-neutral-900 rounded-[2.5rem] p-8 lg:p-16 mx-4 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://res.cloudinary.com/dwufoskyo/image/upload/v1757042973/Lank%20Chilled/viktor-forgacs-5j8hd3QpRbo-unsplash.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
          {/* Header with Location & Time */}
          <div ref={locationTimeRef} className="flex justify-between items-center mb-16">
            <span className="text-[clamp(16px,1.6vw,24px)] font-bold text-white">
              Cape Town, South Africa
            </span>
            <span className="text-[clamp(16px,1.6vw,24px)] font-bold text-white">
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
                    <span className="animate-pulse">:</span>
                    <span>{minutes}</span>
                    <span> {period}</span>
                  </>
                );
              })()}
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 ref={titleRef} className="text-[clamp(50px,6vw,72px)] font-black text-white mb-20 text-center leading-[0.85] tracking-tight">
            Let&apos;s work <span className="text-gray-300">together!</span>
          </h2>
          
          {/* Interactive Contact Elements Layout - Physics Playground */}
          <div 
            ref={interactiveAreaRef}
            className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center mb-20 overflow-hidden"
            style={{ 
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
              border: '2px dashed rgba(255, 255, 255, 0.1)',
              borderRadius: '2rem'
            }}
          >
            {/* Drag instruction hint */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm font-medium opacity-50 pointer-events-none">
              ✨ Drag elements around - they bounce off each other! ✨
            </div>
            
            {/* Left Decorative Elements */}
            <div ref={decorativeElementsRef} className="absolute left-0 lg:left-8 top-1/2 transform -translate-y-1/2">
              {/* Say Hi Bubble */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="block w-24 h-24 lg:w-32 lg:h-32 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transform -rotate-12 cursor-grab select-none shadow-xl mb-8 transition-colors duration-300"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(-12deg)`
                }}
              >
                <span className="text-lg lg:text-xl font-black text-black leading-tight text-center pointer-events-none">say<br/>hi!!</span>
              </button>
              
              {/* Leopard Print Circle */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="block w-20 h-20 lg:w-24 lg:h-24 rounded-full cursor-grab select-none shadow-lg transition-all duration-300"
                style={{ 
                  background: 'radial-gradient(circle at 30% 20%, #D2691E 20%, #8B4513 20%, #8B4513 40%, #D2691E 40%, #D2691E 60%, #8B4513 60%)',
                  backgroundSize: '12px 12px',
                  transform: `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(${Math.random() * 20 - 10}deg)`
                }}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center pointer-events-none">
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
                className="bg-white hover:bg-gray-200 text-black font-black text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-full transition-colors duration-300 shadow-lg transform cursor-grab select-none"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                <span className="pointer-events-none">Reach out</span>
              </button>
              
              {/* Let's chat - Middle */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-800 hover:bg-gray-700 text-white font-black text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-full transition-colors duration-300 shadow-lg transform cursor-grab select-none"
                style={{ 
                  transform: `translate(${Math.random() * 30 - 15}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                <span className="pointer-events-none">Let&apos;s chat</span>
              </button>
              
              {/* Send a message - Bottom (Largest) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black hover:bg-gray-900 text-white font-black text-2xl lg:text-3xl px-12 lg:px-16 py-6 lg:py-8 rounded-full transition-colors duration-300 shadow-xl transform cursor-grab select-none border-2 border-white"
                style={{ 
                  transform: `translate(${Math.random() * 25 - 12.5}px, 0px) rotate(${Math.random() * 4 - 2}deg)`
                }}
              >
                <span className="pointer-events-none">Send a message</span>
              </button>
            </div>

            {/* Right Mail Icon */}
            <div className="absolute right-0 lg:right-8 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transform rotate-12 cursor-grab select-none shadow-xl transition-colors duration-300"
                style={{ 
                  transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(12deg)`
                }}
              >
                <svg className="w-12 h-12 lg:w-16 lg:h-16 text-white pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Footer Links */}
          <div ref={socialLinksRef} className="flex justify-between items-center">
            <span className="text-[clamp(16px,1.6vw,24px)] font-bold text-white">©2025</span>
            
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
                      <span className="text-[clamp(16px,1.6vw,24px)] font-medium text-white group-hover:text-gray-300 transition-colors mb-1.5">
                        {social.name}
                      </span>
                      <span className="text-[clamp(16px,1.6vw,24px)] font-medium text-white group-hover:text-gray-300 transition-colors mb-1.5">
                        {social.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover preview effect */}
                  <div className="left-1/2 -translate-x-1/2 absolute -top-48 w-[200px] h-[120px] p-2 rounded-lg bg-gray-800/25 backdrop-blur-md opacity-0 translate-y-4 scale-95 pointer-events-none group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-10">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{social.name}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
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