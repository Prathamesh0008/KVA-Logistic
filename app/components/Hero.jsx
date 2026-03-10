"use client";

import {
  ArrowRight,
  Shield,
  Globe,
  Truck,
  Package,
  Phone,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const background = "#000000";
const cardBg = "#F5F3EF";

const uiGradient = `linear-gradient(
  90deg,
  #EB9003 0%,
  #EB9003 33%,
  #C55500 100%
)`;

const statsData = [
  { value: "99.8%", label: "Safe Delivery Rate", icon: Shield },
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
className="snasm-font relative w-full min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"      style={{ backgroundColor: background }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover md:bg-cover bg-center md:bg-left bg-no-repeat"
        style={{
          backgroundImage: "url('/Banner 2.jpg')",
        }}
      />

      {/* Desktop Overlay */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: `linear-gradient(
            90deg,
            #310F0B 0%,
            rgba(49,15,11,0.95) 30%,
            rgba(49,15,11,0.7) 50%,
            transparent 100%
          )`,
        }}
      />

      {/* Mobile Overlay */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#310F0B] via-[#310F0B]/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-5 sm:mb-6 md:mb-8">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl"
                style={{
                  background: uiGradient,
                  border: "1px solid #9F4100",
                }}
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#310F0B" }} />

                <span
                  className="text-xs sm:text-sm font-bold tracking-wide"
                  style={{ color: "#310F0B" }}
                >
                  TRUSTED SINCE 1998
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="snasm-font">
<h1 className="font-black leading-tight mb-4 sm:mb-6
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
xl:text-7xl
max-w-[90%] sm:max-w-full">

                <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                  Global Logistics
                </span>

                <span className="block bg-gradient-to-r from-yellow-100 via-[#EB9003] to-[#9F4100] bg-clip-text text-transparent">
                  Storage Solution
                </span>

              </h1>

              <p
                className="leading-relaxed mb-6 sm:mb-8
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                max-w-xl"
                style={{ color: "#EB9003" }}
              >
                Professional warehousing, distribution, and transportation services —
                <span className="font-bold" style={{ color: "#9F4100" }}>
                  secure
                </span>,{" "}
                <span className="font-bold" style={{ color: "#9F4100" }}>
                  efficient
                </span>{" "}
                &{" "}
                <span className="font-bold" style={{ color: "#9F4100" }}>
                  reliable
                </span>.
              </p>

            </div>

            {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">

              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2
                px-5 py-3 sm:px-6 sm:py-4
                rounded-xl font-bold
                text-sm sm:text-base
                transition hover:scale-[1.03] active:scale-95
                bg-[#EB9003] text-[#310F0B] border-2 border-[#EB9003]"
                style={{
                  boxShadow: "0 4px 20px rgba(235,144,3,0.3)",
                }}
              >
                <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Storage Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tracking"
                className="group flex items-center justify-center gap-2
                px-5 py-3 sm:px-6 sm:py-4
                rounded-xl font-bold
                text-sm sm:text-base
                border-2 transition hover:scale-[1.03] active:scale-95"
                style={{
                  background: uiGradient,
                  borderColor: "#EB9003",
                  color: "#310F0B",
                  boxShadow: "0 4px 20px rgba(197,85,0,0.3)",
                }}
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                Track Shipment
                <Sparkles className="w-4 h-4 animate-pulse" />
              </Link>

            </div>

            {/* Contact Card */}
            <div
            className="p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 w-full max-w-xl"
              style={{
                backgroundColor: cardBg,
                border: "1px solid #EB9003",
                boxShadow: "0 4px 20px rgba(235,144,3,0.15)",
              }}
            >
              <div className="flex items-center gap-3 sm:gap-4">

                <div
                  className="p-2 sm:p-3 rounded-lg"
                  style={{ background: uiGradient }}
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#310F0B" }} />
                </div>

                <div>

                  <div
                    className="text-xs sm:text-sm font-semibold uppercase"
                    style={{ color: "#310F0B" }}
                  >
                    24/7 CUSTOMER SUPPORT
                  </div>

                  <div
                    className="text-lg sm:text-xl font-bold"
                    style={{ color: "#9F4100" }}
                  >
                    +31 6 84987360
                  </div>

                  <div
                    className="text-xs sm:text-sm"
                    style={{ color: "#310F0B" }}
                  >
                    Free consultation • No hidden fees
                  </div>

                </div>

              </div>
            </div>

            {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl">

              {statsData.map((s, i) => {
                const Icon = s.icon;

                return (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-xl hover:scale-[1.02] transition"
                    style={{
                      backgroundColor: cardBg,
                      border: "1px solid #C55500",
                    }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">

                      <div
                        className="p-2 sm:p-3 rounded-lg"
                        style={{ background: uiGradient }}
                      >
                        <Icon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          style={{ color: "#310F0B" }}
                        />
                      </div>

                      <div>

                        <div
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: "#9F4100" }}
                        >
                          {s.value}
                        </div>

                        <div
                          className="text-xs sm:text-sm font-semibold uppercase"
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