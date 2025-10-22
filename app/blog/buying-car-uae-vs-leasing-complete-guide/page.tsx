import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Car, DollarSign, TrendingDown, Shield, Calculator, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Buying vs Leasing a Car in UAE: Complete Cost Comparison 2025",
  description: "Should you buy or lease a car in UAE? Detailed comparison of costs, benefits, insurance, maintenance, and depreciation to help you decide.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "buying", label: "Buying a Car" },
  { id: "leasing", label: "Leasing a Car" },
  { id: "cost-comparison", label: "Cost Comparison" },
  { id: "factors", label: "Decision Factors" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function BuyingVsLeasingCarUAEPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Buying vs Leasing a Car in UAE: Complete Cost Comparison 2025
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: January 2025 | 13 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buy or Lease? Making the Right Choice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the biggest decisions expats face in UAE is whether to buy or lease a car. Both options have distinct advantages and costs. This comprehensive guide breaks down all financial aspects to help you make an informed decision.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Quick answer:</strong> If you&apos;re staying 3+ years and drive over 15,000 km/year, buying is usually cheaper. For shorter stays or lower mileage, leasing offers flexibility and convenience.
            </p>
          </section>

          <section id="buying" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying a Car in UAE</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Initial & Ongoing Costs</h3>
              </div>

              <div className="overflow-x-auto mb-4">
                <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cost Item</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Budget Car</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Mid-Range Car</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Luxury Car</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Purchase Price</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 35,000-50,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 80,000-120,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 200,000-400,000</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Registration & Insurance (Year 1)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 3,500-4,500</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 5,000-7,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 10,000-15,000</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Annual Insurance (Years 2+)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 2,000-3,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 3,500-5,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 7,000-12,000</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Maintenance (per year)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 2,000-3,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 3,000-5,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 6,000-10,000</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Fuel (15,000 km/year)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 3,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 4,500</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 6,000</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Salik & Parking</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 1,500</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 2,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 2,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Advantages of Buying
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>No mileage restrictions - drive as much as you want</li>
                <li>Build equity - car is yours to sell when leaving UAE</li>
                <li>Freedom to modify and personalize</li>
                <li>Lower long-term cost if keeping 3+ years</li>
                <li>No monthly payment stress after initial purchase</li>
                <li>Can choose used cars for even lower costs</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Disadvantages of Buying
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Large upfront capital required (AED 35,000-400,000)</li>
                <li>Depreciation loss (20-30% in first year, 40-50% over 3 years)</li>
                <li>Responsible for all maintenance and repairs</li>
                <li>Hassle of selling when leaving UAE</li>
                <li>Insurance, registration renewal burden</li>
                <li>Risk of unexpected repair costs</li>
              </ul>
            </div>
          </section>

          <section id="leasing" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leasing a Car in UAE</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Lease Cost Structure</h3>
              </div>

              <div className="overflow-x-auto mb-4">
                <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Car Category</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Daily Rate</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Monthly Rate</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Economy (Kia Picanto, Nissan Sunny)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 50-70</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 1,200-1,500</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 14,400-18,000</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Compact (Toyota Yaris, Honda City)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 80-100</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 1,800-2,200</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 21,600-26,400</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Mid-Size (Toyota Camry, Honda Accord)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 100-130</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 2,200-2,800</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 26,400-33,600</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">SUV (Nissan X-Trail, Toyota Fortuner)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 120-160</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 2,500-3,500</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 30,000-42,000</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                      <td className="px-4 py-3 text-sm text-gray-700">Luxury (BMW, Mercedes, Range Rover)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 200-400</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 4,000-8,000</td>
                      <td className="px-4 py-3 text-sm text-gray-700">AED 48,000-96,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 mt-3">
                <strong>Note:</strong> Most leases include insurance, registration, and basic maintenance. Mileage typically limited to 2,500-3,000 km/month (30,000-36,000 km/year).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Advantages of Leasing
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>No large upfront payment - just security deposit</li>
                  <li>Insurance and registration included</li>
                  <li>Maintenance covered (varies by contract)</li>
                  <li>Easy to upgrade or change cars</li>
                  <li>No depreciation risk</li>
                  <li>Simple process when leaving UAE</li>
                  <li>Always drive newer cars</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  Disadvantages of Leasing
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>Higher total cost over 3+ years</li>
                  <li>Mileage restrictions (extra AED 0.50-1.50/km)</li>
                  <li>Monthly payment commitment</li>
                  <li>No ownership or equity building</li>
                  <li>Damage penalties at return</li>
                  <li>Cannot customize or modify</li>
                  <li>Security deposit required (AED 1,500-5,000)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="cost-comparison" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3-Year Cost Comparison</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Example: Mid-Range Sedan (Toyota Camry)</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Buying Option:</h4>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex justify-between"><span>Purchase price</span><span>AED 100,000</span></div>
                    <div className="flex justify-between"><span>Insurance (Year 1)</span><span>AED 5,000</span></div>
                    <div className="flex justify-between"><span>Insurance (Years 2-3)</span><span>AED 8,000</span></div>
                    <div className="flex justify-between"><span>Maintenance (3 years)</span><span>AED 12,000</span></div>
                    <div className="flex justify-between"><span>Fuel (45,000 km total)</span><span>AED 13,500</span></div>
                    <div className="flex justify-between"><span>Salik & Parking</span><span>AED 6,000</span></div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span><strong>Total spent</strong></span><span><strong>AED 144,500</strong></span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Less: Resale value (50%)</span><span>-AED 50,000</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                      <span>Net 3-year cost</span><span>AED 94,500</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Average monthly cost</span><span>AED 2,625</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Leasing Option:</h4>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex justify-between"><span>Monthly lease (AED 2,500 x 36)</span><span>AED 90,000</span></div>
                    <div className="flex justify-between"><span>Security deposit (refundable)</span><span>AED 3,000</span></div>
                    <div className="flex justify-between"><span>Fuel (45,000 km total)</span><span>AED 13,500</span></div>
                    <div className="flex justify-between"><span>Salik & Parking</span><span>AED 6,000</span></div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span><strong>Total spent</strong></span><span><strong>AED 112,500</strong></span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Less: Security deposit return</span><span>-AED 3,000</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                      <span>Net 3-year cost</span><span>AED 109,500</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Average monthly cost</span><span>AED 3,042</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-900 font-semibold mb-2">Verdict: Buying is AED 15,000 cheaper over 3 years</p>
                  <p className="text-gray-700 text-sm">
                    However, leasing provides convenience, includes maintenance, and requires no AED 100,000 upfront investment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="factors" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Decision Factors</h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">Choose BUYING if:</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Staying in UAE for 3+ years</li>
                  <li>You have upfront capital available (AED 40,000-120,000)</li>
                  <li>You drive over 15,000 km per year</li>
                  <li>You want ownership and asset building</li>
                  <li>You&apos;re okay managing insurance/maintenance</li>
                  <li>You want flexibility to modify the car</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">Choose LEASING if:</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Staying in UAE for 1-2 years only</li>
                  <li>You prefer low upfront costs</li>
                  <li>You drive under 15,000 km per year</li>
                  <li>You want hassle-free maintenance included</li>
                  <li>You like driving newer cars regularly</li>
                  <li>You want flexibility to leave UAE easily</li>
                  <li>Your employer provides car allowance (monthly payment easier)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                For long-term residents (3+ years) with available capital, buying a car is 15-20% cheaper and builds equity through resale value. Budget AED 50,000-120,000 upfront plus AED 700-1,200/month in running costs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For short-term expats (1-2 years) or those preferring convenience, leasing makes sense despite higher total cost. Monthly rates start from AED 1,200 for economy cars with insurance and maintenance included. The key is matching your choice to your UAE timeline and driving needs.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/uae-driving-license-complete-guide-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    UAE Driving License Guide 2025
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dubai-metro-guide-zones-tickets-nol-card" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Dubai Metro Guide: Zones, Tickets & NOL Card
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-much-salary-comfortable-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    How Much Salary Is Enough to Live Comfortably in Dubai?
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </article>

        <aside className="hidden lg:block">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  );
}
