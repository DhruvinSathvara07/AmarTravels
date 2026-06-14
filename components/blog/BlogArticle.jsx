import BlogDetailsHero from "./BlogDetailsHero";
import BlogAuthorMeta from "./BlogAuthorMeta";
import BlogContent from "./BlogContent";

export default function BlogArticle({ blog }) {
  if (!blog) return null;

  return (
    <article className="w-full">
      <BlogDetailsHero blog={blog} />
      <BlogAuthorMeta 
        date={blog.date} 
        readTime={blog.readTime} 
        author={blog.author} 
      />
      <BlogContent content={blog.content} />
    </article>
  );
}
