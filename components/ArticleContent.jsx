export default function ArticleContent({ content }) {
  if (!content) return null;

  return (
    <div className="text-[17px] leading-[2] text-[#5F6C7B] space-y-8">
      {/* Intro */}
      {content.intro && (
        <p className="mb-10 text-[#334155] text-[18px] font-medium leading-[1.9]">
          {content.intro}
        </p>
      )}

      {/* Sections */}
      {content.sections && content.sections.map((section, index) => (
        <div key={index} className="space-y-5 mt-10">
          <h2 className="text-[26px] md:text-[30px] font-[700] text-[#0F172A] tracking-[-0.03em] mb-4">
            {section.heading}
          </h2>
          <p>{section.paragraph}</p>
        </div>
      ))}

      {/* Conclusion */}
      {content.conclusion && (
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="font-medium text-[#0F172A]">{content.conclusion}</p>
        </div>
      )}
    </div>
  );
}
