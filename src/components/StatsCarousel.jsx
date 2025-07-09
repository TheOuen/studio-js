'use client'

import { useState, useEffect, useMemo } from 'react'
import { Container } from './Container'
import { GSAPStaggerChildren } from './GSAPAnimations'

export function StatsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayNumber, setDisplayNumber] = useState(0)
  
  const stats = useMemo(() => [
    {
      number: 13,
      title: 'Countries I&apos;ve visited with family and friends',
      subtitle: 'My top 3 are Japan, Thailand, and Guatemala.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      backgroundColor: 'from-pink-400 to-pink-600'
    },
    {
      number: 31,
      title: 'Spotify playlists I&apos;ve created. But I mainly listen to the blend my boyfriend and I have.',
      subtitle: 'Music is life and keeps me creative and inspired.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop',
      backgroundColor: 'from-pink-400 to-pink-600'
    },
    {
      number: 10,
      title: 'Creative projects completed this year',
      subtitle: 'From web design to 3D renders, each one unique.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop',
      backgroundColor: 'from-pink-400 to-pink-600'
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [stats.length])

  useEffect(() => {
    // Animate number counting
    const targetNumber = stats[currentIndex].number
    const duration = 1500 // 1.5 seconds
    const steps = 60
    const increment = targetNumber / steps
    let current = 0
    
    // Reset to 0 first
    setDisplayNumber(0)
    
    const timer = setInterval(() => {
      current += increment
      if (current >= targetNumber) {
        setDisplayNumber(targetNumber)
        clearInterval(timer)
      } else {
        setDisplayNumber(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [currentIndex, stats])

  const currentStat = stats[currentIndex]

  return (
    <div className="relative z-20 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 py-32">
      <Container>
        <GSAPStaggerChildren stagger={0.3}>
          <div className="flex flex-col lg:flex-row gap-8 items-center min-h-[60vh]">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/10 transition-all duration-1000">
                <img 
                  key={currentIndex}
                  src={currentStat.image}
                  alt={currentStat.title}
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2 flex flex-col justify-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
              <h3 className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed transition-all duration-500">
                {currentStat.title}
              </h3>
              <p className="text-lg text-white/70 mb-8 leading-relaxed transition-all duration-500">
                {currentStat.subtitle}
              </p>
              <div className="text-[8rem] lg:text-[12rem] font-black text-white/80 leading-none transition-all duration-300">
                {displayNumber}
              </div>
            </div>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </GSAPStaggerChildren>
      </Container>
    </div>
  )
} 