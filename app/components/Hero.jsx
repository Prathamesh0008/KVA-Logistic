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
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const uiGradient = `linear-gradient(
  90deg,
  #EB9003 0%,
  #EB9003 33%,
  #C55500 100%
)`;

const statsData = [
  {
    end: 99.8,
    suffix: "%",
    decimals: 1,
    label: "Safe Delivery Rate",
    icon: Shield,
  },
  {
    end: 150,
    suffix: "+",
    decimals: 0,
    label: "Countries Covered",
    icon: Globe,
  },
];

function CountUp({ end, suffix = "", decimals = 0, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;
        let startTime = null;

        const animate = (time) => {
          if (!startTime) startTime = time;

          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentValue = end * eased;

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const videoRef = useRef(null);

  const [showLoader, setShowLoader] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);

      setTimeout(() => {
        if (videoRef.current && !videoError) {
          videoRef.current.play().catch(() => {});
        }
      }, 100);
    }, 1000);

    return () => clearTimeout(timer);
  }, [videoError]);

  useEffect(() => {
    if (!showLoader) return;

    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
    };
  }, [showLoader]);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current && !videoError) {
        videoRef.current.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", playVideo);
    window.addEventListener("focus", playVideo);

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
      window.removeEventListener("focus", playVideo);
    };
  }, [videoError]);

  const keepVideoPlaying = () => {
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
<section
className="relative w-full min-h-[calc(100vh-84px)] md:h-[calc(100vh-84px)] flex items-center overflow-hidden font-light tracking-wide bg-[#0B4B55]"  style={{ fontFamily: "var(--font-snasm)" }}
>
      {/* Background Video Banner */}
      {!videoError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/Ship.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onPause={keepVideoPlaying}
          onEnded={keepVideoPlaying}
          onError={() => setVideoError(true)}
        />
      )}

      {/* Fallback Background */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B4B55] via-[#0E6A72] to-[#310F0B]" />
      )}

      {/* Desktop dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#310F0B]/70 via-[#310F0B]/30 to-transparent" />

      {/* Mobile overlay */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#310F0B] via-[#310F0B]/90 to-transparent" />

      {/* 1 Second Full Page Loading Overlay */}
      {showLoader && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B4B55]/35 backdrop-blur-md">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#EB9003]/60 bg-white/95 px-8 py-7 shadow-2xl">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#EB9003]/25 blur-xl" />
              <Loader2 className="relative h-9 w-9 animate-spin text-[#EB9003]" />
            </div>

            <div className="text-center">
              <p
                className="text-sm uppercase tracking-[0.18em] text-[#310F0B]"
                style={{ fontFamily: "var(--font-snasm)", fontWeight: 500 }}
              >
                Loading
              </p>

              <p
                className="mt-1 text-xs text-[#6A2A12]"
                style={{ fontFamily: "var(--font-snasm)", fontWeight: 600}}
              >
                Preparing logistics experience...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-8">
        <div className="max-w-[900px]">
            {/* Badge */}
            {/* <div className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: uiGradient,
                  border: "1px solid #9F4100",
                }}
              >
                <Award className="w-5 h-5" style={{ color: "white" }} />

                <span
                  className="text-sm tracking-wide"
                  style={{
                    color: "white",
                    fontFamily: "var(--font-snasm)",
                  }}
                >
                  TRUSTED SINCE 1998
                </span>
              </div>
            </div> */}

            {/* Heading */}
<h1 className="mb-3 overflow-visible text-[38px] sm:text-[46px] md:text-5xl lg:text-[58px] xl:text-[68px] font-light tracking-wide leading-[1.05] drop-shadow-[0_4px_18px_rgba(235,144,3,0.35)]">  <span
    className="
      block overflow-visible pb-1
      bg-gradient-to-r from-yellow-50 via-[#EB9003] to-[#9F4100]
      bg-clip-text text-transparent
      leading-[1.18]
    "
  >
    Global Logistics
  </span>

  <span
    className="
      block overflow-visible pb-3
      bg-gradient-to-r from-[#EB9003] via-yellow-100 to-[#9F4100]
      bg-clip-text text-transparent
      leading-[1.18]
    "
  >
    Storage Solution
  </span>
</h1>

{/* Paragraph */}
{/* Paragraph */}
{/* Paragraph */}
<p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-[1.45] mb-8 max-w-[880px] font-light drop-shadow-[0_2px_10px_rgba(248,185,54,0.35)] text-[#f8b936]">
  Professional warehousing, distribution, and transportation services
  <br />
  secure, efficient &amp; reliable.
</p>
            {/* Buttons */}
         <div className="flex flex-col sm:flex-row gap-3 mb-5">
           <Link
  href="/contact"
  className="
    group flex items-center justify-center gap-3
    px-8 py-5 rounded-xl
    text-xl sm:text-2xl
    transition hover:scale-[1.03] active:scale-95
    bg-[#EB9003] text-white border-2 border-[#EB9003]
  "
  style={{
    boxShadow: "0 4px 20px rgba(235,144,3,0.3)",
    fontFamily: "var(--font-snasm)",
    fontWeight: 400,
  }}
>
  <Truck className="w-6 h-6" />
  Get Storage Quote
  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
</Link>

           <Link
  href="/tracking"
  className="
    group flex items-center justify-center gap-3
    px-8 py-5 rounded-xl
    text-xl sm:text-2xl
    border-2 transition hover:scale-[1.03] active:scale-95
  "
  style={{
    background: uiGradient,
    borderColor: "#EB9003",
    color: "#FFFFFF",
    boxShadow: "0 4px 20px rgba(197,85,0,0.3)",
    fontFamily: "var(--font-snasm)",
    fontWeight: 400,
  }}
>
  <Package className="w-6 h-6" />
  Track Shipment
  <Sparkles className="w-5 h-5 animate-pulse" />
</Link>
            </div>

{/* Stats + Support */}
<div className="w-full max-w-[650px] space-y-2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {statsData.map((s, i) => {
      const Icon = s.icon;

      return (
        <div
          key={i}
        className="group rounded-2xl px-3 py-3 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, #F8F3EA, #EFE8DD)",
            border: "1px solid rgba(159,65,0,0.9)",
            boxShadow: "0 10px 24px rgba(49,15,11,0.22)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #7A2604, #310F0B)",
                boxShadow: "0 7px 16px rgba(49,15,11,0.35)",
              }}
            >
      <Icon className="w-5 h-5" style={{ color: "#FFFFFF" }} />
            </div>

            <div>
              <div
            className="text-xl sm:text-2xl font-normal leading-none tracking-normal"
                style={{ color: "#7A2604", fontFamily: "var(--font-snasm)" }}
              >
                <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals} />
              </div>

              <div
             className="mt-1 text-base sm:text-lg normal-case tracking-normal leading-snug"
                style={{ color: "#310F0B", fontFamily: "var(--font-snasm)", fontWeight: 300}}
              >
                {s.label}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* Support Card */}
  <div
 className="rounded-2xl px-3 py-3 transition-all duration-300 hover:-translate-y-1"
    style={{
      background: "linear-gradient(135deg, #F8F3EA, #EFE8DD)",
      border: "1px solid rgba(159,65,0,0.9)",
      boxShadow: "0 10px 24px rgba(49,15,11,0.22)",
    }}
  >
    <div className="flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: "linear-gradient(135deg, #7A2604, #310F0B)",
          boxShadow: "0 7px 16px rgba(49,15,11,0.35)",
        }}
      >
        <Phone className="w-6 h-6" style={{ color: "#FFFFFF" }} />
      </div>

      <div>
       <div
  className="text-lg sm:text-xl md:text-xl normal-case tracking-normal leading-snug"
  style={{ color: "#310F0B", fontFamily: "var(--font-snasm)", fontWeight: 300 }}
>
  24/7 Customer Support
</div>

<div
  className="mt-2 text-lg sm:text-l md:text-1xl leading-snug"
  style={{ color: "#3A1811", fontFamily: "var(--font-snasm)", fontWeight: 300 }}
>
  Free consultation{" "}
  <span style={{ color: "#7A2604" }}>•</span>{" "}
  No hidden fees
</div>
      </div>
    </div>
  </div>
</div>
{/* End Stats + Support */}
          </div>
        </div>
      </div>
    </section>
  );
}
