/**
 * Centralized blog configuration
 * All blog posts metadata and configuration in one place
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'finance' | 'lifestyle' | 'technology' | 'guide' | 'comparison';
  readTime: string;
  publishedDate: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-salary-comfortable-dubai-2025",
    title: "How Much Salary Is Enough to Live Comfortably in Dubai in 2025?",
    excerpt: "Real budget breakdowns for singles, couples, and families. Understand the true cost of living in Dubai with detailed salary requirements.",
    category: "finance",
    readTime: "12 min read",
    publishedDate: "2025-01-15",
    author: "Smart UAE Guide"
  },
  {
    slug: "understanding-uae-budget-planning",
    title: "Understanding UAE Budget Planning",
    excerpt: "Master your finances with proven budgeting strategies, tools, and tips tailored for expats and residents in the UAE.",
    category: "finance",
    readTime: "10 min read",
    publishedDate: "2025-01-14",
    author: "Smart UAE Guide"
  },
  {
    slug: "best-credit-cards-uae-2025",
    title: "Best Credit Cards in UAE 2025: Rewards, Cashback & Miles",
    excerpt: "Complete guide to the best credit cards in UAE. Compare rewards programs, cashback offers, and airline miles from top banks.",
    category: "finance",
    readTime: "15 min read",
    publishedDate: "2025-01-20",
    author: "Smart UAE Guide"
  },
  {
    slug: "essential-digital-tools-uae-expats",
    title: "Essential Digital Tools & Apps for UAE Expats in 2025",
    excerpt: "Must-have apps and digital tools that make life easier for expats living in the UAE. From government services to food delivery.",
    category: "technology",
    readTime: "8 min read",
    publishedDate: "2025-01-18",
    author: "Smart UAE Guide"
  },
  {
    slug: "uae-banking-guide-newcomers",
    title: "Complete UAE Banking Guide for Newcomers 2025",
    excerpt: "Everything you need to know about opening a bank account, choosing the right bank, and managing finances in the UAE.",
    category: "guide",
    readTime: "14 min read",
    publishedDate: "2025-01-16",
    author: "Smart UAE Guide"
  },
  {
    slug: "amazon-ae-vs-noon-price-comparison-2025",
    title: "Amazon.ae vs Noon: Which Offers Better Deals in 2025?",
    excerpt: "In-depth price comparison between Amazon.ae and Noon. Find out which platform saves you more money on electronics, groceries, and more.",
    category: "comparison",
    readTime: "11 min read",
    publishedDate: "2025-01-12",
    author: "Smart UAE Guide"
  },
  {
    slug: "complete-expat-setup-guide-uae-2025",
    title: "Complete Expat Setup Guide for UAE 2025: First Steps for Newcomers",
    excerpt: "Essential checklist for expats moving to UAE. Step-by-step guide covering visa, housing, banking, utilities, and everything you need for a smooth transition.",
    category: "guide",
    readTime: "16 min read",
    publishedDate: "2025-01-22",
    author: "Smart UAE Guide"
  },
  {
    slug: "dubai-vs-abu-dhabi-cost-of-living-2025",
    title: "Dubai vs Abu Dhabi Cost of Living 2025: Complete Comparison",
    excerpt: "Detailed cost comparison between Dubai and Abu Dhabi. Housing, transportation, food, entertainment, and quality of life analysis to help you choose.",
    category: "comparison",
    readTime: "13 min read",
    publishedDate: "2025-01-21",
    author: "Smart UAE Guide"
  }
];

/**
 * Get blog post by slug
 */
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

/**
 * Get latest blog posts
 */
export function getLatestBlogPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
}
