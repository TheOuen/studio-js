'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/Container'

const services = [
  {
    number: '01',
    title: 'Web Design',
    description: 'User-friendly, scalable interfaces for websites and mobile apps. Built in Figma, designed to perform.',
    tags: ['Interface Design', 'User Experience', 'Mobile First', 'Responsive Design', 'Figma', 'Prototyping'],
    background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Front-End Development',
    description: 'Clean, modular front-end code with seamless animations and responsive behaviour. React-first.',
    tags: ['React Development', 'GSAP Animations', 'TypeScript', 'Next.js', 'Performance', 'Modern Web'],
    background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop'
  },
  {
    number: '03',
    title: '3D Rendering',
    description: 'Striking photo-real renders for architecture, interiors, and real estate marketing.',
    tags: ['3D Modeling', 'Photorealistic Renders', 'Architectural Viz', 'Interior Design', 'Real Estate', 'Lighting'],
    background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop'
  },
  {
    number: '04',
    title: 'Brand Design',
    description: 'Visual storytelling through brand design, layout systems, and hand-crafted illustration.',
    tags: ['Brand Identity', 'Layout Design', 'Typography', 'Color Theory', 'Illustration', 'Print Design'],
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop'
  }
];

function ServiceCard({ service, index, isVisible }) {
  return (
    <div 
      className={`service-card opacity-0 translate-y-16 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : ''
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        background: service.background 
      }}
    >
      <div className="relative rounded-3xl p-8 lg:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-500 mx-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 lg:pr-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 group-hover:scale-105 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              <span className="text-6xl lg:text-7xl font-black text-white/15 group-hover:text-white/30 transition-colors duration-500">
                ({service.number})
              </span>
            </div>
            
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {service.tags.map((tag, tagIndex) => (
                <span 
                  key={tag}
                  className="tag-item px-4 py-2 rounded-full text-sm font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                  style={{ 
                    animationDelay: `${(index * 150) + (tagIndex * 100)}ms` 
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0 lg:w-1/3">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  )
}

export function CleanServices() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setHeaderVisible(true)
            } else {
              const index = cardsRef.current.indexOf(entry.target)
              if (index !== -1) {
                setVisibleCards(prev => new Set([...prev, index]))
              }
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    // Observe service cards
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative z-20 bg-black py-40">
      <Container>
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-20 px-4 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            SERVICES
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Comprehensive creative solutions from concept to completion
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.number}
              ref={el => cardsRef.current[index] = el}
            >
              <ServiceCard 
                service={service} 
                index={index} 
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .service-card .tag-item {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
} 