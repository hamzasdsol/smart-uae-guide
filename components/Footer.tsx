'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { MAIN_NAV_LINKS, LEGAL_NAV_LINKS } from '@/lib/navigation';
import { useEmailCopy } from '@/lib/utils/emailCopy';

export default function Footer() {
  const { copyEmail, ToastComponent } = useEmailCopy();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.name} Logo`}
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg mr-3"
              />
              <h3 className="!text-white text-xl font-bold">{SITE_CONFIG.name}</h3>
            </div>
            <p className="!text-gray-400 mb-4 max-w-md">
              Your comprehensive guide to smart living in the UAE. Practical advice on money management, tools, and expat life in the Emirates.
            </p>
            <div className="space-y-2">
              <h4 className="!text-white font-semibold text-sm">Contact Us</h4>
              <button
                onClick={() => copyEmail(SITE_CONFIG.email)}
                className="!text-primary-400 hover:!text-primary-300 transition-colors cursor-pointer text-left font-medium"
              >
                {SITE_CONFIG.email}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="!text-white font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {MAIN_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="!text-gray-400 hover:!text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="!text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              {LEGAL_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="!text-gray-400 hover:!text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="!text-gray-400 text-sm">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. Empowering expats with smart UAE living guidance.
            </p>
          </div>
        </div>
      </div>
      <ToastComponent />
    </footer>
  );
}
