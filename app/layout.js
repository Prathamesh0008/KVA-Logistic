import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KVA- Logistics & Shipping Solutions',
  description: 'Global logistics and shipping services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />

          {/* WhatsApp Floating Button */}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}