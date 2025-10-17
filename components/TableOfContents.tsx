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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6 shadow-sm self-start">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-gray-900 hover:underline text-left text-sm w-full transition-all leading-snug"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
