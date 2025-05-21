"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export default function LocationAnnouncement() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 px-4">
      <div className="relative bg-gradient-to-r from-red-800 to-red-700 p-6 md:p-10 rounded-lg shadow-2xl max-w-3xl w-full border border-amber-600/30">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white hover:text-amber-200 transition"
          aria-label="Close announcement"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 font-script">Opening Soon</h2>
          <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-6">Two New Locations</h3>
          <p className="text-white mb-8">Get ready for bold flavours at two exciting new locations</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded border border-amber-600/30 hover:border-amber-500 transition">
              <h4 className="text-amber-300 font-bold mb-1">Spice Fusion</h4>
              <p className="text-amber-100 text-lg font-bold">St George's Shopping Centre, Harrow</p>
            </div>
            <div className="bg-black/30 p-4 rounded border border-amber-600/30 hover:border-amber-500 transition">
              <h4 className="text-amber-300 font-bold mb-1">Spice Fusion</h4>
              <p className="text-amber-100 text-lg font-bold">St Paul's Market Place London</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/locations"
              className="inline-block px-6 py-3 bg-amber-800 hover:bg-amber-700 text-white rounded-md font-medium transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
