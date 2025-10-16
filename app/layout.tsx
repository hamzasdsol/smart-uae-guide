import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: SITE_CONFIG.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b bg-[var(--bg-card)] border-[var(--border-color)] sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none">
              <Image src={SITE_CONFIG.logo} alt={`${SITE_CONFIG.shortName} Logo`} width={32} height={32} className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">{SITE_CONFIG.shortName}</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                Home
              </Link>
              <Link href="/categories" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                Categories
              </Link>
              <Link href="/blog" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                Blog
              </Link>
              <Link href="/about" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                About
              </Link>
              <Link href="/contact" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                Contact
              </Link>
            </nav>
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t bg-[var(--bg-card)] border-[var(--border-color)] mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Image src={SITE_CONFIG.logo} alt={`${SITE_CONFIG.shortName} Logo`} width={24} height={24} className="w-6 h-6 rounded-md" />
                <span className="text-sm text-[var(--text-secondary)]">© {new Date().getFullYear()} {SITE_CONFIG.shortName}</span>
              </div>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                  Terms
                </Link>
                <Link href="/disclaimer" className="hover:text-[var(--accent-primary)] focus:text-[var(--accent-primary)] transition-colors focus:outline-none">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
