import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://digitelixx.com'),
  title: "Digitelixx — Digital Marketing & Software Development Agency",
  description: "Digitelixx is Mumbai's premier digital marketing and software development agency. We craft strategies, ship products, and grow brands that click.",
  icons: {
    icon: '/Images/Best Digital Marketing Company in Mumbai.png',
    shortcut: '/Images/Best Digital Marketing Company in Mumbai.png',
    apple: '/Images/Best Digital Marketing Company in Mumbai.png',
  },
  openGraph: {
    title: 'Digitelixx — Digital Marketing & Software Development Agency',
    description: "Digitelixx is Mumbai's premier digital marketing and software development agency. We craft strategies, ship products, and grow brands that click.",
    url: 'https://digitelixx.com',
    siteName: 'Digitelixx',
    images: [
      {
        url: '/Images/Best Digital Marketing Company in Mumbai.png',
        width: 800,
        height: 600,
        alt: 'Digitelixx Agency Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitelixx — Digital Marketing & Software Development Agency',
    description: "Digitelixx is Mumbai's premier digital marketing and software development agency. We craft strategies, ship products, and grow brands that click.",
    images: ['/Images/Best Digital Marketing Company in Mumbai.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Digitelixx",
  "image": "https://digitelixx.com/Images/Best%20Digital%20Marketing%20Company%20in%20Mumbai.png",
  "@id": "https://digitelixx.com",
  "url": "https://digitelixx.com",
  "telephone": "+917304759661",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mumbai",
    "addressLocality": "Mumbai",
    "postalCode": "400097",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1843,
    "longitude": 72.8428
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
