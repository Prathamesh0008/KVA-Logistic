"use client";

import {
  ArrowRight,
  Shield,
  Clock,
  Globe,
  Truck,
  Package,
  Phone,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

// 🎨 BASE COLORS
const background = "#000000";
const cardBg = "#F5F3EF";

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
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

// ✅ UI GRADIENT (BUTTON / BADGE)
const uiGradient = `linear-gradient(
  90deg,
  #EB9003 0%,
  #EB9003 33%,
  #C55500 100%
)`;

const statsData = [
  { value: "99.8%", label: "Safe Delivery Rate", icon: Shield },
  { value: "24/7", label: "Customer Support", icon: Clock },
  { value: "150+", label: "Countries Covered", icon: Globe },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: background }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Banner 2.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Solid overlay - improved for mobile */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            90deg,
            #310F0B 0%,
            rgba(49, 15, 11, 0.95) 30%,
            rgba(49, 15, 11, 0.7) 50%,
            transparent 100%
          )`,
        }}
      />

      {/* Mobile overlay for better readability */}
      <div className="absolute inset-0 block md:hidden bg-gradient-to-t from-[#310F0B] via-transparent to-transparent opacity-80" />

      {/* Content */}
      <div className="relative z-10 w-full py-12 lg:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge - improved positioning */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl"
                style={{
                  background: uiGradient,
                  border: "1px solid #9F4100",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Award className="w-4 h-4 md:w-5 md:h-5" style={{ color: "#310F0B" }} />
                <span
                  className="text-xs md:text-sm font-bold tracking-wide"
                  style={{ color: "#310F0B" }}
                >
                  TRUSTED LOGISTICS PARTNER SINCE 1998
                </span>
              </div>
            </div>

            {/* Heading - improved responsive sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                Global Logistics
              </span>
              <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                Storage Solution
              </span>
            </h1>

            {/* Description - improved responsive sizing */}
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mb-8 md:mb-10 leading-relaxed"
              style={{ color: "#EB9003" }}
            >
              Professional warehousing, distribution, and transportation
              services —{" "}
              <span className="font-bold" style={{ color: "#9F4100" }}>
                secure
              </span>
              ,{" "}
              <span className="font-bold" style={{ color: "#9F4100" }}>
                efficient
              </span>{" "}
              &{" "}
              <span className="font-bold" style={{ color: "#9F4100" }}>
                reliable
              </span>
              .
            </p>

            {/* CTAs - improved responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <Link
                href="/contact"
                className="group px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold 
                  flex items-center justify-center gap-2 md:gap-3 
                  transition-all duration-300 hover:scale-[1.02] active:scale-95
                  bg-[#EB9003] text-[#310F0B]
                  border-2 border-[#EB9003]
                  shadow-lg hover:shadow-xl"
                style={{
                  boxShadow: "0 4px 20px rgba(235, 144, 3, 0.3)",
                }}
              >
                <Truck className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-sm md:text-base">Get Storage Quote</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tracking"
                className="group px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold 
                  border-2 flex items-center justify-center gap-2 md:gap-3 
                  transition-all duration-300 hover:scale-[1.02] active:scale-95
                  shadow-lg hover:shadow-xl"
                style={{
                  background: uiGradient,
                  borderColor: "#EB9003",
                  color: "#310F0B",
                  boxShadow: "0 4px 20px rgba(197, 85, 0, 0.3)",
                }}
              >
                <Package className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-sm md:text-base">Track Shipment</span>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse flex-shrink-0" />
              </Link>
            </div>

            {/* Stats - improved responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mb-8 md:mb-12">
              {statsData.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="p-4 md:p-6 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: cardBg,
                      border: "1px solid #C55500",
                      boxShadow: "0 4px 12px rgba(197, 85, 0, 0.1)",
                    }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div
                        className="p-2 md:p-3 rounded-lg flex-shrink-0"
                        style={{
                          background: uiGradient,
                        }}
                      >
                        <Icon
                          className="w-5 h-5 md:w-7 md:h-7"
                          style={{ color: "#310F0B" }}
                        />
                      </div>
                      <div className="min-w-0">
                        <div
                          className="text-xl md:text-2xl lg:text-3xl font-black truncate"
                          style={{ color: "#9F4100" }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-xs md:text-sm font-semibold uppercase truncate"
                          style={{ color: "#310F0B" }}
                        >
                          {s.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact - improved responsive layout */}
            <div
              className="max-w-md p-4 md:p-6 rounded-xl transition-transform duration-300 hover:scale-[1.01]"
              style={{
                backgroundColor: cardBg,
                border: "1px solid #EB9003",
                boxShadow: "0 4px 20px rgba(235, 144, 3, 0.15)",
              }}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div
                  className="p-2 md:p-3 rounded-lg flex-shrink-0"
                  style={{
                    background: uiGradient,
                  }}
                >
                  <Phone className="w-5 h-5 md:w-7 md:h-7" style={{ color: "#310F0B" }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs md:text-sm font-semibold uppercase mb-1" style={{ color: "#310F0B" }}>
                    24/7 Customer Support
                  </div>
                  <div
                    className="text-lg md:text-xl lg:text-2xl font-black truncate mb-1"
                    style={{ color: "#9F4100" }}
                  >
                    +1 (555) 123-4567
                  </div>
                  <div
                    className="text-xs md:text-sm truncate"
                    style={{ color: "#310F0B" }}
                  >
                    Free consultation • No hidden fees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator for better UX
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-[#EB9003] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#EB9003] rounded-full mt-2"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}