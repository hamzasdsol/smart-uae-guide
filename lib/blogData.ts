/**
 * Centralized blog configuration
 * All blog posts metadata and configuration in one place
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'finance' | 'lifestyle' | 'technology' | 'guide' | 'comparison' | 'budget' | 'housing' | 'transportation' | 'education' | 'health';
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
  },
  {
    slug: "uae-driving-license-complete-guide-2025",
    title: "UAE Driving License Guide 2025: Complete Process for Expats",
    excerpt: "Step-by-step guide to getting your UAE driving license. Transfer procedures, costs, RTA requirements, and driving test tips for all emirates.",
    category: "transportation",
    readTime: "12 min read",
    publishedDate: "2025-01-19",
    author: "Smart UAE Guide"
  },
  {
    slug: "dubai-metro-guide-zones-tickets-nol-card",
    title: "Dubai Metro Guide: Zones, Tickets, NOL Card & Route Planning",
    excerpt: "Complete guide to using Dubai Metro. Understand zones, ticket types, NOL card benefits, and how to navigate the Red and Green lines efficiently.",
    category: "transportation",
    readTime: "9 min read",
    publishedDate: "2025-01-17",
    author: "Smart UAE Guide"
  },
  {
    slug: "best-international-schools-dubai-2025",
    title: "Best International Schools in Dubai 2025: Fees, Curriculum & Reviews",
    excerpt: "Comprehensive guide to Dubai's top international schools. Compare British, American, and IB curricula with detailed fee structures and admission processes.",
    category: "education",
    readTime: "14 min read",
    publishedDate: "2025-01-23",
    author: "Smart UAE Guide"
  },
  {
    slug: "uae-school-admission-process-guide",
    title: "UAE School Admission Process: Complete Guide for Expat Parents",
    excerpt: "Navigate the school admission process in UAE. Documents required, application timelines, waiting lists, and tips for securing your preferred school.",
    category: "education",
    readTime: "11 min read",
    publishedDate: "2025-01-11",
    author: "Smart UAE Guide"
  },
  {
    slug: "finding-apartment-dubai-rental-guide-2025",
    title: "Finding an Apartment in Dubai: Complete Rental Guide 2025",
    excerpt: "Expert guide to renting in Dubai. Popular neighborhoods, rental costs, negotiation strategies, Ejari registration, and tenant rights explained.",
    category: "housing",
    readTime: "15 min read",
    publishedDate: "2025-01-24",
    author: "Smart UAE Guide"
  },
  {
    slug: "dubai-neighborhoods-comparison-where-to-live",
    title: "Dubai Neighborhoods Comparison: Where to Live Based on Your Lifestyle",
    excerpt: "Compare Dubai's top neighborhoods. Marina, Downtown, JBR, Arabian Ranches, JVC, and more - find the perfect area for your family and budget.",
    category: "housing",
    readTime: "13 min read",
    publishedDate: "2025-01-13",
    author: "Smart UAE Guide"
  },
  {
    slug: "uae-health-insurance-complete-guide-2025",
    title: "UAE Health Insurance Complete Guide 2025: Mandatory Coverage Explained",
    excerpt: "Everything about UAE health insurance. Mandatory requirements, insurance providers comparison, coverage options, and how to choose the right plan.",
    category: "health",
    readTime: "12 min read",
    publishedDate: "2025-01-25",
    author: "Smart UAE Guide"
  },
  {
    slug: "best-hospitals-clinics-dubai-abu-dhabi",
    title: "Best Hospitals & Clinics in Dubai and Abu Dhabi 2025",
    excerpt: "Comprehensive guide to UAE's top hospitals and clinics. Compare government and private facilities, specialties, insurance acceptance, and patient reviews.",
    category: "health",
    readTime: "10 min read",
    publishedDate: "2025-01-10",
    author: "Smart UAE Guide"
  },
  {
    slug: "monthly-budget-breakdown-dubai-family-2025",
    title: "Monthly Budget Breakdown for Families in Dubai 2025",
    excerpt: "Real expense breakdown for families living in Dubai. Housing, education, groceries, utilities, and entertainment - plan your family budget effectively.",
    category: "budget",
    readTime: "11 min read",
    publishedDate: "2025-01-26",
    author: "Smart UAE Guide"
  },
  {
    slug: "saving-money-uae-tips-strategies-2025",
    title: "20 Proven Ways to Save Money Living in UAE 2025",
    excerpt: "Practical money-saving strategies for UAE residents. From groceries and dining to entertainment and utilities - reduce expenses without sacrificing quality of life.",
    category: "budget",
    readTime: "9 min read",
    publishedDate: "2025-01-09",
    author: "Smart UAE Guide"
  },
  {
    slug: "dubai-weekend-activities-guide-2025",
    title: "Dubai Weekend Activities Guide 2025: Things to Do for Every Budget",
    excerpt: "Discover the best weekend activities in Dubai. Free events, family-friendly attractions, beach clubs, desert trips, and cultural experiences.",
    category: "lifestyle",
    readTime: "10 min read",
    publishedDate: "2025-01-27",
    author: "Smart UAE Guide"
  },
  {
    slug: "uae-dining-guide-best-restaurants-cafes",
    title: "UAE Dining Guide: Best Restaurants, Cafes & Food Delivery Apps",
    excerpt: "Complete guide to dining in UAE. Top restaurants across cuisines, best cafes, food delivery apps comparison, and tips for dining out on a budget.",
    category: "lifestyle",
    readTime: "12 min read",
    publishedDate: "2025-10-18",
    author: "Smart UAE Guide"
  },
  {
    slug: "buying-car-uae-vs-leasing-complete-guide",
    title: "Buying vs Leasing a Car in UAE: Complete Cost Comparison 2025",
    excerpt: "Should you buy or lease a car in UAE? Detailed comparison of costs, benefits, insurance, maintenance, and depreciation to help you decide.",
    category: "transportation",
    readTime: "13 min read",
    publishedDate: "2025-10-18",
    author: "Smart UAE Guide"
  },
  {
    slug: "uae-fitness-gyms-guide-memberships-2025",
    title: "UAE Fitness & Gyms Guide 2025: Memberships, Classes & Personal Training",
    excerpt: "Find the perfect gym in UAE. Compare fitness First, GymNation, Gold's Gym, and boutique studios with membership costs and facilities.",
    category: "lifestyle",
    readTime: "8 min read",
    publishedDate: "2025-10-18",
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
