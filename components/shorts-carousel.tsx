"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface VideoShort {
  id: number
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  channelName: string
}

const videoShorts: VideoShort[] = [
  {
    id: 1,
    title: "Bringing the taste of India straight to your table!",
    description: "Order now for a flavor-packed...",
    thumbnail: "/placeholder.svg?height=400&width=300",
    videoUrl: "/videos/taste-of-india",
    channelName: "Tikkanationuk",
  },
  {
    id: 2,
    title: "Beat the heat with our refreshing Falooda!",
    description: "Dive into the ultimate summer treat at Tikka Nation!",
    thumbnail: "/placeholder.svg?height=400&width=300",
    videoUrl: "/videos/falooda-special",
    channelName: "Tikkanationuk",
  },
  {
    id: 3,
    title: "From our kitchen to your table, savor the best of Indian cuisine",
    description: "at Tikka Nation",
    thumbnail: "/placeholder.svg?height=400&width=300",
    videoUrl: "/videos/kitchen-to-table",
    channelName: "Tikkanationuk",
  },
  {
    id: 4,
    title: "Thank you for your support and making our @Tikkanationuk shine!",
    description: "#food #christmas #uk",
    thumbnail: "/placeholder.svg?height=400&width=300",
    videoUrl: "/videos/customer-appreciation",
    channelName: "Tikkanationuk",
  },
  {
    id: 5,
    title: "Authentic Chicken Tikka Masala",
    description: "Made with traditional spices and love",
    thumbnail: "/placeholder.svg?height=400&width=300",
    videoUrl: "/videos/chicken-tikka-masala",
    channelName: "Tikkanationuk",
  },
  {
    id: 6,
    title: "Fresh Naan Bread Making Process",
    description: "Watch our chefs create perfect naan",
    thumbnail: "/placeholder.svg?height=400&width=300",
    videoUrl: "/videos/naan-making",
    channelName: "Tikkanationuk",
  },
]

export default function ShortsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const itemsPerView = 4

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, videoShorts.length - itemsPerView + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, videoShorts.length - itemsPerView) : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, videoShorts.length - itemsPerView + 1))
  }

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Shorts</h2>
        </div>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 z-10 bg-black/70 p-3 rounded-r-md text-white hover:bg-black/90 transform -translate-y-1/2"
            aria-label="Previous videos"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 bg-black/70 p-3 rounded-l-md text-white hover:bg-black/90 transform -translate-y-1/2"
            aria-label="Next videos"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Videos Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {videoShorts.map((video) => (
                <div key={video.id} className="min-w-[25%] px-2" style={{ flex: "0 0 25%" }}>
                  <Link href={video.videoUrl} className="block group">
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[3/4]">
                      {/* Video Thumbnail */}
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors">
                          <Play className="h-8 w-8 text-white fill-current ml-1" />
                        </div>
                      </div>

                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                        <div className="text-white">
                          <h3 className="text-sm font-medium mb-1 line-clamp-2">{video.title}</h3>
                          <p className="text-xs text-gray-300 mb-2 line-clamp-1">{video.description}</p>

                          {/* Channel Info */}
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">{video.channelName}</span>
                            <button className="bg-white text-black px-3 py-1 rounded text-xs font-medium hover:bg-gray-200 transition-colors">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.max(1, videoShorts.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-600"}`}
              aria-label={`Go to video set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
