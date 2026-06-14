"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogMeta from "./BlogMeta";

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <Link 
      href={`/blogs/${blog.slug || blog.id || 1}`}
      className="group bg-white rounded-[28px] overflow-hidden border border-[#EAEAEA] hover:border-[#DC241C]/20 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col h-full block"
    >
      {/* Image Area */}
      <div className="relative w-full h-[240px] overflow-hidden rounded-t-[28px]">
        <Image
          src={blog.image || "/vehicle1.png"}
          alt={blog.title || "Blog Image"}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="inline-block bg-[#DC241C]/10 text-[#DC241C] rounded-full px-4 py-2 text-[11px] uppercase font-semibold">
            {blog.category || "Travel"}
          </span>
        </div>

        <h3 className="text-[24px] sm:text-[28px] font-[700] text-[#0F172A] leading-[1.3] tracking-tight mb-4 line-clamp-2">
          {blog.title || "Travel Blog Title"}
        </h3>

        <p className="text-[15px] leading-[1.9] text-[#5F6C7B] mb-6 line-clamp-3 flex-grow">
          {blog.description || "Blog description goes here. This is a short summary of the blog post content."}
        </p>

        <BlogMeta date={blog.date || "Today"} readTime={blog.readTime || "5 min read"} />

        <div className="mt-6 pt-6 border-t border-slate-100">
          <span className="inline-flex items-center text-[#DC241C] font-medium text-[15px] group/btn">
            Read More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </span>
        </div>
      </div>
    </Link>
  );
}
