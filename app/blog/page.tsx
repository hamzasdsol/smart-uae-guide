import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog | Smart UAE Guide - Tips for Living & Thriving in the UAE",
  description: "Expert guides on UAE living, budgeting, banking, shopping, and essential tools for expats. Practical advice to help you save money and thrive in the Emirates.",
};

export default function BlogPage() {
  // Get all blog posts sorted by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--blog-heading)] mb-4">Blog</h1>
        <p className="text-[var(--blog-text-light)] text-lg max-w-3xl">
          Expert guides and practical tips for living in the UAE. From budgeting and banking to shopping and digital tools—everything you need to thrive in the Emirates.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
