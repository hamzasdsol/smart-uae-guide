'use client';

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-24 bg-[var(--blog-bg-section)] border border-[var(--blog-border)] rounded-lg p-6 shadow-sm self-start">
      <h2 className="text-lg font-semibold text-[var(--blog-heading)] mb-4">Table of Contents</h2>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-[var(--blog-text)] hover:text-[var(--blog-heading)] hover:underline text-left text-sm w-full transition-all leading-snug"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
