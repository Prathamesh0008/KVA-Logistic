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
    darkBrown: "#3d1202",
    orange: "#EB9003",
    darkOrange: "#c25500",
    lightBrown: "#F5E6D3",
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tracking", href: "/tracking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
      style={{ fontFamily: "var(--font-snasm)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <div className="relative h-[58px] w-[95px] md:h-[66px] md:w-[115px]">
              <Image
                src={LOGO_SRC}
                alt="KVA Logistics"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
             className="relative text-lg tracking-[0.02em] transition hover:opacity-70"
style={{
  color: "#3A1811f",
  fontFamily: "Arial, Helvetica, sans-serif",
}}
                >
                  {item.name}

                  {isActive && (
                    <span
                      className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full"
              style={{ backgroundColor: "#3A1811" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
<div className="hidden items-center gap-3 lg:flex">
  <Link
    href="/login"
    className="rounded-md border px-5 py-2.5 text-base font-medium tracking-wide transition hover:bg-[#F5E6D3]"
    style={{
      color: colors.darkBrown,
      borderColor: colors.darkBrown + "40",
    }}
  >
    Login
  </Link>

  <Link
    href="/contact"
    className="rounded-md px-6 py-2.5 text-base font-medium tracking-wide text-white shadow-sm transition hover:scale-105"
    style={{
      background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
    }}
  >
    Get Quote
  </Link>
</div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="rounded-full p-2 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" style={{ color: colors.darkBrown }} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/45"
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            className="absolute right-0 top-0 flex h-screen w-[85%] max-w-sm flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="relative h-[60px] w-[110px]">
                <Image
                  src={LOGO_SRC}
                  alt="KVA Logistics"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-7 w-7" style={{ color: colors.darkBrown }} />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-5 py-5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-4 py-4 text-lg font-bold"
                    style={{
                      color: isActive ? "#fff" : colors.darkBrown,
                      backgroundColor: isActive ? colors.darkBrown : "transparent",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 rounded-xl px-4 py-4 text-center text-lg font-bold text-white"
                style={{
                  background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
                }}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}