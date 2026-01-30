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

// 🎨 BASE COLORS
const background = '#000000'
const cardBg = '#F5F3EF'

// ✅ LOGO-GRADE TEXT GRADIENT (WEIGHTED, CLEAN)
const highlightText = {
  backgroundImage: `linear-gradient(
    90deg,
    #FAF463 0%,
    #F9F048 8%,
    #FBF765 16%,
    #F7E738 26%,
    #F8EE41 38%,
    #F4D314 50%,
    #EB9003 65%,
    #C55500 78%,
    #9F4100 90%,
    #310F0B 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}

// ✅ UI GRADIENT (BUTTON / BADGE)
const uiGradient = `linear-gradient(
  90deg,
 #EB9003 0%,
  #EB9003 %,
  #EB9003 65%,
  #C55500 100%
)`

const statsData = [
  { value: '99.8%', label: 'Safe Delivery Rate', icon: Shield },
  { value: '24/7', label: 'Customer Support', icon: Clock },
  { value: '150+', label: 'Countries Covered', icon: Globe }
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: background }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Banner 2.jpg')"//public\Banner 2.jpg
        }}
      />

      {/* Solid logo-brown overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            90deg,
       
           #310F0B 0%, #310F0B 0%,
            transparent 100%
          )`
        }} 
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="mb-8 p-10">
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-500"
                style={{
                  background: uiGradient,
                  border: '1px solid #9F4100',
                  color: '#9F4100'
                }} 
              >
                <Award className="w-5 h-5 p10" />
             <span
  className="block"
  style={{
    backgroundImage: `linear-gradient(
      90deg,
      #310F0B
    
    )`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
  TRUSTED LOGISTICS PARTNER SINCE 1998
</span>
                 
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span
  className=" bg-gradient-to-l from-yellow-100 to-[#9F4100] bg-clip-text text-transparent  " 
>
  Global Logistics
</span>
<span
  className="block bg-gradient-to-l from-yellow-100 to-[#9F4100] bg-clip-text   bg-clip-text text-transparent" 
>
  Storage Solution
</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl lg:text-2xl max-w-xl mb-10 leading-relaxed"
              style={{ color: '#EB9003' }}
            >
              Professional warehousing, distribution, and transportation services —{' '}
              <span style={{ color: '#9F4100', fontWeight: 700 }}>secure</span>,{' '}
              <span style={{ color: '#9F4100', fontWeight: 700 }}>efficient</span> &{' '}
              <span style={{ color: '#9F4100', fontWeight: 700 }}>reliable</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
<Link
  href="/contact"
  className="group px-8 py-4 rounded-xl font-bold 
    flex items-center gap-3 
    transition-all hover:scale-105
    bg-[#EB9003] text-[#310F0B]
    border-2 border-[#EB9003]"
>
  <Truck className="w-6 h-6" />
  Get Storage Quote
  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
</Link>

              <Link
                href="/tracking"
                className="group px-8 py-4 rounded-xl font-bold border-2 flex items-center gap-3 transition-transform hover:scale-105 bg-yellow-500"
                style={{
                  background: `linear-gradient(
                    90deg,
                    #EB9003
                   #EB9003
                    #EB9003
                  )`,
                  borderColor: '#EB9003',
                  color: '#310F0B'
                }}
              >
                <Package className="w-6 h-6 "/>
                Track Shipment
                <Sparkles className="w-5 h-5 animate-pulse"/>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mb-12">
              {statsData.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={i}
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: cardBg,
                      border: '1px solid #C55500'
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{
                          background: `linear-gradient(
                            135deg,
                            #EB9003,
                            #EB9003
                          )`
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: '#310F0B' }} />
                      </div>
                      <div>
                        <div
                          className="text-3xl font-black"
                          style={{ color: '#9F4100' }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-sm font-semibold uppercase"
                          style={{ color: '#310F0B' }}
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
              className="max-w-md p-6 rounded-xl"
              style={{
                backgroundColor: cardBg,
                border: '1px solid #EB9003'
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      #EB9003,
                      #C55500
                    )`
                  }}
                >
                  <Phone className="w-7 h-7" style={{ color: '#310F0B' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase">
                    24/7 Customer Support
                  </div>
                  <div
                    className="text-2xl font-black"
                    style={{ color: '#9F4100' }}
                  >
                    +1 (555) 123-4567
                  </div>
                  <div className="text-sm">
                    Free consultation • No hidden fees
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
