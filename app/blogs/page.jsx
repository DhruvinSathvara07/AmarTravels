import Hero from "@/components/Hero";
import { blogHeroData, latestBlogsData } from "@/data/blogData";
import ArticleSection from "@/components/ArticleSection";
import CTASection from "@/components/CTASection";
import DynamicSEOContent from "@/components/DynamicSEOContent";
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords, ahmedabadAreas } from "@/data/seoKeywords";

export const metadata = {
  title: "Travel Blogs & Guides | Amar Travels Ahmedabad",
  description: "Read the latest travel stories, destination guides, and tips from Amar Travels. Your ultimate guide for touring Gujarat and booking the best transportation.",
  keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords, ...ahmedabadAreas].join(", "),
  openGraph: {
    title: "Travel Blogs & Guides | Amar Travels",
    description: "Read the latest travel stories, destination guides, and tips from Amar Travels.",
    url: "https://www.amartourstravels.com/blogs",
    siteName: "Amar Travels",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "Amar Travels Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogPage() {
  const seoTitle = "Travel Insights from Ahmedabad's Top Agency";
  const seoParagraphs = [
    "Welcome to the Amar Travels blog, your ultimate resource for everything related to exploring Gujarat and beyond. As the leading tour operators in Ahmedabad, we love sharing our extensive knowledge of local culture, hidden destinations, and essential travel tips. Whether you're researching gujarat tours from Ahmedabad or simply looking for the best places to visit over a long weekend, our articles are crafted to inspire your next great adventure.",
    "Planning logistics can be overwhelming, which is why we also provide practical advice on choosing the right transportation. From understanding the benefits of booking an outstation taxi service to figuring out when you need a tempo traveller on rent in Ahmedabad for large family gatherings, we cover it all. Discover the convenience of our bus booking online systems and learn how our corporate travel services can streamline your business trips. Dive into our latest posts and let us help you travel smarter."
  ];
  
  const seoKeywords = [
    ...ahmedabadLocationKeywords.slice(4, 11), 
    ...travelsHighVolumeKeywords.slice(4, 11)
  ];

  return (
    <main>
      <Hero data={blogHeroData} />
      <ArticleSection blogs={latestBlogsData} />
      <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
      <CTASection />
    </main>
  );
}
