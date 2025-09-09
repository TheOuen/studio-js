'use client'

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Large centered logo text */}
      <div className="text-center">
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] font-black text-white leading-none tracking-tighter">
          LANK CHILLED
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}