'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/Container'
import { GSAPFadeUp } from '@/components/GSAPAnimations'

export function MetricsBanner() {
  const [countersStarted, setCountersStarted] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const metrics = [
    {
      id: 1,
      value: 50,
      suffix: '+',
      label: 'Projects Delivered',
      sublabel: 'Across 15 African countries',
      color: 'from-cyan-400 to-blue-500',
      icon: '🚀'
    },
    {
      id: 2,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      sublabel: 'Based on project reviews',
      color: 'from-green-400 to-emerald-500',
      icon: '⭐'
    },
    {
      id: 3,
      value: 340,
      suffix: '%',
      label: 'Average ROI Increase',
      sublabel: 'For client businesses',
      color: 'from-purple-400 to-blue-500',
      icon: '📈'
    },
    {
      id: 4,
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      sublabel: 'Always here when you need us',
      color: 'from-orange-400 to-red-500',
      icon: '🛟'
    }
  ]

  useEffect(() => {
    if (isInView && !countersStarted) {
      setCountersStarted(true)
    }
  }, [isInView, countersStarted])

  const CountingNumber = ({ targetValue, suffix, duration = 2000, startDelay = 0 }) => {
    const [currentValue, setCurrentValue] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
      if (countersStarted && !hasStarted) {
        setTimeout(() => {
          setHasStarted(true)
          let startTime = null
          const startValue = 0

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)
            
            setCurrentValue(current)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCurrentValue(targetValue)
            }
          }
          
          requestAnimationFrame(animate)
        }, startDelay)
      }
    }, [countersStarted, hasStarted, targetValue, duration, startDelay])

    return (
      <span className="tabular-nums">
        {currentValue}{suffix}
      </span>
    )
  }

  return (
    <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <Container className="relative z-10">
        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Icon */}
                <motion.div 
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {metric.icon}
                </motion.div>
                
                {/* Number */}
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-3 leading-tight`}>
                  <CountingNumber 
                    targetValue={metric.value}
                    suffix={metric.suffix}
                    duration={2500}
                    startDelay={index * 200}
                  />
                </div>
                
                {/* Label */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                  {metric.label}
                </h3>
                
                {/* Sublabel */}
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {metric.sublabel}
                </p>

                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/60 transition-colors duration-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-300"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.3 
                  }}
                />
              </div>

              {/* Glow effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <GSAPFadeUp>
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to see similar results?
              </h3>
              <p className="text-white/70 leading-relaxed">
                Join the growing list of successful African businesses that chose to work with us. 
                Your success story could be next.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <span>Get Your Free Consultation</span>
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
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black font-medium rounded-full backdrop-blur-sm border border-white/20 hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3 justify-center">
                  <span>View Success Stories</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </GSAPFadeUp>
      </Container>
    </section>
  )
}