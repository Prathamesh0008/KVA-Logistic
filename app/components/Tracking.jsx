'use client'

import { useState, useEffect } from 'react'
import {
  Search,
  MapPin,
  Package,
  Clock,
  Truck,
  CheckCircle,
  AlertCircle,
  Plane,
  Warehouse,
  Home,
  Bell,
  Download,
  Share2,
  Radio,
  Shield,
  Zap,
  ChevronRight,
  Copy,
  QrCode,
  Phone,
  HelpCircle,
} from 'lucide-react'

// Color palette matching your logo
const colors = {
  darkBrown: '#521903', // Primary dark
  goldenYellow: '#f8b936', // Primary accent
  orange: '#dc8c18', // Secondary accent
  darkOrange: '#9f4409', // Dark accent
  lightTan: '#c29f85', // Light accent
}

// Light background colors
const backgroundColors = {
  light: '#fefefe',
  lighter: '#f9f9f9',
  lightGray: '#f5f5f5',
  warmWhite: '#faf8f5',
}

// ✅ Use same highlight style everywhere you want “main highlighted text”
// This gradient-text approach uses background-clip with transparent text fill. [web:4][web:20]
const highlightText = {
  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text', 
}

export default function Tracking() {
  const [trackingId, setTrackingId] = useState('')
  const [activeStatus, setActiveStatus] = useState('in-transit')
  const [searchHistory, setSearchHistory] = useState([])
  const [showSample, setShowSample] = useState(true)
  const [estimatedDelivery, setEstimatedDelivery] = useState('Jan 20, 2024')
  const [autoRefresh, setAutoRefresh] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trackingId.trim()) {
      if (!searchHistory.includes(trackingId)) {
        setSearchHistory((prev) => [trackingId, ...prev.slice(0, 4)])
      }
      setShowSample(true)
      console.log('Tracking:', trackingId)
    }
  }

  const copyTrackingId = () => {
    navigator.clipboard.writeText('LGSW123456789')
    alert('Tracking ID copied to clipboard!')
  }

  const statusOptions = [
    { id: 'preparing', label: 'Preparing', bgColor: colors.goldenYellow, textColor: colors.darkBrown, icon: Package },
    { id: 'in-transit', label: 'In Transit', bgColor: colors.orange, textColor: colors.darkBrown, icon: Truck },
    { id: 'delivered', label: 'Delivered', bgColor: colors.lightTan, textColor: colors.darkBrown, icon: CheckCircle },
    { id: 'delayed', label: 'Delayed', bgColor: colors.darkOrange, textColor: 'white', icon: AlertCircle },
  ]

  const timelineSteps = [
    {
      id: 1,
      status: 'Order Confirmed',
      location: 'Los Angeles, CA',
      time: 'Jan 15, 09:30 AM',
      completed: true,
      icon: CheckCircle,
      color: colors.goldenYellow,
      details: 'Order has been confirmed and processing has begun.',
    },
    {
      id: 2,
      status: 'Package Prepared',
      location: 'LA Warehouse',
      time: 'Jan 15, 02:15 PM',
      completed: true,
      icon: Warehouse,
      color: colors.orange,
      details: 'Package has been labeled and prepared for shipping.',
    },
    {
      id: 3,
      status: 'Picked Up',
      location: 'Los Angeles, CA',
      time: 'Jan 16, 09:00 AM',
      completed: true,
      icon: Truck,
      color: colors.darkOrange,
      details: 'Package has been picked up by our logistics team.',
    },
    {
      id: 4,
      status: 'Arrived at Hub',
      location: 'Phoenix, AZ',
      time: 'Jan 17, 03:30 PM',
      completed: true,
      icon: Warehouse,
      color: colors.darkBrown,
      details: 'Package arrived at regional sorting facility.',
    },
    {
      id: 5,
      status: 'In Transit',
      location: 'Dallas, TX',
      time: 'Jan 18, 10:20 AM',
      completed: true,
      icon: Plane,
      color: colors.lightTan,
      details: 'Package is in transit to destination hub.',
      current: true,
    },
    {
      id: 6,
      status: 'Arrival at Destination',
      location: 'Houston, TX',
      time: 'Jan 19, 02:00 PM (EST)',
      completed: false,
      icon: MapPin,
      color: `${colors.darkBrown}40`,
      details: 'Expected arrival at destination hub.',
    },
    {
      id: 7,
      status: 'Out for Delivery',
      location: 'Houston, TX',
      time: 'Jan 20, 08:00 AM (EST)',
      completed: false,
      icon: Truck,
      color: `${colors.darkBrown}40`,
      details: 'Package will be out for delivery.',
    },
    {
      id: 8,
      status: 'Delivered',
      location: 'Houston, TX',
      time: 'Jan 20, 12:00 PM (EST)',
      completed: false,
      icon: Home,
      color: `${colors.darkBrown}40`,
      details: 'Expected delivery to recipient.',
    },
  ]

  const packageDetails = {
    weight: '15.5 kg',
    dimensions: '40×30×25 cm',
    service: 'Express Delivery',
    insurance: 'Covered ($1,000)',
    value: '$850.00',
  }

  // Auto refresh simulation
  useEffect(() => {
    let interval
    if (autoRefresh) {
      interval = setInterval(() => {
        console.log('Auto-refreshing tracking data...')
      }, 30000)
    }
    return () => clearInterval(interval)
  }, [autoRefresh])

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative" style={{ backgroundColor: backgroundColors.warmWhite }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div
              className="inline-flex items-center gap-2 rounded-full mb-4 px-4 py-2 shadow-sm"
              style={{
                backgroundColor: colors.goldenYellow,
                color: colors.darkBrown,
                border: `1px solid ${colors.darkBrown}20`,
              }}
            >
              <Radio className="h-4 w-4" />
              <span className="text-sm font-semibold">LIVE TRACKING</span>
            </div>

       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
  <span style={{ color: '#f8b936' }}>
    Track Your
  </span>
  <span className="block" style={{ color: '#8B5A2B' }}>
    Shipment in Real-Time
  </span>
