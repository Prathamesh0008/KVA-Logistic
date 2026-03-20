
'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Clock, Send, User, FileText, CheckCircle } from 'lucide-react'

// ------------------------------------------------------------------
// 🔐 YOUR EMAILJS CREDENTIALS (hardcoded as requested)
// ------------------------------------------------------------------
const EMAILJS_PUBLIC_KEY  = 'ctHzsKvXJvpGEjIvF'
const EMAILJS_SERVICE_ID  = 'service_a93w12k'
const ADMIN_TEMPLATE_ID   = 'template_ysi9wih'    // sends inquiry to you
const USER_TEMPLATE_ID    = 'template_o2mw75i'    // auto-reply to user
// ------------------------------------------------------------------

// Initialize EmailJS once
emailjs.init(EMAILJS_PUBLIC_KEY)

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState(null)

  // Color palette matching your home page
  const colors = {
    darkBrown: '#310F0B',
    goldenYellow: '#EB9003',
    orange: '#C55500',
    darkOrange: '#9F4100',
    lightTan: '#F5F3EF'
  }

const handleSubmit = (e) => {
  e.preventDefault()

  const form = e.target
  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  }

  // 1️⃣ Send message to ADMIN
  emailjs.send(
    EMAILJS_SERVICE_ID,
    ADMIN_TEMPLATE_ID,
    formData,
    EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    console.log("✅ Admin email sent")
  })
  .catch((err) => {
    console.error("❌ Admin email error:", err)
  })


  // 2️⃣ Send auto reply to USER
  emailjs.send(
    EMAILJS_SERVICE_ID,
    USER_TEMPLATE_ID,
    formData,
    EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    console.log("✅ User auto reply sent")
  })
  .catch((err) => {
    console.error("❌ User email error:", err)
  })

  setFormStatus("success")
  form.reset()

  setTimeout(() => setFormStatus(null), 3000)
}
  return (
<div className="flex flex-col font-light">
      {/* Background Image Section - Matching Home Page */}
    <div className="relative">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/Banner 2.jpg')",
    }}
  />
        {/* <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `linear-gradient(90deg, #310F0B 0%, rgba(49, 15, 11, 0.95) 30%, rgba(49, 15, 11, 0.7) 50%, transparent 100%)`,
          }}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#310F0B]/60 via-[#310F0B]/30 to-transparent" />
</div>

      {/* Content - No Gaps */}
      <div className="relative z-10">
        {/* Hero Section - Compact */}
        <div className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide mb-3">  <span style={{ color: colors.darkBrown }}>
    Contact KVA Logistics
  </span>
