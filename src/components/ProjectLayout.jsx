'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { FadeIn } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ProjectLayout({ children }) {
  const pathname = usePathname()
  const isIndex = pathname === '/work'

  return (
    <div className="relative">
      <div className="bg-neutral-50 pt-16 sm:pt-20 lg:pt-24">
        <Container className="relative">
          <div className="mx-auto max-w-8xl">
            <Border position="left">
              <div className="relative sm:pt-6 lg:pt-8">
                <Link
                  href="/work"
                  aria-label="Go back to case studies"
                  className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
                >
                  <ArrowIcon className="h-4 w-4 stroke-neutral-500 transition group-hover:stroke-neutral-950" />
                </Link>
                <FadeIn>
                  <article className="max-w-5xl">
                    <header className="relative mb-10 xl:mb-16">
                      <div className="flex flex-col gap-6">
                        <Button href="/contact" className="w-fit">
                          Contact us about your project
                        </Button>
                      </div>
                    </header>
                    <Prose>{children}</Prose>
                  </article>
                </FadeIn>
              </div>
            </Border>
          </div>
        </Container>
      </div>
    </div>
  )
} 