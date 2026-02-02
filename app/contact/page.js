'use client'

import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Truck, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  const [formErrors, setFormErrors] = useState({})
  const formRef = useRef()

  // Color palette matching your home page
  const colors = {
    darkBrown: '#521903',
    goldenYellow: '#f8b936',
    orange: '#dc8c18',
    darkOrange: '#9f4409',
    lightTan: '#c29f85'
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject) {
      errors.subject = 'Please select a subject'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters'
    }
    
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setFormErrors({})
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      // EmailJS Configuration
      // ⚠️ IMPORTANT: Sign up at https://www.emailjs.com/ and get these IDs
      const serviceID = 'service_bqq1nla' // Replace with your Service ID
      const templateID = 'template_7i8mx87' // Replace with your Template ID
      const publicKey = 'KfZt7UNuNnWv2P4ch' // Replace with your Public Key
      
      // Initialize EmailJS
      emailjs.init(publicKey)
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
          to_name: 'KVA Logistics Team',
          to_email: 'info@logisticKVA.com',
          reply_to: formData.email,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        }
      )

      console.log('EmailJS Result:', result)

      if (result.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: '✅ Message sent successfully! We will email you back within 2 hours.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' })
        }, 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Email sending error:', error)
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: '❌ Failed to send message. Please try again or contact us directly at info@logisticKVA.com'
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gray-50 overflow-hidden">
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
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              style={{
                backgroundColor: colors.goldenYellow,
                color: colors.darkBrown,
                border: `1px solid ${colors.darkBrown}20`
              }}
            >
              <span className="text-sm font-semibold" style={{ color: colors.darkBrown }}>
                GET IN TOUCH
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.darkBrown }}>
              <span className="block">Contact</span>
              <span className="block" style={{
                background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                KVA Logistics
              </span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: colors.darkBrown }}>
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
                  <div className="p-6 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: colors.goldenYellow + '10', border: `1px solid ${colors.goldenYellow}30` }}>
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

                  <div className="p-6 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: colors.orange + '10', border: `1px solid ${colors.orange}30` }}>
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

                  <div className="p-6 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: colors.lightTan + '20', border: `1px solid ${colors.lightTan}` }}>
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

                  <div className="p-6 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: colors.darkOrange + '10', border: `1px solid ${colors.darkOrange}30` }}>
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: colors.darkOrange }}>
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: colors.darkBrown }}>Response Time</h3>
                        <p className="text-lg font-medium mb-1" style={{ color: colors.darkBrown }}>&lt; 2 Hours</p>
                        <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>Email response guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: 'white', borderColor: colors.lightTan, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: colors.darkBrown }}>Send us a Message</h2>
                  
                  {/* Status Messages */}
                  {status.message && (
                    <div className={`p-4 rounded-lg mb-6 flex items-start ${status.success ? 'bg-green-50 border border-green-200' : status.error ? 'bg-red-50 border border-red-200' : ''}`}>
                      {status.success ? <CheckCircle className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" /> : status.error ? <AlertCircle className="h-5 w-5 mr-3 text-red-600 flex-shrink-0 mt-0.5" /> : null}
                      <p className={status.success ? 'text-green-800' : status.error ? 'text-red-800' : ''}>
                        {status.message}
                      </p>
                    </div>
                  )}
                  
                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>
                          Name * {formErrors.name && <span className="text-red-500 text-xs ml-2">({formErrors.name})</span>}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={status.loading}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${formErrors.name ? 'border-red-300' : ''}`}
                          style={{ borderColor: formErrors.name ? '#f87171' : colors.lightTan, color: colors.darkBrown, outlineColor: colors.goldenYellow }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>
                          Email * {formErrors.email && <span className="text-red-500 text-xs ml-2">({formErrors.email})</span>}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={status.loading}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${formErrors.email ? 'border-red-300' : ''}`}
                          style={{ borderColor: formErrors.email ? '#f87171' : colors.lightTan, color: colors.darkBrown, outlineColor: colors.goldenYellow }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={status.loading}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-50"
                          style={{ borderColor: colors.lightTan, color: colors.darkBrown, outlineColor: colors.goldenYellow }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>
                          Subject * {formErrors.subject && <span className="text-red-500 text-xs ml-2">({formErrors.subject})</span>}
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled={status.loading}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors appearance-none disabled:opacity-50 ${formErrors.subject ? 'border-red-300' : ''}`}
                          style={{ borderColor: formErrors.subject ? '#f87171' : colors.lightTan, color: colors.darkBrown, backgroundColor: 'white', outlineColor: colors.goldenYellow }}
                        >
                          <option value="">Select a subject</option>
                          <option value="Get a Quote">Get a Quote</option>
                          <option value="Tracking Help">Tracking Help</option>
                          <option value="Service Inquiry">Service Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership Inquiry">Partnership Inquiry</option>
                          <option value="Career Opportunity">Career Opportunity</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.darkBrown }}>
                        Message * {formErrors.message && <span className="text-red-500 text-xs ml-2">({formErrors.message})</span>}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status.loading}
                        rows="6"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${formErrors.message ? 'border-red-300' : ''}`}
                        style={{ borderColor: formErrors.message ? '#f87171' : colors.lightTan, color: colors.darkBrown, outlineColor: colors.goldenYellow }}
                        placeholder="Please provide details about your logistics needs..."
                      ></textarea>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <button
                        type="submit"
                        disabled={status.loading}
                        className="text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg flex items-center justify-center hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{ backgroundColor: colors.goldenYellow, color: colors.darkBrown, boxShadow: `0 4px 14px ${colors.goldenYellow}40` }}
                      >
                        {status.loading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending Email...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message Now
                          </>
                        )}
                      </button>
                      
                      <div className="text-sm flex items-center" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                        <MessageSquare className="h-4 w-4 mr-2" style={{ color: colors.goldenYellow }} />
                        <span>Instant email delivery</span>
                      </div>
                    </div>
                  </form>

                  {/* EmailJS Setup Instructions */}
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="text-sm font-semibold mb-2 text-blue-800">📧 Email Setup Required</h3>
                    <p className="text-xs text-blue-700 mb-2">
                      To make emails work immediately:
                    </p>
                    <ol className="text-xs text-blue-700 list-decimal pl-4 space-y-1">
                      <li>Sign up at <a href="https://www.emailjs.com" target="_blank" className="underline">EmailJS.com</a></li>
                      <li>Create a Gmail service connection</li>
                      <li>Create an email template</li>
                      <li>Update the serviceID, templateID, and publicKey in the code above</li>
                    </ol>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border text-center" style={{ backgroundColor: colors.goldenYellow + '10', borderColor: colors.goldenYellow }}>
                    <div className="text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>Instant</div>
                    <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>Email Delivery</div>
                  </div>
                  
                  <div className="p-4 rounded-lg border text-center" style={{ backgroundColor: colors.orange + '10', borderColor: colors.orange }}>
                    <div className="text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>No Backend</div>
                    <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>Required</div>
                  </div>
                  
                  <div className="p-4 rounded-lg border text-center" style={{ backgroundColor: colors.darkBrown + '10', borderColor: colors.darkBrown }}>
                    <div className="text-lg font-bold mb-1" style={{ color: colors.darkBrown }}>Free</div>
                    <div className="text-sm" style={{ color: colors.darkBrown, opacity: 0.8 }}>200 emails/month</div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-12 p-6 rounded-2xl text-center" style={{ backgroundColor: colors.darkOrange + '10', border: `1px solid ${colors.darkOrange}30` }}>
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-center" style={{ color: colors.darkBrown }}>
                    <Truck className="mr-3 h-5 w-5" style={{ color: colors.darkOrange }} />
                    Need Urgent Assistance?
                  </h3>
                  <p className="mb-4" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                    For time-critical shipments or emergency logistics support
                  </p>
                  <a href="tel:+316872022074" className="inline-flex items-center px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg" style={{ backgroundColor: colors.darkOrange, color: 'white', boxShadow: `0 4px 14px ${colors.darkOrange}40` }}>
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