</h1>       <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: colors.goldenYellow }}>
                Reach out for inquiries, support, or logistics solutions
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards - 4x1 Grid */}
        <div className="pb-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {/* Phone */}
                <div 
                  className="p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    backgroundColor: colors.lightTan,
                    borderColor: colors.goldenYellow,
                    boxShadow: "0 4px 12px rgba(235, 144, 3, 0.1)",
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" 
                      style={{ background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})` }}>
                      <Phone className="h-5 w-5" style={{ color: colors.darkBrown }} />
                    </div>
<h3 className="text-xs font-medium mb-1" style={{ color: colors.darkBrown }}>
  Phone
</h3>                    <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>24/7 Support</p>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className="p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    backgroundColor: colors.lightTan,
                    borderColor: colors.orange,
                    boxShadow: "0 4px 12px rgba(197, 85, 0, 0.1)",
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" 
                      style={{ background: `linear-gradient(90deg, ${colors.orange}, ${colors.darkOrange})` }}>
                      <Mail className="h-5 w-5" style={{ color: colors.darkBrown }} />
                    </div>
                    <h3 className="text-xs font-medium mb-1" style={{ color: colors.darkBrown }}>Email</h3>
                    <p className="text-sm font-bold break-all" style={{ color: colors.darkOrange }}>info@kvalogistics.nl</p>
                    <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>Response within 2h</p>
                  </div>
                </div>

                {/* Office */}
                <div 
                  className="p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    backgroundColor: colors.lightTan,
                    borderColor: colors.darkBrown,
                    boxShadow: "0 4px 12px rgba(49, 15, 11, 0.1)",
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" 
                      style={{ background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.lightTan})` }}>
                      <MapPin className="h-5 w-5" style={{ color: colors.lightTan }} />
                    </div> 
            <h3 className="... font-medium mb-1" style={{ color: colors.darkBrown }}>Main Office</h3>   
              <h3 className="... font-medium mb-1" style={{ color: colors.darkBrown }}>Main Office</h3>
                    <p className="text-sm font-bold break-all" style={{ color: colors.darkOrange }}>Apendans 5, 2511ED</p>
                    <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>The Netherlands</p>
                  </div>
                </div>

                {/* Hours */}
                <div 
                  className="p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    backgroundColor: colors.lightTan,
                    borderColor: colors.orange,
                    boxShadow: "0 4px 12px rgba(197, 85, 0, 0.1)",
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" 
                      style={{ background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})` }}>
                      <Clock className="h-5 w-5" style={{ color: colors.darkBrown }} />
                    </div>
                    <h3 className="text-xs font-semibold mb-1" style={{ color: colors.darkBrown }}>Working Hours</h3>
                    <p className="text-sm font-bold" style={{ color: colors.darkOrange }}>24/7 Operations</p>
                    <p className="text-xs" style={{ color: colors.darkBrown, opacity: 0.8 }}>Always available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout - Form and Map */}
        <div className="pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left Column - Contact Form */}
                <div 
                  className="p-5 md:p-6 rounded-xl border"
                  style={{
                    backgroundColor: colors.lightTan,
                    borderColor: colors.goldenYellow,
                    boxShadow: "0 4px 20px rgba(235, 144, 3, 0.15)",
                  }}
                >
                  <h2 className="text-lg font-medium mb-3" style={{ color: colors.darkOrange }}>Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: colors.darkBrown }}>Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: colors.darkOrange }} />
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                          style={{ 
                            borderColor: colors.orange,
                            outlineColor: colors.goldenYellow,
                            backgroundColor: 'white',
                            color: colors.darkBrown,
                          }}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: colors.darkBrown }}>Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: colors.darkOrange }} />
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                          style={{ 
                            borderColor: colors.orange,
                            outlineColor: colors.goldenYellow,
                            backgroundColor: 'white',
                            color: colors.darkBrown,
                          }}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: colors.darkBrown }}>Subject</label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: colors.darkOrange }} />
                        <input
                          type="text"
                          name="subject"
                          required
                          className="w-full pl-9 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                          style={{ 
                            borderColor: colors.orange,
                            outlineColor: colors.goldenYellow,
                            backgroundColor: 'white',
                            color: colors.darkBrown,
                          }}
                          placeholder="Inquiry about shipping"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: colors.darkBrown }}>Message</label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        className="w-full px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-1 text-sm"
                        style={{ 
                          borderColor: colors.orange,
                          outlineColor: colors.goldenYellow,
                          backgroundColor: 'white',
                          color: colors.darkBrown,
                        }}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm cursor-pointer"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                        color: colors.darkBrown,
                        boxShadow: "0 4px 12px rgba(235, 144, 3, 0.3)",
                      }}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>

                    {formStatus === 'success' && (
                      <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: colors.goldenYellow + '20' }}>
                        <CheckCircle className="h-4 w-4" style={{ color: colors.goldenYellow }} />
                        <span className="text-sm font-medium" style={{ color: colors.darkBrown }}>Message sent successfully!</span>
                      </div>
                    )}
                  </form>
                </div>

                {/* Right Column - Map and Quick Info */}
                <div className="space-y-3">
                  {/* Map */}
                  <div 
                    className="p-5 md:p-6 rounded-xl border h-[200px] relative overflow-hidden"
                    style={{
                      backgroundColor: colors.lightTan,
                      borderColor: colors.orange,
                      boxShadow: "0 4px 20px rgba(197, 85, 0, 0.15)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 mx-auto mb-2" style={{ color: colors.goldenYellow }} />
                        <p className="text-base font-bold" style={{ color: colors.darkOrange }}>Apendans 5</p>
                        <p className="text-sm" style={{ color: colors.darkBrown }}>2511ED 's-Gravenhage</p>
                        <p className="text-xs mt-2 font-medium" style={{ color: colors.darkOrange }}>The Netherlands</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div 
                      className="p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                      style={{
                        backgroundColor: colors.lightTan,
                        borderColor: colors.goldenYellow,
                        boxShadow: "0 4px 12px rgba(235, 144, 3, 0.1)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" 
                          style={{ background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})` }}>
                          <Phone className="h-4 w-4" style={{ color: colors.darkBrown }} />
                        </div>
                        <div>
                          <p className="text-xs font-medium" style={{ color: colors.darkBrown, opacity: 0.8 }}>Emergency</p>
                          <p className="text-sm font-bold" style={{ color: colors.darkOrange }}>+31 6 84987360</p>
                        </div>
                      </div>
                    </div>

                    <div 
                      className="p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                      style={{
                        backgroundColor: colors.lightTan,
                        borderColor: colors.orange,
                        boxShadow: "0 4px 12px rgba(197, 85, 0, 0.1)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" 
                          style={{ background: `linear-gradient(90deg, ${colors.orange}, ${colors.darkOrange})` }}>
                          <Mail className="h-4 w-4" style={{ color: colors.darkBrown }} />
                        </div>
                        <div>
                          <p className="text-xs font-medium" style={{ color: colors.darkBrown, opacity: 0.8 }}>Sales</p>
                          <p className="text-sm font-bold break-all" style={{ color: colors.darkOrange }}>info@kvalogistics.nl</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Global Offices */}
                  <div 
                    className="p-5 md:p-6 rounded-xl border"
                    style={{
                      backgroundColor: colors.lightTan,
                      borderColor: colors.darkBrown,
                      boxShadow: "0 4px 20px rgba(250, 247, 247, 0.15)",
                    }}
                  >
                    <h3 className="text-base font-bold mb-3" style={{ color: colors.darkOrange }}>Global Offices</h3>
                    
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { flag: "🇳🇱", city: "Rotterdam", desc: "Headquarters" },
                        { flag: "🇺🇸", city: "New York", desc: "Americas" },
                        { flag: "🇸🇬", city: "Singapore", desc: "Asia Pacific" },
                        { flag: "🇦🇪", city: "Dubai", desc: "Middle East" }
                      ].map((office, idx) => (
                        <div key={idx} className="text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                          <span className="text-3xl block mb-1 drop-shadow-md">{office.flag}</span>
                          <p className="text-xs font-bold" style={{ color: colors.darkOrange }}>{office.city}</p>
                          <p className="text-[10px]" style={{ color: colors.darkBrown }}>{office.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}