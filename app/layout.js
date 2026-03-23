import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";


/* Load Eurostile Font */
const eurostile = localFont({
  src: [
    {
      path: "./fonts/Eurostile.ttf",  // ✅ correct
      weight: "400",
    },
    {
      path: "./fonts/Eurostile.ttf",
      weight: "700",
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
    <html lang="en" className={eurostile.variable}>
      <head>
        <meta name="robots" content="index, follow" />

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
      </head>

      <body className="font-eurostile antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}




// import localFont from "next/font/local";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import Script from "next/script";

// /* Load Snasm Font */
// const eurostile = localFont({
//   src: [
//     {
//       path: ".\fonts\Eurostile.ttf",
//       weight: "400",
//     },        
//     {
//       path: ".\fonts\Eurostile.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-eurostile",
//   display: "swap",
// });

// export const metadata = {
//   metadataBase: new URL("https://www.kvalogistics.nl"),
//   title: "KVA - Logistics & Shipping Solutions",
//   description: "Global logistics and shipping services",
//   alternates: {
//     canonical: "/",
//   },
// };
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//        <html lang="en" className={eurostile.variable}>
//       <body className="font-eurostile">{children}</body>
//     </html>

//         <meta name="robots" content="index, follow" />

//         {/* Google Tag Manager */}
//         <Script id="gtm-script" strategy="afterInteractive">
//           {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];
//           w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
//           var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//           j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//           f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-MBHVSW73');
//           `}
//         </Script>
//       </head>

//       <body className={`${snasm.variable} antialiased font-snasm`}>
        
//         <div className="min-h-screen flex flex-col">
//           <Header />
//           <main className="flex-1">{children}</main>
//           <Footer />
//           <WhatsAppButton />
//         </div>
//       </body>
//     </html>
//   );
// }