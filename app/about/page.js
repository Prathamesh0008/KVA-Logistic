import { Target, Shield, Users, TrendingUp, Award, Globe, Clock, Truck } from 'lucide-react'

export default function AboutPage() {
  // Color palette matching your home page
  const colors = {
    darkBrown: '#521903',     // Primary dark
    goldenYellow: '#f8b936',  // Primary accent
    orange: '#dc8c18',       // Secondary accent
    darkOrange: '#9f4409',   // Dark accent
    lightTan: '#c29f85'      // Light accent
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - compact */}
      <section className="relative py-10 md:py-12 bg-gray-50 overflow-hidden flex-shrink-0">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
              style={{ color: colors.darkBrown }}
            >
              <span
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                About
              </span>
              <span 
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                KVA Logistics
              </span>
            </h1>
            
            <p
              className="text-sm md:text-base max-w-2xl mx-auto"
              style={{
                color: colors.darkBrown,
                opacity: 0.9
              }}
            >
              Leading the logistics industry with innovation, reliability, and customer-first approach for over two decades
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - compact */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div 
              className="p-4 rounded-lg text-center"
              style={{
                backgroundColor: colors.goldenYellow + '10',
                border: `1px solid ${colors.goldenYellow}30`,
                color: colors.darkBrown
              }}
            >
              <div className="text-xl md:text-2xl font-bold">25+</div>
              <div className="text-xs">Years Exp</div>
            </div>
            <div 
              className="p-4 rounded-lg text-center"
              style={{
                backgroundColor: colors.orange + '10',
                border: `1px solid ${colors.orange}30`,
                color: colors.darkBrown
              }}
            >
              <div className="text-xl md:text-2xl font-bold">150+</div>
              <div className="text-xs">Countries</div>
            </div>
            <div 
              className="p-4 rounded-lg text-center"
              style={{
                backgroundColor: colors.goldenYellow + '10',
                border: `1px solid ${colors.goldenYellow}30`,
                color: colors.darkBrown
              }}
            >
              <div className="text-xl md:text-2xl font-bold">99.8%</div>
              <div className="text-xs">On-Time</div>
            </div>
            <div 
              className="p-4 rounded-lg text-center"
              style={{
                backgroundColor: colors.orange + '10',
                border: `1px solid ${colors.orange}30`,
                color: colors.darkBrown
              }}
            >
              <div className="text-xl md:text-2xl font-bold">500M+</div>
              <div className="text-xs">Shipments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - compact */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Mission */}
              <div 
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{
                      background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`
                    }}
                  >
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold" style={{ color: colors.darkBrown }}>Our Mission</h2>
                </div>
                <p className="mb-4 text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  To revolutionize global logistics through innovative technology and sustainable practices, 
                  making world-class shipping accessible to businesses of all sizes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="p-1.5 rounded-lg mr-3" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                      <Target className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Precision & Accuracy</h3>
                      <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>99.8% on-time delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1.5 rounded-lg mr-3" style={{ backgroundColor: colors.orange + '20' }}>
                      <Shield className="h-4 w-4" style={{ color: colors.orange }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Security & Trust</h3>
                      <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>$500M cargo insurance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1.5 rounded-lg mr-3" style={{ backgroundColor: colors.darkBrown + '20' }}>
                      <Clock className="h-4 w-4" style={{ color: colors.darkBrown }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>24/7 Reliability</h3>
                      <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>Round-the-clock support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Vision */}
              <div 
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{
                      background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`
                    }}
                  >
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold" style={{ color: colors.darkBrown }}>Our Vision</h2>
                </div>
                <p className="mb-4 text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  To create a seamlessly connected global supply chain network that drives economic growth 
                  while minimizing environmental impact.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="p-1.5 rounded-lg mr-3" style={{ backgroundColor: colors.orange + '20' }}>
                      <TrendingUp className="h-4 w-4" style={{ color: colors.orange }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Sustainable Growth</h3>
                      <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>Carbon-neutral options</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1.5 rounded-lg mr-3" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                      <Users className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Global Community</h3>
                      <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>150+ countries served</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1.5 rounded-lg mr-3" style={{ backgroundColor: colors.darkOrange + '20' }}>
                      <Truck className="h-4 w-4" style={{ color: colors.darkOrange }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Innovation Driven</h3>
                      <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>Advancing technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - compact */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-lg md:text-xl font-bold mb-2"
              style={{
                background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Core Values
            </h2>

            <p
              className="text-xs mb-4 max-w-2xl mx-auto"
              style={{
                color: colors.darkBrown,
                opacity: 0.8
              }}
            >
              The principles that guide our decisions and define our culture
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div 
                className="p-4 rounded-xl text-center"
                style={{
                  backgroundColor: colors.goldenYellow + '10',
                  border: `1px solid ${colors.goldenYellow}30`
                }}
              >
                <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: colors.goldenYellow }}>
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: colors.darkBrown }}>Integrity</h3>
                <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  Honest and transparent
                </p>
              </div>
              
              <div 
                className="p-4 rounded-xl text-center"
                style={{
                  backgroundColor: colors.orange + '10',
                  border: `1px solid ${colors.orange}30`
                }}
              >
                <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: colors.orange }}>
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: colors.darkBrown }}>Excellence</h3>
                <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  Perfection in every delivery
                </p>
              </div>
              
              <div 
                className="p-4 rounded-xl text-center"
                style={{
                  backgroundColor: colors.darkBrown + '10',
                  border: `1px solid ${colors.darkBrown}30`
                }}
              >
                <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: colors.darkBrown }}>
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: colors.darkBrown }}>Customer Focus</h3>
                <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  Clients' needs first
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}