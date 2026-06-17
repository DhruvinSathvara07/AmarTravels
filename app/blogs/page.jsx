import Hero from "@/components/Hero";
import { blogHeroData, latestBlogsData } from "@/data/blogData";
import ArticleSection from "@/components/ArticleSection";
import CTASection from "@/components/CTASection";

export default function BlogPage() {
  return (
    <main>
      <Hero data={blogHeroData} />
      <ArticleSection blogs={latestBlogsData} />
      <CTASection />
    </main>
  );
}
