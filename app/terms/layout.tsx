import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms and Conditions - ${SITE_CONFIG.name}`,
  description: `Read ${SITE_CONFIG.name}'s terms and conditions for using our guides, tools, and content. Includes affiliate marketing disclosures and usage guidelines.`,
  keywords: ['terms and conditions', 'smart uae guide terms', 'terms of use', 'affiliate disclosure'],
  authors: [{ name: `${SITE_CONFIG.name} Team` }],
  openGraph: {
    title: `Terms and Conditions - ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.name} terms and conditions for using our UAE guides and tools.`,
    url: `${SITE_CONFIG.url}/terms`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.logo,
        width: 500,
        height: 500,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Terms and Conditions - ${SITE_CONFIG.name}`,
    description: 'Terms and conditions for using our UAE guides and tools.',
    images: [SITE_CONFIG.logo],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
