import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import { Wallet, TrendingUp, Wrench, ShoppingCart, Plane, BookOpen, DollarSign, Zap, RefreshCw, MapPin, Hotel, Palmtree, Baby, Wifi, Banknote, Shield, HelpCircle, FileText, Database, Users, Award, Clock, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getLatestBlogPosts } from "@/lib/blogData";

export default function HomePage() {
  const latestPosts = getLatestBlogPosts(3);

  const categories = [
    { slug: "budget", label: "Budget & Living", description: "Salary requirements and cost of living in UAE", Icon: Wallet },
    { slug: "finance", label: "Finance & Banking", description: "Credit cards, bank accounts, and investments", Icon: TrendingUp },
    { slug: "technology", label: "Digital Tools", description: "Essential apps and digital services", Icon: Wrench },
    { slug: "comparison", label: "Comparisons & Reviews", description: "Side-by-side comparisons to make smart choices", Icon: ShoppingCart },
    { slug: "guide", label: "Expat Setup Guides", description: "Step-by-step guides for setting up in UAE", Icon: Plane },
    { slug: "lifestyle", label: "Health & Lifestyle", description: "Fitness, wellness, driving, and daily life in UAE", Icon: Shield },
  ];

  const stats = [
    { value: "22+", label: "Comprehensive Guides", Icon: BookOpen },
    { value: "10", label: "Topics Covered", Icon: Database },
    { value: "5K+", label: "Monthly Readers", Icon: Users },
    { value: "100%", label: "Free Content", Icon: Award },
  ];

  const popularTopics = [
    { title: "Salary Guide", slug: "how-much-salary-comfortable-dubai-2025", Icon: DollarSign },
    { title: "Credit Cards", slug: "best-credit-cards-uae-2025", Icon: TrendingUp },
    { title: "Bank Accounts", slug: "uae-banking-guide-newcomers", Icon: Banknote },
    { title: "Driving License", slug: "uae-driving-license-complete-guide-2025", Icon: Shield },
    { title: "Dubai Metro", slug: "dubai-metro-guide-zones-tickets-nol-card", Icon: MapPin },
    { title: "Finding Apartment", slug: "finding-apartment-dubai-rental-guide-2025", Icon: Hotel },
    { title: "Best Schools", slug: "best-international-schools-dubai-2025", Icon: BookOpen },
    { title: "Health Insurance", slug: "uae-health-insurance-complete-guide-2025", Icon: Shield },
  ];

  const faqs = [
    {
      question: "Is Smart UAE Guide really free?",
      answer: "Yes, 100% free. All our guides, tools, and resources are available without any subscription fees or paywalls. We believe essential information should be accessible to everyone."
    },
    {
      question: "How often is the content updated?",
      answer: "We update our guides monthly to reflect the latest changes in costs, regulations, and services in the UAE. Our latest guides are always featured on the homepage."
    },
    {
      question: "Who creates these guides?",
      answer: "Our content is created by expats living in the UAE with firsthand experience. We combine real-world insights with thorough research to provide practical, accurate advice."
    },
    {
      question: "What topics do you cover?",
      answer: "We cover everything expats need: budgeting, banking, credit cards, housing, transportation, education, healthcare, fitness, and digital tools. Check our categories section for the full list."
    }
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
                  href="/categories"
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

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-primary)] border-y border-[var(--border-color)] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.Icon;
              return (
                <div key={index} className="text-center p-6 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl hover:shadow-[var(--hover-shadow)] hover:border-[var(--accent-primary)] transition-all group">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-[var(--accent-primary)] group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">{stat.value}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Guides Section */}
      <section className="py-12 md:py-16 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Guides</h2>
              <p className="text-lg text-[var(--text-secondary)]">Fresh insights to help you navigate UAE life</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-[var(--accent-primary)] font-medium hover:gap-3 transition-all group"
            >
              View All
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-[var(--hover-shadow)] hover:border-[var(--accent-primary)] transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[var(--accent-light)] text-[var(--accent-primary)] rounded-full text-xs font-medium capitalize">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1 text-[var(--accent-primary)] font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              View All Guides
              <ArrowRight className="w-5 h-5" />
            </Link>
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

      {/* Popular Topics Section */}
      <section className="py-12 md:py-16 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Topics</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Quick access to our most visited guides
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularTopics.map((topic, index) => {
              const Icon = topic.Icon;
              return (
                <Link
                  key={index}
                  href={`/blog/${topic.slug}`}
                  className="group flex flex-col items-center justify-center p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:shadow-[var(--hover-shadow)] hover:border-[var(--accent-primary)] transition-all"
                >
                  <Icon className="w-8 h-8 mb-3 text-[var(--accent-primary)] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {topic.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tourism Guide Card */}
      <section className="py-16 md:py-20 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/tourism-guide" className="block">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--border-color)] rounded-xl p-8 md:p-12 hover:shadow-[var(--hover-shadow)] hover:border-[var(--accent-primary)] transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <Palmtree className="w-10 h-10 text-[var(--accent-primary)]" />
                <span className="px-4 py-1 bg-[var(--accent-light)] text-[var(--accent-primary)] rounded-full text-sm font-medium">
                  Tourism Guide
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                Planning to Visit the UAE?
              </h2>

              <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-3xl leading-relaxed">
                Your comprehensive guide to visiting the United Arab Emirates. Everything tourists need to know - visas, transportation, accommodations, attractions, and essential services.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-4 hover:bg-[var(--accent-light)] hover:border-[var(--accent-primary)] transition-all">
                  <FileText className="w-6 h-6 text-[var(--accent-primary)] mb-2" />
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Visa Information</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Transit & tourist visas</p>
                </div>
                <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-4 hover:bg-[var(--accent-light)] hover:border-[var(--accent-primary)] transition-all">
                  <MapPin className="w-6 h-6 text-[var(--accent-primary)] mb-2" />
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Getting Around</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Transport & navigation</p>
                </div>
                <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-4 hover:bg-[var(--accent-light)] hover:border-[var(--accent-primary)] transition-all">
                  <Hotel className="w-6 h-6 text-[var(--accent-primary)] mb-2" />
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Accommodation</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Hotels & stays</p>
                </div>
                <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-4 hover:bg-[var(--accent-light)] hover:border-[var(--accent-primary)] transition-all">
                  <Shield className="w-6 h-6 text-[var(--accent-primary)] mb-2" />
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Safety & Help</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Emergency services</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[var(--accent-primary)] group-hover:gap-4 transition-all">
                <span className="font-semibold text-lg">Explore Complete Tourism Guide</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Everything you need to know about Smart UAE Guide
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-6 hover:shadow-[var(--hover-shadow)] hover:border-[var(--accent-primary)] transition-all">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[var(--text-secondary)] mb-4">Have more questions?</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-medium hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
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
