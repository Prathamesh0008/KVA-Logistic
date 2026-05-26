'use client'

import { Star, Quote } from 'lucide-react'

const colors = {
  darkBrown: '#4A2A14',
  goldenYellow: '#C9A24D',
  orange: '#8C1D08',
  darkOrange: '#6B1A0A',
  lightTan: '#E6D3A3',
  warmWhite: '#FAF8F5',
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Supply Chain Director, TechGlobal',
    content: 'KVA Logistics transformed our distribution network. Their real-time tracking and 99.9% on-time delivery have been game-changing.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO, EcoTrade Imports',
    content: 'Exceptional service! The team handled our delicate cargo with care, and the custom clearance support saved us days of delays.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Amina Diallo',
    role: 'Operations Manager, PanAfricEx',
    content: 'The most reliable logistics partner. Their network is unmatched, and customer support is 24/7 superb.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 4,
    name: 'James Omondi',
    role: 'Founder, Nairobi Fresh',
    content: 'We reduced our shipping costs by 20% after switching to KVA. The dashboard is intuitive and the team truly cares.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/91.jpg',
  },
  {
    id: 5,
    name: 'Elena Rossi',
    role: 'Logistics Coordinator, MedSupply EU',
    content: 'Fast, secure, and transparent. The smart warehousing solution integrated perfectly with our ERP.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    id: 6,
    name: 'Carlos Mendez',
    role: 'VP Operations, AutoLatina',
    content: 'Handled time-critical automotive parts with zero issues. Their air freight service is incredibly reliable.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
]

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-current' : 'fill-none'}`}
        style={{ color: i < rating ? colors.goldenYellow : `${colors.darkBrown}30` }}
      />
    ))}
  </div>
)

export default function TestimonialsSection() {
  const sliderItems = [...testimonials, ...testimonials]

  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden font-light tracking-wide"
      style={{ backgroundColor: colors.warmWhite }}
    >
<style jsx global>{`
  @keyframes scrollRightToLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .testimonial-slider {
    animation: scrollRightToLeft 22s linear infinite;
    will-change: transform;
  }

  .testimonial-slider:hover {
    animation-play-state: paused;
  }
`}</style>

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A2A14' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide mb-3 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
            }}
          >
            What Our Clients Say
          </h2>

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.orange})`,
            }}
          >
            Real stories from businesses that trust KVA Logistics
          </p>
        </div>

        {/* Right to left slider */}
        <div className="w-full overflow-hidden">
       <div className="testimonial-slider flex w-max gap-6 px-4">
            {sliderItems.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[320px] sm:w-[360px] lg:w-[390px] rounded-xl shadow-md hover:shadow-xl transition-all duration-500 bg-white overflow-hidden flex flex-col shrink-0"
                style={{ border: `1px solid ${colors.lightTan}` }}
              >
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <Quote className="h-8 w-8 mb-4 opacity-30" style={{ color: colors.orange }} />

                  <p
                    className="text-base md:text-lg font-light leading-relaxed mb-5 flex-1"
                    style={{ color: colors.darkBrown }}
                  >
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="relative w-12 h-12 rounded-full overflow-hidden border-2 shadow-sm shrink-0"
                      style={{ borderColor: colors.goldenYellow }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-base" style={{ color: colors.darkBrown }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm opacity-70" style={{ color: colors.darkBrown }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
            }}
          >
            Join Our Happy Clients
          </a>
        </div>
      </div>
    </section>
  )
}