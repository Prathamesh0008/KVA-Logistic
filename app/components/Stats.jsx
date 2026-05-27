'use client'

import { useRef, useState } from 'react'
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
    content:
      'KVA Logistics transformed our distribution network. Their real-time tracking and 99.9% on-time delivery have been game-changing.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO, EcoTrade Imports',
    content:
      'Exceptional service! The team handled our delicate cargo with care, and the custom clearance support saved us days of delays.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Amina Diallo',
    role: 'Operations Manager, PanAfricEx',
    content:
      'The most reliable logistics partner. Their network is unmatched, and customer support is 24/7 superb.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 4,
    name: 'James Omondi',
    role: 'Founder, Nairobi Fresh',
    content:
      'We reduced our shipping costs by 20% after switching to KVA. The dashboard is intuitive and the team truly cares.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/91.jpg',
  },
  {
    id: 5,
    name: 'Elena Rossi',
    role: 'Logistics Coordinator, MedSupply EU',
    content:
      'Fast, secure, and transparent. The smart warehousing solution integrated perfectly with our ERP.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    id: 6,
    name: 'Carlos Mendez',
    role: 'VP Operations, AutoLatina',
    content:
      'Handled time-critical automotive parts with zero issues. Their air freight service is incredibly reliable.',
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
        style={{
          color: i < rating ? colors.goldenYellow : `${colors.darkBrown}30`,
        }}
      />
    ))}
  </div>
)

export default function TestimonialsSection() {
  const sliderItems = [...testimonials, ...testimonials]
  const sliderRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const startDrag = (e) => {
    if (!sliderRef.current) return

    setIsDragging(true)

    const pageX = e.pageX || e.touches?.[0]?.pageX
    setStartX(pageX)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const moveDrag = (e) => {
    if (!isDragging || !sliderRef.current) return

    e.preventDefault()

    const pageX = e.pageX || e.touches?.[0]?.pageX
    const walk = (pageX - startX) * 1.5

    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const stopDrag = () => {
    setIsDragging(false)
  }

  return (
    <section
      className="relative w-full overflow-hidden py-16 font-light tracking-wide md:py-20"
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

        .testimonial-wrapper:hover .testimonial-slider,
        .testimonial-wrapper.dragging .testimonial-slider {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A2A14' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto mb-12 max-w-3xl px-4 text-center">
          <h2
            className="mb-3 bg-clip-text text-3xl font-light tracking-wide text-transparent sm:text-4xl lg:text-5xl"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
            }}
          >
            What Our Clients Say
          </h2>

          <p
            className="mx-auto max-w-2xl bg-clip-text text-base text-transparent sm:text-lg"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.orange})`,
            }}
          >
            Real stories from businesses that trust KVA Logistics
          </p>
        </div>

        <div
          ref={sliderRef}
          className={`testimonial-wrapper scrollbar-hide w-full cursor-grab overflow-x-auto overflow-y-hidden ${
            isDragging ? 'dragging cursor-grabbing' : ''
          }`}
          onMouseDown={startDrag}
          onMouseMove={moveDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={moveDrag}
          onTouchEnd={stopDrag}
        >
          <div className="testimonial-slider flex w-max gap-6 px-4">
            {sliderItems.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="flex w-[320px] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl sm:w-[360px] lg:w-[390px]"
                style={{ border: `1px solid ${colors.lightTan}` }}
              >
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <Quote
                    className="mb-4 h-8 w-8 opacity-30"
                    style={{ color: colors.orange }}
                  />

                  <p
                    className="mb-5 flex-1 text-base font-light leading-relaxed md:text-lg"
                    style={{ color: colors.darkBrown }}
                  >
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <div
                      className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 shadow-sm"
                      style={{ borderColor: colors.goldenYellow }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        draggable="false"
                      />
                    </div>

                    <div>
                      <h4
                        className="text-base font-semibold"
                        style={{ color: colors.darkBrown }}
                      >
                        {testimonial.name}
                      </h4>

                      <p
                        className="text-sm opacity-70"
                        style={{ color: colors.darkBrown }}
                      >
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

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
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