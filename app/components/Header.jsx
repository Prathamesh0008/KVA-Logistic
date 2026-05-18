"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LOGO_SRC = "/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const colors = {
    darkBrown: "#521903",
    goldenYellow: "#f8b936",
    orange: "#dc8c18",
    darkOrange: "#9f4409",
    lightTan: "#c29f85",
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tracking", href: "/tracking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur shadow-lg"
          : "bg-white shadow-md"
      }`}
      style={{
        fontFamily: "var(--font-snasm)",
        fontWeight: 300,
        letterSpacing: "0.02em",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[82px]">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="KVA Logistics Home"
          >
            <div className="relative w-[96px] h-[68px] sm:w-[108px] sm:h-[72px] lg:w-[118px] lg:h-[76px]">
              <Image
                src={LOGO_SRC}
                alt="KVA Logistics"
                fill
                priority
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 108px, 118px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 xl:px-5 py-2.5 rounded-lg text-sm xl:text-[15px] transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 hover:text-gray-900 hover:bg-orange-50"
                    }`}
                    style={{
                      fontFamily: "var(--font-snasm)",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      ...(isActive && {
                        backgroundColor: colors.darkBrown,
                      }),
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm text-gray-700 border-2 border-[#EB9003] hover:bg-orange-50 transition-all duration-300"
              style={{
                fontFamily: "var(--font-snasm)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Login
            </Link>

            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#EB9003] to-[#C55500] px-6 py-3 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-[#F5A623] hover:to-[#D45E00] focus:outline-none focus:ring-2 focus:ring-[#EB9003] focus:ring-offset-2"
              style={{
                fontFamily: "var(--font-snasm)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/10" />
            </Link>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium border border-gray-300 text-gray-700 bg-white transition-all duration-300"
              style={{
                fontFamily: "var(--font-snasm)",
                letterSpacing: "0.02em",
              }}
            >
              Login
            </Link>

            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full px-4 py-2 text-l font-medium text-white shadow-md whitespace-nowrap bg-gradient-to-r from-[#EB9003] to-[#C55500] hover:from-[#F5A623] hover:to-[#D45E00] transition-all duration-300"
              style={{
                fontFamily: "var(--font-snasm)",
                letterSpacing: "0.02em",
              }}
            >
              Get Quote
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-orange-50 transition"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" style={{ color: colors.darkBrown }} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            className="absolute right-0 top-0 h-[100vh] w-[85%] max-w-md shadow-2xl flex flex-col"
            style={{ backgroundColor: colors.darkBrown }}
          >
            <div className="p-5 flex items-center justify-between border-b border-white/20">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative w-[72px] h-[58px] shrink-0">
                  <Image
                    src={LOGO_SRC}
                    alt="KVA Logistics"
                    fill
                    sizes="72px"
                    className="object-contain"
                  />
                </div>

                <span
                  className="text-white text-base"
                  style={{
                    fontFamily: "var(--font-snasm)",
                    fontWeight: 400,
                  }}
                >
                  KVA LOGISTICS
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-4 text-white hover:bg-white/10 transition"
                style={{
                  fontFamily: "var(--font-snasm)",
                  fontWeight: 400,
                }}
              >
                Login
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-4 text-white hover:bg-white/10 transition"
                  style={{
                    fontFamily: "var(--font-snasm)",
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
