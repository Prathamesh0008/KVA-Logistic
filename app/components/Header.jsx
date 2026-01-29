'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Truck, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const colors = {
    darkBrown: '#521903',
    goldenYellow: '#f8b936',
    orange: '#dc8c18',
    darkOrange: '#9f4409',
    lightTan: '#c29f85'
  }

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ---------------- ROUTE CHANGE RESET ---------------- */
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  /* ---------------- BODY SCROLL LOCK ---------------- */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [isMenuOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Road Freight', href: '/services#road-freight' },
        { name: 'Ocean Shipping', href: '/services#ocean-shipping' },
        { name: 'Air Freight', href: '/services#air-freight' },
        { name: 'Warehousing', href: '/services#warehousing' },
        { name: 'Last-Mile Delivery', href: '/services#last-mile' },
        { name: 'Logistics Consulting', href: '/services#consulting' }
      ]
    },
    { name: 'Tracking', href: '/tracking' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* ---------------- MAIN ROW ---------------- */}
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* ---------------- LOGO ---------------- */}
          <Link href="/" className="flex  shrink-0">
            <img
              src="/logo.png"
              alt="KVA Logistics"
              className="h-20 sm:h-25 lg:h-30  object-cover"
            />
          </Link>

          {/* ---------------- DESKTOP NAV ---------------- */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsServicesOpen((v) => !v)}
                      className="flex items-center gap-1 px-4 xl:px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-[15px] text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isServicesOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl shadow-2xl py-3"
                        style={{ backgroundColor: colors.darkBrown }}
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-5 py-3 text-sm font-medium hover:text-white"
                            style={{ color: colors.lightTan }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 xl:px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-[15px] ${
                      pathname === item.href
                        ? 'text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                    style={
                      pathname === item.href
                        ? { backgroundColor: colors.darkBrown }
                        : {}
                    }
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </nav>

          {/* ---------------- DESKTOP CTA ---------------- */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold text-white shadow-lg"
              style={{ backgroundColor: colors.goldenYellow }}
            >
              Get Quote
            </Link>
          </div>

          {/* ---------------- MOBILE BUTTONS ---------------- */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white"
              style={{ backgroundColor: colors.goldenYellow }}
            >
              Quote
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg"
            >
              <Menu className="h-6 w-6" style={{ color: colors.darkBrown }} />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE DRAWER ---------------- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-999 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-[100vh] w-[85%] max-w-md shadow-2xl flex flex-col"
            style={{ backgroundColor: colors.darkBrown }}
          >
            <div className="p-5 flex items-center justify-between border-b border-white/20">
              <span className="text-white font-bold text-lg">KVA LOGISTICS</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen((v) => !v)}
                      className="w-full flex justify-between items-center px-6 py-4 text-white font-semibold"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isServicesOpen &&
                      item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-10 py-3 text-sm"
                          style={{ color: colors.lightTan }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-4 text-white font-semibold"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
