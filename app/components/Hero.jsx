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
      className="relative min-h-screen flex items-start overflow-hidden"
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

      {/* Solid overlay */}
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

      {/* Mobile overlay - adjusted for better visibility */}
      <div className="absolute inset-0 block md:hidden bg-gradient-to-t from-[#310F0B] via-[#310F0B]/80 to-transparent opacity-90" />

      {/* Content - adjusted padding for mobile */}
      <div className="relative z-10 w-full py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg md:px-4 md:py-2 md:rounded-xl"
                style={{
                  background: uiGradient,
                  border: "1px solid #9F4100",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Award className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#310F0B" }} />
                <span
                  className="text-[10px] md:text-xs font-bold tracking-wide"
                  style={{ color: "#310F0B" }}
                >
                  TRUSTED LOGISTICS PARTNER SINCE 1998
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                Global Logistics
              </span>
              <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                Storage Solution
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg max-w-xl mb-4 leading-relaxed"
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

            {/* CTAs - stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Link
                href="/contact"
                className="group px-5 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold 
                  flex items-center justify-center gap-2 
                  transition-all duration-300 hover:scale-[1.02] active:scale-95
                  bg-[#EB9003] text-[#310F0B]
                  border-2 border-[#EB9003]
                  shadow-lg hover:shadow-xl text-sm md:text-base"
                style={{
                  boxShadow: "0 4px 20px rgba(235, 144, 3, 0.3)",
                }}
              >
                <Truck className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>Get Storage Quote</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tracking"
                className="group px-5 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold 
                  border-2 flex items-center justify-center gap-2 
                  transition-all duration-300 hover:scale-[1.02] active:scale-95
                  shadow-lg hover:shadow-xl text-sm md:text-base"
                style={{
                  background: uiGradient,
                  borderColor: "#EB9003",
                  color: "#310F0B",
                  boxShadow: "0 4px 20px rgba(197, 85, 0, 0.3)",
                }}
              >
                <Package className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>Track Shipment</span>
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-pulse flex-shrink-0" />
              </Link>
            </div>

            {/* Contact - full width on mobile */}
            <div
              className="w-full max-w-md p-3 md:p-4 rounded-lg md:rounded-xl transition-transform duration-300 hover:scale-[1.01] mb-4"
              style={{
                backgroundColor: cardBg,
                border: "1px solid #EB9003",
                boxShadow: "0 4px 20px rgba(235, 144, 3, 0.15)",
              }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div
                  className="p-1.5 md:p-2 rounded-lg flex-shrink-0"
                  style={{
                    background: uiGradient,
                  }}
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" style={{ color: "#310F0B" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] md:text-xs font-semibold uppercase mb-0.5 md:mb-1" style={{ color: "#310F0B" }}>
                    24/7 CUSTOMER SUPPORT
                  </div>
                  <div
                    className="text-base md:text-lg font-black truncate mb-0.5 md:mb-1"
                    style={{ color: "#9F4100" }}
                  >
                    +1 (555) 123-4567
                  </div>
                  <div
                    className="text-[10px] md:text-xs truncate"
                    style={{ color: "#310F0B" }}
                  >
                    Free consultation • No hidden fees
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - stack on mobile, grid on larger */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-3xl">
              {statsData.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="p-3 md:p-4 rounded-lg md:rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: cardBg,
                      border: "1px solid #C55500",
                      boxShadow: "0 4px 12px rgba(197, 85, 0, 0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div
                        className="p-1.5 md:p-2 rounded-lg flex-shrink-0"
                        style={{
                          background: uiGradient,
                        }}
                      >
                        <Icon
                          className="w-4 h-4 md:w-5 md:h-5"
                          style={{ color: "#310F0B" }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className="text-lg md:text-xl font-black truncate"
                          style={{ color: "#9F4100" }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-[10px] md:text-xs font-semibold uppercase truncate"
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
          </div>
        </div>
      </div>
    </section>
  );
}