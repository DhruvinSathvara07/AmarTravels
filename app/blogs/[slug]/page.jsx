import { notFound } from "next/navigation";
import { latestBlogsData } from "@/data/blogData";
import Article from "@/components/Article";

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
  };
}

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const blog = latestBlogsData.find((item) => item.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="w-full bg-white">
      <Article blog={blog} />
    </main>
  );
}
