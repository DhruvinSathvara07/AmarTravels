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
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${poppins.variable} ${caveat.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#475569] font-sans relative" suppressHydrationWarning>
        <Navbar />
        {children}
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}


