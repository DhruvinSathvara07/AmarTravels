import { notFound } from "next/navigation";
import { latestBlogsData } from "@/data/blogData";
import Article from "@/components/Article";
import DynamicSEOContent from "@/components/DynamicSEOContent";
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords } from "@/data/seoKeywords";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = latestBlogsData.find((item) => item.slug === resolvedParams.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Amar Travels",
    };
  }

  return {
    title: `${blog.title} | Amar Travels`,
    description: blog.description,
    keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords].join(", "),
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.amartourstravels.com/blogs/${blog.slug}`,
      siteName: "Amar Travels",
      images: [
        {
          url: blog.image || "/herosection.png",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const blog = latestBlogsData.find((item) => item.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const seoTitle = `More Travel Tips from Amar Travels`;
  const seoParagraphs = [
    `Thanks for reading our insights on "${blog.title}". At Amar Travels, we are committed to providing you with the best travel experiences across Gujarat. Whether you are looking for outstation cabs from Ahmedabad or need a reliable tempo traveller on rent in Ahmedabad for your next road trip, our premium fleet is ready for you.`,
    `We hope this article helps you plan your next journey. Don't forget that as the leading tour operators in Ahmedabad, we offer customized holiday packages, corporate travel services, and wedding car rental in Ahmedabad tailored to your specific needs. Keep following our blog for more updates and travel guides.`
  ];
  
  const startIndex = (blog.id * 3) % ahmedabadLocationKeywords.length;
  const seoKeywords = [
    ...ahmedabadLocationKeywords.slice(startIndex, startIndex + 6),
    ...travelsHighVolumeKeywords.slice(startIndex, startIndex + 6)
  ];

  return (
    <main className="w-full bg-white">
      <Article blog={blog} />
      <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
    </main>
  );
}
