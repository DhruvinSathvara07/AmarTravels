import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbData } from "@/data/aboutData";

export default function Breadcrumb({ className = "" }) {
  const { homeText, homeHref, aboutText } = breadcrumbData;

  return (
    <nav className={`text-[13px] tracking-wide ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href={homeHref}
            className="text-[#DC241C] hover:opacity-80 transition-all duration-300 font-medium"
          >
            {homeText}
          </Link>
        </li>
        <li className="text-slate-300 select-none flex items-center justify-center">
          <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </li>
        <li className="text-[#475569] font-normal">{aboutText}</li>
      </ol>
    </nav>
  );
}
