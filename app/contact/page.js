'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  FileText,
  CheckCircle,
} from 'lucide-react'

const EMAILJS_PUBLIC_KEY = 'ctHzsKvXJvpGEjIvF'
const EMAILJS_SERVICE_ID = 'service_a93w12k'
const ADMIN_TEMPLATE_ID = 'template_ysi9wih'
const USER_TEMPLATE_ID = 'template_o2mw75i'

emailjs.init(EMAILJS_PUBLIC_KEY)

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState(null)

  const colors = {
    darkBrown: '#310F0B',
    goldenYellow: '#EB9003',
    orange: '#C55500',
    darkOrange: '#9F4100',
    lightTan: '#F5F3EF',
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

    emailjs
      .send(EMAILJS_SERVICE_ID, ADMIN_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .catch((err) => console.error('Admin email error:', err))

    emailjs
      .send(EMAILJS_SERVICE_ID, USER_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .catch((err) => console.error('User email error:', err))

    setFormStatus('success')
    form.reset()

    setTimeout(() => setFormStatus(null), 3000)
  }

  const contactCards = [
    {
      icon: Phone,
      title: 'Phone',
      line1: '24/7 Support',
      line2: '',
      border: colors.goldenYellow,
      gradient: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
    },
    {
      icon: Mail,
      title: 'Email',
      line1: 'info@kvalogistics.nl',
      line2: 'Response within 2h',
      border: colors.orange,
      gradient: `linear-gradient(90deg, ${colors.orange}, ${colors.darkOrange})`,
    },
    {
      icon: MapPin,
      title: 'Main Office',
      line1: 'Apendans 5, 2511ED',
      line2: 'The Netherlands',
      border: colors.darkBrown,
      gradient: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.darkOrange})`,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      line1: '24/7 Operations',
      line2: 'Always available',
      border: colors.orange,
      gradient: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col font-light bg-white">
      <div className="relative z-10">
        {/* Hero */}
        <div className="py-6 md:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5E3C] to-[#C55500]">
                  Contact KVA Logistics
                </span>
              </h1>

          <p
  className="text-lg sm:text-xl md:text-1xl max-w-3xl mx-auto text-transparent bg-clip-text"
  style={{
    backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow}, ${colors.orange})`,
  }}
>
  Reach out for inquiries, support, or logistics solutions
