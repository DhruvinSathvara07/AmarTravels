import { Inter, Poppins, Caveat } from 'next/font/google';
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import Script from 'next/script';

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
  metadataBase: new URL('https://www.amartourstravels.com'),
  title: {
    default: "Amar Travels | Car Rental & Bus Rental in Ahmedabad, Gujarat",
    template: "%s | Amar Travels",
  },
  description: "Amar Travels is Gujarat's leading car rental and bus rental agency. Committed to providing the best, safe, and comfortable journeys with top-rated vehicles and exceptional service across Ahmedabad and Gujarat.",
  keywords: [
    // Brand Keywords
    "Amar Travels",
    "Amar Tours Travels",
    "Amar Travels Ahmedabad",

    // Local Car & Bus Rental
    "Car Rental Ahmedabad",
    "Bus Rental Ahmedabad",
    "Car Rental Gujarat",
    "Bus Rental Gujarat",
    "Taxi Service Ahmedabad",
    "Outstation Cab Service Ahmedabad",
    "Luxury Car Rental Ahmedabad",
    "Corporate Car Rental Ahmedabad",
    "Wedding Car Rental Gujarat",
    "Ahmedabad Airport Taxi Service",
    "Intercity Cab Service Gujarat",

    // Specific Vehicles on Rent
    "Swift Dzire on Rent Ahmedabad",
    "Ertiga SUV on Rent Ahmedabad",
    "Innova Crysta on Rent Ahmedabad",
    "Kia Carens on Rent Ahmedabad",
    "Tufan Cruiser 13 Seater Rent",
    "Tempo Traveller on Rent Ahmedabad",
    "Tempo Traveller 12 to 20 Seater Rent",
    "Urbania Premium 16 Seater Rent",
    "Mini Bus on Rent Ahmedabad",
    "30 Seater AC Bus on Rent",
    "56 Seater Luxury Bus on Rent",
    "Volvo Bus on Rent Ahmedabad",
    "Sleeper Bus on Rent Gujarat",

    // Tours & Travels (Local & India)
    "Travel Agency Ahmedabad",
    "Best Travel Agency in Ahmedabad",
    "Tours and Travels Ahmedabad",
    "Top Tours and Travels in Gujarat",
    "Tour Operator Gujarat",
    "Tours and Travels Gujarat",
    "All India Tour Packages from Ahmedabad",
    "India Tours and Travels",
    "Travel Agent for Domestic Tours India",
    "Best Car Rental Service in India",
    "Reliable Taxi Service in Gujarat",

    // Specific Tour Packages
    "Tour package ahmedabad",
    "Holiday Packages India",
    "Family Tour Packages from Ahmedabad",
    "Group Tour Booking Ahmedabad",
    "Gujarat Darshan Tour",
    "Statue of Unity Tour Package",
    "Somnath Dwarka Tour Package",
    "Chardham Yatra Package from Ahmedabad",
    "Rajasthan Tour Package from Gujarat",
    "Goa Tour Package from Ahmedabad",
    "Kullu Manali Tour Package from Ahmedabad",

    // Regional/Gujarati Search Terms
    "Car bhade joi e che",
    "Bus bhade joi e che",
    "Gadi bhade joi e che ahmedabad",
    "Tempo traveller bhade joi e che",
    "Luxury bus bhade mali rese"
  ],
  authors: [{ name: "Amar Travels" }],
  creator: "Amar Travels",
  publisher: "Amar Travels",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.amartourstravels.com',
    siteName: 'Amar Travels',
    title: "Amar Travels | Car Rental & Bus Rental in Ahmedabad, Gujarat",
    description: "Amar Travels is Gujarat's leading car rental and bus rental agency. Committed to providing the best, safe, and comfortable journeys with top-rated vehicles and exceptional service across Ahmedabad and Gujarat.",
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Amar Travels Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amar Travels | Car Rental & Bus Rental in Ahmedabad, Gujarat",
    description: "Amar Travels is Gujarat's leading car rental and bus rental agency. Committed to providing the best, safe, and comfortable journeys with top-rated vehicles and exceptional service across Ahmedabad and Gujarat.",
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "dNt_hIo__of2nbzBhnvd-khxGs9eV2P_l_uPfZum8pQ",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PHHLFRRP');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6BR7PFEZXV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6BR7PFEZXV');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#475569] font-sans relative" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHHLFRRP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        {children}
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}


