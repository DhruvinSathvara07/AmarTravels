import React from 'react';

export default function DynamicSEOContent({ title, paragraphs, keywords }) {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <section className="sr-only">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        {title && <h2 className="text-2xl font-bold text-[#0F172A] mb-4">{title}</h2>}
        <div className="text-sm text-slate-600 leading-relaxed space-y-4">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          {keywords && keywords.length > 0 && (
            <p className="text-xs text-slate-400 mt-6">
              Popular Searches: {keywords.join(', ')}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
