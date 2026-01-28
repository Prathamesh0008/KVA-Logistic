export default function ServicesPage() {
  // Color palette matching your home page
  const colors = {
    darkBrown: '#521903',     // Primary dark
    goldenYellow: '#f8b936',  // Primary accent
    orange: '#dc8c18',       // Secondary accent
    darkOrange: '#9f4409',   // Dark accent
    lightTan: '#c29f85'      // Light accent
  }

  return (
    <div className="">
      {/* Hero Section - Matches home page */}
      <section className="relative py-20 md:py-24 bg-gray-50 overflow-hidden">
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
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              style={{
                backgroundColor: colors.goldenYellow,
                color: colors.darkBrown,
                border: `1px solid ${colors.darkBrown}20`
              }}
            >
              <span className="text-sm font-semibold">PREMIUM LOGISTICS SERVICES</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: colors.darkBrown }}
            >
              <span className="block">Comprehensive</span>
              <span 
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Logistics Solutions
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
              style={{ color: colors.darkBrown, opacity: 0.8 }}
            >
              End-to-end supply chain management designed to optimize efficiency, 
              reduce costs, and deliver exceptional reliability
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div 
                className="p-6 rounded-xl text-center"
                style={{
                  backgroundColor: colors.goldenYellow + '10',
                  border: `1px solid ${colors.goldenYellow}30`,
                  color: colors.darkBrown
                }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">99.8%</div>
                <div className="text-sm">On-Time Delivery</div>
              </div>
              <div 
                className="p-6 rounded-xl text-center"
                style={{
                  backgroundColor: colors.orange + '10',
                  border: `1px solid ${colors.orange}30`,
                  color: colors.darkBrown
                }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">150+</div>
                <div className="text-sm">Countries Served</div>
              </div>
              <div 
                className="p-6 rounded-xl text-center"
                style={{
                  backgroundColor: colors.goldenYellow + '10',
                  border: `1px solid ${colors.goldenYellow}30`,
                  color: colors.darkBrown
                }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div 
                className="p-6 rounded-xl text-center"
                style={{
                  backgroundColor: colors.orange + '10',
                  border: `1px solid ${colors.orange}30`,
                  color: colors.darkBrown
                }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Road Freight */}
              <div 
                className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`
                  }}
                >
                  <div className="text-white font-bold text-2xl">🚚</div>
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: colors.darkBrown }}
                >
                  Road Freight
                </h3>
                
                <p className="mb-6" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  Comprehensive overland transportation solutions across North America with real-time GPS tracking and specialized handling.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.goldenYellow }}></div>
                    <span style={{ color: colors.darkBrown }}>LTL & FTL Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.orange }}></div>
                    <span style={{ color: colors.darkBrown }}>Temperature Controlled</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.darkOrange }}></div>
                    <span style={{ color: colors.darkBrown }}>Hazardous Materials</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.goldenYellow }}></div>
                    <span style={{ color: colors.darkBrown }}>Express Delivery</span>
                  </div>
                </div>
              </div>

              {/* Ocean Shipping */}
              <div 
                className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`
                  }}
                >
                  <div className="text-white font-bold text-2xl">🚢</div>
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: colors.darkBrown }}
                >
                  Ocean Shipping
                </h3>
                
                <p className="mb-6" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  Global sea freight with container optimization, port management, and full customs clearance services.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.orange }}></div>
                    <span style={{ color: colors.darkBrown }}>FCL & LCL Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.darkOrange }}></div>
                    <span style={{ color: colors.darkBrown }}>Port-to-Port</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.goldenYellow }}></div>
                    <span style={{ color: colors.darkBrown }}>Customs Clearance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.orange }}></div>
                    <span style={{ color: colors.darkBrown }}>Bulk Shipping</span>
                  </div>
                </div>
              </div>

              {/* Air Freight */}
              <div 
                className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.lightTan})`
                  }}
                >
                  <div className="text-white font-bold text-2xl">✈️</div>
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: colors.darkBrown }}
                >
                  Air Freight
                </h3>
                
                <p className="mb-6" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  Express air cargo with priority handling for time-critical shipments and global coverage.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.darkBrown }}></div>
                    <span style={{ color: colors.darkBrown }}>Same Day Service</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.lightTan }}></div>
                    <span style={{ color: colors.darkBrown }}>Next Flight Out</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.darkBrown }}></div>
                    <span style={{ color: colors.darkBrown }}>Door-to-Door</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.lightTan }}></div>
                    <span style={{ color: colors.darkBrown }}>Charter Options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div 
              className="mt-16 p-8 md:p-12 rounded-3xl text-center"
              style={{
                background: `linear-gradient(135deg, ${colors.goldenYellow}15, ${colors.orange}15)`,
                border: `1px solid ${colors.goldenYellow}30`
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.darkBrown }}>
                Need Custom Logistics Solutions?
              </h3>
              <p className="mb-8 max-w-2xl mx-auto" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                Our logistics experts will design a tailored solution for your specific business requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.goldenYellow,
                    color: colors.darkBrown,
                    boxShadow: `0 4px 14px ${colors.goldenYellow}40`
                  }}
                >
                  Request Custom Quote
                </button>
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg border-2"
                  style={{ 
                    borderColor: colors.goldenYellow,
                    color: colors.darkBrown,
                    backgroundColor: 'white'
                  }}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}