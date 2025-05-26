"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Dish {
  id: number
  name: string
  image: string
  link: string
}

const dishes: Dish[] = [
  { id: 1, name: "Chicken Tikka", image: "/placeholder.svg?height=300&width=400", link: "/menu/chicken-tikka" },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    image: "/placeholder.svg?height=300&width=400",
    link: "/menu/chicken-tikka-masala",
  },
  { id: 3, name: "Chilli Naan", image: "/placeholder.svg?height=300&width=400", link: "/menu/chilli-naan" },
  { id: 4, name: "Dahi Puri", image: "/placeholder.svg?height=300&width=400", link: "/menu/dahi-puri" },
  { id: 5, name: "Papdi Chaat", image: "/placeholder.svg?height=300&width=400", link: "/menu/papdi-chaat" },
  { id: 6, name: "Punjabi Samosa", image: "/placeholder.svg?height=300&width=400", link: "/menu/punjabi-samosa" },
  { id: 7, name: "Seekh Kebab", image: "/placeholder.svg?height=300&width=400", link: "/menu/seekh-kebab" },
  { id: 8, name: "Vada Pao", image: "/placeholder.svg?height=300&width=400", link: "/menu/vada-pao" },
]

export default function DishCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemsPerView = 4 // Number of items visible at once

  // Create a circular array by duplicating dishes
  // We need at least 2 * itemsPerView + dishes.length items to ensure smooth scrolling
  const displayDishes = [...dishes, ...dishes, ...dishes]

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      moveNext()
    }, 2000)

    return () => clearInterval(interval)
  }, [isHovered])

  const moveNext = () => {
    setActiveIndex((prevIndex) => {
      // Calculate the next index
      const nextIndex = prevIndex + 1

      // If we've moved through all dishes, reset to the beginning
      // but do it in a way that's visually imperceptible
      if (nextIndex >= dishes.length * 2) {
        // Schedule a reset to the equivalent position in the first set
        setTimeout(() => {
          setIsAnimating(false) // Disable animation temporarily
          setActiveIndex(nextIndex - dishes.length) // Reset to equivalent position

          // Re-enable animation after the DOM has updated
          setTimeout(() => {
            setIsAnimating(true)
          }, 50)
        }, 500) // Wait for the current animation to complete
      }

      return nextIndex
    })
  }

  const movePrev = () => {
    setActiveIndex((prevIndex) => {
      // Calculate the previous index
      const nextIndex = prevIndex - 1

      // If we've moved before the beginning, reset to the end
      // but do it in a way that's visually imperceptible
      if (nextIndex < 0) {
        // Schedule a reset to the equivalent position in the second set
        setTimeout(() => {
          setIsAnimating(false) // Disable animation temporarily
          setActiveIndex(nextIndex + dishes.length) // Reset to equivalent position

          // Re-enable animation after the DOM has updated
          setTimeout(() => {
            setIsAnimating(true)
          }, 50)
        }, 500) // Wait for the current animation to complete
      }

      return nextIndex
    })
  }

  // Calculate the transform value
  const getTransformValue = () => {
    return `translateX(-${activeIndex * (100 / itemsPerView)}%)`
  }

  // Calculate which item is currently active for the dots indicator
  const getCurrentDotIndex = () => {
    return activeIndex % dishes.length
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Popular Dishes</h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={movePrev}
            className="absolute left-0 top-1/2 z-10 bg-blue-600/90 p-3 rounded-r-md text-white hover:bg-blue-700 transform -translate-y-1/2 shadow-lg"
            aria-label="Previous dish"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={moveNext}
            className="absolute right-0 top-1/2 z-10 bg-blue-600/90 p-3 rounded-l-md text-white hover:bg-blue-700 transform -translate-y-1/2 shadow-lg"
            aria-label="Next dish"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className={`flex ${isAnimating ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: getTransformValue() }}
            >
              {displayDishes.map((dish, index) => (
                <div
                  key={`${dish.id}-${index}`}
                  className="min-w-[25%] px-2"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <Link href={dish.link} className="block group">
                    <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden hover:border-blue-400 transition-all shadow-lg hover:shadow-xl">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={dish.image || "/placeholder.svg"}
                          alt={dish.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-bold text-white">{dish.name}</h3>
                        </div>
                      </div>
                      <div className="p-4 text-center bg-blue-50">
                        <h3 className="text-lg font-semibold text-blue-900">{dish.name}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {dishes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true)
                setActiveIndex(index)
              }}
              className={`h-2 w-2 rounded-full ${index === getCurrentDotIndex() ? "bg-red-600" : "bg-blue-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Order Now Button */}
        <div className="text-center mt-8">
          <Link
            href="/order"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  )
}
