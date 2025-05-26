import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, User, Menu } from "lucide-react"
import DishCarousel from "@/components/dish-carousel"
import ShortsCarousel from "@/components/shorts-carousel"
import ComprehensiveSection from "@/components/comprehensive-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 border-b border-amber-900/30">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://sjc.microlink.io/Tl88rJDbLQFQf5iIZzpSibNnadyTmxO6WdZtlr-Cy3d-QLZr2Tsx6QKiWguqFhwrVSDXW6C_OC-VSQ_Nued-2g.jpeg"
              alt="Bell Bottom"
              width={200}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#menu" className="text-amber-100 hover:text-amber-400 text-sm font-medium transition">
              Menu Option
            </Link>
            <Link href="#catering" className="text-amber-100 hover:text-amber-400 text-sm font-medium transition">
              Catering
            </Link>
            <Link href="#locations" className="text-amber-100 hover:text-amber-400 text-sm font-medium transition">
              Locations
            </Link>
            <Link href="#franchise" className="text-amber-100 hover:text-amber-400 text-sm font-medium transition">
              Franchise With Us
            </Link>
            <div className="relative group">
              <Link href="#reservations" className="text-amber-100 hover:text-amber-400 text-sm font-medium transition">
                Reservations
              </Link>
            </div>
            <div className="relative group">
              <Link href="#contact" className="text-amber-100 hover:text-amber-400 text-sm font-medium transition">
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/order"
              className="hidden md:flex items-center px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md text-sm font-medium transition"
            >
              Order Online
            </Link>
            <Link
              href="/reviews"
              className="hidden md:flex text-amber-100 hover:text-amber-400 text-sm font-medium transition"
            >
              Reviews
            </Link>
            <Link href="/cart" className="relative text-amber-100 hover:text-amber-400">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/account" className="text-amber-100 hover:text-amber-400">
              <User className="h-5 w-5" />
            </Link>
            <button className="md:hidden text-amber-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Food Background */}
        <section className="relative h-[80vh] overflow-hidden">
          {/* Hero Background Image */}
          <Image
            src="https://sjc.microlink.io/fdQKCe3nsfAr8T3cc-HP_r4rVbxm4yAaszwJ2ugpVqI3v3-jzdffyNlttCz9DzI8SGpa0iWrfqzl6sbM7bOllg.jpeg"
            alt="Delicious Indian cuisine spread"
            fill
            className="object-cover"
            priority
          />

          {/* Hanging Promotion Banner */}
          <div className="absolute top-0 left-8 md:left-16 z-[60]">
            <div className="relative">
              {/* Rope */}
              <div className="h-8 w-1 bg-amber-800 mx-auto"></div>

              {/* Hanging Card */}
              <div className="hanging-card bg-red-600 text-white px-4 py-3 rounded-md shadow-lg border-2 border-amber-400 transform rotate-[-2deg]">
                <p className="text-sm md:text-base font-bold">SIGN UP & ORDER</p>
                <p className="text-xl md:text-2xl font-bold">
                  £30 <span className="text-xs md:text-sm">Earn Tikka Credits</span>
                </p>
              </div>
            </div>
          </div>

          {/* Hero Content - Card Layout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <div className="bg-black/70 p-8 md:p-10 rounded-lg max-w-4xl w-full text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-4">
                ENJOY THE BEST TIKKAS AT TIKKA NATION
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Savor the Taste and Earn valuable Tikka Credits with every bite.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/reservations"
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-md transition"
                >
                  Book A Table
                </Link>
                <Link
                  href="/order"
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-md transition"
                >
                  Order Now
                </Link>
                <Link
                  href="/catering"
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-md transition"
                >
                  Catering
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Dishes Carousel Section */}
        <DishCarousel />

        {/* Shorts Video Section */}
        <ShortsCarousel />

        {/* Comprehensive Section */}
        <ComprehensiveSection />

        {/* About Us Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Authentic Indian Cuisine</h2>
              <p className="text-lg text-blue-700 mb-8">
                Experience the rich flavors and aromatic spices of traditional Indian cooking. Our chefs bring decades
                of experience and family recipes to create an unforgettable dining experience.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition shadow-lg"
              >
                Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservations" className="py-16 bg-gradient-to-r from-blue-600 to-red-600">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl border-2 border-blue-200">
              <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">Make a Reservation</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-blue-700 mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-blue-700 mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-blue-700 mb-1 font-medium">
                    Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-blue-700 mb-1 font-medium">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition shadow-lg"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Locations</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-bold mb-2 text-blue-900">St George's Shopping Centre</h3>
                <p className="text-blue-700 mb-4 font-medium">Harrow, London</p>
                <p className="text-blue-800 mb-2 font-semibold">Opening Hours:</p>
                <ul className="text-blue-600 mb-4 space-y-1">
                  <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                  <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
                </ul>
                <Link
                  href="/locations/harrow"
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition shadow-md"
                >
                  Get Directions
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-red-200 hover:border-red-400 transition shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-bold mb-2 text-red-900">St Paul's Market Place</h3>
                <p className="text-red-700 mb-4 font-medium">London</p>
                <p className="text-red-800 mb-2 font-semibold">Opening Hours:</p>
                <ul className="text-red-600 mb-4 space-y-1">
                  <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                  <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
                </ul>
                <Link
                  href="/locations/stpauls"
                  className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition shadow-md"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 border-t-4 border-red-500 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Bell Bottom</h3>
              <p className="text-blue-100 mb-4">Authentic Indian cuisine with a modern twist.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-red-300 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-red-300 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-red-300 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/menu" className="text-blue-100 hover:text-white transition">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/reservations" className="text-blue-100 hover:text-white transition">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/catering" className="text-blue-100 hover:text-white transition">
                    Catering
                  </Link>
                </li>
                <li>
                  <Link href="/franchise" className="text-blue-100 hover:text-white transition">
                    Franchise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="text-blue-100">Email: info@bellbottom.com</li>
                <li className="text-blue-100">Phone: +44 20 1234 5678</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
              <p className="text-blue-100 mb-4">Subscribe to receive special offers and updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-white border border-blue-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-blue-900 w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-r-md font-medium transition"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-center">
            <p className="text-blue-100">&copy; {new Date().getFullYear()} Bell Bottom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
