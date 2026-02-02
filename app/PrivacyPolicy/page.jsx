// app/privacy-policy/page.jsx
export const metadata = {
  title: "Privacy Policy | KVA Logistics",
  description: "Privacy policy describing how KVA Logistics collects and uses data."
};

function Section({ title, children, colorIndex }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:border-[#dc8c18]/30">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#310F0B]/10 to-[#dc8c18]/10 flex items-center justify-center">
          <span className="text-xs font-bold text-[#310F0B]">{colorIndex + 1}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#310F0B] tracking-tight">{title}</h2>
      </div>
      
      <div className="space-y-4 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#310F0B] to-[#9F4100] px-6 py-3 text-sm font-semibold text-white mb-8 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            KVA Logistics Privacy Center
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#310F0B] via-[#9F4100] to-[#dc8c18] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Your privacy is our priority. This policy outlines how we collect, use, and protect your personal information in compliance with Indian regulations including the DPDP Act 2023.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#310F0B] to-[#dc8c18] mx-auto rounded-full mt-8" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-24">
          <Section title="Information We Collect" colorIndex={0}>
            <p className="text-gray-600 mb-6 font-medium">
              To provide exceptional logistics services, we collect:
            </p>
            <ul className="space-y-3">
              {[
                "Full name, contact details, and identification",
                "Complete pickup and delivery addresses",
                "Shipment specifications and contents",
                "Secure payment information",
                "Communication and support records",
                "Technical data for service improvement"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#dc8c18]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="How We Use Your Data" colorIndex={1}>
            <p className="text-gray-600 mb-6 font-medium">
              Your information enables us to deliver superior service:
            </p>
            <ul className="space-y-3">
              {[
                "Real-time shipment processing and tracking",
                "Automated delivery updates via multiple channels",
                "Secure payment processing and GST invoicing",
                "Service quality enhancement through analytics",
                "24/7 dedicated customer support",
                "Legal compliance and regulatory requirements"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#dc8c18]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Data Protection & Security" colorIndex={2}>
            <p className="text-gray-600 mb-6 font-medium">
              We implement robust security measures:
            </p>
            <ul className="space-y-3">
              {[
                "256-bit SSL encryption for all data transfers",
                "Secure cloud infrastructure with regular audits",
                "Role-based access control for employees",
                "Regular security assessments and penetration testing",
                "Data anonymization for analytical purposes",
                "Incident response and breach notification protocols"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#dc8c18]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Third-Party Data Sharing" colorIndex={3}>
            <p className="text-gray-600 mb-6 font-medium">
              Data sharing is limited to essential service providers:
            </p>
            <ul className="space-y-3">
              {[
                "Verified delivery partners for shipment execution",
                "Certified payment gateways (PCI DSS compliant)",
                "Customs and regulatory authorities for international shipments",
                "Legal entities when required by Indian law",
                "Analytics providers (with anonymized data only)",
                "Customer support and communication platforms"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#dc8c18]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Your Legal Rights (DPDP Act 2023)" colorIndex={4}>
            <p className="text-gray-600 mb-6 font-medium">
              Under Indian privacy laws, you have the right to:
            </p>
            <ul className="space-y-3">
              {[
                "Access your personal data in a structured format",
                "Request correction of inaccurate information",
                "Complete data erasure (right to be forgotten)",
                "Withdraw consent for data processing",
                "Data portability to other service providers",
                "Lodge complaints with the Data Protection Board"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#dc8c18]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Data Retention Periods" colorIndex={5}>
            <p className="text-gray-600 mb-6 font-medium">
              We retain data only for legitimate business needs:
            </p>
            <ul className="space-y-3">
              {[
                "Active shipment records: 2 years post-delivery",
                "Customer account data: Until account deletion",
                "Financial transaction records: 7 years (Income Tax Act)",
                "Legal compliance documents: As per statutory requirements",
                "Marketing consent records: Until withdrawal",
                "Inactive customer data: Auto-deleted after 24 months"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#310F0B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#dc8c18]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Contact Section */}
        <div className="rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-xl mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#310F0B]/10 to-[#dc8c18]/10 flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            
            <h3 className="text-3xl font-bold text-[#310F0B] mb-4">
              Data Protection Office
            </h3>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our dedicated Data Protection Officer ensures compliance and addresses your privacy concerns promptly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">Email</div>
                <a href="mailto:privacy@kvalogistics.com" className="text-lg font-semibold text-[#310F0B] hover:text-[#dc8c18] transition-colors">
                  privacy@kvalogistics.com
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">Phone</div>
                <div className="text-lg font-semibold text-[#310F0B]">
                  +316872022074
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#310F0B] to-[#9F4100] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Contact Privacy Team
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/data-request"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#310F0B]/20 bg-white px-8 py-4 text-base font-semibold text-[#310F0B] hover:border-[#dc8c18] hover:bg-[#dc8c18]/5 transition-all duration-300"
              >
                Submit Data Request
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <div className="text-3xl font-bold text-[#310F0B] mb-2">KVA Logistics</div>
              <p className="text-sm text-gray-500">
                Registered Office: Mumbai, Maharashtra, India
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-[#310F0B] mb-1">
                Version 2.1 • Effective February 2, 2026
              </p>
              <p className="text-sm text-gray-500">
                This policy is reviewed and updated annually
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-500">
                © 2026 KVA Logistics Pvt. Ltd.
              </p>
              <p className="text-sm text-gray-500">
                All rights reserved. GSTIN: 27AAECK1234M1Z5
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}