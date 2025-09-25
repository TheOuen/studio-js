'use client'

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Ship Products 10x Faster - Centered */}
      <div className="text-center px-4">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.85] tracking-tight mb-6">
          Ship Products
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            10x Faster
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 font-light max-w-3xl mx-auto">
          We build world-class web applications that scale your business
        </p>
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