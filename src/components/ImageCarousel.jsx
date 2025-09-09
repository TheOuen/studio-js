'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SafeImg } from '@/components/SafeImage'
import { GSAPFadeUp } from '@/components/GSAPAnimations'

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  const images = [
    'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    'https://images.unsplash.com/photo-1661956602868-6ae368943878?w=800&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
  ]

  // Auto scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Change image every 4 seconds
    }

    startAutoScroll()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length])

  const pauseAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const resumeAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)
  }

  // Get visible images for desktop (3 images) and mobile (1 image)
  const getVisibleImages = () => {
    const visibleImages = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length
      visibleImages.push({ src: images[index], index })
    }
    return visibleImages
  }

  const visibleImages = getVisibleImages()

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <GSAPFadeUp>
          <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Our Creative Journey
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Capturing moments of innovation and beauty across Africa
            </p>
          </div>
        </GSAPFadeUp>

        {/* Desktop Carousel - 3 images visible */}
        <div className="hidden lg:block">
          <motion.div 
            className="flex justify-center gap-8"
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
          >
            <AnimatePresence mode="wait">
              {visibleImages.map((imageData, displayIndex) => (
                <motion.div
                  key={`${imageData.index}-${currentIndex}`}
                  className={`relative overflow-hidden rounded-3xl shadow-2xl ${
                    displayIndex === 1 
                      ? 'w-96 h-[500px] z-20' // Center image larger
                      : 'w-80 h-[400px] z-10' // Side images smaller
                  }`}
                  initial={{ 
                    opacity: 0, 
                    scale: displayIndex === 1 ? 0.9 : 0.8,
                    y: displayIndex === 1 ? 20 : 40
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: displayIndex === 1 ? 1 : 0.95,
                    y: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    y: -20
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.23, 1, 0.320, 1],
                    delay: displayIndex * 0.1
                  }}
                  whileHover={{ 
                    scale: displayIndex === 1 ? 1.05 : 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Blue gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-1">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                      <SafeImg
                        src={imageData.src}
                        alt={`Gallery image ${imageData.index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={displayIndex === 1 ? 'eager' : 'lazy'}
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Parallax background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-3xl"
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile Carousel - 1 image visible */}
        <div className="block lg:hidden">
          <motion.div 
            className="flex justify-center"
            onTouchStart={pauseAutoScroll}
            onTouchEnd={resumeAutoScroll}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-80 h-96 overflow-hidden rounded-3xl shadow-2xl"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.320, 1] }}
              >
                {/* Blue gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                    <SafeImg
                      src={images[currentIndex]}
                      alt={`Gallery image ${currentIndex + 1}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-400 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => {
                setCurrentIndex(index)
                pauseAutoScroll()
                setTimeout(resumeAutoScroll, 5000) // Resume after 5 seconds
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              key={currentIndex}
              transition={{ duration: 4, ease: 'linear' }}
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  )
}