
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
      {/* Hero Section - Minimal */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1">
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
              className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
              style={{
                color: colors.darkBrown,
                opacity: 0.8,
              }}
            >
              End-to-end supply chain management designed to optimize
              efficiency, reduce costs, and deliver exceptional reliability
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - No extra footer, no gaps */}
   <section className="flex-1 py-10 lg:py-16">
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {[
                { value: "99.8%", label: "On-Time Delivery", color: colors.goldenYellow },
                { value: "150+", label: "Countries", color: colors.orange },
                { value: "24/7", label: "Support", color: colors.goldenYellow },
                { value: "25+", label: "Years Experience", color: colors.orange }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-2.5 rounded-lg text-center"
                  style={{
                    backgroundColor: stat.color + "10",
                    border: `1px solid ${stat.color}30`,
                  }}
                >
                  <div className="text-base sm:text-lg md:text-xl font-bold" style={{ color: colors.darkBrown }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Services Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {/* Road Freight */}
              <div
                className="p-8 md:p-10 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
                    }}
                  >
                    🚚
                  </div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.darkBrown }}>
                    Road Freight
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm mb-3" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Comprehensive overland transportation solutions across North America with real-time GPS tracking.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["LTL & FTL", "Express"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.goldenYellow }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ocean Shipping */}
              <div
                className="p-4 sm:p-5 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
                    }}
                  >
                    🚢
                  </div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.darkBrown }}>
                    Ocean Shipping
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm mb-3" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Global sea freight with container optimization and full customs clearance services.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["FCL & LCL", "Port-to-Port", "Customs"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.orange }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Air Freight */}
              <div
                className="p-4 sm:p-5 rounded-xl border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.lightTan})`,
                    }}
                  >
                    ✈️
                  </div>
                  <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.darkBrown }}>
                    Air Freight
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm mb-3" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Express air cargo with priority handling for time-critical shipments and global coverage.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["Same Day", "Next Flight", "Door-to-Door", "Charter"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.darkBrown }} />
                      <span className="text-xs" style={{ color: colors.darkBrown }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section - Only this, no footer */}
            <div
              className="p-4 sm:p-5 rounded-xl text-center"
              style={{
                background: `linear-gradient(135deg, ${colors.goldenYellow}10, ${colors.orange}10)`,
                border: `1px solid ${colors.goldenYellow}30`,
              }}
            >
              <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>
                Need Custom Logistics Solutions?
              </h3>
              <p className="text-xs sm:text-sm mb-3 max-w-lg mx-auto" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                Our logistics experts will design a tailored solution for your business.
              </p>
              <div className="flex flex-row gap-2 justify-center">
                <button
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all hover:shadow-md"
                  style={{
                    backgroundColor: colors.goldenYellow,
                    color: colors.darkBrown,
                  }}
                >
                  Custom Quote
                </button>
                <button
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all hover:shadow-md border"
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






















// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   Truck,
//   Ship,
//   Plane,
//   Package,
//   Warehouse,
//   Headphones,
//   ArrowRight,
//   Globe,
//   Shield,
//   Users,
//   CheckCircle,
//   Clock,
//   MapPin,
//   X,
//   Calendar,
//   DollarSign,
//   Target,
//   TrendingUp,
//   Users as UsersIcon,
//   BarChart,
// } from 'lucide-react'
// import Link from 'next/link'

// // Color palette matching your logo
// const colors = {
//   darkBrown: '#521903', // Primary dark
//   goldenYellow: '#f8b936', // Primary accent
//   orange: '#dc8c18', // Secondary accent
//   darkOrange: '#9f4409', // Dark accent
//   lightTan: '#c29f85', // Light accent
// }

// // Light background colors
// const backgroundColors = {
//   light: '#fefefe',
//   lighter: '#f9f9f9',
//   lightGray: '#f5f5f5',
//   warmWhite: '#faf8f5',
// }

// // ✅ Reusable highlight style (gradient text)
// const highlightText = {
//   background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   backgroundClip: 'text',
// }

