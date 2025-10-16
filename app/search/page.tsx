export const metadata = {
  title: "Search",
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-[calc(100vh-16rem)]">
      <h1 className="text-4xl font-bold mb-8">Search Results</h1>

      {q ? (
        <div>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Searching for: <span className="font-semibold">&quot;{q}&quot;</span>
          </p>

          <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-center">
            <p className="text-[var(--text-secondary)]">
              No results found yet. Search functionality is coming soon.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-center">
          <p className="text-[var(--text-secondary)]">
            Please enter a search query to find guides and articles.
          </p>
        </div>
      )}
    </div>
  );
}
