// app/teams/page.jsx
import Link from 'next/link';

export const metadata = {
  title: "Teams | KVA Logistics",
  description: "Meet the people behind KVA Logistics operations – dedicated professionals ensuring your shipments move safely and on time.",
};

const team = [
  {
    name: "Operations",
    role: "Dispatch & routing coordination",
    description:
      "Our operations team works 24/7 to monitor shipments, optimize routes, and resolve real‑time logistics challenges. They ensure every delivery meets our promise of reliability.",
    icon: "⚙️",
    stats: "24/7 monitoring",
  },
  {
    name: "Warehouse",
    role: "Inbound, storage, and picking",
    description:
      "With a 50,000 sq ft facility, our warehouse team manages inventory with precision. From receiving to packing, they keep the supply chain flowing smoothly.",
    icon: "📦",
    stats: "99.8% accuracy",
  },
  {
    name: "Fleet",
    role: "Drivers & vehicle maintenance",
    description:
      "Our fleet of modern vehicles is supported by experienced drivers and a dedicated maintenance crew. Safety and efficiency are at the core of every mile.",
    icon: "🚛",
    stats: "98% on‑time delivery",
  },
  {
    name: "Customer Support",
    role: "Shipment updates & resolution",
    description:
      "A friendly, knowledgeable team is ready to assist with tracking, issues, or questions. We pride ourselves on fast, transparent communication.",
    icon: "📞",
    stats: "< 2hr response time",
  },
];

