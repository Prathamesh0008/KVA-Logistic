'use client'

import { useState } from 'react'
import { Search, MapPin, Package, Clock, Truck, Calendar, CheckCircle, MessageSquare, Phone } from 'lucide-react'

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('')
  const [trackingData, setTrackingData] = useState(null)

  // Color palette matching your home page
  const colors = {
    darkBrown: '#521903',     // Primary dark
    goldenYellow: '#f8b936',  // Primary accent
    orange: '#dc8c18',       // Secondary accent
    darkOrange: '#9f4409',   // Dark accent
    lightTan: '#c29f85'      // Light accent
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trackingId.trim()) {
      // Simulate API call with mock data
      setTrackingData({
        id: trackingId.toUpperCase(),
        status: 'IN_TRANSIT',
        statusText: 'In Transit',
        origin: 'Los Angeles, CA',
        destination: 'New York, NY',
        estimatedDelivery: 'January 20, 2024',
        weight: '15.5 kg',
        dimensions: '40x30x25 cm',
        shippingMethod: 'Express Air',
        timeline: [
          {
            id: 1,
            status: 'Shipment Created',
            location: 'Los Angeles, CA',
            date: 'Jan 15',
            time: '09:30 AM',
            completed: true
          },
          {
            id: 2,
            status: 'Picked Up',
            location: 'Los Angeles, CA',
            date: 'Jan 15',
            time: '11:45 AM',
            completed: true
          },
          {
            id: 3,
            status: 'Arrived at Facility',
            location: 'Los Angeles Hub',
            date: 'Jan 15',
            time: '02:15 PM',
            completed: true
          },
          {
            id: 4,
            status: 'Departed Facility',
            location: 'Los Angeles Hub',
            date: 'Jan 16',
            time: '08:00 AM',
            completed: true
          },
          {
            id: 5,
            status: 'In Transit',
            location: 'Chicago, IL',
            date: 'Jan 17',
            time: '03:30 PM',
            completed: true
          },
          {
            id: 6,
            status: 'Arrived at Destination Hub',
            location: 'New York Hub',
            date: 'Jan 18',
            time: '10:20 AM',
            completed: false
          },
          {
            id: 7,
            status: 'Out for Delivery',
            location: 'New York, NY',
            date: 'Jan 19',
            time: '08:00 AM',
            completed: false
          },
          {
            id: 8,
            status: 'Delivered',
            location: 'New York, NY',
            date: 'Jan 20',
            time: 'Expected',
            completed: false
          }
        ]
      })
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'DELIVERED': return CheckCircle
      case 'IN_TRANSIT': return Truck
      default: return Package
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gray-50 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              style={{
                backgroundColor: colors.goldenYellow,
                color: colors.darkBrown,
                border: `1px solid ${colors.darkBrown}20`
              }}
            >
              <Package className="w-4 h-4" />
              <span className="text-sm font-semibold">REAL-TIME TRACKING</span>
            </div>
            
            <h1 
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
  style={{ color: colors.darkBrown }}
>
  <span className="block">Track Your</span>

  <span
    className="block bg-clip-text text-transparent"
    style={{
      backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
    }}
  >
    Shipment
  </span>
</h1>

            
            <p
  className="text-lg md:text-xl max-w-2xl mx-auto mb-8 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
  }}
>
  Monitor your shipments in real-time with our advanced tracking system
</p>

          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="rounded-2xl p-6 md:p-8 border"
              style={{
                backgroundColor: 'white',
                borderColor: colors.lightTan,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <div className="text-center mb-8">
<h2
  className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
  }}
>
  Enter Tracking Number
