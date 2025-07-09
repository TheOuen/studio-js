import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'

export function BentoImageGallery({ images = [] }) {
  // If no images are provided, display placeholder layout
  const placeholderImages = [
    {
      src: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1170&auto=format&fit=crop',
      alt: 'Cape Town landscape 1',
      className: 'col-span-2 row-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=880&auto=format&fit=crop',
      alt: 'Cape Town landscape 2',
      className: 'col-span-1 row-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=774&auto=format&fit=crop',
      alt: 'Cape Town landscape 3',
      className: 'col-span-1 row-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1115&auto=format&fit=crop',
      alt: 'Cape Town landscape 4',
      className: 'col-span-1 row-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=774&auto=format&fit=crop',
      alt: 'Cape Town landscape 5',
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