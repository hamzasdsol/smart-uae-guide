'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-120px 0px -66% 0px',
        threshold: 0
      }
    );

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

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
              className={`text-left text-sm w-full transition-all leading-snug ${
                activeId === item.id
                  ? 'text-[var(--accent-primary)] font-semibold'
                  : 'text-[var(--blog-text)] hover:text-[var(--blog-heading)] hover:underline'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
