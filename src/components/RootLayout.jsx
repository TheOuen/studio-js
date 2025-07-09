'use client'

import {
  createContext,
  useContext,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { FloatingContact } from '@/components/FloatingContact'

const RootLayoutContext = createContext(null)

function RootLayoutInner({ children }) {
  let shouldReduceMotion = useReducedMotion()
  let pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <motion.div
        layout
        style={{ 
          borderTopLeftRadius: isHome ? 0 : 40, 
          borderTopRightRadius: isHome ? 0 : 40,
          paddingTop: isHome ? 0 : '3.5rem'
        }}
        className="relative flex flex-auto overflow-hidden bg-white"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col"
          style={{ paddingTop: isHome ? 0 : '2.25rem' }}
        >
          {!isHome && (
            <GridPattern
              className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
              yOffset={-96}
              interactive
            />
          )}

          <main className="w-full flex-auto">{children}</main>
        </motion.div>
      </motion.div>
      
      <FloatingContact />
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
