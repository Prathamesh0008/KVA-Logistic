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
      const increment = stat.value / 50
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
      }, 30)
      
      return interval
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [])

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.warmWhite }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A2A14' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2
  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
  }}
>
  Our Impact in Numbers
</h2>

          <p
  className="text-lg sm:text-xl max-w-2xl mx-auto bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.orange || '#e67e22'})`,
  }}
>
  Trusted by businesses worldwide for reliable logistics solutions
</p>

        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 lg:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.lightTan}50`
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm"
                style={{ 
                  backgroundColor: `${colors.goldenYellow}20`,
                  border: `1px solid ${colors.goldenYellow}30`
                }}
              >
                <stat.icon 
                  className="h-8 w-8" 
                  style={{ 
                    color: index === 0 ? colors.darkBrown : 
                           index === 1 ? colors.goldenYellow : 
                           index === 2 ? colors.orange : colors.darkBrown 
                  }} 
                />
              </div>
              <div 
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ 
                  color: colors.darkBrown  // All numbers in dark brown
                }}
              >
                {animatedStats[index]}
                <span style={{ color: colors.darkBrown, opacity: 0.8 }}>{stat.suffix}</span>
              </div>
              <p 
                className="text-lg font-medium"
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