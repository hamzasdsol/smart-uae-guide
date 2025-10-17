import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About Us - ${SITE_CONFIG.name} | UAE Living Guide`,
  description: `Learn about ${SITE_CONFIG.name}'s mission to help expats navigate UAE life with practical guides on money management, tools, and smart living in the Emirates.`,
  keywords: ['about smart uae guide', 'uae expat guide', 'dubai living guide', 'abu dhabi expat life', 'uae money management'],
  authors: [{ name: `${SITE_CONFIG.name} Team` }],
  openGraph: {
    title: `About Us - ${SITE_CONFIG.name}`,
    description: 'Practical guides and tools helping expats navigate money, tools, and life in the UAE.',
    url: `${SITE_CONFIG.url}/about`,
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
    title: `About Us - ${SITE_CONFIG.name}`,
    description: 'Practical guides and tools helping expats navigate money, tools, and life in the UAE.',
    images: [SITE_CONFIG.logo],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