// // ✅ Added: Regular dark text style for better readability
// const darkText = {
//   color: colors.darkBrown,
// }

// // ✅ Added: Regular text with opacity for better readability
// const regularText = {
//   color: colors.darkBrown,
//   opacity: 0.9,
// }

// // ✅ Added: Light text with more opacity
// const lightText = {
//   color: colors.darkBrown,
//   opacity: 0.8,
// }

// const services = [
//   {
//     icon: Truck,
//     title: 'Road Freight',
//     description:
//       'Nationwide trucking and distribution with GPS tracking and real-time monitoring.',
//     features: [
//       'LTL & FTL Services',
//       'Temperature Controlled',
//       'Express Delivery',
//       'Hazardous Materials',
//     ],
//     stats: '10K+ Trucks',
//     popular: true,
//     gradient: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
//     details: {
//       overview:
//         'Our road freight service provides comprehensive transportation solutions across North America with a fleet of over 10,000 modern trucks equipped with GPS tracking and temperature control.',
//       keyBenefits: [
//         { icon: DollarSign, text: 'Cost-effective for bulk shipments' },
//         { icon: Calendar, text: 'Flexible scheduling options' },
//         { icon: Target, text: '99.5% on-time delivery rate' },
//         { icon: Shield, text: 'Full cargo insurance coverage' },
//       ],
//       coverage: 'Covers all 50 states and major Canadian provinces',
//       transitTime: '2-5 days for standard shipments',
//       pricing:
//         'Custom quotes based on distance, weight, and special requirements',
//       industries: ['Retail', 'Manufacturing', 'Food & Beverage', 'Construction'],
//     },
//   },
//   {
//     icon: Ship,
//     title: 'Ocean Shipping',
//     description:
//       'Global sea freight with container optimization and port management.',
//     features: ['FCL & LCL', 'Port-to-Port', 'Customs Clearance', 'Bulk Shipping'],
//     stats: '500+ Ports',
//     popular: false,
//     gradient: `linear-gradient(135deg, ${colors.lightTan}, ${colors.darkBrown})`,
//     details: {
//       overview:
//         'Connect with over 500 ports worldwide through our ocean shipping network. We optimize container space and manage all port operations for seamless global trade.',
//       keyBenefits: [
//         { icon: DollarSign, text: 'Most economical for international bulk cargo' },
//         { icon: Globe, text: 'Global port coverage' },
//         { icon: Shield, text: 'End-to-end cargo security' },
//         { icon: Calendar, text: 'Fixed sailing schedules' },
//       ],
//       coverage: '500+ ports across 150+ countries',
//       transitTime: '20-45 days depending on route',
//       pricing: 'Per container or per cubic meter for LCL',
//       industries: [
//         'Import/Export',
//         'Automotive',
//         'Heavy Machinery',
//         'Commodities',
//       ],
//     },
//   },
//   {
//     icon: Plane,
//     title: 'Air Freight',
//     description:
//       'Express air cargo with priority handling for time-critical shipments.',
//     features: ['Same Day Service', 'Next Flight Out', 'Door-to-Door', 'Charter Options'],
//     stats: '24-Hour Delivery',
//     popular: true,
//     gradient: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
//     details: {
//       overview:
//         "For urgent shipments that can't wait, our air freight service guarantees priority handling and same-day/next-flight-out options with real-time tracking.",
//       keyBenefits: [
//         { icon: Clock, text: 'Same-day and next-flight-out options' },
//         { icon: Target, text: 'Door-to-door delivery' },
//         { icon: Shield, text: 'High-value cargo specialists' },
//         { icon: Calendar, text: '24/7 operations' },
//       ],
//       coverage: 'Major airports worldwide',
//       transitTime: '1-5 days international',
//       pricing: 'Based on weight and urgency level',
//       industries: ['Pharmaceuticals', 'Electronics', 'Aerospace', 'Emergency Supplies'],
//     },
//   },
//   {
//     icon: Warehouse,
//     title: 'Smart Warehousing',
//     description:
//       'AI-powered storage with automated inventory and climate control.',
//     features: ['Bonded Storage', 'Pick & Pack', 'Cross-Docking', 'Inventory Management'],
//     stats: '2M+ Sq Ft',
//     popular: false,
//     gradient: `linear-gradient(135deg, #f8d036, ${colors.goldenYellow})`,
//     details: {
//       overview:
//         'Over 2 million square feet of AI-powered warehouse space with automated inventory systems, climate control, and real-time stock visibility.',
//       keyBenefits: [
//         { icon: TrendingUp, text: 'Real-time inventory tracking' },
//         { icon: Shield, text: '24/7 security monitoring' },
//         { icon: DollarSign, text: 'Reduce storage costs by 30%' },
//         { icon: Calendar, text: 'Flexible short/long-term contracts' },
//       ],
//       coverage: 'Strategic locations nationwide',
//       storageOptions: 'Short-term, long-term, and bonded storage',
//       features: 'Climate control, automated picking, cross-docking',
//       industries: ['E-commerce', 'Retail Distribution', 'Cold Chain', 'Industrial'],
//     },
//   },
//   {
//     icon: Package,
//     title: 'Last-Mile Delivery',
//     description:
//       'Final leg solutions with route optimization and customer notifications.',
//     features: ['Same Day Delivery', 'Scheduled Slots', 'White Glove Service', 'Returns Management'],
//     stats: '98% On-Time',
//     popular: true,
//     gradient: `linear-gradient(135deg, #e89c24, ${colors.orange})`,
//     details: {
//       overview:
//         'Our last-mile delivery network ensures 98% on-time delivery with route optimization, real-time customer notifications, and flexible delivery options.',
//       keyBenefits: [
//         { icon: Target, text: '98% on-time delivery rate' },
//         { icon: UsersIcon, text: 'Real-time customer notifications' },
//         { icon: Shield, text: 'Proof of delivery with photos' },
//         { icon: DollarSign, text: 'Transparent pricing, no hidden fees' },
//       ],
//       coverage: 'Urban and suburban areas nationwide',
//       deliveryOptions: 'Same-day, scheduled, and white-glove',
//       features: 'Returns management, installation services',
//       industries: ['E-commerce', 'Furniture', 'Appliances', 'Medical Supplies'],
//     },
//   },
//   {
//     icon: Headphones,
//     title: 'Logistics Consulting',
//     description:
//       'Strategic optimization to streamline supply chains and reduce costs.',
//     features: ['Supply Chain Audit', 'Route Optimization', 'Cost Analysis', 'Risk Management'],
//     stats: '25+ Years Exp',
//     popular: false,
//     gradient: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.darkOrange})`,
//     details: {
//       overview:
//         'Leverage 25+ years of logistics expertise to optimize your supply chain, reduce costs, and improve efficiency through strategic consulting.',
//       keyBenefits: [
//         { icon: BarChart, text: 'Average 22% cost reduction' },
//         { icon: TrendingUp, text: 'Improve delivery times by 35%' },
//         { icon: Shield, text: 'Risk assessment and mitigation' },
//         { icon: UsersIcon, text: 'Dedicated account managers' },
//       ],
//       services: 'Supply chain audit, route optimization, cost analysis',
//       approach: 'Data-driven solutions tailored to your business',
//       roi: 'Typically 3-6 month payback period',
//       industries: ['All industries - customized solutions'],
//     },
//   },
// ]

