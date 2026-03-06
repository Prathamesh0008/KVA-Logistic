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
  <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section - Minimal */}
   <section className="py-8">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
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
<section className="flex-1 py-4">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Services Grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {/* Road Freight */}
              <div
                className="p-6 md:p-8 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl"
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
                
                <p className="text-xs sm:text-sm mb-4" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Comprehensive overland transportation solutions across North America with real-time GPS tracking.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["LTL & FTL", "Express Delivery", "Temperature Controlled", "Hazmat Certified"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.goldenYellow }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ocean Shipping */}
              <div
                className="p-6 md:p-8 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl"
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
                
                <p className="text-xs sm:text-sm mb-4" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Global sea freight with container optimization and full customs clearance services.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["FCL & LCL", "Port-to-Port", "Customs Brokerage", "Container Tracking", "Insurance"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.orange }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Air Freight */}
              <div
                className="p-6 md:p-8 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl"
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
                
                <p className="text-xs sm:text-sm mb-4" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Express air cargo with priority handling for time-critical shipments and global coverage.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["Same Day", "Next Flight Out", "Door-to-Door", "Charter Services", "Dangerous Goods"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.darkBrown }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

         
            
          </div>
        </div>
      </section>
    </div>
  );
}