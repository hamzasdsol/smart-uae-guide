import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Complete Expat Setup Guide for UAE 2025: First Steps for Newcomers",
  description: "Essential checklist for expats moving to UAE. Step-by-step guide covering visa, housing, banking, utilities, and everything you need for a smooth transition.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "pre-arrival", label: "Pre-Arrival Preparation" },
  { id: "week-one", label: "Week 1: Critical Tasks" },
  { id: "week-two", label: "Week 2: Essential Setup" },
  { id: "month-one", label: "Month 1: Settling In" },
  { id: "housing-guide", label: "Finding Housing" },
  { id: "documentation", label: "Important Documents" },
  { id: "cost-breakdown", label: "Initial Cost Breakdown" },
  { id: "common-challenges", label: "Common Challenges & Solutions" },
  { id: "checklist", label: "Complete Setup Checklist" }
];

export default function ExpatSetupGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[var(--blog-heading)] mb-4">
              Complete Expat Setup Guide for UAE 2025: First Steps for Newcomers
            </h1>
            <p className="text-[var(--blog-text-light)] text-lg">
              Everything you need to know to start your UAE journey smoothly and avoid common pitfalls
            </p>
          </header>

      <section id="introduction" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-4">Introduction</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          Moving to the UAE is an exciting adventure, but it can also be overwhelming without proper preparation. From obtaining your residence visa to setting up utilities, there are numerous tasks that need to be completed in a specific order to ensure a smooth transition.
        </p>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          This comprehensive guide breaks down your first three months in the UAE into manageable phases, with clear priorities and timelines. Whether you&apos;re moving to Dubai, Abu Dhabi, or Sharjah, these steps apply across all emirates with minor variations.
        </p>
        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg my-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Quick Overview</h3>
          <p className="text-[var(--blog-text)] text-sm">
            <strong>Timeline:</strong> Most expats complete essential setup within 2-4 weeks. Full settlement (comfortable routine) takes about 3 months. Budget AED 10,000-15,000 for initial setup costs beyond your first month&apos;s rent.
          </p>
        </div>
      </section>

      <section id="pre-arrival" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Pre-Arrival Preparation</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-6">
          Complete these tasks before you land in the UAE to hit the ground running:
        </p>

        <div className="space-y-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">Document Preparation</h3>
            <ul className="space-y-3 text-[var(--blog-text)] text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)] font-bold">1.</span>
                <div>
                  <strong>Educational Certificates:</strong> Get degree certificates attested by your home country&apos;s Ministry of Foreign Affairs and UAE embassy. Required for employment visa processing.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)] font-bold">2.</span>
                <div>
                  <strong>Marriage & Birth Certificates:</strong> If bringing family, attest marriage certificate and children&apos;s birth certificates through the same process.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)] font-bold">3.</span>
                <div>
                  <strong>Passport Validity:</strong> Ensure your passport is valid for at least 6 months. Apply for renewal if close to expiration.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)] font-bold">4.</span>
                <div>
                  <strong>Medical Records:</strong> Bring vaccination records, prescriptions for ongoing medications, and recent medical reports if you have chronic conditions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)] font-bold">5.</span>
                <div>
                  <strong>Driver&apos;s License:</strong> Original license from home country (required for UAE license conversion if eligible).
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">Financial Preparation</h3>
            <ul className="space-y-3 text-[var(--blog-text)] text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)] font-bold">1.</span>
                <div>
                  <strong>Initial Funds:</strong> Bring AED 15,000-25,000 (USD 4,000-7,000) in accessible funds for setup costs.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)] font-bold">2.</span>
                <div>
                  <strong>International Credit Card:</strong> Carry a working credit card for temporary use before opening a UAE bank account.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--accent-primary)} font-bold">3.</span>
                <div>
                  <strong>Digital Payment Setup:</strong> Ensure Apple Pay or Google Pay is configured on your phone.
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">Temporary Accommodation</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              Book hotel or serviced apartment for your first 2-4 weeks while you search for permanent housing.
            </p>
            <div className="bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg text-sm">
              <p className="text-[var(--blog-text)] mb-2"><strong>Recommended Areas:</strong></p>
              <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1 ml-2">
                <li>Dubai: Business Bay, Barsha Heights, JBR (AED 150-300/night)</li>
                <li>Abu Dhabi: Al Reem Island, Khalidiya (AED 120-250/night)</li>
                <li>Sharjah: Al Majaz, Al Khan (AED 80-180/night)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="week-one" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Week 1: Critical Tasks</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-6">
          These tasks are time-sensitive and must be completed in your first week:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Task</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Priority</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Timeline</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Medical Test for Visa</td>
                <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Critical</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Day 1-2</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 300-500</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Emirates ID Application</td>
                <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Critical</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Day 2-3</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 370</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">SIM Card & Phone Number</td>
                <td className="px-4 py-3 text-sm text-[var(--accent-primary)] font-semibold">Critical</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Day 1</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 50-100</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Open Bank Account (Temporary)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)]">High</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Day 3-5</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free-AED 500</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Start Housing Search</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)]">High</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Day 1-7</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Viewing only</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">School Visits (if applicable)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)]">High</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Day 3-7</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Registration fees vary</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Week 1 Pro Tips:</h3>
          <ul className="space-y-2 text-[var(--blog-text)] text-sm">
            <li>Medical test must be done at approved centers (MOHAP, Tasjeel, AMER centers)</li>
            <li>Your employer typically handles visa processing, but you&apos;ll need to visit typing centers and medical facilities</li>
            <li>Get a UAE number immediately - many services require SMS verification</li>
            <li>Download essential apps: UAE PASS, your telecom app (Etisalat/du), Google Maps</li>
          </ul>
        </div>
      </section>

      <section id="week-two" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Week 2: Essential Setup</h2>

        <div className="space-y-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">1. Secure Permanent Housing</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              Most critical decision of your setup. Consider:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--blog-text)] text-sm ml-4">
              <li>Proximity to workplace (30-45 min commute is standard)</li>
              <li>School proximity if you have children</li>
              <li>Community amenities (gym, pool, parks)</li>
              <li>Rent payment structure (1-4 cheques annually)</li>
            </ul>
            <div className="mt-4 bg-[var(--blog-code-bg)] border border-[var(--blog-border)] p-4 rounded-lg">
              <p className="text-xs text-[var(--blog-text-light)] mb-1">Typical Move-In Costs</p>
              <ul className="text-[var(--blog-text)] text-sm space-y-1">
                <li>Security deposit: 5-10% of annual rent</li>
                <li>Agency commission: 5% of annual rent</li>
                <li>First rent payment: 1-4 cheques upfront</li>
                <li>DEWA/utility deposit: AED 2,000-4,000</li>
              </ul>
            </div>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">2. Set Up Utilities</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--blog-heading)] mb-1">Electricity & Water (DEWA in Dubai)</p>
                <p className="text-[var(--blog-text)]">
                  Required documents: Tenancy contract (Ejari), Emirates ID, passport copy. Setup takes 24-48 hours. Download DEWA app for bill payments.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[var(--blog-heading)] mb-1">Internet & TV</p>
                <p className="text-[var(--blog-text)]">
                  Providers: Etisalat (du) or Virgin Mobile. Installation takes 3-7 days. Packages start at AED 300/month.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[var(--blog-heading)] mb-1">Chiller/District Cooling (if applicable)</p>
                <p className="text-[var(--blog-text)]">
                  Some buildings use centralized AC. Register with building management. Bills separate from DEWA.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-4">3. Open Salary Bank Account</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              Now that you have Emirates ID, open your salary account. Refer to our <Link href="/blog/uae-banking-guide-newcomers" className="text-[var(--blog-link)] hover:text-[var(--blog-link-hover)] underline">complete banking guide</Link> for details.
            </p>
            <p className="text-[var(--blog-text)] text-sm">
              <strong>Required documents:</strong> Emirates ID, passport with visa, salary certificate, proof of address (tenancy contract or utility bill).
            </p>
          </div>
        </div>
      </section>

      <section id="month-one" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Month 1: Settling In</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-bold text-[var(--blog-heading)] mb-3">Transportation</h3>
            <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
              <li><strong>Car Purchase/Lease:</strong> Wait 30 days to understand your commute needs</li>
              <li><strong>UAE License:</strong> Convert license if from eligible country, or apply for new one</li>
              <li><strong>Public Transport:</strong> Get Nol Card for metro/bus (Dubai)</li>
              <li><strong>Ride-hailing:</strong> Download Uber and Careem</li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-bold text-[var(--blog-heading)] mb-3">Health Insurance</h3>
            <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
              <li>Usually provided by employer (mandatory in Dubai and Abu Dhabi)</li>
              <li>Verify coverage and network hospitals</li>
              <li>Add dependents to your policy</li>
              <li>Keep insurance card accessible at all times</li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-bold text-[var(--blog-heading)] mb-3">Schools (if applicable)</h3>
            <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
              <li>Finalize school registration (waitlists are common)</li>
              <li>Attested educational documents required</li>
              <li>Registration fees: AED 500-2,000</li>
              <li>Annual fees due upfront or in installments</li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-bold text-[var(--blog-heading)] mb-3">Social Integration</h3>
            <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
              <li>Join expat groups on Facebook/Meetup</li>
              <li>Explore your neighborhood (cafes, supermarkets, gyms)</li>
              <li>Register for gym/fitness classes</li>
              <li>Connect with colleagues outside of work</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="housing-guide" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Finding Housing: Detailed Guide</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Platform</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Pros</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Commission</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Property Finder</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">App/Website</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Most listings, verified agents</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">5% of annual rent</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Bayut</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">App/Website</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Large inventory, good filters</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">5% of annual rent</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Dubizzle</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Classifieds</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Direct landlord listings possible</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Varies or none</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Facebook Groups</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Social</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">No commission if direct</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Usually none</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Negotiation Tips:</h3>
          <ul className="space-y-2 text-[var(--blog-text)] text-sm">
            <li>Rental market is tenant-friendly in 2025. Don&apos;t be afraid to negotiate 5-10% below asking price</li>
            <li>Request multiple cheque payments (2-4 instead of 1) for better cash flow</li>
            <li>Check RERA rental index for fair market value before committing</li>
            <li>Inspect property thoroughly and document any issues before moving in</li>
          </ul>
        </div>
      </section>

      <section id="documentation" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Important Documents & Where to Keep Them</h2>

        <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
          <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-4">Essential Documents Folder (Physical & Digital Copies)</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-[var(--blog-heading)] mb-2">Keep Physical Originals:</p>
              <ul className="space-y-1 text-[var(--blog-text)] list-disc list-inside ml-2">
                <li>Passport with valid visa</li>
                <li>Emirates ID (carry at all times)</li>
                <li>Tenancy contract (Ejari)</li>
                <li>Employment contract</li>
                <li>Educational certificates (attested)</li>
                <li>Marriage/birth certificates (attested)</li>
                <li>UAE driving license</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[var(--blog-heading)] mb-2">Digital Backups Recommended:</p>
              <ul className="space-y-1 text-[var(--blog-text)] list-disc list-inside ml-2">
                <li>All of the above (scan or photo)</li>
                <li>Bank account details</li>
                <li>Health insurance card</li>
                <li>Utility account numbers</li>
                <li>School registration documents</li>
                <li>Medical records and prescriptions</li>
                <li>Car registration (Mulkiya)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cost-breakdown" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Initial Cost Breakdown</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Expense Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Estimated Cost (AED)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Visa & Medical</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">300-800</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">Often employer-paid</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Emirates ID</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">370</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">Per person</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Temporary Accommodation (2 weeks)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">2,000-6,000</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">Hotel or serviced apartment</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Security Deposit</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">3,000-8,000</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">5-10% of annual rent</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Agency Commission</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">3,000-7,500</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">5% of annual rent</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">First Rent Payment</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">15,000-40,000</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">1-4 cheques upfront</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">DEWA Deposit</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">2,000-4,000</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">Refundable</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Internet Setup</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">300-600</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">First month + installation</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Furniture (if unfurnished)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">5,000-20,000</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">Varies greatly</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Miscellaneous (transport, food, SIM)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">2,000-4,000</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">First month expenses</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)] bg-[var(--blog-table-header)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-heading)] font-bold">TOTAL</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-heading)] font-bold">32,970-91,270</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text-light)] text-xs">Average: 50,000-60,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="common-challenges" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Common Challenges & Solutions</h2>

        <div className="space-y-4">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">Challenge: Can&apos;t open bank account without address, can&apos;t get apartment without bank account</h3>
            <p className="text-[var(--blog-text)] text-sm">
              <strong>Solution:</strong> Use your hotel address temporarily, or get a letter from your employer stating you&apos;re in temporary accommodation. Some banks accept employer letters in lieu of tenancy contract for initial account opening.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">Challenge: Rent cheques required but don&apos;t have cheque book yet</h3>
            <p className="text-[var(--blog-text)] text-sm">
              <strong>Solution:</strong> Many landlords now accept bank transfers for first payment while you wait for cheque book. Alternatively, manager&apos;s cheques from the bank work.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">Challenge: Emirates ID delayed (takes 2-4 weeks)</h3>
            <p className="text-[var(--blog-text)] text-sm">
              <strong>Solution:</strong> Request Emirates ID application receipt - many services accept this as temporary proof while waiting for the physical card.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">Challenge: Overwhelming number of tasks and paperwork</h3>
            <p className="text-[var(--blog-text)] text-sm">
              <strong>Solution:</strong> Focus on critical path items first (visa, accommodation, bank). Everything else can wait. Don&apos;t try to do everything in one week.
            </p>
          </div>
        </div>
      </section>

      <section id="checklist" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Complete Setup Checklist</h2>

        <div className="bg-[var(--accent-light)] border border-[var(--blog-border)] rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[var(--blog-heading)] mb-3">Before Arrival</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Attest all educational and personal certificates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Book temporary accommodation (2-4 weeks)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Bring AED 15,000-25,000 in accessible funds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Research neighborhoods and schools</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--blog-heading)] mb-3">Week 1</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Get UAE SIM card and phone number</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Complete medical test for visa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Apply for Emirates ID</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Start viewing properties</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Download essential apps (UAE PASS, banking, maps)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--blog-heading)] mb-3">Week 2</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Sign tenancy contract and move in</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Register Ejari (Dubai) or Tawtheeq (Abu Dhabi)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Set up DEWA/FEWA utilities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Order internet installation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Open bank account (with Emirates ID)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--blog-heading)] mb-3">Month 1</h3>
              <ul className="space-y-2 text-[var(--blog-text)] text-sm">
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Receive Emirates ID card</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Convert/apply for UAE driving license</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Enroll children in school</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Set up health insurance (employer or private)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Arrange car purchase/lease if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☐</span>
                  <span>Join local expat groups and communities</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--blog-border)]">
              <p className="text-sm text-[var(--blog-text-light)]">
                <strong>Related guides:</strong> Check out our <Link href="/blog/uae-banking-guide-newcomers" className="text-[var(--blog-link)] hover:text-[var(--blog-link-hover)] underline">UAE banking guide</Link> and <Link href="/blog/essential-digital-tools-uae-expats" className="text-[var(--blog-link)] hover:text-[var(--blog-link-hover)] underline">essential apps for expats</Link> for more detailed information.
              </p>
            </div>
          </div>
        </div>
      </section>

        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={tocItems} />
          </div>
        </aside>
      </div>
    </div>
  );
}