// export default function Services() {
//   const [hoveredIndex, setHoveredIndex] = useState(null)
//   const [selectedService, setSelectedService] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   // Handle escape key to close modal
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') {
//         setIsModalOpen(false)
//         setSelectedService(null)
//       }
//     }
//     window.addEventListener('keydown', handleEscape)
//     return () => window.removeEventListener('keydown', handleEscape)
//   }, [])

//   const handleLearnMore = (service) => {
//     setSelectedService(service)
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//     setTimeout(() => setSelectedService(null), 300) // Wait for animation
//   }

//   return (
//     <>
//       <section
//         className="relative py-8 sm:py-10 lg:py-12 overflow-hidden flex items-center"
//         style={{ backgroundColor: backgroundColors.warmWhite }}
//       >
//         {/* Background Pattern - Light and subtle */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           />
//         </div>

//         {/* Subtle decorative elements - reduced opacity */}
//         <div
//           className="absolute top-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-5"
//           style={{ backgroundColor: colors.goldenYellow }}
//         />
//         <div
//           className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-5"
//           style={{ backgroundColor: colors.orange }}
//         />

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           {/* Header - reduced spacing */}
//           <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
//             {/* Badge */}
//             <div
//               className="inline-flex items-center justify-center gap-2 rounded-full mb-4 mx-auto px-3 py-1.5 shadow-sm"
//               style={{
//                 backgroundColor: colors.goldenYellow,
//                 color: colors.darkBrown,
//                 border: `1px solid ${colors.darkBrown}20`,
//               }}
//             >
//               <Globe className="h-3 w-3" />
//               <span className="text-xs font-semibold">GLOBAL SERVICES</span>
//             </div>

