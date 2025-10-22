import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { FileCheck, Calendar, ClipboardList, Users, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "UAE School Admission Process: Complete Guide for Expat Parents",
  description: "Navigate the school admission process in UAE. Documents required, application timelines, waiting lists, and tips for securing your preferred school.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "timeline", label: "Application Timeline" },
  { id: "documents", label: "Required Documents" },
  { id: "process-steps", label: "Admission Steps" },
  { id: "tips", label: "Success Tips" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function UAESchoolAdmissionProcessPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              UAE School Admission Process: Complete Guide for Expat Parents
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: January 2025 | 11 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding UAE School Admissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Securing a place at your preferred school in UAE requires planning, preparation, and understanding the admission process. Competition is fierce for top-rated schools, with some maintaining waiting lists of 100+ students per year group.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide walks you through every step from initial research to enrollment, helping you navigate applications, assessments, and securing your child&apos;s place.
            </p>
          </section>

          <section id="timeline" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Timeline</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">When to Start</h3>
              </div>

              <div className="space-y-4 text-gray-700 text-sm">
                <div className="flex gap-4">
                  <div className="bg-gray-100 rounded px-3 py-1 flex-shrink-0 h-fit">
                    <span className="font-semibold text-gray-900">12-18 months ahead</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Popular Outstanding Schools</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>GEMS Wellington, DESC, JESS, DAA</li>
                      <li>Waiting lists common for most year groups</li>
                      <li>Early application increases chances</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-gray-100 rounded px-3 py-1 flex-shrink-0 h-fit">
                    <span className="font-semibold text-gray-900">6-12 months ahead</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Very Good Rated Schools</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Most mid-tier international schools</li>
                      <li>Better availability</li>
                      <li>Still competitive for certain year groups</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-gray-100 rounded px-3 py-1 flex-shrink-0 h-fit">
                    <span className="font-semibold text-gray-900">3-6 months ahead</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Good Rated Schools</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Generally available spaces</li>
                      <li>Faster admission process</li>
                      <li>Mid-year admissions possible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                <h4 className="text-md font-semibold text-gray-900">Best Entry Points</h4>
              </div>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li><strong>FS1/KG1 (Age 3-4):</strong> Easiest entry - most schools have highest availability</li>
                <li><strong>Year 1/Grade 1:</strong> Second-best entry point - new cohorts formed</li>
                <li><strong>Year 7/Grade 6:</strong> Transition to secondary - some new places open</li>
                <li><strong>Mid-year:</strong> Very limited availability, waitlist common</li>
              </ul>
            </div>
          </section>

          <section id="documents" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FileCheck className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">Essential Documents</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>Child&apos;s passport copy (valid 6+ months)</li>
                  <li>UAE residence visa copy (or entry stamp if new)</li>
                  <li>Emirates ID (if already issued)</li>
                  <li>Birth certificate (attested - see below)</li>
                  <li>Passport-size photographs (8-10 copies)</li>
                  <li>Parents&apos; passports & residence visas</li>
                  <li>Immunization records</li>
                  <li>Previous school reports (last 2 years)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ClipboardList className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">Additional Requirements</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>Transfer certificate (TC) from previous school</li>
                  <li>Student report cards/transcripts</li>
                  <li>Medical records (if applicable)</li>
                  <li>Learning support documentation (IEPs, etc.)</li>
                  <li>Language assessment (non-English speakers)</li>
                  <li>Recommendation letters (some schools)</li>
                  <li>Family information form</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Attestation Requirements</h3>
              <p className="text-gray-700 text-sm mb-4">
                Birth certificates and academic documents from outside UAE must be attested through this chain:
              </p>
              <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside mb-4">
                <li>Notary public in home country</li>
                <li>Ministry of Foreign Affairs in home country</li>
                <li>UAE Embassy/Consulate in home country</li>
                <li>Ministry of Foreign Affairs in UAE (MOFA)</li>
              </ol>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Cost:</strong> AED 1,000-3,000 per document | <strong>Timeline:</strong> 2-6 weeks
                  <br/>
                  <strong>Tip:</strong> Use attestation services in UAE to save time (AED 500-800 service fee)
                </p>
              </div>
            </div>
          </section>

          <section id="process-steps" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Admission Process</h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">School Research & Shortlisting</h3>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      <li>Research 5-10 schools matching your criteria</li>
                      <li>Check KHDA ratings and inspection reports</li>
                      <li>Read parent reviews online</li>
                      <li>Compare fee structures</li>
                      <li>Consider location and commute time</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">School Visits & Tours</h3>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      <li>Book guided tours (most schools offer weekly)</li>
                      <li>Visit during school hours to see students</li>
                      <li>Meet with admissions staff</li>
                      <li>Observe classrooms and facilities</li>
                      <li>Ask about class sizes and teacher ratios</li>
                      <li>Visit minimum 3 schools before deciding</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Application Submission</h3>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      <li>Complete online application form</li>
                      <li>Upload all required documents</li>
                      <li>Pay registration fee (AED 500-2,000, non-refundable)</li>
                      <li>Submit application fee if required</li>
                      <li>Keep digital copies of all submissions</li>
                      <li>Follow up within 1 week to confirm receipt</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Assessment & Interview</h3>
                    <p className="text-gray-700 text-sm mb-2"><strong>For FS1-Year 1:</strong></p>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mb-3">
                      <li>Play-based assessment (1-2 hours)</li>
                      <li>Observation of social skills and behavior</li>
                      <li>Parent interview in some schools</li>
                    </ul>
                    <p className="text-gray-700 text-sm mb-2"><strong>For Year 2+:</strong></p>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      <li>English & Math assessments (1-2 hours)</li>
                      <li>Reading and writing tests</li>
                      <li>Student interview with teacher</li>
                      <li>Sometimes parent interview</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Offer & Acceptance</h3>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      <li>Receive offer within 1-4 weeks</li>
                      <li>Accept within deadline (usually 7-14 days)</li>
                      <li>Pay security deposit (AED 5,000-15,000, refundable)</li>
                      <li>Sign enrollment contract</li>
                      <li>If waitlisted, maintain contact and update documents</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-gray-900 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Final Enrollment</h3>
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      <li>Complete final enrollment forms</li>
                      <li>Submit original attested documents</li>
                      <li>Pay first term fees (due 1-2 months before start)</li>
                      <li>Order uniforms and books</li>
                      <li>Arrange transportation if needed</li>
                      <li>Attend parent orientation sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="tips" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Successful Admission</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-gray-700" />
                <h3 className="text-md font-semibold text-gray-900">Top 10 Insider Tips</h3>
              </div>
              <ol className="space-y-3 text-gray-700 text-sm list-decimal list-inside">
                <li><strong>Apply to 3-5 schools simultaneously:</strong> Don&apos;t put all eggs in one basket</li>
                <li><strong>Start document attestation early:</strong> Can take 6-8 weeks</li>
                <li><strong>Prepare your child:</strong> Practice basic skills - colors, shapes, counting for young ones</li>
                <li><strong>Join waitlists:</strong> Many schools fill 20-30% of places from waitlists</li>
                <li><strong>Network with current parents:</strong> They know admission patterns and insider tips</li>
                <li><strong>Be flexible with start date:</strong> January intake sometimes has more availability</li>
                <li><strong>Consider sibling priority:</strong> Once one child is in, siblings get priority</li>
                <li><strong>Don&apos;t miss deadlines:</strong> Late applications go to bottom of queue</li>
                <li><strong>Prepare for assessment:</strong> Ensure adequate sleep and relaxed mindset</li>
                <li><strong>Follow up regularly:</strong> Squeaky wheel gets the oil - stay in touch with admissions</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">What Schools Look For</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Age-appropriate development</li>
                  <li>English language proficiency</li>
                  <li>Social and emotional readiness</li>
                  <li>Family alignment with school values</li>
                  <li>Ability to pay fees consistently</li>
                  <li>Complete and accurate documentation</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">Common Rejection Reasons</h3>
                </div>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>No spaces available (most common)</li>
                  <li>Incomplete or incorrect documentation</li>
                  <li>Age requirements not met</li>
                  <li>Failed assessment or below grade level</li>
                  <li>Language proficiency concerns</li>
                  <li>Missed application deadline</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Securing a place at top UAE schools requires starting 12-18 months early, having all documents attested, and applying to multiple schools simultaneously. Registration fees alone cost AED 500-2,000 per school, so budget AED 2,000-8,000 for 3-4 applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The biggest mistake is waiting until you arrive in UAE to start applications. Begin document attestation before your move, research schools thoroughly, and join waitlists even if school says it&apos;s full - spaces open up regularly as expat families leave.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/best-international-schools-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Best International Schools in Dubai 2025
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dubai-school-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Dubai School Guide: Complete Guide for Parents
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

        <aside className="hidden lg:block">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  );
}
