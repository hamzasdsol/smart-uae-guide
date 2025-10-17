import type { Metadata } from "next";
import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `404 - Page Not Found | ${SITE_CONFIG.name}`,
  description: `Oops! The page you're looking for doesn't exist. Navigate back to ${SITE_CONFIG.name} to explore our UAE living guides, tools, and expat resources.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-12">
            <div className="inline-block relative">
              <div className="text-[120px] md:text-[180px] font-bold bg-gradient-to-br from-primary-400 via-primary-600 to-primary-800 bg-clip-text text-transparent leading-none select-none">
                404
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
                <div className="bg-primary-100 rounded-full p-3 md:p-4">
                  <Compass className="w-8 h-8 md:w-12 md:h-12 text-primary-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            It seems like you&apos;re lost.<br />
            Don&apos;t worry just go
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              <Home className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-600 hover:bg-primary-600 hover:text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              <Compass className="mr-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Learn More
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/about"
                className="text-sm text-primary-600 hover:text-primary-700 hover:underline transition-colors"
              >
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/contact"
                className="text-sm text-primary-600 hover:text-primary-700 hover:underline transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
  );
}