//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">  
//               <span className="block" style={{ color: colors.darkBrown }}>
//                 Comprehensive
//               </span>
//               <span className="block" style={highlightText}>
//                 Logistics Solutions
//               </span>
//             </h2>

//             <p
//               className="text-sm sm:text-base max-w-2xl mx-auto px-4"
//               style={{ color: colors.darkBrown, opacity: 0.7 }}
//             >
//               End-to-end logistics services designed to optimize your supply chain
//               and deliver exceptional value
//             </p>
//           </div>

//           {/* Stats Banner - reduced spacing */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 max-w-4xl mx-auto">
//             <div
//               className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
//               style={{
//                 backgroundColor: 'white',
//                 border: `1px solid ${colors.lightTan}30`,
//                 color: colors.darkBrown,
//               }}
//             >
//               <div className="text-xl sm:text-2xl font-bold mb-0.5" style={highlightText}>
//                 150+
//               </div>
//               <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>
//                 Countries Served
//               </div>
//             </div>

//             <div
//               className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
//               style={{
//                 backgroundColor: 'white',
//                 border: `1px solid ${colors.goldenYellow}30`,
//                 color: colors.darkBrown,
//               }}
//             >
//               <div className="text-xl sm:text-2xl font-bold mb-0.5" style={highlightText}>
//                 99.8%
//               </div>
//               <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>
//                 On-Time Delivery
//               </div>
//             </div>

//             <div
//               className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
//               style={{
//                 backgroundColor: 'white',
//                 border: `1px solid ${colors.orange}30`,
//                 color: colors.darkBrown,
//               }}
//             >
//               <div className="text-xl sm:text-2xl font-bold mb-0.5" style={highlightText}>
//                 24/7
//               </div>
//               <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>
//                 Customer Support
//               </div>
//             </div>

//             <div
//               className="rounded-lg p-3 sm:p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
//               style={{
//                 backgroundColor: 'white',
//                 border: `1px solid ${colors.darkBrown}20`,
//                 color: colors.darkBrown,
//               }}
//             >
//               <div className="text-xl sm:text-2xl font-bold mb-0.5" style={highlightText}>
//                 ISO
//               </div>
//               <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>
//                 9001 Certified
//               </div>
//             </div>
//           </div>

//           {/* Services Grid - reduced card sizes */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative"
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 {/* Popular Badge */}
//                 {service.popular && (
//                   <div className="absolute -top-1 -right-1 z-20">
//                     <div
//                       className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg"
//                       style={{
//                         background: `linear-gradient(90deg, ${colors.orange}, ${colors.darkOrange})`,
//                         color: 'white',
//                       }}
//                     >
//                       POPULAR
//                     </div>
//                   </div>
//                 )}

