import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact Us - ${SITE_CONFIG.name} | Get in Touch`,
  description: `Contact ${SITE_CONFIG.name} for questions, suggestions, guide requests, or partnership opportunities. We're here to help with your UAE living queries.`,
  keywords: ['contact smart uae guide', 'uae guide support', 'expat help uae', 'dubai guide contact'],
  authors: [{ name: `${SITE_CONFIG.name} Team` }],
  openGraph: {
    title: `Contact Us - ${SITE_CONFIG.name}`,
    description: 'Get in touch with us for UAE living questions, guide requests, or partnership opportunities.',
    url: `${SITE_CONFIG.url}/contact`,
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
    title: `Contact Us - ${SITE_CONFIG.name}`,
    description: 'Get in touch with us for UAE living questions, guide requests, or partnership opportunities.',
    images: [SITE_CONFIG.logo],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
