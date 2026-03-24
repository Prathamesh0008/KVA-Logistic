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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [isMenuOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
<header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-white shadow-md"
  }`}
  style={{
  fontFamily: "var(--font-snasm)",
  fontWeight: 300,
  letterSpacing: "0.02em"
}}
>

      <div className="max-w-7xl mx-auto px-1 sm:px-4">
<div className="flex items-center justify-between h-15 sm:h-16 lg:h-18 pt-1 pb-1">
          {/* LOGO */}
          <Link href="/" className="flex shrink-0">
            <img
              src="/logo.png"
              alt="KVA Logistics"
              className="h-22 sm:h-21 lg:h-25 object-cover"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 xl:space-x-2">

              {navItems.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 xl:px-5 py-2.5 rounded-lg text-sm xl:text-[15px] ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                style={{
  fontFamily: "var(--font-snasm)",
  fontWeight: 300,
  letterSpacing: "0.02em",
  ...(pathname === item.href && {
    backgroundColor: colors.darkBrown
  })
}}
                >
                  {item.name}
                </Link>

              ))}

            </div>
          </nav>

          {/* DESKTOP CTA */}
{/* DESKTOP CTA - enhanced version */}
<div className="hidden lg:block">
  <Link
    href="/contact"
    className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#EB9003] to-[#C55500] px-6 py-3 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-[#F5A623] hover:to-[#D45E00] focus:outline-none focus:ring-2 focus:ring-[#EB9003] focus:ring-offset-2"
    style={{
      fontFamily: "var(--font-snasm)",
      fontWeight: 400,
      letterSpacing: "0.02em"
    }}
  >
    <span className="relative z-10">Get Quote</span>
    <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/10" />
  </Link>
</div>

          {/* MOBILE BUTTONS */}
          <div className="flex lg:hidden items-center gap-2">

          <Link
  href="/contact"
  className="px-4 py-2 rounded-full text-xs font-medium shadow-sm whitespace-nowrap"
  style={{
    backgroundColor: colors.goldenYellow,
    color: colors.darkBrown,
    fontFamily: "var(--font-snasm)"
  }}
>
  Get Quote
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

      {/* MOBILE MENU */}
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

              <span
                className="text-white text-lg"
                style={{ fontFamily: "var(--font-snasm)", fontWeight: 400 }}
              >
                KVA LOGISTICS
              </span>

              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>

            </div>

            <div className="flex-1 overflow-y-auto">

              {navItems.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-4 text-white"
                  style={{
                    fontFamily: "var(--font-snasm)",
                    fontWeight: 400
                  }}
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

        </div>

      )}

    </header>
  )
}