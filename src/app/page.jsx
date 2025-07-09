import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GSAPFadeUp, GSAPStaggerChildren, GSAPScaleOnHover, GSAPTextReveal, GSAPMorphOnScroll, GSAPParallax } from '@/components/GSAPAnimations'
import { IntroAnimation } from '@/components/IntroAnimation'
import { DraggableFooter } from '@/components/DraggableFooter'
import { AutoScrollCarousel } from '@/components/AutoScrollCarousel'
import { StatsCarousel } from '@/components/StatsCarousel'
import { AnimatedStats } from '@/components/AnimatedStats'
import { CleanServices } from '@/components/CleanServices'

function Services() {
  return <CleanServices />
}

function ProjectShowcase() {
  const projects = [
    {
      title: 'The Ridge',
      subtitle: 'Property brand identity, brochure design, and 3D renders',
      year: '2024',
      category: 'Brand & 3D',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop',
      tags: ['Branding', '3D Visualization', 'Real Estate']
    },
    {
      title: 'InHouse Studio Website',
      subtitle: 'UI/UX and front-end build for a Cape Town design firm',
      year: '2024',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
      tags: ['UI/UX', 'Frontend', 'Responsive']
    },
    {
      title: 'Spekboom.org',
      subtitle: 'Modern website for environmental organization',
      year: '2023',
      category: 'Environmental',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
      tags: ['Web Design', 'Environmental', 'NGO']
    }
  ];

  return (
    <div className="relative z-30 bg-neutral-950 py-40">
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
        
        <GSAPStaggerChildren stagger={0.3}>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <GSAPScaleOnHover key={index} scale={1.01}>
                <div className="group relative overflow-hidden rounded-3xl">
                  {/* Background Image */}
                  <div className="aspect-[16/10] lg:aspect-[21/9] overflow-hidden bg-neutral-800">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-black text-[#00CFFF]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                            {project.category}
                          </span>
                          <span className="text-sm text-white/60">
                            {project.year}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight group-hover:text-[#00CFFF] transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mb-6">
                          {project.subtitle}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1 rounded-full text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="ml-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                        <div className="w-16 h-16 rounded-full bg-[#00CFFF] flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </GSAPStaggerChildren>
        
        {/* View all projects button */}
        <GSAPFadeUp>
          <div className="text-center mt-20">
            <a 
              href="/work"
              className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 hover:bg-[#00CFFF] text-white hover:text-black rounded-full transition-all duration-500 backdrop-blur-sm border border-white/20 hover:border-[#00CFFF] group"
            >
              <span className="text-lg font-medium">View All Projects</span>
              <div className="w-8 h-8 rounded-full bg-[#00CFFF] group-hover:bg-black flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </GSAPFadeUp>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Lank Chilled - Design & Development Studio Cape Town',
  description:
    'Compact creative studio based in Cape Town. We design and build digital products, branded content, and architectural visuals for clients who care about craft.',
}

export default async function Home() {
  return (
    <IntroAnimation>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <Container>
          <FadeIn className="pt-20 pb-16">
            {/* Taglines */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-20 px-4">
              <div className="mb-8 lg:mb-0">
                <p className="text-lg sm:text-xl text-white/80 font-light tracking-wide">
                  Design & Development for Web, Mobile & Real-World Spaces
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl text-white/60 font-light tracking-wide italic">
                  Scaling brands reach and impact
                </p>
              </div>
            </div>
            
            {/* Auto-scrolling African Landscapes Gallery */}
            <AutoScrollCarousel 
              images={[
                'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1473772251553-d195b1bf4aa5?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=800&auto=format&fit=crop'
              ]}
            />

            {/* Studio Statement - Redesigned */}
            <div className="mt-32 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left Side - Main Content */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="inline-block">
                        <span className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-sm font-bold rounded-full tracking-wider uppercase">
                          Cape Town Studio
                        </span>
                      </div>
                      
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight">
                        Building
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          Africa&apos;s
                        </span>
                        <br />
                        Digital Future
                      </h2>
                      
                      <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                    </div>

                    <div className="space-y-6 text-white/80 leading-relaxed max-w-lg">
                      <p className="text-xl font-light">
                        From <strong className="text-emerald-400 font-medium">Cape Town</strong> to the continent, 
                        we&apos;re crafting web experiences that connect African businesses to global opportunities.
                      </p>
                      <p className="text-lg">
                        Specializing in <strong className="text-cyan-400 font-medium">React</strong>, 
                        <strong className="text-cyan-400 font-medium"> Next.js</strong>, and 
                        <strong className="text-cyan-400 font-medium"> modern web technologies</strong> that scale.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {['Web Development', 'UI/UX Design', 'React & Next.js', 'African Market Focus'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full border border-white/20 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Visual Stats Card */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                      <div className="space-y-8">
                        <div className="text-center border-b border-white/20 pb-6">
                          <h3 className="text-white font-bold text-lg mb-2">Studio Impact</h3>
                          <p className="text-white/60 text-sm">Delivering results across Africa</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="text-4xl font-black text-emerald-400 mb-2">15</div>
                            <div className="text-white/70 text-sm leading-tight">African Countries</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-black text-cyan-400 mb-2">50+</div>
                            <div className="text-white/70 text-sm leading-tight">Web Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-black text-blue-400 mb-2">100%</div>
                            <div className="text-white/70 text-sm leading-tight">React Based</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-black text-purple-400 mb-2">24/7</div>
                            <div className="text-white/70 text-sm leading-tight">Support</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl p-4 border border-emerald-400/30">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-medium">Currently available for new projects</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                {/* Bottom Stats Bar */}
                <div className="mt-16">
                  <AnimatedStats />
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      <Services />

      <StatsCarousel />

      <ProjectShowcase />

      <DraggableFooter />
    </IntroAnimation>
  )
}
