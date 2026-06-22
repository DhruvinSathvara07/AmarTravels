import ArticleHero from "./ArticleHero";
import AuthorMeta from "./AuthorMeta";
import ArticleContent from "./ArticleContent";

export default function Article({ blog }) {
  if (!blog) return null;

  return (
    <article className="w-full max-w-[800px] mx-auto px-6 sm:px-8 py-16 md:py-24">
      <ArticleHero blog={blog} />
      <div className="flex justify-center border-b border-slate-100 pb-8 mb-10">
        <AuthorMeta 
          date={blog.date} 
          readTime={blog.readTime} 
          author={blog.author} 
        />
      </div>
      <ArticleContent content={blog.content} />
    </article>
  );
}
