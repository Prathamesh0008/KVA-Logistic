import localFont from "next/font/local";
import "./globals.css";
import LayoutShell from "./components/LayoutShell";
import ScrollToTopOnRefresh from "./components/ScrollToTopOnRefresh";
import Script from "next/script";

/* Load Eurostile Font */
const eurostile = localFont({
  src: [
    {
      path: "./fonts/Eurostile.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-eurostile",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.kvalogistics.nl"),
  title: "KVA - Logistics & Shipping Solutions",
  description: "Global logistics and shipping services",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={eurostile.variable} suppressHydrationWarning>
      <body className="font-eurostile antialiased" suppressHydrationWarning>
        <ScrollToTopOnRefresh />

        {/* Google Tag Manager */}
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

        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}