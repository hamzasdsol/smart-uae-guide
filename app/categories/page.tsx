import CategoryCard from "@/components/CategoryCard";
import categories from "@/content/categories.json";

export const metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-[calc(100vh-16rem)]">
      <h1 className="text-4xl font-bold mb-8">All Categories</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} cat={cat} />
        ))}
      </div>
    </div>
  );
}
