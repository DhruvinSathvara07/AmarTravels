"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestBlogsData } from "@/data/homeData";

function BlogCard({ blog }) {
  return (
    <Link href="/blog" className="flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group">
      
      {/* Blog Image */}
      <div className="relative w-full aspect-[5/3] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <span className="text-[11px] text-gray-400 font-medium mb-2">{blog.date}</span>
        
        <h3 className="text-[14px] md:text-[15px] font-bold text-gray-900 leading-snug mb-5 line-clamp-2">
          {blog.title}
        </h3>
        
        {/* Read More Link */}
        <div className="mt-auto flex items-center gap-2 text-[12px] font-bold text-gray-900 group-hover:text-[#DC241C] transition-colors">
          Read More 
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
        </div>
      </div>
      
    </Link>
  );
}

export default function LatestBlogsSection() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-10 gap-4">
          <h2 className="text-2xl md:text-[28px] font-bold text-gray-900">
            Latest From <span className="text-[#DC241C]">Our Blog</span>
          </h2>
          <Link href="/blog" className="text-sm font-bold text-[#DC241C] hover:text-[#b91c18] transition-colors">
            View All Blogs
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {latestBlogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
}
