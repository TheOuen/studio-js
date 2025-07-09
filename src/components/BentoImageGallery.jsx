import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'

export function BentoImageGallery({ images = [] }) {
  // If no images are provided, display placeholder layout
  const placeholderImages = [
    {
      src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1170&auto=format&fit=crop',
      alt: 'African landscape 1',
      className: 'col-span-2 row-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=880&auto=format&fit=crop',
      alt: 'African landscape 2',
      className: 'col-span-1 row-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=774&auto=format&fit=crop',
      alt: 'African landscape 3',
      className: 'col-span-1 row-span-1'
    },
    {
      src: 'https://images.unsplash.com/photo-1473772251553-d195b1bf4aa5?q=80&w=1115&auto=format&fit=crop',
      alt: 'African landscape 4',
      className: 'col-span-1 row-span-2'
    },
    {
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=774&auto=format&fit=crop',
      alt: 'African landscape 5',
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