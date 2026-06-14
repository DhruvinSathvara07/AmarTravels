import BlogHeader from "./BlogHeader";
import BlogGrid from "./BlogGrid";

export default function BlogSection({ blogs }) {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <BlogHeader />
        <BlogGrid blogs={blogs} />
      </div>
    </section>
  );
}
