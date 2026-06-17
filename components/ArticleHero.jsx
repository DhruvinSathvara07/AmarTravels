import Image from "next/image";

export default function ArticleHero({ blog }) {
  return (
    <div className="flex flex-col mb-6">
      {/* Featured Image */}
      <div className="relative w-full h-[260px] md:h-[420px] mb-10 rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
        <Image
          src={blog.image || "/swiftdzire.png"}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Category */}
      <div className="mb-5">
        <span className="text-[#DC241C] text-[12px] font-[700] tracking-[0.22em] uppercase bg-[#DC241C]/5 py-2 px-4 rounded-full">
          {blog.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-[34px] md:text-[42px] lg:text-[52px] font-[700] text-[#0F172A] tracking-[-0.04em] leading-[1.1]">
        {blog.title}
      </h1>
    </div>
  );
}
