import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-sm text-[var(--text-secondary)]">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="text-[var(--text-secondary)]">
          When you visit {SITE_CONFIG.name}, we may collect certain information automatically, including your IP address, browser type, device information, and pages visited. This information helps us understand how visitors use our site and improve our content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p className="text-[var(--text-secondary)]">
          Our site uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences and analyze site traffic. You can disable cookies in your browser settings, though this may affect site functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p className="text-[var(--text-secondary)]">
          We may use third-party analytics services to better understand how visitors interact with our site. These services may collect information about your use of our site and other websites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Links</h2>
        <p className="text-[var(--text-secondary)]">
          {SITE_CONFIG.name} may contain affiliate links. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. This helps support our content creation efforts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p className="text-[var(--text-secondary)]">
          We take reasonable measures to protect the information we collect. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="text-[var(--text-secondary)]">
          If you have any questions about this Privacy Policy, please contact us at {SITE_CONFIG.email}.
        </p>
      </div>
    </div>
  );
}
