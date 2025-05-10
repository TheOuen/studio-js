import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { VideoHero } from '@/components/VideoHero'
import { FilterableProjects } from '@/components/FilterableProjects'
import { FinancialModelingSection } from '@/components/FinancialModelingSection'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="rounded-4xl bg-neutral-950 py-20 sm:py-32">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We've worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function ProjectsSection() {
  return (
    <>
      <SectionIntro
        title="Shaping digital experiences through innovation — web, apps, design, and beyond."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We combine creative thinking and technical expertise to deliver solutions that not only meet your needs but exceed your expectations.
        </p>
      </SectionIntro>
      <FilterableProjects />
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We transform complex ideas into intuitive digital experiences, helping businesses navigate the ever-evolving technological landscape.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Development">
              We craft responsive, modern websites that deliver exceptional user experiences and drive business growth.
            </ListItem>
            <ListItem title="Application Development">
              We build custom applications that solve complex business challenges with intuitive interfaces and robust architecture.
            </ListItem>
            <ListItem title="E-commerce Development">
              We create seamless online shopping experiences that convert visitors into customers and maximize revenue.
            </ListItem>
            <ListItem title="Custom Content Management">
              We implement flexible content management solutions that give you complete control over your digital presence.
            </ListItem>
            <ListItem title="UX/UI Design">
              We design user-centered interfaces that balance aesthetics with functionality to create meaningful digital experiences.
            </ListItem>
            <ListItem title="Architectural Renders">
              We transform architectural plans into photorealistic visualizations that bring your projects to life.
            </ListItem>
            <ListItem title="Real Estate Solutions">
              We develop custom digital solutions for property marketing, management, and sales.
            </ListItem>
            <ListItem title="Drone Photography & Photography">
              We capture stunning aerial and ground-level imagery to showcase your projects from every angle.
            </ListItem>
            <ListItem title="Financial Modeling and Simulation">
              We build custom financial models with intuitive interfaces, integrating live data sources for real-time decision-making.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <VideoHero videoSrc="/videos/3326930-hd_1920_1080_24fps.mp4">
        <FadeIn className="max-w-3xl pt-20">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-white sm:text-7xl">
            X Studio based in Cape Town, South Africa.
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Shaping digital experiences through innovation — web, apps, design, and beyond.
          </p>
        </FadeIn>
      </VideoHero>

      <div className="mt-24 sm:mt-32">
        <Clients />
      </div>

      <ProjectsSection />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user's microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <FinancialModelingSection />

      <ContactSection />
    </>
  )
}
