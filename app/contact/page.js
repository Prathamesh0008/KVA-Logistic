'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Truck } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

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
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="">
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
              <MessageSquare className="w-4 h-4" />
<span
  className="text-sm font-semibold"
  style={{
    background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}
>
  GET IN TOUCH
</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: colors.darkBrown }}
            >
              <span className="block">Contact</span>
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
  className="text-lg md:text-xl max-w-2xl mx-auto mb-8 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
  }}
>
  Get in touch with our logistics experts for customized solutions and personalized support
</p>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8" style={{ color: colors.darkBrown }}>Get in Touch</h2>
                
                <div className="space-y-6">
                  <div 
                    className="p-6 rounded-xl transition-all hover:shadow-md"
                    style={{
                      backgroundColor: colors.goldenYellow + '10',
                      border: `1px solid ${colors.goldenYellow}30`
                    }}
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: colors.goldenYellow }}>
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: colors.darkBrown }}>Phone</h3>
                        <p className="text-lg font-medium mb-1" style={{ color: colors.darkBrown }}>+316872022074</p>
                        <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>Mon-Fri 8am-6pm EST</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-6 rounded-xl transition-all hover:shadow-md"
                    style={{
                      backgroundColor: colors.orange + '10',
                      border: `1px solid ${colors.orange}30`
                    }}
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: colors.orange }}>
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: colors.darkBrown }}>Email</h3>
                        <p className="text-lg font-medium mb-1" style={{ color: colors.darkBrown }}>info@logisticKVA.com</p>
                        <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>24/7 Support</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-6 rounded-xl transition-all hover:shadow-md"
                    style={{
                      backgroundColor: colors.lightTan + '20',
                      border: `1px solid ${colors.lightTan}`
                    }}
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: colors.darkBrown }}>
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: colors.darkBrown }}>Headquarters</h3>
                        <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                          123 Logistics, Suite 500<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-6 rounded-xl transition-all hover:shadow-md"
                    style={{
                      backgroundColor: colors.darkOrange + '10',
                      border: `1px solid ${colors.darkOrange}30`
                    }}
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: colors.darkOrange }}>
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: colors.darkBrown }}>Response Time</h3>
                        <p className="text-lg font-medium mb-1" style={{ color: colors.darkBrown }}>&lt; 2 Hours</p>
                        <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>Average email response</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div 
                  className="rounded-2xl p-6 md:p-8 border"
                  style={{
                    backgroundColor: 'white',
                    borderColor: colors.lightTan,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                >
                  <h2 className="text-2xl font-bold mb-6" style={{ color: colors.darkBrown }}>Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors"
                          style={{ 
                            borderColor: colors.lightTan,
                            color: colors.darkBrown,
                            outlineColor: colors.goldenYellow
                          }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors"
                          style={{ 
                            borderColor: colors.lightTan,
                            color: colors.darkBrown,
                            outlineColor: colors.goldenYellow
                          }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors"
                          style={{ 
                            borderColor: colors.lightTan,
                            color: colors.darkBrown,
                            outlineColor: colors.goldenYellow
                          }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors appearance-none"
                          style={{ 
                            borderColor: colors.lightTan,
                            color: colors.darkBrown,
                            backgroundColor: 'white',
                            outlineColor: colors.goldenYellow
                          }}
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Get a Quote</option>
                          <option value="tracking">Tracking Help</option>
                          <option value="service">Service Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership Inquiry</option>
                          <option value="career">Career Opportunity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors"
                        style={{ 
                          borderColor: colors.lightTan,
                          color: colors.darkBrown,
                          outlineColor: colors.goldenYellow
                        }}
                      ></textarea>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <button
                        type="submit"
                        className="text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg flex items-center justify-center hover:scale-105"
                        style={{ 
                          backgroundColor: colors.goldenYellow,
                          color: colors.darkBrown,
                          boxShadow: `0 4px 14px ${colors.goldenYellow}40`
                        }}
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </button>
                      
                      <div className="text-sm flex items-center" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                        <MessageSquare className="h-4 w-4 mr-2" style={{ color: colors.goldenYellow }} />
                        <span>We typically respond within 2 hours</span>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Additional Info */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border text-center" style={{ 
                    backgroundColor: colors.goldenYellow + '10',
                    borderColor: colors.goldenYellow
                  }}>
                    <div className="text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>24/7</div>
                    <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>Support Available</div>
                  </div>
                  
                  <div className="p-4 rounded-lg border text-center" style={{ 
                    backgroundColor: colors.orange + '10',
                    borderColor: colors.orange
                  }}>
                    <div className="text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>150+</div>
                    <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>Countries Supported</div>
                  </div>
                  
                  <div className="p-4 rounded-lg border text-center" style={{ 
                    backgroundColor: colors.darkBrown + '10',
                    borderColor: colors.darkBrown
                  }}>
                    <div className="text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>ISO 9001</div>
                    <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>Certified Quality</div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-12 p-6 rounded-2xl text-center" style={{ 
                  backgroundColor: colors.darkOrange + '10',
                  border: `1px solid ${colors.darkOrange}30`
                }}>
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-center" style={{ color: colors.darkBrown }}>
                    <Truck className="mr-3 h-5 w-5" style={{ color: colors.darkOrange }} />
                    Need Urgent Assistance?
                  </h3>
                  <p className="mb-4" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                    For time-critical shipments or emergency logistics support
                  </p>
                  <a 
                    href="tel:+316872022074"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg"
                    style={{ 
                      backgroundColor: colors.darkOrange,
                      color: 'white',
                      boxShadow: `0 4px 14px ${colors.darkOrange}40`
                    }}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Emergency Hotline: +316872022074
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}