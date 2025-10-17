import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Disclaimer - ${SITE_CONFIG.name}`,
  description: `${SITE_CONFIG.name} disclaimer - Our guides and tools provide information for general purposes only. Consult professionals for financial, legal, and immigration advice.`,
  keywords: ['disclaimer', 'smart uae guide disclaimer', 'legal disclaimer', 'affiliate disclaimer'],
  authors: [{ name: `${SITE_CONFIG.name} Team` }],
  openGraph: {
    title: `Disclaimer - ${SITE_CONFIG.name}`,
    description: 'Disclaimer - guides and tools provide information for general purposes only.',
    url: `${SITE_CONFIG.url}/disclaimer`,
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
    title: `Disclaimer - ${SITE_CONFIG.name}`,
    description: 'Disclaimer and legal information for UAE guides and tools.',
    images: [SITE_CONFIG.logo],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/disclaimer`,
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
