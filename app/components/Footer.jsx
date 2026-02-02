'use client'

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const colors = {
    lightBrown: '#F5E6D3',
    darkBrown: '#521903',
    goldenYellow: '#f8b936',
    orange: '#dc8c18',
    darkOrange: '#9f4409',
    lightTan: '#8B5A2B'
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer style={{ backgroundColor: colors.lightBrown }} className="text-gray-800">
      {/* Main Content - Matching header exactly */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Link href="/" className="inline-block">
                <div className="relative w-full h-[100px]">
                  <Image
                    src="/logo.png" 
                    alt="KVA Logistics"
                    width={250}
                    height={100}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
            <p className="text-sm leading-relaxed p-10" style={{ color: colors.darkBrown }}>
              Delivering excellence in logistics and supply chain solutions worldwide since 2005.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2.5 rounded-lg transition-all hover:scale-110 hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.darkBrown + '20',
                    color: colors.darkBrown
                  }}
                  aria-label={`Social media ${index}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b inline-block" style={{ 
              color: colors.darkBrown,
              borderColor: colors.darkBrown + '40'
            }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="inline-flex items-center text-sm transition-all hover:text-gray-900 group"
                    style={{ color: colors.darkBrown }}
                  >
                    <div 
                      className="w-1.5 h-1.5 rounded-full mr-3 transition-all group-hover:scale-125"
                      style={{ backgroundColor: colors.darkBrown }}
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b inline-block" style={{ 
              color: colors.darkBrown,
              borderColor: colors.darkBrown + '40'
            }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <MapPin className="h-4 w-4" />,
                  content: "123 Logistics Plaza, Suite 500\nNew York, NY 10001\nUnited States",
                  color: colors.darkBrown
                },
                {
                  icon: <Phone className="h-4 w-4" />,
                  content: "+316872022074",
                  subtitle: "24/7 Customer Support",
                  color: colors.orange
                },
                {
                  icon: <Mail className="h-4 w-4" />,
                  content: "info@kvalogistics.com",
                  subtitle: "Quick Response",
                  color: colors.darkBrown
                }
              ].map((item, index) => (
                <li key={index} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div 
                    className="p-2.5 rounded-lg mb-2 md:mb-0 md:mr-3 flex-shrink-0"
                    style={{ 
                      backgroundColor: item.color + '20',
                      color: item.color
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium block mb-0.5 whitespace-pre-line" style={{ color: colors.darkBrown }}>
                      {item.content}
                    </span>
                    {item.subtitle && (
                      <span className="text-xs" style={{ color: colors.darkBrown + '80' }}>
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="my-8 h-px w-full"
          style={{ backgroundColor: colors.darkBrown + '30' }}
        />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center space-y-6">
          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/PrivacyPolicy"
              className="text-sm transition-colors hover:text-gray-900 hover:underline font-medium"
              style={{ color: colors.darkBrown }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/Terms"
              className="text-sm transition-colors hover:text-gray-900 hover:underline font-medium"
              style={{ color: colors.darkBrown }}
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-sm transition-colors hover:text-gray-900 hover:underline font-medium"
              style={{ color: colors.darkBrown }}
            >
              Sitemap
            </Link>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <p className="text-xs font-medium mb-2" style={{ color: colors.darkBrown + '70' }}>
              ISO 9001:2015 Certified • Registered Logistics Provider
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm font-medium" style={{ color: colors.darkBrown }}>
              &copy; {new Date().getFullYear()} KVA Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}