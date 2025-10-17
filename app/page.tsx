import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import { Wallet, TrendingUp, Wrench, ShoppingCart, Plane, BookOpen, DollarSign, Zap, RefreshCw } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  const categories = [
    { slug: "budget", label: "Budget & Living", description: "Smart budgeting strategies for UAE life", Icon: Wallet },
    { slug: "finance", label: "Finance Tools", description: "Banking, investments, and money management", Icon: TrendingUp },
    { slug: "tools", label: "Digital Tools", description: "Apps and services that work in UAE", Icon: Wrench },
    { slug: "shopping", label: "Smart Shopping", description: "Best deals and price comparisons", Icon: ShoppingCart },
    { slug: "expat", label: "Expat Setup", description: "Everything to start your UAE journey", Icon: Plane },
  ];

  const features = [
    {
      title: "Practical Guides",
      description: "Real-world advice from expats who've been there, done that.",
      Icon: BookOpen
    },
    {
      title: "Money Matters",
      description: "Salary breakdowns, cost of living, and how to save smart.",
      Icon: DollarSign
    },
    {
      title: "Tool Reviews",
      description: "Find apps and services that actually work in the UAE.",
      Icon: Zap
    },
    {
      title: "Always Updated",
      description: "Fresh content that reflects current UAE realities.",
      Icon: RefreshCw
    }
  ];

  const highlights = [
    {
      title: "Honest Advice",
      description: "Real experiences from expats living in UAE",
      icon: "✓"
    },
    {
      title: "Always Free",
      description: "No paywalls, no subscriptions",
      icon: "✓"
    },
    {
      title: "Constantly Growing",
      description: "New guides added regularly",
      icon: "✓"
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-primary)] border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-sm font-medium mb-4">
                🇦🇪 Your UAE Living Companion
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Smart Living in the <span className="text-[var(--text-primary)]">UAE</span> Made Simple
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Practical guides, money tips, and tools for expats navigating life in the Emirates. No fluff, just real advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/categories"
                  className="px-8 py-4 bg-[var(--accent-primary)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
                >
                  Explore Guides
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-[var(--bg-card)] border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg font-medium hover:bg-[var(--accent-light)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-[var(--border-color)] shadow-xl">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={`${SITE_CONFIG.name} Logo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-b border-[var(--border-color)] bg-gradient-to-r from-primary-50 to-amber-50/30">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-stone-200 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900 mb-1">{highlight.title}</h3>
                  <p className="text-sm text-stone-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-[var(--bg-primary)] py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Find What You Need</h2>
          <p className="text-center text-[var(--text-secondary)] mb-6">Search our guides or browse by category</p>
          <SearchForm />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive into guides tailored to your needs, from budgeting to finding the best tools
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.Icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="group p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:shadow-[var(--hover-shadow)] hover:border-[var(--accent-primary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
                >
                  <Icon className="w-12 h-12 mb-4 text-[var(--accent-primary)] group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{cat.label}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{cat.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[var(--bg-card)] border-y border-[var(--border-color)] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why SmartUAE?</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              We cut through the noise to give you actionable insights
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div key={index} className="text-center p-6">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[var(--accent-primary)]" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Master UAE Living?
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Get practical, no-nonsense advice on living smart in the Emirates. Built by expats, for expats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories"
              className="px-8 py-4 bg-[var(--accent-primary)] text-white rounded-lg font-medium text-lg hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
            >
              Start Exploring
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-[var(--bg-card)] border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg font-medium text-lg hover:bg-[var(--accent-light)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
            >
              Read Latest Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
