import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { GraduationCap, DollarSign, Users, BookOpen, Trophy, Star } from "lucide-react";

export const metadata = {
  title: "Best International Schools in Dubai 2025: Fees, Curriculum & Reviews",
  description: "Comprehensive guide to Dubai's top international schools. Compare British, American, and IB curricula with detailed fee structures and admission processes.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "top-british", label: "Top British Schools" },
  { id: "top-american", label: "Top American Schools" },
  { id: "top-ib", label: "Top IB Schools" },
  { id: "selection-criteria", label: "How to Choose" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function BestInternationalSchoolsDubaiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best International Schools in Dubai 2025: Complete Guide
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: October 2025 | 14 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dubai&apos;s Top International Schools</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai offers over 200 international schools serving 280,000+ students. Choosing the right school requires understanding curricula differences, fee structures, and finding the best fit for your child&apos;s needs and future education plans.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide focuses on Outstanding and Very Good rated schools (KHDA inspection ratings) across British, American, and IB curricula with detailed fee breakdowns and admission insights.
            </p>
          </section>

          <section id="top-british" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top British Curriculum Schools</h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-gray-700" />
                      <h3 className="text-xl font-semibold text-gray-900">GEMS Wellington International School</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-4 h-4" />
                      <span>KHDA: Outstanding | Location: Al Sufouh</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">Top Choice</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Annual Fees (2024-25):</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>FS1-FS2</span><span>AED 65,000-68,000</span></li>
                    <li className="flex justify-between"><span>Year 1-6 (Primary)</span><span>AED 70,000-76,000</span></li>
                    <li className="flex justify-between"><span>Year 7-11 (Secondary)</span><span>AED 80,000-87,000</span></li>
                    <li className="flex justify-between"><span>Year 12-13 (A-Levels)</span><span>AED 90,000-92,000</span></li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Key Strengths:
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                    <li>Consistently Outstanding KHDA rating for 10+ years</li>
                    <li>Excellent A-Level results (75% A-A grades)</li>
                    <li>Strong sports program with Olympic-size pool</li>
                    <li>State-of-the-art facilities on 45-acre campus</li>
                    <li>Waiting list for most year groups</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600"><strong>Best for:</strong> Families seeking premium British education with strong academic results heading to UK universities</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Dubai English Speaking College (DESC)</h3>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Star className="w-4 h-4" />
                    <span>KHDA: Outstanding | Location: Academic City</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Annual Fees:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>FS1-FS2</span><span>AED 55,000-58,000</span></li>
                    <li className="flex justify-between"><span>Year 1-6</span><span>AED 60,000-68,000</span></li>
                    <li className="flex justify-between"><span>Year 7-11</span><span>AED 72,000-78,000</span></li>
                    <li className="flex justify-between"><span>Year 12-13</span><span>AED 82,000-85,000</span></li>
                  </ul>
                </div>

                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Second-longest Outstanding rating in Dubai</li>
                  <li>Smaller class sizes (max 24 students)</li>
                  <li>Focus on academic excellence and wellbeing</li>
                  <li>Excellent university placements globally</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Jumeirah English Speaking School (JESS)</h3>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Star className="w-4 h-4" />
                    <span>KHDA: Outstanding | Locations: Arabian Ranches & Jumeirah</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Annual Fees:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>FS1-FS2</span><span>AED 60,000-64,000</span></li>
                    <li className="flex justify-between"><span>Year 1-6</span><span>AED 66,000-73,000</span></li>
                    <li className="flex justify-between"><span>Year 7-13</span><span>AED 78,000-88,000</span></li>
                  </ul>
                </div>

                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Oldest British school in Dubai (est. 1975)</li>
                  <li>Two campuses - choose by location preference</li>
                  <li>Strong community feel and pastoral care</li>
                  <li>Excellent extracurricular program</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="top-american" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top American Curriculum Schools</h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Dubai American Academy (DAA)</h3>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Star className="w-4 h-4" />
                    <span>KHDA: Outstanding | Location: Barsha South</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Annual Fees:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>Pre-K to KG</span><span>AED 64,000-70,000</span></li>
                    <li className="flex justify-between"><span>Grade 1-5 (Elementary)</span><span>AED 74,000-82,000</span></li>
                    <li className="flex justify-between"><span>Grade 6-8 (Middle)</span><span>AED 86,000-90,000</span></li>
                    <li className="flex justify-between"><span>Grade 9-12 (High School)</span><span>AED 94,000-98,000</span></li>
                  </ul>
                </div>

                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Only Outstanding-rated American school in Dubai</li>
                  <li>Strong AP program with 25+ course offerings</li>
                  <li>Average SAT scores above US national average</li>
                  <li>Excellent college counseling for US universities</li>
                  <li>Outstanding sports and arts facilities</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">American School of Dubai (ASD)</h3>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Star className="w-4 h-4" />
                    <span>KHDA: Very Good | Location: Al Barsha</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Annual Fees:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>Pre-K to KG</span><span>AED 85,000-90,000</span></li>
                    <li className="flex justify-between"><span>Grade 1-5</span><span>AED 92,000-98,000</span></li>
                    <li className="flex justify-between"><span>Grade 6-12</span><span>AED 100,000-105,000</span></li>
                  </ul>
                </div>

                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Oldest American school in Dubai (est. 1966)</li>
                  <li>Premium facilities and resources</li>
                  <li>Strong university placement record</li>
                  <li>Emphasis on student leadership and service</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="top-ib" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top IB Schools</h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">GEMS World Academy Dubai</h3>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Star className="w-4 h-4" />
                    <span>KHDA: Outstanding | Location: Al Barsha South</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Annual Fees:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>PYP (Age 3-11)</span><span>AED 74,000-82,000</span></li>
                    <li className="flex justify-between"><span>MYP (Age 11-16)</span><span>AED 86,000-90,000</span></li>
                    <li className="flex justify-between"><span>DP (Age 16-18)</span><span>AED 94,000-96,000</span></li>
                  </ul>
                </div>

                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Full IB continuum (PYP, MYP, DP)</li>
                  <li>Outstanding KHDA rating consistently</li>
                  <li>IB Diploma average: 34 points (above world average)</li>
                  <li>Modern facilities with innovation labs</li>
                  <li>Strong arts and music program</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Dubai International Academy</h3>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Star className="w-4 h-4" />
                    <span>KHDA: Outstanding | Locations: Emirates Hills & Al Barsha</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Annual Fees:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex justify-between"><span>PYP</span><span>AED 70,000-77,000</span></li>
                    <li className="flex justify-between"><span>MYP</span><span>AED 82,000-88,000</span></li>
                    <li className="flex justify-between"><span>DP</span><span>AED 92,000-95,000</span></li>
                  </ul>
                </div>

                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>First IB World School in Dubai</li>
                  <li>Two campuses for different age groups</li>
                  <li>Inquiry-based learning approach</li>
                  <li>Strong global university placements</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="selection-criteria" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right School</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-gray-700" />
                <h3 className="text-md font-semibold text-gray-900">Key Selection Factors</h3>
              </div>
              <ol className="space-y-3 text-gray-700 text-sm list-decimal list-inside">
                <li><strong>Curriculum alignment:</strong> Choose based on where your child will attend university (British for UK, American for US, IB for global)</li>
                <li><strong>Location & commute:</strong> Dubai traffic is serious - prioritize schools within 20-30 minutes of home</li>
                <li><strong>Budget sustainability:</strong> Fees increase annually by 3-5% - can you afford it for 10+ years?</li>
                <li><strong>KHDA rating:</strong> Outstanding and Very Good are top tiers - check latest inspection reports</li>
                <li><strong>School culture:</strong> Visit campuses, talk to current parents, observe student behavior</li>
                <li><strong>Class sizes:</strong> Smaller is better - look for max 22-24 students per class</li>
                <li><strong>Facilities:</strong> Sports fields, science labs, arts centers, libraries matter for holistic development</li>
                <li><strong>University counseling:</strong> Essential for secondary - check university placement records</li>
              </ol>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-gray-700" />
                <h4 className="text-md font-semibold text-gray-900">Application Timeline Tips</h4>
              </div>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>Apply 12-18 months before intended start date for popular schools</li>
                <li>Best entry points: FS1, Year 1, Year 7 (fewer spaces mid-year)</li>
                <li>Most schools conduct assessments for Year 2 onwards</li>
                <li>Registration fees: AED 500-2,000 (non-refundable)</li>
                <li>Security deposits: AED 5,000-15,000 (refundable when leaving)</li>
                <li>Ask about sibling discounts (5-25% common at GEMS schools)</li>
              </ul>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Outstanding schools in Dubai deliver world-class education but come with premium fees (AED 60,000-100,000 annually). GEMS Wellington, DAA, and GEMS World Academy lead in their respective curricula with excellent academic results and university placements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Budget AED 80,000-100,000 per child annually for top-tier schools including fees, uniforms, transport, and extras. Start your school search early, visit multiple schools, and choose based on curriculum fit and long-term affordability rather than just reputation.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/dubai-school-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Dubai School Guide: Choosing the Right School
                  </Link>
                </li>
                <li>
                  <Link href="/blog/uae-school-admission-process-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    UAE School Admission Process Guide
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
