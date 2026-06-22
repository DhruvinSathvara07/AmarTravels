import { Inter, Poppins, Caveat } from 'next/font/google';
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata = {
  title: "About Us | Amar Travels - Premium Travel & Transportation in Gujarat",
  description: "Amar Travels is Gujarat's leading luxury transportation brand. Committed to providing premium, safe, and comfortable journeys with high-end vehicles and exceptional service.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Amar Travels',
    image: 'https://www.amartourstravels.com/logo.png',
    '@id': 'https://www.amartourstravels.com',
    url: 'https://www.amartourstravels.com',
    telephone: '+919725409908',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ahmedabad',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.022505,
      longitude: 72.571362
    },
    areaServed: {
      '@type': 'City',
      name: 'Ahmedabad'
    },
    priceRange: '₹₹',
    sameAs: [
      'https://www.facebook.com/',
      'https://www.instagram.com/'
    ]
  };

  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#475569] font-sans relative" suppressHydrationWarning>
        <Navbar />
        {children}
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}


