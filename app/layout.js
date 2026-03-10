import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Script from 'next/script'
import localFont from "next/font/local";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KVA - Logistics & Shipping Solutions',
  description: 'Global logistics and shipping services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta
          name="google-site-verification"
          content="yiIgLlx_6xhyvhxuCCM9JDU4bFW4alPievLOI1Y8lmU"
        />

        <meta name="robots" content="index, follow" />

        <Script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MBHVSW73');
          `}
        </Script>

      </head>

      <body className={inter.className}>
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



