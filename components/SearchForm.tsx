"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8 md:mb-12">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="search"
          id="mainSearch"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides..."
          className="flex-1 px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2 shadow-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!query.trim()}
        >
          Search
        </button>
      </div>
    </form>
  );
}
