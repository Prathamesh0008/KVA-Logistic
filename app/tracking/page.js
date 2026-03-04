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
        estimatedDelivery: 'Jan 20, 2024',
        weight: '15.5 kg',
        dimensions: '40x30x25 cm',
        shippingMethod: 'Express Air',
        timeline: [
          {
            id: 1,
            status: 'Shipment Created',
            location: 'Los Angeles, CA',
            date: 'Jan 15',
            time: '09:30',
            completed: true
          },
          {
            id: 2,
            status: 'Picked Up',
            location: 'Los Angeles, CA',
            date: 'Jan 15',
            time: '11:45',
            completed: true
          },
          {
            id: 3,
            status: 'Arrived at Facility',
            location: 'Los Angeles Hub',
            date: 'Jan 15',
            time: '14:15',
            completed: true
          },
          {
            id: 4,
            status: 'Departed Facility',
            location: 'Los Angeles Hub',
            date: 'Jan 16',
            time: '08:00',
            completed: true
          },
          {
            id: 5,
            status: 'In Transit',
            location: 'Chicago, IL',
            date: 'Jan 17',
            time: '15:30',
            completed: true
          },
          {
            id: 6,
            status: 'Arrived at Hub',
            location: 'New York Hub',
            date: 'Jan 18',
            time: '10:20',
            completed: false
          },
          {
            id: 7,
            status: 'Out for Delivery',
            location: 'New York, NY',
            date: 'Jan 19',
            time: '08:00',
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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - reduced padding */}
      <section className="relative py-6 bg-gray-50 overflow-hidden flex-shrink-0">
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
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1"
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
              className="text-sm md:text-base max-w-2xl mx-auto"
              style={{
                color: colors.darkBrown,
                opacity: 0.9
              }}
            >
              Monitor your shipments in real-time with our advanced tracking system
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form - reduced padding */}
      <section className="py-4 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="rounded-xl p-4 border"
              style={{
                backgroundColor: 'white',
                borderColor: colors.lightTan,
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}
            >
              <div className="text-center mb-3">
                <h2
                  className="text-lg md:text-xl font-bold mb-1"
                  style={{ color: colors.darkBrown }}
                >
                  Enter Tracking Number
                </h2>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>Track multiple shipments by separating with commas</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder="e.g., LGSW123456789"
                      className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors"
                      style={{ 
                        borderColor: colors.lightTan,
                        color: colors.darkBrown,
                        outlineColor: colors.goldenYellow
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg font-bold transition-all hover:shadow-md flex items-center justify-center hover:scale-105"
                    style={{ 
                      backgroundColor: colors.goldenYellow,
                      color: colors.darkBrown,
                      boxShadow: `0 4px 12px ${colors.goldenYellow}40`
                    }}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Track
                  </button>
                </div>
                
                <div className="text-xs text-center" style={{ color: colors.darkBrown, opacity: 0.6 }}>
                  Example: LGSW123456789, LGSW987654321
                </div>
              </form>

              {/* Recent Tracking Numbers */}
              <div className="mt-3 pt-3 border-t" style={{ borderColor: colors.lightTan + '30' }}>
                <h3
                  className="text-sm font-semibold mb-2 text-center"
                  style={{ color: colors.darkBrown }}
                >
                  Recent Tracking Numbers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
                      className="p-2 rounded-lg border text-center transition-all hover:shadow-md"
                      style={{ 
                        backgroundColor: colors.goldenYellow + '10',
                        borderColor: colors.goldenYellow,
                        color: colors.darkBrown
                      }}
                    >
                      <div className="font-medium text-xs truncate">{num}</div>
                      <div className="text-[10px] mt-0.5" style={{ color: colors.darkBrown, opacity: 0.6 }}>Click to track</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results - reduced padding */}
      {trackingData && (
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Shipment Header */}
              <div className="mb-3">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-1">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold mb-0.5" style={{ color: colors.darkBrown }}>Shipment Details</h2>
                    <div className="flex items-center gap-3">
                      <div 
                        className="px-3 py-0.5 rounded-full font-semibold text-xs"
                        style={{ 
                          backgroundColor: colors.goldenYellow + '20',
                          color: colors.goldenYellow,
                          border: `1px solid ${colors.goldenYellow}30`
                        }}
                      >
                        {trackingData.statusText}
                      </div>
                      <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                        ID: <span className="font-mono font-bold">{trackingData.id}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style={{ 
                      backgroundColor: colors.goldenYellow + '20',
                      border: `1px solid ${colors.goldenYellow}30`
                    }}
                  >
                    <Calendar className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                    <div>
                      <div className="text-[10px]" style={{ color: colors.darkBrown, opacity: 0.7 }}>Est. Delivery</div>
                      <div className="font-bold text-sm" style={{ color: colors.darkBrown }}>{trackingData.estimatedDelivery}</div>
                    </div>
                  </div>
                </div>
              </div> 

              {/* Shipment Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg border"
                  style={{
                    backgroundColor: colors.goldenYellow + '10',
                    borderColor: colors.goldenYellow
                  }}
                >
                  <div className="flex items-center mb-0.5">
                    <MapPin className="h-4 w-4 mr-1" style={{ color: colors.goldenYellow }} />
                    <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Origin</h3>
                  </div>
                  <p className="text-sm font-medium" style={{ color: colors.darkBrown }}>{trackingData.origin}</p>
                </div> 
                
                <div 
                  className="p-2 rounded-lg border"
                  style={{
                    backgroundColor: colors.orange + '10',
                    borderColor: colors.orange
                  }}
                >
                  <div className="flex items-center mb-0.5">
                    <MapPin className="h-4 w-4 mr-1" style={{ color: colors.orange }} />
                    <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Destination</h3>
                  </div>
                  <p className="text-sm font-medium" style={{ color: colors.darkBrown }}>{trackingData.destination}</p>
                </div>
                
                <div 
                  className="p-2 rounded-lg border"
                  style={{
                    backgroundColor: colors.lightTan + '20',
                    borderColor: colors.lightTan
                  }}
                >
                  <div className="flex items-center mb-0.5">
                    <Package className="h-4 w-4 mr-1" style={{ color: colors.darkBrown }} />
                    <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Package</h3>
                  </div>
                  <p className="text-sm font-medium" style={{ color: colors.darkBrown }}>{trackingData.weight}</p>
                  <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>{trackingData.dimensions}</p>
                </div>
                
                <div 
                  className="p-2 rounded-lg border"
                  style={{
                    backgroundColor: colors.darkOrange + '10',
                    borderColor: colors.darkOrange
                  }}
                >
                  <div className="flex items-center mb-0.5">
                    <Truck className="h-4 w-4 mr-1" style={{ color: colors.darkOrange }} />
                    <h3 className="font-semibold text-xs" style={{ color: colors.darkBrown }}>Method</h3>
                  </div>
                  <p className="text-sm font-medium" style={{ color: colors.darkBrown }}>{trackingData.shippingMethod}</p>
                </div>
              </div>

              {/* Timeline */}
              <div 
                className="rounded-xl p-3 border mb-3"
                style={{
                  backgroundColor: 'white',
                  borderColor: colors.lightTan,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
              >
                <h3 className="text-base font-bold mb-2 text-center" style={{ color: colors.darkBrown }}>Shipment Timeline</h3>
                
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ backgroundColor: colors.lightTan }}></div>
                  
                  {trackingData.timeline.map((event, index) => {
                    const StatusIcon = getStatusIcon(event.status)
                    return (
                      <div key={event.id} className="relative flex items-start mb-2 last:mb-0">
                        <div 
                          className={`z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                            event.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        >
                          <StatusIcon className="h-4 w-4 text-white" />
                        </div>
                        
                        <div 
                          className="ml-3 flex-grow p-2 rounded-lg border"
                          style={{ 
                            backgroundColor: event.completed ? colors.goldenYellow + '10' : 'white',
                            borderColor: event.completed ? colors.goldenYellow : colors.lightTan
                          }}
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                              <h4 className="text-sm font-semibold" style={{ color: colors.darkBrown }}>{event.status}</h4>
                              <div className="flex items-center mt-0.5">
                                <MapPin className="h-3 w-3 mr-1" style={{ color: colors.goldenYellow }} />
                                <span className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>{event.location}</span>
                              </div>
                            </div>
                            <div className="mt-1 md:mt-0">
                              <div className="text-xs font-medium" style={{ color: colors.darkBrown }}>{event.date}</div>
                              <div className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>{event.time}</div>
                            </div>
                          </div>
                          
                          {event.completed && (
                            <div className="flex items-center mt-1" style={{ color: colors.goldenYellow }}>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              <span className="text-xs font-medium">Completed</span>
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
                className="rounded-xl p-3 border"
                style={{
                  backgroundColor: colors.lightTan + '10',
                  borderColor: colors.lightTan
                }}
              >
                <h3 className="text-base font-bold mb-2 text-center" style={{ color: colors.darkBrown }}>Need Assistance?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div 
                    className="p-2 rounded-lg border text-center"
                    style={{
                      backgroundColor: 'white',
                      borderColor: colors.lightTan
                    }}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                      <MessageSquare className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                    </div>
                    <h4 className="font-semibold text-xs mb-0.5" style={{ color: colors.darkBrown }}>Can't find number?</h4>
                    <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>Check your email or shipping documents</p>
                  </div>
                  
                  <div 
                    className="p-2 rounded-lg border text-center"
                    style={{
                      backgroundColor: 'white',
                      borderColor: colors.lightTan
                    }}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1" style={{ backgroundColor: colors.orange + '20' }}>
                      <Clock className="h-4 w-4" style={{ color: colors.orange }} />
                    </div>
                    <h4 className="font-semibold text-xs mb-0.5" style={{ color: colors.darkBrown }}>Not updating?</h4>
                    <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>Allow 24-48 hours for updates</p>
                  </div>
                  
                  <div 
                    className="p-2 rounded-lg border text-center"
                    style={{
                      backgroundColor: 'white',
                      borderColor: colors.lightTan
                    }}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1" style={{ backgroundColor: colors.darkBrown + '20' }}>
                      <Phone className="h-4 w-4" style={{ color: colors.darkBrown }} />
                    </div>
                    <h4 className="font-semibold text-xs mb-0.5" style={{ color: colors.darkBrown }}>Contact Support</h4>
                    <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                      <span style={{ color: colors.goldenYellow, fontWeight: 'bold' }}>+31 68720 2074</span>
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