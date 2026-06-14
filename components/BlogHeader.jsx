export default function BlogHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
      <span className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#DC241C] mb-3">
        LATEST BLOGS
      </span>
      <h2 className="text-3xl md:text-[42px] font-[700] text-[#0F172A] tracking-[-0.03em] leading-[1.1] mb-6">
        Travel Updates &amp; Insights
      </h2>
      <div className="w-[60px] h-[3px] bg-[#DC241C] rounded-full" />
    </div>
  );
}
