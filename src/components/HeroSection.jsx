'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Container } from '@/components/Container'
import { GSAPFadeUp, GSAPTextReveal, GSAPStaggerChildren } from '@/components/GSAPAnimations'

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const controls = useAnimation()

  const metrics = [
    { value: "10x", label: "Faster Time to Market" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15", label: "African Countries Served" },
    { value: "24/7", label: "Support Available" }
  ]

  const trustIndicators = [
    "Trusted by 50+ brands",
    "100% React-based solutions",
    "Cape Town's premier studio",
    "Available for new projects"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [metrics.length])

  const handleGetStarted = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleViewWork = () => {
    document.getElementById('work')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <Container className="relative z-10">
        <div className="flex min-h-screen items-center">
          <div className="w-full py-20">
            
            {/* Trust indicator */}
            <GSAPFadeUp>
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm font-medium">
                    {trustIndicators[currentMetric]}
                  </span>
                </div>
              </motion.div>
            </GSAPFadeUp>

            {/* Main headline */}
            <GSAPStaggerChildren>
              <div className="mb-8">
                <GSAPTextReveal>
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.85] tracking-tight mb-6">
                    Ship Products
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      10x Faster
                    </span>
                  </h1>
                </GSAPTextReveal>
                
                <GSAPFadeUp>
                  <div className="max-w-2xl">
                    <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                      We build <strong className="text-white font-semibold">world-class web applications</strong> that 
                      scale your business across Africa and beyond. From Cape Town to the continent.
                    </p>
                    
                    <p className="text-lg text-white/60 font-light">
                      Specializing in React, Next.js, and modern technologies that deliver results.
                    </p>
                  </div>
                </GSAPFadeUp>
              </div>
            </GSAPStaggerChildren>

            {/* Animated metrics */}
            <GSAPFadeUp>
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="text-4xl sm:text-5xl font-black text-cyan-400"
                      key={metrics[currentMetric].value}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {metrics[currentMetric].value}
                    </motion.div>
                    <div className="w-12 h-0.5 bg-cyan-400"></div>
                  </div>
                  <motion.span 
                    className="text-white/70 font-medium text-lg"
                    key={metrics[currentMetric].label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {metrics[currentMetric].label}
                  </motion.span>
                </div>
                
                {/* Progress indicators */}
                <div className="flex gap-2">
                  {metrics.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === currentMetric ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </GSAPFadeUp>

            {/* CTA Buttons */}
            <GSAPFadeUp>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-full overflow-hidden transition-all duration-500 hover:from-cyan-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Start your project with us"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-lg">Start Your Project</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                  
                  {/* Hover effect */}
                  <motion.div 
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  onClick={handleViewWork}
                  className="group px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black font-medium rounded-full backdrop-blur-sm border border-white/20 hover:border-white transition-all duration-500 hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="View our portfolio"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">View Our Work</span>
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-white/30 group-hover:bg-black flex items-center justify-center transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-4 h-4 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>
            </GSAPFadeUp>

            {/* Social proof numbers */}
            <GSAPFadeUp>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">50+</div>
                  <div className="text-white/60 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">15</div>
                  <div className="text-white/60 text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">98%</div>
                  <div className="text-white/60 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">24/7</div>
                  <div className="text-white/60 text-sm">Support</div>
                </div>
              </motion.div>
            </GSAPFadeUp>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}