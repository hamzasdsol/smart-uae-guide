import Link from "next/link";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:shadow-[var(--hover-shadow)] transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
    >
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-[var(--text-secondary)]">{post.excerpt}</p>
    </Link>
  );
}
