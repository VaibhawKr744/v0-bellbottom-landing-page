import Image from "next/image"
import Link from "next/link"

const foodItems = [
  { id: 1, name: "Butter Chicken", image: "/placeholder.svg?height=300&width=400" },
  { id: 2, name: "Chicken Tikka", image: "/placeholder.svg?height=300&width=400" },
  { id: 3, name: "Chicken Tikka Masala", image: "/placeholder.svg?height=300&width=400" },
  { id: 4, name: "Chilli Naan", image: "/placeholder.svg?height=300&width=400" },
  { id: 5, name: "Pani Puri", image: "/placeholder.svg?height=300&width=400" },
  { id: 6, name: "Paneer Chaat", image: "/placeholder.svg?height=300&width=400" },
  { id: 7, name: "Punjabi Samosa", image: "/placeholder.svg?height=300&width=400" },
  { id: 8, name: "Seekh Kebab", image: "/placeholder.svg?height=300&width=400" },
]

export default function FoodGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {foodItems.map((item) => (
        <Link key={item.id} href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`} className="group">
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-white">{item.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
