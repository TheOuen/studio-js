import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <div className="bg-black py-32">
      <Container>
        <FadeIn className="text-center">
          <div className="mb-8">
            <span className="text-sm font-medium text-white/40 tracking-widest uppercase">
              Cape Town, South Africa
            </span>
            <span className="ml-8 text-sm font-medium text-[#00CFFF]">
              {new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            LET'S BUILD SOMETHING
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            If you're looking for a designer–developer duo that can turn vision into execution, let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:mike@lankchilled.com"
              className="px-8 py-4 border border-white/20 text-white hover:border-[#00CFFF] hover:text-[#00CFFF] transition-all duration-300 text-lg font-medium tracking-wide"
            >
              mike@lankchilled.com
            </a>
            
            <a 
              href="/contact"
              className="px-8 py-4 bg-[#00CFFF] text-black hover:bg-white transition-all duration-300 text-lg font-medium tracking-wide"
            >
              Send Message
            </a>
          </div>
          
          <div className="text-center border-t border-white/10 pt-8">
            <p className="text-sm text-white/40 mb-4">©2025 Lank Chilled</p>
            <div className="flex justify-center items-center gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-[#00CFFF] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#00CFFF] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#00CFFF] transition-colors">Dribbble</a>
              <a href="#" className="hover:text-[#00CFFF] transition-colors">Behance</a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
