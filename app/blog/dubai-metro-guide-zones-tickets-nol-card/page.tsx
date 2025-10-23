import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { MapPin, CreditCard, Clock, DollarSign, Zap, Users } from "lucide-react";

export const metadata = {
  title: "Dubai Metro Guide: Zones, Tickets, NOL Card & Route Planning",
  description: "Complete guide to using Dubai Metro. Understand zones, ticket types, NOL card benefits, and how to navigate the Red and Green lines efficiently.",
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "metro-lines", label: "Metro Lines & Coverage" },
  { id: "zones", label: "Understanding Zones" },
  { id: "nol-card", label: "NOL Card Guide" },
  { id: "fares", label: "Fares & Ticket Types" },
  { id: "tips", label: "Travel Tips" },
  { id: "bottom-line", label: "Bottom Line" },
];

export default function DubaiMetroGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dubai Metro Guide: Zones, Tickets, NOL Card & Route Planning
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: October 2025 | 9 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dubai Metro: Fast, Affordable, Efficient</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai Metro is one of the world&apos;s most advanced driverless rail systems, serving over 55 stations across two lines. It&apos;s the most cost-effective way to travel in Dubai, especially for daily commutes and tourist trips.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Operating since 2009, the metro connects key areas from Jebel Ali to Dubai Airport and from Rashidiya to Dubai Creek. With trains every 3-4 minutes during peak hours, it&apos;s faster than driving for most routes.
            </p>
          </section>

          <section id="metro-lines" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Metro Lines & Coverage</h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Red Line</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3"><strong>Length:</strong> 52.1 km | <strong>Stations:</strong> 29 | <strong>Journey Time:</strong> 70 minutes end-to-end</p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Stations:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                    <li>UAE Exchange (Jebel Ali)</li>
                    <li>Dubai Marina, JBR, DMCC</li>
                    <li>Mall of the Emirates (Interchange with bus routes)</li>
                    <li>Business Bay</li>
                    <li>Burj Khalifa/Dubai Mall</li>
                    <li>Dubai International Financial Centre (DIFC)</li>
                    <li>Dubai Airport Terminal 1 & 3</li>
                    <li>Rashidiya (endpoint)</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600"><strong>Best for:</strong> Marina to Downtown, Airport connections, Sheikh Zayed Road corridor</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-gray-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Green Line</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3"><strong>Length:</strong> 22.5 km | <strong>Stations:</strong> 20 | <strong>Journey Time:</strong> 35 minutes end-to-end</p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Stations:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                    <li>Etisalat (endpoint)</li>
                    <li>Deira City Centre</li>
                    <li>Al Rigga (old Dubai)</li>
                    <li>Union (interchange with Red Line)</li>
                    <li>Bur Juman (shopping)</li>
                    <li>Healthcare City</li>
                    <li>Dubai Creek (endpoint)</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600"><strong>Best for:</strong> Old Dubai, Deira, Bur Dubai, Healthcare City access</p>
              </div>
            </div>
          </section>

          <section id="zones" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Metro Zones</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai Metro operates on a zone-based fare system. The network is divided into zones, and your fare depends on how many zones you cross:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Zones Crossed</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Example Journey</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Regular Fare</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Gold Class</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">1 Zone</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Marina to DMCC</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 3</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 6</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">2 Zones</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Marina to Business Bay</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 5</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 10</td>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">3+ Zones</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Marina to Airport</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 7.5</td>
                    <td className="px-4 py-3 text-sm text-gray-700">AED 15</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h4 className="text-md font-semibold text-gray-900 mb-2">Zone Tips</h4>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>You don&apos;t need to memorize zones - NOL card automatically calculates</li>
                <li>Maximum fare is AED 7.5 for regular class anywhere in network</li>
                <li>Gold class costs exactly double regular fare</li>
                <li>Use RTA app or Google Maps for journey planning</li>
              </ul>
            </div>
          </section>

          <section id="nol-card" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NOL Card: Your Essential Travel Card</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">NOL Card Types</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Red Ticket (Paper)</h4>
                  <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside mb-2">
                    <li>Cost: AED 2 (card) + fare</li>
                    <li>Valid for 10 journeys</li>
                    <li>Best for tourists or occasional users</li>
                    <li>Must be purchased at ticket machines</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Silver Card (Standard)</h4>
                  <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside mb-2">
                    <li>Cost: AED 25 (includes AED 19 credit)</li>
                    <li>Rechargeable, valid 5 years</li>
                    <li>Works on metro, buses, trams, water buses</li>
                    <li>Best for residents and regular users</li>
                    <li>Can be topped up at machines, apps, or stores</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Gold Card (Premium)</h4>
                  <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside mb-2">
                    <li>Cost: AED 25 (includes AED 19 credit)</li>
                    <li>Access to Gold Class cabins (first carriage)</li>
                    <li>Less crowded, more comfortable seating</li>
                    <li>Double the regular fare per journey</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-md font-semibold text-gray-900 mb-3">How to Get & Top Up NOL Card</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>Purchase:</strong> Available at all metro stations, Dubai Airport, Carrefour, ENOC stations, and online</p>
                <p><strong>Top Up Methods:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ticket machines at metro stations (cash or card)</li>
                  <li>RTA Dubai app (online payment)</li>
                  <li>Authorized retailers (Carrefour, ENOC, EPCo)</li>
                  <li>SMS top-up service</li>
                </ul>
                <p><strong>Minimum top-up:</strong> AED 10 | <strong>Maximum balance:</strong> AED 1,000</p>
              </div>
            </div>
          </section>

          <section id="fares" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fares & Daily Passes</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">Single Journey Fares</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between"><span>1 zone (regular)</span><span>AED 3</span></li>
                  <li className="flex justify-between"><span>2 zones (regular)</span><span>AED 5</span></li>
                  <li className="flex justify-between"><span>3+ zones (regular)</span><span>AED 7.5</span></li>
                  <li className="flex justify-between border-t border-gray-200 pt-2"><span>Gold class</span><span>2x regular</span></li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-gray-700" />
                  <h3 className="text-md font-semibold text-gray-900">Daily & Monthly Passes</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between"><span>1 Day Pass</span><span>AED 20</span></li>
                  <li className="flex justify-between"><span>7 Day Pass</span><span>AED 70</span></li>
                  <li className="flex justify-between"><span>30 Day Pass</span><span>AED 300</span></li>
                  <li className="flex justify-between border-t border-gray-200 pt-2"><span>Annual Pass</span><span>AED 1,800</span></li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">Passes offer unlimited travel on metro, bus, and tram</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
              <h4 className="text-md font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Cost Comparison Example
              </h4>
              <p className="text-gray-700 text-sm mb-2">
                Daily commute from Marina to Downtown (AED 5 each way):
              </p>
              <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
                <li>Pay-per-ride: AED 10/day = AED 300/month (30 days)</li>
                <li>Monthly pass: AED 300/month (unlimited travel)</li>
                <li><strong>Savings with pass:</strong> Break even at 1 trip/day, save big on extra trips</li>
              </ul>
            </div>
          </section>

          <section id="tips" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Travel Tips</h2>

            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-gray-700" />
                <h3 className="text-md font-semibold text-gray-900">Essential Metro Etiquette & Rules</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                <li><strong>Reserved seating:</strong> Pink seats for women & children, silver for people of determination</li>
                <li><strong>Women & children carriage:</strong> First carriage of each train (Gold Class on Red Line)</li>
                <li><strong>No eating or drinking:</strong> AED 100 fine, strictly enforced</li>
                <li><strong>Stand on right, walk on left:</strong> On escalators</li>
                <li><strong>Wait for passengers to exit:</strong> Before boarding</li>
                <li><strong>Luggage allowed:</strong> But must not obstruct aisles</li>
                <li><strong>Quiet carriages:</strong> Keep phone conversations low</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-semibold text-gray-900 mb-2">Best Times to Travel</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><strong>Avoid:</strong> 7-9 AM, 5-7 PM (peak hours, very crowded)</li>
                  <li><strong>Best:</strong> 10 AM-4 PM (off-peak, frequent trains, less crowded)</li>
                  <li><strong>Weekends:</strong> Generally less crowded except near malls</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-md font-semibold text-gray-900 mb-2">Operating Hours</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><strong>Saturday-Wednesday:</strong> 5 AM - 12 AM</li>
                  <li><strong>Thursday:</strong> 5 AM - 1 AM</li>
                  <li><strong>Friday:</strong> 10 AM - 1 AM</li>
                  <li><strong>Frequency:</strong> 3-4 min peak, 7 min off-peak</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Dubai Metro is the smartest way to travel in the city - fast, affordable, and reliable. A Silver NOL card (AED 25) is essential for anyone staying more than a week. For daily commuters, the monthly pass (AED 300) offers unlimited travel and peace of mind.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The metro covers 80% of key areas in Dubai. Combined with buses and trams (all on one NOL card), you can navigate Dubai without a car. Download the RTA Dubai app for live timings, journey planning, and NOL card top-ups.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/uae-driving-license-complete-guide-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    UAE Driving License Guide 2025
                  </Link>
                </li>
                <li>
                  <Link href="/blog/buying-car-uae-vs-leasing-complete-guide" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Buying vs Leasing a Car in UAE
                  </Link>
                </li>
                <li>
                  <Link href="/blog/best-areas-dubai" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Best Areas to Live in Dubai
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