</p>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                {/* Left Form */}
                <div
                  className="p-5 md:p-6 rounded-xl border"
                  style={{
                    backgroundColor: colors.lightTan,
                    borderColor: colors.goldenYellow,
                    boxShadow: '0 4px 20px rgba(235, 144, 3, 0.15)',
                  }}
                >
                  <h2
                    className="text-xl font-medium mb-4"
                    style={{ color: colors.darkOrange }}
                  >
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        className="block text-base font-medium mb-2"
                        style={{ color: colors.darkBrown }}
                      >
                        Full Name
                      </label>

                      <div className="relative">
                        <User
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                          style={{ color: colors.darkOrange }}
                        />

                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full pl-9 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-1 text-base"
                          style={{
                            borderColor: colors.orange,
                            backgroundColor: 'white',
                            color: colors.darkBrown,
                          }}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-base font-medium mb-2"
                        style={{ color: colors.darkBrown }}
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                          style={{ color: colors.darkOrange }}
                        />

                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-9 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-1 text-base"
                          style={{
                            borderColor: colors.orange,
                            backgroundColor: 'white',
                            color: colors.darkBrown,
                          }}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-base font-medium mb-2"
                        style={{ color: colors.darkBrown }}
                      >
                        Subject
                      </label>

                      <div className="relative">
                        <FileText
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none"
                          style={{ color: colors.darkOrange }}
                        />

                        <select
                          name="subject"
                          required
                          className="w-full pl-9 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-1 text-base appearance-none cursor-pointer"
                          style={{
                            borderColor: colors.orange,
                            backgroundColor: 'white',
                            color: colors.darkBrown,
                          }}
                        >
                          <option value="">Select Subject</option>
                          <option value="shipping">Shipping Inquiry</option>
                          <option value="tracking">Tracking Issue</option>
                          <option value="pricing">Pricing / Quote</option>
                          <option value="support">Customer Support</option>
                          <option value="complaint">Complaint</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-base font-medium mb-2"
                        style={{ color: colors.darkBrown }}
                      >
                        Message
                      </label>

                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-1 text-base resize-none"
                        style={{
                          borderColor: colors.orange,
                          backgroundColor: 'white',
                          color: colors.darkBrown,
                        }}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-base cursor-pointer"
                      style={{
                        background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                        color: '#FFFFFF',
                        boxShadow: '0 4px 12px rgba(235, 144, 3, 0.3)',
                      }}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>

                    {formStatus === 'success' && (
                      <div
                        className="flex items-center gap-2 p-3 rounded-lg"
                        style={{ backgroundColor: colors.goldenYellow + '20' }}
                      >
                        <CheckCircle
                          className="h-4 w-4"
                          style={{ color: colors.goldenYellow }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: colors.darkBrown }}
                        >
                          Message sent successfully!
                        </span>
                      </div>
                    )}
                  </form>
                </div>

                {/* Right Side */}
                <div className="space-y-4">
                  {/* 4 Contact Boxes moved here */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactCards.map((card) => {
                      const Icon = card.icon

                      return (
                        <div
                          key={card.title}
                          className="p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                          style={{
                            backgroundColor: colors.lightTan,
                            borderColor: card.border,
                            boxShadow: '0 4px 12px rgba(197, 85, 0, 0.1)',
                          }}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                              style={{ background: card.gradient }}
                            >
                              <Icon
                                className="h-5 w-5"
                                style={{ color: colors.darkBrown }}
                              />
                            </div>

                            <h3
                              className="text-lg font-semibold mb-1"
                              style={{ color: colors.darkBrown }}
                            >
                              {card.title}
                            </h3>

                            <p
                              className="text-base font-semibold break-all"
                              style={{ color: colors.darkOrange }}
                            >
                              {card.line1}
                            </p>

                            {card.line2 && (
                              <p
                                className="text-base"
                                style={{ color: colors.darkBrown, opacity: 0.8 }}
                              >
                                {card.line2}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Address Box */}
                  <div
                    className="p-6 rounded-xl border"
                    style={{
                      backgroundColor: colors.lightTan,
                      borderColor: colors.orange,
                      boxShadow: '0 4px 20px rgba(197, 85, 0, 0.12)',
                    }}
                  >
                    <div className="text-center">
                      <MapPin
                        className="h-10 w-10 mx-auto mb-3"
                        style={{ color: colors.goldenYellow }}
                      />

                      <p
                        className="text-xl font-bold"
                        style={{ color: colors.darkOrange }}
                      >
                        Apendans 5
                      </p>

                      <p
                        className="text-base font-medium"
                        style={{ color: colors.darkBrown }}
                      >
                        2511ED&apos; s-Gravenhage
                      </p>

                      <p
                        className="text-lg mt-2 font-semibold"
                        style={{ color: colors.darkOrange }}
                      >
                        The Netherlands
                      </p>
                    </div>
                  </div>

                  {/* Sales Box */}
                  <div
                    className="p-5 rounded-xl border"
                    style={{
                      backgroundColor: colors.lightTan,
                      borderColor: colors.orange,
                      boxShadow: '0 4px 12px rgba(197, 85, 0, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `linear-gradient(90deg, ${colors.orange}, ${colors.darkOrange})`,
                        }}
                      >
                        <Mail
                          className="h-5 w-5"
                          style={{ color: colors.darkBrown }}
                        />
                      </div>

                      <div>
                        <p
                          className="text-lg font-semibold"
                          style={{ color: colors.darkBrown }}
                        >
                          Sales
                        </p>

                        <p
                          className="text-base sm:text-lg font-bold break-all"
                          style={{ color: '#8A3200' }}
                        >
                          info@kvalogistics.nl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Right Side */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}