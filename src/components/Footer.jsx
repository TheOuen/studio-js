import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Spekboom.org', href: '/work/spekboom' },
      { title: 'Sloetree.co.uk', href: '/work/sloetree' },
      { title: 'The Ridge Hout Bay', href: '/work/the-ridge' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { title: 'Web Development', href: '/services/web-development' },
      { title: 'Application Development', href: '/services/app-development' },
      { title: 'UX/UI Design', href: '/services/ux-ui-design' },
      { title: 'Architectural Renders', href: '/services/architectural-renders' },
      { title: 'Drone Photography', href: '/services/drone-photography' },
      { title: 'Financial Modeling', href: '/services/financial-modeling' },
    ]
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-white">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-300">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-white">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-300">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-600 bg-neutral-800/50 py-4 pr-20 pl-6 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-white focus:ring-white/10 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-white text-neutral-950 transition hover:bg-neutral-200"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <div className="bg-neutral-950 text-white">
      <Container as="footer" className="pt-20 pb-12 sm:pt-32">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <Navigation />
            <div className="flex lg:justify-end">
              <NewsletterForm />
            </div>
          </div>
          <div className="mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-700/60 pt-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-8" fillOnHover invert />
            </Link>
            <p className="text-sm text-neutral-400">
              © Spekboom Studio {new Date().getFullYear()} • Cape Town, South Africa
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
