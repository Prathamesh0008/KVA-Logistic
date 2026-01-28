import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  // Color palette matching your home page
  const colors = {
    darkBrown: '#635d59',     // Primary dark
    goldenYellow: '#f8b936',  // Primary accent
    orange: '#dc8c18',       // Secondary accent
    darkOrange: '#635d59',   // Dark accent
    lightTan: '#c29f85'      // Light accent
  }

  return (
    <footer style={{ backgroundColor: colors.darkBrown }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div>
            <Link href="/" className="flex items-center ">
              <div className="relative w-[150px] h-[160px] ">
                <Image
                  src="/KVA logo 2.png"
                  alt="KVA Logistics"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <p className="mb-6" style={{ color: colors.lightTan }}>
              Delivering excellence in logistics and supply chain solutions worldwide since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors" style={{ color: colors.goldenYellow }}>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="transition-colors" style={{ color: colors.goldenYellow }}>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="transition-colors" style={{ color: colors.goldenYellow }}>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="transition-colors" style={{ color: colors.goldenYellow }}>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: colors.goldenYellow }}>Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="transition-colors" style={{ color: colors.lightTan }}>Home</Link></li>
              <li><Link href="/services" className="transition-colors" style={{ color: colors.lightTan }}>Services</Link></li>
              <li><Link href="/tracking" className="transition-colors" style={{ color: colors.lightTan }}>Tracking</Link></li>
              <li><Link href="/about" className="transition-colors" style={{ color: colors.lightTan }}>About Us</Link></li>
              <li><Link href="/contact" className="transition-colors" style={{ color: colors.lightTan }}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: colors.orange }}>Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="transition-colors" style={{ color: colors.lightTan }}>Road Freight</a></li>
              <li><a href="#" className="transition-colors" style={{ color: colors.lightTan }}>Ocean Shipping</a></li>
              <li><a href="#" className="transition-colors" style={{ color: colors.lightTan }}>Air Freight</a></li>
              <li><a href="#" className="transition-colors" style={{ color: colors.lightTan }}>Warehousing</a></li>
              <li><a href="#" className="transition-colors" style={{ color: colors.lightTan }}>Supply Chain</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: colors.goldenYellow }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: colors.goldenYellow }} />
                <span className="text-sm" style={{ color: colors.lightTan }}>123, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: colors.orange }} />
                <span className="font-medium" style={{ color: colors.lightTan }}>+316872022074</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: colors.goldenYellow }} />
                <span className="font-medium" style={{ color: colors.lightTan }}>info@logisticKVA.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: colors.lightTan + '30' }}>
          <p style={{ color: colors.lightTan }}>
            &copy; {new Date().getFullYear()} KVA Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}