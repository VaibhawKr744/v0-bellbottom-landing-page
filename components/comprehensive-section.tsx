"use client"

import Image from "next/image"
import Link from "next/link"
import { Smartphone, CheckCircle } from "lucide-react"

export default function ComprehensiveSection() {
  return (
    <section
      className="py-16 bg-white relative"
      style={{
        backgroundImage: "url('/images/tikka-background.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="relative z-10">
        {/* Social Media Section */}
        <div className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Explore Social Media at Bell Bottom</h2>

          <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
            {/* Facebook Widget */}
            <div className="bg-white rounded-lg p-6 shadow-xl border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900">Bell Bottom</h3>
                  <p className="text-sm text-blue-600">3,150 followers</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center hover:bg-blue-700 transition">
                  <span className="mr-2">👍</span> Follow Page
                </button>
                <button className="border border-blue-300 text-blue-700 px-4 py-2 rounded text-sm hover:bg-blue-50 transition">
                  Share
                </button>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Harrow location announcement"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">GET READY, HARROW!</h4>
                    <p className="text-sm">YOUR NEW FLAVOUR HOTSPOT IS NOW OPEN!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Logo */}
            <div className="flex justify-center items-center">
              <div className="bg-red-600 rounded-full p-8 border-4 border-blue-500 shadow-xl">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white">BELL</h3>
                  <h3 className="text-xl font-bold text-blue-100">BOTTOM</h3>
                </div>
              </div>
            </div>

            {/* Instagram Widget */}
            <div className="bg-white rounded-lg p-6 shadow-xl border-2 border-red-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900">bellbottomeatery</h3>
                    <p className="text-sm text-red-600">Bell Bottom Eatery</p>
                  </div>
                </div>
                <div className="text-red-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>

              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-red-900">3,250</p>
                <p className="text-sm text-red-600">followers</p>
                <p className="text-2xl font-bold text-red-900 mt-2">1,180</p>
                <p className="text-sm text-red-600">posts</p>
              </div>

              <div className="grid grid-cols-3 gap-1 mb-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square relative">
                    <Image
                      src={`/placeholder.svg?height=100&width=100`}
                      alt={`Instagram post ${i}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>

              <button className="w-full bg-red-500 text-white py-2 rounded font-medium hover:bg-red-600 transition">
                View Full Profile on Instagram
              </button>
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-[600px] bg-blue-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    <Image
                      src="/placeholder.svg?height=600&width=300"
                      alt="Bell Bottom Mobile App"
                      fill
                      className="object-cover"
                    />
                    {/* App interface overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 p-6">
                      <div className="text-center text-white mb-6">
                        <h3 className="text-2xl font-bold">BELL</h3>
                        <h3 className="text-xl font-bold">BOTTOM</h3>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-full mt-4 font-bold hover:bg-red-700 transition">
                          ORDER NOW
                        </button>
                      </div>

                      <div className="bg-white rounded-lg p-4 mb-4">
                        <h4 className="font-bold text-blue-800 mb-2">CURRY MEAL FOR ONE</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-lg mb-1"></div>
                            <p className="text-xs text-blue-700">Chicken Tikka Masala</p>
                            <p className="text-sm font-bold text-red-600">£8.95</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-lg mb-1"></div>
                            <p className="text-xs text-blue-700">Butter Chicken</p>
                            <p className="text-sm font-bold text-red-600">£8.95</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Info */}
            <div className="text-blue-900">
              <h2 className="text-4xl font-bold mb-6">ORDER ONLINE WITH JUST A CLICK OF A BUTTON</h2>
              <p className="text-lg mb-8 text-blue-700">
                Rest assured, simply pick up your phone and place your food order stress-free! Easy, convenient, and
                delicious awaits you.
              </p>

              <div className="bg-blue-500 text-white p-4 rounded-lg mb-8 flex items-center shadow-lg">
                <Smartphone className="h-8 w-8 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">ORDER ONLINE</h3>
                  <p className="text-sm">Order directly with us.</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Scan To Download Our App</h3>
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32 bg-white p-2 rounded-lg border-2 border-blue-200 shadow-lg">
                    <div className="w-full h-full bg-blue-900 rounded grid grid-cols-8 gap-px">
                      {/* QR Code pattern */}
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-blue-900"}`} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href="#" className="block">
                      <div className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-800 transition shadow-lg">
                        <div className="mr-3">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs">Download on the</p>
                          <p className="text-lg font-bold">App Store</p>
                        </div>
                      </div>
                    </Link>

                    <Link href="#" className="block">
                      <div className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-red-700 transition shadow-lg">
                        <div className="mr-3">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs">GET IT ON</p>
                          <p className="text-lg font-bold">Google Play</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {/* Vegan Options */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-6 text-white shadow-xl">
              <div className="flex items-center">
                <div className="w-20 h-20 mr-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Vegan burger"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">VEGAN OPTIONS</h3>
                  <p className="text-sm mb-2">Where Vegan Dreams Blossom!</p>
                  <Link href="/menu/vegan" className="text-sm underline font-medium hover:text-blue-100 transition">
                    View Menu
                  </Link>
                </div>
              </div>
            </div>

            {/* Vegetarian Options */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 text-white shadow-xl">
              <div className="flex items-center">
                <div className="w-20 h-20 mr-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Vegetarian platter"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">VEGETARIAN OPTIONS</h3>
                  <p className="text-sm mb-2">From Roots to Roasts!</p>
                  <Link href="/menu/vegetarian" className="text-sm underline font-medium hover:text-red-100 transition">
                    View Menu
                  </Link>
                </div>
              </div>
            </div>

            {/* Non-Vegetarian Options */}
            <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-lg p-6 text-white shadow-xl">
              <div className="flex items-center">
                <div className="w-20 h-20 mr-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Non-vegetarian platter"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">NON-VEGETARIAN OPTIONS</h3>
                  <p className="text-sm mb-2">Meat-ing Your Expectations!</p>
                  <Link
                    href="/menu/non-vegetarian"
                    className="text-sm underline font-medium hover:text-blue-100 transition"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Straight from India Section */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Indian Street Image */}
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Vibrant streets of India"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full shadow-xl border-2 border-blue-200"
              />
            </div>

            {/* Content */}
            <div className="text-blue-900">
              <h2 className="text-4xl font-bold mb-6">STRAIGHT FROM THE VIBRANT STREETS OF INDIA</h2>
              <p className="text-lg mb-8 text-blue-700">
                Bell Bottom is your gateway to India's culinary treasures. Our vibrant menu features an array of
                authentic Indian dishes, street food favorites, and traditional flavors. Experience the spirit of
                India's diverse cuisine at Bell Bottom, where every bite tells a story.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-red-500 mr-3" />
                  <span className="text-lg font-medium text-blue-800">Best Price</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-red-500 mr-3" />
                  <span className="text-lg font-medium text-blue-800">Best Service</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-red-500 mr-3" />
                  <span className="text-lg font-medium text-blue-800">Fresh Ingredient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
