import Link from "next/link";

export const metadata = {
  title: "Dubai Visa Guide 2025: Employment, Family & Residence Visas Explained",
  description: "Complete guide to Dubai visas for expats. Understand employment visas, family sponsorship, costs, documents required, and the application process.",
};

export default function DubaiVisaGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="min-w-0">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dubai Visa Guide 2025: Everything Expats Need to Know
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: October 2025 • 13 min read
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of UAE Residence Visas</h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Employment Visa</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Duration:</strong> 2-3 years | <strong>Cost:</strong> AED 3,000-5,000 (employer-paid)</p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Most common visa for expats working in UAE</li>
                <li>Sponsored by your employer</li>
                <li>Allows family sponsorship if salary meets threshold</li>
                <li>Includes Emirates ID and labor contract</li>
                <li>Renewable as long as employment continues</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Sponsorship Visa</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Duration:</strong> 2-3 years | <strong>Cost:</strong> AED 2,500-4,000 per person</p>
              <p className="text-gray-700 text-sm mb-3"><strong>Minimum Salary Requirements:</strong></p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Spouse only: AED 4,000/month or AED 3,000 + accommodation</li>
                <li>Spouse + 1 child: AED 4,000/month or AED 3,000 + accommodation</li>
                <li>Spouse + 2+ children: AED 5,000-6,000/month or AED 4,000 + accommodation</li>
                <li>Parents: AED 20,000-25,000/month</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Golden Visa</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Duration:</strong> 5 or 10 years | <strong>Cost:</strong> AED 5,000-10,000</p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Long-term residence independent of employment</li>
                <li>Available to investors, entrepreneurs, specialists, students</li>
                <li>No sponsor required after initial qualification</li>
                <li>Can sponsor family members and domestic helpers</li>
                <li>Property investment of AED 2M+ qualifies for 5-year visa</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Employment Visa Process Step-by-Step</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <ol className="space-y-4 text-gray-700 text-sm">
              <li>
                <strong>1. Entry Permit (Inside UAE):</strong> Valid 60 days, allows you to enter UAE and start process. Your employer applies through immigration.
                <br/><span className="text-gray-600">Cost: AED 300-500 | Timeline: 2-5 days</span>
              </li>
              <li>
                <strong>2. Medical Fitness Test:</strong> Required health screening at approved centers (blood test, X-ray, physical exam).
                <br/><span className="text-gray-600">Cost: AED 300-500 | Timeline: 1-2 days</span>
              </li>
              <li>
                <strong>3. Emirates ID Application:</strong> Biometric registration and ID card application at typing center or Amer center.
                <br/><span className="text-gray-600">Cost: AED 270-370 | Timeline: 5-10 days</span>
              </li>
              <li>
                <strong>4. Visa Stamping:</strong> Final residence visa stamp in passport at immigration office or through typing center.
                <br/><span className="text-gray-600">Cost: AED 1,000-2,000 | Timeline: 1-3 days</span>
              </li>
              <li>
                <strong>5. Labor Contract Registration:</strong> Employment contract registered with Ministry of Human Resources.
                <br/><span className="text-gray-600">Cost: Employer bears | Timeline: 2-5 days</span>
              </li>
            </ol>
          </div>

          <p className="text-sm text-gray-600"><strong>Total Timeline:</strong> 2-4 weeks | <strong>Total Cost:</strong> AED 3,000-5,000 (usually employer-paid)</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-md font-semibold text-gray-900 mb-3">For Employment Visa</h3>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>Passport (valid 6+ months)</li>
                <li>Passport-size photographs (white background)</li>
                <li>Degree certificates (attested)</li>
                <li>Previous employment documents</li>
                <li>Offer letter from UAE employer</li>
                <li>Health insurance policy</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-md font-semibold text-gray-900 mb-3">For Family Sponsorship</h3>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>Marriage certificate (attested)</li>
                <li>Birth certificates of children</li>
                <li>Salary certificate (from employer)</li>
                <li>Tenancy contract (Ejari)</li>
                <li>Bank statement (6 months)</li>
                <li>Family&apos;s passport copies</li>
                <li>NOC from current sponsor (if applicable)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-5 mt-4">
            <h4 className="text-md font-semibold text-gray-900 mb-2">Document Attestation</h4>
            <p className="text-gray-700 text-sm mb-2">Foreign documents require attestation chain:</p>
            <ol className="space-y-1 text-gray-700 text-sm list-decimal list-inside">
              <li>Notary public in home country</li>
              <li>Ministry of Foreign Affairs in home country</li>
              <li>UAE Embassy in home country</li>
              <li>Ministry of Foreign Affairs in UAE</li>
            </ol>
            <p className="text-gray-600 text-sm mt-2">Cost: AED 1,000-3,000 per document | Timeline: 2-6 weeks</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Visa Costs Breakdown</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr className="divide-x divide-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Service</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cost (AED)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Who Pays</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Entry Permit</td>
                  <td className="px-4 py-3 text-sm text-gray-700">300-500</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employer</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Medical Test</td>
                  <td className="px-4 py-3 text-sm text-gray-700">300-500</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employee/Employer</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Emirates ID</td>
                  <td className="px-4 py-3 text-sm text-gray-700">270-370</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employee/Employer</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Residence Visa Stamp</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1,000-2,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employer</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Typing Center Fees</td>
                  <td className="px-4 py-3 text-sm text-gray-700">200-400</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employer</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Health Insurance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">600-3,000/year</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Employer (mandatory)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The UAE visa process is straightforward when managed properly. Most employers handle employment visa costs (AED 3,000-5,000), but you&apos;ll likely need to pay for family sponsorship visas yourself (AED 2,500-4,000 per person).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Key considerations: Ensure your salary meets family sponsorship thresholds, budget for document attestation costs, and understand your visa type&apos;s restrictions. The Golden Visa is increasingly accessible and worth exploring for long-term residents and property investors.
          </p>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/complete-expat-setup-guide-uae-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Complete Expat Setup Guide for UAE 2025
              </Link>
            </li>
            <li>
              <Link href="/blog/how-much-salary-comfortable-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                How Much Salary Is Enough to Live Comfortably in Dubai?
              </Link>
            </li>
            <li>
              <Link href="/tourism-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                UAE Tourism Guide: Visa Information for Tourists
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
