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
import { useEffect, useState } from "react";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="relative min-h-[100dvh] flex items-center py-4 sm:py-6 md:py-8 lg:py-0"
      style={{ backgroundColor: background }}
    >
      {/* Background image with responsive handling */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Banner 2.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />

      {/* Solid overlay - Desktop */}
      <div
        className="absolute inset-0 hidden md:block"
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

      {/* Mobile overlay - Gradient from bottom */}
      <div className="absolute inset-0 block md:hidden bg-gradient-to-t from-[#310F0B] via-[#310F0B]/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            {/* Badge */}
            <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 animate-fadeIn">
              <div
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg md:rounded-xl"
                style={{
                  background: uiGradient,
                  border: "1px solid #9F4100",
                }}
              >
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" style={{ color: "#310F0B" }} />
                <span
                  className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide"
                  style={{ color: "#310F0B" }}
                >
                  TRUSTED SINCE 1998
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                Global Logistics
              </span>
              <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                Storage Solution
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xl sm:max-w-2xl lg:max-w-3xl mb-4 sm:mb-5 md:mb-6 lg:mb-7 leading-relaxed"
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

            {/* CTAs - Responsive stacking */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
              <Link
                href="/contact"
                className="group px-4 sm:px-5 md:px-6 lg:px-7 py-3 sm:py-3.5 md:py-4 rounded-lg md:rounded-xl font-bold 
                  flex items-center justify-center gap-2 sm:gap-2.5 
                  transition-all duration-300 hover:scale-[1.02] active:scale-95
                  bg-[#EB9003] text-[#310F0B]
                  border-2 border-[#EB9003] text-sm sm:text-base md:text-lg w-full xs:w-auto"
                style={{
                  boxShadow: "0 4px 20px rgba(235, 144, 3, 0.3)",
                }}
              >
                <Truck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>Get Storage Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tracking"
                className="group px-4 sm:px-5 md:px-6 lg:px-7 py-3 sm:py-3.5 md:py-4 rounded-lg md:rounded-xl font-bold 
                  border-2 flex items-center justify-center gap-2 sm:gap-2.5 
                  transition-all duration-300 hover:scale-[1.02] active:scale-95
                  text-sm sm:text-base md:text-lg w-full xs:w-auto"
                style={{
                  background: uiGradient,
                  borderColor: "#EB9003",
                  color: "#310F0B",
                  boxShadow: "0 4px 20px rgba(197, 85, 0, 0.3)",
                }}
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>Track Shipment</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse" />
              </Link>
            </div>

            {/* Contact Card */}
            <div
              className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl transition-transform duration-300 hover:scale-[1.01] mb-5 sm:mb-6 md:mb-7 lg:mb-8"
              style={{
                backgroundColor: cardBg,
                border: "1px solid #EB9003",
                boxShadow: "0 4px 20px rgba(235, 144, 3, 0.15)",
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div
                  className="p-2 sm:p-2.5 md:p-3 rounded-lg shrink-0"
                  style={{
                    background: uiGradient,
                  }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: "#310F0B" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wide" style={{ color: "#310F0B" }}>
                    24/7 CUSTOMER SUPPORT
                  </div>
                  <div
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate"
                    style={{ color: "#9F4100" }}
                  >
                    +1 (555) 123-4567
                  </div>
                  <div
                    className="text-[10px] sm:text-xs md:text-sm truncate"
                    style={{ color: "#310F0B" }}
                  >
                    Free consultation • No hidden fees
                  </div>
              </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              {statsData.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: cardBg,
                      border: "1px solid #C55500",
                      boxShadow: "0 4px 12px rgba(197, 85, 0, 0.1)",
                    }}
                  >
                    <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-5">
                      <div
                        className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-lg shrink-0"
                        style={{
                          background: uiGradient,
                        }}
                      >
                        <Icon
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                          style={{ color: "#310F0B" }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight"
                          style={{ color: "#9F4100" }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase leading-tight truncate"
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

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        /* Responsive breakpoint for extra small devices */
        @media (min-width: 480px) {
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:w-auto {
            width: auto;
          }
          .xs\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}