//                 {/* Service Card */}
//                 <div
//                   className={`
//                     relative rounded-xl p-4
//                     transition-all duration-300 
//                     h-full flex flex-col
//                     ${
//                       hoveredIndex === index
//                         ? 'shadow-lg scale-[1.01] -translate-y-0.5'
//                         : 'shadow-sm hover:shadow-md'
//                     }
//                   `}
//                   style={{
//                     backgroundColor: 'white',
//                     border: `1px solid ${colors.lightTan}50`,
//                     color: colors.darkBrown,
//                   }}
//                 >
//                   {/* Icon and Stats Container */}
//                   <div className="flex justify-between items-start mb-2">
//                     {/* Icon Container */}
//                     <div
//                       className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300"
//                       style={{ background: service.gradient }}
//                     >
//                       <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                       <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
//                     </div>

//                     <div className="text-right">
//                       <div className="text-xs sm:text-sm font-bold" style={highlightText}>
//                         {service.stats}
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="text-base sm:text-lg font-bold mb-1" style={highlightText}>
//                     {service.title}
//                   </h3>

//                   <p
//                     className="text-xs sm:text-sm mb-2 leading-relaxed"
//                     style={{ color: colors.darkBrown, opacity: 0.8 }}
//                   >
//                     {service.description}
//                   </p>

//                   {/* Features List */}
//                   <ul className="space-y-1 mb-2 flex-grow">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start group/item">
//                         <div className="flex-shrink-0 mr-2 mt-0.5">
//                           <CheckCircle
//                             className="h-3 w-3 group-hover/item:scale-110 transition-transform"
//                             style={{
//                               color: idx % 2 === 0 ? colors.goldenYellow : colors.orange,
//                             }}
//                           />
//                         </div>
//                         <span className="text-xs" style={{ color: colors.darkBrown, opacity: 0.9 }}>
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Action Button */}
//                   <div className="mt-auto pt-2 border-t" style={{ borderColor: colors.lightTan + '30' }}>
//                     <button
//                       onClick={() => handleLearnMore(service)}
//                       className="group/btn flex items-center justify-between w-full font-semibold text-xs sm:text-sm hover:opacity-80 transition-all duration-300"
//                       style={{ color: colors.darkBrown }}
//                     >
//                       <span style={highlightText}>Learn More</span>
//                       <ArrowRight
//                         className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform"
//                         style={{ color: colors.darkBrown }}
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Section - reduced spacing and size */}
//           <div className="mt-6 sm:mt-8 text-center">
//             <div
//               className="rounded-xl p-4 sm:p-5 max-w-4xl mx-auto shadow-sm"
//               style={{
//                 backgroundColor: 'white',
//                 border: `1px solid ${colors.lightTan}50`,
//                 background: `linear-gradient(135deg, white, ${backgroundColors.lighter})`,
//               }}
//             >
//               <div className="inline-flex items-center justify-center gap-2 mb-2">
//                 <Shield className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: colors.goldenYellow }} />
//                 <Clock className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: colors.orange }} />
//                 <MapPin className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: colors.darkBrown }} />
//               </div>

//               <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1" style={highlightText}>
//                 Need Custom Logistics Solutions?
//               </h3>

//               <p className="mb-3 max-w-2xl mx-auto text-xs sm:text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>
//                 Our experts will design a logistics strategy tailored to your specific business needs
//               </p>

//               <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
//                 <Link
//                   href="/contact"
//                   className="group px-4 sm:px-5 py-2 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 text-xs sm:text-sm w-full sm:w-auto min-w-[160px] hover:scale-105"
//                   style={{
//                     background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
//                     color: colors.darkBrown,
//                   }}
//                 >
//                   <Users className="h-3 w-3 sm:h-4 sm:w-4" />
//                   Consult Our Experts
//                   <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>

