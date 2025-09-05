'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { GSAPFadeUp } from '@/components/GSAPAnimations'

export function ClientLogos() {
  // Premium brand logos and client names
  const clients = [
    { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com', url: 'https://stripe.com' },
    { name: 'Linear', logo: 'https://logo.clearbit.com/linear.app', url: 'https://linear.app' },
    { name: 'Vercel', logo: 'https://logo.clearbit.com/vercel.com', url: 'https://vercel.com' },
    { name: 'Shopify', logo: 'https://logo.clearbit.com/shopify.com', url: 'https://shopify.com' },
    { name: 'Notion', logo: 'https://logo.clearbit.com/notion.so', url: 'https://notion.so' },
    { name: 'Figma', logo: 'https://logo.clearbit.com/figma.com', url: 'https://figma.com' },
    { name: 'Framer', logo: 'https://logo.clearbit.com/framer.com', url: 'https://framer.com' },
    { name: 'Supabase', logo: 'https://logo.clearbit.com/supabase.com', url: 'https://supabase.com' },
    { name: 'Tailwind', logo: 'https://logo.clearbit.com/tailwindcss.com', url: 'https://tailwindcss.com' },
    { name: 'Next.js', logo: 'https://logo.clearbit.com/nextjs.org', url: 'https://nextjs.org' },
    { name: 'OpenAI', logo: 'https://logo.clearbit.com/openai.com', url: 'https://openai.com' },
    { name: 'GitHub', logo: 'https://logo.clearbit.com/github.com', url: 'https://github.com' }
  ]

  // Duplicate for seamless loop
  const extendedClients = [...clients, ...clients, ...clients]

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <Container className="relative z-10">

        {/* Logo marquee */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Main marquee */}
          <motion.div 
            className="flex gap-12 items-center"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {extendedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:bg-white/10">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter brightness-0 invert opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary marquee for reverse direction */}
          <motion.div 
            className="flex gap-12 items-center mt-8"
            animate={{ x: [-2000, 0] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {extendedClients.reverse().map((client, index) => (
              <motion.div
                key={`reverse-${client.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white/3 rounded-xl backdrop-blur-sm border border-white/5 group-hover:border-white/20 transition-all duration-300 group-hover:bg-white/8">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter brightness-0 invert opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <GSAPFadeUp>
          <motion.div 
            className="mt-20 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div 
                  className="text-3xl sm:text-4xl font-black text-cyan-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  50+
                </motion.div>
                <div className="text-white/70 text-sm font-medium">
                  Brands Scaled
                </div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-3xl sm:text-4xl font-black text-cyan-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 200 }}
                >
                  15
                </motion.div>
                <div className="text-white/70 text-sm font-medium">
                  Countries Served
                </div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-3xl sm:text-4xl font-black text-cyan-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  98%
                </motion.div>
                <div className="text-white/70 text-sm font-medium">
                  Client Retention
                </div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-3xl sm:text-4xl font-black text-cyan-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  24/7
                </motion.div>
                <div className="text-white/70 text-sm font-medium">
                  Support Available
                </div>
              </div>
            </div>
          </motion.div>
        </GSAPFadeUp>

        {/* Call to action */}
        <GSAPFadeUp>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-white/60 text-lg mb-8">
              Ready to join Africa's most successful brands?
            </p>
            
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <span>Let's Build Together</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </GSAPFadeUp>
      </Container>
    </section>
  )
}