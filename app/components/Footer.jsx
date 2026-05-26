'use client'

import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const colors = {
    lightBrown: '#F5E6D3',
    darkBrown: '#521903',
  }

  const quickLinks = ['Home', 'Services', 'Tracking', 'About', 'Contact']

  return (
    <footer style={{ backgroundColor: colors.lightBrown }} className="text-[#521903]">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="relative h-[58px] w-[135px] sm:h-[70px] sm:w-[165px] md:h-[78px] md:w-[180px]">
                <Image
                  src="/logo.png"
                  alt="KVA Logistics"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 135px, (max-width: 768px) 165px, 180px"
                />
              </div>
            </Link>

            <p
              className="mt-5 max-w-[310px] text-base leading-8"
              style={{ color: colors.darkBrown }}
            >
              Delivering excellence in logistics and supply chain solutions worldwide since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-bold" style={{ color: colors.darkBrown }}>
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-lg transition hover:opacity-70"
                    style={{ color: colors.darkBrown }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="mb-5 text-xl font-bold" style={{ color: colors.darkBrown }}>
              Contact Us
            </h3>

            <div className="space-y-4 text-base">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <span>Apendans 5, 2511ED &apos;s-Gravenhage</span>
              </p>

              <p className="flex items-center gap-3 break-all">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@kvalogistics.nl</span>
              </p>

              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>Quick Response</span>
              </p>
            </div>

            <h3 className="mb-4 mt-8 text-xl font-bold" style={{ color: colors.darkBrown }}>
              Connect With Us
            </h3>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-110"
                  style={{
                    backgroundColor: colors.darkBrown + '15',
                    color: colors.darkBrown,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-9 border-t pt-5 text-center text-sm"
          style={{
            borderColor: colors.darkBrown + '25',
            color: colors.darkBrown,
          }}
        >
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold">KVA Logistics.</span> All rights reserved.
        </div>
      </div>
    </footer>
  )
}