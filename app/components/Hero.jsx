'use client'

import {
  ArrowRight,
  Shield,
  Clock,
  Globe,
  Truck,
  Package,
  Phone,
  Award,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const colors = {
  darkBrown: '#4A2A14',
  goldenYellow: '#C9A24D',
  orange: '#8C1D08',
  darkOrange: '#6B1A0A',
  lightTan: '#E6D3A3',
  warmWhite: '#FAF8F5',
  offWhite: '#F5F3EF'
}

const statsData = [
  { value: '99.8%', label: 'Safe Delivery Rate', icon: Shield, colorKey: 'goldenYellow' },
  { value: '24/7', label: 'Customer Support', icon: Clock, colorKey: 'orange' },
  { value: '150+', label: 'Countries Covered', icon: Globe, colorKey: 'goldenYellow' }
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: colors.warmWhite }}
    >
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        {/* Soft overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              `linear-gradient(90deg, ${colors.warmWhite}F2 0%, ${colors.warmWhite}CC 40%, ${colors.warmWhite}99 65%, transparent 100%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:max-w-4xl">
            {/* Badge */}
            <div className="flex mb-8 sm:mb-10">
              <div
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm"
                style={{
                  backgroundColor: colors.goldenYellow,
                  color: colors.darkBrown,
                  border: `1px solid ${colors.darkBrown}20`
                }}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-bold">
                  TRUSTED LOGISTICS PARTNER SINCE 1998
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-6 sm:mb-8">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                style={{ color: colors.darkBrown }}
              >
                <span className="block">Global Logistics</span>
                <span
                  className="block mt-1 sm:mt-2"
                  style={{
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Storage Solutions
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-8 sm:mb-12">
              <p
                className="text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed"
                style={{ color: colors.darkBrown, opacity: 0.8 }}
              >
                Professional warehousing, distribution, and transportation services —{' '}
                <span style={{ color: colors.goldenYellow, fontWeight: 600 }}>secure</span>,{' '}
                <span style={{ color: colors.orange, fontWeight: 600 }}>efficient</span> &{' '}
                <span style={{ color: colors.orange, fontWeight: 600 }}>reliable</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">
              <Link
                href="/contact"
                className="group px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg"
                style={{ 
                  backgroundColor: colors.goldenYellow, 
                  color: colors.darkBrown 
                }}
              >
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Get Storage Quote</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link
                href="/tracking"
                className="group px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold border-2 flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md text-base sm:text-lg"
                style={{ 
                  borderColor: colors.goldenYellow, 
                  backgroundColor: 'white', 
                  color: colors.darkBrown 
                }}
              >     
                <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Track Shipment</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" style={{ color: colors.goldenYellow }} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mb-10 sm:mb-14">
              {statsData.map((s, i) => {
                const Icon = s.icon
                const color = colors[s.colorKey]
                return (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-xl border bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      borderColor: `${color}40`,
                      borderWidth: '1px'
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{ 
                          backgroundColor: `${color}20`,
                          border: `1px solid ${color}30`
                        }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color }} />
                      </div>
                      <div className="min-w-0">
                        <div 
                          className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 leading-none"
                          style={{ color }}
                        >
                          {s.value}
                        </div>
                        <div 
                          className="text-xs sm:text-sm font-semibold uppercase tracking-wide"
                          style={{ color: colors.darkBrown, opacity: 0.7 }}
                        >
                          {s.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact */}
            <div
              className="max-w-md p-5 sm:p-6 rounded-xl border bg-white  mb-10 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: `${colors.goldenYellow}40`,
                borderWidth: '1px'
              }}
            >
              <div className="flex items-center gap-4 ">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ 
                    backgroundColor: colors.goldenYellow,
                    border: `1px solid ${colors.goldenYellow}`
                  }}
                >
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: colors.darkBrown }} />
                </div>
                <div className="min-w-0 " >
                  <div 
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1"
                    style={{ color: colors.darkBrown, opacity: 0.7 }}
                  >
                    24/7 Customer Support
                  </div>
                  <div 
                    className="text-xl sm:text-2xl md:text-3xl font-black mb-1"
                    style={{ color: colors.goldenYellow }}
                  >
                    +1 (555) 123-4567
                  </div>
                  <div 
                    className="text-xs sm:text-sm"
                    style={{ color: colors.darkBrown, opacity: 0.6 }}
                  >
                    Free consultation for new clients • No hidden fees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}