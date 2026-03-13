'use client'

import { useState, useEffect } from 'react'
import { Globe, Package, Users, Award } from 'lucide-react'

// Color palette matching your logo
const colors = {
  darkBrown: '#4A2A14',
  goldenYellow: '#C9A24D',
  orange: '#8C1D08',
  darkOrange: '#6B1A0A',
  lightTan: '#E6D3A3',
  warmWhite: '#FAF8F5',
  offWhite: '#F5F3EF'
}

const stats = [
  { icon: Globe, value: 150, suffix: '+', label: 'Countries Served' },
  { icon: Package, value: 500, suffix: 'K+', label: 'Packages Delivered' },
  { icon: Users, value: 50, suffix: 'K+', label: 'Happy Clients' },
  { icon: Award, value: 25, label: 'Years Experience' }
]

export default function Stats() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 30
      let current = 0

      const interval = setInterval(() => {
        current += increment

        if (current >= stat.value) {
          current = stat.value
          clearInterval(interval)
        }

        setAnimatedStats(prev => {
          const newStats = [...prev]
          newStats[index] = Math.floor(current)
          return newStats
        })

      }, 20)

      return interval
    })

    return () => intervals.forEach(interval => clearInterval(interval))

  }, [])

  return (
    <section
      className="py-10 sm:py-12 lg:py-16 relative font-light tracking-wide"
      style={{ backgroundColor: colors.warmWhite }}
    >

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A2A14' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`
            }}
          >
            Our Impact in Numbers
          </h2>

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto font-light tracking-wide bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.orange})`
            }}
          >
            Trusted by businesses worldwide
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-5xl mx-auto">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="text-center p-5 lg:p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.lightTan}50`
              }}
            >

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm"
                style={{
                  backgroundColor: `${colors.goldenYellow}20`,
                  border: `1px solid ${colors.goldenYellow}30`
                }}
              >

                <stat.icon
                  className="h-5 w-5"
                  style={{
                    color:
                      index === 0 ? colors.darkBrown :
                      index === 1 ? colors.goldenYellow :
                      index === 2 ? colors.orange :
                      colors.darkBrown
                  }}
                />

              </div>

              {/* Number */}
              <div
                className="text-2xl lg:text-3xl font-normal tracking-wide mb-1"
                style={{ color: colors.darkBrown }}
              >
                {animatedStats[index]}
                <span style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p
                className="text-sm font-light tracking-wide"
                style={{ color: colors.darkBrown, opacity: 0.8 }}
              >
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}