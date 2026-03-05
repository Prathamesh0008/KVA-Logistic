export default function ServicesPage() {
  // Color palette matching your home page
  const colors = {
    darkBrown: "#521903", // Primary dark
    goldenYellow: "#f8b936", // Primary accent
    orange: "#dc8c18", // Secondary accent
    darkOrange: "#9f4409", // Dark accent
    lightTan: "#c29f85", // Light accent
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
      {/* Hero Section - Minimal */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1">
              <span
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Comprehensive
              </span>
              <span
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Logistics Solutions
              </span>
            </h1>
            <p
              className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
              style={{
                color: colors.darkBrown,
                opacity: 0.8,
              }}
            >
              End-to-end supply chain management designed to optimize
              efficiency, reduce costs, and deliver exceptional reliability
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - No extra footer, no gaps */}
   <section className="flex-1 py-10 lg:py-16">
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {[
                { value: "99.8%", label: "On-Time Delivery", color: colors.goldenYellow },
                { value: "150+", label: "Countries", color: colors.orange },
                { value: "24/7", label: "Support", color: colors.goldenYellow },
                { value: "25+", label: "Years Experience", color: colors.orange }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-2.5 rounded-lg text-center"
                  style={{
                    backgroundColor: stat.color + "10",
                    border: `1px solid ${stat.color}30`,
                  }}
                >
                  <div className="text-base sm:text-lg md:text-xl font-bold" style={{ color: colors.darkBrown }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Services Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {/* Road Freight */}
              <div
                className="p-8 md:p-10 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
                    }}
                  >
                    🚚
                  </div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.darkBrown }}>
                    Road Freight
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm mb-3" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Comprehensive overland transportation solutions across North America with real-time GPS tracking.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["LTL & FTL", "Express"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.goldenYellow }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ocean Shipping */}
              <div
                className="p-4 sm:p-5 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
                    }}
                  >
                    🚢
                  </div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.darkBrown }}>
                    Ocean Shipping
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm mb-3" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Global sea freight with container optimization and full customs clearance services.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["FCL & LCL", "Port-to-Port", "Customs"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.orange }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Air Freight */}
              <div
                className="p-4 sm:p-5 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.lightTan})`,
                    }}
                  >
                    ✈️
                  </div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.darkBrown }}>
                    Air Freight
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm mb-3" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Express air cargo with priority handling for time-critical shipments and global coverage.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["Same Day", "Next Flight", "Door-to-Door", "Charter"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.darkBrown }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section - Only this, no footer */}
            <div
              className="p-4 sm:p-5 rounded-xl text-center"
              style={{
                background: `linear-gradient(135deg, ${colors.goldenYellow}10, ${colors.orange}10)`,
                border: `1px solid ${colors.goldenYellow}30`,
              }}
            >
              <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>
                Need Custom Logistics Solutions?
              </h3>
              <p className="text-xs sm:text-sm mb-3 max-w-lg mx-auto" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                Our logistics experts will design a tailored solution for your business.
              </p>
              <div className="flex flex-row gap-2 justify-center">
                <button
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all hover:shadow-md"
                  style={{
                    backgroundColor: colors.goldenYellow,
                    color: colors.darkBrown,
                  }}
                >
                  Custom Quote
                </button>
                <button
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all hover:shadow-md border"
                  style={{
                    borderColor: colors.goldenYellow,
                    color: colors.darkBrown,
                    backgroundColor: "white",
                  }}
                >
                  Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}