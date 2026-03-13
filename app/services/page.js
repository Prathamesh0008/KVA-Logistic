'use client'

import { useState, useEffect } from 'react'
import {
  Truck,
  Ship,
  Plane,
  Package,
  Warehouse,
  Headphones,
  ArrowRight,
  Globe,
  Shield,
  Users,
  CheckCircle,
  Clock,
  MapPin,
  X,
  Calendar,
  DollarSign,
  Target,
  TrendingUp,
  Users as UsersIcon,
  BarChart,
  Star,
  ThumbsUp,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

// Color palette matching your logo
const colors = {
  darkBrown: '#521903',
  goldenYellow: '#f8b936',
  orange: '#dc8c18',
  darkOrange: '#9f4409',
  lightTan: '#c29f85',
}

// Light background colors
const backgroundColors = {
  light: '#fefefe',
  lighter: '#f9f9f9',
  lightGray: '#f5f5f5',
  warmWhite: '#faf8f5',
}

// ✅ Reusable highlight style (gradient text)
const highlightText = {
  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

// Regular dark text style
const darkText = {
  color: colors.darkBrown,
}

// Regular text with opacity
const regularText = {
  color: colors.darkBrown,
  opacity: 0.9,
}

// Light text with more opacity
const lightText = {
  color: colors.darkBrown,
  opacity: 0.8,
}

const services = [
  {
    icon: Truck,
    title: 'Road Freight',
    description:
      'Nationwide trucking and distribution with GPS tracking and real-time monitoring.',
    features: [
      'LTL & FTL Services',
      'Temperature Controlled',
      'Express Delivery',
      'Hazardous Materials',
    ],
    stats: '10K+ Trucks',
    popular: true,
    gradient: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
    details: {
      overview:
        'Our road freight service provides comprehensive transportation solutions across North America with a fleet of over 10,000 modern trucks equipped with GPS tracking and temperature control.',
      keyBenefits: [
        { icon: DollarSign, text: 'Cost-effective for bulk shipments' },
        { icon: Calendar, text: 'Flexible scheduling options' },
        { icon: Target, text: '99.5% on-time delivery rate' },
        { icon: Shield, text: 'Full cargo insurance coverage' },
      ],
      coverage: 'Covers all 50 states and major Canadian provinces',
      transitTime: '2-5 days for standard shipments',
      pricing:
        'Custom quotes based on distance, weight, and special requirements',
      industries: ['Retail', 'Manufacturing', 'Food & Beverage', 'Construction'],
    },
  },
  {
    icon: Ship,
    title: 'Ocean Shipping',
    description:
      'Global sea freight with container optimization and port management.',
    features: ['FCL & LCL', 'Port-to-Port', 'Customs Clearance', 'Bulk Shipping'],
    stats: '500+ Ports',
    popular: false,
    gradient: `linear-gradient(135deg, ${colors.lightTan}, ${colors.darkBrown})`,
    details: {
      overview:
        'Connect with over 500 ports worldwide through our ocean shipping network. We optimize container space and manage all port operations for seamless global trade.',
      keyBenefits: [
        { icon: DollarSign, text: 'Most economical for international bulk cargo' },
        { icon: Globe, text: 'Global port coverage' },
        { icon: Shield, text: 'End-to-end cargo security' },
        { icon: Calendar, text: 'Fixed sailing schedules' },
      ],
      coverage: '500+ ports across 150+ countries',
      transitTime: '20-45 days depending on route',
      pricing: 'Per container or per cubic meter for LCL',
      industries: [
        'Import/Export',
        'Automotive',
        'Heavy Machinery',
        'Commodities',
      ],
    },
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description:
      'Express air cargo with priority handling for time-critical shipments.',
    features: ['Same Day Service', 'Next Flight Out', 'Door-to-Door', 'Charter Options'],
    stats: '24-Hour Delivery',
    popular: true,
    gradient: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
    details: {
      overview:
        "For urgent shipments that can't wait, our air freight service guarantees priority handling and same-day/next-flight-out options with real-time tracking.",
      keyBenefits: [
        { icon: Clock, text: 'Same-day and next-flight-out options' },
        { icon: Target, text: 'Door-to-door delivery' },
        { icon: Shield, text: 'High-value cargo specialists' },
        { icon: Calendar, text: '24/7 operations' },
      ],
      coverage: 'Major airports worldwide',
      transitTime: '1-5 days international',
      pricing: 'Based on weight and urgency level',
      industries: ['Pharmaceuticals', 'Electronics', 'Aerospace', 'Emergency Supplies'],
    },
  },
  {
    icon: Warehouse,
    title: 'Smart Warehousing',
    description:
      'AI-powered storage with automated inventory and climate control.',
    features: ['Bonded Storage', 'Pick & Pack', 'Cross-Docking', 'Inventory Management'],
    stats: '2M+ Sq Ft',
    popular: false,
    gradient: `linear-gradient(135deg, #f8d036, ${colors.goldenYellow})`,
    details: {
      overview:
        'Over 2 million square feet of AI-powered warehouse space with automated inventory systems, climate control, and real-time stock visibility.',
      keyBenefits: [
        { icon: TrendingUp, text: 'Real-time inventory tracking' },
        { icon: Shield, text: '24/7 security monitoring' },
        { icon: DollarSign, text: 'Reduce storage costs by 30%' },
        { icon: Calendar, text: 'Flexible short/long-term contracts' },
      ],
      coverage: 'Strategic locations nationwide',
      storageOptions: 'Short-term, long-term, and bonded storage',
      features: 'Climate control, automated picking, cross-docking',
      industries: ['E-commerce', 'Retail Distribution', 'Cold Chain', 'Industrial'],
    },
  },
  {
    icon: Package,
    title: 'Last-Mile Delivery',
    description:
      'Final leg solutions with route optimization and customer notifications.',
    features: ['Same Day Delivery', 'Scheduled Slots', 'White Glove Service', 'Returns Management'],
    stats: '98% On-Time',
    popular: true,
    gradient: `linear-gradient(135deg, #e89c24, ${colors.orange})`,
    details: {
      overview:
        'Our last-mile delivery network ensures 98% on-time delivery with route optimization, real-time customer notifications, and flexible delivery options.',
      keyBenefits: [
        { icon: Target, text: '98% on-time delivery rate' },
        { icon: UsersIcon, text: 'Real-time customer notifications' },
        { icon: Shield, text: 'Proof of delivery with photos' },
        { icon: DollarSign, text: 'Transparent pricing, no hidden fees' },
      ],
      coverage: 'Urban and suburban areas nationwide',
      deliveryOptions: 'Same-day, scheduled, and white-glove',
      features: 'Returns management, installation services',
      industries: ['E-commerce', 'Furniture', 'Appliances', 'Medical Supplies'],
    },
  },
  {
    icon: Headphones,
    title: 'Logistics Consulting',
    description:
      'Strategic optimization to streamline supply chains and reduce costs.',
    features: ['Supply Chain Audit', 'Route Optimization', 'Cost Analysis', 'Risk Management'],
    stats: '25+ Years Exp',
    popular: false,
    gradient: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.darkOrange})`,
    details: {
      overview:
        'Leverage 25+ years of logistics expertise to optimize your supply chain, reduce costs, and improve efficiency through strategic consulting.',
      keyBenefits: [
        { icon: BarChart, text: 'Average 22% cost reduction' },
        { icon: TrendingUp, text: 'Improve delivery times by 35%' },
        { icon: Shield, text: 'Risk assessment and mitigation' },
        { icon: UsersIcon, text: 'Dedicated account managers' },
      ],
      services: 'Supply chain audit, route optimization, cost analysis',
      approach: 'Data-driven solutions tailored to your business',
      roi: 'Typically 3-6 month payback period',
      industries: ['All industries - customized solutions'],
    },
  },
]

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Supply Chain Manager, TechCorp',
    content: 'The road freight service has been a game-changer for our distribution. Real-time tracking and 99.5% on-time delivery have significantly improved our operations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO, Global Imports Ltd.',
    content: 'Their ocean shipping expertise helped us reduce costs by 25% while expanding our reach to new markets. The customs clearance support is exceptional.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director, FreshFoods',
    content: 'The smart warehousing solution with climate control has preserved our perishable goods perfectly. Inventory accuracy is now at 99.9%.',
    rating: 5,
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
        setSelectedService(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleLearnMore = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedService(null), 300)
  }

  return (
    <>
      <section
        className="relative py-8 sm:py-10 lg:py-12 overflow-hidden flex items-center"
        style={{ backgroundColor: backgroundColors.warmWhite }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Decorative blurs */}
        <div
          className="absolute top-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: colors.goldenYellow }}
        />
        <div
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: colors.orange }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide mb-2">
              <span className="block cursor-pointer" style={{ color: colors.darkBrown }}>
                Comprehensive
              </span>
              <span className="block cursor-pointer" style={highlightText}>
                Logistics Solutions
              </span>
            </h2>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto px-4 cursor-pointer"
              style={{ color: colors.darkBrown, opacity: 0.7 }}
            >
              End-to-end logistics services designed to optimize your supply chain
              and deliver exceptional value
            </p>
          </div>

          {/* Why Choose Us Section (NEW) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            <div
              className="p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.goldenYellow}30`,
              }}
            >
              <div className="flex justify-center mb-2">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: colors.goldenYellow + '20' }}
                >
                  <Zap className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                </div>
              </div>
              <h4 className="text-sm font-bold mb-1" style={darkText}>
                Speed & Reliability
              </h4>
              <p className="text-xs" style={lightText}>
                99.8% on-time delivery across all services, with real-time tracking and proactive alerts.
              </p>
            </div>

            <div
              className="p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.orange}30`,
              }}
            >
              <div className="flex justify-center mb-2">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: colors.orange + '20' }}
                >
                  <Shield className="h-5 w-5" style={{ color: colors.orange }} />
                </div>
              </div>
              <h4 className="text-sm font-bold mb-1" style={darkText}>
                Security & Compliance
              </h4>
              <p className="text-xs" style={lightText}>
                ISO 9001 certified with full cargo insurance and compliance with all international regulations.
              </p>
            </div>

            <div
              className="p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.darkBrown}20`,
              }}
            >
              <div className="flex justify-center mb-2">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: colors.darkBrown + '20' }}
                >
                  <Users className="h-5 w-5" style={{ color: colors.darkBrown }} />
                </div>
              </div>
              <h4 className="text-sm font-bold mb-1" style={darkText}>
                24/7 Dedicated Support
              </h4>
              <p className="text-xs" style={lightText}>
                Personal account managers and round-the-clock customer service in 12 languages.
              </p>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 max-w-4xl mx-auto">
            <div
              className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.lightTan}30`,
                color: colors.darkBrown,
              }}
            >
              <div className="text-xl sm:text-2xl font-bold mb-0.5 cursor-pointer" style={highlightText}>
                150+
              </div>
              <div className="text-xs cursor-pointer" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                Countries Served
              </div>
            </div>

            <div
              className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.goldenYellow}30`,
                color: colors.darkBrown,
              }}
            >
              <div className="text-xl sm:text-2xl font-bold mb-0.5 cursor-pointer" style={highlightText}>
                99.8%
              </div>
              <div className="text-xs cursor-pointer" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                On-Time Delivery
              </div>
            </div>

            <div
              className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.orange}30`,
                color: colors.darkBrown,
              }}
            >
              <div className="text-xl sm:text-2xl font-bold mb-0.5 cursor-pointer" style={highlightText}>
                24/7
              </div>
              <div className="text-xs cursor-pointer" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                Customer Support
              </div>
            </div>

            <div
              className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.darkBrown}20`,
                color: colors.darkBrown,
              }}
            >
              <div className="text-xl sm:text-2xl font-bold mb-0.5 cursor-pointer" style={highlightText}>
                ISO
              </div>
              <div className="text-xs cursor-pointer" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                9001 Certified
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-1 -right-1 z-20">
                    <div
                      className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg cursor-default"
                      style={{
                        background: `linear-gradient(90deg, ${colors.orange}, ${colors.darkOrange})`,
                        color: 'white',
                      }}
                    >
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Service Card */}
                <div
                  className={`
                    relative rounded-xl p-4
                    transition-all duration-300 
                    h-full flex flex-col
                    ${
                      hoveredIndex === index
                        ? 'shadow-lg scale-[1.02] -translate-y-1'
                        : 'shadow-sm hover:shadow-md'
                    }
                  `}
                  style={{
                    backgroundColor: 'white',
                    border: `1px solid ${colors.lightTan}50`,
                    color: colors.darkBrown,
                  }}
                >
                  {/* Icon and Stats */}
                  <div className="flex justify-between items-start mb-2">
                    <div
                      className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 cursor-pointer"
                      style={{ background: service.gradient }}
                    >
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white animate-pulse group-hover:animate-none" />
                      <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>

                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-bold cursor-pointer" style={highlightText}>
                        {service.stats}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-normal tracking-wide mb-1 cursor-pointer" style={highlightText}>
                    {service.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm mb-2 leading-relaxed cursor-pointer"
                    style={{ color: colors.darkBrown, opacity: 0.8 }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1 mb-2 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="flex-shrink-0 mr-2 mt-0.5">
                          <CheckCircle
                            className="h-3 w-3 group-hover/item:scale-110 transition-transform cursor-pointer"
                            style={{
                              color: idx % 2 === 0 ? colors.goldenYellow : colors.orange,
                            }}
                          />
                        </div>
                        <span className="text-xs cursor-pointer" style={{ color: colors.darkBrown, opacity: 0.9 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Tooltip with Key Metrics (NEW) */}
                  {hoveredIndex === index && (
                    <div
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-30 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shadow-lg"
                      style={{
                        backgroundColor: colors.darkBrown,
                        color: 'white',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span>🚚 {service.details.transitTime || 'Fast delivery'}</span>
                        <span>🌍 {service.details.coverage?.split(' ')[0] || 'Global'}</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45" style={{ backgroundColor: colors.darkBrown }} />
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="mt-auto pt-2 border-t" style={{ borderColor: colors.lightTan + '30' }}>
                    <button
                      onClick={() => handleLearnMore(service)}
                      className="group/btn flex items-center justify-between w-full font-normal tracking-wide text-xs sm:text-sm hover:opacity-80 transition-all duration-300 cursor-pointer"
                      style={{ color: colors.darkBrown }}
                    >
                      <span style={highlightText}>Learn More</span>
                      <ArrowRight
                        className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform cursor-pointer"
                        style={{ color: colors.darkBrown }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section (NEW) */}
          <div className="mt-10 max-w-5xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-light tracking-wide text-center mb-4">
              <span className="block cursor-pointer" style={highlightText}>
                What Our Clients Say
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  style={{
                    backgroundColor: 'white',
                    border: `1px solid ${colors.lightTan}30`,
                  }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-current"
                        style={{ color: colors.goldenYellow }}
                      />
                    ))}
                  </div>
                  <p className="text-xs mb-3 italic" style={regularText}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})` }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold" style={darkText}>
                        {testimonial.name}
                      </p>
                      <p className="text-xs" style={lightText}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Banner (NEW) */}
          <div
            className="mt-8 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-xl"
            style={{
              background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.darkOrange})`,
            }}
          >
            <h4 className="text-lg sm:text-xl font-light tracking-wide text-white mb-2">
              Ready to Optimize Your Supply Chain?
            </h4>
            <p className="text-sm text-white opacity-90 mb-4">
              Get a free consultation and personalized quote today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-normal tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm"
              style={{
                backgroundColor: 'white',
                color: colors.darkBrown,
              }}
            >
              <Users className="h-4 w-4" />
              Request Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details Modal (unchanged) */}
      {selectedService && (
        <div
          className={`
            fixed inset-0 z-50 flex items-center justify-center p-4
            transition-opacity duration-300
            ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black transition-opacity duration-300 cursor-pointer"
            style={{ opacity: isModalOpen ? 0.7 : 0 }}
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div
            className={`
              relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
              rounded-2xl shadow-2xl transition-all duration-300
              ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
            `}
            style={{
              backgroundColor: 'white',
              color: colors.darkBrown,
            }}
          >
            {/* Modal Header */}
            <div
              className="sticky top-0 z-10 p-4 border-b rounded-t-2xl flex justify-between items-center"
              style={{
                backgroundColor: 'white',
                borderColor: colors.lightTan + '50',
                background: selectedService.gradient,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white bg-opacity-20 cursor-pointer">
                  <selectedService.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-normal tracking-wide text-white cursor-pointer">
                    {selectedService.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="text-white text-xs font-medium cursor-pointer">{selectedService.stats}</div>
                    {selectedService.popular && (
                      <span className="px-1.5 py-0.5 text-xs font-bold rounded-full bg-white cursor-default" style={{ color: colors.darkOrange }}>
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="p-1.5 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors cursor-pointer"
                style={{ color: 'white' }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6">
              {/* Overview */}
              <div className="mb-4">
                <h4 className="text-base font-normal tracking-wide mb-2 flex items-center gap-2 cursor-pointer" style={darkText}>
                  <CheckCircle className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                  Service Overview
                </h4>
                <p className="text-sm cursor-pointer" style={regularText}>
                  {selectedService.details.overview}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mb-4">
                <h4 className="text-base font-bold mb-2 cursor-pointer" style={darkText}>
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.details.keyBenefits.map((benefit, idx) => {
                    const Icon = benefit.icon
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 rounded-lg cursor-pointer hover:shadow-md transition-all duration-300"
                        style={{
                          backgroundColor: backgroundColors.lightGray,
                          border: `1px solid ${colors.lightTan}30`,
                        }}
                      >
                        <div className="p-1.5 rounded-lg flex-shrink-0 cursor-pointer" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                          {Icon && <Icon className="h-4 w-4" style={{ color: colors.goldenYellow }} />}
                        </div>
                        <span className="text-xs cursor-pointer" style={darkText}>
                          {benefit.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {selectedService.details.coverage && (
                  <div className="p-3 rounded-lg border cursor-pointer hover:shadow-md transition-all duration-300" style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Globe className="h-4 w-4" style={{ color: colors.orange }} />
                      <h5 className="font-bold text-xs cursor-pointer" style={darkText}>
                        Coverage
                      </h5>
                    </div>
                    <p className="text-xs cursor-pointer" style={lightText}>
                      {selectedService.details.coverage}
                    </p>
                  </div>
                )}

                {selectedService.details.transitTime && (
                  <div className="p-3 rounded-lg border cursor-pointer hover:shadow-md transition-all duration-300" style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                      <h5 className="font-bold text-xs cursor-pointer" style={darkText}>
                        Transit Time
                      </h5>
                    </div>
                    <p className="text-xs cursor-pointer" style={lightText}>
                      {selectedService.details.transitTime}
                    </p>
                  </div>
                )}

                {selectedService.details.pricing && (
                  <div className="p-3 rounded-lg border cursor-pointer hover:shadow-md transition-all duration-300" style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <DollarSign className="h-4 w-4" style={{ color: colors.darkOrange }} />
                      <h5 className="font-bold text-xs cursor-pointer" style={darkText}>
                        Pricing
                      </h5>
                    </div>
                    <p className="text-xs cursor-pointer" style={lightText}>
                      {selectedService.details.pricing}
                    </p>
                  </div>
                )}

                {selectedService.details.industries && (
                  <div className="p-3 rounded-lg border cursor-pointer hover:shadow-md transition-all duration-300" style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <UsersIcon className="h-4 w-4" style={{ color: colors.darkBrown }} />
                      <h5 className="font-bold text-xs cursor-pointer" style={darkText}>
                        Industries
                      </h5>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {selectedService.details.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
                          style={{
                            backgroundColor: colors.lightTan + '30',
                            color: colors.darkBrown,
                            border: `1px solid ${colors.lightTan}`,
                          }}
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-base font-bold mb-2 cursor-pointer" style={darkText}>
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle
                        className="h-4 w-4 flex-shrink-0 cursor-pointer"
                        style={{ color: idx % 2 === 0 ? colors.goldenYellow : colors.orange }}
                      />
                      <span className="text-xs cursor-pointer" style={regularText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t" style={{ borderColor: colors.lightTan + '30' }}>
                <Link
                  href="/contact"
                  className="group flex-1 px-4 py-2 rounded-lg font-normal tracking-wide text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 text-sm cursor-pointer hover:scale-105"
                  style={{
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                    color: colors.darkBrown,
                  }}
                >
                  <Users className="h-4 w-4" />
                  Get Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform cursor-pointer" />
                </Link>

                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md border cursor-pointer hover:scale-105"
                  style={{
                    backgroundColor: 'white',
                    color: colors.darkBrown,
                    borderColor: colors.goldenYellow,
                  }}
                >
                  <span style={darkText}>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}