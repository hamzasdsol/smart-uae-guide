import CategoryCard from "@/components/CategoryCard";
import categories from "@/content/categories.json";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Categories | Smart UAE Guide - Browse by Topic",
  description: "Explore comprehensive guides organized by category. From budgeting and finance to housing, transportation, and lifestyle - find everything you need for living in the UAE.",
};

export default function CategoriesPage() {
  const getCategoryPostCount = (slug: string) => {
    return blogPosts.filter((post) => post.category === slug).length;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-[calc(100vh-16rem)]">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--blog-heading)] mb-4">Browse by Category</h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
          Explore our comprehensive guides organized by topic. Whether you're planning your move, managing finances, or settling into UAE life, find everything you need in one place.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const postCount = getCategoryPostCount(cat.slug);
          return (
            <div key={cat.slug} className="relative">
              <CategoryCard cat={cat} />
              {postCount > 0 && (
                <div className="absolute top-3 right-3 bg-[var(--accent-primary)] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  {postCount} {postCount === 1 ? 'guide' : 'guides'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-16 pt-8 border-t border-[var(--blog-border)]">
        <div className="bg-[var(--blog-highlight)] border border-[var(--blog-border)] rounded-lg p-6">
          <h2 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Can't find what you're looking for?</h2>
          <p className="text-[var(--blog-text)] mb-4">
            We're constantly adding new guides and resources. Check back regularly or browse all our content to discover helpful information about living in the UAE.
          </p>
          <div className="flex gap-4">
            <a
              href="/blog"
              className="inline-block px-6 py-2 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              Browse All Guides
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-2 border border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-light)] transition-colors"
            >
              Suggest a Topic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
