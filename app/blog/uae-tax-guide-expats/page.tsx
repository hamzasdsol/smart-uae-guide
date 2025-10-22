import Link from "next/link";

export const metadata = {
  title: "UAE Tax Guide for Expats 2025: VAT, Corporate Tax & Tax-Free Benefits",
  description: "Complete UAE tax guide for expats. Understand VAT, new corporate tax, tax-free salary benefits, and how UAE taxation affects your finances.",
};

export default function UAETaxGuideExpatsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="min-w-0">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UAE Tax Guide for Expats 2025: Everything You Need to Know
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: January 2025 • 10 min read
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">UAE Taxation Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The UAE remains one of the world&apos;s most tax-friendly jurisdictions for individuals. There is <strong>no personal income tax</strong> on salaries, making it a highly attractive destination for expats seeking to maximize savings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Taxes in UAE</h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Income Tax</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Rate: 0%</strong></p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>No tax on employment salaries and wages</li>
                <li>No tax on rental income</li>
                <li>No tax on investment income for individuals</li>
                <li>No capital gains tax on personal investments</li>
                <li>No inheritance or estate tax</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Value Added Tax (VAT)</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Rate: 5%</strong> (Introduced January 2018)</p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Applied to most goods and services</li>
                <li>Residential rent is zero-rated (0% VAT)</li>
                <li>Healthcare and education are exempt</li>
                <li>International travel tickets are zero-rated</li>
                <li>Tourists can claim VAT refunds on purchases</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Tax</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Rate: 9%</strong> (Effective June 2023)</p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Applies to business profits above AED 375,000</li>
                <li>Does NOT apply to employment income</li>
                <li>Freelancers and sole traders may be affected</li>
                <li>Free zone companies may have different rates</li>
                <li>First AED 375,000 of profits is tax-free</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Municipality Tax</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Rate: 5-10%</strong> on hotel/restaurant bills</p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Dubai: 10% municipality fee + 10% service charge + 5% VAT</li>
                <li>Abu Dhabi: 6% tourism fee + 4% municipality tax + 5% VAT</li>
                <li>Applies to hotels, restaurants, and entertainment venues</li>
                <li>Total bill markup can reach 25-30%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax-Free Salary Benefits</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="text-md font-semibold text-gray-900 mb-3">What This Means for Your Salary</h3>
            <p className="text-gray-700 text-sm mb-3">
              With 0% personal income tax, your take-home salary is significantly higher compared to other countries:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Salary (AED/month)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual (AED)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tax in UK (~30%)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">UAE Take-Home</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">10,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">120,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">-36,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">120,000 (100%)</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">20,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">240,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">-72,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">240,000 (100%)</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">30,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">360,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">-108,000</td>
                    <td className="px-4 py-3 text-sm text-gray-700">360,000 (100%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Home Country Tax Obligations</h2>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
            <h4 className="text-md font-semibold text-gray-900 mb-3">Important Considerations</h4>
            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
              <li><strong>US Citizens:</strong> Must still file US tax returns and report worldwide income (FATCA compliance required)</li>
              <li><strong>UK Expats:</strong> Become non-resident after working abroad for full tax year; no UK tax on foreign income</li>
              <li><strong>European Citizens:</strong> Tax residency rules vary by country; check double taxation treaties</li>
              <li><strong>Indian Citizens:</strong> Considered non-resident if abroad 182+ days; UAE income not taxed in India</li>
              <li><strong>Canadian Citizens:</strong> Must sever residential ties to become non-resident; consult tax advisor</li>
            </ul>
          </div>
        </section>

        <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The UAE&apos;s 0% personal income tax remains its biggest attraction for expats. With proper planning, you can save 30-50% more of your salary compared to high-tax countries. The 5% VAT and new corporate tax have minimal impact on individual employees.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Key considerations: Understand your home country&apos;s tax residency rules, keep UAE employment contracts showing 183+ days presence, and consult a tax advisor if you have complex investments or business interests. The tax savings can accelerate wealth building significantly over a multi-year UAE stint.
          </p>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/how-much-salary-comfortable-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                How Much Salary Is Enough to Live Comfortably in Dubai?
              </Link>
            </li>
            <li>
              <Link href="/blog/understanding-uae-budget-planning" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Understanding UAE Budget Planning
              </Link>
            </li>
            <li>
              <Link href="/blog/best-savings-accounts-uae" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Best Savings Accounts in UAE
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
