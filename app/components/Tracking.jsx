'use client'

import { useState, useEffect } from 'react'
import {
  Search, Package, CheckCircle, AlertCircle, Loader2,
  RefreshCw, Copy, CheckCheck, Download, Share2,
  MapPin, Navigation, Calendar, Bell, HeadphonesIcon,
  Phone, Mail, Star, Leaf, Zap, TrendingUp, Award,
  FileText, Boxes, Plane, Train, Truck, Bike, Map,
  LocateFixed, ArrowRight, ShieldCheck, Clock3,
  Droplets, Gift, MessageCircle, ChevronRight,
  ChevronDown, ChevronUp, Globe, Shield
} from 'lucide-react'

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingData, setTrackingData] = useState(null)
  const [copied, setCopied] = useState(false)
  const [emailNotification, setEmailNotification] = useState('')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [learnMoreExpanded, setLearnMoreExpanded] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const colors = {
    darkBrown: '#2C1810',
    goldenYellow: '#FFB81C',
    orange: '#FF8C42',
    cream: '#FFF8E7',
    lightTan: '#F5DEB3',
    sage: '#9CAF88',
    forest: '#228B22',
  }

  const getIconComponent = (status) => {
    switch (status) {
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

  const fetchTrackingData = async (id) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`https://api.yourlogistics.com/tracking/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Tracking number not found or API error')
      }

      const data = await response.json()

      const mappedData = {
        id: data.trackingNumber,
        status: data.statusCode,
        statusText: data.statusDescription,
        statusColor: data.statusColor || colors.forest,
        origin: data.origin || {},
        destination: data.destination || {},
        currentLocation: data.currentLocation || {},
        estimatedDelivery: data.estimatedDelivery || 'TBD',
        estimatedTime: data.estimatedTime || '',
        weight: data.weight || 'N/A',
        dimensions: data.dimensions || 'N/A',
        service: data.service || 'Standard',
        customerReference: data.customerReference || 'N/A',
        totalValue: data.totalValue || '$0.00',
        timeline: (data.timeline || []).map((event) => ({
          ...event,
          icon: getIconComponent(event.status),
        })),
        milestones: data.milestones || { total: 0, completed: 0, progress: 0 },
        carbonFootprint: data.carbonFootprint || 'N/A',
        routeOptimized: data.routeOptimized || 'No',
        estimatedSavings: data.estimatedSavings || '$0.00',
        sustainabilityScore: data.sustainabilityScore || 'N/A',
        routeStops: data.routeStops || [],
      }

      setTrackingData(mappedData)
      setLastUpdate(new Date().toLocaleTimeString())
    } catch (err) {
      setError(err.message || 'Failed to fetch tracking information')
      setTrackingData(null)
    } finally {
      setLoading(false)
    }
  }

 const handleSubmit = (e) => {
  e.preventDefault()
  setHasSearched(true)

  if (trackingId.trim()) {
    fetchTrackingData(trackingId.trim())
  }
}

  useEffect(() => {
    let intervalId

    if (trackingData?.id) {
      intervalId = setInterval(() => {
        fetchTrackingData(trackingData.id)
      }, 30000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [trackingData?.id])

  const refreshTracking = () => {
    if (trackingData?.id) fetchTrackingData(trackingData.id)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white font-light tracking-wide py-10">
      <div className="container mx-auto px-4 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #2C1810 0%, #9F4100 45%, #FFB81C 100%)',
              }}
            >
              Track Your Shipment
            </span>
          </h1>

          <p className="text-base mb-8 text-[#2C1810]/70">
            Enter your tracking number to get real-time updates
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-4 border"
            style={{ borderColor: colors.goldenYellow + '55' }}
          >
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                  style={{ color: colors.goldenYellow }}
                />

                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter tracking number (e.g., LGSW123456789)"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2"
                  style={{
                    border: `1px solid ${colors.lightTan}`,
                    color: colors.darkBrown,
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition hover:scale-105 disabled:opacity-50"
                style={{
                  backgroundColor: colors.goldenYellow,
                  color: colors.darkBrown,
                }}
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
                {loading ? 'Tracking...' : 'Track'}
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-sm text-[#2C1810]/60">Recent:</span>

            {['LGSW123456789', 'LGSW987654321', 'LGSW456123789'].map((num) => (
              <button
                key={num}
                onClick={() => setTrackingId(num)}
                className="px-4 py-1.5 text-sm rounded-full hover:scale-105 transition bg-white border"
                style={{
                  borderColor: colors.goldenYellow + '55',
                  color: colors.darkBrown,
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
{error && hasSearched && (
  <div className="max-w-4xl mx-auto mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
    <AlertCircle className="h-5 w-5" />
    <span>{error}</span>
  </div>
)}

        {trackingData && (
          <div className="max-w-7xl mx-auto mt-12">
            <div className="bg-white rounded-xl p-6 mb-6 border shadow-md" style={{ borderColor: colors.goldenYellow + '40' }}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                    <Package className="h-6 w-6" style={{ color: colors.goldenYellow }} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold" style={{ color: colors.darkBrown }}>
                        Shipment #{trackingData.id}
                      </h2>

                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                        style={{
                          backgroundColor: trackingData.statusColor + '20',
                          color: trackingData.statusColor,
                        }}
                      >
                        <CheckCircle className="h-3 w-3" />
                        {trackingData.statusText}
                      </span>
                    </div>

                    <p className="text-sm text-[#2C1810]/60">
                      Ref: {trackingData.customerReference}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={refreshTracking} disabled={loading} className="p-2 rounded-lg hover:bg-orange-50 transition">
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" style={{ color: colors.goldenYellow }} />
                    ) : (
                      <RefreshCw className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                    )}
                  </button>

                  <button className="p-2 rounded-lg hover:bg-orange-50 transition" onClick={() => copyToClipboard(trackingData.id)}>
                    {copied ? (
                      <CheckCheck className="h-5 w-5" style={{ color: colors.forest }} />
                    ) : (
                      <Copy className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                    )}
                  </button>

                  <button className="p-2 rounded-lg hover:bg-orange-50 transition">
                    <Download className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </button>

                  <button className="p-2 rounded-lg hover:bg-orange-50 transition">
                    <Share2 className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </button>
                </div>
              </div>

              <div className="text-right text-xs mt-2 text-[#2C1810]/50">
                Last updated: {lastUpdate}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-6 border shadow-sm" style={{ borderColor: colors.lightTan }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#2C1810]">Shipment Progress</span>
                <span className="text-sm px-2 py-0.5 rounded-full" style={{ backgroundColor: colors.goldenYellow + '20', color: colors.goldenYellow }}>
                  {trackingData.milestones.completed}/{trackingData.milestones.total} Steps
                </span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${trackingData.milestones.progress}%`,
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {!trackingData && !loading && !error && (
          <div className="max-w-7xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#2C1810]">
              Why Choose LogiTrack?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Zap, title: 'Real-time Tracking', desc: 'Live updates every 30 seconds' },
                { icon: Shield, title: 'Secure Shipping', desc: 'End-to-end package protection' },
                { icon: Globe, title: 'Global Network', desc: 'Coverage in 200+ countries' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border shadow-sm"
                  style={{ borderColor: colors.goldenYellow + '40' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: colors.goldenYellow + '20' }}
                  >
                    <feature.icon className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </div>

                  <h3 className="font-normal tracking-wide mb-1 text-[#2C1810]">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#2C1810]/60">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: colors.lightTan }}>
                <h3 className="font-normal tracking-wide mb-3 flex items-center gap-2 text-[#2C1810]">
                  <MessageCircle className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                  Need Help Finding Your Tracking Number?
                </h3>

                <p className="text-sm mb-4 text-[#2C1810]/70">
                  Check your order confirmation email or shipping notification. The tracking number is usually a 12-15 digit code starting with "LGSW".
                </p>

                <button
                  className="text-sm font-medium flex items-center gap-1 transition hover:gap-2"
                  style={{ color: colors.goldenYellow }}
                  onClick={() => setLearnMoreExpanded(!learnMoreExpanded)}
                >
                  {learnMoreExpanded ? 'Show Less' : 'Learn More'}
                  {learnMoreExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </button>

                {learnMoreExpanded && (
                  <div className="mt-4 p-4 rounded-lg bg-orange-50">
                    <h4 className="font-medium mb-2 text-[#2C1810]">
                      Where to find your tracking number:
                    </h4>

                    <ul className="space-y-2 text-sm text-[#2C1810]/80">
                      {[
                        'Order confirmation email from the sender',
                        'Shipping notification email with subject "Your order has shipped"',
                        'On the shipping label or receipt if you dropped off the package',
                        "In your account order history on the retailer's website",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5" style={{ color: colors.forest }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl p-6 border shadow-sm" style={{ borderColor: colors.lightTan }}>
                <h3 className="font-normal tracking-wide mb-3 flex items-center gap-2 text-[#2C1810]">
                  <Bell className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                  Never Miss an Update
                </h3>

                <p className="text-sm mb-4 text-[#2C1810]/70">
                  Sign up for SMS or email alerts to receive real-time notifications about your shipment's status.
                </p>

                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={emailNotification}
onChange={(e) => {
  setTrackingId(e.target.value)
  setError('')
  setHasSearched(false)
}}
                    className="flex-1 px-3 py-2 rounded-lg text-sm bg-white border focus:outline-none focus:ring-2"
                    style={{ borderColor: colors.lightTan, color: colors.darkBrown }}
                  />

                  <button
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: colors.goldenYellow, color: colors.darkBrown }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}