</h2>


            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: colors.darkBrown, opacity: 0.7 }}>
              Enter your tracking number for live updates, estimated delivery times, and detailed shipment information
            </p>
          </div>

          {/* Main Tracking Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {/* Left Column - Tracking Form */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl shadow-sm p-6 sm:p-8"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                }}
              >
                {/* Tracking Form */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {/* ✅ highlight */}
                    <h3 className="text-xl font-bold" style={{ color: '#f8b936' }}>

                      Enter Tracking Number
                    </h3>

                    <button
                      onClick={() => setTrackingId('LGSW123456789')}
                      className="text-sm flex items-center gap-1 hover:opacity-80 transition-opacity"
                      style={{
  background: 'linear-gradient(90deg, #8B5A2B, #D99A3E)',
  color: '#FFFFFF',
}}

                    >
                      <QrCode className="h-4 w-4" />
                      <span style={{
  background: 'linear-gradient(90deg, #8B5A2B, #D99A3E)',
  color: '#FFFFFF',
}}
>Scan QR Code</span>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-grow relative">
                        <input
                          type="text"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          placeholder="Enter tracking number (e.g., LGSW123456789)"
                          className="w-full px-6 py-4 pl-12 rounded-xl focus:ring-2 transition-all text-lg"
                          style={{
                            border: `1px solid ${colors.lightTan}`,
                            backgroundColor: `${colors.lightTan}10`,
                            color: colors.darkBrown,
                          }}
                        />
                        <Package
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
                          style={{ color: colors.darkBrown, opacity: 0.5 }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="group px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 whitespace-nowrap hover:scale-105"
                        style={{
                          background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                          color: colors.darkBrown,
                        }}
                      >
                        <Search className="h-5 w-5" />
<span style={{ color: '#8B5A2B' }}>Track Shipment</span>
<Zap className="h-4 w-4 group-hover:animate-pulse" />

                      </button>
                    </div>
                  </form>

                  {/* Recent Searches */}
                  {searchHistory.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2" style={highlightText}>
                        Recent Searches
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((id, idx) => (
                          <button
                            key={idx}
                            onClick={() => setTrackingId(id)}
                            className="text-sm px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 hover:opacity-80"
                            style={{
                              backgroundColor: `${colors.lightTan}20`,
                              color: colors.darkBrown,
                            }}
                          >
                            <span style={highlightText}>{id}</span>
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status Toggle */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold mb-3" style={highlightText}>
                      Quick Status
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {statusOptions.map((status) => (
                        <button
                          key={status.id}
                          onClick={() => setActiveStatus(status.id)}
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                            activeStatus === status.id ? 'border-2 shadow-sm' : 'border hover:opacity-90'
                          }`}
                          style={{
                            backgroundColor:
                              activeStatus === status.id ? status.bgColor + '20' : `${colors.lightTan}10`,
                            borderColor: activeStatus === status.id ? status.bgColor : colors.lightTan,
                            color: activeStatus === status.id ? status.textColor : colors.darkBrown,
                          }}
                        >
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.bgColor }} />
                          <span className="text-sm font-medium" style={highlightText}>
                            {status.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sample Tracking Info */}
                {showSample && (
                  <div
                    className="rounded-2xl p-6 border shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${colors.goldenYellow}10, ${colors.orange}10)`,
                      borderColor: colors.lightTan,
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Tracking ID
                        </div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold font-mono" style={highlightText}>
                            LGSW123456789
                          </h3>
                          <button
                            onClick={copyTrackingId}
                            className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                            title="Copy tracking ID"
                          >
                            <Copy className="h-4 w-4" style={{ color: colors.darkBrown, opacity: 0.5 }} />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end">
                        <div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2"
                          style={{
                            backgroundColor: colors.goldenYellow + '30',
                            color: colors.darkBrown,
                          }}
                        >
                          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.goldenYellow }} />
                          <span className="font-semibold" style={highlightText}>
                            ACTIVE
                          </span>
                        </div>
                        <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Last updated: 10 minutes ago
                        </div>
                      </div>
                    </div>

                    {/* Status Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Estimated Delivery
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          {estimatedDelivery}
                        </div>
                      </div>

                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Current Location
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          Dallas, TX
                        </div>
                      </div>

                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Shipping Method
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          Express Air
                        </div>
                      </div>

                      <div className="rounded-xl p-4" style={{ backgroundColor: 'white' }}>
                        <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                          Package Status
                        </div>
                        <div className="text-lg font-bold" style={highlightText}>
                          In Transit
                        </div>
                      </div>
                    </div>

                    {/* Package Details */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4" style={highlightText}>
                        Package Details
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {Object.entries(packageDetails).map(([key, value]) => (
                          <div key={key} className="rounded-lg p-3" style={{ backgroundColor: 'white' }}>
                            <div className="text-xs uppercase tracking-wider" style={{ color: colors.darkBrown, opacity: 0.5 }}>
                              {key}
                            </div>
                            <div className="text-sm font-semibold" style={highlightText}>
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
                        style={{
                          backgroundColor: colors.goldenYellow,
                          color: colors.darkBrown,
                        }}
                      >
                        <Bell className="h-4 w-4" />
                        <span style={{ color: colors.darkBrown }}>Get Updates</span>
                      </button>

                      <button
  className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
  style={{
    backgroundColor: colors.goldenYellow,
    color: colors.darkBrown,
    border: `1px solid ${colors.lightTan}`,
  }}
>
  <Share2 className="h-4 w-4" />
  <span>Share Status</span>
</button>


                     <button
  className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
  style={{
    backgroundColor: colors.goldenYellow,
    color: colors.darkBrown,
    border: `1px solid ${colors.lightTan}`,
  }}
>
  <Download className="h-4 w-4" />
  <span>Export</span>
</button>


                      <button
  onClick={() => setAutoRefresh(!autoRefresh)}
  className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors hover:opacity-90"
  style={{
    backgroundColor: autoRefresh ? colors.goldenYellow : colors.lightTan,
    color: colors.darkBrown,
    border: `1px solid ${autoRefresh ? colors.goldenYellow : colors.lightTan}`,
  }}
>
  <Radio className="h-4 w-4" />
  <span>{autoRefresh ? 'Auto Refresh ON' : 'Auto Refresh'}</span>
</button>

                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div>
              <div
                className="rounded-2xl shadow-sm p-6 sm:p-8 h-full"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold" style={highlightText}>
                    Delivery Timeline
                  </h3>
                  <Shield className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                  {timelineSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {index < timelineSteps.length - 1 && (
                        <div
                          className="absolute left-4 top-8 h-12 w-0.5"
                          style={{
                            backgroundColor: step.completed ? colors.lightTan : `${colors.lightTan}50`,
                          }}
                        />
                      )}

                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: step.completed
                              ? `${colors.goldenYellow}20`
                              : step.current
                                ? `${colors.orange}20`
                                : `${colors.lightTan}10`,
                          }}
                        >
                          <step.icon className="h-4 w-4" style={{ color: step.color }} />
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4
                              className="font-semibold"
                              style={step.completed ? highlightText : { color: `${colors.darkBrown}80` }}
                            >
                              {step.status}
                            </h4>
                            <span
                              className="text-sm"
                              style={{
                                color: step.completed ? `${colors.darkBrown}70` : `${colors.darkBrown}40`,
                              }}
                            >
                              {step.time}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3" style={{ color: colors.darkBrown, opacity: 0.5 }} />
                            <span className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                              {step.location}
                            </span>
                          </div>

                          <p className="text-sm mt-2" style={{ color: colors.darkBrown, opacity: 0.6 }}>
                            {step.details}
                          </p>

                          {step.current && (
                            <div
                              className="mt-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded"
                              style={{
                                backgroundColor: `${colors.goldenYellow}20`,
                                color: colors.darkBrown,
                              }}
                            >
                              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.goldenYellow }} />
                              <span style={highlightText}>CURRENT LOCATION</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Estimated Delivery Card */}
                <div
                  className="mt-8 rounded-xl p-4 border"
                  style={{
                    backgroundColor: `${colors.goldenYellow}10`,
                    borderColor: colors.lightTan,
                    color: colors.darkBrown,
                  }}
                >
                  <div className="text-sm mb-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                    Estimated Delivery
                  </div>
                  <div className="text-2xl font-bold" style={highlightText}>
                    {estimatedDelivery}
                  </div>
                  <div className="text-sm mt-2" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                    by 12:00 PM
                  </div>
                  <div className="w-full h-2 rounded-full mt-3 overflow-hidden" style={{ backgroundColor: `${colors.lightTan}50` }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: '70%',
                        background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help Section */}
          <div
            className="rounded-2xl p-6 sm:p-8 shadow-sm"
            style={{
              backgroundColor: 'white',
              border: `1px solid ${colors.lightTan}50`,
              background: `linear-gradient(135deg, white, ${backgroundColors.lighter})`,
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={highlightText}>
              Need Help With Tracking?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="rounded-xl p-5 hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: `${colors.goldenYellow}10`,
                  border: `1px solid ${colors.goldenYellow}30`,
                }}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2" style={highlightText}>
                  <HelpCircle className="h-5 w-5" />
                  Can't find tracking number?
                </div>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Check your email confirmation or shipping documents.
                </p>
              </div>

              <div
                className="rounded-xl p-5 hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: `${colors.orange}10`,
                  border: `1px solid ${colors.orange}30`,
                }}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2" style={highlightText}>
                  <Clock className="h-5 w-5" />
                  Tracking not updating?
                </div>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  Updates may take 24-48 hours to appear. Contact support if delayed.
                </p>
              </div>

              <div
                className="rounded-xl p-5 hover:shadow-md transition-shadow"
                style={{
                  backgroundColor: `${colors.darkBrown}10`,
                  border: `1px solid ${colors.darkBrown}20`,
                }}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2" style={highlightText}>
                  <Phone className="h-5 w-5" />
                  Contact Support
                </div>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
  Call <span className="font-bold">+316872022074</span> or email{' '}
  <a
    href="mailto:support@logisticskva.com"
    style={{ color: colors.goldenYellow }}
    className="font-medium hover:underline"
  >
    support@logisticskva.com
  </a>
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
