import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Essential Digital Tools & Apps for UAE Expats in 2025",
  description: "Must-have apps and digital tools that make expat life easier in the UAE. From government services to food delivery, banking, and transportation.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "government-apps", label: "Government & Official Apps" },
  { id: "payment-banking", label: "Payment & Banking Apps" },
  { id: "transportation", label: "Transportation & Mobility" },
  { id: "food-delivery", label: "Food Delivery & Groceries" },
  { id: "shopping", label: "Shopping & E-commerce" },
  { id: "utilities", label: "Utilities & Services" },
  { id: "lifestyle", label: "Lifestyle & Entertainment" },
  { id: "productivity", label: "Productivity & Communication" },
  { id: "must-have-setup", label: "Must-Have Setup Checklist" }
];

export default function DigitalToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[var(--blog-heading)] mb-4">
              Essential Digital Tools & Apps for UAE Expats in 2025
            </h1>
            <p className="text-[var(--blog-text-light)] text-lg">
              Complete guide to the must-have apps that simplify everyday life in the Emirates
            </p>
          </header>

      <section id="introduction" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-4">Introduction</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          Living in the UAE as an expat has never been more convenient, thanks to a robust ecosystem of digital tools and mobile applications. From renewing your Emirates ID to ordering groceries, paying bills, or booking a ride—there&apos;s an app for virtually everything.
        </p>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          However, with hundreds of apps available, it can be overwhelming to figure out which ones are truly essential. This guide cuts through the noise and highlights the most important digital tools you&apos;ll need to navigate life in the UAE efficiently.
        </p>
        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg my-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Why This Matters</h3>
          <p className="text-[var(--blog-text)] text-sm">
            The UAE is one of the world&apos;s most digitally advanced nations. Having the right apps installed not only saves time but also helps you access government services, make payments, and stay connected with the local ecosystem seamlessly.
          </p>
        </div>
      </section>

      <section id="government-apps" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Government & Official Apps</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-6">
          These apps are non-negotiable for any UAE resident. They provide access to critical government services and documentation.
        </p>

        <div className="space-y-6">
          {/* App 1 */}
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--blog-heading)]">UAE PASS</h3>
                <p className="text-[var(--accent-primary)] font-semibold mt-1">Essential - Digital Identity</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[var(--blog-text-light)]">Rating</p>
                <p className="text-[var(--blog-text)] font-semibold">⭐ 4.5/5</p>
              </div>
            </div>

            <p className="text-[var(--blog-text)] leading-relaxed mb-4">
              UAE PASS is your digital identity for accessing over 5,000 government and private services. It&apos;s the cornerstone of digital life in the UAE.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-[var(--blog-text)] text-sm">
                <li>Digital Emirates ID access (no need to carry physical card)</li>
                <li>Sign government documents electronically</li>
                <li>Access Federal Authority services (GDRFA, MOI, etc.)</li>
                <li>Integration with MOHRE, HAAD, and other entities</li>
                <li>Secure biometric authentication</li>
              </ul>
            </div>

            <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg">
              <p className="text-xs text-[var(--blog-text-light)] mb-1">Download</p>
              <p className="text-[var(--blog-text)] text-sm">iOS App Store | Google Play Store</p>
            </div>
          </div>

          {/* App 2 */}
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--blog-heading)]">ICP Smart Services (Dubai Police)</h3>
                <p className="text-[var(--accent-primary)] font-semibold mt-1">Essential - Dubai Residents</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[var(--blog-text-light)]">Rating</p>
                <p className="text-[var(--blog-text)] font-semibold">⭐ 4.3/5</p>
              </div>
            </div>

            <p className="text-[var(--blog-text)] leading-relaxed mb-4">
              Official Dubai Police app for traffic fines, vehicle registration, and police services.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-[var(--blog-text)] text-sm">
                <li>Check and pay traffic fines instantly</li>
                <li>Vehicle registration renewal</li>
                <li>Report traffic accidents</li>
                <li>Lost and found services</li>
                <li>Apply for police clearance certificates</li>
                <li>Pay parking fines</li>
              </ul>
            </div>

            <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg">
              <p className="text-xs text-[var(--blog-text-light)] mb-1">Download</p>
              <p className="text-[var(--blog-text)] text-sm">iOS App Store | Google Play Store</p>
            </div>
          </div>

          {/* App 3 */}
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--blog-heading)]">AMER (GDRFA Dubai)</h3>
                <p className="text-[var(--accent-primary)} font-semibold mt-1">Essential - Visa Services</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[var(--blog-text-light)]">Rating</p>
                <p className="text-[var(--blog-text)] font-semibold">⭐ 4.1/5</p>
              </div>
            </div>

            <p className="text-[var(--blog-text)] leading-relaxed mb-4">
              General Directorate of Residency and Foreigners Affairs (GDRFA) app for visa and residency services in Dubai.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-[var(--blog-text)] text-sm">
                <li>Visa status check and tracking</li>
                <li>Entry permit applications</li>
                <li>Residence visa renewals</li>
                <li>E-channel registration (fast immigration)</li>
                <li>Pay visa fees online</li>
                <li>Book typing center appointments</li>
              </ul>
            </div>

            <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg">
              <p className="text-xs text-[var(--blog-text-light)] mb-1">Download</p>
              <p className="text-[var(--blog-text)] text-sm">iOS App Store | Google Play Store</p>
            </div>
          </div>

          {/* App 4 */}
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--blog-heading)]">DEWA (Dubai Electricity & Water Authority)</h3>
                <p className="text-[var(--accent-primary)] font-semibold mt-1">Essential - Dubai Utilities</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[var(--blog-text-light)]">Rating</p>
                <p className="text-[var(--blog-text)] font-semibold">⭐ 4.4/5</p>
              </div>
            </div>

            <p className="text-[var(--blog-text)] leading-relaxed mb-4">
              Manage all your electricity and water services in Dubai through this comprehensive utility app.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-[var(--blog-text)] text-sm">
                <li>View and pay DEWA bills instantly</li>
                <li>Monitor electricity and water consumption</li>
                <li>Request new connections or disconnections</li>
                <li>Report outages and technical issues</li>
                <li>Set up payment reminders</li>
                <li>Access billing history and analytics</li>
              </ul>
            </div>

            <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg">
              <p className="text-xs text-[var(--blog-text-light)] mb-1">Download</p>
              <p className="text-[var(--blog-text)] text-sm">iOS App Store | Google Play Store</p>
            </div>
          </div>
        </div>
      </section>

      <section id="payment-banking" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Payment & Banking Apps</h2>

        <div className="space-y-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Apple Pay / Google Pay / Samsung Pay</h3>
            <p className="text-[var(--blog-text)] leading-relaxed mb-4">
              Contactless payment is ubiquitous in the UAE. Almost all merchants accept tap-to-pay, making mobile wallets essential.
            </p>
            <p className="text-[var(--blog-text-light)] text-sm">
              <strong>Pro tip:</strong> Link your UAE credit cards to your mobile wallet for seamless payments at malls, restaurants, taxis, and even street vendors.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Bank Mobile Apps</h3>
            <p className="text-[var(--blog-text)] leading-relaxed mb-4">
              Download your bank&apos;s official app (Emirates NBD, ADCB, FAB, Mashreq, etc.). UAE banks offer world-class digital banking:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--blog-text)] text-sm ml-4">
              <li>Instant fund transfers (local and international)</li>
              <li>Mobile check deposits</li>
              <li>Credit card management and payments</li>
              <li>Investment and trading platforms</li>
              <li>Bill payments (DEWA, Etisalat, du, Salik, etc.)</li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Tabby & Postpay</h3>
            <p className="text-[var(--blog-text)] leading-relaxed mb-4">
              Buy now, pay later (BNPL) services are extremely popular in the UAE. Split purchases into 4 interest-free installments.
            </p>
            <p className="text-[var(--blog-text-light)] text-sm">
              Widely accepted at Noon, Amazon.ae, Shein, IKEA, and thousands of other retailers.
            </p>
          </div>
        </div>
      </section>

      <section id="transportation" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Transportation & Mobility</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">App</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Purpose</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Key Features</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Must-Have?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Uber</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Ride-hailing</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Wide coverage, multiple car types, reliable</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">✅ Yes</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Careem</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Ride-hailing + Delivery</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Food delivery, courier, bikes, scooters</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">✅ Yes</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">RTA Dubai</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Public transport</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Metro routes, Nol card top-up, taxi booking</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⚠️ If using metro</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Salik</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Toll payments</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Recharge Salik account, view toll history</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">✅ If you drive</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Parking UAE (mParking)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Parking payments</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Pay for parking zones across UAE, extend time remotely</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">✅ If you drive</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">ADNOC Distribution</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Fuel payments</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Pay for fuel without leaving car, loyalty rewards</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⚠️ Nice to have</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Transportation Pro Tip</h3>
          <p className="text-[var(--blog-text)] text-sm">
            Both Uber and Careem are essential in the UAE. Prices can vary, so check both apps before booking. Careem often has better deals during peak hours, while Uber tends to be cheaper for long-distance trips.
          </p>
        </div>
      </section>

      <section id="food-delivery" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Food Delivery & Groceries</h2>

        <div className="space-y-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Food Delivery Apps</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Talabat</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  The market leader with the widest restaurant selection and fastest delivery times. Best for everyday food delivery.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">✅ Must-have | ⭐ 4.2/5</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Zomato</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  Strong in Dubai and Abu Dhabi. Known for excellent restaurant reviews and competitive prices. Great for discovering new restaurants.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">✅ Recommended | ⭐ 4.1/5</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Deliveroo</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  Premium restaurant selection with high-quality options. Best for special occasions and premium dining.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">⚠️ Nice to have | ⭐ 4.0/5</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Careem NOW</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  Part of the Careem super app. Convenient if you already use Careem for rides. Often has good bundle deals.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">⚠️ Alternative | ⭐ 3.9/5</p>
              </div>
            </div>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-4">Grocery Delivery Apps</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Instashop</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  <strong>Fastest delivery:</strong> 30-minute grocery delivery from Carrefour, Spinneys, Waitrose, and more. Perfect for urgent needs.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">✅ Must-have | ⭐ 4.3/5</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Noon Daily (Noon Minutes)</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  <strong>10-15 minute delivery:</strong> Ultra-fast delivery of essentials. Limited selection but unbeatable speed for common items.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">✅ Recommended | ⭐ 4.2/5</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">Carrefour UAE App</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  <strong>Best for bulk shopping:</strong> Largest selection, competitive prices. Schedule delivery slots. Ideal for weekly grocery runs.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">✅ Must-have | ⭐ 4.1/5</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-2">El Grocer</h4>
                <p className="text-[var(--blog-text)] text-sm mb-2">
                  <strong>Premium organic options:</strong> High-quality fresh produce, organic products, and specialty items. Higher prices but excellent quality.
                </p>
                <p className="text-[var(--blog-text-light)] text-xs">⚠️ Premium option | ⭐ 4.4/5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shopping" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Shopping & E-commerce</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Amazon.ae</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              The go-to for electronics, books, home goods, and more. Amazon Prime offers free same-day or next-day delivery in Dubai and other emirates.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">✅ Essential | Best for: Electronics, books, Amazon brands</p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Noon</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              Regional champion with competitive prices. Excellent for fashion, beauty, and home décor. Noon VIP membership offers free delivery and exclusive deals.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">✅ Essential | Best for: Fashion, beauty, local brands</p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Namshi</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              Fashion-focused platform with a wide selection of international and regional brands. Free returns make it risk-free to try different sizes.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">⚠️ Recommended | Best for: Fashion & footwear</p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Dubizzle</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              Classified marketplace for buying/selling used items. Great for furniture, cars, electronics, and more. Essential when moving in or out of the UAE.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">✅ Essential | Best for: Used goods, cars, rentals</p>
          </div>
        </div>
      </section>

      <section id="utilities" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Utilities & Services</h2>

        <div className="space-y-4">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-2">Etisalat by e& / du Apps</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Manage your mobile and internet services, pay bills, recharge prepaid accounts, and monitor data usage.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-2">Ejari</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Register and renew your tenancy contracts online (Dubai). Required for DEWA connections and visa processing.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-2">Justlife / The Maids</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Book home cleaning, laundry, AC maintenance, and handyman services on-demand. Vetted professionals and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      <section id="lifestyle" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Lifestyle & Entertainment</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">ClassPass / Gympass</h3>
            <p className="text-[var(--blog-text)] text-sm mb-2">
              Access to hundreds of gyms, fitness studios, and wellness centers across the UAE with a single membership.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">Best for: Fitness enthusiasts who like variety</p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Entertainer App</h3>
            <p className="text-[var(--blog-text)] text-sm mb-2">
              Buy-one-get-one-free offers at restaurants, hotels, spas, and attractions. Pays for itself after just a few uses.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">Best for: Frequent diners and social butterflies</p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">OSN+ / Shahid VIP / Netflix</h3>
            <p className="text-[var(--blog-text)] text-sm mb-2">
              Streaming services for Arabic and international content. OSN+ has the best mix of sports, movies, and TV shows in the region.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">Best for: Entertainment and sports</p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Platinumlist</h3>
            <p className="text-[var(--blog-text)] text-sm mb-2">
              Discover events, concerts, theater shows, and activities happening across the UAE. Book tickets directly through the app.
            </p>
            <p className="text-[var(--blog-text-light)] text-xs">Best for: Event discovery and bookings</p>
          </div>
        </div>
      </section>

      <section id="productivity" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Productivity & Communication</h2>

        <div className="space-y-4">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-2">WhatsApp</h3>
            <p className="text-[var(--blog-text)] text-sm">
              <strong>Essential.</strong> WhatsApp is the primary communication channel in the UAE. Used for everything from personal chats to business communications, school updates, and customer service.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-2">Microsoft Teams / Zoom</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Video calling is unblocked in the UAE. Teams and Zoom work perfectly for remote work and video conferences.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-2">Google Maps / Waze</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Both work excellently in the UAE. Google Maps has better POI data; Waze has better real-time traffic updates and speed camera alerts.
            </p>
          </div>
        </div>
      </section>

      <section id="must-have-setup" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Must-Have Setup Checklist</h2>

        <div className="bg-[var(--accent-light)] border border-[var(--blog-border)] rounded-lg p-6">
          <p className="text-[var(--blog-text)] leading-relaxed mb-6">
            Here&apos;s a prioritized checklist for new expats setting up their digital ecosystem in the UAE:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Week 1 - Essential Setup</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>UAE PASS (digital identity)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Your bank&apos;s mobile app</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Apple Pay / Google Pay</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Uber & Careem</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Week 2 - Daily Convenience</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Talabat (food delivery)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Instashop or Carrefour (groceries)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Amazon.ae & Noon (shopping)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>DEWA (if in Dubai)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>ICP Smart Services / AMER</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Month 1+ - Optimization</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Salik & mParking (if you drive)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Etisalat/du app (telecom)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Entertainer App (dining deals)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Dubizzle (marketplace)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Fitness/wellness apps as needed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[var(--blog-border)]">
            <p className="text-sm text-[var(--blog-text-light)]">
              <strong>Pro tip:</strong> Keep all government apps in one folder, all food/grocery apps in another, and all banking/payment apps together for easy access.
            </p>
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
