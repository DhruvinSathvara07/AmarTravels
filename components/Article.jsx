import ArticleHero from "./ArticleHero";
import AuthorMeta from "./AuthorMeta";
import ArticleContent from "./ArticleContent";

export default function Article({ blog }) {
  if (!blog) return null;

  return (
    <article className="w-full">
      <ArticleHero blog={blog} />
      <AuthorMeta 
        date={blog.date} 
        readTime={blog.readTime} 
        author={blog.author} 
      />
      <ArticleContent content={blog.content} />
    </article>
  );
}
