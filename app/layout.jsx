import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Amar Travels - Premium Travel & Transportation in Gujarat",
  description: "Amar Travels is Gujarat's leading luxury transportation brand. Committed to providing premium, safe, and comfortable journeys with high-end vehicles and exceptional service.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-[#475569] font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


