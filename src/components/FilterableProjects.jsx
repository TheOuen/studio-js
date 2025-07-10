'use client'

import { useState, useRef } from 'react'
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
    image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1472&auto=format&fit=crop',
    href: '/work/spekboom',
  },
  {
    id: 'sloetree',
    title: 'Sloetree.co.uk',
    description: 'E-commerce site for artisanal products',
    year: '2023',
    categories: ['web'],
    image: 'https://images.unsplash.com/photo-1582550945154-019d3d1b5a84?q=80&w=1472&auto=format&fit=crop',
    href: '/work/sloetree',
  },
  {
    id: 'ridge',
    title: 'The Ridge Hout Bay',
    description: 'Real estate development website',
    year: '2023',
    categories: ['web'],
    image: 'https://images.unsplash.com/photo-1473772251553-d195b1bf4aa5?q=80&w=1471&auto=format&fit=crop',
    href: '/work/the-ridge',
  },
  {
    id: 'wave',
    title: 'WAVE',
    description: 'Mobile application for ocean conservation',
    year: '2022',
    categories: ['app'],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1374&auto=format&fit=crop',
    href: '/work/wave',
  },
  {
    id: 'spekboom-drone',
    title: 'Spekboom Aerials',
    description: 'Aerial photography for conservation projects',
    year: '2023',
    categories: ['drone'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1470&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1374&auto=format&fit=crop',
    href: '/work/ridge-drone',
  },
  {
    id: 'ux-1',
    title: 'Financial Dashboard',
    description: 'UX design for investment platform',
    year: '2023',
    categories: ['ux'],
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1470&auto=format&fit=crop',
    href: '/work/financial-dashboard',
  },
  {
    id: 'ux-2',
    title: 'Smart Home App',
    description: 'Interface design for IoT application',
    year: '2023',
    categories: ['ux'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1508&auto=format&fit=crop',
    href: '/work/smart-home',
  },
  {
    id: 'ux-3',
    title: 'Travel Companion',
    description: 'Mobile UX for travel planning app',
    year: '2022',
    categories: ['ux'],
    image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1470&auto=format&fit=crop',
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
    <div className="flex-none w-[300px] md:w-[350px] mr-6 transition-transform duration-300 hover:scale-[1.02]">
      <Link 
        href={project.href} 
        className="group block h-full shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden rounded-2xl bg-neutral-100"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-medium text-white/80">{project.year}</p>
              <h3 className="text-xl font-medium -mt-1">{project.title}</h3>
              <p className="mt-2 text-sm text-white/80">{project.description}</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-neutral-600">{project.year}</p>
          <h3 className="mt-1 font-medium text-xl text-neutral-950 line-clamp-1">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{project.description}</p>
        </div>
      </Link>
    </div>
  )
}

export function FilterableProjects() {
  const scrollContainerRef = useRef(null);

  const scrollbarHideStyle = { 
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none', 
    WebkitOverflowScrolling: 'touch',
  };
  
  // Add CSS rule for WebKit browsers
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
  }

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
            <div 
              className="overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar" 
              ref={scrollContainerRef}
              style={scrollbarHideStyle}
            >
              <div className="flex pb-4">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </Tab.Panel>
          
          {CATEGORIES.slice(1).map((category) => (
            <Tab.Panel key={category.id}>
              <div 
                className="overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar"
                style={scrollbarHideStyle}
              >
                <div className="flex pb-4">
                  {PROJECTS.filter(project => 
                    project.categories.includes(category.id)
                  ).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Container>
  )
} 