//                 <Link
//                   href="/services"
//                   className="group px-4 sm:px-5 py-2 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 text-xs sm:text-sm w-full sm:w-auto min-w-[150px] hover:scale-105"
//                   style={{
//                     backgroundColor: 'white',
//                     color: colors.darkBrown,
//                     border: `1px solid ${colors.goldenYellow}`,
//                   }}
//                 >
//                   <span style={highlightText}>View All</span>
//                   <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform opacity-70" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Trust Indicators - reduced spacing */}
//           <div className="mt-4 sm:mt-5">
//             <div className="text-center mb-2">
//               <h4 className="text-xs font-semibold mb-1 tracking-wider" style={highlightText}>
//                 TRUSTED BY INDUSTRY LEADERS
//               </h4>
//               <div
//                 className="h-0.5 w-12 mx-auto rounded-full"
//                 style={{
//                   background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
//                 }}
//               />
//             </div>

//             <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4" style={{ color: colors.darkBrown, opacity: 0.8 }}>
//               <div className="text-xs sm:text-sm font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity" style={highlightText}>
//                 MAERSK
//               </div>
//               <div className="text-xs sm:text-sm font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity" style={highlightText}>
//                 DHL
//               </div>
//               <div className="text-xs sm:text-sm font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity" style={highlightText}>
//                 FEDEX
//               </div>
//               <div className="text-xs sm:text-sm font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity" style={highlightText}>
//                 UPS
//               </div>
//               <div className="text-xs sm:text-sm font-bold tracking-wide opacity-70 hover:opacity-100 transition-opacity" style={highlightText}>
//                 COSCO
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service Details Modal - keeping the modal unchanged as it's a popup */}
//       {selectedService && (
//         <div
//           className={`
//             fixed inset-0 z-50 flex items-center justify-center p-4
//             transition-opacity duration-300
//             ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
//           `}
//         >
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black transition-opacity duration-300"
//             style={{ opacity: isModalOpen ? 0.7 : 0 }}
//             onClick={closeModal}
//           />

//           {/* Modal Content */}
//           <div
//             className={`
//               relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
//               rounded-2xl shadow-2xl transition-all duration-300
//               ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
//             `}
//             style={{
//               backgroundColor: 'white',
//               color: colors.darkBrown,
//             }}
//           >
//             {/* Modal Header */}
//             <div
//               className="sticky top-0 z-10 p-4 border-b rounded-t-2xl flex justify-between items-center"
//               style={{
//                 backgroundColor: 'white',
//                 borderColor: colors.lightTan + '50',
//                 background: selectedService.gradient,
//               }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="p-2 rounded-lg bg-white bg-opacity-20">
//                   <selectedService.icon className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white">
//                     {selectedService.title}
//                   </h3>
//                   <div className="flex items-center gap-2 mt-0.5">
//                     <div className="text-white text-xs font-medium">{selectedService.stats}</div>
//                     {selectedService.popular && (
//                       <span className="px-1.5 py-0.5 text-xs font-bold rounded-full bg-white" style={{ color: colors.darkOrange }}>
//                         POPULAR
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={closeModal}
//                 className="p-1.5 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
//                 style={{ color: 'white' }}
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="p-4 sm:p-6">
//               {/* Overview */}
//               <div className="mb-4">
//                 <h4 className="text-base font-bold mb-2 flex items-center gap-2" style={darkText}>
//                   <CheckCircle className="h-4 w-4" style={{ color: colors.goldenYellow }} />
//                   Service Overview
//                 </h4>
//                 <p className="text-sm" style={regularText}>
//                   {selectedService.details.overview}
//                 </p>
//               </div>

