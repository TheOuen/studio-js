import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'

export function BentoImageGallery({ images = [] }) {
  // If no images are provided, display placeholder layout
  const placeholderImages = [
    {
      src: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1170&auto=format&fit=crop',
      alt: 'Project screenshot 1',
      className: 'col-span-2 row-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=880&auto=format&fit=crop',
      alt: 'Project screenshot 2',
      className: 'col-span-1 row-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=774&auto=format&fit=crop',
      alt: 'Project screenshot 3',
      className: 'col-span-1 row-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop',
      alt: 'Project screenshot 4',
      className: 'col-span-1 row-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1551651653-c5186a1fbba2?q=80&w=774&auto=format&fit=crop',
      alt: 'Project screenshot 5',
      className: 'col-span-2 row-span-1'
    }
  ]

  const displayImages = images.length > 0 ? images : placeholderImages

  return (
    <FadeIn>
      <div className="mt-10 mb-16">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-3 md:gap-6">
          {displayImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-2xl ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt || `Project screenshot ${index + 1}`}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
} 