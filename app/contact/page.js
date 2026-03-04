'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, FileText, CheckCircle, ChevronRight } from 'lucide-react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState(null)

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
    setFormStatus('success')
    setTimeout(() => setFormStatus(null), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-10 md:py-12 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23521903' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full mb-4"
              style={{
                backgroundColor: colors.goldenYellow,
                color: colors.darkBrown,
                border: `1px solid ${colors.darkBrown}20`
              }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              <span
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Contact
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
                KVA Logistics
              </span>
            </h1>
            
            <p
              className="text-sm md:text-base max-w-xl mx-auto"
              style={{
                color: colors.darkBrown,
                opacity: 0.9
              }}
            >
              Reach out for inquiries, support, or logistics solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Contact Info Cards - 2x2 Grid on Mobile, 4x1 on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {/* Phone */}
              <div 
                className="p-3 rounded-lg border flex flex-col items-center text-center"
                style={{
                  backgroundColor: colors.goldenYellow + '10',
                  borderColor: colors.goldenYellow
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: colors.goldenYellow }}>
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xs font-semibold mb-1" style={{ color: colors.darkBrown }}>Phone</h3>
                <p className="text-sm font-medium break-all" style={{ color: colors.darkBrown }}>+31 68720 2074</p>
                <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>24/7 Support</p>
              </div>

              {/* Email */}
              <div 
                className="p-3 rounded-lg border flex flex-col items-center text-center"
                style={{
                  backgroundColor: colors.orange + '10',
                  borderColor: colors.orange
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: colors.orange }}>
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xs font-semibold mb-1" style={{ color: colors.darkBrown }}>Email</h3>
                <p className="text-sm font-medium break-all" style={{ color: colors.darkBrown }}>info@kva.com</p>
                <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>Response within 2h</p>
              </div>

              {/* Office */}
              <div 
                className="p-3 rounded-lg border flex flex-col items-center text-center"
                style={{
                  backgroundColor: colors.darkBrown + '10',
                  borderColor: colors.darkBrown
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: colors.darkBrown }}>
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xs font-semibold mb-1" style={{ color: colors.darkBrown }}>Main Office</h3>
                <p className="text-sm font-medium break-all" style={{ color: colors.darkBrown }}>Apendans 5, 2511ED 's-Gravenhage</p>
                <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}></p>
              </div>

              {/* Hours */}
              <div 
                className="p-3 rounded-lg border flex flex-col items-center text-center"
                style={{
                  backgroundColor: colors.lightTan + '20',
                  borderColor: colors.lightTan
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: colors.lightTan }}>
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xs font-semibold mb-1" style={{ color: colors.darkBrown }}>Working Hours</h3>
                <p className="text-sm font-medium break-all" style={{ color: colors.darkBrown }}>24/7 Operations</p>
                <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.7 }}>Always available</p>
              </div>
            </div>

            {/* Two Column Layout - Form and Map Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Contact Form */}
              <div 
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${colors.lightTan}50`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                <h2 className="text-xl font-bold mb-4" style={{ color: colors.darkBrown }}>Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: colors.darkBrown }}>Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: colors.lightTan }} />
                      <input
                        type="text"
                        required
                        className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                        style={{ 
                          borderColor: colors.lightTan,
                          outlineColor: colors.goldenYellow
                        }}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: colors.darkBrown }}>Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: colors.lightTan }} />
                      <input
                        type="email"
                        required
                        className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                        style={{ 
                          borderColor: colors.lightTan,
                          outlineColor: colors.goldenYellow
                        }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: colors.darkBrown }}>Subject</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: colors.lightTan }} />
                      <input
                        type="text"
                        required
                        className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                        style={{ 
                          borderColor: colors.lightTan,
                          outlineColor: colors.goldenYellow
                        }}
                        placeholder="Inquiry about shipping"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: colors.darkBrown }}>Message</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                      style={{ 
                        borderColor: colors.lightTan,
                        outlineColor: colors.goldenYellow
                      }}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-3 rounded-lg font-semibold transition-all hover:shadow-md flex items-center justify-center gap-2 text-sm"
                    style={{ 
                      backgroundColor: colors.goldenYellow,
                      color: colors.darkBrown,
                      boxShadow: `0 2px 8px ${colors.goldenYellow}40`
                    }}
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>

                  {formStatus === 'success' && (
                    <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                      <CheckCircle className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                      <span className="text-sm" style={{ color: colors.darkBrown }}>Message sent successfully!</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Right Column - Map and Quick Info */}
              <div className="space-y-4">
                {/* Map */}
                <div 
                  className="p-5 rounded-xl h-[200px] relative overflow-hidden"
                  style={{
                    backgroundColor: 'white',
                    border: `1px solid ${colors.lightTan}50`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2" style={{ color: colors.goldenYellow }} />
                      <p className="text-base font-medium" style={{ color: colors.darkBrown }}>Apendans 5</p>
                      <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>2511ED 's-Gravenhage</p>
                      <p className="text-xs mt-2" style={{ color: colors.darkBrown, opacity: 0.6 }}>The Netherlands</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: colors.goldenYellow + '10',
                      border: `1px solid ${colors.goldenYellow}30`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                        <Phone className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>Emergency</p>
                        <p className="text-sm font-bold" style={{ color: colors.darkBrown }}>+31 68720 2074</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: colors.orange + '10',
                      border: `1px solid ${colors.orange}30`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.orange + '20' }}>
                        <Mail className="h-4 w-4" style={{ color: colors.orange }} />
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>Sales</p>
                        <p className="text-sm font-bold break-all" style={{ color: colors.darkBrown }}>sales@kva.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Offices */}
                <div 
                  className="p-5 rounded-xl"
                  style={{
                    backgroundColor: colors.darkBrown + '05',
                    border: `1px solid ${colors.darkBrown}20`
                  }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: colors.darkBrown }}>Global Offices</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <span className="text-2xl block mb-1">🇳🇱</span>
                      <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>Rotterdam</p>
                      <p className="text-[10px]" style={{ color: colors.darkBrown, opacity: 0.6 }}>Headquarters</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl block mb-1">🇺🇸</span>
                      <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>New York</p>
                      <p className="text-[10px]" style={{ color: colors.darkBrown, opacity: 0.6 }}>Americas</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl block mb-1">🇸🇬</span>
                      <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>Singapore</p>
                      <p className="text-[10px]" style={{ color: colors.darkBrown, opacity: 0.6 }}>Asia Pacific</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl block mb-1">🇦🇪</span>
                      <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>Dubai</p>
                      <p className="text-[10px]" style={{ color: colors.darkBrown, opacity: 0.6 }}>Middle East</p>
                    </div>
                  </div>
                </div>

                {/* Response Time Badge */}
                <div 
                  className="p-3 rounded-lg flex items-center justify-between"
                  style={{
                    background: `linear-gradient(90deg, ${colors.goldenYellow}20, ${colors.orange}20)`,
                    border: `1px solid ${colors.goldenYellow}40`
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                    <span className="text-sm font-medium" style={{ color: colors.darkBrown }}>Response Time</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: colors.darkBrown }}>&lt; 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}