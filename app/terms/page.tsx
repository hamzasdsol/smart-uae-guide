import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-sm text-[var(--text-secondary)]">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
        <p className="text-[var(--text-secondary)]">
          By accessing and using {SITE_CONFIG.name}, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Content</h2>
        <p className="text-[var(--text-secondary)]">
          All content on {SITE_CONFIG.name} is provided for informational purposes only. We make reasonable efforts to ensure accuracy, but we do not guarantee that all information is complete, current, or error-free.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Relationships</h2>
        <p className="text-[var(--text-secondary)]">
          {SITE_CONFIG.name} participates in affiliate marketing programs. We may earn commissions from purchases made through links on our site. This does not affect the price you pay and helps us maintain our content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">User Conduct</h2>
        <p className="text-[var(--text-secondary)]">
          You agree to use {SITE_CONFIG.name} only for lawful purposes. You may not use our site in any way that could damage, disable, or impair the site or interfere with any other party's use of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-[var(--text-secondary)]">
          {SITE_CONFIG.name} and its contributors are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the site or reliance on any information provided.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
        <p className="text-[var(--text-secondary)]">
          We reserve the right to modify these terms at any time. Continued use of the site after changes are posted constitutes acceptance of the modified terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="text-[var(--text-secondary)]">
          Questions about these Terms of Service can be directed to {SITE_CONFIG.email}.
        </p>
      </div>
    </div>
  );
}
