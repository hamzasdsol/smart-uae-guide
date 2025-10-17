import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
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
        <Footer />
      </body>
    </html>
  );
}
