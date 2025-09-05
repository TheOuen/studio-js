'use client'

import Link from 'next/link'
import React from 'react'

import { Container } from '@/components/Container'
import { SafeImg } from '@/components/SafeImage'
import { ImagePreloader } from '@/components/ImagePreloader'
import { FadeIn } from '@/components/FadeIn'
import { GSAPFadeUp, GSAPStaggerChildren, GSAPScaleOnHover, GSAPTextReveal, GSAPMorphOnScroll, GSAPParallax } from '@/components/GSAPAnimations'
// import { IntroAnimation } from '@/components/IntroAnimation'
import { DraggableFooter } from '@/components/DraggableFooter'
import { AutoScrollCarousel } from '@/components/AutoScrollCarousel'
import { StatsCarousel } from '@/components/StatsCarousel'

import { CleanServices } from '@/components/CleanServices'
import { HeroSection } from '@/components/HeroSection'
import { ImageCarousel } from '@/components/ImageCarousel'
import { TechStack } from '@/components/TechStack'

function Services() {
  return (
    <section id="services" className="relative">
      <CleanServices />
    </section>
  )
}

function ProjectShowcase() {
  const [activeProject, setActiveProject] = React.useState(0);
  
  const projects = [
    {
      title: 'The Ridge',
      subtitle: 'Property brand identity, brochure design, and 3D renders',
      year: '2024',
      category: 'Brand & 3D',
      image: 'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042978/Lank%20Chilled/doug-bagg-rKF4PhSVm18-unsplash_1.jpg',
      tags: ['Branding', '3D Visualization', 'Real Estate']
    },
    {
      title: 'InHouse Studio Website',
      subtitle: 'UI/UX and front-end build for a Cape Town design firm',
      year: '2024',
      category: 'Web Design',
      image: 'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042978/Lank%20Chilled/getty-images-SNXxMLLCXAo-unsplash.jpg',
      tags: ['UI/UX', 'Frontend', 'Responsive']
    },
    {
      title: 'Spekboom.org',
      subtitle: 'Modern website for environmental organization',
      year: '2023',
      category: 'Environmental',
      image: 'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042977/Lank%20Chilled/doug-bagg-gq7zqyp3aH4-unsplash_1.jpg',
      tags: ['Web Design', 'Environmental', 'NGO']
    }
  ];
  
  React.useEffect(() => {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    const handleScroll = () => {
      const cardWidth = container.scrollWidth / projects.length;
      const currentIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveProject(Math.max(0, Math.min(currentIndex, projects.length - 1)));
    };
    
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section id="work" className="relative z-30 bg-neutral-950 py-40">
      <Container>
        <GSAPFadeUp>
          <div className="mb-20 text-center">
            <h2 className="text-6xl sm:text-7xl font-black text-white mb-8 tracking-tight">
              SELECTED WORK
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Recent projects that showcase our approach to design and development
            </p>
          </div>
        </GSAPFadeUp>
        
        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 pointer-events-none justify-between px-4">
            <button 
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 pointer-events-auto group border border-white/20"
              onClick={() => {
                const container = document.getElementById('projects-container');
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6 text-white group-hover:text-[#00CFFF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 pointer-events-auto group border border-white/20"
              onClick={() => {
                const container = document.getElementById('projects-container');
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6 text-white group-hover:text-[#00CFFF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            id="projects-container"
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <GSAPScaleOnHover key={index} scale={1.02}>
                <div className="flex-none w-[85vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] group relative overflow-hidden rounded-3xl snap-center">
                  {/* Background Image */}
                  <div className="aspect-[4/3] lg:aspect-[3/2] overflow-hidden bg-neutral-800">
                    <SafeImg 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xl font-black text-[#00CFFF]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                            {project.category}
                          </span>
                          <span className="text-xs text-white/60">
                            {project.year}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-3 leading-tight group-hover:text-[#00CFFF] transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm lg:text-base text-white/80 font-light leading-relaxed mb-4 line-clamp-3">
                          {project.subtitle}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 rounded-full text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="ml-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                        <div className="w-12 h-12 rounded-full bg-[#00CFFF] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-[#00CFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </GSAPScaleOnHover>
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeProject === index ? 'bg-[#00CFFF]' : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => {
                  const container = document.getElementById('projects-container');
                  const cardWidth = container.scrollWidth / projects.length;
                  container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
                  setActiveProject(index);
                }}
              />
            ))}
          </div>
          
          {/* Scroll Hint */}
          <div className="md:hidden flex justify-center mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4 4 4" />
              </svg>
              <span className="text-sm text-white/60">Swipe to explore</span>
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4-4 4" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* View all projects button */}
        <GSAPFadeUp>
          <div className="text-center mt-20">
            <a 
              href="/work"
              className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all duration-500 backdrop-blur-sm border border-white/20 hover:border-white group"
            >
              <span className="text-lg font-medium">View All Projects</span>
              <div className="w-8 h-8 rounded-full bg-white/30 group-hover:bg-black flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </GSAPFadeUp>
      </Container>
    </section>
  )
}

export default function Home() {
  // Critical images for preloading
  const carouselImages = [
    'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042978/Lank%20Chilled/unsplash-community-X8KACq5r54I-unsplash.jpg',
    'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042977/Lank%20Chilled/getty-images-VaKLnB3lKk4-unsplash_1.jpg',
    'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042976/Lank%20Chilled/getty-images-7vd9lRl6zZs-unsplash.jpg'
  ]

  const projectImages = [
    'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042978/Lank%20Chilled/doug-bagg-rKF4PhSVm18-unsplash_1.jpg',
    'https://res.cloudinary.com/dwufoskyo/image/upload/v1757042978/Lank%20Chilled/getty-images-SNXxMLLCXAo-unsplash.jpg'
  ]

  return (
    <>
      <ImagePreloader imageSources={[...carouselImages.slice(0, 3), ...projectImages.slice(0, 2)]} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Image Carousel */}
      <ImageCarousel />
      
      {/* Tech Stack */}
      <TechStack />
      

      <Services />



      <StatsCarousel />

      <ProjectShowcase />


      <section id="contact">
        <DraggableFooter />
      </section>
    </>
  )
}
