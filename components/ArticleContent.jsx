export default function ArticleContent({ content }) {
  if (!content) return null;

  return (
    <div className="text-[18px] leading-[2.2] text-[#475569] space-y-12 pb-10">
      {/* Intro with Drop Cap */}
      {content.intro && (
        <p className="text-[#334155] text-[20px] font-medium leading-[1.9] first-letter:text-[70px] first-letter:font-[800] first-letter:text-[#DC241C] first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] first-letter:leading-[1]">
          {content.intro}
        </p>
      )}

      {/* Elegant Divider */}
      <div className="w-16 h-1 bg-[#DC241C]/20 rounded-full mx-auto my-12" />

      {/* Sections */}
      {content.sections && content.sections.map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-[28px] md:text-[32px] font-[800] text-[#0F172A] tracking-[-0.03em] mb-4">
            {section.heading}
          </h2>
          <p className="text-[18px] font-[400] text-[#475569]">{section.paragraph}</p>
        </div>
      ))}

      {/* Conclusion */}
      {content.conclusion && (
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#DC241C]" />
          <p className="font-semibold text-[#0F172A] text-[19px] italic">"{content.conclusion}"</p>
        </div>
      )}
    </div>
  );
}
