import { Calendar, Clock, User } from "lucide-react";

export default function AuthorMeta({ date, readTime, author }) {
  return (
    <div className="flex flex-wrap items-center gap-6 mt-6 mb-10 text-[14px] font-medium">
      <div className="flex items-center gap-2">
        <Calendar className="w-[18px] h-[18px] text-[#DC241C]" />
        <span className="text-slate-500">{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-[18px] h-[18px] text-[#DC241C]" />
        <span className="text-slate-500">{readTime}</span>
      </div>
      <div className="flex items-center gap-2">
        <User className="w-[18px] h-[18px] text-[#DC241C]" />
        <span className="text-slate-500">{author}</span>
      </div>
    </div>
  );
}
