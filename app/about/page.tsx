import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About {SITE_CONFIG.name}</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-lg text-[var(--text-secondary)]">
          {SITE_CONFIG.name} is your go-to resource for navigating expat life in the United Arab Emirates. We provide practical, no-nonsense guides on money management, digital tools, and everyday living in the UAE.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-[var(--text-secondary)]">
          We believe that living in the UAE should be simple and smart. Our guides help you make informed decisions about budgeting, finance, shopping, and lifestyle choices without the complexity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Cover</h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
          <li>Budget planning and cost of living analysis</li>
          <li>Finance tools, banking, and investment options</li>
          <li>Digital productivity tools for expats</li>
          <li>Smart shopping strategies across UAE platforms</li>
          <li>Practical lifestyle setup guides</li>
        </ul>

        <p className="text-[var(--text-secondary)] mt-8">
          All our content is designed to be clear, actionable, and relevant to expats and residents living in the UAE today.
        </p>
      </div>
    </div>
  );
}
