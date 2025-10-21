import Link from "next/link";
import categories from "@/content/categories.json";
import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import * as LucideIcons from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} | Smart UAE Guide`,
    description: category.description || category.blurb,
  };
}

// Category-specific data for tables and statistics
const categoryData: Record<string, any> = {
  budget: {
    stats: [
      { label: "Average Single Budget", value: "AED 5,500 - 8,000/mo" },
      { label: "Average Family Budget", value: "AED 18,000 - 25,000/mo" },
      { label: "Housing (% of income)", value: "30-40%" },
      { label: "Food & Dining", value: "AED 1,500 - 2,500/mo" },
    ],
    breakdown: [
      { category: "Housing", single: "AED 2,500-4,000", family: "AED 8,000-12,000", percentage: "35%" },
      { category: "Transportation", single: "AED 800-1,200", family: "AED 2,000-3,000", percentage: "12%" },
      { category: "Food & Groceries", single: "AED 1,000-1,500", family: "AED 3,000-4,500", percentage: "18%" },
      { category: "Utilities", single: "AED 400-600", family: "AED 800-1,200", percentage: "5%" },
      { category: "Entertainment", single: "AED 500-800", family: "AED 1,500-2,500", percentage: "8%" },
      { category: "Savings", single: "AED 800-1,500", family: "AED 2,500-4,000", percentage: "15%" },
    ],
    salaryBrackets: [
      { bracket: "AED 5,000 - 8,000", lifestyle: "Basic", housing: "Shared accommodation", savings: "10-15%", notes: "Tight budget, limited entertainment" },
      { bracket: "AED 8,000 - 12,000", lifestyle: "Modest", housing: "Studio apartment", savings: "15-20%", notes: "Comfortable for singles, careful spending" },
      { bracket: "AED 12,000 - 18,000", lifestyle: "Comfortable", housing: "1BR apartment", savings: "20-25%", notes: "Good quality of life, some luxuries" },
      { bracket: "AED 18,000 - 25,000", lifestyle: "Good", housing: "2BR apartment", savings: "25-30%", notes: "Very comfortable, regular travel" },
      { bracket: "AED 25,000+", lifestyle: "Excellent", housing: "Premium location", savings: "30%+", notes: "High quality living, frequent luxuries" },
    ],
    groceryCosts: [
      { item: "Milk (1L)", local_supermarket: "AED 6-8", premium: "AED 10-15", monthly_avg: "AED 25-40" },
      { item: "Bread (500g)", local_supermarket: "AED 3-5", premium: "AED 8-12", monthly_avg: "AED 40-60" },
      { item: "Rice (1kg)", local_supermarket: "AED 8-12", premium: "AED 15-25", monthly_avg: "AED 35-50" },
      { item: "Chicken (1kg)", local_supermarket: "AED 18-25", premium: "AED 30-40", monthly_avg: "AED 150-200" },
      { item: "Eggs (12)", local_supermarket: "AED 8-12", premium: "AED 15-20", monthly_avg: "AED 30-50" },
      { item: "Vegetables (avg/kg)", local_supermarket: "AED 5-10", premium: "AED 12-18", monthly_avg: "AED 200-300" },
    ],
    diningCosts: [
      { category: "Fast Food Meal", cost: "AED 25-35", examples: "McDonald's, KFC, Subway", frequency: "Weekly" },
      { category: "Casual Dining", cost: "AED 50-80", examples: "Carluccio's, Chili's, TGI Fridays", frequency: "2-3x/month" },
      { category: "Mid-Range Restaurant", cost: "AED 100-150", examples: "La Petite Maison, Comptoir 102", frequency: "Monthly" },
      { category: "Fine Dining", cost: "AED 250-500", examples: "Zuma, Nusr-Et, Coya", frequency: "Special occasions" },
      { category: "Street Food/Local", cost: "AED 15-30", examples: "Shawarma, Biryani, Manakish", frequency: "Weekly" },
    ],
  },
  finance: {
    stats: [
      { label: "Major Banks", value: "15+ Options" },
      { label: "Avg. Credit Card Fee", value: "AED 0-500/year" },
      { label: "Savings Interest", value: "0.5-2.5% APY" },
      { label: "Min. Salary (Credit Card)", value: "AED 5,000/mo" },
    ],
    comparison: [
      { bank: "Emirates NBD", account_fee: "Free*", min_balance: "AED 3,000", credit_card: "Yes", digital: "Excellent" },
      { bank: "ADCB", account_fee: "Free*", min_balance: "AED 2,500", credit_card: "Yes", digital: "Excellent" },
      { bank: "Mashreq", account_fee: "Free*", min_balance: "AED 3,000", credit_card: "Yes", digital: "Very Good" },
      { bank: "FAB", account_fee: "Free*", min_balance: "AED 4,000", credit_card: "Yes", digital: "Excellent" },
      { bank: "RAK Bank", account_fee: "Free*", min_balance: "AED 5,000", credit_card: "Yes", digital: "Good" },
    ],
    creditCards: [
      { card: "Emirates NBD U By Emaar", type: "Cashback", annual_fee: "AED 99", cashback: "Up to 10%", min_salary: "AED 5,000", benefits: "Emaar points, Cinema discounts" },
      { card: "ADCB Traveller", type: "Miles", annual_fee: "AED 300", cashback: "4 miles/AED", min_salary: "AED 10,000", benefits: "Airport lounge, Travel insurance" },
      { card: "Liv. by Emirates NBD", type: "Lifestyle", annual_fee: "Free", cashback: "1-5%", min_salary: "AED 3,000", benefits: "Digital-first, Instant approval" },
      { card: "Mashreq Platinum", type: "Rewards", annual_fee: "AED 500", cashback: "1 point/AED 3", min_salary: "AED 15,000", benefits: "Lounge access, Concierge" },
      { card: "FAB Platinum Credit", type: "Premium", annual_fee: "AED 400", cashback: "2%", min_salary: "AED 12,000", benefits: "Travel protection, Extended warranty" },
    ],
    savingsOptions: [
      { product: "Regular Savings Account", interest_rate: "0.25-0.5%", min_deposit: "AED 0", liquidity: "Instant", best_for: "Emergency fund" },
      { product: "Fixed Deposit (3 months)", interest_rate: "1.5-2%", min_deposit: "AED 10,000", liquidity: "Locked", best_for: "Short-term goals" },
      { product: "Fixed Deposit (1 year)", interest_rate: "2-2.5%", min_deposit: "AED 10,000", liquidity: "Locked", best_for: "Medium-term savings" },
      { product: "Investment Account", interest_rate: "Variable", min_deposit: "AED 50,000", liquidity: "Varies", best_for: "Long-term wealth" },
      { product: "Islamic Savings", interest_rate: "0.5-1.5%", min_deposit: "AED 0", liquidity: "Varies", best_for: "Sharia-compliant" },
    ],
    accountTypes: [
      { type: "Salary Account", fees: "Free", features: "Salary transfer required, Free ATM, Debit card", ideal_for: "Employed professionals" },
      { type: "Savings Account", fees: "Free - AED 25/mo", features: "Interest bearing, No salary requirement", ideal_for: "General savings" },
      { type: "Current Account", fees: "AED 25-50/mo", features: "Unlimited transactions, Checkbook", ideal_for: "Business owners" },
      { type: "Premium Banking", fees: "Free with AED 100k+", features: "Dedicated RM, Lounge access, Premium cards", ideal_for: "High net worth" },
    ],
  },
  technology: {
    stats: [
      { label: "Essential Apps", value: "20+" },
      { label: "Government Apps", value: "8 Key Apps" },
      { label: "Digital Payment Adoption", value: "92%" },
      { label: "5G Coverage", value: "Nationwide" },
    ],
    apps: [
      { category: "Government", examples: "UAE PASS, MOHRE, DHA", importance: "Critical", cost: "Free" },
      { category: "Banking", examples: "Bank Apps, PayIt, UAE Exchange", importance: "Essential", cost: "Free" },
      { category: "Transportation", examples: "Careem, Uber, RTA Dubai", importance: "Essential", cost: "Free" },
      { category: "Food Delivery", examples: "Talabat, Deliveroo, Noon Food", importance: "High", cost: "Free" },
      { category: "Shopping", examples: "Noon, Amazon.ae, Carrefour", importance: "High", cost: "Free" },
      { category: "Utilities", examples: "DEWA, SEWA, Etisalat/du", importance: "Essential", cost: "Free" },
    ],
    governmentApps: [
      { app: "UAE PASS", purpose: "Digital identity & government services", features: "Login to all govt portals, Digital signatures", rating: "Essential" },
      { app: "MOHRE", purpose: "Labour & employment services", features: "Contract registration, Work permit status", rating: "Essential" },
      { app: "DHA (Dubai Health)", purpose: "Healthcare services", features: "Book appointments, Health records", rating: "Essential" },
      { app: "ICP Smart Services", purpose: "Immigration services", features: "Visa applications, Emirates ID", rating: "Essential" },
      { app: "Dubai Police", purpose: "Police services", features: "Pay fines, Report incidents, Traffic info", rating: "High" },
      { app: "DEWA", purpose: "Utilities management", features: "Pay bills, Track consumption", rating: "Essential" },
    ],
    telecomPlans: [
      { provider: "Etisalat", plan: "Basic Postpaid", monthly: "AED 99", data: "5GB", calls: "Unlimited UAE", international: "300 mins" },
      { provider: "Etisalat", plan: "Premium Postpaid", monthly: "AED 399", data: "Unlimited", calls: "Unlimited UAE", international: "1000 mins" },
      { provider: "du", plan: "Basic Postpaid", monthly: "AED 89", data: "5GB", calls: "Unlimited UAE", international: "250 mins" },
      { provider: "du", plan: "Premium Postpaid", monthly: "AED 369", data: "Unlimited", calls: "Unlimited UAE", international: "1000 mins" },
      { provider: "Virgin Mobile", plan: "Prepaid", monthly: "AED 50-150", data: "Variable", calls: "Pay as you go", international: "Pay per minute" },
    ],
    internetProviders: [
      { provider: "Etisalat", plan: "Basic Home Internet", speed: "50 Mbps", monthly: "AED 299", installation: "AED 199", contract: "12 months" },
      { provider: "Etisalat", plan: "Premium Home Internet", speed: "500 Mbps", monthly: "AED 549", installation: "AED 199", contract: "12 months" },
      { provider: "du", plan: "Basic Home Internet", speed: "50 Mbps", monthly: "AED 279", installation: "AED 99", contract: "12 months" },
      { provider: "du", plan: "Premium Home Internet", speed: "500 Mbps", monthly: "AED 529", installation: "AED 99", contract: "12 months" },
    ],
  },
  comparison: {
    stats: [
      { label: "Dubai vs Abu Dhabi", value: "15-20% Cost Diff" },
      { label: "Amazon vs Noon", value: "5-15% Price Var" },
      { label: "Banks Compared", value: "10+ Options" },
      { label: "Telecom Providers", value: "2 Major (Etisalat, du)" },
    ],
    metrics: [
      { aspect: "Housing Cost", dubai: "Higher", abu_dhabi: "Lower", difference: "-15 to -20%" },
      { aspect: "Transportation", dubai: "Extensive", abu_dhabi: "Good", difference: "More options in Dubai" },
      { aspect: "Lifestyle Options", dubai: "Very High", abu_dhabi: "High", difference: "More variety in Dubai" },
      { aspect: "Family Friendliness", dubai: "Excellent", abu_dhabi: "Excellent", difference: "Comparable" },
      { aspect: "Job Market", dubai: "Larger", abu_dhabi: "Strong", difference: "More opportunities in Dubai" },
    ],
    shoppingPlatforms: [
      { platform: "Amazon.ae", delivery: "1-2 days", selection: "Very Wide", prices: "Competitive", returns: "30 days", prime: "AED 16/mo", rating: "4.5/5" },
      { platform: "Noon", delivery: "Same day*", selection: "Wide", prices: "Very Competitive", returns: "15 days", prime: "AED 16.58/mo", rating: "4.3/5" },
      { platform: "Carrefour", delivery: "2-4 hours", selection: "Groceries+", prices: "Good", returns: "14 days", prime: "AED 19/mo", rating: "4.2/5" },
      { platform: "Namshi", delivery: "1-3 days", selection: "Fashion", prices: "Mid-range", returns: "14 days", prime: "N/A", rating: "4.0/5" },
    ],
    emiratesComparison: [
      { emirate: "Dubai", cost_of_living: "Highest", job_opportunities: "Most", lifestyle: "Cosmopolitan", transport: "Excellent", family_score: "9/10" },
      { emirate: "Abu Dhabi", cost_of_living: "High", job_opportunities: "Many", lifestyle: "Balanced", transport: "Very Good", family_score: "9/10" },
      { emirate: "Sharjah", cost_of_living: "Moderate", job_opportunities: "Moderate", lifestyle: "Traditional", transport: "Good", family_score: "8/10" },
      { emirate: "Ajman", cost_of_living: "Low-Moderate", job_opportunities: "Limited", lifestyle: "Quiet", transport: "Basic", family_score: "7/10" },
    ],
    supermarketComparison: [
      { store: "Carrefour", price_level: "Mid-range", quality: "Good", variety: "Excellent", locations: "Many", convenience: "High" },
      { store: "Lulu Hypermarket", price_level: "Budget", quality: "Good", variety: "Excellent", locations: "Many", convenience: "High" },
      { store: "Spinneys", price_level: "Premium", quality: "Excellent", variety: "Good", locations: "Moderate", convenience: "Medium" },
      { store: "Waitrose", price_level: "Premium", quality: "Excellent", variety: "Good", locations: "Limited", convenience: "Medium" },
      { store: "Union Coop", price_level: "Budget", quality: "Good", variety: "Good", locations: "Many", convenience: "High" },
    ],
  },
  guide: {
    stats: [
      { label: "Setup Timeline", value: "2-4 Weeks" },
      { label: "Initial Costs", value: "AED 15,000-30,000" },
      { label: "Documents Needed", value: "15+ Items" },
      { label: "Essential Registrations", value: "8 Key Steps" },
    ],
    timeline: [
      { week: "Week 1", tasks: "Visa processing, SIM card, temporary accommodation", priority: "Critical", est_cost: "AED 5,000-8,000" },
      { week: "Week 2", tasks: "Bank account, Emirates ID, housing search", priority: "Critical", est_cost: "AED 15,000-25,000" },
      { week: "Week 3", tasks: "Utilities setup, school enrollment, driving license", priority: "High", est_cost: "AED 3,000-5,000" },
      { week: "Week 4", tasks: "Health insurance, final settling, social connections", priority: "Medium", est_cost: "AED 2,000-4,000" },
    ],
    documentsRequired: [
      { document: "Passport", copies: "Multiple", attestation: "Yes", validity: "6+ months", notes: "Original + copies" },
      { document: "Passport Photos", copies: "10+", attestation: "No", validity: "Recent", notes: "White background, specific size" },
      { document: "Educational Certificates", copies: "Attested", attestation: "Yes", validity: "N/A", notes: "Degree, transcripts" },
      { document: "Employment Contract", copies: "Multiple", attestation: "MOHRE", validity: "Current", notes: "Signed by employer" },
      { document: "Medical Fitness Test", copies: "1", attestation: "DHA/HAAD", validity: "Valid", notes: "Approved centers only" },
      { document: "Tenancy Contract (Ejari)", copies: "Multiple", attestation: "Yes", validity: "Current", notes: "For visa stamping" },
    ],
    visaCosts: [
      { service: "Employment Visa", cost: "AED 3,000-5,000", processing_time: "2-4 weeks", validity: "2-3 years", notes: "Employer sponsored" },
      { service: "Dependent Visa", cost: "AED 2,000-3,000", processing_time: "1-2 weeks", validity: "2-3 years", notes: "Per dependent" },
      { service: "Emirates ID", cost: "AED 370-1,070", processing_time: "1-2 weeks", validity: "2-3 years", notes: "Mandatory for all" },
      { service: "Medical Fitness", cost: "AED 300-500", processing_time: "1-3 days", validity: "N/A", notes: "One-time" },
      { service: "Visa Status Change", cost: "AED 500-1,000", processing_time: "1-2 weeks", validity: "N/A", notes: "If applicable" },
    ],
    essentialSetupSteps: [
      { step: "Get SIM Card", when: "Day 1", cost: "AED 50-100", difficulty: "Easy", docs_needed: "Passport copy" },
      { step: "Open Bank Account", when: "Week 1", cost: "Free", difficulty: "Medium", docs_needed: "Passport, Visa, Emirates ID*" },
      { step: "Apply for Emirates ID", when: "Week 1-2", cost: "AED 370+", difficulty: "Medium", docs_needed: "Multiple documents" },
      { step: "Find Permanent Housing", when: "Week 2-3", cost: "Deposit varies", difficulty: "Hard", docs_needed: "Passport, Visa, Employment letter" },
      { step: "Register Ejari", when: "After lease", cost: "AED 220", difficulty: "Easy", docs_needed: "Tenancy contract" },
      { step: "Setup Utilities (DEWA)", when: "Move-in", cost: "AED 2,000 deposit", difficulty: "Easy", docs_needed: "Ejari, Emirates ID" },
      { step: "Get Health Insurance", when: "Week 1", cost: "Varies", difficulty: "Medium", docs_needed: "Passport, Visa, Emirates ID" },
      { step: "Convert Driving License", when: "Week 2-4", cost: "AED 500-1,000", difficulty: "Varies", docs_needed: "License, eye test, attestation" },
    ],
  },
  lifestyle: {
    stats: [
      { label: "Beach Clubs", value: "50+ Options" },
      { label: "Fine Dining", value: "200+ Restaurants" },
      { label: "Avg. Cinema Ticket", value: "AED 35-50" },
      { label: "Gym Membership", value: "AED 200-500/mo" },
    ],
    activities: [
      { type: "Beach Clubs", cost_range: "AED 100-300/day", popular: "Nikki Beach, Zero Gravity, Azure", frequency: "Weekly/Monthly" },
      { type: "Fine Dining", cost_range: "AED 200-500/person", popular: "Zuma, La Petite Maison, Nusr-Et", frequency: "Monthly" },
      { type: "Entertainment", cost_range: "AED 50-200/visit", popular: "Dubai Mall, Global Village, IMG Worlds", frequency: "Weekly" },
      { type: "Fitness", cost_range: "AED 200-500/mo", popular: "Fitness First, GymNation, F45", frequency: "Daily/Weekly" },
      { type: "Cultural", cost_range: "AED 0-100/visit", popular: "Museums, Art Galleries, Heritage Sites", frequency: "Monthly" },
    ],
    beachClubs: [
      { name: "Nikki Beach", location: "Pearl Jumeira", day_pass: "AED 200-300", food_credit: "Yes", vibe: "Party/Social", best_for: "Weekend vibes" },
      { name: "Zero Gravity", location: "Dubai Marina", day_pass: "AED 150-250", food_credit: "Yes", vibe: "Relaxed", best_for: "Water sports" },
      { name: "Azure Beach", location: "Rixos The Palm", day_pass: "AED 100-150", food_credit: "Partial", vibe: "Family", best_for: "Families with kids" },
      { name: "Cove Beach", location: "Jumeirah", day_pass: "AED 150-200", food_credit: "Yes", vibe: "Chic", best_for: "Instagram moments" },
      { name: "Sunset Beach", location: "Jumeirah", day_pass: "Free", food_credit: "No", vibe: "Casual", best_for: "Budget-friendly" },
    ],
    gymOptions: [
      { gym: "GymNation", monthly: "AED 99", joining_fee: "None", locations: "Multiple", classes: "Limited", equipment: "Good" },
      { gym: "Fitness First", monthly: "AED 350-500", joining_fee: "AED 500", locations: "Many", classes: "Extensive", equipment: "Excellent" },
      { gym: "F45", monthly: "AED 500-700", joining_fee: "AED 300", locations: "Multiple", classes: "HIIT focused", equipment: "Specialized" },
      { gym: "Gold's Gym", monthly: "AED 250-400", joining_fee: "AED 300", locations: "Limited", classes: "Good", equipment: "Very Good" },
      { gym: "Virgin Active", monthly: "AED 450-650", joining_fee: "AED 500", locations: "Premium", classes: "Extensive", equipment: "Excellent" },
    ],
    weekendActivities: [
      { activity: "Desert Safari", cost: "AED 150-300", duration: "4-6 hours", best_season: "Oct-Apr", booking: "Required" },
      { activity: "Dubai Mall + Fountain", cost: "Free-AED 100", duration: "2-4 hours", best_season: "Year-round", booking: "No" },
      { activity: "La Mer Beach", cost: "Free", duration: "Half day", best_season: "Oct-May", booking: "No" },
      { activity: "Global Village", cost: "AED 25 entry", duration: "3-5 hours", best_season: "Nov-Apr", booking: "No" },
      { activity: "Ski Dubai", cost: "AED 200-300", duration: "2-3 hours", best_season: "Year-round", booking: "Recommended" },
      { activity: "Museum of Future", cost: "AED 149", duration: "2-3 hours", best_season: "Year-round", booking: "Required" },
    ],
    nightlife: [
      { venue_type: "Rooftop Bars", avg_cost: "AED 150-300", dress_code: "Smart casual", popular: "Mercury Lounge, Level 43", age: "21+" },
      { venue_type: "Nightclubs", avg_cost: "AED 200-500", dress_code: "Smart", popular: "White Dubai, BASE", age: "21+" },
      { venue_type: "Sports Bars", avg_cost: "AED 100-200", dress_code: "Casual", popular: "The Huddle, McGettigan's", age: "21+" },
      { venue_type: "Lounges", avg_cost: "AED 150-250", dress_code: "Smart casual", popular: "Siddharta, Buddha Bar", age: "21+" },
    ],
  },
  housing: {
    stats: [
      { label: "Avg. Studio Rent (Dubai)", value: "AED 35,000-55,000/year" },
      { label: "Avg. 2BR Rent (Dubai)", value: "AED 80,000-120,000/year" },
      { label: "Security Deposit", value: "5-10% of annual rent" },
      { label: "Agency Fee", value: "5% of annual rent" },
    ],
    areas: [
      { area: "Dubai Marina", studio: "AED 45,000-65,000", one_br: "AED 65,000-90,000", two_br: "AED 95,000-140,000", family_friendly: "Good" },
      { area: "JBR", studio: "AED 50,000-70,000", one_br: "AED 70,000-95,000", two_br: "AED 100,000-150,000", family_friendly: "Good" },
      { area: "Downtown Dubai", studio: "AED 55,000-80,000", one_br: "AED 85,000-120,000", two_br: "AED 120,000-180,000", family_friendly: "Excellent" },
      { area: "Dubai Hills", studio: "AED 40,000-55,000", one_br: "AED 60,000-85,000", two_br: "AED 90,000-130,000", family_friendly: "Excellent" },
      { area: "Jumeirah Village", studio: "AED 28,000-40,000", one_br: "AED 45,000-65,000", two_br: "AED 70,000-95,000", family_friendly: "Very Good" },
    ],
    rentalCosts: [
      { cost_type: "Security Deposit", amount: "5-10% annual", refundable: "Yes", notes: "Returned at lease end" },
      { cost_type: "Agency Commission", amount: "5% annual", refundable: "No", notes: "One-time payment" },
      { cost_type: "Ejari Registration", amount: "AED 220", refundable: "No", notes: "Mandatory tenancy registration" },
      { cost_type: "DEWA Deposit", amount: "AED 2,000-4,000", refundable: "Yes", notes: "For utilities connection" },
      { cost_type: "Chiller Deposit", amount: "AED 1,000-2,000", refundable: "Varies", notes: "If district cooling" },
      { cost_type: "Move-in Costs", amount: "AED 500-2,000", refundable: "No", notes: "Moving, cleaning, furniture" },
    ],
    neighborhoodGuide: [
      { area: "Business Bay", commute: "Excellent", schools: "Limited", lifestyle: "Urban", parking: "Paid", avg_rent_1br: "AED 60,000-85,000" },
      { area: "Arabian Ranches", commute: "Far", schools: "Excellent", lifestyle: "Suburban", parking: "Free", avg_rent_1br: "AED 55,000-75,000" },
      { area: "Dubai Sports City", commute: "Medium", schools: "Good", lifestyle: "Family", parking: "Free", avg_rent_1br: "AED 45,000-60,000" },
      { area: "Al Barsha", commute: "Good", schools: "Very Good", lifestyle: "Mixed", parking: "Free", avg_rent_1br: "AED 45,000-65,000" },
      { area: "Motor City", commute: "Medium", schools: "Good", lifestyle: "Quiet", parking: "Free", avg_rent_1br: "AED 38,000-55,000" },
      { area: "International City", commute: "Far", schools: "Basic", lifestyle: "Budget", parking: "Free", avg_rent_1br: "AED 25,000-35,000" },
    ],
    apartmentTypes: [
      { type: "Studio", size: "400-550 sq ft", ideal_for: "Singles", typical_rent: "AED 28,000-60,000", avg_bills: "AED 400-600/mo" },
      { type: "1 Bedroom", size: "650-900 sq ft", ideal_for: "Couples", typical_rent: "AED 45,000-95,000", avg_bills: "AED 600-900/mo" },
      { type: "2 Bedroom", size: "1,000-1,400 sq ft", ideal_for: "Small families", typical_rent: "AED 70,000-150,000", avg_bills: "AED 900-1,500/mo" },
      { type: "3 Bedroom", size: "1,500-2,200 sq ft", ideal_for: "Families", typical_rent: "AED 95,000-200,000", avg_bills: "AED 1,200-2,000/mo" },
      { type: "Villa (3BR)", size: "2,500-3,500 sq ft", ideal_for: "Large families", typical_rent: "AED 120,000-250,000", avg_bills: "AED 2,000-3,500/mo" },
    ],
  },
  transportation: {
    stats: [
      { label: "Metro Zones", value: "7 Zones" },
      { label: "Avg. Monthly Metro", value: "AED 200-350" },
      { label: "Avg. Car Lease", value: "AED 1,200-2,500/mo" },
      { label: "Salik (Toll)", value: "AED 4/gate" },
    ],
    options: [
      { mode: "Metro/Tram", monthly_cost: "AED 200-350", convenience: "High", coverage: "Major areas", best_for: "City commuters" },
      { mode: "Bus", monthly_cost: "AED 150-250", convenience: "Medium", coverage: "Extensive", best_for: "Budget travelers" },
      { mode: "Taxi/Careem/Uber", monthly_cost: "AED 800-1,500", convenience: "Very High", coverage: "Complete", best_for: "Flexible schedules" },
      { mode: "Car Lease", monthly_cost: "AED 1,200-2,500", convenience: "Highest", coverage: "Complete", best_for: "Families, frequent travel" },
      { mode: "Car Purchase", monthly_cost: "AED 1,500-3,000*", convenience: "Highest", coverage: "Complete", best_for: "Long-term residents" },
    ],
    publicTransportCards: [
      { card_type: "Silver Card", category: "Standard", price: "AED 25", refundable: "AED 19", features: "Standard class metro/bus" },
      { card_type: "Gold Card", category: "Premium", price: "AED 25", refundable: "AED 19", features: "Gold class metro only" },
      { card_type: "Blue Card (Personalized)", category: "Standard", price: "AED 70", refundable: "AED 0", features: "Monthly passes, auto-reload" },
      { card_type: "Red Ticket", category: "Tourist", price: "AED 2", refundable: "AED 0", features: "Single/multiple journey, 10 reloads max" },
    ],
    carLeasingOptions: [
      { car_category: "Economy", example: "Nissan Sunny, Kia Picanto", monthly: "AED 1,200-1,500", insurance: "Included", mileage: "2,500km/mo" },
      { car_category: "Compact", example: "Toyota Yaris, Honda Civic", monthly: "AED 1,500-1,900", insurance: "Included", mileage: "3,000km/mo" },
      { car_category: "Mid-size SUV", example: "Toyota RAV4, Nissan X-Trail", monthly: "AED 2,200-2,800", insurance: "Included", mileage: "3,000km/mo" },
      { car_category: "Full-size SUV", example: "Toyota Land Cruiser, Nissan Patrol", monthly: "AED 3,500-4,500", insurance: "Included", mileage: "3,500km/mo" },
      { car_category: "Luxury", example: "BMW 5 Series, Mercedes E-Class", monthly: "AED 4,000-6,000", insurance: "Included", mileage: "3,000km/mo" },
    ],
    carOwnershipCosts: [
      { expense: "Registration (annual)", cost: "AED 400-700", frequency: "Yearly", notes: "Varies by vehicle value" },
      { expense: "Insurance (comprehensive)", cost: "AED 2,500-8,000", frequency: "Yearly", notes: "Depends on car value, age, history" },
      { expense: "Salik (tolls)", cost: "AED 100-400", frequency: "Monthly", notes: "If using toll gates" },
      { expense: "Parking", cost: "AED 200-500", frequency: "Monthly", notes: "If not included in residence" },
      { expense: "Fuel", cost: "AED 300-600", frequency: "Monthly", notes: "Average driver, AED 2.8/L" },
      { expense: "Maintenance", cost: "AED 1,500-3,000", frequency: "Yearly", notes: "Service, wear items" },
    ],
    drivingLicenseConversion: [
      { country: "USA, UK, Canada, EU", process: "Direct conversion", cost: "AED 500-1,000", time: "1-3 days", requirements: "Eye test, license attestation" },
      { country: "GCC Countries", process: "Direct swap", cost: "AED 400-700", time: "1-2 days", requirements: "Eye test, Emirates ID" },
      { country: "Australia, NZ, South Africa", process: "Direct conversion", cost: "AED 500-1,000", time: "1-3 days", requirements: "Eye test, license attestation" },
      { country: "Other Countries", process: "Training + Tests", cost: "AED 3,000-6,000", time: "1-3 months", requirements: "Theory, practical lessons, tests" },
    ],
  },
  education: {
    stats: [
      { label: "International Schools", value: "200+ Options" },
      { label: "Avg. British School Fee", value: "AED 40,000-80,000/year" },
      { label: "Avg. American School Fee", value: "AED 50,000-90,000/year" },
      { label: "IB Schools", value: "20+ Options" },
    ],
    curricula: [
      { curriculum: "British (GCSE/A-Level)", fee_range: "AED 35,000-85,000/year", popular_schools: "JESS, DBS, Jumeirah College", grade_levels: "FS1-Year 13" },
      { curriculum: "American", fee_range: "AED 45,000-95,000/year", popular_schools: "DESS, ASD, ASK", grade_levels: "KG1-Grade 12" },
      { curriculum: "IB (International Baccalaureate)", fee_range: "AED 50,000-100,000/year", popular_schools: "GEMS WSO, Dubai International Academy", grade_levels: "PYP-DP" },
      { curriculum: "Indian (CBSE/ICSE)", fee_range: "AED 8,000-25,000/year", popular_schools: "DPS, Delhi Private School", grade_levels: "KG-Grade 12" },
      { curriculum: "French", fee_range: "AED 25,000-55,000/year", popular_schools: "Lycée Français Jean Mermoz", grade_levels: "Maternelle-Terminale" },
    ],
    topSchoolsByRating: [
      { school: "JESS Arabian Ranches", curriculum: "British", fees: "AED 58,000-80,000", rating: "Outstanding", waitlist: "Long", location: "Arabian Ranches" },
      { school: "Dubai British School", curriculum: "British", fees: "AED 55,000-75,000", rating: "Outstanding", waitlist: "Moderate", location: "Arabian Ranches" },
      { school: "GEMS Wellington", curriculum: "British/IB", fees: "AED 60,000-95,000", rating: "Outstanding", waitlist: "Long", location: "Al Sufouh" },
      { school: "Dubai American Academy", curriculum: "American", fees: "AED 65,000-85,000", rating: "Outstanding", waitlist: "Moderate", location: "Barsha" },
      { school: "GEMS World Academy", curriculum: "IB", fees: "AED 80,000-100,000", rating: "Outstanding", waitlist: "Long", location: "Al Barsha" },
    ],
    enrollmentCosts: [
      { cost_item: "Registration Fee", amount: "AED 500-2,000", refundable: "Usually No", notes: "One-time, per application" },
      { cost_item: "Annual Tuition", amount: "Varies by school", refundable: "No", notes: "Paid in 1-3 installments" },
      { cost_item: "Admission Fee", amount: "AED 1,000-5,000", refundable: "No", notes: "One-time upon acceptance" },
      { cost_item: "Uniform", amount: "AED 500-1,500", refundable: "No", notes: "Per year" },
      { cost_item: "Books & Materials", amount: "AED 500-2,000", refundable: "No", notes: "Per year" },
      { cost_item: "Transportation", amount: "AED 6,000-12,000", refundable: "No", notes: "Optional, per year" },
      { cost_item: "Extracurricular", amount: "AED 1,000-5,000", refundable: "No", notes: "Optional activities" },
    ],
    schoolAreas: [
      { area: "Arabian Ranches", notable_schools: "JESS, DBS, Ranches Primary", school_quality: "Excellent", family_lifestyle: "Suburban", commute: "Far from city" },
      { area: "Al Barsha/Sufouh", notable_schools: "GEMS Wellington, DAA, GEMS WSO", school_quality: "Excellent", family_lifestyle: "Urban", commute: "Central" },
      { area: "Dubai Sports City", notable_schools: "Victory Heights, DPSNR", school_quality: "Good", family_lifestyle: "Family-focused", commute: "Medium" },
      { area: "Jumeirah", notable_schools: "Dubai College, JPS", school_quality: "Outstanding", family_lifestyle: "Upscale", commute: "Beach proximity" },
    ],
  },
  health: {
    stats: [
      { label: "Health Insurance", value: "Mandatory" },
      { label: "Basic Plan Cost", value: "AED 600-1,200/year" },
      { label: "Comprehensive Plan", value: "AED 3,000-8,000/year" },
      { label: "Major Hospitals", value: "50+ Facilities" },
    ],
    insurance: [
      { type: "Essential", coverage: "AED 150,000", cost: "AED 600-900/year", features: "Basic emergency, GP visits", suitable_for: "Basic visa requirement" },
      { type: "Enhanced", coverage: "AED 500,000", cost: "AED 1,500-2,500/year", features: "Specialist visits, tests, medications", suitable_for: "Regular healthcare needs" },
      { type: "Comprehensive", coverage: "AED 1,000,000+", cost: "AED 3,500-6,000/year", features: "Full coverage, dental, optical, maternity", suitable_for: "Families, comprehensive care" },
      { type: "Premium", coverage: "Unlimited", cost: "AED 8,000-15,000/year", features: "Full coverage, premium hospitals, worldwide", suitable_for: "Premium healthcare access" },
    ],
    insuranceProviders: [
      { provider: "Daman", network: "Extensive", claim_process: "Excellent", digital: "Very Good", popular_plan: "Essential Benefits Plan", avg_cost: "AED 700-1,200" },
      { provider: "Nextcare", network: "Good", claim_process: "Good", digital: "Good", popular_plan: "Silver Plan", avg_cost: "AED 1,000-1,800" },
      { provider: "AXA", network: "Very Good", claim_process: "Good", digital: "Excellent", popular_plan: "Smart Essential", avg_cost: "AED 1,200-2,000" },
      { provider: "Oman Insurance", network: "Good", claim_process: "Good", digital: "Good", popular_plan: "Tameen", avg_cost: "AED 800-1,500" },
      { provider: "BUPA", network: "Premium", claim_process: "Excellent", digital: "Excellent", popular_plan: "BUPA Classic", avg_cost: "AED 3,500-6,000" },
    ],
    hospitalComparison: [
      { hospital: "American Hospital Dubai", type: "Private", quality: "Excellent", emergency: "24/7", insurance: "Most accepted", specialty: "Multi-specialty", avg_wait: "Short" },
      { hospital: "Mediclinic Dubai Mall", type: "Private", quality: "Excellent", emergency: "24/7", insurance: "Most accepted", specialty: "Multi-specialty", avg_wait: "Short" },
      { hospital: "Saudi German Hospital", type: "Private", quality: "Very Good", emergency: "24/7", insurance: "Most accepted", specialty: "Multi-specialty", avg_wait: "Moderate" },
      { hospital: "Rashid Hospital", type: "Government", quality: "Good", emergency: "24/7", insurance: "DHA network", specialty: "Trauma center", avg_wait: "Long" },
      { hospital: "Dubai Hospital", type: "Government", quality: "Good", emergency: "24/7", insurance: "DHA network", specialty: "General", avg_wait: "Long" },
    ],
    commonMedicalCosts: [
      { service: "GP Consultation", with_insurance: "AED 0-50", without_insurance: "AED 200-400", notes: "Basic check-up" },
      { service: "Specialist Consultation", with_insurance: "AED 50-100", without_insurance: "AED 400-800", notes: "First visit" },
      { service: "Blood Tests (basic)", with_insurance: "Covered", without_insurance: "AED 200-500", notes: "CBC, basic panel" },
      { service: "X-Ray", with_insurance: "AED 0-50", without_insurance: "AED 300-600", notes: "Single view" },
      { service: "MRI Scan", with_insurance: "AED 100-300", without_insurance: "AED 1,500-3,000", notes: "Single area" },
      { service: "Dental Cleaning", with_insurance: "Varies", without_insurance: "AED 250-500", notes: "Not always covered" },
      { service: "Emergency Room Visit", with_insurance: "AED 100-200", without_insurance: "AED 500-2,000", notes: "Plus treatment costs" },
    ],
    pharmacyOptions: [
      { pharmacy: "Life Pharmacy", locations: "Many", delivery: "Yes", online: "Yes", pricing: "Competitive", hours: "Extended" },
      { pharmacy: "Boots", locations: "Multiple", delivery: "Yes", online: "Yes", pricing: "Mid-range", hours: "Mall hours" },
      { pharmacy: "Aster Pharmacy", locations: "Many", delivery: "Yes", online: "Yes", pricing: "Competitive", hours: "24/7 some locations" },
      { pharmacy: "Day to Day", locations: "Limited", delivery: "Limited", online: "No", pricing: "Budget", hours: "Standard" },
    ],
  },
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = blogPosts.filter((post) => post.category === slug);
  const data = categoryData[slug];
  const IconComponent = category.icon ? (LucideIcons[category.icon as keyof typeof LucideIcons] as React.ComponentType<LucideIcons.LucideProps>) : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {IconComponent && (
            <div style={{ color: category.color || 'var(--accent-primary)' }}>
              <IconComponent size={40} strokeWidth={1.5} />
            </div>
          )}
          <h1 className="text-4xl font-bold text-[var(--blog-heading)]">{category.name}</h1>
        </div>
        <p className="text-lg text-[var(--text-secondary)] mb-4">{category.blurb}</p>
        {category.description && (
          <p className="text-[var(--blog-text)] leading-relaxed max-w-4xl">
            {category.description}
          </p>
        )}
      </div>

      {/* Quick Stats Section */}
      {data && data.stats && (
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.stats.map((stat: any, idx: number) => (
            <div key={idx} className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-4">
              <div className="text-2xl font-bold text-[var(--accent-primary)] mb-1">{stat.value}</div>
              <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed Data Tables */}
      {data && (
        <div className="mb-12 space-y-8">
          {/* Budget Category - Breakdown Table */}
          {slug === 'budget' && data.breakdown && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.PieChart size={20} className="text-[var(--accent-primary)]" />
                Monthly Budget Breakdown by Category
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Single</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Family</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">% of Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.breakdown.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.category}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.single}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.family}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                              <div
                                className="bg-[var(--accent-primary)] h-2 rounded-full"
                                style={{ width: item.percentage }}
                              ></div>
                            </div>
                            <span className="text-[var(--blog-text)] text-sm font-medium">{item.percentage}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Finance Category - Bank Comparison */}
          {slug === 'finance' && data.comparison && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.Building2 size={20} className="text-[var(--accent-primary)]" />
                Top Banks Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Bank</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Account Fee</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Min. Balance</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Credit Card</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Digital Banking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparison.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.bank}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.account_fee}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.min_balance}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.credit_card}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            item.digital === 'Excellent' ? 'bg-green-100 text-green-800' :
                            item.digital === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.digital}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[var(--blog-text-light)] mt-3">* Subject to salary transfer or minimum balance requirements</p>
            </div>
          )}

          {/* Technology Category - Apps Table */}
          {slug === 'technology' && data.apps && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.Smartphone size={20} className="text-[var(--accent-primary)]" />
                Essential Apps by Category
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Examples</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Importance</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.apps.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.category}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.examples}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            item.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                            item.importance === 'Essential' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {item.importance}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Comparison Category - Metrics Table */}
          {slug === 'comparison' && data.metrics && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.Scale size={20} className="text-[var(--accent-primary)]" />
                Dubai vs Abu Dhabi Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Aspect</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Dubai</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Abu Dhabi</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Key Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.metrics.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.aspect}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.dubai}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.abu_dhabi}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.difference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Guide Category - Timeline Table */}
          {slug === 'guide' && data.timeline && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.ClipboardList size={20} className="text-[var(--accent-primary)]" />
                Setup Timeline & Costs
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Timeline</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Key Tasks</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Priority</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Est. Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.timeline.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.week}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.tasks}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            item.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                            item.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {item.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[var(--blog-text)] font-medium">{item.est_cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Lifestyle Category - Activities Table */}
          {slug === 'lifestyle' && data.activities && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.PartyPopper size={20} className="text-[var(--accent-primary)]" />
                Popular Activities & Cost Ranges
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Activity Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Cost Range</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Popular Options</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.activities.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.type}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.cost_range}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.popular}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.frequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Housing Category - Areas Comparison */}
          {slug === 'housing' && data.areas && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.Home size={20} className="text-[var(--accent-primary)]" />
                Popular Areas Rental Prices (Annual)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Area</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Studio</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">1 Bedroom</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">2 Bedroom</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Family Friendly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.areas.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.area}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.studio}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.one_br}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.two_br}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            item.family_friendly === 'Excellent' ? 'bg-green-100 text-green-800' :
                            item.family_friendly === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.family_friendly}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Transportation Category - Options Table */}
          {slug === 'transportation' && data.options && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.Car size={20} className="text-[var(--accent-primary)]" />
                Transportation Options Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Mode</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Monthly Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Convenience</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Coverage</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.options.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.mode}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.monthly_cost}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.convenience}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.coverage}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.best_for}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[var(--blog-text-light)] mt-3">* Includes loan payment, insurance, fuel, and maintenance</p>
            </div>
          )}

          {/* Education Category - Curricula Table */}
          {slug === 'education' && data.curricula && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.GraduationCap size={20} className="text-[var(--accent-primary)]" />
                School Curricula & Fee Ranges
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Curriculum</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Annual Fee Range</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Popular Schools</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Grade Levels</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.curricula.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.curriculum}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.fee_range}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.popular_schools}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.grade_levels}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Health Category - Insurance Plans */}
          {slug === 'health' && data.insurance && (
            <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                <LucideIcons.Heart size={20} className="text-[var(--accent-primary)]" />
                Health Insurance Plans Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Plan Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Coverage</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Annual Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Key Features</th>
                      <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Suitable For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.insurance.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                        <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.type}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.coverage}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)]">{item.cost}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.features}</td>
                        <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.suitable_for}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Finance Category - Additional Tables */}
          {slug === 'finance' && data.creditCards && (
            <>
              <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                  <LucideIcons.CreditCard size={20} className="text-[var(--accent-primary)]" />
                  Popular Credit Cards Comparison
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Card</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Annual Fee</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Rewards</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Min. Salary</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.creditCards.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                          <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.card}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.type}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.annual_fee}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.cashback}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.min_salary}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.benefits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                  <LucideIcons.PiggyBank size={20} className="text-[var(--accent-primary)]" />
                  Savings & Investment Options
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Product</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Interest Rate</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Min. Deposit</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Liquidity</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.savingsOptions.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                          <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.product}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.interest_rate}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.min_deposit}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.liquidity}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.best_for}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                  <LucideIcons.Landmark size={20} className="text-[var(--accent-primary)]" />
                  Account Types & Features
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Account Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Monthly Fees</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Key Features</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Ideal For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.accountTypes.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                          <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.type}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.fees}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.features}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.ideal_for}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Budget Category - Additional Tables */}
          {slug === 'budget' && data.salaryBrackets && (
            <>
              <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                  <LucideIcons.TrendingUp size={20} className="text-[var(--accent-primary)]" />
                  Salary Brackets & Lifestyle Guide
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Salary Bracket</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Lifestyle</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Housing Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Savings Rate</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.salaryBrackets.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                          <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.bracket}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.lifestyle}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.housing}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.savings}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                  <LucideIcons.ShoppingCart size={20} className="text-[var(--accent-primary)]" />
                  Grocery Price Comparison
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Item</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Local Supermarket</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Premium Store</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Monthly Average</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.groceryCosts.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                          <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.item}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.local_supermarket}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.premium}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)] font-medium">{item.monthly_avg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--blog-border)] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4 flex items-center gap-2">
                  <LucideIcons.Coffee size={20} className="text-[var(--accent-primary)]" />
                  Dining Out Costs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--blog-table-header)] border-b border-[var(--blog-table-border)]">
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Category</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Average Cost</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Popular Restaurants</th>
                        <th className="text-left py-3 px-4 font-semibold text-[var(--blog-heading)]">Recommended Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.diningCosts.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[var(--blog-table-border)]">
                          <td className="py-3 px-4 font-medium text-[var(--blog-text)]">{item.category}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.cost}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)] text-sm">{item.examples}</td>
                          <td className="py-3 px-4 text-[var(--blog-text)]">{item.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {categoryPosts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold text-[var(--blog-heading)] mb-6">
            {categoryPosts.length} {categoryPosts.length === 1 ? 'Guide' : 'Guides'} in this category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      ) : (
        <div className="bg-[var(--blog-highlight)] border border-[var(--blog-border)] rounded-lg p-8 text-center">
          <p className="text-[var(--blog-text)] mb-4">
            No guides available in this category yet. Check back soon for comprehensive content on {category.name.toLowerCase()}.
          </p>
          <Link
            href="/blog"
            className="inline-block text-[var(--blog-link)] hover:text-[var(--blog-link-hover)] underline"
          >
            Browse all guides
          </Link>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-[var(--blog-border)]">
        <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-4">Explore Other Categories</h3>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter((cat) => cat.slug !== slug)
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg hover:shadow-[var(--hover-shadow)] transition-shadow text-sm"
              >
                {cat.icon && <span>{cat.icon}</span>}
                <span className="text-[var(--blog-text)]">{cat.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}
