'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BlurImage from '../mis/blur-image'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/image1.jpg',
    title: 'Customer Centric',
    description: 'We put our customers at the heart of every decision, ensuring their needs shape our solutions.'
  },
  {
    image: '/image2.jpg',
    title: 'Excellent Delivery',
    description: 'We deliver with precision, speed, and a commitment to exceeding expectations every time.'
  },
  {
    image: '/image3.jpg',
    title: 'Reliability',
    description: 'Count on us for consistent, dependable service that builds lasting trust.'
  }
]


const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 100 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  return (
    <div className="relative h-[600px] overflow-hidden md:h-[600px]">
      {/* Carousel */}
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <BlurImage
                src={slide.image || '/placeholder.svg'}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient overlay instead of semi-transparent black */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Updated with pill shape and better positioning */}
      <div className="absolute top-1/2 right-6 left-6 flex -translate-y-1/2 items-center justify-between">
        <button
          onClick={scrollPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Content Box - Redesigned with a floating card look */}
      <div className="absolute right-0 bottom-8 left-0 px-4">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white/90 shadow-lg backdrop-blur-sm">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                  {slides[selectedIndex].title}
                </h2>
                <p className="max-w-xl text-base text-gray-600 md:text-lg">
                  {slides[selectedIndex].description}
                </p>
              </div>
              <div className="hidden md:block">
                
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between md:mt-0">
              {/* Indicators - Redesigned as a progress bar */}
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      'h-1 rounded-full transition-all duration-300',
                      index === selectedIndex
                        ? 'w-8 bg-[#003B5C]'
                        : 'w-4 bg-gray-300 hover:bg-gray-400'
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="md:hidden">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
