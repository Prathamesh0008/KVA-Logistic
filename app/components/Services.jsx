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
  BarChart
} from 'lucide-react'
import Link from 'next/link'

// Color palette matching your logo
const colors = {
  darkBrown: '#521903',     // Primary dark
  goldenYellow: '#f8b936',  // Primary accent
  orange: '#dc8c18',       // Secondary accent
  darkOrange: '#9f4409',   // Dark accent
  lightTan: '#c29f85'      // Light accent
}

// Light background colors
const backgroundColors = {
  light: '#fefefe',
  lighter: '#f9f9f9',
  lightGray: '#f5f5f5',
  warmWhite: '#faf8f5'
}

const services = [
  {
    icon: Truck,
    title: 'Road Freight',
    description: 'Nationwide trucking and distribution with GPS tracking and real-time monitoring.',
    features: ['LTL & FTL Services', 'Temperature Controlled', 'Express Delivery', 'Hazardous Materials'],
    stats: '10K+ Trucks',
    popular: true,
    gradient: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
    // Detailed information for modal
    details: {
      overview: 'Our road freight service provides comprehensive transportation solutions across North America with a fleet of over 10,000 modern trucks equipped with GPS tracking and temperature control.',
      keyBenefits: [
        { icon: DollarSign, text: 'Cost-effective for bulk shipments' },
        { icon: Calendar, text: 'Flexible scheduling options' },
        { icon: Target, text: '99.5% on-time delivery rate' },
        { icon: Shield, text: 'Full cargo insurance coverage' }
      ],
      coverage: 'Covers all 50 states and major Canadian provinces',
      transitTime: '2-5 days for standard shipments',
      pricing: 'Custom quotes based on distance, weight, and special requirements',
      industries: ['Retail', 'Manufacturing', 'Food & Beverage', 'Construction']
    }
  },
  {
    icon: Ship,
    title: 'Ocean Shipping',
    description: 'Global sea freight with container optimization and port management.',
    features: ['FCL & LCL', 'Port-to-Port', 'Customs Clearance', 'Bulk Shipping'],
    stats: '500+ Ports',
    popular: false,
    gradient: `linear-gradient(135deg, ${colors.lightTan}, ${colors.darkBrown})`,
    details: {
      overview: 'Connect with over 500 ports worldwide through our ocean shipping network. We optimize container space and manage all port operations for seamless global trade.',
      keyBenefits: [
        { icon: DollarSign, text: 'Most economical for international bulk cargo' },
        { icon: Globe, text: 'Global port coverage' },
        { icon: Shield, text: 'End-to-end cargo security' },
        { icon: Calendar, text: 'Fixed sailing schedules' }
      ],
      coverage: '500+ ports across 150+ countries',
      transitTime: '20-45 days depending on route',
      pricing: 'Per container or per cubic meter for LCL',
      industries: ['Import/Export', 'Automotive', 'Heavy Machinery', 'Commodities']
    }
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express air cargo with priority handling for time-critical shipments.',
    features: ['Same Day Service', 'Next Flight Out', 'Door-to-Door', 'Charter Options'],
    stats: '24-Hour Delivery',
    popular: true,
    gradient: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
    details: {
      overview: 'For urgent shipments that can\'t wait, our air freight service guarantees priority handling and same-day/next-flight-out options with real-time tracking.',
      keyBenefits: [
        { icon: Clock, text: 'Same-day and next-flight-out options' },
        { icon: Target, text: 'Door-to-door delivery' },
        { icon: Shield, text: 'High-value cargo specialists' },
        { icon: Calendar, text: '24/7 operations' }
      ],
      coverage: 'Major airports worldwide',
      transitTime: '1-5 days international',
      pricing: 'Based on weight and urgency level',
      industries: ['Pharmaceuticals', 'Electronics', 'Aerospace', 'Emergency Supplies']
    }
  },
  {
    icon: Warehouse,
    title: 'Smart Warehousing',
    description: 'AI-powered storage with automated inventory and climate control.',
    features: ['Bonded Storage', 'Pick & Pack', 'Cross-Docking', 'Inventory Management'],
    stats: '2M+ Sq Ft',
    popular: false,
    gradient: `linear-gradient(135deg, #f8d036, ${colors.goldenYellow})`,
    details: {
      overview: 'Over 2 million square feet of AI-powered warehouse space with automated inventory systems, climate control, and real-time stock visibility.',
      keyBenefits: [
        { icon: TrendingUp, text: 'Real-time inventory tracking' },
        { icon: Shield, text: '24/7 security monitoring' },
        { icon: DollarSign, text: 'Reduce storage costs by 30%' },
        { icon: Calendar, text: 'Flexible short/long-term contracts' }
      ],
      coverage: 'Strategic locations nationwide',
      storageOptions: 'Short-term, long-term, and bonded storage',
      features: 'Climate control, automated picking, cross-docking',
      industries: ['E-commerce', 'Retail Distribution', 'Cold Chain', 'Industrial']
    }
  },
  {
    icon: Package,
    title: 'Last-Mile Delivery',
    description: 'Final leg solutions with route optimization and customer notifications.',
    features: ['Same Day Delivery', 'Scheduled Slots', 'White Glove Service', 'Returns Management'],
    stats: '98% On-Time',
    popular: true,
    gradient: `linear-gradient(135deg, #e89c24, ${colors.orange})`,
    details: {
      overview: 'Our last-mile delivery network ensures 98% on-time delivery with route optimization, real-time customer notifications, and flexible delivery options.',
      keyBenefits: [
        { icon: Target, text: '98% on-time delivery rate' },
        { icon: UsersIcon, text: 'Real-time customer notifications' },
        { icon: Shield, text: 'Proof of delivery with photos' },
        { icon: DollarSign, text: 'Transparent pricing, no hidden fees' }
      ],
      coverage: 'Urban and suburban areas nationwide',
      deliveryOptions: 'Same-day, scheduled, and white-glove',
      features: 'Returns management, installation services',
      industries: ['E-commerce', 'Furniture', 'Appliances', 'Medical Supplies']
    }
  },
  {
    icon: Headphones,
    title: 'Logistics Consulting',
    description: 'Strategic optimization to streamline supply chains and reduce costs.',
    features: ['Supply Chain Audit', 'Route Optimization', 'Cost Analysis', 'Risk Management'],
    stats: '25+ Years Exp',
    popular: false,
    gradient: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.darkOrange})`,
    details: {
      overview: 'Leverage 25+ years of logistics expertise to optimize your supply chain, reduce costs, and improve efficiency through strategic consulting.',
      keyBenefits: [
        { icon: BarChart, text: 'Average 22% cost reduction' },
        { icon: TrendingUp, text: 'Improve delivery times by 35%' },
        { icon: Shield, text: 'Risk assessment and mitigation' },
        { icon: UsersIcon, text: 'Dedicated account managers' }
      ],
      services: 'Supply chain audit, route optimization, cost analysis',
      approach: 'Data-driven solutions tailored to your business',
      roi: 'Typically 3-6 month payback period',
      industries: ['All industries - customized solutions']
    }
  }
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
    setTimeout(() => setSelectedService(null), 300) // Wait for animation
  }

  return (
    <>
      <section 
        className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: backgroundColors.warmWhite }}
      >
        {/* Background Pattern - Light and subtle */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Subtle decorative elements */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: colors.goldenYellow }}
        />
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: colors.orange }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            {/* Badge */}
            <div 
              className="inline-flex items-center justify-center gap-2 rounded-full mb-6 mx-auto px-4 py-2 shadow-sm"
              style={{
                backgroundColor: colors.goldenYellow,
                color: colors.darkBrown,
                border: `1px solid ${colors.darkBrown}20`
              }}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-semibold">GLOBAL SERVICES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="block" style={{ color: colors.darkBrown }}>
                Comprehensive
              </span>
              <span 
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Logistics Solutions
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg max-w-2xl mx-auto px-4"
              style={{ color: colors.darkBrown, opacity: 0.7 }}
            >
              End-to-end logistics services designed to optimize your supply chain 
              and deliver exceptional value
            </p>
          </div>

          {/* Stats Banner - Light cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 lg:mb-14 max-w-4xl mx-auto">
            <div 
              className="rounded-xl p-4 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.lightTan}30`,
                color: colors.darkBrown
              }}
            >
              <div 
                className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                style={{ color: colors.darkBrown }}
              >
                150+
              </div>
              <div className="text-xs sm:text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                Countries Served
              </div>
            </div>
            
            <div 
              className="rounded-xl p-4 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.goldenYellow}30`,
                color: colors.darkBrown
              }}
            >
              <div 
                className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                style={{ color: colors.darkBrown }}
              >
                99.8%
              </div>
              <div className="text-xs sm:text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                On-Time Delivery
              </div>
            </div>
            
            <div 
              className="rounded-xl p-4 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.orange}30`,
                color: colors.darkBrown
              }}
            >
              <div 
                className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                style={{ color: colors.darkBrown }}
              >
                24/7
              </div>
              <div className="text-xs sm:text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                Customer Support
              </div>
            </div>
            
            <div 
              className="rounded-xl p-4 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.darkBrown}20`,
                color: colors.darkBrown
              }}
            >
              <div 
                className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                style={{ color: colors.darkBrown }}
              >
                ISO
              </div>
              <div className="text-xs sm:text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                9001 Certified
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <div 
                      className="text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      style={{
                        background: `linear-gradient(90deg, ${colors.orange}, ${colors.darkOrange})`,
                        color: 'white'
                      }}
                    >
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Service Card */}
                <div className={`
                  relative rounded-2xl p-5 sm:p-6 
                  transition-all duration-300 
                  h-full flex flex-col
                  ${hoveredIndex === index 
                    ? 'shadow-xl scale-[1.02] -translate-y-1' 
                    : 'shadow-sm hover:shadow-lg'
                  }
                `}
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                  color: colors.darkBrown
                }}>
                  {/* Icon and Stats Container */}
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    {/* Icon Container */}
                    <div 
                      className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                      style={{ background: service.gradient }}
                    >
                      <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      
                      {/* Hover Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      />
                    </div>

                    {/* Service Stats */}
                    <div className="text-right">
                      <div 
                        className="text-sm sm:text-base font-bold"
                        style={{ color: colors.darkBrown }}
                      >
                        {service.stats}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-2 sm:mb-3"
                    style={{ color: colors.darkBrown }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed"
                    style={{ color: colors.darkBrown, opacity: 0.8 }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start group/item"
                      >
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <CheckCircle 
                            className="h-4 w-4 group-hover/item:scale-110 transition-transform"
                            style={{ 
                              color: service.features.indexOf(feature) % 2 === 0 
                                ? colors.goldenYellow 
                                : colors.orange 
                            }}
                          />
                        </div>
                        <span 
                          className="text-xs sm:text-sm"
                          style={{ color: colors.darkBrown, opacity: 0.9 }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div className="mt-auto pt-4 sm:pt-6 border-t" style={{ borderColor: colors.lightTan + '30' }}>
                    <button 
                      onClick={() => handleLearnMore(service)}
                      className="group/btn flex items-center justify-between w-full font-semibold text-sm sm:text-base hover:opacity-80 transition-all duration-300"
                      style={{ color: colors.darkBrown }}
                    >
                      <span>Learn More</span>
                      <ArrowRight 
                        className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-2 transition-transform"
                        style={{ color: colors.darkBrown }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <div 
              className="rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto shadow-sm"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${colors.lightTan}50`,
                background: `linear-gradient(135deg, white, ${backgroundColors.lighter})`
              }}
            >
              <div className="inline-flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <Shield 
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  style={{ color: colors.goldenYellow }}
                />
                <Clock 
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  style={{ color: colors.orange }}
                />
                <MapPin 
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  style={{ color: colors.darkBrown }}
                />
              </div>
              
              <h3 
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
                style={{ color: colors.darkBrown }}
              >
                Need Custom Logistics Solutions?
              </h3>
              
              <p 
                className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base"
                style={{ color: colors.darkBrown, opacity: 0.8 }}
              >
                Our experts will design a logistics strategy tailored to your specific business needs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg w-full sm:w-auto min-w-[220px] hover:scale-105"
                  style={{
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                    color: colors.darkBrown
                  }}
                >
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  Consult Our Experts
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link
                  href="/services"
                  className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg w-full sm:w-auto min-w-[220px] hover:scale-105"
                  style={{
                    backgroundColor: 'white',
                    color: colors.darkBrown,
                    border: `2px solid ${colors.goldenYellow}`
                  }}
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform opacity-70" />
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h4 
                className="text-sm sm:text-base font-semibold mb-2 tracking-wider"
                style={{ color: colors.darkBrown, opacity: 0.7 }}
              >
                TRUSTED BY INDUSTRY LEADERS
              </h4>
              <div 
                className="h-1 w-16 sm:w-20 mx-auto rounded-full mb-6"
                style={{
                  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`
                }}
              />
            </div>
            
            <div 
              className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10"
              style={{ color: colors.darkBrown, opacity: 0.8 }}
            >
              <div className="text-base sm:text-lg font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity">MAERSK</div>
              <div className="text-base sm:text-lg font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity">DHL</div>
              <div className="text-base sm:text-lg font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity">FEDEX</div>
              <div className="text-base sm:text-lg font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity">UPS</div>
              <div className="text-base sm:text-lg font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity">COSCO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className={`
          fixed inset-0 z-50 flex items-center justify-center p-4
          transition-opacity duration-300
          ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black transition-opacity duration-300"
            style={{ opacity: isModalOpen ? 0.7 : 0 }}
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className={`
            relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
            rounded-2xl shadow-2xl transition-all duration-300
            ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          `}
          style={{
            backgroundColor: 'white',
            color: colors.darkBrown
          }}>
            {/* Modal Header */}
            <div className="sticky top-0 z-10 p-6 border-b rounded-t-2xl flex justify-between items-center"
              style={{
                backgroundColor: 'white',
                borderColor: colors.lightTan + '50',
                background: selectedService.gradient
              }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white bg-opacity-20">
                  <selectedService.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="text-white text-opacity-90">{selectedService.stats}</div>
                    {selectedService.popular && (
                      <span className="px-2 py-1 text-xs font-bold rounded-full bg-white text-orange-600">
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                style={{ color: 'white' }}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2"
                  style={{ color: colors.darkBrown }}>
                  <CheckCircle className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  Service Overview
                </h4>
                <p className="text-base" style={{ color: colors.darkBrown, opacity: 0.9 }}>
                  {selectedService.details.overview}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4" style={{ color: colors.darkBrown }}>
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.details.keyBenefits.map((benefit, idx) => {
                    const Icon = benefit.icon;
                    return (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl"
                        style={{
                          backgroundColor: backgroundColors.lightGray,
                          border: `1px solid ${colors.lightTan}30`
                        }}
                      >
                        <div className="p-2 rounded-lg" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                          <Icon className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                        </div>
                        <span className="text-sm" style={{ color: colors.darkBrown, opacity: 0.9 }}>
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {selectedService.details.coverage && (
                  <div className="p-5 rounded-xl border"
                    style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5" style={{ color: colors.orange }} />
                      <h5 className="font-bold" style={{ color: colors.darkBrown }}>Coverage</h5>
                    </div>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                      {selectedService.details.coverage}
                    </p>
                  </div>
                )}

                {selectedService.details.transitTime && (
                  <div className="p-5 rounded-xl border"
                    style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                      <h5 className="font-bold" style={{ color: colors.darkBrown }}>Transit Time</h5>
                    </div>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                      {selectedService.details.transitTime}
                    </p>
                  </div>
                )}

                {selectedService.details.pricing && (
                  <div className="p-5 rounded-xl border"
                    style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5" style={{ color: colors.darkOrange }} />
                      <h5 className="font-bold" style={{ color: colors.darkBrown }}>Pricing</h5>
                    </div>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                      {selectedService.details.pricing}
                    </p>
                  </div>
                )}

                {selectedService.details.industries && (
                  <div className="p-5 rounded-xl border"
                    style={{ borderColor: colors.lightTan + '50' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <UsersIcon className="h-5 w-5" style={{ color: colors.darkBrown }} />
                      <h5 className="font-bold" style={{ color: colors.darkBrown }}>Industries Served</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.industries.map((industry, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: colors.lightTan + '30',
                            color: colors.darkBrown,
                            border: `1px solid ${colors.lightTan}`
                          }}
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Features (from original card) */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4" style={{ color: colors.darkBrown }}>
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle 
                        className="h-5 w-5 flex-shrink-0"
                        style={{ 
                          color: idx % 2 === 0 ? colors.goldenYellow : colors.orange 
                        }}
                      />
                      <span style={{ color: colors.darkBrown, opacity: 0.9 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t"
                style={{ borderColor: colors.lightTan + '30' }}>
                <Link
                  href="/contact"
                  className="group flex-1 px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                  style={{
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                    color: colors.darkBrown
                  }}
                >
                  <Users className="h-5 w-5" />
                  Get Custom Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <button
                  onClick={closeModal}
                  className="px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-md border-2"
                  style={{
                    backgroundColor: 'white',
                    color: colors.darkBrown,
                    borderColor: colors.goldenYellow
                  }}
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}