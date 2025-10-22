"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState, useEffect, useRef } from "react";
import Link from "next/link";

// Search data - all searchable content
const searchData = [
  // Tourism Guide
  { title: "Visa Information", description: "Transit visas, tourist visas, and visa-free entry", url: "/tourism-guide", category: "Tourism" },
  { title: "Getting to the UAE", description: "Airports, sea ports, and land borders", url: "/tourism-guide", category: "Tourism" },
  { title: "Where to Stay", description: "Hotels, apartments, and accommodation options", url: "/tourism-guide", category: "Tourism" },
  { title: "Popular Activities", description: "Attractions, desert safaris, and experiences", url: "/tourism-guide", category: "Tourism" },
  { title: "Family Facilities", description: "Baby care, kids clubs, and family-friendly services", url: "/tourism-guide", category: "Tourism" },
  { title: "Airport Services", description: "Fast track, lounges, and duty-free shopping", url: "/tourism-guide", category: "Tourism" },
  { title: "Mobile & Internet", description: "Tourist SIM cards, WiFi, and connectivity", url: "/tourism-guide", category: "Tourism" },
  { title: "Currency & Money", description: "Dirham, exchange rates, and VAT refunds", url: "/tourism-guide", category: "Tourism" },
  { title: "Emergency & Safety", description: "Police, ambulance, and emergency contacts", url: "/tourism-guide", category: "Tourism" },
  { title: "FAQs & Travel Tips", description: "Best time to visit, dress code, and local customs", url: "/tourism-guide", category: "Tourism" },

  // Categories
  { title: "Budget & Living", description: "Smart budgeting strategies for UAE life", url: "/categories", category: "Category" },
  { title: "Finance Tools", description: "Banking, investments, and money management", url: "/categories", category: "Category" },
  { title: "Digital Tools", description: "Apps and services that work in UAE", url: "/categories", category: "Category" },
  { title: "Comparisons", description: "Side-by-side comparisons to make smart choices", url: "/categories", category: "Category" },
  { title: "Expat Setup", description: "Everything to start your UAE journey", url: "/categories", category: "Category" },
  { title: "Transportation", description: "Metro, driving license, buying cars", url: "/categories", category: "Category" },
  { title: "Education & Schools", description: "International schools and admission process", url: "/categories", category: "Category" },
  { title: "Housing & Real Estate", description: "Finding apartments and neighborhoods", url: "/categories", category: "Category" },
  { title: "Healthcare", description: "Health insurance, hospitals and clinics", url: "/categories", category: "Category" },
  { title: "Lifestyle", description: "Weekend activities, dining, and fitness", url: "/categories", category: "Category" },

  // Blog posts
  { title: "Blog Articles", description: "Latest guides and practical advice", url: "/blog", category: "Blog" },
  { title: "Driving License Guide", description: "Complete UAE driving license process", url: "/blog", category: "Blog" },
  { title: "International Schools", description: "Best schools in Dubai with fees", url: "/blog", category: "Blog" },
  { title: "Finding Apartments", description: "Dubai rental guide and neighborhoods", url: "/blog", category: "Blog" },
  { title: "Health Insurance", description: "UAE mandatory health coverage explained", url: "/blog", category: "Blog" },
  { title: "Money Saving Tips", description: "20 ways to save money in UAE", url: "/blog", category: "Blog" },
];

export default function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<typeof searchData>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter results when query changes
  useEffect(() => {
    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase();
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
      );
      setFilteredResults(filtered);
      setShowResults(true);
    } else {
      setFilteredResults([]);
      setShowResults(false);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      setShowResults(false);
    }
  };

  const handleResultClick = () => {
    setShowResults(false);
    setQuery("");
  };

  return (
    <div ref={searchRef} className="max-w-2xl mx-auto mb-8 md:mb-12 relative">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="search"
              id="mainSearch"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query.trim().length > 0 && setShowResults(true)}
              placeholder="Search guides, visa info, activities..."
              className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:border-transparent"
              autoComplete="off"
            />

            {/* Search Results Dropdown */}
            {showResults && filteredResults.length > 0 && (
              <div className="absolute z-50 w-full mt-2 bg-white border border-[var(--border-color)] rounded-lg shadow-lg max-h-96 overflow-y-auto">
                {filteredResults.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    onClick={handleResultClick}
                    className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">{result.title}</div>
                        <div className="text-sm text-gray-600">{result.description}</div>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full whitespace-nowrap">
                        {result.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* No Results Message */}
            {showResults && query.trim().length > 0 && filteredResults.length === 0 && (
              <div className="absolute z-50 w-full mt-2 bg-white border border-[var(--border-color)] rounded-lg shadow-lg p-4">
                <p className="text-gray-600 text-sm">No results found for &quot;{query}&quot;</p>
                <p className="text-gray-500 text-xs mt-1">Try searching for visa, activities, accommodation, or money</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2 shadow-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!query.trim()}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
