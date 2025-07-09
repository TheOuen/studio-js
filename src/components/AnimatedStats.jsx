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
      innerHTML: "20",
      duration: 2,
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
    <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="text-center">
        <div className="text-4xl font-black text-[#00CFFF] mb-4">
          <span ref={experienceRef}>5</span>+
        </div>
        <p className="text-white/60">Years Experience</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-black text-[#00CFFF] mb-4">
          <span ref={projectsRef}>20</span>+
        </div>
        <p className="text-white/60">Projects Completed</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-black text-[#00CFFF] mb-4">
          <span ref={satisfactionRef}>100</span>%
        </div>
        <p className="text-white/60">Client Satisfaction</p>
      </div>
    </div>
  )
} 