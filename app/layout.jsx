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
  title: "Amar Travels | Car Rental & Bus Rental in Ahmedabad, Gujarat",
  description: "Amar Travels is Gujarat's leading car rental and bus rental agency. Committed to providing the best, safe, and comfortable journeys with top-rated vehicles and exceptional service across Ahmedabad and Gujarat.",
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ToursTravels & Car,Bus Rental',
    name: 'Amar Travels',
    image: 'https://www.amartourstravels.com/logo.webp',
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
      'https://www.instagram.com/amar_travels_9094/',
      'https://www.instagram.com/amar_travels_9094/'
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


