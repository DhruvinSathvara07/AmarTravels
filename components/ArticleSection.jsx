import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ArticleHeader from "./ArticleHeader";
import ArticleGrid from "./ArticleGrid";

export default function ArticleSection({ blogs, limit = 0, showExploreButton = false }) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <ArticleHeader />
        <ArticleGrid blogs={blogs} limit={limit} />
        
        {showExploreButton && (
          <div className="mt-12 md:mt-16 flex justify-center">
            <Link 
              href="/blogs"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-dark-heading rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              Explore the Blogs
              <ArrowRight size={18} className="text-[#DC241C] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
