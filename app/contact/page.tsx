"use client";

import { Mail, Bug, Wrench, Handshake, Shield, FileText } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { useEmailCopy } from "@/lib/utils/emailCopy";

export default function Contact() {
    const { copyEmail, ToastComponent } = useEmailCopy();
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact {SITE_CONFIG.name}</h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Have a question, suggestion, or want to report an issue? <br />We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="space-y-8 sm:space-y-12">
                    {/* Main Email Section */}
                    <section className="text-center">
                        <div className="bg-gradient-to-r from-stone-50 to-amber-50/30 rounded-xl p-6 sm:p-8 border border-stone-200">
                            <div className="flex justify-center mb-4">
                                <div className="bg-stone-700 rounded-full p-3">
                                    <Mail className="w-8 h-8 text-stone-50" />
                                </div>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4">General Contact</h2>
                            <button
                                onClick={() => copyEmail(SITE_CONFIG.email)}
                                className="inline-flex items-center text-lg sm:text-2xl font-semibold text-stone-700 hover:text-stone-900 transition-colors cursor-pointer hover:bg-stone-100 rounded-lg px-3 py-2"
                            >
                                <Mail className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                                {SITE_CONFIG.email}
                            </button>
                        </div>
                    </section>

                    {/* Quick Contact Links */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6 sm:mb-8 text-center">Quick Contact Options</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                            {/* Bug Report */}
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:p-6 hover:border-stone-300 hover:shadow-md transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="bg-rose-100 rounded-full p-2 mr-3">
                                        <Bug className="w-5 h-5 text-rose-700" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-stone-800">Bug Report</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Found an issue with our site or tools? Help us improve by reporting bugs.</p>
                                <button
                                    onClick={() => copyEmail(SITE_CONFIG.email)}
                                    className="inline-flex items-center text-stone-700 hover:text-stone-900 font-medium transition-colors hover:bg-stone-100 rounded px-2 py-1"
                                >
                                    Report Bug
                                    <Mail className="w-4 h-4 ml-1" />
                                </button>
                            </div>

                            {/* Guide Request */}
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:p-6 hover:border-stone-300 hover:shadow-md transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="bg-amber-100 rounded-full p-2 mr-3">
                                        <Wrench className="w-5 h-5 text-amber-700" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-stone-800">Guide Request</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Need a guide or tool we don&apos;t have yet? Suggest new content for our collection.</p>
                                <button
                                    onClick={() => copyEmail(SITE_CONFIG.email)}
                                    className="inline-flex items-center text-stone-700 hover:text-stone-900 font-medium transition-colors hover:bg-stone-100 rounded px-2 py-1"
                                >
                                    Request Guide
                                    <Mail className="w-4 h-4 ml-1" />
                                </button>
                            </div>

                            {/* Partnership */}
                            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 hover:border-stone-300 hover:shadow-md transition-all">
                                <div className="flex items-center mb-4">
                                    <div className="bg-emerald-100 rounded-full p-2 mr-3">
                                        <Handshake className="w-5 h-5 text-emerald-700" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-stone-800">Partnership</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Interested in collaborating? Let&apos;s discuss potential partnership opportunities.</p>
                                <button
                                    onClick={() => copyEmail(SITE_CONFIG.email)}
                                    className="inline-flex items-center text-stone-700 hover:text-stone-900 font-medium transition-colors hover:bg-stone-100 rounded px-2 py-1"
                                >
                                    Get in Touch
                                    <Mail className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Privacy Note & Links */}
                    <section className="bg-stone-50 rounded-xl p-6 sm:p-8 border border-stone-200">
                        <div className="text-center mb-6">
                            <div className="flex justify-center mb-4">
                                <Shield className="w-6 h-6 text-stone-600" />
                            </div>
                            <p className="text-stone-700 text-lg leading-relaxed max-w-2xl mx-auto">
                                We do not collect personal data. Your email arrives directly in our inbox.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                            <Link
                                href="/privacy"
                                className="flex items-center text-stone-700 hover:text-stone-900 transition-colors font-medium"
                            >
                                <Shield className="w-4 h-4 mr-1" />
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="flex items-center text-stone-700 hover:text-stone-900 transition-colors font-medium"
                            >
                                <FileText className="w-4 h-4 mr-1" />
                                Terms & Conditions
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
            <ToastComponent />
        </>
    );
}
