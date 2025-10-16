import Link from "next/link";
import categories from "@/content/categories.json";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.name,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const samplePosts = [
    { slug: "sample-post-1", title: `Sample ${category.name} Post 1` },
    { slug: "sample-post-2", title: `Sample ${category.name} Post 2` },
    { slug: "sample-post-3", title: `Sample ${category.name} Post 3` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
      <p className="text-lg text-[var(--text-secondary)] mb-8">{category.blurb}</p>

      <h2 className="text-2xl font-bold mb-6">Posts in this category</h2>
      <div className="space-y-4">
        {samplePosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:shadow-[var(--hover-shadow)] transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}
