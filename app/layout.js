import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KVA - Logistics & Shipping Solutions',
  description: 'Global logistics and shipping services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yiIgLlx_6xhyvhxuCCM9JDU4bFW4alPievLOI1Y8lmU"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MBHVSW73');
          `}
        </Script>

        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P7WDB898K2"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7WDB898K2');
          `}
        </Script>

        {/* Website Schema */}
        <Script id="schema-website" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "kvalogistics",
            "url": "https://www.kvalogistics.nl/"
          }
          `}
        </Script>

        {/* Organization Schema */}
        <Script id="schema-org" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type":"Organization",
            "name":"kvalogistics",
            "url":"https://www.kvalogistics.nl/",
            "logo":"https://www.kvalogistics.nl/logo.png",
            "email":"info@kvalogistics.nl",
            "telephone":"+31684987360",
            "address":{
              "@type":"PostalAddress",
              "streetAddress":"Apendans 5",
              "addressLocality":"The Hague",
              "postalCode":"2511ED",
              "addressCountry":"NL"
            }
          }
          `}
        </Script>

      </head>

      <body className={inter.className}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBHVSW73"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>

      </body>
    </html>
  )
}