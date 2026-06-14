import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function BlogSidebarCTA() {
  return (
    <div className="sticky top-28 space-y-6">
      {/* Card 1 */}
      <div className="bg-white border border-[#EAEAEA] shadow-[0_20px_60px_rgba(15,23,42,0.06)] rounded-[28px] p-8 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
        <h3 className="text-[24px] font-[700] text-[#0F172A] tracking-tight mb-4">
          Ready to Start Your Journey?
        </h3>
        <p className="text-[15px] leading-[1.8] text-[#5F6C7B] mb-8">
          Book your vehicle with Amar Travels and travel in comfort.
        </p>
        <Link 
          href="#book"
          className="inline-flex items-center justify-center w-full bg-[#DC241C] text-white rounded-full py-4 px-6 font-semibold hover:bg-[#b81d17] hover:shadow-[0_8px_20px_rgba(220,36,28,0.3)] transition-all duration-300 group"
        >
          Book Your Ride 
          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-[#EAEAEA] shadow-[0_20px_60px_rgba(15,23,42,0.06)] rounded-[28px] p-8 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
        <h3 className="text-[24px] font-[700] text-[#0F172A] tracking-tight mb-4">
          Need Help?
        </h3>
        <p className="text-[15px] leading-[1.8] text-[#5F6C7B] mb-6">
          Talk to our travel expert for planning your trip.
        </p>
        <div className="flex items-center gap-3 font-[700] text-[18px] text-[#0F172A]">
          <Phone className="w-5 h-5 text-[#DC241C]" />
          <span>+91 98765 43210</span>
        </div>
      </div>
    </div>
  );
}
