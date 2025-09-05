'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/Container'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Web Design',
    subtitle: 'Digital Experiences',
    description: 'Crafting user-centric interfaces that captivate and convert',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
    color: '#00CFFF'
  },
  {
    id: '02', 
    title: 'Development',
    subtitle: 'Modern Solutions',
    description: 'Building performant applications with cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    color: '#3B82F6'
  },
  {
    id: '03',
    title: '3D Design',
    subtitle: 'Visual Storytelling',
    description: 'Creating immersive worlds and photorealistic visualizations',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    color: '#8B5CF6'
  },
  {
    id: '04',
    title: 'Branding',
    subtitle: 'Identity Systems',
    description: 'Building memorable brands that resonate and endure',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop',
    color: '#EC4899'
  }
]

export function CleanServices() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-black py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Clean Header */}
          <div className="text-center mb-20">
            <motion.h2 
              className="text-7xl sm:text-8xl lg:text-9xl font-black text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SERVICES
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-white/20 mx-auto"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {/* Main Content Area - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
            
            {/* Left Side - Image Display */}
            <motion.div 
              className="relative h-[500px] lg:h-[700px] overflow-hidden rounded-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {services.map((service, index) => (
                  activeService === index && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Service number */}
                      <div 
                        className="absolute top-8 left-8 text-8xl font-black text-white/10"
                        style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.5)' }}
                      >
                        {service.id}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Right Side - Service Selector */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onClick={() => setActiveService(index)}
                  className={`relative cursor-pointer group transition-all duration-500 ${
                    activeService === index ? 'scale-100' : 'scale-95 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`p-8 rounded-2xl transition-all duration-500 ${
                    activeService === index 
                      ? 'bg-white/10 border-l-4' 
                      : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'
                  }`}
                  style={{ 
                    borderLeftColor: activeService === index ? service.color : 'transparent' 
                  }}>
                    {/* Service Content */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-sm font-medium text-white/40">
                            {service.id}
                          </span>
                          <span 
                            className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{ 
                              backgroundColor: activeService === index ? `${service.color}20` : 'transparent',
                              color: activeService === index ? service.color : 'white',
                              border: `1px solid ${activeService === index ? service.color : 'transparent'}`
                            }}
                          >
                            {service.subtitle}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                          {service.title}
                        </h3>
                        
                        <AnimatePresence>
                          {activeService === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-white/60 text-lg leading-relaxed"
                            >
                              {service.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Arrow Icon */}
                      <div className={`ml-4 transition-all duration-300 ${
                        activeService === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}>
                        <svg 
                          className="w-6 h-6" 
                          fill="none" 
                          stroke={service.color} 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {activeService === index && (
                      <motion.div 
                        className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden"
                      >
                        <motion.div
                          className="h-full"
                          style={{ backgroundColor: service.color }}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 5, ease: 'linear' }}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation Dots */}
          <div className="flex justify-center mt-16 gap-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`transition-all duration-300 ${
                  activeService === index 
                    ? 'w-12 h-2' 
                    : 'w-2 h-2'
                } rounded-full`}
                style={{ 
                  backgroundColor: activeService === index ? service.color : 'rgba(255,255,255,0.2)'
                }}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}