export default function TeamsPage() {
  return (
    <main className="bg-white flex flex-col">
      <section className="mx-auto max-w-6xl px-4 w-full py-8 sm:py-12">
        {/* Page header – term name prominently displayed */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#310F0B] tracking-tight">
            Our Teams
          </h1>
          <p className="mt-3 text-lg text-[#310F0B]/70 max-w-2xl mx-auto">
            Meet the dedicated professionals who keep your shipments moving safely and on time.
          </p>
        </div>

        {/* Top content with badge and contact card */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center rounded-full bg-[#EB9003] px-3 py-1 text-xs font-medium text-white">
              KVA Logistics
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl text-[#310F0B]">
              The people behind the promise
            </h2>
            <p className="mt-2 text-sm text-[#310F0B]/80 sm:text-base max-w-xl">
              A logistics business runs on coordination—these are the groups that
              keep shipments moving, safely and on time.
            </p>
          </div>

          {/* Quick contact card */}
          <div className="rounded-xl border border-[#C55500] bg-white p-5 shadow-md w-full lg:w-64">
            <p className="text-sm font-medium text-[#310F0B]">📞 Quick contact</p>
            <div className="mt-2 space-y-1">
              <a
                href="mailto:support@kvalogistics.com"
                className="block text-sm text-[#310F0B]/70 hover:text-[#EB9003] transition"
              >
                support@kvalogistics.com
              </a>
              <a
                href="tel:+15551234567"
                className="block text-sm text-[#310F0B]/70 hover:text-[#EB9003] transition"
              >
                +1 (555) 123‑4567
              </a>
            </div>
            <div className="mt-3 h-0.5 w-full rounded-full bg-[#EB9003]" />
            <p className="mt-2 text-xs text-[#310F0B]/50">
              Mon–Fri, 8am–6pm (EST)
            </p>
          </div>
        </div>

        {/* Team grid – boxes in a clean layout */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div
              key={t.name}
              className="group rounded-xl border border-[#C55500] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#EB9003] flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{t.icon}</span>
                  <h3 className="text-lg font-semibold text-[#310F0B]">{t.name}</h3>
                </div>
                <span className="h-3 w-3 rounded-full bg-[#EB9003] ring-2 ring-white mt-1" />
              </div>
              <p className="mt-2 text-xs font-medium text-[#EB9003] uppercase tracking-wider">
                {t.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#310F0B]/80 flex-grow">
                {t.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-[#310F0B]/60">
                <span>⚡ {t.stats}</span>
                <div className="h-1.5 w-20 rounded-full bg-[#EB9003]/20 overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-[#EB9003] transition-all group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats & values – service sections */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#310F0B]/5 p-6">
            <h3 className="text-lg font-semibold text-[#310F0B]">Key metrics</h3>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold text-[#EB9003]">500+</p>
                <p className="text-xs text-[#310F0B]/70">Shipments / day</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#EB9003]">98%</p>
                <p className="text-xs text-[#310F0B]/70">On‑time delivery</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#EB9003]">50+</p>
                <p className="text-xs text-[#310F0B]/70">Team members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#EB9003]">24/7</p>
                <p className="text-xs text-[#310F0B]/70">Support coverage</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#310F0B]/5 p-6">
            <h3 className="text-lg font-semibold text-[#310F0B]">Our values</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#310F0B]/80">
              <li className="flex items-center gap-2">
                <span className="text-[#EB9003]">✓</span> Reliability first
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#EB9003]">✓</span> Transparency in every step
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#EB9003]">✓</span> Safety above all
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#EB9003]">✓</span> Continuous improvement
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 rounded-2xl border-2 border-[#C55500] bg-gradient-to-r from-[#310F0B] to-[#9F4100] p-6 text-white shadow-xl">
          <h3 className="text-xl font-medium mb-2">🚀 Want to join the team?</h3>
          <p className="text-sm mb-4 text-white/80 leading-relaxed">
            We're always looking for passionate individuals to help us deliver excellence.
            Explore our open positions in operations, warehousing, fleet management, and customer support.
          </p>
          <div className="flex flex-wrap gap-3">
           
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// // app/teams/page.jsx
// export const metadata = {
//   title: "Teams | KVA Logistics",
//   description: "Meet the people behind KVA Logistics operations."
// };

// const team = [
//   { name: "Operations", role: "Dispatch & routing coordination" },
//   { name: "Warehouse", role: "Inbound, storage, and picking" },
//   { name: "Fleet", role: "Drivers & vehicle maintenance" },
//   { name: "Customer Support", role: "Shipment updates & resolution" }
// ];

// export default function TeamsPage() {
//   return (
// <main className="bg-white min-h-screen flex flex-col">
// <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12 flex-1 w-full flex flex-col">
//         <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
//           <div className="max-w-2xl">
//             <p className="inline-flex items-center rounded-full bg-[#EB9003] px-3 py-1 text-xs font-medium text-white">
//               KVA Logistics
//             </p>
//             <h1 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl text-[#310F0B]">
//               Our Teams
//             </h1>
//             <p className="mt-2 text-sm text-[#310F0B]/80 sm:text-base">
//               A logistics business runs on coordination—these are the groups that
//               keep shipments moving, safely and on time.
//             </p>
//           </div>

//           <div className="rounded-xl border border-[#C55500] bg-white p-5 shadow-md">
//             <p className="text-sm font-medium text-[#310F0B]">Quick contact</p>
//             <p className="mt-1 text-sm text-[#310F0B]/70">
//               Replace with your support email / phone.
//             </p>
//             <div className="mt-2 h-0.5 w-full rounded-full bg-[#EB9003]" />
//           </div>
//         </div>

//         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {team.map((t) => (
//             <div
//               key={t.name}
//               className="group rounded-xl border border-[#C55500] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[#EB9003]"
//             >
//               <div className="flex items-start justify-between gap-2">
//                 <h2 className="text-lg font-semibold text-[#310F0B]">{t.name}</h2>
//                 <span className="h-3 w-3 rounded-full bg-[#EB9003] ring-2 ring-white mt-1" />
//               </div>
//               <p className="mt-2 text-xs leading-relaxed text-[#310F0B]/80">{t.role}</p>
//               <div className="mt-4 h-1.5 w-full rounded-full bg-[#EB9003]/20">
//                 <div className="h-1.5 w-3/4 rounded-full bg-[#EB9003] transition-all group-hover:w-full" />
//               </div>
//             </div>
//           ))}
//         </div>

// <div className="mt-auto pt-12 rounded-2xl border-2 border-[#C55500] bg-gradient-to-r from-[#310F0B] to-[#9F4100] p-6 text-white shadow-xl">          <h3 className="text-xl font-medium mb-2">Want to join the team?</h3>
//           <p className="text-sm mb-4 text-white/80 leading-relaxed">
//             Add your hiring text here (email, form link, or careers page).
//           </p>
//           <a
//             href="/contact"
//             className="inline-flex items-center justify-center rounded-lg bg-[#EB9003] px-6 py-3 text-sm font-medium text-[#310F0B] shadow hover:bg-[#C55500] hover:shadow-lg hover:scale-105 transition-all duration-300"
//           >
//             Contact us
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }