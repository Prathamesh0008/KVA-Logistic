// app/privacy-policy/page.jsx
export const metadata = {
  title: "Privacy Policy | KVA Logistics",
  description: "Privacy policy describing how KVA Logistics collects and uses data."
};

function Section({ title, children, colorIndex }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-[#dc8c18]/30">
      <div className="flex items-center gap-3 mb-3 pb-2 border-b border-gray-100">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#310F0B]/10 to-[#dc8c18]/10 flex items-center justify-center text-xs font-semibold text-[#310F0B]">
          {colorIndex + 1}
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-[#310F0B] tracking-tight">{title}</h2>
      </div>
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      items: [
        "Full name, contact details, and identification",
        "Complete pickup and delivery addresses",
        "Shipment specifications and contents",
        "Secure payment information",
        "Communication and support records",
        "Technical data for service improvement"
      ]
    },
    {
      title: "How We Use Your Data",
      items: [
        "Real-time shipment processing and tracking",
        "Automated delivery updates via multiple channels",
        "Secure payment processing and GST invoicing",
        "Service quality enhancement through analytics",
        "24/7 dedicated customer support",
        "Legal compliance and regulatory requirements"
      ]
    },
    {
      title: "Data Protection & Security",
      items: [
        "256-bit SSL encryption for all data transfers",
        "Secure cloud infrastructure with regular audits",
        "Role-based access control for employees",
        "Regular security assessments and penetration testing",
        "Data anonymization for analytical purposes",
        "Incident response and breach notification protocols"
      ]
    },
    {
      title: "Third-Party Data Sharing",
      items: [
        "Verified delivery partners for shipment execution",
        "Certified payment gateways (PCI DSS compliant)",
        "Customs and regulatory authorities for international shipments",
        "Legal entities when required by Indian law",
        "Analytics providers (with anonymized data only)",
        "Customer support and communication platforms"
      ]
    },
    {
      title: "Your Legal Rights (DPDP Act 2023)",
      items: [
        "Access your personal data in a structured format",
        "Request correction of inaccurate information",
        "Complete data erasure (right to be forgotten)",
        "Withdraw consent for data processing",
        "Data portability to other service providers",
        "Lodge complaints with the Data Protection Board"
      ]
    },
    {
      title: "Data Retention Periods",
      items: [
        "Active shipment records: 2 years post-delivery",
        "Customer account data: Until account deletion",
        "Financial transaction records: 7 years (Income Tax Act)",
        "Legal compliance documents: As per statutory requirements",
        "Marketing consent records: Until withdrawal",
        "Inactive customer data: Auto-deleted after 24 months"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header - reduced vertical spacing */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#310F0B] to-[#9F4100] px-4 py-1.5 text-xs font-medium text-white mb-4 shadow">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            KVA Logistics Privacy Center
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            <span className="bg-gradient-to-r from-[#310F0B] via-[#9F4100] to-[#dc8c18] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-gray-600 mb-3 leading-relaxed">
              Your privacy is our priority. This policy outlines how we collect, use, and protect your personal information in compliance with Indian regulations including the DPDP Act 2023.
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#310F0B] to-[#dc8c18] mx-auto rounded-full" />
          </div>
        </div>

        {/* Main Content Grid - reduced gap */}
        <div className="grid gap-5 lg:grid-cols-2 mb-12">
          {sections.map((section, idx) => (
            <Section key={idx} title={section.title} colorIndex={idx}>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#dc8c18]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          ))}
        </div>

        {/* Contact Section - reduced padding */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#310F0B]/10 to-[#dc8c18]/10 flex items-center justify-center text-xl">
              🔒
            </div>
            <h3 className="text-2xl font-semibold text-[#310F0B] mb-2">
              Data Protection Office
            </h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Our dedicated Data Protection Officer ensures compliance and addresses your privacy concerns promptly.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Email</div>
                <a href="mailto:privacy@kvalogistics.nl" className="text-base font-medium text-[#310F0B] hover:text-[#dc8c18] transition-colors break-all">
                  privacy@kvalogistics.nl
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Phone</div>
                <div className="text-base font-medium text-[#310F0B]">
                  +316872022074
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#310F0B] to-[#9F4100] px-6 py-3 text-sm font-medium text-white shadow hover:shadow-md hover:scale-[1.02] transition-all"
              >
                Contact Privacy Team
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
             
            </div>
          </div>
        </div>

        {/* Footer - reduced padding */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="text-left">
              <div className="text-xl font-semibold text-[#310F0B] mb-1">KVA Logistics</div>
              <p>Registered Office: Mumbai, Maharashtra, India</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-[#310F0B]">Version 2.1 • Effective Feb 2, 2026</p>
              <p>Reviewed annually</p>
            </div>
            <div className="text-right">
              <p>© 2026 KVA Logistics Pvt. Ltd.</p>
              <p>GSTIN: 27AAECK1234M1Z5</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
// // app/privacy-policy/page.jsx
// export const metadata = {
//   title: "Privacy Policy | KVA Logistics",
//   description: "Privacy policy describing how KVA Logistics collects and uses data."
// };

// function Section({ title, children, colorIndex }) {
//   return (
//     <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-[#dc8c18]/30">
//       <div className="flex items-center gap-3 mb-3 pb-2 border-b border-gray-100">
//         <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#310F0B]/10 to-[#dc8c18]/10 flex items-center justify-center text-xs font-bold text-[#310F0B]">
//           {colorIndex + 1}
//         </div>
//         <h2 className="text-lg sm:text-xl font-bold text-[#310F0B] tracking-tight">{title}</h2>
//       </div>
//       <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function PrivacyPolicyPage() {
//   const sections = [
//     {
//       title: "Information We Collect",
//       items: [
//         "Full name, contact details, and identification",
//         "Complete pickup and delivery addresses",
//         "Shipment specifications and contents",
//         "Secure payment information",
//         "Communication and support records",
//         "Technical data for service improvement"
//       ]
//     },
//     {
//       title: "How We Use Your Data",
//       items: [
//         "Real-time shipment processing and tracking",
//         "Automated delivery updates via multiple channels",
//         "Secure payment processing and GST invoicing",
//         "Service quality enhancement through analytics",
//         "24/7 dedicated customer support",
//         "Legal compliance and regulatory requirements"
//       ]
//     },
//     {
//       title: "Data Protection & Security",
//       items: [
//         "256-bit SSL encryption for all data transfers",
//         "Secure cloud infrastructure with regular audits",
//         "Role-based access control for employees",
//         "Regular security assessments and penetration testing",
//         "Data anonymization for analytical purposes",
//         "Incident response and breach notification protocols"
//       ]
//     },
//     {
//       title: "Third-Party Data Sharing",
//       items: [
//         "Verified delivery partners for shipment execution",
//         "Certified payment gateways (PCI DSS compliant)",
//         "Customs and regulatory authorities for international shipments",
//         "Legal entities when required by Indian law",
//         "Analytics providers (with anonymized data only)",
//         "Customer support and communication platforms"
//       ]
//     },
//     {
//       title: "Your Legal Rights (DPDP Act 2023)",
//       items: [
//         "Access your personal data in a structured format",
//         "Request correction of inaccurate information",
//         "Complete data erasure (right to be forgotten)",
//         "Withdraw consent for data processing",
//         "Data portability to other service providers",
//         "Lodge complaints with the Data Protection Board"
//       ]
//     },
//     {
//       title: "Data Retention Periods",
//       items: [
//         "Active shipment records: 2 years post-delivery",
//         "Customer account data: Until account deletion",
//         "Financial transaction records: 7 years (Income Tax Act)",
//         "Legal compliance documents: As per statutory requirements",
//         "Marketing consent records: Until withdrawal",
//         "Inactive customer data: Auto-deleted after 24 months"
//       ]
//     }
//   ];

//   return (
//     <main className="min-h-screen bg-white py-8 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Header - reduced vertical spacing */}
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#310F0B] to-[#9F4100] px-4 py-1.5 text-xs font-semibold text-white mb-4 shadow">
//             <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
//             KVA Logistics Privacy Center
//           </div>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
//             <span className="bg-gradient-to-r from-[#310F0B] via-[#9F4100] to-[#dc8c18] bg-clip-text text-transparent">
//               Privacy Policy
//             </span>
//           </h1>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-base text-gray-600 mb-3 leading-relaxed">
//               Your privacy is our priority. This policy outlines how we collect, use, and protect your personal information in compliance with Indian regulations including the DPDP Act 2023.
//             </p>
//             <div className="w-16 h-0.5 bg-gradient-to-r from-[#310F0B] to-[#dc8c18] mx-auto rounded-full" />
//           </div>
//         </div>

//         {/* Main Content Grid - reduced gap */}
//         <div className="grid gap-5 lg:grid-cols-2 mb-12">
//           {sections.map((section, idx) => (
//             <Section key={idx} title={section.title} colorIndex={idx}>
//               <ul className="space-y-2">
//                 {section.items.map((item, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <div className="w-4 h-4 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <div className="w-1.5 h-1.5 rounded-full bg-[#dc8c18]" />
//                     </div>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </Section>
//           ))}
//         </div>

//         {/* Contact Section - reduced padding */}
//         <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md mb-12">
//           <div className="max-w-2xl mx-auto">
//             <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#310F0B]/10 to-[#dc8c18]/10 flex items-center justify-center text-xl">
//               🔒
//             </div>
//             <h3 className="text-2xl font-bold text-[#310F0B] mb-2">
//               Data Protection Office
//             </h3>
//             <p className="text-gray-600 mb-6 text-base leading-relaxed">
//               Our dedicated Data Protection Officer ensures compliance and addresses your privacy concerns promptly.
//             </p>
//             <div className="grid md:grid-cols-2 gap-4 mb-6">
//               <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
//                 <div className="text-xs text-gray-500 mb-1">Email</div>
//                 <a href="mailto:privacy@kvalogistics.com" className="text-base font-semibold text-[#310F0B] hover:text-[#dc8c18] transition-colors break-all">
//                   privacy@kvalogistics.com
//                 </a>
//               </div>
//               <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
//                 <div className="text-xs text-gray-500 mb-1">Phone</div>
//                 <div className="text-base font-semibold text-[#310F0B]">
//                   +316872022074
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#310F0B] to-[#9F4100] px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-md hover:scale-[1.02] transition-all"
//               >
//                 Contact Privacy Team
//                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </a>
//               <a
//                 href="/data-request"
//                 className="inline-flex items-center justify-center rounded-lg border border-[#310F0B]/20 bg-white px-6 py-3 text-sm font-semibold text-[#310F0B] hover:border-[#dc8c18] hover:bg-[#dc8c18]/5 transition-all"
//               >
//                 Submit Data Request
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer - reduced padding */}
//         <div className="pt-8 border-t border-gray-200">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//             <div className="text-left">
//               <div className="text-xl font-bold text-[#310F0B] mb-1">KVA Logistics</div>
//               <p>Registered Office: Mumbai, Maharashtra, India</p>
//             </div>
//             <div className="text-center">
//               <p className="font-semibold text-[#310F0B]">Version 2.1 • Effective Feb 2, 2026</p>
//               <p>Reviewed annually</p>
//             </div>
//             <div className="text-right">
//               <p>© 2026 KVA Logistics Pvt. Ltd.</p>
//               <p>GSTIN: 27AAECK1234M1Z5</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }