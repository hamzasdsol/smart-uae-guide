import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = [
    {
      slug: "how-much-salary-comfortable-dubai-2025",
      title: "How Much Salary Is Enough to Live Comfortably in Dubai in 2025?",
      excerpt: "Real budget breakdowns for singles, couples, and families. Understand the true cost of living in Dubai with detailed salary requirements."
    },
    {
      slug: "understanding-uae-budget-planning",
      title: "Understanding UAE Budget Planning",
      excerpt: "Master your finances with proven budgeting strategies, tools, and tips tailored for expats and residents in the UAE."
    },
    { slug: "sample-post-2", title: "Best Credit Cards in UAE", excerpt: "Compare top credit cards and rewards programs available in the Emirates." },
    { slug: "sample-post-3", title: "Digital Tools for Expats", excerpt: "Essential apps that make life easier for expats living in the UAE." },
    { slug: "sample-post-4", title: "Amazon.ae vs Noon: Price Comparison", excerpt: "Find out which platform offers the best deals for your shopping needs." },
    { slug: "sample-post-5", title: "Setting Up Your Expat Life", excerpt: "A step-by-step guide to getting started as a new expat in the UAE." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