</h2>
                <p style={{ color: colors.darkBrown, opacity: 0.8 }}>Track multiple shipments by entering tracking numbers separated by commas</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder="Enter tracking number (e.g., LGSW123456789)"
                      className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 transition-colors"
                      style={{ 
                        borderColor: colors.lightTan,
                        color: colors.darkBrown,
                        outlineColor: colors.goldenYellow
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg flex items-center justify-center hover:scale-105"
                    style={{ 
                      backgroundColor: colors.goldenYellow,
                      color: colors.darkBrown,
                      boxShadow: `0 4px 14px ${colors.goldenYellow}40`
                    }}
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Track Shipment
                  </button>
                </div>
                
                <div className="text-sm text-center" style={{ color: colors.darkBrown, opacity: 0.7 }}>
<p
  className="bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
  }}
>
  Example tracking numbers: LGSW123456789, LGSW987654321, LGSW456123789
</p>
                </div>
              </form>

              {/* Recent Tracking Numbers */}
              <div className="mt-8 pt-8 border-t" style={{ borderColor: colors.lightTan + '30' }}>
<h3
  className="text-lg font-semibold mb-4 text-center"
  style={{
    background: 'linear-gradient(90deg, #5A3A1E, #F8B936)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Recent Tracking Numbers
</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['LGSW123456789', 'LGSW987654321', 'LGSW456123789'].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setTrackingId(num)
                        setTimeout(() => {
                          const form = document.querySelector('form')
                          form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
                        }, 100)
                      }}
                      className="p-4 rounded-lg border text-center transition-all hover:shadow-md"
                      style={{ 
                        backgroundColor: colors.goldenYellow + '10',
                        borderColor: colors.goldenYellow,
                        color: colors.darkBrown
                      }}
                    >
                      <div className="font-medium">{num}</div>
                      <div className="text-sm mt-1" style={{ color: colors.darkBrown, opacity: 0.7 }}>Click to track</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Shipment Header */}
              <div className="mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.darkBrown }}>Shipment Details</h2>
                    <div className="flex items-center gap-4">
                      <div 
                        className="px-4 py-2 rounded-full font-semibold"
                        style={{ 
                          backgroundColor: colors.goldenYellow + '20',
                          color: colors.goldenYellow,
                          border: `1px solid ${colors.goldenYellow}30`
                        }}
                      >
                        {trackingData.statusText}
                      </div>
                      <div style={{ color: colors.darkBrown, opacity: 0.8 }}>
                        Tracking ID: <span className="font-mono font-bold">{trackingData.id}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center gap-3 px-6 py-4 rounded-xl"
                    style={{ 
                      backgroundColor: colors.goldenYellow + '20',
                      border: `1px solid ${colors.goldenYellow}30`
                    }}
                  >
                    <Calendar className="h-5 w-5" style={{ color: colors.goldenYellow }} />
                    <div>
                      <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>Estimated Delivery</div>
                      <div className="font-bold" style={{ color: colors.darkBrown }}>{trackingData.estimatedDelivery}</div>
                    </div>
                  </div>
                </div>
              </div> 

              {/* Shipment Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div 
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: colors.goldenYellow + '10',
                    borderColor: colors.goldenYellow
                  }}
                >
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 mr-3" style={{ color: colors.goldenYellow }} />
                    <h3 className="font-semibold" style={{ color: colors.darkBrown }}>Origin</h3>
                  </div>
                  <p className="text-lg font-medium" style={{ color: colors.darkBrown }}>{trackingData.origin}</p>
                </div> 
                
                <div 
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: colors.orange + '10',
                    borderColor: colors.orange
                  }}
                >
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 mr-3" style={{ color: colors.orange }} />
                    <h3 className="font-semibold" style={{ color: colors.darkBrown }}>Destination</h3>
                  </div>
                  <p className="text-lg font-medium" style={{ color: colors.darkBrown }}>{trackingData.destination}</p>
                </div>
                
                <div 
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: colors.lightTan + '20',
                    borderColor: colors.lightTan
                  }}
                >
                  <div className="flex items-center mb-3">
                    <Package className="h-5 w-5 mr-3" style={{ color: colors.darkBrown }} />
                    <h3 className="font-semibold" style={{ color: colors.darkBrown }}>Package Details</h3>
                  </div>
                  <p className="font-medium" style={{ color: colors.darkBrown }}>{trackingData.weight}</p>
                  <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>{trackingData.dimensions}</p>
                </div>
                
                <div 
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: colors.darkOrange + '10',
                    borderColor: colors.darkOrange
                  }}
                >
                  <div className="flex items-center mb-3">
                    <Truck className="h-5 w-5 mr-3" style={{ color: colors.darkOrange }} />
                    <h3 className="font-semibold" style={{ color: colors.darkBrown }}>Shipping Method</h3>
                  </div>
                  <p className="font-medium" style={{ color: colors.darkBrown }}>{trackingData.shippingMethod}</p>
                </div>
              </div>

              {/* Timeline */}
              <div 
                className="rounded-2xl p-8 border mb-12"
                style={{
                  backgroundColor: 'white',
                  borderColor: colors.lightTan,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.darkBrown }}>Shipment Timeline</h3>
                
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: colors.lightTan }}></div>
                  
                  {trackingData.timeline.map((event, index) => {
                    const StatusIcon = getStatusIcon(event.status)
                    return (
                      <div key={event.id} className="relative flex items-start mb-8 last:mb-0">
                        <div 
                          className={`z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                            event.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        >
                          <StatusIcon className="h-6 w-6 text-white" />
                        </div>
                        
                        <div 
                          className="ml-6 flex-grow p-5 rounded-xl border"
                          style={{ 
                            backgroundColor: event.completed ? colors.goldenYellow + '10' : 'white',
                            borderColor: event.completed ? colors.goldenYellow : colors.lightTan
                          }}
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                              <h4 className="text-lg font-semibold" style={{ color: colors.darkBrown }}>{event.status}</h4>
                              <div className="flex items-center mt-2">
                                <MapPin className="h-4 w-4 mr-2" style={{ color: colors.goldenYellow }} />
                                <span style={{ color: colors.darkBrown, opacity: 0.7 }}>{event.location}</span>
                              </div>
                            </div>
                            <div className="mt-3 md:mt-0">
                              <div className="font-medium" style={{ color: colors.darkBrown }}>{event.date}</div>
                              <div style={{ color: colors.darkBrown, opacity: 0.7 }}>{event.time}</div>
                            </div>
                          </div>
                          
                          {event.completed && (
                            <div className="flex items-center mt-3" style={{ color: colors.goldenYellow }}>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              <span className="text-sm font-medium">Completed</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Help Section */}
              <div 
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: colors.lightTan + '10',
                  borderColor: colors.lightTan
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.darkBrown }}>Need Assistance?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div 
                    className="p-6 rounded-xl border text-center"
                    style={{
                      backgroundColor: 'white',
                      borderColor: colors.lightTan
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                      <MessageSquare className="h-6 w-6" style={{ color: colors.goldenYellow }} />
                    </div>
                    <h4 className="font-semibold mb-2" style={{ color: colors.darkBrown }}>Can&apos;t find tracking number?</h4>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>Check your email or shipping documents</p>
                  </div>
                  
                  <div 
                    className="p-6 rounded-xl border text-center"
                    style={{
                      backgroundColor: 'white',
                      borderColor: colors.lightTan
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.orange + '20' }}>
                      <Clock className="h-6 w-6" style={{ color: colors.orange }} />
                    </div>
                    <h4 className="font-semibold mb-2" style={{ color: colors.darkBrown }}>Tracking not updating?</h4>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>Allow 24-48 hours for updates to appear</p>
                  </div>
                  
                  <div 
                    className="p-6 rounded-xl border text-center"
                    style={{
                      backgroundColor: 'white',
                      borderColor: colors.lightTan
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.darkBrown + '20' }}>
                      <Phone className="h-6 w-6" style={{ color: colors.darkBrown }} />
                    </div>
                    <h4 className="font-semibold mb-2" style={{ color: colors.darkBrown }}>Contact Support</h4>
                    <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                      Call <span style={{ color: colors.goldenYellow, fontWeight: 'bold' }}>+316872022074</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}