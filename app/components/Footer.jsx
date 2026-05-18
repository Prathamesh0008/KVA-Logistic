'use client'

import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const colors = {
    lightBrown: '#F5E6D3',
    darkBrown: '#521903',
    goldenYellow: '#f8b936',
    orange: '#dc8c18',
    darkOrange: '#9f4409',
    lightTan: '#8B5A2B',
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer style={{ backgroundColor: colors.lightBrown }} className="text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Link href="/" className="inline-block">
                <div className="relative w-[130px] h-[52px] sm:w-[150px] sm:h-[60px]">
                  <Image
                    src="/logo.png"
                    alt="KVA Logistics"
                    fill
                    sizes="(max-width: 640px) 130px, 150px"
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            <p
              className="text-sm sm:text-base leading-relaxed px-4 md:px-0 font-medium"
              style={{ color: colors.darkBrown }}
            >
              Delivering excellence in logistics and supply chain solutions worldwide since 2005.
            </p>

            <div className="flex justify-center md:justify-start space-x-2 pt-1">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-lg transition-all hover:scale-110 hover:shadow-md"
                  style={{
                    backgroundColor: colors.darkBrown + '20',
                    color: colors.darkBrown,
                  }}
                  aria-label={`Social media ${index}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3
              className="text-lg font-bold mb-3 pb-1 border-b inline-block"
              style={{
                color: colors.darkBrown,
                borderColor: colors.darkBrown + '40',
              }}
            >
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm sm:text-base transition-all hover:text-gray-900 group"
                    style={{ color: colors.darkBrown }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-2 transition-all group-hover:scale-125"
                      style={{ backgroundColor: colors.darkBrown }}
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3
              className="text-lg font-bold mb-3 pb-1 border-b inline-block"
              style={{
                color: colors.darkBrown,
                borderColor: colors.darkBrown + '40',
              }}
            >
              Contact Us
            </h3>

            <ul className="space-y-3">
              {[
                {
                  icon: <MapPin className="h-4 w-4" />,
                  content: "Apendans 5, 2511ED 's-Gravenhage",
                  color: colors.darkBrown,
                },
                {
                  icon: <Mail className="h-4 w-4" />,
                  content: 'info@kvalogistics.nl',
                  subtitle: 'Quick Response',
                  color: colors.darkBrown,
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
                >
                  <div
                    className="p-2 rounded-lg mb-2 md:mb-0 md:mr-3 flex-shrink-0"
                    style={{
                      backgroundColor: item.color + '30',
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <span
                      className="text-sm sm:text-base font-semibold block mb-0.5 whitespace-pre-line"
                      style={{ color: colors.darkBrown }}
                    >
                      {item.content}
                    </span>

                    {item.subtitle && (
                      <span className="text-sm" style={{ color: colors.darkBrown }}>
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="my-5 h-px w-full"
          style={{ backgroundColor: colors.darkBrown + '40' }}
        />

        <div className="flex flex-col items-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-4">
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
          </div>

          <p className="text-sm font-medium text-center" style={{ color: colors.darkBrown }}>
            ISO 9001:2015 Certified • Registered Logistics Provider
          </p>

          <p className="text-sm font-medium text-center" style={{ color: colors.darkBrown }}>
            &copy; {new Date().getFullYear()} KVA Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}