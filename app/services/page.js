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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - smaller */}
      <section className="relative py-8 md:py-10 bg-gray-50 overflow-hidden flex-shrink-0">
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
            

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
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
              className="text-sm md:text-base max-w-2xl mx-auto"
              style={{
                background:
                  "linear-gradient(90deg, #8B5A2B 200%, #D99A3E 100%, #F4A261 200%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.95,
              }}
            >
              End-to-end supply chain management designed to optimize
              efficiency, reduce costs, and deliver exceptional reliability
            </p>
          </div>
        </div>
      </section>

      {/* Services Content - smaller */}
      <section className="py-6 md:py-8 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Stats Banner - smaller */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              <div
                className="p-3 rounded-xl text-center"
                style={{
                  backgroundColor: colors.goldenYellow + "10",
                  border: `1px solid ${colors.goldenYellow}30`,
                  color: colors.darkBrown,
                }}
              >
                <div className="text-lg md:text-xl font-bold">99.8%</div>
                <div className="text-xs">On-Time Delivery</div>
              </div>
              <div
                className="p-3 rounded-xl text-center"
                style={{
                  backgroundColor: colors.orange + "10",
                  border: `1px solid ${colors.orange}30`,
                  color: colors.darkBrown,
                }}
              >
                <div className="text-lg md:text-xl font-bold">150+</div>
                <div className="text-xs">Countries</div>
              </div>
              <div
                className="p-3 rounded-xl text-center"
                style={{
                  backgroundColor: colors.goldenYellow + "10",
                  border: `1px solid ${colors.goldenYellow}30`,
                  color: colors.darkBrown,
                }}
              >
                <div className="text-lg md:text-xl font-bold">24/7</div>
                <div className="text-xs">Support</div>
              </div>
              <div
                className="p-3 rounded-xl text-center"
                style={{
                  backgroundColor: colors.orange + "10",
                  border: `1px solid ${colors.orange}30`,
                  color: colors.darkBrown,
                }}
              >
                <div className="text-lg md:text-xl font-bold">25+</div>
                <div className="text-xs">Years Experience</div>
              </div>
            </div>

            {/* Services Grid - smaller */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Road Freight */}
              <div
                className="group p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
                  }}
                >
                  <div className="text-white font-bold text-lg">🚚</div>
                </div>

                <h3
                  className="text-base md:text-lg font-bold mb-1.5"
                  style={{ color: colors.darkBrown }}
                >
                  Road Freight
                </h3>

                <p
                  className="text-xs mb-2 line-clamp-2"
                  style={{ color: colors.darkBrown, opacity: 0.8 }}
                >
                  Comprehensive overland transportation solutions across North
                  America with real-time GPS tracking.
                </p>

                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.goldenYellow }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      LTL & FTL
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.orange }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Temp Control
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.darkOrange }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Hazmat
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.goldenYellow }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Express
                    </span>
                  </div>
                </div>
              </div>

              {/* Ocean Shipping */}
              <div
                className="group p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
                  }}
                >
                  <div className="text-white font-bold text-lg">🚢</div>
                </div>

                <h3
                  className="text-base md:text-lg font-bold mb-1.5"
                  style={{ color: colors.darkBrown }}
                >
                  Ocean Shipping
                </h3>

                <p
                  className="text-xs mb-2 line-clamp-2"
                  style={{ color: colors.darkBrown, opacity: 0.8 }}
                >
                  Global sea freight with container optimization and full
                  customs clearance services.
                </p>

                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.orange }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      FCL & LCL
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.darkOrange }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Port-to-Port
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.goldenYellow }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Customs
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.orange }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Bulk
                    </span>
                  </div>
                </div>
              </div>

              {/* Air Freight */}
              <div
                className="group p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.lightTan})`,
                  }}
                >
                  <div className="text-white font-bold text-lg">✈️</div>
                </div>

                <h3
                  className="text-base md:text-lg font-bold mb-1.5"
                  style={{ color: colors.darkBrown }}
                >
                  Air Freight
                </h3>

                <p
                  className="text-xs mb-2 line-clamp-2"
                  style={{ color: colors.darkBrown, opacity: 0.8 }}
                >
                  Express air cargo with priority handling for time-critical
                  shipments and global coverage.
                </p>

                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.darkBrown }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Same Day
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.lightTan }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Next Flight
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.darkBrown }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Door-to-Door
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-1.5 h-1.5 rounded-full mr-1.5"
                      style={{ backgroundColor: colors.lightTan }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      Charter
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - smaller */}
            <div
              className="mt-4 p-4 rounded-xl text-center"
              style={{
                background: `linear-gradient(135deg, ${colors.goldenYellow}15, ${colors.orange}15)`,
                border: `1px solid ${colors.goldenYellow}30`,
              }}
            >
              <h3
                className="text-base md:text-lg font-bold mb-1.5"
                style={{ color: colors.darkBrown }}
              >
                Need Custom Logistics Solutions?
              </h3>
              <p
                className="mb-2 text-xs max-w-lg mx-auto"
                style={{ color: colors.darkBrown, opacity: 0.8 }}
              >
                Our logistics experts will design a tailored solution for your business
              </p>
              <div className="flex flex-row gap-2 justify-center">
                <button
                  className="px-3 py-1.5 rounded-md font-bold transition-all hover:shadow-md text-xs"
                  style={{
                    backgroundColor: colors.goldenYellow,
                    color: colors.darkBrown,
                    boxShadow: `0 2px 4px ${colors.goldenYellow}40`,
                  }}
                >
                  Custom Quote
                </button>
                <button
                  className="px-3 py-1.5 rounded-md font-bold transition-all hover:shadow-md border text-xs"
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