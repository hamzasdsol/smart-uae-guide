import Link from "next/link";

export const metadata = {
  title: "Dubai School Guide 2025: Choosing the Right School for Your Child",
  description: "Complete guide to schools in Dubai. Compare curricula, understand fees, admission processes, and find the best school for your child's needs.",
};

export default function DubaiSchoolGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="min-w-0">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dubai School Guide 2025: Complete Guide for Expat Parents
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: October 2025 • 12 min read
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Dubai's Education System</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dubai offers over 200 international schools following various curricula, making it one of the most diverse education markets globally. Understanding the options, costs, and admission processes is crucial for making the right choice for your child.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Average annual school fees range from AED 15,000 to AED 100,000+</strong>, depending on the curriculum, school reputation, and grade level.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Curricula in Dubai</h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">British Curriculum (IGCSE/A-Levels)</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Fee Range:</strong> AED 30,000-90,000/year</p>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Characteristics:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Most popular curriculum in Dubai (40% of schools)</li>
                  <li>Structured, exam-oriented approach</li>
                  <li>IGCSE at age 16, A-Levels at age 18</li>
                  <li>Recognized globally, especially in UK, Commonwealth</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Top Schools:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>GEMS Wellington International School</li>
                  <li>Dubai English Speaking College (DESC)</li>
                  <li>Jumeirah English Speaking School (JESS)</li>
                  <li>Kings' School Dubai</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-3"><strong>Best for:</strong> Families planning to return to UK or Commonwealth countries</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">American Curriculum (US High School Diploma)</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Fee Range:</strong> AED 40,000-100,000/year</p>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Characteristics:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Flexible, student-centered approach</li>
                  <li>GPA system with SAT/ACT for college</li>
                  <li>Strong extracurricular focus</li>
                  <li>Sports and arts integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Top Schools:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Dubai American Academy (DAA)</li>
                  <li>American School of Dubai (ASD)</li>
                  <li>GEMS American Academy</li>
                  <li>Nord Anglia International School Dubai</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-3"><strong>Best for:</strong> Families planning US university education or returning to North America</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Baccalaureate (IB)</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Fee Range:</strong> AED 50,000-95,000/year</p>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Characteristics:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Holistic, inquiry-based learning</li>
                  <li>Primary Years (PYP), Middle Years (MYP), Diploma (DP)</li>
                  <li>Global perspective and critical thinking</li>
                  <li>Recognized by top universities worldwide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Top Schools:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>GEMS World Academy Dubai</li>
                  <li>Dubai International Academy</li>
                  <li>Raffles International School</li>
                  <li>Foremarke Dubai</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-3"><strong>Best for:</strong> Internationally mobile families, globally-minded education</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Indian Curriculum (CBSE/ICSE)</h3>
              <p className="text-gray-700 text-sm mb-3"><strong>Fee Range:</strong> AED 8,000-35,000/year</p>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Characteristics:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Most affordable option</li>
                  <li>Strong academic foundation</li>
                  <li>CBSE and ICSE board exams</li>
                  <li>Large class sizes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Top Schools:</h4>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                  <li>Delhi Private School (DPS)</li>
                  <li>Our Own English High School</li>
                  <li>GEMS Modern Academy</li>
                  <li>Indian High School</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-3"><strong>Best for:</strong> Budget-conscious Indian families, planning to return to India</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">School Fee Breakdown by Grade</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr className="divide-x divide-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Grade Level</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Budget (AED)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Mid-Range (AED)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Premium (AED)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">KG1-KG2</td>
                  <td className="px-4 py-3 text-sm text-gray-700">15,000-25,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">30,000-50,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">60,000-85,000</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Primary (1-5)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">18,000-30,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">35,000-60,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">70,000-95,000</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">Secondary (6-10)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">22,000-35,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">40,000-70,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">80,000-105,000</td>
                </tr>
                <tr className="divide-x divide-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-700">High School (11-12)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">25,000-40,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">45,000-75,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">85,000-110,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
            <h4 className="text-md font-semibold text-gray-900 mb-2">Additional Costs to Consider</h4>
            <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
              <li>Registration fee: AED 500-2,000 (one-time)</li>
              <li>Admission deposit: AED 3,000-10,000 (refundable)</li>
              <li>School bus: AED 5,000-8,000/year</li>
              <li>Uniforms: AED 500-1,500/year</li>
              <li>Books & supplies: AED 1,000-3,000/year</li>
              <li>Extracurricular activities: AED 2,000-10,000/year</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Process & Tips</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <h3 className="text-md font-semibold text-gray-900 mb-3">Key Steps</h3>
            <ol className="space-y-3 text-gray-700 text-sm list-decimal list-inside">
              <li><strong>Research & Shortlist:</strong> Start 6-12 months before intended start date</li>
              <li><strong>School Tours:</strong> Visit minimum 3-5 schools to compare</li>
              <li><strong>Application:</strong> Submit online forms with required documents</li>
              <li><strong>Assessment:</strong> Child may need to take entrance tests</li>
              <li><strong>Interview:</strong> Some schools interview parents and child</li>
              <li><strong>Offer & Payment:</strong> Pay deposit to secure place within deadline</li>
              <li><strong>Registration:</strong> Complete final paperwork before term starts</li>
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-md font-semibold text-gray-900 mb-3">Pro Tips</h3>
            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
              <li>Apply to multiple schools (3-5) as waitlists are common</li>
              <li>Best admission chances for KG1, Grade 1, and Grade 7</li>
              <li>Mid-year admissions possible but spaces limited</li>
              <li>KHDA ratings important but visit schools personally</li>
              <li>Consider proximity to home (traffic can add 1-2 hours daily)</li>
              <li>Ask about sibling discounts (5-25% common)</li>
            </ul>
          </div>
        </section>

        <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Choosing the right school in Dubai requires balancing curriculum preferences, budget, location, and your child&apos;s needs. Start your research early, visit schools in person, and consider long-term education goals including university plans.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Education is typically one of the largest expenses for expat families in Dubai, so factor school fees into your overall salary and housing budget decisions. Many employers offer education allowances - negotiate this during your job offer stage.
          </p>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/best-international-schools-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Best International Schools in Dubai 2025
              </Link>
            </li>
            <li>
              <Link href="/blog/how-much-salary-comfortable-dubai-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                How Much Salary Is Enough to Live Comfortably in Dubai?
              </Link>
            </li>
            <li>
              <Link href="/blog/best-areas-dubai" className="text-gray-700 hover:text-gray-900 underline font-medium">
                Best Areas to Live in Dubai
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
