import Link from "next/link";

interface CategoryCardProps {
  cat: {
    slug: string;
    name: string;
    blurb: string;
  };
}

export default function CategoryCard({ cat }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${cat.slug}`}
      className="block p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:shadow-[var(--hover-shadow)] transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
    >
      <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
      <p className="text-sm text-[var(--text-secondary)]">{cat.blurb}</p>
    </Link>
  );
}
