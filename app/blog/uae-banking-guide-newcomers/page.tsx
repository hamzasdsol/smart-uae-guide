import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Complete UAE Banking Guide for Newcomers 2025 | Opening Accounts & Choosing Banks",
  description: "Everything you need to know about opening a bank account in UAE. Compare top banks, understand requirements, and learn about account types for expats.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "why-uae-bank-account", label: "Why You Need a UAE Bank Account" },
  { id: "account-requirements", label: "Account Opening Requirements" },
  { id: "top-banks-comparison", label: "Top Banks Comparison" },
  { id: "types-of-accounts", label: "Types of Bank Accounts" },
  { id: "account-opening-process", label: "Account Opening Process" },
  { id: "banking-fees", label: "Banking Fees Explained" },
  { id: "digital-banking", label: "Digital Banking Features" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid" },
  { id: "bottom-line", label: "Bottom Line" }
];

export default function BankingGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[var(--blog-heading)] mb-4">
              Complete UAE Banking Guide for Newcomers 2025
            </h1>
            <p className="text-[var(--blog-text-light)] text-lg">
              Step-by-step guide to opening bank accounts, choosing the right bank, and managing finances in the UAE
            </p>
          </header>

      <section id="introduction" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-4">Introduction</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          Opening a bank account is one of the first and most important steps when relocating to the UAE. Whether you&apos;re moving for work, business, or residency, having a local bank account is essential for receiving your salary, paying bills, and managing day-to-day expenses.
        </p>
        <p className="text-[var(--blog-text)] leading-relaxed mb-4">
          The UAE banking sector is one of the most advanced in the Middle East, offering world-class digital banking services, competitive interest rates, and comprehensive financial products. However, navigating the banking landscape as a newcomer can be overwhelming with dozens of banks to choose from and varying requirements.
        </p>
        <p className="text-[var(--blog-text)] leading-relaxed">
          This guide will walk you through everything you need to know: from choosing the right bank to understanding account types, fees, and the step-by-step process of opening your first UAE bank account.
        </p>
      </section>

      <section id="why-uae-bank-account" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Why You Need a UAE Bank Account</h2>

        <div className="space-y-4">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">1. Salary Transfers</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Most UAE employers require a local bank account to transfer your monthly salary. International transfers to foreign accounts often incur high fees and currency conversion charges.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">2. Avoid Transaction Fees</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Using foreign cards for everyday purchases results in currency conversion fees (typically 2-3%) and international transaction charges. A local account eliminates these costs.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">3. Bill Payments & Services</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Utilities (DEWA), telecom (Etisalat/du), Salik tolls, and many other services require local payment methods. Setting up auto-pay from a UAE account simplifies life significantly.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">4. Credit Building</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Establishing a banking relationship helps build your credit history with the Al Etihad Credit Bureau (AECB), which is essential for future loans, mortgages, or credit cards.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">5. Financial Products Access</h3>
            <p className="text-[var(--blog-text)] text-sm">
              UAE banks offer attractive savings accounts, investment products, insurance, and personal loans that are only accessible to account holders.
            </p>
          </div>
        </div>
      </section>

      <section id="account-requirements" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Account Opening Requirements</h2>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg mb-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Standard Documents Required:</h3>
          <ul className="space-y-2 text-[var(--blog-text)] text-sm">
            <li className="flex items-start">
              <span className="mr-2">📄</span>
              <span><strong>Emirates ID:</strong> Original and copy (both sides). This is mandatory for all residents.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📄</span>
              <span><strong>Passport with valid visa:</strong> Original and copy of the page with your UAE residence visa.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📄</span>
              <span><strong>Salary certificate or employment letter:</strong> On company letterhead, stating your salary and employment details.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📄</span>
              <span><strong>Proof of address:</strong> Utility bill (DEWA/FEWA) or tenancy contract (Ejari registered).</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📄</span>
              <span><strong>Minimum deposit:</strong> Varies by bank and account type (typically AED 0 - AED 5,000).</span>
            </li>
          </ul>
        </div>

        <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-3">Additional Requirements (Bank-Specific):</h3>
          <ul className="space-y-2 text-[var(--blog-text)] text-sm ml-4 list-disc list-inside">
            <li>Last 3-6 months of salary slips (for salary accounts)</li>
            <li>Trade license copy (for business accounts)</li>
            <li>Reference letter from your current bank (sometimes required)</li>
            <li>Minimum salary requirement (ranges from AED 3,000 to AED 25,000+ depending on account type)</li>
          </ul>
        </div>
      </section>

      <section id="top-banks-comparison" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Top UAE Banks Comparison</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Bank</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Best For</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Min. Salary</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Digital Banking</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Branch Network</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Emirates NBD</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">All-around, Digital services</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 5,000+</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Extensive</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">First Abu Dhabi Bank (FAB)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Premium banking, Investment</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 8,000+</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Very large</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">ADCB</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Flexible options, Expats</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 5,000+</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Large</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Mashreq Bank</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Tech-savvy users, Neo</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 5,000+</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Medium</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Dubai Islamic Bank (DIB)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Islamic banking</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 4,000+</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Large</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Abu Dhabi Islamic Bank (ADIB)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Islamic banking, Low fees</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 3,000+</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Large</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Liv. by Emirates NBD</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Digital-only, Millennials</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">None</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Digital only</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">CBD Now</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Digital-only, No fees</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">None</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">⭐⭐⭐⭐⭐</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Digital only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-3">Emirates NBD</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              The UAE&apos;s largest banking group with the most comprehensive digital platform. Best all-around choice for expats.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">✓ Pros:</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1 ml-2">
                  <li>Excellent mobile app</li>
                  <li>Large ATM network</li>
                  <li>Premium customer service</li>
                </ul>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">✗ Cons:</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1 ml-2">
                  <li>Higher minimum balance requirements</li>
                  <li>Fees for low-balance accounts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-3">Liv. by Emirates NBD</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              Digital-only bank with no minimum balance, no fees, and instant account opening. Perfect for young professionals and those who prefer digital-first banking.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">✓ Pros:</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1 ml-2">
                  <li>Zero fees, zero minimum balance</li>
                  <li>Open account in 3 minutes</li>
                  <li>Sleek mobile app</li>
                  <li>Gamified savings features</li>
                </ul>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">✗ Cons:</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1 ml-2">
                  <li>No physical branches</li>
                  <li>Limited loan/mortgage options</li>
                  <li>Fewer financial products</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--blog-heading)] mb-3">First Abu Dhabi Bank (FAB)</h3>
            <p className="text-[var(--blog-text)] text-sm mb-3">
              The largest bank in the UAE by assets. Excellent for wealth management and international banking.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">✓ Pros:</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1 ml-2">
                  <li>Strong international presence</li>
                  <li>Premium services</li>
                  <li>Excellent investment products</li>
                </ul>
              </div>
              <div>
                <p className="text-[var(--blog-text-light)] mb-1">✗ Cons:</p>
                <ul className="list-disc list-inside text-[var(--blog-text)] space-y-1 ml-2">
                  <li>Higher minimum salary requirements</li>
                  <li>Less competitive rates for basic accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="types-of-accounts" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Types of Bank Accounts</h2>

        <div className="space-y-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Salary Account (Current Account)</h3>
            <p className="text-[var(--blog-text)] mb-3">
              <strong>Best for:</strong> Employed expats receiving regular monthly salary
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--blog-text)] text-sm ml-4">
              <li>No minimum balance requirement if salary is transferred monthly</li>
              <li>Free debit card and checkbook</li>
              <li>Free online/mobile banking</li>
              <li>Overdraft facility (subject to approval)</li>
              <li>May include free credit card or preferential rates</li>
            </ul>
            <p className="text-[var(--blog-text-light)] text-sm mt-3 italic">
              <strong>Note:</strong> If you stop transferring your salary, the account may convert to a savings account with monthly fees.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Savings Account</h3>
            <p className="text-[var(--blog-text)] mb-3">
              <strong>Best for:</strong> Building emergency funds and earning interest
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--blog-text)] text-sm ml-4">
              <li>Earns interest on your balance (typically 0.25% - 2% annually)</li>
              <li>Minimum balance requirement (usually AED 3,000 - AED 25,000)</li>
              <li>Monthly fees if balance falls below minimum</li>
              <li>Suitable for parking funds you don&apos;t need immediate access to</li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Fixed Deposit Account</h3>
            <p className="text-[var(--blog-text)] mb-3">
              <strong>Best for:</strong> Long-term savings with guaranteed returns
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--blog-text)] text-sm ml-4">
              <li>Lock funds for a fixed period (3 months to 5 years)</li>
              <li>Higher interest rates (1% - 4% depending on tenure and amount)</li>
              <li>Early withdrawal penalties apply</li>
              <li>Minimum deposit typically AED 10,000+</li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-6 bg-[var(--blog-bg-section)]">
            <h3 className="text-xl font-bold text-[var(--blog-heading)] mb-3">Islamic Savings/Current Account</h3>
            <p className="text-[var(--blog-text)] mb-3">
              <strong>Best for:</strong> Those seeking Sharia-compliant banking
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--blog-text)] text-sm ml-4">
              <li>No interest; instead earns profit-sharing (Mudarabah)</li>
              <li>Fully compliant with Islamic banking principles</li>
              <li>Similar features to conventional accounts</li>
              <li>Available at both Islamic and conventional banks</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="account-opening-process" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Account Opening Process</h2>

        <div className="bg-[var(--accent-light)] border border-[var(--blog-border)] rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-4">Step-by-Step Guide:</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-1">Choose Your Bank</h4>
                <p className="text-[var(--blog-text)] text-sm">
                  Compare banks based on your salary, digital needs, and branch accessibility. Consider if you need Islamic banking or prefer digital-only options.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-1">Gather Required Documents</h4>
                <p className="text-[var(--blog-text)] text-sm">
                  Emirates ID, passport with visa, salary certificate, proof of address. Call the bank ahead to confirm exact requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-1">Visit Branch or Apply Online</h4>
                <p className="text-[var(--blog-text)] text-sm">
                  <strong>In-branch:</strong> Visit with all documents. Account usually opened same day.<br/>
                  <strong>Online:</strong> Digital banks like Liv. or CBD Now allow instant account opening via app.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-1">Complete Application & Verification</h4>
                <p className="text-[var(--blog-text)] text-sm">
                  Fill out forms, provide biometric data (fingerprint), and make initial deposit if required. Bank will verify your employment and documents.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">5</div>
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-1">Receive Debit Card & Activate Services</h4>
                <p className="text-[var(--blog-text)] text-sm">
                  Debit card arrives within 3-7 days by courier. Activate mobile banking, set up online access, and link to Apple Pay/Google Pay.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">6</div>
              <div>
                <h4 className="font-semibold text-[var(--blog-heading)] mb-1">Notify Your Employer</h4>
                <p className="text-[var(--blog-text)] text-sm">
                  Provide your IBAN to HR for salary transfers. Set up auto-pay for bills (DEWA, phone, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-6 rounded-r-lg">
          <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Timeline Expectations</h3>
          <ul className="space-y-2 text-[var(--blog-text)] text-sm">
            <li><strong>In-branch opening:</strong> Same day account activation, 3-7 days for card delivery</li>
            <li><strong>Digital bank opening:</strong> Instant activation, virtual card immediately available</li>
            <li><strong>Full verification:</strong> 1-3 business days</li>
            <li><strong>Credit card (if requested):</strong> 7-14 days after account opening</li>
          </ul>
        </div>
      </section>

      <section id="banking-fees" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Banking Fees Explained</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--blog-table-border)] rounded-lg shadow-sm">
            <thead className="bg-[var(--blog-table-header)]">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Fee Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">Typical Cost</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--blog-heading)]">How to Avoid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--blog-table-border)] bg-white">
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Monthly Maintenance Fee</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 25 - AED 75</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Maintain minimum balance or have salary transfer</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Debit Card Annual Fee</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free - AED 100</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Usually free with salary accounts</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">ATM Withdrawal (Other Banks)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 2 - AED 5</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Use your bank&apos;s ATMs</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">International Transfer (Outgoing)</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">AED 50 - AED 150 + FX markup</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Use Wise/Western Union for better rates</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Cheque Book</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free - AED 50</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Often free with salary accounts</td>
              </tr>
              <tr className="divide-x divide-[var(--blog-table-border)]">
                <td className="px-4 py-3 text-sm text-[var(--blog-text)] font-medium">Account Closure</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Free - AED 100</td>
                <td className="px-4 py-3 text-sm text-[var(--blog-text)]">Check terms before opening</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="digital-banking" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Digital Banking Features</h2>
        <p className="text-[var(--blog-text)] leading-relaxed mb-6">
          UAE banks are leaders in digital innovation. Here&apos;s what you can expect from modern UAE banking apps:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-bold text-[var(--blog-heading)] mb-3">Core Features</h3>
            <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
              <li>Instant fund transfers (local & international)</li>
              <li>Bill payments (DEWA, Etisalat, Salik, etc.)</li>
              <li>Mobile check deposits</li>
              <li>Spending analytics and budgeting tools</li>
              <li>Virtual debit cards</li>
              <li>Biometric login (Face ID/fingerprint)</li>
            </ul>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-bold text-[var(--blog-heading)] mb-3">Advanced Features</h3>
            <ul className="space-y-2 text-[var(--blog-text)] text-sm list-disc list-inside">
              <li>Instant personal loans (pre-approved)</li>
              <li>Investment and trading platforms</li>
              <li>Savings goals and auto-savings</li>
              <li>Cryptocurrency trading (select banks)</li>
              <li>Freeze/unfreeze cards instantly</li>
              <li>AI-powered chatbots for support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="common-mistakes" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">1. Not Maintaining Minimum Balance</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Falling below the minimum balance triggers monthly fees (AED 25-75). Always check balance requirements and set up alerts.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">2. Ignoring AECB Credit Reports</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Check your credit report regularly. Late payments or bounced cheques severely damage your credit score and can affect visa renewals.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">3. Using International Transfers for Remittances</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Bank international transfers have high fees and poor exchange rates. Use Wise, Western Union, or RemitGuru for better rates.
            </p>
          </div>

          <div className="border border-[var(--blog-border)] rounded-lg p-5 bg-[var(--blog-bg-section)]">
            <h3 className="text-lg font-semibold text-[var(--blog-heading)] mb-2">4. Not Closing Accounts When Leaving UAE</h3>
            <p className="text-[var(--blog-text)] text-sm">
              Properly close accounts before leaving to avoid fees and credit issues. Ensure all cheques have cleared and no outstanding debts remain.
            </p>
          </div>
        </div>
      </section>

      <section id="bottom-line" className="mb-10">
        <h2 className="text-3xl font-bold text-[var(--blog-heading)] mb-6">The Bottom Line</h2>

        <div className="bg-[var(--accent-light)] border border-[var(--blog-border)] rounded-lg p-6">
          <p className="text-[var(--blog-text)] leading-relaxed mb-4">
            Opening a UAE bank account is straightforward once you have your Emirates ID and employment documents. The key is choosing a bank that matches your needs:
          </p>

          <div className="space-y-3 text-[var(--blog-text)] mb-6">
            <p><strong>For digital-first users:</strong> Liv. or CBD Now (zero fees, instant setup)</p>
            <p><strong>For comprehensive services:</strong> Emirates NBD or FAB</p>
            <p><strong>For Islamic banking:</strong> DIB or ADIB</p>
            <p><strong>For tech enthusiasts:</strong> Mashreq Neo</p>
          </div>

          <div className="bg-[var(--blog-highlight)] border-l-4 border-[var(--accent-primary)] p-5 rounded-r-lg mb-4">
            <h3 className="font-semibold text-[var(--blog-heading)] mb-2">Pro Tips for New Expats:</h3>
            <ul className="space-y-2 text-[var(--blog-text)] text-sm">
              <li>✓ Open a salary account first (no fees, best benefits)</li>
              <li>✓ Download the mobile app immediately and set up biometric login</li>
              <li>✓ Link to Apple Pay/Google Pay for contactless payments</li>
              <li>✓ Set up auto-pay for recurring bills to avoid late fees</li>
              <li>✓ Check your AECB credit score every 6 months (free annual report)</li>
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-[var(--blog-border)]">
            <p className="text-sm text-[var(--blog-text-light)]">
              <strong>Next steps:</strong> Once your account is set up, consider applying for a <Link href="/blog/best-credit-cards-uae-2025" className="text-[var(--blog-link)] hover:text-[var(--blog-link-hover)] underline">UAE credit card</Link> to build credit and earn rewards. Also check out our <Link href="/blog/understanding-uae-budget-planning" className="text-[var(--blog-link)] hover:text-[var(--blog-link-hover)] underline">budget planning guide</Link> to manage your UAE finances effectively.
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
