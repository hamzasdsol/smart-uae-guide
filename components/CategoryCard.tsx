import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface CategoryCardProps {
  cat: {
    slug: string;
    name: string;
    blurb: string;
    description?: string;
    icon?: string;
    color?: string;
  };
}

export default function CategoryCard({ cat }: CategoryCardProps) {
  const IconComponent = cat.icon ? (LucideIcons[cat.icon as keyof typeof LucideIcons] as React.ComponentType<LucideIcons.LucideProps>) : null;

  return (
    <Link
      href={`/category/${cat.slug}`}
      className="group block pt-8 pb-6 px-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:shadow-[var(--hover-shadow)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
    >
      <div className="flex items-start gap-4">
        {IconComponent && (
          <div className="flex-shrink-0 transition-transform group-hover:scale-110" style={{ color: cat.color || 'var(--accent-primary)' }}>
            <IconComponent size={32} strokeWidth={1.5} />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-[var(--blog-heading)] group-hover:text-[var(--accent-primary)] transition-colors">
            {cat.name}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {cat.blurb}
          </p>
        </div>
      </div>
    </Link>
  );
}
