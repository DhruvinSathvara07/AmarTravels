import BlogArticle from "./BlogArticle";
import BlogSidebarCTA from "./BlogSidebarCTA";

export default function BlogLayout({ blog }) {
  if (!blog) return null;

  return (
    <section className="bg-white w-full py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Content */}
          <div className="lg:col-span-8">
            <BlogArticle blog={blog} />
          </div>

          {/* Right Sidebar CTA */}
          <div className="lg:col-span-4 relative">
            <BlogSidebarCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
