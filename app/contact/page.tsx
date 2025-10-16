import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-[calc(100vh-16rem)]">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-lg text-[var(--text-secondary)]">
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>

        <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-[var(--text-secondary)] mb-2">
            Email us at:
          </p>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-lg font-medium text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors focus:outline-none"
          >
            {SITE_CONFIG.email}
          </a>
        </div>

        <p className="text-[var(--text-secondary)]">
          We aim to respond to all inquiries within 2-3 business days. Whether you have a question about our guides, want to suggest a topic, or need clarification on any content, feel free to reach out.
        </p>
      </div>
    </div>
  );
}
