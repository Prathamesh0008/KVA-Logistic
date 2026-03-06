'use client'

import { useState } from 'react'
import { 
  Search, MapPin, Package, Clock, Truck, Calendar, CheckCircle, 
  MessageSquare, Phone, Mail, Globe, Shield, ArrowRight, 
  AlertCircle, HelpCircle, ChevronRight, Download, Share2,
  Bell, RefreshCw, FileText, HeadphonesIcon, Star, Award,
  Clock3, BarChart3, Users, TrendingUp, Boxes, Ship,
  Plane, Train, Bike, Navigation, Copy, CheckCheck,
  Sparkles, Zap, Target, Compass, Gift, CreditCard,
  ShieldCheck, Wind, Sun, Cloud, Droplets, Thermometer,
  Menu, X
} from 'lucide-react'

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingData, setTrackingData] = useState(null)
  const [copied, setCopied] = useState(false)
  const [emailNotification, setEmailNotification] = useState('')
  const [activeTab, setActiveTab] = useState('tracking')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Professional color palette
  const colors = {
    darkBrown: '#2C1810',
    mediumBrown: '#8B4513',
    lightBrown: '#D2691E',
    goldenYellow: '#FFB81C',
    lightGold: '#FFD700',
    orange: '#FF8C42',
    darkOrange: '#CC5500',
    cream: '#FFF8E7',
    lightTan: '#F5DEB3',
    sage: '#9CAF88',
    forest: '#228B22',
    burgundy: '#800020'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trackingId.trim()) {
      setTrackingData({
        id: trackingId.toUpperCase(),
        status: 'IN_TRANSIT',
        statusText: 'In Transit - On Time',
        statusColor: colors.forest,
        origin: {
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
          facility: 'LAX Logistics Hub',
          code: 'LAX'
        },
        destination: {
          city: 'New York',
          state: 'NY',
          country: 'USA',
          facility: 'JFK Distribution Center',
          code: 'JFK'
        },
        currentLocation: {
          city: 'Chicago',
          state: 'IL',
          facility: 'Midwest Sorting Center'
        },
        estimatedDelivery: 'Jan 20, 2024',
        estimatedTime: '2:30 PM - 5:30 PM',
        weight: '15.5 kg',
        dimensions: '40 x 30 x 25 cm',
        shippingMethod: 'Express Air',
        service: 'Priority Overnight',
        trackingNumber: trackingId.toUpperCase(),
        customerReference: 'PO-2024-00123',
        pieces: 2,
        totalValue: '$1,250.00',
        insurance: 'Included',
        specialInstructions: 'Fragile - Handle with care',
        
        timeline: [
          { 
            id: 1, 
            status: 'Order Placed', 
            location: 'Los Angeles, CA', 
            date: 'Jan 15', 
            time: '09:30', 
            completed: true,
            description: 'Shipment information received',
            icon: FileText
          },
          { 
            id: 2, 
            status: 'Picked Up', 
            location: 'Los Angeles, CA', 
            date: 'Jan 15', 
            time: '11:45', 
            completed: true,
            description: 'Package picked up by carrier',
            icon: Package
          },
          { 
            id: 3, 
            status: 'Arrived at Facility', 
            location: 'Los Angeles Hub', 
            date: 'Jan 15', 
            time: '14:15', 
            completed: true,
            description: 'Sorting in progress',
            icon: Boxes
          },
          { 
            id: 4, 
            status: 'Departed Facility', 
            location: 'Los Angeles Hub', 
            date: 'Jan 16', 
            time: '08:00', 
            completed: true,
            description: 'Departed for destination',
            icon: Plane
          },
          { 
            id: 5, 
            status: 'In Transit', 
            location: 'Chicago, IL', 
            date: 'Jan 17', 
            time: '15:30', 
            completed: true,
            description: 'Arrived at Chicago sorting facility',
            icon: Train
          },
          { 
            id: 6, 
            status: 'Arrived at Hub', 
            location: 'New York Hub', 
            date: 'Jan 18', 
            time: '10:20', 
            completed: false,
            description: 'Processing at regional facility',
            icon: Truck
          },
          { 
            id: 7, 
            status: 'Out for Delivery', 
            location: 'New York, NY', 
            date: 'Jan 19', 
            time: '08:00', 
            completed: false,
            description: 'Package on delivery vehicle',
            icon: Bike
          },
          { 
            id: 8, 
            status: 'Delivered', 
            location: 'New York, NY', 
            date: 'Jan 20', 
            time: 'Expected', 
            completed: false,
            description: 'Awaiting delivery confirmation',
            icon: CheckCircle
          }
        ],
        
        trackingHistory: [
          { action: 'Label created', date: 'Jan 15, 2024', time: '09:30', user: 'System' },
          { action: 'Picked up', date: 'Jan 15, 2024', time: '11:45', user: 'Driver: John D.' },
          { action: 'Sorted at LAX', date: 'Jan 15, 2024', time: '14:15', user: 'Facility A' },
          { action: 'Departed LAX', date: 'Jan 16, 2024', time: '08:00', user: 'Flight AA1234' },
          { action: 'Arrived at ORD', date: 'Jan 17, 2024', time: '15:30', user: 'Chicago Hub' },
        ],
        
        milestones: {
          total: 8,
          completed: 5,
          remaining: 3,
          progress: 62.5
        },
        
        weather: {
          atOrigin: { condition: 'Sunny', temp: '72°F', icon: Sun },
          atDestination: { condition: 'Cloudy', temp: '45°F', icon: Cloud },
          atCurrent: { condition: 'Partly cloudy', temp: '38°F', icon: Wind }
        },
        
        deliveryOptions: {
          signature: 'Required',
          leaveWithNeighbor: false,
          alternateAddress: 'Available upon request'
        },
        
        contactInfo: {
          shipper: 'ABC Corp',
          shipperPhone: '+1 (800) 555-0123',
          shipperEmail: 'shipping@abccorp.com',
          recipient: 'John Smith',
          recipientPhone: '+1 (212) 555-4567',
          recipientEmail: 'john.smith@email.com'
        },

        carbonFootprint: '2.5 kg CO₂',
        routeOptimized: 'Yes - 15% shorter',
        estimatedSavings: '$45.00',
        sustainabilityScore: 'A'
      })
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Order Placed': return FileText
      case 'Picked Up': return Package
      case 'Arrived at Facility': return Boxes
      case 'Departed Facility': return Plane
      case 'In Transit': return Train
      case 'Arrived at Hub': return Truck
      case 'Out for Delivery': return Bike
      case 'Delivered': return CheckCircle
      default: return Package
    }
  }

  return (
    <div className=" bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Single Navigation Bar - Professional */}
      

      {/* Main Content */}
<div className="container mx-auto px-4 pt-2 pb-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: colors.darkBrown }}>Track Your </span>
            <span className="bg-clip-text text-transparent" style={{ 
              backgroundImage: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.goldenYellow})` 
            }}>
              Shipment
            </span>
          </h1>
          <p className="text-base mb-8" style={{ color: colors.darkBrown, opacity: 0.7 }}>
            Enter your tracking number to get real-time updates
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 border" style={{ borderColor: colors.goldenYellow + '30' }}>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: colors.goldenYellow }} />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter tracking number (e.g., LGSW123456789)"
                  className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition bg-white/50"
                  style={{ 
                    border: `1px solid ${colors.lightTan}`,
                    focusRing: colors.goldenYellow
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition hover:scale-105"
                style={{ 
                  backgroundColor: colors.goldenYellow,
                  color: colors.darkBrown
                }}
              >
                <Search className="h-5 w-5" />
                Track
              </button>
            </div>
          </form>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-xs" style={{ color: colors.darkBrown, opacity: 0.6 }}>Recent:</span>
            {['LGSW123456789', 'LGSW987654321', 'LGSW456123789'].map((num) => (
              <button
                key={num}
                onClick={() => setTrackingId(num)}
                className="px-3 py-1 text-xs rounded-full hover:scale-105 transition bg-white/50 border"
                style={{ borderColor: colors.goldenYellow + '30', color: colors.darkBrown }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Tracking Results */}
        {trackingData && (
          <div className="max-w-7xl mx-auto mt-12">
            {/* Status Header */}
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 mb-6 border" style={{ borderColor: colors.goldenYellow + '30' }}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                    <Package className="h-6 w-6" style={{ color: colors.goldenYellow }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold" style={{ color: colors.darkBrown }}>Shipment #{trackingData.id}</h2>
                      <span className="px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                        style={{ backgroundColor: trackingData.statusColor + '20', color: trackingData.statusColor }}>
                        <CheckCircle className="h-3 w-3" />
                        {trackingData.statusText}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.6 }}>Ref: {trackingData.customerReference}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-white/50 transition" onClick={() => copyToClipboard(trackingData.id)}>
                    {copied ? <CheckCheck className="h-5 w-5" style={{ color: colors.forest }} /> : <Copy className="h-5 w-5" style={{ color: colors.goldenYellow }} />}
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/50 transition">
                    <Download className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/50 transition">
                    <Share2 className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 mb-6 border" style={{ borderColor: colors.lightTan }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium" style={{ color: colors.darkBrown }}>Shipment Progress</span>
                <span className="text-sm px-2 py-0.5 rounded-full" style={{ backgroundColor: colors.goldenYellow + '20', color: colors.goldenYellow }}>
                  {trackingData.milestones.completed}/{trackingData.milestones.total} Steps
                </span>
              </div>
              <div className="h-2 bg-gray-200/50 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${trackingData.milestones.progress}%`,
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`
                  }}
                />
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Timeline & History */}
              <div className="lg:col-span-2 space-y-6">
                {/* Location Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border" style={{ borderColor: colors.goldenYellow + '30' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                      <h3 className="font-medium" style={{ color: colors.darkBrown }}>Origin</h3>
                    </div>
                    <p className="font-bold" style={{ color: colors.darkBrown }}>{trackingData.origin.city}, {trackingData.origin.state}</p>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.6 }}>{trackingData.origin.facility}</p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border" style={{ borderColor: colors.orange + '30' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Navigation className="h-4 w-4" style={{ color: colors.orange }} />
                      <h3 className="font-medium" style={{ color: colors.darkBrown }}>Current Location</h3>
                    </div>
                    <p className="font-bold" style={{ color: colors.darkBrown }}>{trackingData.currentLocation.city}, {trackingData.currentLocation.state}</p>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.6 }}>{trackingData.currentLocation.facility}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border" style={{ borderColor: colors.lightTan }}>
                  <h3 className="text-lg font-bold mb-4" style={{ color: colors.darkBrown }}>Tracking Timeline</h3>
                  <div className="space-y-4">
                    {trackingData.timeline.map((event) => {
                      const IconComponent = event.icon || getStatusIcon(event.status)
                      return (
                        <div key={event.id} className="flex gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}
                            style={{ backgroundColor: event.completed ? colors.forest + '20' : '#f3f4f6' }}>
                            <IconComponent className="h-4 w-4" style={{ color: event.completed ? colors.forest : '#9ca3af' }} />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap justify-between items-start gap-2">
                              <div>
                                <h4 className="font-medium" style={{ color: colors.darkBrown }}>{event.status}</h4>
                                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.6 }}>{event.description}</p>
                                <p className="text-xs mt-1" style={{ color: colors.goldenYellow }}>{event.location}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium" style={{ color: colors.darkBrown }}>{event.date}</div>
                                <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.5 }}>{event.time}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column - Package Info */}
              <div className="space-y-6">
                {/* Delivery Estimate */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border" style={{ borderColor: colors.goldenYellow + '30' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                    <h3 className="font-bold" style={{ color: colors.darkBrown }}>Estimated Delivery</h3>
                  </div>
                  <div className="text-2xl font-bold mb-1" style={{ color: colors.goldenYellow }}>{trackingData.estimatedDelivery}</div>
                  <p className="text-sm mb-3" style={{ color: colors.darkBrown, opacity: 0.6 }}>{trackingData.estimatedTime}</p>
                  
                  {/* Quick Countdown */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 rounded-lg" style={{ backgroundColor: colors.goldenYellow + '10' }}>
                      <div className="text-lg font-bold" style={{ color: colors.darkBrown }}>02</div>
                      <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.6 }}>Days</div>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ backgroundColor: colors.orange + '10' }}>
                      <div className="text-lg font-bold" style={{ color: colors.darkBrown }}>14</div>
                      <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.6 }}>Hours</div>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ backgroundColor: colors.forest + '10' }}>
                      <div className="text-lg font-bold" style={{ color: colors.darkBrown }}>32</div>
                      <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.6 }}>Mins</div>
                    </div>
                  </div>
                </div>

                {/* Package Details */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border" style={{ borderColor: colors.lightTan }}>
                  <h3 className="font-bold mb-3" style={{ color: colors.darkBrown }}>Package Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: colors.darkBrown, opacity: 0.6 }}>Weight:</span>
                      <span className="font-medium" style={{ color: colors.darkBrown }}>{trackingData.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: colors.darkBrown, opacity: 0.6 }}>Dimensions:</span>
                      <span className="font-medium" style={{ color: colors.darkBrown }}>{trackingData.dimensions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: colors.darkBrown, opacity: 0.6 }}>Service:</span>
                      <span className="font-medium" style={{ color: colors.goldenYellow }}>{trackingData.service}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: colors.darkBrown, opacity: 0.6 }}>Value:</span>
                      <span className="font-medium" style={{ color: colors.forest }}>{trackingData.totalValue}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border" style={{ borderColor: colors.lightTan }}>
                  <h3 className="font-bold mb-3" style={{ color: colors.darkBrown }}>Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full p-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition hover:scale-105"
                      style={{ backgroundColor: colors.goldenYellow + '20', color: colors.darkBrown }}>
                      <Bell className="h-4 w-4" />
                      Get Notifications
                    </button>
                    <button className="w-full p-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition hover:scale-105"
                      style={{ backgroundColor: colors.orange + '20', color: colors.darkBrown }}>
                      <HeadphonesIcon className="h-4 w-4" />
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Tracking Data - Services */}
        {!trackingData && (
          <div className="max-w-7xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: colors.darkBrown }}>
              Why Choose LogiTrack?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: 'Real-time Tracking', desc: 'Live updates every 30 seconds' },
                { icon: Shield, title: 'Secure Shipping', desc: 'End-to-end package protection' },
                { icon: Globe, title: 'Global Network', desc: 'Coverage in 200+ countries' }
              ].map((feature, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border" style={{ borderColor: colors.goldenYellow + '30' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                    <feature.icon className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: colors.darkBrown }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}




