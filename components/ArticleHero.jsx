import Image from "next/image";

export default function ArticleHero({ blog }) {
  return (
    <div className="flex flex-col mb-8 items-center text-center">
      {/* Category */}
      <div className="mb-6 mt-4">
        <span className="text-[#DC241C] text-[13px] font-[700] tracking-[0.25em] uppercase bg-[#DC241C]/5 py-2 px-5 rounded-full border border-[#DC241C]/10">
          {blog.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-[38px] md:text-[48px] lg:text-[56px] font-[800] text-[#0F172A] tracking-[-0.04em] leading-[1.15] max-w-[900px] mb-10">
        {blog.title}
      </h1>

      {/* Featured Image */}
      <div className="relative w-full h-[300px] md:h-[500px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
        <Image
          src={blog.image || "/swiftdzire.webp"}
          alt={blog.title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Soft fade overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