//               {/* Key Benefits */}
//               <div className="mb-4">
//                 <h4 className="text-base font-bold mb-2" style={darkText}>
//                   Key Benefits
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                   {selectedService.details.keyBenefits.map((benefit, idx) => {
//                     const Icon = benefit.icon
//                     return (
//                       <div
//                         key={idx}
//                         className="flex items-start gap-2 p-3 rounded-lg"
//                         style={{
//                           backgroundColor: backgroundColors.lightGray,
//                           border: `1px solid ${colors.lightTan}30`,
//                         }}
//                       >
//                         <div className="p-1.5 rounded-lg flex-shrink-0" style={{ backgroundColor: colors.goldenYellow + '20' }}>
//                           {Icon && <Icon className="h-4 w-4" style={{ color: colors.goldenYellow }} />}
//                         </div>
//                         <span className="text-xs" style={darkText}>
//                           {benefit.text}
//                         </span>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>

//               {/* Details Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
//                 {selectedService.details.coverage && (
//                   <div className="p-3 rounded-lg border" style={{ borderColor: colors.lightTan + '50' }}>
//                     <div className="flex items-center gap-1.5 mb-1">
//                       <Globe className="h-4 w-4" style={{ color: colors.orange }} />
//                       <h5 className="font-bold text-xs" style={darkText}>
//                         Coverage
//                       </h5>
//                     </div>
//                     <p className="text-xs" style={lightText}>
//                       {selectedService.details.coverage}
//                     </p>
//                   </div>
//                 )}

//                 {selectedService.details.transitTime && (
//                   <div className="p-3 rounded-lg border" style={{ borderColor: colors.lightTan + '50' }}>
//                     <div className="flex items-center gap-1.5 mb-1">
//                       <Clock className="h-4 w-4" style={{ color: colors.goldenYellow }} />
//                       <h5 className="font-bold text-xs" style={darkText}>
//                         Transit Time
//                       </h5>
//                     </div>
//                     <p className="text-xs" style={lightText}>
//                       {selectedService.details.transitTime}
//                     </p>
//                   </div>
//                 )}

//                 {selectedService.details.pricing && (
//                   <div className="p-3 rounded-lg border" style={{ borderColor: colors.lightTan + '50' }}>
//                     <div className="flex items-center gap-1.5 mb-1">
//                       <DollarSign className="h-4 w-4" style={{ color: colors.darkOrange }} />
//                       <h5 className="font-bold text-xs" style={darkText}>
//                         Pricing
//                       </h5>
//                     </div>
//                     <p className="text-xs" style={lightText}>
//                       {selectedService.details.pricing}
//                     </p>
//                   </div>
//                 )}

//                 {selectedService.details.industries && (
//                   <div className="p-3 rounded-lg border" style={{ borderColor: colors.lightTan + '50' }}>
//                     <div className="flex items-center gap-1.5 mb-1">
//                       <UsersIcon className="h-4 w-4" style={{ color: colors.darkBrown }} />
//                       <h5 className="font-bold text-xs" style={darkText}>
//                         Industries
//                       </h5>
//                     </div>
//                     <div className="flex flex-wrap gap-1">
//                       {selectedService.details.industries.map((industry, idx) => (
//                         <span
//                           key={idx}
//                           className="px-2 py-0.5 text-xs rounded-full"
//                           style={{
//                             backgroundColor: colors.lightTan + '30',
//                             color: colors.darkBrown,
//                             border: `1px solid ${colors.lightTan}`,
//                           }}
//                         >
//                           {industry}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Features */}
//               <div className="mb-4">
//                 <h4 className="text-base font-bold mb-2" style={darkText}>
//                   Key Features
//                 </h4>
//                 <ul className="space-y-1">
//                   {selectedService.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <CheckCircle
//                         className="h-4 w-4 flex-shrink-0"
//                         style={{ color: idx % 2 === 0 ? colors.goldenYellow : colors.orange }}
//                       />
//                       <span className="text-xs" style={regularText}>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t" style={{ borderColor: colors.lightTan + '30' }}>
//                 <Link
//                   href="/contact"
//                   className="group flex-1 px-4 py-2 rounded-lg font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 text-sm"
//                   style={{
//                     background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
//                     color: colors.darkBrown,
//                   }}
//                 >
//                   <Users className="h-4 w-4" />
//                   Get Quote
//                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>

//                 <button
//                   onClick={closeModal}
//                   className="px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md border"
//                   style={{
//                     backgroundColor: 'white',
//                     color: colors.darkBrown,
//                     borderColor: colors.goldenYellow,
//                   }}
//                 >
//                   <span style={darkText}>Close</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }