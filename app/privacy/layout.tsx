import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_CONFIG.name}`,
  description: `Read ${SITE_CONFIG.name}'s privacy policy. We prioritize your privacy with minimal data collection and transparent practices regarding analytics and affiliate partnerships.`,
  keywords: ['privacy policy', 'smart uae guide privacy', 'data protection', 'affiliate disclosure'],
  authors: [{ name: `${SITE_CONFIG.name} Team` }],
  openGraph: {
    title: `Privacy Policy - ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.name}'s privacy policy - minimal data collection with transparent practices.`,
    url: `${SITE_CONFIG.url}/privacy`,
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
    title: `Privacy Policy - ${SITE_CONFIG.name}`,
    description: 'Privacy policy with transparent data practices and affiliate disclosures.',
    images: [SITE_CONFIG.logo],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
