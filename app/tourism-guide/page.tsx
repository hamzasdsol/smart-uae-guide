import Link from "next/link";
import { Plane, MapPin, Hotel, Palmtree, Baby, Wifi, Banknote, Shield, HelpCircle, FileText } from "lucide-react";

export const metadata = {
  title: "UAE Tourism Guide - Complete Visitor Information | Smart UAE Guide",
  description: "Comprehensive guide for visiting the UAE - visa requirements, transportation, accommodation, attractions, emergency services, and everything tourists need to know.",
};

export default function TourismGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">The UAE: An Ideal Tourist Destination</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover everything you need to know about visiting the United Arab Emirates - from visa requirements and transportation to attractions and essential services. Plan your perfect UAE journey with our comprehensive guide.
            </p>
          </div>

          {/* Quick Tourism Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-10 h-10 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visa-Free Entry</h3>
              <p className="text-gray-700 leading-relaxed">
                Citizens from over 50 countries can enter the UAE visa-free. Check if your country qualifies for visa-on-arrival or pre-arranged visa.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Palmtree className="w-10 h-10 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Year-Round Destination</h3>
              <p className="text-gray-700 leading-relaxed">
                With sunshine 365 days a year, world-class shopping, pristine beaches, and cultural heritage sites, the UAE offers something for every traveler.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Welcoming</h3>
              <p className="text-gray-700 leading-relaxed">
                Ranked among the safest countries globally with excellent infrastructure, multilingual support, and tourist-friendly facilities throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Topics Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Everything You Need to Know</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visa Information</h3>
              <p className="text-gray-700 text-sm mb-3">The UAE offers various visa options for tourists. Citizens from over 50 countries including USA, UK, EU, Australia, and Canada can enter visa-free.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Transit Visa:</strong> 48-hour (AED 50) or 96-hour (AED 100) for layovers</li>
                <li>• <strong>Tourist Visa:</strong> 30-day single entry (AED 350) or 90-day multiple entry (AED 1,000)</li>
                <li>• <strong>Visa on Arrival:</strong> Free for eligible nationalities at all UAE airports</li>
                <li>• <strong>Extension:</strong> 30-day extension available for AED 750</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Plane className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting to the UAE</h3>
              <p className="text-gray-700 text-sm mb-3">The UAE is one of the world&apos;s most connected travel hubs with multiple entry options.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Dubai International (DXB):</strong> World&apos;s busiest for international passengers, 100+ airlines</li>
                <li>• <strong>Abu Dhabi (AUH):</strong> Etihad&apos;s hub, modern terminal with excellent connections</li>
                <li>• <strong>Sharjah (SHJ):</strong> Budget airline hub, 20 minutes from Dubai</li>
                <li>• <strong>By Sea:</strong> Dubai Cruise Terminal, Abu Dhabi Cruise Terminal</li>
                <li>• <strong>By Land:</strong> Border crossings from Oman (Al Ain, Hatta) & Saudi Arabia</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Hotel className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Where to Stay</h3>
              <p className="text-gray-700 text-sm mb-3">Accommodation options for every budget, from ultra-luxury to backpacker-friendly hostels.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Luxury Hotels:</strong> Burj Al Arab, Atlantis, Emirates Palace (AED 2,000-10,000+/night)</li>
                <li>• <strong>4-5 Star Hotels:</strong> International chains, marina views (AED 400-1,500/night)</li>
                <li>• <strong>Mid-Range:</strong> Holiday Inn, Novotel, local hotels (AED 200-400/night)</li>
                <li>• <strong>Budget:</strong> Ibis, Premier Inn, hostels (AED 80-200/night)</li>
                <li>• <strong>Serviced Apartments:</strong> Ideal for families, weekly rates available</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Palmtree className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Popular Activities</h3>
              <p className="text-gray-700 text-sm mb-3">Book unforgettable experiences - from desert adventures to world-record attractions.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Burj Khalifa:</strong> At the Top observation deck (AED 149-379)</li>
                <li>• <strong>Desert Safari:</strong> 4x4 dunes, BBQ dinner, shows (AED 150-250)</li>
                <li>• <strong>Dubai Frame:</strong> 150m high frame with glass walkway (AED 50)</li>
                <li>• <strong>Ferrari World:</strong> Formula Rossa roller coaster (AED 295)</li>
                <li>• <strong>Ski Dubai:</strong> Indoor skiing in the desert (AED 200+)</li>
                <li>• <strong>Dhow Cruise:</strong> Dubai Creek or Marina dinner cruise (AED 100-200)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Baby className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family-Friendly Facilities</h3>
              <p className="text-gray-700 text-sm mb-3">UAE is exceptionally family-friendly with dedicated facilities for parents and children.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Baby Care Rooms:</strong> All malls have dedicated nursing and changing rooms</li>
                <li>• <strong>Stroller Access:</strong> Wide pathways, elevators, ramps everywhere</li>
                <li>• <strong>Kids Eat Free:</strong> Many restaurants offer kids menus and promotions</li>
                <li>• <strong>Theme Parks:</strong> IMG Worlds, Legoland, Motiongate, Warner Bros</li>
                <li>• <strong>Medical Care:</strong> World-class pediatric hospitals, 24/7 pharmacies</li>
                <li>• <strong>Pregnant Women:</strong> Priority seating, special queues at airports</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Plane className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Airport Services</h3>
              <p className="text-gray-700 text-sm mb-3">World-class airport facilities designed to make your journey comfortable and efficient.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Fast Track:</strong> Skip long queues with Marhaba service (AED 150-500)</li>
                <li>• <strong>Airport Lounges:</strong> 40+ lounges across terminals with food & showers</li>
                <li>• <strong>Sleep Pods:</strong> Hourly rates for rest between flights (AED 50/hour)</li>
                <li>• <strong>Free WiFi:</strong> High-speed internet throughout all terminals</li>
                <li>• <strong>Duty-Free:</strong> Dubai Duty Free - world&apos;s largest with 24/7 shopping</li>
                <li>• <strong>Left Luggage:</strong> Secure storage for extended layovers</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Wifi className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile & Internet</h3>
              <p className="text-gray-700 text-sm mb-3">Stay connected with tourist-friendly mobile plans and widespread WiFi coverage.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Tourist SIMs:</strong> Available at airports - Etisalat & du offer packages</li>
                <li>• <strong>Visitor Line:</strong> AED 100 (4GB data, 60 mins calls, 7 days validity)</li>
                <li>• <strong>Data Plans:</strong> AED 50-200 for 1GB-10GB packages</li>
                <li>• <strong>Free WiFi:</strong> Malls, cafes, hotels, Metro stations, beaches</li>
                <li>• <strong>5G Network:</strong> Available in Dubai, Abu Dhabi, and major cities</li>
                <li>• <strong>WhatsApp Calls:</strong> VoIP calls blocked, use regular minutes</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Banknote className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Currency & Money</h3>
              <p className="text-gray-700 text-sm mb-3">Understanding UAE currency, payments, and how to get the best exchange rates.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Currency:</strong> UAE Dirham (AED), pegged to USD at 3.67 AED = 1 USD</li>
                <li>• <strong>Cards:</strong> Visa, Mastercard accepted everywhere, contactless common</li>
                <li>• <strong>ATMs:</strong> Widely available, most accept international cards</li>
                <li>• <strong>Exchange:</strong> Better rates at exchange houses than hotels/airports</li>
                <li>• <strong>VAT:</strong> 5% VAT applies to most goods/services</li>
                <li>• <strong>VAT Refund:</strong> Tourists can claim 5% back on purchases over AED 250</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency & Safety</h3>
              <p className="text-gray-700 text-sm mb-3">UAE is one of the world&apos;s safest countries with excellent emergency response services.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Police Emergency:</strong> 999 (multilingual operators, 24/7)</li>
                <li>• <strong>Ambulance:</strong> 998 (free emergency medical transport)</li>
                <li>• <strong>Fire/Civil Defence:</strong> 997</li>
                <li>• <strong>Tourist Police:</strong> Dedicated units at major attractions</li>
                <li>• <strong>Hospitals:</strong> World-class facilities, many accept international insurance</li>
                <li>• <strong>Lost & Found:</strong> 600 522 222 for Dubai, high recovery rates</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <HelpCircle className="w-8 h-8 text-gray-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FAQs & Travel Tips</h3>
              <p className="text-gray-700 text-sm mb-3">Essential information about local customs, weather, and travel best practices.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Best Time:</strong> November-March (20-30°C), avoid July-August (40-50°C)</li>
                <li>• <strong>Dress Code:</strong> Modest in public places, swimwear only at beaches/pools</li>
                <li>• <strong>Alcohol:</strong> Only at licensed venues (hotels, restaurants, bars)</li>
                <li>• <strong>Ramadan:</strong> No eating/drinking in public during daylight hours</li>
                <li>• <strong>Tipping:</strong> 10-15% in restaurants, AED 5-10 for taxis</li>
                <li>• <strong>Friday:</strong> Holy day, some shops closed until afternoon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section - Official UAE Government Info */}
      <section className="py-16 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-[var(--accent-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Official emergency numbers in the UAE - Available 24/7 with multilingual support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[var(--border-color)] rounded-lg p-6 text-center hover:border-[var(--accent-primary)] transition-colors">
              <div className="text-5xl font-bold text-[var(--accent-primary)] mb-2">999</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Police</h3>
              <p className="text-gray-600 text-sm">Emergency police services</p>
            </div>
            <div className="bg-white border-2 border-[var(--border-color)] rounded-lg p-6 text-center hover:border-[var(--accent-primary)] transition-colors">
              <div className="text-5xl font-bold text-[var(--accent-primary)] mb-2">998</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ambulance</h3>
              <p className="text-gray-600 text-sm">Medical emergencies</p>
            </div>
            <div className="bg-white border-2 border-[var(--border-color)] rounded-lg p-6 text-center hover:border-[var(--accent-primary)] transition-colors">
              <div className="text-5xl font-bold text-[var(--accent-primary)] mb-2">997</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Civil Defence</h3>
              <p className="text-gray-600 text-sm">Fire & rescue services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Museums & Cultural Attractions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Museums & Cultural Sites</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Abu Dhabi</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Qasr Al Hosn:</strong> Abu Dhabi&apos;s oldest stone building, showcasing the city&apos;s history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Sheikh Zayed Grand Mosque:</strong> Stunning white marble mosque, free entry with guided tours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Louvre Abu Dhabi:</strong> World-class art museum on Saadiyat Island</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dubai</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Dubai Museum:</strong> Located in Al Fahidi Fort, showcasing Dubai&apos;s transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Etihad Museum:</strong> Chronicles the founding of the UAE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Al Fahidi Historical District:</strong> Heritage area with traditional architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sharjah</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Sharjah Museum of Islamic Civilization:</strong> Extensive Islamic art and artifacts collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Sharjah Heritage Area:</strong> Traditional souks and museums</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Parks & Wildlife</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Al Ain Zoo:</strong> Large zoo with endangered species breeding programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Mangrove National Park:</strong> Kayaking through mangrove forests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span><strong>Safa Park & Zabeel Park:</strong> Popular Dubai green spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping & Entertainment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping & Entertainment</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Major Shopping Destinations</h3>
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Marina Mall & Yas Mall</h4>
                  <p className="text-sm text-gray-600">Premium shopping centers in Abu Dhabi</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Dubai Mall & Mall of Emirates</h4>
                  <p className="text-sm text-gray-600">World&apos;s largest malls with 1000+ stores</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Traditional Souks</h4>
                  <p className="text-sm text-gray-600">Gold, spice, textile markets in old Dubai & Sharjah</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Buy</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Gold & Jewelry:</strong> Tax-free shopping with competitive prices</li>
                  <li>• <strong>Electronics:</strong> Latest gadgets and devices</li>
                  <li>• <strong>Designer Fashion:</strong> International luxury brands</li>
                  <li>• <strong>Carpets & Textiles:</strong> Persian and local handmade items</li>
                  <li>• <strong>Spices & Dry Fruits:</strong> Fresh and authentic</li>
                  <li>• <strong>Perfumes & Oud:</strong> Traditional Arabian fragrances</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Shopping Festivals</h3>
            <p className="text-gray-700 mb-3">
              The UAE hosts several shopping festivals throughout the year with massive discounts, entertainment, and prize draws:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
              <li>• Dubai Shopping Festival (January) - Up to 75% off</li>
              <li>• Dubai Summer Surprises (June-August)</li>
              <li>• Ramadan Shopping Promotions</li>
              <li>• Global Village (November-April) - Cultural shopping park</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Master UAE Living?
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Get practical, no-nonsense advice on living smart in the Emirates. Built by expats, for expats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories"
              className="px-8 py-4 bg-[var(--accent-primary)] text-white rounded-lg font-medium text-lg hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
            >
              Start Exploring
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-[var(--bg-card)] border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg font-medium text-lg hover:bg-[var(--accent-light)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
            >
              Read Latest Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
