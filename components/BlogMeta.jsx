import { Calendar, Clock } from "lucide-react";

export default function BlogMeta({ date, readTime }) {
  return (
    <div className="flex items-center gap-6 text-[13px] text-slate-500">
      <div className="flex items-center gap-2">
        <Calendar className="w-[15px] h-[15px] text-[#DC241C]" strokeWidth={2} />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-[15px] h-[15px] text-[#DC241C]" strokeWidth={2} />
        <span>{readTime}</span>
      </div>
    </div>
  );
}
