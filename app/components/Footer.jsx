'use client'

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  // Color palette matching your header - UPDATED to match header
  const colors = {
    darkBrown: '#521903',
    goldenYellow: '#f8b936',
    orange: '#dc8c18',
    darkOrange: '#9f4409',
    lightTan: '#c29f85'
  }

  return (
    <footer style={{ backgroundColor: colors.darkBrown }} className="text-white">
      <div className="container mx-auto px-4 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info with Logo */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-full h-[120px] lg:h-[140px]">
                <Image
                  src="/logo.png" 
                  alt="KVA Logistics"
                  width={220}
                  height={140}
                  className="object-contain object-left"
                 
                />
              </div>
            </Link>
            <p className="text-sm lg:text-base leading-relaxed" style={{ color: colors.lightTan }}>
              Delivering excellence in logistics and supply chain solutions worldwide since 2005.
            </p>
            <div className="flex space-x-3 pt-3">
              <a 
                href="#" 
                className="p-2.5 rounded-full transition-all hover:scale-110 hover:bg-white/10" 
                style={{ color: colors.goldenYellow }}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-full transition-all hover:scale-110 hover:bg-white/10" 
                style={{ color: colors.goldenYellow }}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-full transition-all hover:scale-110 hover:bg-white/10" 
                style={{ color: colors.goldenYellow }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2.5 rounded-full transition-all hover:scale-110 hover:bg-white/10" 
                style={{ color: colors.goldenYellow }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b" style={{ 
              color: colors.goldenYellow,
              borderColor: colors.lightTan + '40'
            }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/tracking" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Tracking
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b" style={{ 
              color: colors.orange,
              borderColor: colors.lightTan + '40'
            }}>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/services#road-freight" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Road Freight
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#ocean-shipping" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Ocean Shipping
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#air-freight" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Air Freight
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#warehousing" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Warehousing
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#consulting" 
                  className="text-sm transition-all hover:pl-2 block py-1.5 hover:text-white"
                  style={{ color: colors.lightTan }}
                >
                  Supply Chain Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b" style={{ 
              color: colors.goldenYellow,
              borderColor: colors.lightTan + '40'
            }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 rounded-lg mr-3 mt-0.5" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: colors.goldenYellow }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: colors.lightTan }}>
                  123 Logistics Plaza, Suite 500<br />
                  New York, NY 10001<br />
                  United States
                </span>
              </li>
              <li className="flex items-start">
                <div className="p-2 rounded-lg mr-3 mt-0.5" style={{ backgroundColor: colors.orange + '20' }}>
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: colors.orange }} />
                </div>
                <div>
                  <span className="text-sm font-medium block" style={{ color: colors.lightTan }}>
                    +316872022074
                  </span>
                  <span className="text-xs" style={{ color: colors.lightTan + '80' }}>
                    24/7 Customer Support
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 rounded-lg mr-3 mt-0.5" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                  <Mail className="h-4 w-4 flex-shrink-0" style={{ color: colors.goldenYellow }} />
                </div>
                <div>
                  <span className="text-sm font-medium block" style={{ color: colors.lightTan }}>
                    info@kvalogistics.com
                  </span>
                  <span className="text-xs" style={{ color: colors.lightTan + '80' }}>
                    Quick Response
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-10 pt-6 text-center" style={{ borderColor: colors.lightTan + '30' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-sm" style={{ color: colors.lightTan }}>
              &copy; {new Date().getFullYear()} KVA Logistics. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/privacy" 
                className="text-xs transition-colors hover:text-white hover:underline"
                style={{ color: colors.lightTan + '80' }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-xs transition-colors hover:text-white hover:underline"
                style={{ color: colors.lightTan + '80' }}
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-xs transition-colors hover:text-white hover:underline"
                style={{ color: colors.lightTan + '80' }}
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: colors.lightTan + '60' }}>
            ISO 9001:2015 Certified • Registered Logistics Provider • Member of Global Logistics Association
          </p>
        </div>
      </div>
    </footer>
  )
}