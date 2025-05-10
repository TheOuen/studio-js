'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Tab } from '@headlessui/react'

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'app', label: 'App Development' },
  { id: 'ux', label: 'UX Design' },
  { id: 'renders', label: 'Architectural' },
  { id: 'drone', label: 'Drone Photography' },
  { id: 'financial', label: 'Financial Modeling' },
]

const PROJECTS = [
  {
    id: 'spekboom',
    title: 'Spekboom.org',
    description: 'Modern website for environmental organization',
    year: '2023',
    categories: ['web'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1472&auto=format&fit=crop',
    href: '/work/spekboom',
  },
  {
    id: 'sloetree',
    title: 'Sloetree.co.uk',
    description: 'E-commerce site for artisanal products',
    year: '2023',
    categories: ['web'],
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1472&auto=format&fit=crop',
    href: '/work/sloetree',
  },
  {
    id: 'ridge',
    title: 'The Ridge Hout Bay',
    description: 'Real estate development website',
    year: '2023',
    categories: ['web'],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1471&auto=format&fit=crop',
    href: '/work/the-ridge',
  },
  {
    id: 'wave',
    title: 'WAVE',
    description: 'Mobile application for ocean conservation',
    year: '2022',
    categories: ['app'],
    image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1374&auto=format&fit=crop',
    href: '/work/wave',
  },
  {
    id: 'spekboom-drone',
    title: 'Spekboom Aerials',
    description: 'Aerial photography for conservation projects',
    year: '2023',
    categories: ['drone'],
    image: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1470&auto=format&fit=crop',
    href: '/work/spekboom-drone',
  },
  {
    id: 'sloetree-drone',
    title: 'Sloetree Estate Aerials',
    description: 'Drone footage of estate properties',
    year: '2023',
    categories: ['drone'],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1472&auto=format&fit=crop',
    href: '/work/sloetree-drone',
  },
  {
    id: 'ridge-drone',
    title: 'The Ridge Aerial Tour',
    description: 'Aerial videography of luxury development',
    year: '2023',
    categories: ['drone'],
    image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1374&auto=format&fit=crop',
    href: '/work/ridge-drone',
  },
  {
    id: 'ux-1',
    title: 'Financial Dashboard',
    description: 'UX design for investment platform',
    year: '2023',
    categories: ['ux'],
    image: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop',
    href: '/work/financial-dashboard',
  },
  {
    id: 'ux-2',
    title: 'Smart Home App',
    description: 'Interface design for IoT application',
    year: '2023',
    categories: ['ux'],
    image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1508&auto=format&fit=crop',
    href: '/work/smart-home',
  },
  {
    id: 'ux-3',
    title: 'Travel Companion',
    description: 'Mobile UX for travel planning app',
    year: '2022',
    categories: ['ux'],
    image: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?q=80&w=1470&auto=format&fit=crop',
    href: '/work/travel-companion',
  },
  {
    id: 'render-1',
    title: 'Luxury Villa Concept',
    description: 'Photorealistic architectural renders',
    year: '2023',
    categories: ['renders'],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1467&auto=format&fit=crop',
    href: '/work/luxury-villa',
  },
  {
    id: 'render-2',
    title: 'Urban Apartment Complex',
    description: 'Modern residential development visualization',
    year: '2023',
    categories: ['renders'],
    image: 'https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?q=80&w=1470&auto=format&fit=crop',
    href: '/work/urban-apartments',
  },
  {
    id: 'render-3',
    title: 'Eco Resort',
    description: 'Sustainable tourism project visualization',
    year: '2022',
    categories: ['renders'],
    image: 'https://images.unsplash.com/photo-1534398079543-7ae239b747a7?q=80&w=1470&auto=format&fit=crop',
    href: '/work/eco-resort',
  },
  {
    id: 'finance-1',
    title: 'Real Estate Investment Calculator',
    description: 'Financial modeling tool for property investors',
    year: '2023',
    categories: ['financial'],
    image: 'https://images.unsplash.com/photo-1566221654954-f166e7f61254?q=80&w=1373&auto=format&fit=crop',
    href: '/work/real-estate-calculator',
  },
  {
    id: 'finance-2',
    title: 'Renewable Energy ROI Simulator',
    description: 'Financial modeling for green energy projects',
    year: '2023',
    categories: ['financial'],
    image: 'https://images.unsplash.com/photo-1589536672709-a5d9aba1a6a8?q=80&w=1470&auto=format&fit=crop',
    href: '/work/renewable-roi',
  },
  {
    id: 'finance-3',
    title: 'Hospitality Forecasting Tool',
    description: 'Revenue projection system for hotels',
    year: '2022',
    categories: ['financial'],
    image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?q=80&w=1470&auto=format&fit=crop',
    href: '/work/hospitality-forecasting',
  },
]

function ProjectCard({ project }) {
  return (
    <FadeIn>
      <Link 
        href={project.href} 
        className="group relative block overflow-hidden rounded-2xl bg-neutral-100"
      >
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 transition duration-300 group-hover:opacity-100">
          <p className="text-sm font-medium text-white/80">{project.year}</p>
          <h3 className="text-xl font-medium -mt-1">{project.title}</h3>
          <p className="mt-2 text-sm text-white/80">{project.description}</p>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-neutral-600">{project.year}</p>
          <h3 className="mt-1 font-medium text-xl text-neutral-950">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600">{project.description}</p>
        </div>
      </Link>
    </FadeIn>
  )
}

export function FilterableProjects() {
  return (
    <Container className="mt-16">
      <Tab.Group>
        <div className="mb-12 border-b border-neutral-200">
          <Tab.List className="flex flex-wrap -mb-px gap-2">
            {CATEGORIES.map((category) => (
              <Tab 
                key={category.id}
                className={({ selected }) => 
                  `py-3 px-5 text-sm font-medium border-b-2 outline-none transition-colors ${
                    selected 
                      ? 'text-neutral-950 border-neutral-950' 
                      : 'text-neutral-600 border-transparent hover:text-neutral-950 hover:border-neutral-300'
                  }`
                }
              >
                {category.label}
              </Tab>
            ))}
          </Tab.List>
        </div>
        
        <Tab.Panels>
          <Tab.Panel>
            <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </FadeInStagger>
          </Tab.Panel>
          
          {CATEGORIES.slice(1).map((category) => (
            <Tab.Panel key={category.id}>
              <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.filter(project => 
                  project.categories.includes(category.id)
                ).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </FadeInStagger>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Container>
  )
} 