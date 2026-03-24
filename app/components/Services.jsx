// ServicesPage.jsx
"use client";

import { Truck, Ship, Plane, Globe, Gauge, Shield } from "lucide-react";

export default function ServicesPage() {
  const colors = {
    darkBrown: "#521903",
    goldenYellow: "#f8b936",
    orange: "#dc8c18",
    darkOrange: "#9f4409",
    lightTan: "#c29f85",
  };

  return (
    <div className="snasm-font font-light tracking-wide bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-3">
              <span
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Comprehensive
              </span>
              <span
                className="block"
                style={{
                  background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Logistics Solutions
              </span>
            </h1>
            <p
              className="text-sm md:text-base max-w-2xl mx-auto"
              style={{
                color: colors.darkBrown,
                opacity: 0.8,
              }}
            >
              End-to-end supply chain management designed to optimize
              efficiency, reduce costs, and deliver exceptional reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Road Freight */}
            <div
              className="p-6 rounded-xl border transition-all hover:shadow-lg"
              style={{
                backgroundColor: "white",
                borderColor: colors.lightTan + "50",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
                  }}
                >
                  <Truck size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal tracking-wide" style={{ color: colors.darkBrown }}>
                  Road Freight
                </h3>
              </div>
              <p
                className="text-sm mb-4 font-light leading-relaxed"
                style={{ color: colors.darkBrown, opacity: 0.7 }}
              >
                Comprehensive overland transportation solutions with real-time
                GPS tracking and optimized delivery routes.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "LTL & FTL",
                  "Express Delivery",
                  "Temperature Controlled",
                  "Hazmat Certified",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: colors.goldenYellow }}
                    />
                    <span
                      className="text-xs font-light tracking-wide"
                      style={{ color: colors.darkBrown }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ocean Freight */}
            <div
              className="p-6 rounded-xl border transition-all hover:shadow-lg"
              style={{
                backgroundColor: "white",
                borderColor: colors.lightTan + "50",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
                  }}
                >
                  <Ship size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: colors.darkBrown }}>
                  Ocean Shipping
                </h3>
              </div>
              <p
                className="text-sm mb-4"
                style={{ color: colors.darkBrown, opacity: 0.7 }}
              >
                Global sea freight with container optimization and customs
                clearance services.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "FCL & LCL",
                  "Port-to-Port",
                  "Customs Brokerage",
                  "Container Tracking",
                  "Insurance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: colors.orange }}
                    />
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Air Freight */}
            <div
              className="p-6 rounded-xl border transition-all hover:shadow-lg"
              style={{
                backgroundColor: "white",
                borderColor: colors.lightTan + "50",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.lightTan})`,
                  }}
                >
                  <Plane size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: colors.darkBrown }}>
                  Air Freight
                </h3>
              </div>
              <p
                className="text-sm mb-4"
                style={{ color: colors.darkBrown, opacity: 0.7 }}
              >
                Express air cargo services for time-critical shipments with
                global network coverage.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Same Day",
                  "Next Flight Out",
                  "Door-to-Door",
                  "Charter Services",
                  "Dangerous Goods",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: colors.darkBrown }}
                    />
                    <span className="text-xs" style={{ color: colors.darkBrown }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-light text-center mb-10"
            style={{ color: colors.darkBrown }}
          >
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Network",
                desc: "Strategic partnerships worldwide ensure seamless cross-border logistics.",
              },
              {
                icon: Gauge,
                title: "Real-Time Tracking",
                desc: "Advanced GPS and IoT visibility from pickup to delivery.",
              },
              {
                icon: Shield,
                title: "Secure Handling",
                desc: "Certified security protocols for high-value and sensitive cargo.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl text-center border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div
                  className="flex justify-center mb-3"
                  style={{
                    filter: `drop-shadow(0 4px 6px ${colors.orange}30)`,
                  }}
                >
                  <item.icon size={36} strokeWidth={1.5} style={{ color: colors.orange }} />
                </div>
                <h3 className="text-lg font-medium mb-2" style={{ color: colors.darkBrown }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-light text-center mb-10"
            style={{ color: colors.darkBrown }}
          >
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Their road freight service reduced our transit times by 30%. The real-time tracking is a game-changer.",
                author: "— Maria G., Logistics Manager",
              },
              {
                quote:
                  "Outstanding ocean freight support – customs clearance was handled flawlessly. Highly professional team.",
                author: "— James T., Supply Chain Director",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border relative"
                style={{
                  backgroundColor: "white",
                  borderColor: colors.lightTan + "50",
                }}
              >
                <div
                  className="absolute top-0 left-4 transform -translate-y-1/2 text-4xl"
                  style={{ color: colors.goldenYellow, opacity: 0.3 }}
                >
                  "
                </div>
                <p className="text-sm italic mb-3 relative z-10" style={{ color: colors.darkBrown, opacity: 0.8 }}>
                  {testimonial.quote}
                </p>
                <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl md:text-3xl font-light mb-4"
            style={{ color: colors.darkBrown }}
          >
            Ready to streamline your logistics?
          </h2>
          <p className="text-sm mb-8" style={{ color: colors.darkBrown, opacity: 0.7 }}>
            Get a customized quote tailored to your supply chain needs.
          </p>
          <button
            className="px-8 py-3 rounded-full text-white font-medium text-sm transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.darkOrange})`,
              boxShadow: `0 10px 20px -8px ${colors.darkOrange}`,
            }}
          >
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}

