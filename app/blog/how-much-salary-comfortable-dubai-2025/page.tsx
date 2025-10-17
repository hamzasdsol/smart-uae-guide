import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "How Much Salary Is Enough to Live Comfortably in Dubai in 2025? Real Budget Breakdown",
  description: "Complete guide to salary requirements and living costs in Dubai for 2025. Budget breakdowns for singles, couples, and families.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "realistic-cost-breakdown", label: "Realistic Cost Breakdown" },
  { id: "salary-tier-comparison", label: "Salary Tier Comparison" },
  { id: "single-expat-budget", label: "Single Expat Budget" },
  { id: "couple-budget", label: "Couple Budget" },
  { id: "family-budget", label: "Family Budget" },
  { id: "lifestyle-comparison", label: "Lifestyle Comparison" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "whats-next", label: "What's Next" }
];

export default function SalaryGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Much Salary Is Enough to Live Comfortably in Dubai in 2025? Real Budget Breakdown
            </h1>
            <p className="text-gray-600 text-lg">
              Updated for 2025 with accurate living costs and salary requirements
            </p>
          </header>

      <section id="introduction" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dubai remains one of the most attractive destinations for expats worldwide, offering tax-free salaries, world-class infrastructure, and a vibrant lifestyle. However, the question that weighs on every potential resident&apos;s mind is: &quot;How much do I really need to earn to live comfortably here?&quot;
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The answer isn&apos;t straightforward. Your required salary depends on your lifestyle expectations, family size, housing preferences, and spending habits. In this comprehensive guide, we&apos;ll break down the real costs of living in Dubai in 2025 and provide detailed budget scenarios for singles, couples, and families.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you&apos;re considering a job offer or planning a move, this guide will help you determine if your salary will stretch far enough to enjoy the Dubai lifestyle you envision.
        </p>
      </section>

      <section id="realistic-cost-breakdown" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Realistic Cost Breakdown</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Understanding the major expense categories is essential for budgeting effectively in Dubai. Here&apos;s a detailed breakdown of what you can expect to spend across different lifestyle tiers.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr className="divide-x divide-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Expense Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Budget Range</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Mid-Range</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Accommodation (1BR)</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 3,000 - 5,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 6,000 - 8,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 10,000+</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Accommodation (2BR)</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 5,000 - 7,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 8,000 - 12,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 15,000+</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Utilities (Monthly)</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 400 - 600</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 700 - 1,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 1,200+</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Groceries</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 800 - 1,200</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 1,500 - 2,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 2,500+</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Transportation</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 500 - 800</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 1,500 - 2,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 3,000+</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Dining Out</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 500 - 1,000</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 1,500 - 2,500</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 4,000+</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Entertainment</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 300 - 600</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 1,000 - 1,500</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 2,500+</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">Health Insurance</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 500 - 800</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 1,000 - 1,500</td>
                <td className="px-4 py-3 text-sm text-gray-700">AED 2,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed">
          For more detailed information on food expenses, check out our guide on <a href="/blog/grocery-cost-uae" className="text-blue-600 hover:underline">Grocery Cost in UAE</a>.
        </p>
      </section>

      <section id="salary-tier-comparison" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Salary Tier Comparison</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Let&apos;s visualize how different salary levels translate to lifestyle quality in Dubai. This comparison helps you understand what&apos;s realistic at various income levels.
        </p>

        <div className="space-y-6 mb-6">
          {/* Survival Level */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="mb-3">
              <h3 className="text-md font-semibold text-gray-900">Survival Level (AED 5,000 - 7,000)</h3>
              <p className="text-sm text-gray-600">20% Comfort Level</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-gray-500 h-3 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Shared accommodation</li>
              <li>Public transport only</li>
              <li>Limited savings</li>
            </ul>
          </div>

          {/* Basic Comfort */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="mb-3">
              <h3 className="text-md font-semibold text-gray-900">Basic Comfort (AED 8,000 - 12,000)</h3>
              <p className="text-sm text-gray-600">40% Comfort Level</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-gray-600 h-3 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Studio/1BR in outer areas</li>
              <li>Occasional dining out</li>
              <li>Minimal savings</li>
            </ul>
          </div>

          {/* Comfortable */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="mb-3">
              <h3 className="text-md font-semibold text-gray-900">Comfortable (AED 15,000 - 20,000)</h3>
              <p className="text-sm text-gray-600">60% Comfort Level</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-gray-700 h-3 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>1BR in good location</li>
              <li>Own car</li>
              <li>Regular entertainment</li>
              <li>Moderate savings</li>
            </ul>
          </div>

          {/* Very Comfortable */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="mb-3">
              <h3 className="text-md font-semibold text-gray-900">Very Comfortable (AED 25,000 - 35,000)</h3>
              <p className="text-sm text-gray-600">80% Comfort Level</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-gray-800 h-3 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>2BR in prime location</li>
              <li>Premium lifestyle</li>
              <li>Good savings potential</li>
            </ul>
          </div>

          {/* Luxury */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="mb-3">
              <h3 className="text-md font-semibold text-gray-900">Luxury (AED 40,000+)</h3>
              <p className="text-sm text-gray-600">95% Comfort Level</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-gray-900 h-3 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Premium housing</li>
              <li>Unlimited lifestyle</li>
              <li>Significant savings</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Reference</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Single:</span>
              <span>AED 12,000 - 15,000 for comfortable living</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Couple:</span>
              <span>AED 18,000 - 25,000 for comfortable living</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Family (2 kids):</span>
              <span>AED 30,000 - 40,000 for comfortable living</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="single-expat-budget" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Single Expat Budget</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          As a single professional, you have the most flexibility in managing your expenses. Here&apos;s a realistic monthly budget breakdown for a comfortable lifestyle.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
          <h3 id="single-comfortable" className="text-xl font-semibold text-gray-900 mb-4">Comfortable Single Professional Budget</h3>
          <p className="text-gray-600 mb-4">Required Salary: AED 15,000/month</p>

          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr className="divide-x divide-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Amount (AED)</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">% of Income</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Rent (1BR in JVC/Sports City)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">5,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">37%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Utilities & Internet</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">600</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">4%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Groceries</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,200</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">8%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Transportation (Car payment + fuel)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,800</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">12%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Health Insurance</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">700</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">5%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Dining Out & Social</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">10%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Entertainment & Gym</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">800</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">5%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Mobile & Subscriptions</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">300</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Personal Care & Misc</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">3%</td>
              </tr>
              <tr className="divide-x divide-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">Total Expenses</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">12,900</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">86%</td>
              </tr>
              <tr className="divide-x divide-gray-200 bg-green-50">
                <td className="px-4 py-3 text-sm font-semibold text-green-800">Savings/Buffer</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-800 text-right">2,100</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-800 text-right">14%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
          <h4 className="text-md font-semibold text-gray-900 mb-2">Budget Flexibility Tips</h4>
          <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
            <li>Share accommodation to save AED 2,000-3,000/month</li>
            <li>Use public transport to cut transportation costs by 70%</li>
            <li>Cook at home more often to reduce dining expenses</li>
            <li>Choose apartments with utilities included (DEWA)</li>
          </ul>
        </div>
      </section>

      <section id="couple-budget" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Couple Budget</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Living as a couple in Dubai provides economies of scale but also increases certain expenses. Here&apos;s what you need for a comfortable lifestyle.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
          <h3 id="couple-comfortable" className="text-xl font-semibold text-gray-900 mb-4">Comfortable Couple Budget</h3>
          <p className="text-gray-600 mb-4">Required Combined Salary: AED 22,000/month</p>

          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr className="divide-x divide-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Amount (AED)</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">% of Income</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Rent (2BR in Marina/JLT)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">9,000</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">41%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Utilities & Internet</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">900</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">4%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Groceries</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,800</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">8%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Transportation (1-2 cars)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">11%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Health Insurance (2 people)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,400</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">6%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Dining Out & Social</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">11%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Entertainment & Activities</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,200</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">5%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Mobile & Subscriptions</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Personal Care & Shopping</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">800</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">4%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Travel Fund</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2%</td>
              </tr>
              <tr className="divide-x divide-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">Total Expenses</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">21,100</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">96%</td>
              </tr>
              <tr className="divide-x divide-gray-200 bg-green-50">
                <td className="px-4 py-3 text-sm font-semibold text-green-800">Savings/Buffer</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-800 text-right">900</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-800 text-right">4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed text-sm">
          Note: For better savings potential, aim for AED 25,000-28,000 combined income. This allows for 15-20% savings rate while maintaining a comfortable lifestyle.
        </p>
      </section>

      <section id="family-budget" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Family Budget</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Families face the highest costs in Dubai, primarily due to education and larger accommodation needs. Here&apos;s a realistic breakdown for a family of four.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
          <h3 id="family-comfortable" className="text-xl font-semibold text-gray-900 mb-4">Comfortable Family Budget (2 Adults + 2 Children)</h3>
          <p className="text-gray-600 mb-4">Required Combined Salary: AED 35,000-40,000/month</p>

          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr className="divide-x divide-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Amount (AED)</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">% of Income</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Rent (3BR villa/townhouse)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">12,000</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">34%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Utilities & Internet</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,200</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">3%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">School Fees (2 kids, mid-tier)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">8,000</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">23%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Groceries</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">7%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Transportation (1-2 cars)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">3,000</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">9%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Health Insurance (4 people)</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">7%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Dining Out & Family Activities</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2,000</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">6%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Children&apos;s Activities & Sports</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">4%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Mobile & Subscriptions</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">600</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">2%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Personal Care & Clothing</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,200</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">3%</td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="px-4 py-3 text-sm text-gray-700">Maid/Domestic Help</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">1,500</td>
                <td className="px-4 py-3 text-sm text-gray-700 text-right">4%</td>
              </tr>
              <tr className="divide-x divide-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">Total Expenses</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">36,000</td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">103%</td>
              </tr>
              <tr className="divide-x divide-gray-200 bg-green-50">
                <td className="px-4 py-3 text-sm font-semibold text-green-800">Savings (at AED 40K salary)</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-800 text-right">4,000</td>
                <td className="px-4 py-3 text-sm font-semibold text-green-800 text-right">10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
          <h4 className="text-md font-semibold text-gray-900 mb-2">Education Cost Warning</h4>
          <p className="text-gray-700 text-sm mb-2">
            School fees are the biggest variable for families. The budget above assumes mid-tier international schools at AED 48,000/year per child.
          </p>
          <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
            <li>Budget schools: AED 15,000-30,000/year</li>
            <li>Mid-tier schools: AED 40,000-60,000/year</li>
            <li>Premium schools: AED 70,000-100,000+/year</li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed text-sm">
          Many employers provide education allowances. Negotiate for at least AED 30,000-50,000/year per child when relocating with family.
        </p>
      </section>

      <section id="lifestyle-comparison" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Lifestyle Comparison</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Understanding what different salary levels actually afford you helps set realistic expectations. Here&apos;s what life looks like at various income tiers.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 id="lifestyle-survival" className="text-lg font-semibold text-gray-900 mb-3">Survival Mode: AED 5,000-7,000</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Living Situation</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Shared room or bed space</li>
                  <li>Areas: International City, Satwa</li>
                  <li>Basic amenities only</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Lifestyle</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Public transport/company bus</li>
                  <li>Cooking all meals at home</li>
                  <li>Minimal entertainment</li>
                  <li>No savings possible</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 id="lifestyle-basic" className="text-lg font-semibold text-gray-900 mb-3">Basic Comfort: AED 10,000-12,000</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Living Situation</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Studio or shared 1BR apartment</li>
                  <li>Areas: Discovery Gardens, Deira</li>
                  <li>Basic furnishing</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Lifestyle</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Metro or budget car</li>
                  <li>Occasional dining out (1-2x/month)</li>
                  <li>Limited entertainment</li>
                  <li>5-10% savings possible</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 id="lifestyle-comfortable" className="text-lg font-semibold text-gray-900 mb-3">Comfortable: AED 15,000-20,000</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Living Situation</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>1BR apartment, own space</li>
                  <li>Areas: JVC, Sports City, Barsha</li>
                  <li>Well-furnished, modern amenities</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Lifestyle</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Own car (mid-range sedan)</li>
                  <li>Dining out weekly</li>
                  <li>Gym membership, regular activities</li>
                  <li>15-20% savings rate</li>
                  <li>Annual vacation budget</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 id="lifestyle-very-comfortable" className="text-lg font-semibold text-gray-900 mb-3">Very Comfortable: AED 25,000-35,000</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Living Situation</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>2BR apartment or townhouse</li>
                  <li>Areas: Marina, JBR, Arabian Ranches</li>
                  <li>Premium furnishing and facilities</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Lifestyle</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Premium car or multiple vehicles</li>
                  <li>Regular fine dining</li>
                  <li>Premium gym, multiple hobbies</li>
                  <li>20-30% savings rate</li>
                  <li>International travel 2-3x/year</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 id="lifestyle-luxury" className="text-lg font-semibold text-gray-900 mb-3">Luxury: AED 40,000+</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Living Situation</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Villa or penthouse</li>
                  <li>Areas: Palm Jumeirah, Downtown, Emirates Hills</li>
                  <li>Luxury furnishing, full amenities</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Lifestyle</p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Luxury vehicles</li>
                  <li>Unlimited dining and entertainment</li>
                  <li>Private education for children</li>
                  <li>Domestic help (maid, driver)</li>
                  <li>30%+ savings possible</li>
                  <li>Frequent international travel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="key-takeaways" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">Minimum Viable Salaries for 2025</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li><strong>Single Professional:</strong> AED 8,000 minimum, AED 12,000-15,000 comfortable</li>
              <li><strong>Couple (No Kids):</strong> AED 15,000 minimum, AED 20,000-25,000 comfortable</li>
              <li><strong>Family with 2 Kids:</strong> AED 30,000 minimum, AED 35,000-45,000 comfortable</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">Biggest Cost Factors</h3>
            <ol className="space-y-1 text-gray-700 text-sm list-decimal list-inside">
              <li><strong>Housing:</strong> 30-40% of income (highest single expense)</li>
              <li><strong>Education:</strong> AED 15,000-100,000/year per child for families</li>
              <li><strong>Transportation:</strong> Own car adds AED 1,500-3,000/month</li>
              <li><strong>Health Insurance:</strong> Mandatory, AED 500-2,000/person/month</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">Money-Saving Strategies</h3>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Live in emerging areas (Save 30-40% on rent): JVC, Sports City, Dubai South</li>
              <li>Share accommodation initially to build savings</li>
              <li>Use public transport when possible (Metro is excellent)</li>
              <li>Shop at budget supermarkets: Nesto, Viva, West Zone</li>
              <li>Take advantage of happy hours and weekly deals for dining</li>
              <li>Negotiate salary package including housing/education allowance</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">Hidden Costs to Consider</h3>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Security deposits: 5-10% of annual rent upfront</li>
              <li>DEWA (utilities) deposit: AED 2,000-4,000</li>
              <li>Ejari registration: AED 220 + 5% VAT</li>
              <li>Car insurance: AED 1,500-3,000/year</li>
              <li>Salik (toll) charges: AED 4-8/day for commuters</li>
              <li>Annual school fees paid in advance</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">Red Flags in Job Offers</h3>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Salary below AED 8,000 for professionals (unsustainable)</li>
              <li>No health insurance coverage (mandatory by UAE law)</li>
              <li>Accommodation not provided for salaries below AED 12,000</li>
              <li>No clear breakdown of allowances vs. basic salary</li>
              <li>No annual flight allowance for expats</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The 50/30/20 Rule for Dubai</h3>
          <p className="text-gray-700 text-sm mb-3">
            Adapt the classic budgeting rule to Dubai&apos;s context:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900 mb-1">50% - Essentials</p>
              <p className="text-gray-700">Rent, utilities, groceries, transport, insurance</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">30% - Lifestyle</p>
              <p className="text-gray-700">Dining, entertainment, shopping, hobbies</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">20% - Savings</p>
              <p className="text-gray-700">Emergency fund, investments, future goals</p>
            </div>
          </div>
        </div>
      </section>

      <section id="whats-next" className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Next</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Now that you understand the salary requirements and cost structure, here are your next steps to make an informed decision about living in Dubai.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">1. Calculate Your Personal Budget</h3>
            <p className="text-gray-700 text-sm mb-2">
              Use the templates above as a starting point, then customize based on:
            </p>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside ml-4">
              <li>Your specific lifestyle preferences</li>
              <li>Number of family members</li>
              <li>Age of children (if applicable) and school choices</li>
              <li>Preferred neighborhood and commute distance</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">2. Negotiate Your Package</h3>
            <p className="text-gray-700 text-sm mb-2">
              When reviewing job offers, ensure your package includes:
            </p>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside ml-4">
              <li>Clear breakdown of basic salary vs. allowances</li>
              <li>Housing allowance (30-40% of total package)</li>
              <li>Education allowance (if you have children)</li>
              <li>Health insurance for family</li>
              <li>Annual flight tickets</li>
              <li>End of service benefits (gratuity)</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">3. Research Neighborhoods</h3>
            <p className="text-gray-700 text-sm mb-2">
              Visit Dubai if possible, or research these key factors:
            </p>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside ml-4">
              <li>Proximity to your workplace (traffic can be significant)</li>
              <li>Access to metro stations</li>
              <li>Nearby schools (for families)</li>
              <li>Community amenities and facilities</li>
              <li>Retail and grocery options</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-2">4. Build an Emergency Fund</h3>
            <p className="text-gray-700 text-sm">
              Aim to save 3-6 months of expenses before or shortly after moving. This cushion helps you handle unexpected costs and gives you flexibility if you need to change jobs or relocate.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Resources</h3>
          <p className="text-gray-700 text-sm mb-3">
            Explore our other guides to help you plan your Dubai experience:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/blog/grocery-cost-uae" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Complete Grocery Cost Guide for UAE Residents
              </a>
            </li>
            <li>
              <a href="/blog/best-areas-dubai" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Best Areas to Live in Dubai by Budget
              </a>
            </li>
            <li>
              <a href="/blog/dubai-school-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Dubai School Selection Guide for Expat Families
              </a>
            </li>
            <li>
              <a href="/blog/dubai-visa-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Complete Dubai Visa and Residency Guide 2025
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dubai&apos;s cost of living requires careful salary planning. Singles need AED 12,000-15,000 monthly for comfortable living with savings. Couples should aim for AED 20,000-25,000 combined, while families require AED 35,000-40,000 minimum to cover education and housing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The tax-free advantage means your net income often exceeds equivalent positions in other countries. Success in Dubai comes down to realistic budgeting, smart negotiation, and choosing the right neighborhood for your income level.
          </p>
        </div>
      </section>
        </article>

        {/* Sidebar - Table of Contents */}
        <aside className="hidden lg:block">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  );
}
