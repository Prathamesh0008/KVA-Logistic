'use client'

import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Search,
  Globe,
  Clock,
  ShieldCheck
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  // Color palette based on your logo
  const colors = {
    darkBrown: '#521903',     // Primary dark - borders, text
    goldenYellow: '#f8b936',  // Primary accent - buttons, highlights
    orange: '#dc8c18',       // Secondary accent - hover states
    darkOrange: '#9f4409',   // Dark accent - backgrounds
    lightTan: '#c29f85'      // Light accent - backgrounds, borders
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  const navItems = [
    { 
      name: 'Home', 
      href: '/'
    },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'Road Freight', href: '/services#road-freight' },
        { name: 'Ocean Shipping', href: '/services#ocean-shipping' },
        { name: 'Air Freight', href: '/services#air-freight' },
        { name: 'Warehousing', href: '/services#warehousing' },
        { name: 'Last-Mile Delivery', href: '/services#last-mile' },
        { name: 'Logistics Consulting', href: '/services#consulting' },
      ]
    },
    { 
      name: 'Tracking', 
      href: '/tracking'
    },
    { 
      name: 'About', 
      href: '/about'
    },
    { 
      name: 'Contact', 
      href: '/contact'
    },
  ]

  const topInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', subtext: '24/7 Support' },
    { icon: Clock, text: 'Mon - Fri: 8AM - 6PM', subtext: 'Sat: 9AM - 4PM' },
    { icon: Mail, text: 'info@logiswift.com', subtext: 'Quick Response' }
  ]

  return (
    <>
      {/* Top Information Bar - Desktop Only */}
      {/* <div className="hidden lg:block" style={{ backgroundColor: colors.darkOrange }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm text-white">
            <div className="flex items-center space-x-8">
              {topInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 group">
                  <div 
                    className="p-1.5 rounded-lg transition-colors group-hover:opacity-90"
                    style={{ backgroundColor: colors.orange }}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="font-medium">{item.text}</p>
                    <p className="opacity-80 text-xs">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 opacity-90">
                <ShieldCheck className="h-3.5 w-3.5" /> 
                <span className="text-xs">ISO 9001 Certified</span> 
              </div>
              <div className="h-4 w-px" style={{ backgroundColor: colors.orange, opacity: 0.5 }}></div>
              <button className="flex items-center space-x-1 hover:opacity-90 transition-opacity text-sm">
                <Globe className="h-3.5 w-3.5" /> 
                <span>Global Network</span> 
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo - Fixed with explicit dimensions */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                {/* Desktop Logo */}
                <div className="hidden lg:block relative w-[180px] h-[60px] transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/KVA_logo_2.png"
                    alt="KVA Logistics - Global Logistics & Supply Chain"
                    width={180}
                    height={60}
                    className="object-contain object-left"
                    priority
                    // onError={(e) => {
                    //   console.error('Failed to load desktop logo:', e.target.src);
                    //   e.target.style.display = 'none';
                    //   const fallback = e.target.parentElement.querySelector('.desktop-logo-fallback');
                    //   if (fallback) fallback.style.display = 'flex';
                    // }}
                  />
                  {/* Desktop Fallback */}
                  {/* <div className="desktop-logo-fallback hidden absolute inset-0 items-center">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: colors.darkBrown }}>
                      <Truck className="h-8 w-8" style={{ color: colors.goldenYellow }} />
                    </div>
                    <div className="ml-4">
                      <span className="text-2xl font-bold" style={{ color: colors.darkBrown }}>
                        KVA
                      </span>
                      <span className="block text-sm font-semibold" style={{ color: colors.orange }}>
                        LOGISTICS
                      </span>
                    </div>
                  </div>*/}
                </div> 

                {/* Mobile Logo */}
                <div className="lg:hidden relative w-[140px] h-[50px] transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/KVA_logo_2.png"
                    alt="KVA Logistics"
                    width={140}
                    height={50}
                    className="object-contain"
                    priority
                    onError={(e) => {
                      console.error('Failed to load mobile logo:', e.target.src);
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.mobile-logo-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Mobile Fallback */}
                  <div className="mobile-logo-fallback hidden absolute inset-0 items-center">
                    <div className="p-1.5 rounded-lg" style={{ backgroundColor: colors.darkBrown }}>
                      <Truck className="h-6 w-6" style={{ color: colors.goldenYellow }} />
                    </div>
                    <div className="ml-3">
                      <span className="text-xl font-bold" style={{ color: colors.darkBrown }}>
                        KVA
                      </span>
                      <span className="block text-xs font-semibold" style={{ color: colors.orange }}>
                        LOGISTICS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex text-black items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex cursor-pointer items-center space-x-1 px-5 py-2.5 rounded-lg font-medium transition-all ${
                          pathname === '/services' || pathname.startsWith('/services#')
                            ? 'text-white'
                            : 'text-gray-700 hover:text-black'
                        }`}
                        style={pathname === '/services' || pathname.startsWith('/services#') ? {
                          backgroundColor: colors.darkBrown
                        } : {}}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Services Dropdown */}
                      {isServicesOpen && (
                        <div 
                          className="absolute left-0 top-full mt-1 w-56 rounded-xl shadow-2xl border py-3 "
                          style={{ 
                            backgroundColor: colors.darkBrown,
                            borderColor: colors.lightTan
                          }}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-5 py-3 transition-colors group hover:opacity-90"
                              style={{ color: colors.lightTan }}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span className="font-medium hover:text-white">
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-5 py-2.5 rounded-lg font-medium transition-all hover:text-black ${
                        pathname === item.href
                          ? 'text-white'
                          : 'text-gray-700'
                      }`}
                      style={pathname === item.href ? {
                        backgroundColor: colors.darkBrown
                      } : {}}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Get Quote Button */}
              <Link
                href="/contact"
                className="ml-4 text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg"
                style={{ 
                  backgroundColor: colors.goldenYellow,
                  boxShadow: `0 4px 20px ${colors.goldenYellow}40`
                }}
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <Link
                href="/contact"
                className="text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-colors"
                style={{ backgroundColor: colors.goldenYellow }}
              >
                Quote
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" style={{ color: colors.darkBrown }} />
                ) : (
                  <Menu className="h-6 w-6" style={{ color: colors.darkBrown }} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className={`absolute right-0 top-0 h-full w-full max-w-sm shadow-2xl transform transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ backgroundColor: colors.darkBrown }}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-6 border-b" style={{ borderColor: colors.lightTan }}>
                <div className="flex items-center justify-between mb-4">
                  <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    {/* Mobile Logo in Menu */}
                    <div className="relative w-[120px] h-[45px]">
                      <Image
                        src="/KVA_LOGO_2.png"
                        alt="KVA Logistics"
                        width={120}
                        height={45}
                        className="object-contain"
                        onError={(e) => {
                          console.error('Failed to load menu logo:', e.target.src);
                          e.target.style.display = 'none';
                          const fallback = e.target.parentElement.querySelector('.menu-logo-fallback');
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Menu Fallback */}
                      <div className="menu-logo-fallback hidden absolute inset-0 items-center">
                        <div className="p-1 rounded-lg" style={{ backgroundColor: colors.goldenYellow }}>
                          <Truck className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-2">
                          <span className="text-lg font-bold text-white">KVA</span>
                          <span className="block text-xs text-gray-300">LOGISTICS</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:opacity-80 rounded-lg transition-opacity"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" style={{ color: colors.lightTan }} />
                  </button>
                </div>
                
                {/* Quick Contact Info */}
                <div className="space-y-3">
                  {topInfo.slice(0, 2).map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div 
                        className="p-1.5 rounded-lg"
                        style={{ backgroundColor: colors.orange, opacity: 0.9 }}
                      >
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">{item.text}</p>
                        <p className="text-xs" style={{ color: colors.lightTan }}>{item.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-grow overflow-y-auto py-4">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b last:border-b-0" style={{ borderColor: colors.lightTan, opacity: 0.3 }}>
                    {item.dropdown ? (
                      <div className="px-6">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full py-4 text-left"
                        >
                          <span className={`font-medium ${
                            pathname === '/services' || pathname.startsWith('/services#')
                              ? 'text-white'
                              : 'text-white'
                          }`}>
                            {item.name}
                          </span>
                          <ChevronDown className={`h-5 w-5 transition-transform ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`} style={{ color: colors.lightTan }} />
                        </button>
                        {isServicesOpen && (
                          <div className="pl-4 pb-4 space-y-1">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
                                style={{ color: colors.lightTan }}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-6 py-4 hover:opacity-90 transition-opacity"
                        style={{ color: colors.lightTan }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className={`font-medium ${
                          pathname === item.href
                            ? 'text-white'
                            : 'text-inherit'
                        }`}>
                          {item.name}
                        </span>
                        <span style={{ color: colors.goldenYellow }}>→</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="border-t p-6 space-y-6" style={{ borderColor: colors.lightTan }}>
                {/* Trust Badges */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1"
                      style={{ backgroundColor: colors.orange, opacity: 0.9 }}
                    >
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-xs" style={{ color: colors.lightTan }}>Certified</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1"
                      style={{ backgroundColor: colors.orange, opacity: 0.9 }}
                    >
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-xs" style={{ color: colors.lightTan }}>150+ Countries</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1"
                      style={{ backgroundColor: colors.orange, opacity: 0.9 }}
                    >
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-xs" style={{ color: colors.lightTan }}>24/7 Support</p>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/tracking"
                    className="block w-full text-white px-4 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity shadow-lg"
                    style={{ backgroundColor: colors.goldenYellow }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Track Shipment
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full border-2 px-4 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
                    style={{ 
                      borderColor: colors.goldenYellow,
                      color: colors.goldenYellow
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}