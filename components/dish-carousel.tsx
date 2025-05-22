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
    <div className="relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-400">Popular Dishes</h2>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={movePrev}
          className="absolute left-0 top-1/2 z-10 bg-black/70 p-2 rounded-r-md text-white hover:bg-black/90 transform -translate-y-1/2"
          aria-label="Previous dish"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={moveNext}
          className="absolute right-0 top-1/2 z-10 bg-black/70 p-2 rounded-l-md text-white hover:bg-black/90 transform -translate-y-1/2"
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
                  <div className="bg-black border border-amber-900/30 rounded-lg overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-amber-400">{dish.name}</h3>
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
            className={`h-2 w-2 rounded-full ${index === getCurrentDotIndex() ? "bg-amber-500" : "bg-amber-800"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Order Now Button */}
      <div className="text-center mt-8">
        <Link
          href="/order"
          className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-md transition"
        >
          Order Now
        </Link>
      </div>
    </div>
  )
}
