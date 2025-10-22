import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { FileText, Clock, DollarSign, CheckCircle, AlertTriangle, MapPin } from "lucide-react";

export const metadata = {
  title: "UAE Driving License Guide 2025: Complete Process for Expats",
  description: "Step-by-step guide to getting your UAE driving license. Transfer procedures, costs, RTA requirements, and driving test tips for all emirates.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "eligibility", label: "Eligibility & Requirements" },
  { id: "license-transfer", label: "License Transfer Process" },
  { id: "new-license", label: "Getting a New License" },
  { id: "costs", label: "Costs Breakdown" },
  { id: "driving-test", label: "Driving Test Tips" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function UAEDrivingLicenseGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              UAE Driving License Guide 2025: Complete Process for Expats
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: January 2025 | 12 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Your UAE Driving License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Obtaining a UAE driving license is essential for expats who want to drive in the Emirates. The process varies depending on whether you&apos;re transferring an existing license or applying for a new one. This comprehensive guide covers everything you need to know.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The good news: If you hold a license from certain countries, you can simply exchange it for a UAE license. Otherwise, you&apos;ll need to complete driving school and pass the RTA test.
            </p>
          </section>

          <section id="eligibility" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility & Requirements</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Basic Requirements
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Minimum age: 18 years for light vehicles, 21 for heavy vehicles</li>
                <li>Valid UAE residence visa</li>
                <li>Emirates ID</li>
                <li>Eye test certificate from approved optician</li>
                <li>No objection certificate from sponsor (if required)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Countries Eligible for Direct Exchange</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Group A (No Test Required):</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>GCC Countries (Saudi, Kuwait, Qatar, Oman, Bahrain)</li>
                    <li>UK, USA, Canada</li>
                    <li>Australia, New Zealand</li>
                    <li>European Union countries</li>
                    <li>Japan, South Korea, Singapore</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Group B (May Require Test):</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>South Africa (requires driving test)</li>
                    <li>India (requires theory & practical test in some emirates)</li>
                    <li>Pakistan (requires full process)</li>
                    <li>Philippines (requires full process)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="license-transfer" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">License Transfer Process (Group A Countries)</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Eye Test</h3>
                    <p className="text-gray-700 text-sm mb-2">Visit approved optician for eye test certificate</p>
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" /> 15 minutes | <DollarSign className="w-4 h-4" /> AED 100-150
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Document Submission</h3>
                    <p className="text-gray-700 text-sm mb-2">Submit documents at RTA customer service center</p>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      <li>Original home country license</li>
                      <li>Passport copy with residence visa</li>
                      <li>Emirates ID</li>
                      <li>Eye test certificate</li>
                      <li>Passport-size photographs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Payment & Collection</h3>
                    <p className="text-gray-700 text-sm mb-2">Pay fees and collect license on same day or within 2-3 days</p>
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" /> 1-3 days | <DollarSign className="w-4 h-4" /> AED 1,050-1,200 total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="new-license" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting a New License (No Eligible License)</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Step</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Registration</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Register at driving school</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 day</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 200-300</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Training File</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Open training file at RTA</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1-2 days</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 200-250</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Theory Classes</td>
                    <td className="px-4 py-3 text-sm text-gray-700">8 theory sessions (traffic rules)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2-3 weeks</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Included</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Theory Test</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Computer-based test (35/35 pass)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 hour</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 200</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Practical Classes</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20-40 lessons (45 min each)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">6-12 weeks</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 2,500-5,000</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Internal Assessment</td>
                    <td className="px-4 py-3 text-sm text-gray-700">School evaluation</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 day</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 150-200</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Parking Test</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Parallel, slope, garage parking</td>
                    <td className="px-4 py-3 text-sm text-gray-700">30 min</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 200</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">Road Test</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Final RTA road test</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20-30 min</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 200 per attempt</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">License Issuance</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Collect license from RTA</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Same day</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <h4 className="text-md font-semibold text-gray-900">Total Cost for New License</h4>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>AED 4,500 - 7,000</strong> depending on number of lessons and test attempts. Budget for 2-4 months of training.
              </p>
            </div>
          </section>

          <section id="costs" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Costs Breakdown</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  License Transfer (Group A)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between"><span>Eye test</span><span>AED 100-150</span></li>
                  <li className="flex justify-between"><span>RTA fees</span><span>AED 350-450</span></li>
                  <li className="flex justify-between"><span>License issuance</span><span>AED 300</span></li>
                  <li className="flex justify-between"><span>Knowledge test (if needed)</span><span>AED 200</span></li>
                  <li className="flex justify-between border-t border-gray-200 pt-2 font-semibold">
                    <span>Total</span><span>AED 1,050-1,200</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  New License (Full Process)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between"><span>Registration & file</span><span>AED 400-550</span></li>
                  <li className="flex justify-between"><span>Theory classes & test</span><span>AED 400</span></li>
                  <li className="flex justify-between"><span>Practical lessons (20-40)</span><span>AED 2,500-5,000</span></li>
                  <li className="flex justify-between"><span>Assessments & tests</span><span>AED 750</span></li>
                  <li className="flex justify-between"><span>License issuance</span><span>AED 300</span></li>
                  <li className="flex justify-between border-t border-gray-200 pt-2 font-semibold">
                    <span>Total</span><span>AED 4,500-7,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="driving-test" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Driving Test Tips for Success</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3">Top 10 Tips to Pass Your RTA Test</h3>
              <ol className="space-y-3 text-gray-700 text-sm list-decimal list-inside">
                <li><strong>Check mirrors constantly:</strong> Every 8-10 seconds, especially before any maneuver</li>
                <li><strong>Signal early:</strong> At least 30 meters before turning or changing lanes</li>
                <li><strong>Speed limit compliance:</strong> Never exceed, even by 1-2 km/h - test fails immediately</li>
                <li><strong>Stop lines:</strong> Always stop completely before white lines at intersections</li>
                <li><strong>Shoulder checks:</strong> Physical head turn when changing lanes or reversing</li>
                <li><strong>Lane discipline:</strong> Stay centered in your lane, don&apos;t drift</li>
                <li><strong>Parking perfection:</strong> Practice parallel, slope, and garage parking extensively</li>
                <li><strong>Calm demeanor:</strong> Examiner looks for confident, smooth driving</li>
                <li><strong>Traffic rules:</strong> Give way to emergency vehicles, pedestrians, and follow priority</li>
                <li><strong>Practice the test route:</strong> Most schools practice on actual RTA test routes</li>
              </ol>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h4 className="text-md font-semibold text-gray-900 mb-2">Common Reasons for Test Failure</h4>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>Speeding (even 1-2 km/h over) - automatic fail</li>
                <li>Not checking mirrors before maneuvers</li>
                <li>Crossing solid white lines</li>
                <li>Not stopping completely at stop signs</li>
                <li>Improper parking technique</li>
                <li>Hesitation at roundabouts</li>
              </ul>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Getting a UAE driving license is straightforward if you&apos;re from an eligible country (1-2 days, AED 1,200). For others, expect 2-4 months of training and AED 4,500-7,000 in costs. The RTA test is strict but fair - focus on mirror checks, speed limits, and smooth driving.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Choose a reputable driving school (Emirates Driving Institute, Galadari, Belhasa), practice diligently, and don&apos;t rush the test. Many expats pass on their second or third attempt. Having a UAE license greatly improves mobility and quality of life in the Emirates.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/buying-car-uae-vs-leasing-complete-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Buying vs Leasing a Car in UAE: Complete Comparison
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dubai-metro-guide-zones-tickets-nol-card" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Dubai Metro Guide: Zones, Tickets & NOL Card
                  </Link>
                </li>
                <li>
                  <Link href="/blog/complete-expat-setup-guide-uae-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Complete Expat Setup Guide for UAE 2025
                  </Link>
                </li>
              </ul>
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
