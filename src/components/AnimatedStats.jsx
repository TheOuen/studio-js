'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function AnimatedStats() {
  const statsRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const satisfactionRef = useRef(null)

  useEffect(() => {
    const stats = statsRef.current
    const experienceEl = experienceRef.current
    const projectsEl = projectsRef.current
    const satisfactionEl = satisfactionRef.current

    if (!stats || !experienceEl || !projectsEl || !satisfactionEl) return

    // Set initial values to 0
    gsap.set([experienceEl, projectsEl, satisfactionEl], { innerHTML: "0" })

    // Create scroll-triggered animation
    gsap.timeline({
      scrollTrigger: {
        trigger: stats,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
    .to(experienceEl, {
      innerHTML: "5",
      duration: 2,
      ease: "power2.out",
      snap: { innerHTML: 1 }
    })
    .to(projectsEl, {
      innerHTML: "50",
      duration: 2.5,
      ease: "power2.out",
      snap: { innerHTML: 1 }
    }, "-=1.5")
    .to(satisfactionEl, {
      innerHTML: "100",
      duration: 2.5,
      ease: "power2.out",
      snap: { innerHTML: 1 }
    }, "-=1.5")

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    <div ref={statsRef} className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <h3 className="text-white font-bold text-xl mb-2">Our Track Record</h3>
        <p className="text-white/60 text-sm">Building trust through consistent delivery</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center group">
          <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl p-6 border border-emerald-400/30 mb-4 transition-all duration-300 group-hover:scale-105">
            <div className="text-5xl font-black text-emerald-400 mb-2">
              <span ref={experienceRef}>5</span>+
            </div>
            <p className="text-white/70 font-medium">Years Experience</p>
          </div>
        </div>
        
        <div className="text-center group">
          <div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-2xl p-6 border border-cyan-400/30 mb-4 transition-all duration-300 group-hover:scale-105">
            <div className="text-5xl font-black text-cyan-400 mb-2">
              <span ref={projectsRef}>50</span>+
            </div>
            <p className="text-white/70 font-medium">Africa Projects</p>
          </div>
        </div>
        
        <div className="text-center group">
          <div className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl p-6 border border-blue-400/30 mb-4 transition-all duration-300 group-hover:scale-105">
            <div className="text-5xl font-black text-blue-400 mb-2">
              <span ref={satisfactionRef}>100</span>%
            </div>
            <p className="text-white/70 font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-white/80 text-sm font-medium">Ready for your project</span>
        </div>
      </div>
    </div>
  )
} 