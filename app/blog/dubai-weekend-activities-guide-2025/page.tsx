import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Palmtree, Sun, Waves, Mountain, Calendar, Users, Baby, DollarSign, MapPin, Camera } from "lucide-react";

export const metadata = {
  title: "Dubai Weekend Activities Guide 2025 | Smart UAE Guide",
  description: "Complete guide to weekend activities in Dubai 2025. Discover beaches, parks, attractions, family activities, and free things to do every weekend."
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "beaches", label: "Best Beaches" },
  { id: "parks-outdoors", label: "Parks & Outdoors" },
  { id: "family-activities", label: "Family Activities" },
  { id: "cultural-attractions", label: "Cultural Attractions" },
  { id: "shopping-dining", label: "Shopping & Dining" },
  { id: "adventure-sports", label: "Adventure & Sports" },
  { id: "free-activities", label: "Free Activities" },
  { id: "seasonal-events", label: "Seasonal Events" },
  { id: "day-trips", label: "Day Trips from Dubai" },
  { id: "budget-tips", label: "Budget Tips" },
  { id: "bottom-line", label: "Bottom Line" }
];

export default function DubaiWeekendActivitiesGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dubai Weekend Activities Guide 2025
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: January 2025 | 13 min read
            </p>
          </header>

          <section id="introduction" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dubai offers an incredible variety of weekend activities for every interest and budget. From pristine beaches and world-class theme parks to cultural experiences and outdoor adventures, there&apos;s something for everyone. Whether you&apos;re a family with young children, an adventure seeker, or someone looking to relax and unwind, Dubai&apos;s weekend scene has you covered year-round.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This comprehensive guide covers the best weekend activities in Dubai for 2025, including free options, family-friendly destinations, cultural experiences, and adventure activities. We&apos;ll help you plan perfect weekends whether you&apos;re working with a tight budget or ready to splurge on premium experiences.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Weekend Planning Tips
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Friday:</strong> UAE weekend starts Thursday evening, Friday is the main day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Saturday:</strong> Busier at malls and attractions, Friday mornings are quieter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Weather:</strong> November-April perfect for outdoor activities, May-September focus on indoor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Booking:</strong> Book theme parks and popular attractions in advance for discounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 font-medium mt-1">•</span>
                  <span><strong>Traffic:</strong> Expect heavy traffic to popular spots, plan timing accordingly</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="beaches" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Waves className="w-8 h-8" />
              Best Beaches
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubai&apos;s beaches are among the best in the Middle East, with pristine white sand and clear blue waters. Most beaches are free and offer excellent facilities.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  JBR Beach (Jumeirah Beach Residence)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  <strong>Location:</strong> JBR, Dubai Marina
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Dubai&apos;s most popular public beach with a vibrant atmosphere, The Walk promenade with restaurants and shops, and excellent facilities including showers, changing rooms, and lifeguards.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> Free</li>
                  <li><strong>Best for:</strong> Families, people-watching, dining nearby</li>
                  <li><strong>Activities:</strong> Swimming, beach sports, watersports rentals</li>
                  <li><strong>Facilities:</strong> Showers, toilets, restaurants, parking (paid)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kite Beach</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  <strong>Location:</strong> Umm Suqeim, near Burj Al Arab
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Popular with active crowds, featuring kitesurfing, beach volleyball, and a laid-back vibe. Excellent food trucks and cafes nearby with Burj Al Arab views.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> Free</li>
                  <li><strong>Best for:</strong> Watersports enthusiasts, fitness crowd, young professionals</li>
                  <li><strong>Activities:</strong> Kitesurfing, paddleboarding, volleyball, running track</li>
                  <li><strong>Highlights:</strong> Salt restaurant, kite surf school, playground for kids</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">La Mer</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  <strong>Location:</strong> Jumeirah 1
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Trendy beachfront destination with a mix of beach access, shops, restaurants, and entertainment. More commercial than traditional beaches but excellent for families.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> Free beach access, paid activities</li>
                  <li><strong>Best for:</strong> Families, Instagram-worthy spots, shopping + beach combo</li>
                  <li><strong>Activities:</strong> Laguna Waterpark, cinema, dining, shopping</li>
                  <li><strong>Highlights:</strong> Clean facilities, many dining options, play areas</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sunset Beach (Umm Suqeim Beach)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Best spot for sunset views with Burj Al Arab as backdrop. Quieter than JBR, popular with families and photographers.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> Free</li>
                  <li><strong>Best for:</strong> Sunset photography, relaxed beach day, families</li>
                  <li><strong>Facilities:</strong> Basic (showers, parking)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Beach Clubs (Paid)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For a more luxurious experience:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>FIVE Palm Jumeirah:</strong> AED 150-300, adult party vibe</li>
                  <li><strong>Nikki Beach:</strong> AED 250-400, sophisticated crowd</li>
                  <li><strong>Atlantis The Palm Beach:</strong> AED 300-500, family-friendly with waterpark access</li>
                  <li><strong>Zero Gravity:</strong> AED 150-250, beach club with DJ and pools</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="parks-outdoors" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Palmtree className="w-8 h-8" />
              Parks & Outdoor Activities
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Al Qudra Lakes</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Desert oasis 45 minutes from Dubai, popular for cycling, picnics, and birdwatching. Beautiful scenery with man-made lakes surrounded by desert.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> Free</li>
                  <li><strong>Best for:</strong> Cycling, picnics, photography, nature lovers</li>
                  <li><strong>Facilities:</strong> Last Exit food trucks, bike rentals nearby</li>
                  <li><strong>Tip:</strong> Visit early morning or late afternoon to avoid heat</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dubai Miracle Garden</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  World&apos;s largest natural flower garden with 150 million flowers. Open November-May (closed in summer due to heat).
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> AED 75 adults, AED 60 children</li>
                  <li><strong>Best for:</strong> Families, photography, unique experience</li>
                  <li><strong>Highlights:</strong> Flower-covered structures, Emirates A380 display</li>
                  <li><strong>Tip:</strong> Visit during the week to avoid weekend crowds</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dubai Creek Park</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Large urban park along Dubai Creek with jogging tracks, play areas, and picnic spots. Cable car offers aerial views.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> AED 5 entry</li>
                  <li><strong>Best for:</strong> Budget family outings, jogging, cycling</li>
                  <li><strong>Activities:</strong> Cable car (AED 30), barbecue areas, playgrounds</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zabeel Park</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Technology-themed park with panoramic views of Dubai skyline. Home to Dubai Frame landmark.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> AED 5 entry (Dubai Frame AED 50 extra)</li>
                  <li><strong>Best for:</strong> Families, picnics, Dubai Frame visit</li>
                  <li><strong>Facilities:</strong> Playgrounds, sports facilities, dining options</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hatta Mountain Activities</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  90-minute drive from Dubai, offering mountain biking, kayaking, hiking, and camping.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> Activities AED 50-150 each</li>
                  <li><strong>Best for:</strong> Adventure seekers, weekend getaway, cooler weather</li>
                  <li><strong>Highlights:</strong> Hatta Dam, mountain biking trails, Hatta Wadi Hub</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="family-activities" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Baby className="w-8 h-8" />
              Family Activities
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubai is extremely family-friendly with world-class attractions for children of all ages.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Theme Parks</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>IMG Worlds of Adventure:</strong> Indoor theme park, AED 345 adults, AED 295 children
                    <br /><span className="text-sm">Best for: Air-conditioned fun, Marvel/Cartoon Network fans</span>
                  </li>
                  <li>
                    <strong>Dubai Parks & Resorts:</strong> Multiple parks (Motiongate, Bollywood Parks, Legoland), AED 295-395
                    <br /><span className="text-sm">Best for: Full day outing, families with kids 3-12</span>
                  </li>
                  <li>
                    <strong>Wild Wadi Waterpark:</strong> AED 295 adults, AED 255 children
                    <br /><span className="text-sm">Best for: Waterslide fans, families, hot weather relief</span>
                  </li>
                  <li>
                    <strong>Aquaventure Atlantis:</strong> AED 350-400
                    <br /><span className="text-sm">Best for: Premium waterpark experience, marine animal encounters</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Budget tip:</strong> Buy annual passes if visiting 3+ times, use Entertainer app for 2-for-1 deals
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Edutainment Centers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>KidZania Dubai Mall:</strong> AED 120-145, role-playing city for kids 4-16</li>
                  <li><strong>OliOli Children&apos;s Museum:</strong> AED 125, interactive learning for kids 2-11</li>
                  <li><strong>Green Planet:</strong> AED 125, indoor tropical rainforest</li>
                  <li><strong>VR Park Dubai Mall:</strong> AED 50-150, virtual reality experiences</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Animal Experiences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Dubai Aquarium & Underwater Zoo:</strong> AED 150, Dubai Mall</li>
                  <li><strong>Dubai Safari Park:</strong> AED 50-85, extensive zoo with African, Asian, Arabian sections</li>
                  <li><strong>Dubai Dolphinarium:</strong> AED 100-150, dolphin and seal shows</li>
                  <li><strong>Lost Chambers Aquarium:</strong> AED 150, Atlantis The Palm</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="cultural-attractions" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Camera className="w-8 h-8" />
              Cultural Attractions
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Old Dubai & Heritage Sites</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Al Fahidi Historical Neighborhood:</strong> Free, traditional architecture and art galleries
                  </li>
                  <li>
                    <strong>Dubai Museum:</strong> AED 3, housed in Al Fahidi Fort, city history
                  </li>
                  <li>
                    <strong>Gold & Spice Souks:</strong> Free to explore, traditional markets
                  </li>
                  <li>
                    <strong>Abra rides on Dubai Creek:</strong> AED 1, traditional water taxi
                  </li>
                  <li>
                    <strong>Jumeirah Mosque:</strong> AED 35, guided tours explaining Islamic culture
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Landmarks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Burj Khalifa At the Top:</strong> AED 149-379 depending on time, world&apos;s tallest building</li>
                  <li><strong>Dubai Frame:</strong> AED 50, panoramic views connecting Old and New Dubai</li>
                  <li><strong>Museum of the Future:</strong> AED 145, futuristic exhibitions</li>
                  <li><strong>Dubai Fountain Show:</strong> Free, every 30 minutes evening, outside Dubai Mall</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Art & Culture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Alserkal Avenue:</strong> Free, contemporary art galleries in Al Quoz</li>
                  <li><strong>Dubai Opera:</strong> Ticket prices vary, world-class performances</li>
                  <li><strong>Etihad Museum:</strong> AED 25, UAE history and formation</li>
                  <li><strong>Jameel Arts Centre:</strong> Free, contemporary art museum</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="shopping-dining" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Shopping & Dining Experiences
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Major Malls</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Dubai Mall:</strong> World&apos;s largest, aquarium, ice rink, cinema, 1,200+ stores</li>
                  <li><strong>Mall of the Emirates:</strong> Ski Dubai, VOX cinema, 630+ stores</li>
                  <li><strong>City Walk:</strong> Open-air shopping, dining, entertainment</li>
                  <li><strong>Ibn Battuta Mall:</strong> Unique themed sections, budget-friendly</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weekend Brunches</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Friday brunch is a Dubai institution. Popular options:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Budget:</strong> AED 150-250 (Al Nafoorah, Rosang, Zaroob)</li>
                  <li><strong>Mid-range:</strong> AED 300-500 (Vida Downtown, La Cantine)</li>
                  <li><strong>Premium:</strong> AED 500-1,000+ (Atlantis, Burj Al Arab, JW Marriott Marquis)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Tip:</strong> Book in advance, use Entertainer app for 50% off at selected venues
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Food Trucks & Casual Dining</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Last Exit:</strong> Food truck parks at multiple highway locations</li>
                  <li><strong>Ripe Market:</strong> Weekend farmers market, organic products and food</li>
                  <li><strong>BoxPark:</strong> Shipping container retail park with restaurants</li>
                  <li><strong>Kite Beach cafes:</strong> Salt, Surf Café, beach dining</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="adventure-sports" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Mountain className="w-8 h-8" />
              Adventure & Sports
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Desert Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Desert Safari:</strong> AED 150-300, dune bashing, BBQ dinner, entertainment</li>
                  <li><strong>Hot Air Balloon:</strong> AED 900-1,200, sunrise desert flights</li>
                  <li><strong>Quad Biking:</strong> AED 200-400, desert dune riding</li>
                  <li><strong>Sandboarding:</strong> Free if you have board, or included in safari packages</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Sports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Kitesurfing:</strong> Lessons AED 300-500, equipment rental AED 150-250</li>
                  <li><strong>Paddleboarding:</strong> AED 50-100 per hour rental</li>
                  <li><strong>Jet Skiing:</strong> AED 150-300 for 30 minutes</li>
                  <li><strong>Scuba Diving:</strong> AED 250-400, multiple diving centers</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Unique Experiences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Skydiving over Palm Jumeirah:</strong> AED 1,999, tandem jump</li>
                  <li><strong>XLine Dubai Marina:</strong> AED 650, zipline across Marina</li>
                  <li><strong>iFly Indoor Skydiving:</strong> AED 275, 2 flights</li>
                  <li><strong>Ski Dubai:</strong> AED 255-455, indoor skiing and snowboarding</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fitness & Wellness</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Outdoor yoga:</strong> Free community classes at Kite Beach, Zabeel Park</li>
                  <li><strong>Beach running:</strong> Free, JBR and Kite Beach have running tracks</li>
                  <li><strong>Cycling tracks:</strong> Al Qudra cycling track (80km), free</li>
                  <li><strong>Hiking:</strong> Hatta mountains, various difficulty levels</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="free-activities" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Free Weekend Activities
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">15 Best Free Things to Do</h3>
                <ol className="space-y-2 text-gray-700 list-decimal ml-6">
                  <li><strong>Dubai Fountain Show:</strong> Spectacular water and light show every 30 minutes</li>
                  <li><strong>Al Fahidi Historical Neighborhood:</strong> Explore traditional Dubai architecture</li>
                  <li><strong>Gold & Spice Souks:</strong> Traditional market experience</li>
                  <li><strong>JBR Beach & The Walk:</strong> Beach day with promenade stroll</li>
                  <li><strong>Kite Beach:</strong> Watch kitesurfers, play volleyball, enjoy food trucks</li>
                  <li><strong>Dubai Creek Abra Ride:</strong> Only AED 1 for traditional water taxi</li>
                  <li><strong>Al Seef:</strong> Waterfront promenade blending old and new Dubai</li>
                  <li><strong>Dubai Marina Walk:</strong> 7km promenade with yacht views</li>
                  <li><strong>Alserkal Avenue:</strong> Contemporary art galleries (free entry)</li>
                  <li><strong>Jameel Arts Centre:</strong> Free contemporary art museum</li>
                  <li><strong>Community events:</strong> Check Time Out Dubai for free festivals and concerts</li>
                  <li><strong>Dubai Garden Glow:</strong> Free outdoor area (entry fees only for inside)</li>
                  <li><strong>Global Village:</strong> AED 20 entry, cultural pavilions and entertainment</li>
                  <li><strong>Ripe Market:</strong> Browse organic produce and artisan goods</li>
                  <li><strong>Photography at landmarks:</strong> Burj Khalifa, Burj Al Arab, Dubai Frame (from outside)</li>
                </ol>
              </div>
            </div>
          </section>

          <section id="seasonal-events" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Seasonal Events
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Annual Events Calendar</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Dubai Shopping Festival (January-February):</strong> City-wide sales, entertainment, fireworks
                  </li>
                  <li>
                    <strong>Art Dubai (March):</strong> International art fair, galleries and exhibitions
                  </li>
                  <li>
                    <strong>Ramadan (varies):</strong> Iftar tents, special promotions, night markets
                  </li>
                  <li>
                    <strong>Dubai Food Festival (April):</strong> Citywide culinary celebration
                  </li>
                  <li>
                    <strong>Dubai Summer Surprises (June-August):</strong> Indoor activities, mall promotions
                  </li>
                  <li>
                    <strong>Dubai Fitness Challenge (October-November):</strong> 30 days of free fitness activities
                  </li>
                  <li>
                    <strong>Expo City Dubai Events:</strong> Year-round exhibitions and events
                  </li>
                  <li>
                    <strong>Global Village (November-April):</strong> Cultural pavilions, entertainment, food
                  </li>
                  <li>
                    <strong>Dubai Jazz Festival (February):</strong> International music performances
                  </li>
                  <li>
                    <strong>UAE National Day (December 2):</strong> Celebrations, fireworks, free events</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="day-trips" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Day Trips from Dubai
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Abu Dhabi (1.5 hours)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Sheikh Zayed Grand Mosque:</strong> Free, stunning architecture</li>
                  <li><strong>Louvre Abu Dhabi:</strong> AED 60, world-class art museum</li>
                  <li><strong>Yas Island:</strong> Ferrari World, Warner Bros World, Yas Waterworld</li>
                  <li><strong>Qasr Al Watan:</strong> AED 60, presidential palace</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hatta (1.5 hours)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Mountain biking, hiking, kayaking on Hatta Dam</li>
                  <li>Hatta Heritage Village</li>
                  <li>Cooler temperatures, mountain scenery</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sharjah (30 minutes)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Sharjah Art Museum:</strong> Free Fridays, excellent collection</li>
                  <li><strong>Al Noor Mosque:</strong> Cultural tours</li>
                  <li><strong>Sharjah Aquarium:</strong> AED 25, marine life</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Al Ain (1.5 hours)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Al Ain Zoo, Jebel Hafeet mountain, hot springs</li>
                  <li>Al Ain Oasis, heritage sites</li>
                  <li>Cooler climate, garden city atmosphere</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="budget-tips" className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8" />
              Budget Tips for Weekend Activities
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10 Money-Saving Strategies</h3>
                <ol className="space-y-3 text-gray-700 list-decimal ml-6">
                  <li><strong>Entertainer App:</strong> AED 170 for 2-for-1 deals at restaurants, theme parks, activities</li>
                  <li><strong>Credit card offers:</strong> Many banks offer weekend dining and entertainment discounts</li>
                  <li><strong>Annual passes:</strong> If visiting theme parks 3+ times, annual pass saves 40-50%</li>
                  <li><strong>Book online:</strong> Attractions often 10-20% cheaper when booked in advance online</li>
                  <li><strong>Group buying sites:</strong> Groupon UAE, Cobone for 50-70% off experiences</li>
                  <li><strong>Free beach vs. beach clubs:</strong> Save AED 150-400 per person</li>
                  <li><strong>Pack picnics:</strong> Save AED 50-100 per person vs. restaurant meals</li>
                  <li><strong>Weekday visits:</strong> Some attractions offer weekday discounts</li>
                  <li><strong>Resident rates:</strong> Many attractions offer UAE resident discounts with Emirates ID</li>
                  <li><strong>Free events:</strong> Follow Time Out Dubai, What&apos;s On for free weekend events</li>
                </ol>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sample Weekend Budgets</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Budget Weekend (AED 100-200 for family):</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Free beach day + picnic lunch</li>
                      <li>• Dubai Creek walk + AED 1 abra ride</li>
                      <li>• Al Fahidi neighborhood exploration</li>
                      <li>• Evening at Dubai Fountain</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Mid-Range Weekend (AED 500-800 for family):</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Saturday: IMG Worlds with Entertainer discount</li>
                      <li>• Sunday: Brunch AED 300 + afternoon at Zabeel Park</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Premium Weekend (AED 2,000+ for family):</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Saturday: Atlantis Aquaventure + lunch</li>
                      <li>• Sunday: Premium brunch + Burj Khalifa At the Top</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="bottom-line" className="mb-10">
            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bottom Line</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dubai offers endless weekend activities for every budget and interest. Free options like JBR Beach, Dubai Fountain, Gold Souk, and Al Fahidi neighborhood provide authentic Dubai experiences without spending a dirham. For families, theme parks like IMG Worlds and Dubai Parks offer world-class entertainment (use Entertainer app for 50% savings), while cultural attractions like the Museum of the Future and Alserkal Avenue blend education with entertainment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The key to maximizing your Dubai weekends is strategic planning: book attractions online for 10-20% discounts, time major purchases during shopping festivals, and balance free outdoor activities (beaches, parks, heritage sites) with occasional paid experiences. Dubai&apos;s year-round sunshine means outdoor activities dominate November-April, while summer months (May-October) shift focus to indoor attractions like malls, museums, and indoor theme parks. Whatever your budget, Dubai guarantees memorable weekends - from AED 100 budget days to AED 2,000+ premium experiences, quality entertainment is always accessible.
              </p>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog/uae-dining-guide-best-restaurants-cafes" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    UAE Dining Guide: Best Restaurants & Cafes
                  </Link>
                </li>
                <li>
                  <Link href="/blog/uae-fitness-gyms-guide-memberships-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    UAE Fitness & Gyms Guide: Memberships 2025
                  </Link>
                </li>
                <li>
                  <Link href="/blog/saving-money-uae-tips-strategies-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Saving Money in UAE: Tips & Strategies 2025
                  </Link>
                </li>
                <li>
                  <Link href="/blog/monthly-budget-breakdown-dubai-family-2025" className="text-gray-700 hover:text-gray-900 underline font-medium">
                    Monthly Budget Breakdown for Dubai Family 2025
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
