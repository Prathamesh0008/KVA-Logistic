import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KVA- Logistics & Shipping Solutions',
  description: 'Global logistics and shipping services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen ">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}