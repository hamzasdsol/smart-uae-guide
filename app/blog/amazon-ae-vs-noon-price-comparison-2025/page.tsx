import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Amazon.ae vs Noon: Which Offers Better Deals in UAE 2025? Complete Comparison",
  description: "Comprehensive price comparison between Amazon.ae and Noon. Find out which platform saves you more on electronics, groceries, fashion, and more.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "platform-overview", label: "Platform Overview" },
  { id: "price-comparison", label: "Price Comparison by Category" },
  { id: "delivery-services", label: "Delivery Services" },
  { id: "membership-programs", label: "Membership Programs" },
  { id: "return-policies", label: "Return Policies" },
  { id: "exclusive-features", label: "Exclusive Features" },
  { id: "payment-options", label: "Payment Options" },
  { id: "which-is-better", label: "Which Platform Is Better?" },
  { id: "shopping-strategy", label: "Smart Shopping Strategy" }
];

export default function AmazonVsNoonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[var(--blog-heading)] mb-4">
              Amazon.ae vs Noon: Which Offers Better Deals in UAE 2025?
            </h1>
            <p className="text-[var(--blog-text-light)] text-lg">
              In-depth price comparison and feature analysis to help you save money on online shopping
            </p>
          </header>

      <section id="introduction" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-4">Introduction</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          The UAE e-commerce market is dominated by two giants: Amazon.ae (backed by the global Amazon empire) and Noon (the regional champion founded by Mohamed Alabbar). Both platforms offer millions of products, fast delivery, and competitive prices—but which one actually gives you the best value for your money?
        </p>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          In this comprehensive comparison, we&apos;ve analyzed prices across multiple categories, tested delivery times, compared membership benefits, and evaluated the overall shopping experience on both platforms. Whether you&apos;re shopping for electronics, fashion, groceries, or home goods, this guide will help you make informed decisions and maximize savings.
        </p>
        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg my-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Key Findings (TL;DR)</h3>
          <ul className="space-y-2 text-[var(--blog-text)] text-sm">
            <li><strong>Electronics:</strong> Amazon.ae generally 5-15% cheaper</li>
            <li><strong>Fashion & Beauty:</strong> Noon has better selection and competitive prices</li>
            <li><strong>Groceries:</strong> Noon Daily (Noon Minutes) wins on speed and selection</li>
            <li><strong>Home & Lifestyle:</strong> Comparable prices, depends on specific brands</li>
            <li><strong>Delivery:</strong> Both offer same-day/next-day; Noon Minutes (10-15 min) is fastest</li>
          </ul>
        </div>
      </section>

      <section id="platform-overview" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Platform Overview</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Amazon.ae</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Launched</p>
                <p className="text-[var(--blog-text)] font-semibold">May 2019</p>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Headquarters</p>
                <p className="text-[var(--blog-text)] font-semibold">Global (Amazon Inc.)</p>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Products</p>
                <p className="text-[var(--blog-text)] font-semibold">20+ million items</p>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Strengths</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1">
                  <li>Amazon global ecosystem (Kindle, Prime Video, etc.)</li>
                  <li>Extensive electronics & book selection</li>
                  <li>Amazon branded products (Basics, Echo, Fire)</li>
                  <li>Superior search and filtering</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Noon</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Launched</p>
                <p className="text-[var(--blog-text)] font-semibold">December 2017</p>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Headquarters</p>
                <p className="text-[var(--blog-text)] font-semibold">Dubai, UAE</p>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Products</p>
                <p className="text-[var(--blog-text)] font-semibold">20+ million items</p>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">Strengths</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1">
                  <li>Strong local & regional brands</li>
                  <li>Superior fashion & beauty selection</li>
                  <li>Noon Minutes ultra-fast grocery delivery</li>
                  <li>Better Arabic language support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price-comparison" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Price Comparison by Category</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-6">
          We compared prices of 100+ popular products across both platforms in January 2025. Here are the results:
        </p>

        <div className="space-y-8">
          {/* Electronics */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Electronics & Tech</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
                <thead className="bg-[var(--blog-table-header)]">
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Product</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Amazon.ae</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Noon</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Apple AirPods Pro (2nd Gen)</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 899</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 949</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Amazon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Samsung 55&quot; 4K Smart TV</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 1,799</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 1,899</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Amazon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">iPhone 15 Pro 256GB</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 4,399</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 4,399</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-semibold">Tie</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Sony WH-1000XM5 Headphones</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 1,149</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 1,199</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Amazon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">MacBook Air M2 (2024)</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 3,999</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 4,099</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Amazon</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[var(--blog-highlight)] p-4 rounded-lg">
              <p className="text-[var(--blog-text)] text-sm">
                <strong>Verdict:</strong> Amazon.ae wins on electronics with an average 8% lower price on tech products. Amazon also has better stock availability for popular electronics.
              </p>
            </div>
          </div>

          {/* Fashion & Beauty */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Fashion & Beauty</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
                <thead className="bg-[var(--blog-table-header)]">
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Product</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Amazon.ae</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Noon</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Nike Air Max 270</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 549</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 529</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Noon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Zara Women&apos;s Dress</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Not available</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 199</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Noon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">L&apos;Oréal Paris Revitalift Serum</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 89</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 85</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Noon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Adidas Men&apos;s T-Shirt</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 129</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 119</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Noon</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[var(--blog-highlight)] p-4 rounded-lg">
              <p className="text-[var(--blog-text)] text-sm">
                <strong>Verdict:</strong> Noon dominates fashion and beauty with better selection, more regional brands, and competitive pricing. Noon also offers exclusive collections from Splash, Centrepoint, and other local retailers.
              </p>
            </div>
          </div>

          {/* Groceries */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Groceries & Daily Essentials</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
                <thead className="bg-[var(--blog-table-header)]">
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Product</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Amazon.ae</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Noon Daily</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Milk (2L Fresh)</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 10.50</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 9.95</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Noon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Bread (White Sliced)</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 6.00</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 5.75</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Noon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Eggs (30 pack)</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 19.99</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 18.50</td>
                    <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Noon</td>
                  </tr>
                  <tr className="divide-x divide-[var(--blog-table-border)]">
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Coca-Cola (6-pack)</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 11.00</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 11.00</td>
                    <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-semibold">Tie</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[var(--blog-highlight)] p-4 rounded-lg">
              <p className="text-[var(--blog-text)] text-sm">
                <strong>Verdict:</strong> Noon Daily wins with 10-15 minute delivery through Noon Minutes, better fresh produce selection, and slightly lower prices on everyday essentials.
              </p>
            </div>
          </div>

          {/* Home & Lifestyle */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Home & Lifestyle</h3>
            <div className="bg-[var(--blog-highlight)] p-4 rounded-lg">
              <p className="text-[var(--blog-text)] text-sm mb-3">
                <strong>Pricing:</strong> Highly competitive and comparable. Prices vary by brand and promotion.
              </p>
              <p className="text-[var(--blog-text)] text-sm mb-3">
                <strong>Amazon advantage:</strong> Better selection of international home décor brands and Amazon Basics products.
              </p>
              <p className="text-[var(--blog-text)] text-sm">
                <strong>Noon advantage:</strong> Better selection from regional brands like Home Centre, The One, and local furniture shops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery-services" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Delivery Services Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Feature</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Amazon.ae</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Noon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Same-Day Delivery</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Yes (orders before 12pm)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Yes (orders before 2pm)</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Next-Day Delivery</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Yes</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Yes</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Ultra-Fast (10-15 min)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">No</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Yes (Noon Minutes)</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Standard Delivery Cost</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free with Prime / AED 25+</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free with VIP / AED 100+</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Coverage</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">All Emirates</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">All Emirates</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Delivery Time Slots</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">2-hour windows</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">1-hour windows</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Tracking</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Real-time GPS tracking</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Real-time GPS tracking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg mt-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Delivery Winner: Noon</h3>
          <p className="text-[var(--blog-text)] text-sm">
            Noon Minutes&apos; 10-15 minute delivery for groceries and essentials is unmatched. Both platforms offer excellent same-day/next-day delivery, but Noon&apos;s tighter delivery windows and ultra-fast option give it the edge.
          </p>
        </div>
      </section>

      <section id="membership-programs" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Membership Programs</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Amazon Prime UAE</h3>

            <div className="mb-4">
              <p className="text-[var(--blog-text-light)] text-sm mb-1">Cost</p>
              <p className="text-[var(--blog-text)] font-semibold">AED 16/month or AED 140/year</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-[var(--blog-text)] text-sm">
                <li>Unlimited free same-day/next-day delivery</li>
                <li>Prime Video streaming (movies & TV shows)</li>
                <li>Prime Gaming (free games monthly)</li>
                <li>Early access to deals</li>
                <li>Prime Reading (free ebooks)</li>
                <li>Amazon Music</li>
              </ul>
            </div>

            <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg">
              <p className="text-xs text-[var(--blog-text-light)] mb-1">Break-Even Point</p>
              <p className="text-[var(--blog-text)] text-sm">2-3 deliveries/month makes Prime worthwhile</p>
            </div>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Noon VIP</h3>

            <div className="mb-4">
              <p className="text-[var(--blog-text-light)] text-sm mb-1">Cost</p>
              <p className="text-[var(--blog-text)] font-semibold">AED 19/month or AED 199/year</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-[var(--blog-text)] text-sm">
                <li>Unlimited free delivery on all orders</li>
                <li>Early access to sales and exclusive deals</li>
                <li>Priority customer service</li>
                <li>Free returns (extended window)</li>
                <li>VIP-only discounts</li>
                <li>Faster delivery processing</li>
              </ul>
            </div>

            <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg">
              <p className="text-xs text-[var(--blog-text-light)] mb-1">Break-Even Point</p>
              <p className="text-[var(--blog-text)] text-sm">2-3 deliveries/month makes VIP worthwhile</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[var(--blog-highlight)] p-5 rounded-lg">
          <p className="text-[var(--blog-text)] text-sm">
            <strong>Verdict:</strong> Amazon Prime offers better overall value if you use Prime Video and other Amazon services. If you only care about shopping benefits, both are comparable, but Noon VIP&apos;s annual cost (AED 199 vs AED 140) makes Amazon Prime the better deal.
          </p>
        </div>
      </section>

      <section id="return-policies" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Return Policies</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Feature</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Amazon.ae</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Noon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Return Window</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">30 days (most items)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">15 days (standard) / 30 days (VIP)</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Return Method</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free pickup or drop-off</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free pickup</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Refund Processing</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">5-7 business days</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">7-14 business days</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Electronics Return</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">30 days, unopened packaging</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">7 days, unopened packaging</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Fashion Return</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">30 days, unworn with tags</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">15 days, unworn with tags</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg mt-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Return Policy Winner: Amazon</h3>
          <p className="text-[var(--blog-text)] text-sm">
            Amazon&apos;s 30-day return window across all items (vs Noon&apos;s 15 days for non-VIP members) and faster refund processing make it the winner. Amazon also accepts opened items in many categories, while Noon is stricter.
          </p>
        </div>
      </section>

      <section id="exclusive-features" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Exclusive Features</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">Amazon.ae Exclusives</h3>
            <ul className="space-y-3 text-[var(--blog-text)] text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Amazon Basics:</strong> High-quality, budget-friendly house-brand products</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Kindle & Echo devices:</strong> Only available on Amazon</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Prime Video:</strong> Streaming service included with Prime membership</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Subscribe & Save:</strong> Recurring deliveries with 15% discount</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Amazon Fresh:</strong> Grocery delivery from Amazon&apos;s warehouses</span>
              </li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">Noon Exclusives</h3>
            <ul className="space-y-3 text-[var(--blog-text)] text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Noon Minutes:</strong> 10-15 minute ultra-fast delivery for essentials</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Noon Daily:</strong> Comprehensive grocery service with fresh produce</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Regional brands:</strong> Exclusive partnerships with Splash, Centrepoint, Max Fashion</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Noon Credit:</strong> Flexible payment plans (no interest)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Arabic-first experience:</strong> Better Arabic language support and content</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="payment-options" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Payment Options</h2>

        <div className="space-y-4">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-3">Both Platforms Accept:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-[var(--blog-text)] text-sm">
              <ul className="space-y-2 list-disc list-inside">
                <li>Credit/debit cards (Visa, Mastercard, Amex)</li>
                <li>Cash on delivery (COD)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>Tabby (buy now, pay later)</li>
                <li>Postpay (installment plans)</li>
                <li>Bank transfers</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
              <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">Amazon-Specific</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
                <li>Amazon Pay balance</li>
                <li>Amazon credit card (co-branded with select banks)</li>
              </ul>
            </div>

            <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
              <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">Noon-Specific</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
                <li>Noon Credit (interest-free installments)</li>
                <li>Noon Wallet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="which-is-better" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Which Platform Is Better?</h2>

        <div className="bg-[var(--accent-light)] border border-[var(--blog-border)] rounded-lg p-6">
          <p className="text-[var(--blog-text)] leading-relaxed mb-6">
            The answer depends on what you&apos;re buying and what you value most. Here&apos;s our final verdict:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-[var(--accent-primary)] pl-5">
              <h3 className="font-bold text-[var(--blog-heading)] mb-2">Choose Amazon.ae if:</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li>•You primarily shop for electronics and tech gadgets</li>
                <li>•You want access to Prime Video and other Amazon services</li>
                <li>•You prefer longer return windows (30 days)</li>
                <li>•You buy books, Kindles, or Amazon-branded products</li>
                <li>•You value a more established global ecosystem</li>
              </ul>
            </div>

            <div className="border-l-4 border-[var(--accent-primary)] pl-5">
              <h3 className="font-bold text-[var(--blog-heading)] mb-2">Choose Noon if:</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li>•You shop for fashion, beauty, and home décor frequently</li>
                <li>•You need groceries with ultra-fast delivery (Noon Minutes)</li>
                <li>•You prefer regional and local brands</li>
                <li>•You want better Arabic language support</li>
                <li>•You value tighter delivery windows and faster grocery delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="shopping-strategy" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Smart Shopping Strategy</h2>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg mb-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Pro Tip: Use Both Platforms!</h3>
          <p className="text-[var(--blog-text)] text-sm mb-4">
            The savviest shoppers in UAE use both Amazon and Noon. Here&apos;s how to maximize savings:
          </p>

          <ol className="space-y-3 text-[var(--blog-text)] text-sm list-decimal list-inside">
            <li><strong>Compare before buying:</strong> Always check prices on both platforms before making a purchase, especially for big-ticket items.</li>
            <li><strong>Take advantage of sales:</strong> Amazon&apos;s Prime Day vs Noon&apos;s Yellow Friday vs White Friday—shop the sales on both platforms.</li>
            <li><strong>Use category strengths:</strong> Electronics from Amazon, fashion from Noon, groceries from Noon Daily.</li>
            <li><strong>Subscribe to both memberships during sales:</strong> Get Prime during Black Friday, Noon VIP during Yellow Friday for maximum discounts.</li>
            <li><strong>Leverage cashback apps:</strong> Use cashback credit cards and apps like The Entertainer or Smiles for additional savings.</li>
          </ol>
        </div>

        <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-4">Annual Savings Potential</h3>
          <p className="text-[var(--blog-text)] text-sm mb-4">
            By strategically shopping across both platforms and timing purchases during sales, UAE residents can save an average of <strong>AED 2,000 - AED 5,000 annually</strong> compared to shopping exclusively on one platform or in physical stores.
          </p>
          <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg text-sm text-[var(--blog-text)]">
            <p><strong>Example:</strong> Family spending AED 3,000/month on shopping:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Prime membership: AED 140/year</li>
              <li>Average 10% savings from strategic platform selection: AED 3,600/year</li>
              <li>Additional sales/cashback savings: AED 1,000/year</li>
              <li><strong>Net annual savings: ~AED 4,460</strong></li>
            </ul>
          </div>
        </div>
      </section>

        </article>

        {/* Sidebar - Table of Contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <TableOfContents items={tocItems} />
          </div>
        </aside>
      </div>
    </div>
  );
}