// "use client";

// export default function ServicesPage() {
//   const colors = {
//     darkBrown: "#521903",
//     goldenYellow: "#f8b936",
//     orange: "#dc8c18",
//     darkOrange: "#9f4409",
//     lightTan: "#c29f85",
//   };

//   return (
//     <div className="snasm-font font-light tracking-wide bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
//       {/* Hero Section */}
//       <section className="py-10">
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-3">
//               <span
//                 className="block"
//                 style={{
//                   background: `linear-gradient(90deg, ${colors.darkBrown}, ${colors.goldenYellow})`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Comprehensive
//               </span>
//               <span
//                 className="block"
//                 style={{
//                   background: `linear-gradient(90deg, ${colors.goldenYellow}, ${colors.orange})`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Logistics Solutions
//               </span>
//             </h1>
//             <p
//               className="text-sm md:text-base max-w-2xl mx-auto"
//               style={{
//                 color: colors.darkBrown,
//                 opacity: 0.8,
//               }}
//             >
//               End-to-end supply chain management designed to optimize
//               efficiency, reduce costs, and deliver exceptional reliability.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-8">
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Road Freight */}
//             <div
//               className="p-6 rounded-xl border transition-all hover:shadow-lg"
//               style={{
//                 backgroundColor: "white",
//                 borderColor: colors.lightTan + "50",
//               }}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div
//                   className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"
//                   style={{
//                     background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.orange})`,
//                   }}
//                 >
//                   🚚
//                 </div>
//                 <h3 className="text-lg font-normal tracking-wide" style={{ color: colors.darkBrown }}>
//                   Road Freight
//                 </h3>
//               </div>
//               <p
//                 className="text-sm mb-4 font-light leading-relaxed"
//                 style={{ color: colors.darkBrown, opacity: 0.7 }}
//               >
//                 Comprehensive overland transportation solutions with real-time
//                 GPS tracking and optimized delivery routes.
//               </p>
//               <div className="grid grid-cols-2 gap-2">
//                 {[
//                   "LTL & FTL",
//                   "Express Delivery",
//                   "Temperature Controlled",
//                   "Hazmat Certified",
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-2">
//                     <div
//                       className="w-1.5 h-1.5 rounded-full"
//                       style={{ backgroundColor: colors.goldenYellow }}
//                     />
//                     <span
//                       className="text-xs font-light tracking-wide"
//                       style={{ color: colors.darkBrown }}
//                     >
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Ocean Freight */}
//             <div
//               className="p-6 rounded-xl border transition-all hover:shadow-lg"
//               style={{
//                 backgroundColor: "white",
//                 borderColor: colors.lightTan + "50",
//               }}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div
//                   className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"
//                   style={{
//                     background: `linear-gradient(135deg, ${colors.orange}, ${colors.darkOrange})`,
//                   }}
//                 >
//                   🚢
//                 </div>
//                 <h3 className="text-lg font-bold" style={{ color: colors.darkBrown }}>
//                   Ocean Shipping
//                 </h3>
//               </div>
//               <p
//                 className="text-sm mb-4"
//                 style={{ color: colors.darkBrown, opacity: 0.7 }}
//               >
//                 Global sea freight with container optimization and customs
//                 clearance services.
//               </p>
//               <div className="grid grid-cols-2 gap-2">
//                 {[
//                   "FCL & LCL",
//                   "Port-to-Port",
//                   "Customs Brokerage",
//                   "Container Tracking",
//                   "Insurance",
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-2">
//                     <div
//                       className="w-1.5 h-1.5 rounded-full"
//                       style={{ backgroundColor: colors.orange }}
//                     />
//                     <span className="text-xs" style={{ color: colors.darkBrown }}>
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Air Freight */}
//             <div
//               className="p-6 rounded-xl border transition-all hover:shadow-lg"
//               style={{
//                 backgroundColor: "white",
//                 borderColor: colors.lightTan + "50",
//               }}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div
//                   className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"
//                   style={{
//                     background: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.lightTan})`,
//                   }}
//                 >
//                   ✈️
//                 </div>
//                 <h3 className="text-lg font-bold" style={{ color: colors.darkBrown }}>
//                   Air Freight
//                 </h3>
//               </div>
//               <p
//                 className="text-sm mb-4"
//                 style={{ color: colors.darkBrown, opacity: 0.7 }}
//               >
//                 Express air cargo services for time-critical shipments with
//                 global network coverage.
//               </p>
//               <div className="grid grid-cols-2 gap-2">
//                 {[
//                   "Same Day",
//                   "Next Flight Out",
//                   "Door-to-Door",
//                   "Charter Services",
//                   "Dangerous Goods",
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-2">
//                     <div
//                       className="w-1.5 h-1.5 rounded-full"
//                       style={{ backgroundColor: colors.darkBrown }}
//                     />
//                     <span className="text-xs" style={{ color: colors.darkBrown }}>
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       {/* <section className="py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {[
//               { value: "10K+", label: "Shipments/year" },
//               { value: "50+", label: "Countries" },
//               { value: "24/7", label: "Support" },
//               { value: "99%", label: "On-Time Delivery" },
//             ].map((stat, idx) => (
//               <div key={idx}>
//                 <div
//                   className="text-3xl md:text-4xl font-light mb-1"
//                   style={{
//                     background: `linear-gradient(135deg, ${colors.darkBrown}, ${colors.orange})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}
//                 >
//                   {stat.value}
//                 </div>
//                 <div className="text-sm uppercase tracking-wider" style={{ color: colors.darkBrown, opacity: 0.7 }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Why Choose Us */}
//       <section className="py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2
//             className="text-2xl md:text-3xl font-light text-center mb-10"
//             style={{ color: colors.darkBrown }}
//           >
//             Why Choose Us
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🌐",
//                 title: "Global Network",
//                 desc: "Strategic partnerships worldwide ensure seamless cross-border logistics.",
//               },
//               {
//                 icon: "⚡",
//                 title: "Real-Time Tracking",
//                 desc: "Advanced GPS and IoT visibility from pickup to delivery.",
//               },
//               {
//                 icon: "🔒",
//                 title: "Secure Handling",
//                 desc: "Certified security protocols for high-value and sensitive cargo.",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="p-6 rounded-xl text-center border transition-all hover:shadow-md"
//                 style={{
//                   backgroundColor: "white",
//                   borderColor: colors.lightTan + "50",
//                 }}
//               >
//                 <div
//                   className="text-4xl mb-3"
//                   style={{
//                     filter: `drop-shadow(0 4px 6px ${colors.orange}30)`,
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="text-lg font-medium mb-2" style={{ color: colors.darkBrown }}>
//                   {item.title}
//                 </h3>
//                 <p className="text-sm" style={{ color: colors.darkBrown, opacity: 0.7 }}>
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-12">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2
//             className="text-2xl md:text-3xl font-light text-center mb-10"
//             style={{ color: colors.darkBrown }}
//           >
//             What Our Clients Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 quote:
//                   "Their road freight service reduced our transit times by 30%. The real-time tracking is a game-changer.",
//                 author: "— Maria G., Logistics Manager",
//               },
//               {
//                 quote:
//                   "Outstanding ocean freight support – customs clearance was handled flawlessly. Highly professional team.",
//                 author: "— James T., Supply Chain Director",
//               },
//             ].map((testimonial, idx) => (
//               <div
//                 key={idx}
//                 className="p-6 rounded-xl border relative"
//                 style={{
//                   backgroundColor: "white",
//                   borderColor: colors.lightTan + "50",
//                 }}
//               >
//                 <div
//                   className="absolute top-0 left-4 transform -translate-y-1/2 text-4xl"
//                   style={{ color: colors.goldenYellow, opacity: 0.3 }}
//                 >
//                   "
//                 </div>
//                 <p className="text-sm italic mb-3 relative z-10" style={{ color: colors.darkBrown, opacity: 0.8 }}>
//                   {testimonial.quote}
//                 </p>
//                 <p className="text-xs font-medium" style={{ color: colors.darkBrown }}>
//                   {testimonial.author}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action */}
//       <section className="py-16">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h2
//             className="text-2xl md:text-3xl font-light mb-4"
//             style={{ color: colors.darkBrown }}
//           >
//             Ready to streamline your logistics?
//           </h2>
//           <p className="text-sm mb-8" style={{ color: colors.darkBrown, opacity: 0.7 }}>
//             Get a customized quote tailored to your supply chain needs.
//           </p>
//           <button
//             className="px-8 py-3 rounded-full text-white font-medium text-sm transition-transform hover:scale-105"
//             style={{
//               background: `linear-gradient(135deg, ${colors.goldenYellow}, ${colors.darkOrange})`,
//               boxShadow: `0 10px 20px -8px ${colors.darkOrange}`,
//             }}
//           >
//             Request a Quote
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }