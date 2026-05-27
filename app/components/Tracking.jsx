'use client'

import { useState, useEffect } from 'react'
import {
  Search, Package, CheckCircle, AlertCircle, Loader2,
  RefreshCw, Copy, CheckCheck, Download, Share2,
  FileText, Boxes, Plane, Train, Truck, Bike,
  Bell, Zap, MessageCircle, ChevronRight, ChevronUp,
  Globe, Shield
} from 'lucide-react'

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingData, setTrackingData] = useState(null)
  const [copied, setCopied] = useState(false)
  const [emailNotification, setEmailNotification] = useState('')
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

    setTimeout(() => {
      if (!id) {
        setError('Please enter tracking number')
        setLoading(false)
        return
      }

      const demoData = {
        trackingNumber: id,
        statusCode: 'IN_TRANSIT',
        statusDescription: 'In Transit',
        statusColor: colors.goldenYellow,
        origin: { city: 'Mumbai', country: 'India' },
        destination: { city: 'Pune', country: 'India' },
        currentLocation: { city: 'Navi Mumbai Hub' },
        estimatedDelivery: 'Tomorrow',
        estimatedTime: '6:00 PM',
        weight: '12 kg',
        dimensions: '40 x 30 x 25 cm',
        service: 'Express Delivery',
        customerReference: 'KVA-ORDER-1024',
        totalValue: '₹12,500',
        milestones: {
          total: 5,
          completed: 3,
          progress: 60,
        },
        timeline: [
          {
            status: 'Order Placed',
            title: 'Order Placed',
            location: 'Mumbai',
            date: 'Today',
            time: '09:00 AM',
          },
          {
            status: 'Picked Up',
            title: 'Package Picked Up',
            location: 'Mumbai',
            date: 'Today',
            time: '11:30 AM',
          },
          {
            status: 'In Transit',
            title: 'Shipment In Transit',
            location: 'Navi Mumbai Hub',
            date: 'Today',
            time: '02:15 PM',
          },
        ],
      }

      setTrackingData({
        id: demoData.trackingNumber,
        status: demoData.statusCode,
        statusText: demoData.statusDescription,
        statusColor: demoData.statusColor,
        origin: demoData.origin,
        destination: demoData.destination,
        currentLocation: demoData.currentLocation,
        estimatedDelivery: demoData.estimatedDelivery,
        estimatedTime: demoData.estimatedTime,
        weight: demoData.weight,
        dimensions: demoData.dimensions,
        service: demoData.service,
        customerReference: demoData.customerReference,
        totalValue: demoData.totalValue,
        timeline: demoData.timeline.map((event) => ({
          ...event,
          icon: getIconComponent(event.status),
        })),
        milestones: demoData.milestones,
      })

      setLastUpdate(new Date().toLocaleTimeString())
      setLoading(false)
    }, 800)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setHasSearched(true)

    if (!trackingId.trim()) {
      setError('Please enter tracking number')
      return
    }

    fetchTrackingData(trackingId.trim())
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

  return (
    <div className="min-h-screen bg-white py-10 font-light tracking-wide">
      <div className="container mx-auto px-4 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-light tracking-wide md:text-5xl">
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

          <p className="mb-8 text-base text-[#2C1810]/70">
            Enter your tracking number to get real-time updates
          </p>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border bg-white p-4 shadow-lg"
            style={{ borderColor: colors.goldenYellow + '55' }}
          >
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
                  style={{ color: colors.goldenYellow }}
                />

                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => {
                    setTrackingId(e.target.value)
                    setError('')
                    setHasSearched(false)
                  }}
                  placeholder="Enter tracking number e.g. LGSW123456789"
                  className="w-full rounded-lg bg-white py-3 pl-10 pr-4 focus:outline-none focus:ring-2"
                  style={{
                    border: `1px solid ${colors.lightTan}`,
                    color: colors.darkBrown,
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition hover:scale-105 disabled:opacity-50"
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

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-[#2C1810]/60">Recent:</span>

            {['LGSW123456789', 'LGSW987654321', 'LGSW456123789'].map((num) => (
              <button
                key={num}
                onClick={() => setTrackingId(num)}
                className="cursor-pointer rounded-full border bg-white px-4 py-1.5 text-sm transition hover:scale-105"
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
          <div className="mx-auto mt-6 flex max-w-4xl items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        {trackingData && (
          <div className="mx-auto mt-12 max-w-7xl">
            <div
              className="mb-6 rounded-xl border bg-white p-6 shadow-md"
              style={{ borderColor: colors.goldenYellow + '40' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="rounded-lg p-3"
                    style={{ backgroundColor: colors.goldenYellow + '20' }}
                  >
                    <Package className="h-6 w-6" style={{ color: colors.goldenYellow }} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-bold" style={{ color: colors.darkBrown }}>
                        Shipment #{trackingData.id}
                      </h2>

                      <span
                        className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium"
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
                  <button
                    onClick={refreshTracking}
                    disabled={loading}
                    className="cursor-pointer rounded-lg p-2 transition hover:bg-orange-50"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" style={{ color: colors.goldenYellow }} />
                    ) : (
                      <RefreshCw className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                    )}
                  </button>

                  <button
                    className="cursor-pointer rounded-lg p-2 transition hover:bg-orange-50"
                    onClick={() => copyToClipboard(trackingData.id)}
                  >
                    {copied ? (
                      <CheckCheck className="h-5 w-5" style={{ color: colors.forest }} />
                    ) : (
                      <Copy className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                    )}
                  </button>

                  <button className="cursor-pointer rounded-lg p-2 transition hover:bg-orange-50">
                    <Download className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </button>

                  <button className="cursor-pointer rounded-lg p-2 transition hover:bg-orange-50">
                    <Share2 className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </button>
                </div>
              </div>

              <div className="mt-2 text-right text-xs text-[#2C1810]/50">
                Last updated: {lastUpdate}
              </div>
            </div>

            <div
              className="mb-6 rounded-xl border bg-white p-4 shadow-sm"
              style={{ borderColor: colors.lightTan }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[#2C1810]">Shipment Progress</span>
                <span
                  className="rounded-full px-2 py-0.5 text-sm"
                  style={{
                    backgroundColor: colors.goldenYellow + '20',
                    color: colors.goldenYellow,
                  }}
                >
                  {trackingData.milestones.completed}/{trackingData.milestones.total} Steps
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${trackingData.milestones.progress}%`,
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <InfoCard title="Origin" value={`${trackingData.origin.city}, ${trackingData.origin.country}`} />
              <InfoCard title="Current Location" value={trackingData.currentLocation.city} />
              <InfoCard title="Destination" value={`${trackingData.destination.city}, ${trackingData.destination.country}`} />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
              <InfoCard title="Estimated Delivery" value={`${trackingData.estimatedDelivery}, ${trackingData.estimatedTime}`} />
              <InfoCard title="Weight" value={trackingData.weight} />
              <InfoCard title="Dimensions" value={trackingData.dimensions} />
              <InfoCard title="Service" value={trackingData.service} />
            </div>

            <div
              className="mt-6 rounded-xl border bg-white p-6 shadow-sm"
              style={{ borderColor: colors.lightTan }}
            >
              <h3 className="mb-5 text-xl font-semibold text-[#2C1810]">
                Tracking Timeline
              </h3>

              <div className="space-y-5">
                {trackingData.timeline.map((event, index) => {
                  const Icon = event.icon

                  return (
                    <div key={index} className="flex gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: colors.goldenYellow + '20' }}
                      >
                        <Icon className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#2C1810]">{event.title}</h4>
                        <p className="text-sm text-[#2C1810]/70">{event.location}</p>
                        <p className="text-xs text-[#2C1810]/50">
                          {event.date} • {event.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {!trackingData && !loading && !error && (
          <div className="mx-auto mt-16 max-w-7xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#2C1810]">
              Why Choose LogiTrack?
            </h2>

            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { icon: Zap, title: 'Real-time Tracking', desc: 'Live updates every 30 seconds' },
                { icon: Shield, title: 'Secure Shipping', desc: 'End-to-end package protection' },
                { icon: Globe, title: 'Global Network', desc: 'Coverage in 200+ countries' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-white p-6 text-center shadow-sm"
                  style={{ borderColor: colors.goldenYellow + '40' }}
                >
                  <div
                    className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: colors.goldenYellow + '20' }}
                  >
                    <feature.icon className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                  </div>

                  <h3 className="mb-1 font-normal tracking-wide text-[#2C1810]">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#2C1810]/60">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div
                className="rounded-xl border bg-white p-6 shadow-sm"
                style={{ borderColor: colors.lightTan }}
              >
                <h3 className="mb-3 flex items-center gap-2 font-normal tracking-wide text-[#2C1810]">
                  <MessageCircle className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                  Need Help Finding Your Tracking Number?
                </h3>

                <p className="mb-4 text-sm text-[#2C1810]/70">
                  Check your order confirmation email or shipping notification.
                </p>

                <button
                  className="flex cursor-pointer items-center gap-1 text-sm font-medium transition hover:gap-2"
                  style={{ color: colors.goldenYellow }}
                  onClick={() => setLearnMoreExpanded(!learnMoreExpanded)}
                >
                  {learnMoreExpanded ? 'Show Less' : 'Learn More'}
                  {learnMoreExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </button>

                {learnMoreExpanded && (
                  <div className="mt-4 rounded-lg bg-orange-50 p-4">
                    <ul className="space-y-2 text-sm text-[#2C1810]/80">
                      <li>Order confirmation email from sender</li>
                      <li>Shipping notification email</li>
                      <li>Shipping label or receipt</li>
                      <li>Retailer account order history</li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="rounded-xl border bg-white p-6 shadow-sm"
                style={{ borderColor: colors.lightTan }}
              >
                <h3 className="mb-3 flex items-center gap-2 font-normal tracking-wide text-[#2C1810]">
                  <Bell className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                  Never Miss an Update
                </h3>

                <p className="mb-4 text-sm text-[#2C1810]/70">
                  Sign up for email alerts to receive shipment updates.
                </p>

                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={emailNotification}
                    onChange={(e) => setEmailNotification(e.target.value)}
                    className="flex-1 rounded-lg border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: colors.lightTan, color: colors.darkBrown }}
                  />

                  <button
                    className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium"
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

function InfoCard({ title, value }) {
  return (
    <div className="rounded-xl border border-[#F5DEB3] bg-white p-5 shadow-sm">
      <p className="mb-1 text-sm text-[#2C1810]/60">{title}</p>
      <h3 className="font-semibold text-[#2C1810]">{value}</h3>
    </div>
  )
}