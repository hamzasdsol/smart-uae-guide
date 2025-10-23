import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { DollarSign, Home, Car, ShoppingCart, GraduationCap, Heart, Zap, Phone, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Monthly Budget Breakdown for Dubai Family 2025 | Smart UAE Guide",
  description: "Detailed monthly budget breakdown for families in Dubai 2025. Understand typical expenses for housing, schools, transportation, groceries, and lifestyle for different family sizes."
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "family-of-four", label: "Family of 4 Budget" },
  { id: "family-of-three", label: "Family of 3 Budget" },
  { id: "couple-no-kids", label: "Couple Without Kids" },
  { id: "housing-costs", label: "Housing Costs" },
  { id: "school-fees", label: "School Fees" },
  { id: "transportation", label: "Transportation" },
  { id: "groceries-food", label: "Groceries & Food" },
  { id: "utilities-bills", label: "Utilities & Bills" },
  { id: "lifestyle-entertainment", label: "Lifestyle & Entertainment" },
  { id: "savings-strategies", label: "Savings Strategies" },
  { id: "bottom-line", label: "Bottom Line" }
];

export default function MonthlyBudgetBreakdownDubaiFamilyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Monthly Budget Breakdown for Dubai Family 2025
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: October 2025 | 14 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding the true cost of living in Dubai is essential for financial planning, whether you&apos;re negotiating a job offer, relocating your family, or already living in the UAE and looking to optimize your budget. Dubai offers an excellent quality of life, but costs can vary dramatically based on lifestyle choices, accommodation type, and family size.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This comprehensive guide provides realistic monthly budget breakdowns for different family configurations in Dubai for 2025. We&apos;ll break down every major expense category from housing and schools to groceries and entertainment, helping you understand exactly how much you need to live comfortably in Dubai while maintaining savings.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Budget Assumptions for 2025
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Housing:</strong> Annual rent divided by 12 for monthly budget planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>School fees:</strong> Annual fees divided by 12 (most schools require 3 payments)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Mid-range lifestyle:</strong> Not luxury but comfortable with occasional dining out</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>One car ownership:</strong> Most budgets assume one family car</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Employer benefits:</strong> Assumes employer provides health insurance and housing allowance</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="family-of-four" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-8 h-8" />
              Family of 4 Budget (Parents + 2 School-Age Children)
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                This budget reflects a typical expat family with two working parents (or one primary earner) and two children in international schools, living in a mid-range neighborhood like JVC, Mirdif, or JLT.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">Expense Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">Monthly Cost (AED)</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">Annual Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Housing (2BR in JVC/Mirdif)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">6,250</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">75,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">School Fees (2 children, mid-tier)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">10,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">120,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">School Bus (2 children)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">12,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Car Payment/Depreciation</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">2,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">24,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Petrol</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">600</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">7,200</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Car Insurance</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">300</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">3,600</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Salik & Parking</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">200</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">2,400</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Groceries & Household</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">3,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">42,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Eating Out & Takeaway</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">2,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">24,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">DEWA (Electricity & Water)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">6,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Chiller/District Cooling</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">600</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">7,200</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Internet & TV</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">400</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">4,800</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Mobile Phones (2 lines)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">300</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">3,600</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Health Insurance (dependents)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">800</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">9,600</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Entertainment & Activities</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">18,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Children Activities & Sports</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,200</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">14,400</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Clothing & Personal Care</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">800</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">9,600</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Annual Flights Home</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">18,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Miscellaneous/Emergency Fund</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">12,000</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">TOTAL MONTHLY</td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-bold text-gray-900">34,450</td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-bold text-gray-900">413,400</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recommended Salary for This Budget</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  With monthly expenses of AED 34,450, you should target a gross household income of <strong>AED 50,000-55,000/month</strong> to live comfortably with savings:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>AED 34,450:</strong> Monthly living expenses</li>
                  <li>• <strong>AED 10,000-12,000:</strong> Savings (20% of gross income)</li>
                  <li>• <strong>AED 3,500-5,000:</strong> Additional buffer for unexpected costs</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="family-of-three" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-8 h-8" />
              Family of 3 Budget (Parents + 1 School-Age Child)
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                A smaller family can reduce costs significantly, especially on school fees, groceries, and housing (1-2BR instead of 3BR).
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">Expense Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">Monthly Cost (AED)</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">Annual Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Housing (1-2BR)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">5,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">60,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">School Fees (1 child)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">5,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">60,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">School Bus (1 child)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">6,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Transportation (car + petrol)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">2,800</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">33,600</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Groceries & Household</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">2,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">30,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Eating Out</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">18,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Utilities (DEWA, Chiller, Internet, Mobile)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">18,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Health Insurance (dependents)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">600</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">7,200</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Entertainment & Activities</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,800</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">21,600</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Clothing & Personal Care</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">600</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">7,200</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Annual Flights Home</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">12,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Miscellaneous</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">800</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">9,600</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">TOTAL MONTHLY</td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-bold text-gray-900">23,600</td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-bold text-gray-900">283,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recommended Salary</h3>
                <p className="text-gray-700 leading-relaxed">
                  Target gross household income: <strong>AED 32,000-35,000/month</strong> to cover expenses plus savings.
                </p>
              </div>
            </div>
          </section>

          <section id="couple-no-kids" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-8 h-8" />
              Couple Without Kids Budget
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Couples without children have the most flexibility with housing and lifestyle choices. This budget assumes mid-range lifestyle in areas like JLT or Business Bay.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">Expense Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">Monthly Cost (AED)</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">Annual Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Housing (1BR in JLT/Business Bay)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">5,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">66,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Transportation (1 car)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">2,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">30,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Groceries & Household</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,800</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">21,600</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Eating Out & Entertainment</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">2,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">30,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Utilities (All Bills)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,200</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">14,400</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Health Insurance (1 dependent)</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">300</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">3,600</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Gym/Fitness</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">600</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">7,200</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Clothing & Personal Care</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">600</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">7,200</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Annual Flights/Vacations</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">1,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">12,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Miscellaneous</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">6,000</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">TOTAL MONTHLY</td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-bold text-gray-900">16,500</td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-bold text-gray-900">198,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recommended Salary</h3>
                <p className="text-gray-700 leading-relaxed">
                  Target gross household income: <strong>AED 22,000-25,000/month</strong> for comfortable living with savings. Single income of AED 18,000-20,000/month is sufficient for couples sharing expenses.
                </p>
              </div>
            </div>
          </section>

          <section id="housing-costs" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Home className="w-8 h-8" />
              Housing Costs Deep Dive
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Housing is typically the largest expense for Dubai families, representing 25-40% of total monthly costs. Choose wisely to balance location, space, and affordability.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Annual Rent by Area (2025)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">Area</th>
                        <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">1BR</th>
                        <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">2BR</th>
                        <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">3BR</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Dubai Marina</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">80,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">130,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">190,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Downtown</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">95,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">160,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">230,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">JLT</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">60,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">95,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">140,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Business Bay</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">70,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">110,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">160,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">JVC</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">48,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">70,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">95,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Mirdif</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">55,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">80,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">110,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Sports City</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">42,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">65,000</td>
                        <td className="border border-gray-300 px-4 py-3 text-right">85,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Housing Costs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Security Deposit:</strong> 5% of annual rent (one-time, refundable)</li>
                  <li><strong>Agency Fee:</strong> 5% of annual rent (one-time, if using agent)</li>
                  <li><strong>DEWA Connection:</strong> AED 2,000 (refundable deposit)</li>
                  <li><strong>Ejari Registration:</strong> AED 215 (annual)</li>
                  <li><strong>Move-in costs:</strong> AED 2,000-5,000 (movers, initial setup)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="school-fees" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-8 h-8" />
              School Fees Deep Dive
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                For families with children, school fees are the second-largest expense after housing. Costs vary dramatically based on curriculum and school prestige.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">School Tier</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">Examples</th>
                      <th className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">Annual Fee Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Budget</td>
                      <td className="border border-gray-300 px-4 py-3">GEMS Modern Academy, Al Mizhar</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">AED 18,000-30,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Mid-Tier</td>
                      <td className="border border-gray-300 px-4 py-3">GEMS Founders, Raffles, JSS</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">AED 45,000-65,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Premium</td>
                      <td className="border border-gray-300 px-4 py-3">JESS, Wellington, DAA</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">AED 70,000-95,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Elite</td>
                      <td className="border border-gray-300 px-4 py-3">DESC, JESS Arabian Ranches, DIA</td>
                      <td className="border border-gray-300 px-4 py-3 text-right">AED 95,000-110,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional School Costs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Registration Fee:</strong> AED 500-2,000 (one-time)</li>
                  <li><strong>School Bus:</strong> AED 4,000-7,000 per child annually</li>
                  <li><strong>Uniforms:</strong> AED 500-1,000 per child annually</li>
                  <li><strong>Books & Supplies:</strong> AED 1,000-2,000 per child annually</li>
                  <li><strong>Extracurricular Activities:</strong> AED 2,000-5,000 per child annually</li>
                  <li><strong>School Trips:</strong> AED 500-2,000 per child annually</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="transportation" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Car className="w-8 h-8" />
              Transportation Deep Dive
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Most Dubai families own at least one car. Transportation costs include car payments or depreciation, insurance, petrol, tolls, and parking.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Monthly Car Ownership Costs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Car Payment/Lease:</strong> AED 1,500-2,500 (mid-range SUV)</li>
                  <li><strong>Depreciation:</strong> AED 1,000-1,500/month (if owned outright)</li>
                  <li><strong>Insurance:</strong> AED 200-400/month (comprehensive)</li>
                  <li><strong>Petrol:</strong> AED 400-800/month (depending on commute)</li>
                  <li><strong>Salik (toll gates):</strong> AED 100-300/month</li>
                  <li><strong>Parking:</strong> AED 50-200/month</li>
                  <li><strong>Maintenance:</strong> AED 200-400/month (averaged)</li>
                  <li><strong>Registration Renewal:</strong> AED 100/month (AED 1,200 annually)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Total: AED 2,550-4,300/month per car</strong>
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Metro Alternative</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  If you live and work along metro lines, you can save significantly:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Monthly Metro Pass:</strong> AED 350 (unlimited Gold class)</li>
                  <li><strong>Careem/Uber (occasional):</strong> AED 300-500/month</li>
                  <li><strong>Total:</strong> AED 650-850/month (75-80% savings vs. car)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="groceries-food" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ShoppingCart className="w-8 h-8" />
              Groceries & Food Deep Dive
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Typical Monthly Grocery Costs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Single Person:</strong> AED 800-1,200/month</li>
                  <li><strong>Couple:</strong> AED 1,500-2,200/month</li>
                  <li><strong>Family of 3:</strong> AED 2,200-3,000/month</li>
                  <li><strong>Family of 4:</strong> AED 3,000-4,000/month</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Eating Out Costs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Budget meal (food court):</strong> AED 25-35 per person</li>
                  <li><strong>Casual restaurant:</strong> AED 50-80 per person</li>
                  <li><strong>Mid-range restaurant:</strong> AED 100-150 per person</li>
                  <li><strong>Fine dining:</strong> AED 200-400+ per person</li>
                  <li><strong>Family takeaway:</strong> AED 80-150</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>Typical family eating out budget:</strong> AED 1,500-2,500/month (4-8 meals out + occasional takeaway)
                </p>
              </div>
            </div>
          </section>

          <section id="utilities-bills" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8" />
              Utilities & Bills Deep Dive
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Monthly Utility Breakdown</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>DEWA (Electricity & Water):</strong> AED 300-700 (varies with AC usage)</li>
                  <li><strong>District Cooling/Chiller:</strong> AED 400-800 (if not included in rent)</li>
                  <li><strong>Internet (Home):</strong> AED 300-500</li>
                  <li><strong>TV Package:</strong> AED 100-200 (optional, or use streaming)</li>
                  <li><strong>Mobile Phones:</strong> AED 100-200 per line</li>
                  <li><strong>Streaming Services:</strong> AED 50-100 (Netflix, etc.)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>Total for 2BR apartment:</strong> AED 1,400-2,000/month
                </p>
              </div>
            </div>
          </section>

          <section id="lifestyle-entertainment" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-8 h-8" />
              Lifestyle & Entertainment
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discretionary Spending</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Gym Membership:</strong> AED 200-600/month per person</li>
                  <li><strong>Children&apos;s Activities:</strong> AED 400-800 per child/month (swimming, football, etc.)</li>
                  <li><strong>Cinema:</strong> AED 40-60 per ticket</li>
                  <li><strong>Theme Parks:</strong> AED 200-400 per person (occasional)</li>
                  <li><strong>Weekend Activities:</strong> AED 200-500 per weekend</li>
                  <li><strong>Clothing & Personal Care:</strong> AED 500-1,000/month</li>
                  <li><strong>Salon/Barber:</strong> AED 100-300/month per person</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="savings-strategies" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Savings Strategies
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10 Ways to Reduce Monthly Costs</h3>
                <ol className="space-y-3 text-gray-700 list-decimal ml-6">
                  <li><strong>Compromise on location:</strong> Save AED 2,000-3,000/month by choosing JVC over Marina</li>
                  <li><strong>Mid-tier schools:</strong> Save AED 1,500-2,500/month vs. premium schools</li>
                  <li><strong>Use public transport:</strong> Save AED 2,000+/month by avoiding car ownership</li>
                  <li><strong>Cook at home:</strong> Save AED 1,000-1,500/month by limiting eating out</li>
                  <li><strong>Shop at budget supermarkets:</strong> Use Carrefour, Lulu, Viva instead of Waitrose/Spinneys</li>
                  <li><strong>Negotiate rent:</strong> Can save AED 200-500/month with good negotiation</li>
                  <li><strong>Bundle utilities:</strong> Get TV+Internet packages for savings</li>
                  <li><strong>Use entertainment discounts:</strong> Entertainer app, credit card offers, Groupon</li>
                  <li><strong>Minimize AC usage:</strong> Save AED 100-200/month on DEWA bills</li>
                  <li><strong>Choose basic insurance:</strong> If healthy, basic health insurance is sufficient</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Potential total savings:</strong> AED 10,000-15,000/month with strategic choices
                </p>
              </div>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Living comfortably in Dubai requires careful budgeting and strategic choices. A family of four needs AED 34,000-40,000/month for mid-range comfortable living including housing, schools, transportation, and lifestyle expenses. The biggest budget drivers are housing (18-25% of income) and school fees (25-30% for families with children). A couple without kids can live comfortably on AED 16,000-20,000/month, while a family of three requires AED 23,000-28,000/month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To maximize savings, prioritize location compromise (JVC vs. Marina saves AED 30,000+ annually), consider mid-tier schools instead of premium options, and minimize transportation costs through metro or car-sharing. Aim to save 15-20% of gross income for long-term financial security. Dubai&apos;s tax-free salaries enable significant savings if you budget wisely and avoid lifestyle inflation. Start by tracking expenses for 2-3 months to understand your actual spending, then optimize the big-ticket items (housing, schools, transportation) where savings potential is greatest.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/how-much-salary-comfortable-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    How Much Salary Is Enough to Live Comfortably in Dubai in 2025?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/saving-money-uae-tips-strategies-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Saving Money in UAE: Tips & Strategies 2025
                  </Link>
                </li>
                <li>
                  <Link href="/blog/finding-apartment-dubai-rental-guide-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Finding an Apartment in Dubai: Complete Rental Guide 2025
                  </Link>
                </li>
                <li>
                  <Link href="/blog/best-international-schools-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Best International Schools in Dubai 2025: Complete Guide
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
