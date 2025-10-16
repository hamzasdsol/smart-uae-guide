import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-sm text-[var(--text-secondary)]">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">General Information</h2>
        <p className="text-[var(--text-secondary)]">
          The information provided on {SITE_CONFIG.name} is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Financial Information</h2>
        <p className="text-[var(--text-secondary)]">
          {SITE_CONFIG.name} provides guides and information about finance, budgeting, and money management. This content is for educational purposes only and should not be considered financial advice. Always consult with qualified financial professionals before making financial decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Links</h2>
        <p className="text-[var(--text-secondary)]">
          {SITE_CONFIG.name} may contain affiliate links to products and services. If you make a purchase through these links, we may earn a commission at no additional cost to you. We only recommend products and services we believe will add value to our readers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">External Links</h2>
        <p className="text-[var(--text-secondary)]">
          Our site may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, or completeness of any information on these external sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes and Updates</h2>
        <p className="text-[var(--text-secondary)]">
          Information on {SITE_CONFIG.name} may change without notice. Prices, features, and availability of products and services mentioned on our site are subject to change. Always verify current information with official sources before making decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Advice</h2>
        <p className="text-[var(--text-secondary)]">
          The guides and content on {SITE_CONFIG.name} are not substitutes for professional advice. For specific situations, please consult with appropriate licensed professionals in the relevant field.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="text-[var(--text-secondary)]">
          If you have questions about this disclaimer, please contact us at {SITE_CONFIG.email}.
        </p>
      </div>
    </div>
  );
}
