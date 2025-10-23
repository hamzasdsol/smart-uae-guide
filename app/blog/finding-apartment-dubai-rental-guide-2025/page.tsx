import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Home, Search, FileText, DollarSign, Shield, Key } from "lucide-react";

export const metadata = {
  title: "Finding an Apartment in Dubai: Complete Rental Guide 2025",
  description: "Expert guide to renting in Dubai. Popular neighborhoods, rental costs, negotiation strategies, Ejari registration, and tenant rights explained.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "rental-costs", label: "Rental Costs by Area" },
  { id: "finding-process", label: "How to Find Apartments" },
  { id: "viewing-tips", label: "Viewing & Inspection" },
  { id: "negotiation", label: "Negotiation Strategies" },
  { id: "contracts", label: "Contracts & Ejari" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function FindingApartmentDubaiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Finding an Apartment in Dubai: Complete Rental Guide 2025
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: October 2025 | 15 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dubai Rental Market Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai&apos;s rental market is competitive, with most leases requiring 1-4 cheque payments upfront. Understanding the process, negotiation tactics, and legal requirements will help you secure the best deal and avoid common pitfalls.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
              <h3 className="text-md font-semibold text-gray-900 mb-2">Key Facts:</h3>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>Rent paid annually in 1-4 cheques (negotiable)</li>
                <li>Security deposit: 5-10% of annual rent (refundable)</li>
                <li>Agency commission: 5% of annual rent (one-time)</li>
                <li>DEWA connection: AED 2,000 deposit (refundable)</li>
                <li>Ejari registration: AED 220 (mandatory)</li>
              </ul>
            </div>
          </section>

          <section id="rental-costs" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rental Costs by Popular Area</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Area</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Studio</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">1BR</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">2BR</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">3BR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Dubai Marina</td>
                    <td className="px-4 py-3 text-sm text-gray-700">55-70K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">75-95K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">110-150K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">160-220K</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Downtown Dubai</td>
                    <td className="px-4 py-3 text-sm text-gray-700">60-80K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">80-100K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">130-180K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">180-250K</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Business Bay</td>
                    <td className="px-4 py-3 text-sm text-gray-700">45-60K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">55-75K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">85-120K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">120-160K</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">JVC/JVT</td>
                    <td className="px-4 py-3 text-sm text-gray-700">30-40K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">45-60K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">65-85K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">90-120K</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Discovery Gardens</td>
                    <td className="px-4 py-3 text-sm text-gray-700">28-38K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">35-45K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">50-65K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">75-95K</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">International City</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20-28K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">25-35K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">40-55K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">60-80K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="finding-process" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Find Apartments</h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Online Portals</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside mb-3">
                  <li><strong>Property Finder:</strong> Largest database, verified listings, direct landlord option</li>
                  <li><strong>Bayut:</strong> User-friendly, good filters, agent ratings</li>
                  <li><strong>Dubizzle:</strong> Mix of agents and landlords, negotiable prices</li>
                  <li><strong>Facebook Groups:</strong> Direct from landlords, good deals, Dubai Expats groups</li>
                </ul>
                <p className="text-sm text-gray-600"><strong>Tip:</strong> Search multiple platforms daily - good units rent within 24-48 hours</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Real Estate Agencies</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm mb-3">
                  <li><strong>Pros:</strong> Access to more properties, handle paperwork, can negotiate on your behalf</li>
                  <li><strong>Cons:</strong> 5% commission fee, may pressure you to decide quickly</li>
                  <li><strong>Top agencies:</strong> Allsopp & Allsopp, Hamptons, Better Homes, Haus & Haus</li>
                </ul>
                <p className="text-sm text-gray-600"><strong>Tip:</strong> Commission is paid by tenant, but often negotiable or split with landlord</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Direct from Landlords</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>No commission fee - save 5% of annual rent</li>
                  <li>More flexible negotiation on terms</li>
                  <li>Building notice boards and security guards often know vacancies</li>
                  <li>Walk around desired neighborhoods looking for &quot;To Let&quot; signs</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="viewing-tips" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Viewing & Inspection Checklist</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3">What to Check During Viewing:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interior:</h4>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>AC units working (test all rooms)</li>
                    <li>Water pressure and hot water</li>
                    <li>Kitchen appliances functional</li>
                    <li>Cabinets and wardrobes condition</li>
                    <li>Windows and doors close properly</li>
                    <li>No water damage or mold</li>
                    <li>Power outlets in all rooms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Building & Amenities:</h4>
                  <ul className="space-y-1 text-gray-700 list-disc list-inside">
                    <li>Lift working and well-maintained</li>
                    <li>Gym and pool condition (if applicable)</li>
                    <li>Parking space allocated and secure</li>
                    <li>Security and reception service</li>
                    <li>Garbage collection system</li>
                    <li>Building cleanliness overall</li>
                    <li>Noise levels (visit at different times)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h4 className="text-md font-semibold text-gray-900 mb-2">Questions to Ask:</h4>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>What&apos;s included? (maintenance, chiller, gas, parking)</li>
                <li>How many cheques required? (negotiate for more if possible)</li>
                <li>When is the unit available?</li>
                <li>What&apos;s the notice period for termination?</li>
                <li>Are pets allowed?</li>
                <li>What repairs will landlord do before move-in?</li>
                <li>Service charge amount and what it covers</li>
              </ul>
            </div>
          </section>

          <section id="negotiation" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Negotiation Strategies</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-gray-700" />
                <h3 className="text-md font-semibold text-gray-900">10 Negotiation Tips</h3>
              </div>
              <ol className="space-y-3 text-gray-700 text-sm list-decimal list-inside">
                <li><strong>Research comparable rents:</strong> Check 3-5 similar units in the area to know fair price</li>
                <li><strong>Point out flaws:</strong> Old appliances, needed repairs = leverage for discount</li>
                <li><strong>Show financial stability:</strong> Salary certificate, bank statements build trust</li>
                <li><strong>Offer more cheques:</strong> Landlords prefer 4 cheques over 1 - use as bargaining chip</li>
                <li><strong>Long-term commitment:</strong> Offer 2-year contract for 5-10% discount</li>
                <li><strong>Ask about vacancy period:</strong> Units empty 2+ months = desperate landlord</li>
                <li><strong>Request repairs included:</strong> Repainting, AC servicing, deep cleaning</li>
                <li><strong>Negotiate commission:</strong> Ask landlord to pay 50% or all of agency fee</li>
                <li><strong>Lower security deposit:</strong> Ask for 5% instead of 10%</li>
                <li><strong>Be ready to walk away:</strong> Shows you&apos;re serious, often brings offers down</li>
              </ol>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h4 className="text-md font-semibold text-gray-900 mb-2">Realistic Savings</h4>
              <p className="text-gray-700 text-sm mb-2">
                In current market (2025), expect to negotiate:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>5-10% off asking price for units available 2+ months</li>
                <li>3-5% off for immediate availability</li>
                <li>Free maintenance or repairs worth AED 2,000-5,000</li>
                <li>Extra cheques (e.g., 4 cheques instead of 2)</li>
                <li>Splitting agency commission 50/50</li>
              </ul>
            </div>
          </section>

          <section id="contracts" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contracts & Ejari Registration</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Tenancy Contract Essentials</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Standard contract includes:</p>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li>Landlord and tenant details with Emirates ID</li>
                <li>Property address and unit number</li>
                <li>Annual rent amount</li>
                <li>Payment schedule (number of cheques and dates)</li>
                <li>Security deposit amount</li>
                <li>Contract start and end dates (usually 1 year)</li>
                <li>Maintenance responsibilities</li>
                <li>Notice period for termination (typically 90 days)</li>
                <li>Renewal terms and rent increase limits</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Ejari Registration (Mandatory)</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Ejari is Dubai&apos;s official tenancy contract registration system. Required for DEWA, visas, and legal protection.
              </p>
              <div className="space-y-3 text-gray-700 text-sm">
                <div>
                  <p className="font-semibold mb-1">Cost:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Registration: AED 220 (including knowledge fee & innovation fee)</li>
                    <li>Typing center service: AED 100-200</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Required Documents:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Original tenancy contract</li>
                    <li>Landlord & tenant Emirates IDs</li>
                    <li>Passport copies with residence visa</li>
                    <li>Title deed copy (from landlord)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Timeline:</p>
                  <p>Usually completed same day at typing centers near RTA or DEWA offices</p>
                </div>
              </div>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Finding an apartment in Dubai requires 2-4 weeks of active searching, budget AED 10,000-15,000 upfront (first cheque + deposit + commission + DEWA), and strong negotiation skills to secure fair pricing. Marina and Downtown command premium rents (AED 80,000-180,000 for 2BR) while JVC and Discovery Gardens offer family-friendly options under AED 85,000.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Key success factors: search daily on multiple platforms, view at least 5-10 units, negotiate firmly (aim for 5-10% off), inspect thoroughly, and ensure Ejari registration is completed before paying full deposit. Don&apos;t rush - the perfect unit will come, and negotiation power increases the longer a unit sits empty.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/best-areas-dubai" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Best Areas to Live in Dubai
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dubai-neighborhoods-comparison-where-to-live" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Dubai Neighborhoods Comparison
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-much-salary-comfortable-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    How Much Salary Is Enough to Live in Dubai?
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
