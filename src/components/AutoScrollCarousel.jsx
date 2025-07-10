'use client'

import { useEffect, useRef } from 'react'

export function AutoScrollCarousel({ images = [] }) {
  const carouselRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed
      
      // Reset when we've scrolled past the first set of images
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      carousel.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    carousel.addEventListener('mouseenter', handleMouseEnter)
    carousel.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter)
      carousel.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images]

  return (
    <div className="mb-16 overflow-hidden">
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedImages.map((src, index) => (
          <div 
            key={index} 
            className="flex-none w-80 h-80 p-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-800">
              <img 
                src={src}
                alt={`Beautiful landscape ${(index % images.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 