"use client";

import { Globe, Target, Wrench, Shield, Rocket, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useEmailCopy } from "@/lib/utils/emailCopy";

export default function About() {
    const { copyEmail, ToastComponent } = useEmailCopy();
    return (
        <>
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <div className="bg-primary-100 p-4 rounded-full shadow-sm">
                            <Globe className="w-12 h-12 text-primary-600" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">About {SITE_CONFIG.name}</h1>

                    <p className="text-xl text-stone-600 mb-4 leading-relaxed max-w-3xl mx-auto">
                        Welcome to {SITE_CONFIG.name}, your comprehensive guide for navigating life in the United Arab Emirates.
                    </p>

                    <p className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
                        We believe expat life in the UAE should be accessible, transparent, and rewarding for everyone.
                        That&apos;s why we&apos;ve built a collection of practical guides, tools, and resources designed to help you thrive in the Emirates.
                    </p>
                </div>

                {/* About Content */}
                <div className="space-y-16">
                    {/* Mission */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Target className="w-6 h-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Our Mission</h2>
                        </div>
                        <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                            <p className="text-lg text-stone-700 leading-relaxed mb-4">
                                At {SITE_CONFIG.name}, our mission is simple:
                            </p>
                            <p className="text-xl font-semibold text-primary-700 mb-4">
                                To empower expats with practical, actionable guidance on money management, digital tools, and smart living in the UAE.
                            </p>
                            <p className="text-stone-700 leading-relaxed">
                                Whether you&apos;re planning your move to the UAE, setting up your finances, or looking for the best apps and services, {SITE_CONFIG.shortName} has the insights you need.
                            </p>
                        </div>
                    </section>

                    {/* What We Offer */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Wrench className="w-6 h-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">What We Offer</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 border-l-4 border-primary-500">
                                <h3 className="font-semibold text-stone-900 mb-2">Practical UAE Guides</h3>
                                <p className="text-stone-700">Real-world advice from expats on budgeting, banking, housing, and navigating UAE systems.</p>
                            </div>
                            <div className="p-4 border-l-4 border-primary-500">
                                <h3 className="font-semibold text-stone-900 mb-2">Finance & Money Tools</h3>
                                <p className="text-stone-700">Calculators, comparisons, and tips for managing your money smartly in the UAE.</p>
                            </div>
                            <div className="p-4 border-l-4 border-primary-500">
                                <h3 className="font-semibold text-stone-900 mb-2">Digital Tools & Apps</h3>
                                <p className="text-stone-700">Reviews and recommendations for apps and services that work best in the Emirates.</p>
                            </div>
                            <div className="p-4 border-l-4 border-primary-500">
                                <h3 className="font-semibold text-stone-900 mb-2">Constantly Updated</h3>
                                <p className="text-stone-700">Fresh content reflecting current UAE realities, rules, and best practices.</p>
                            </div>
                        </div>
                    </section>

                    {/* Our Values */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Shield className="w-6 h-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Our Values</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4 p-4 bg-white border border-stone-100 rounded-lg hover:border-primary-200 transition-colors">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-1">Simplicity</h3>
                                    <p className="text-stone-700">Clear, straightforward guidance without unnecessary jargon.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-white border border-stone-100 rounded-lg hover:border-primary-200 transition-colors">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-1">Trust</h3>
                                    <p className="text-stone-700">Honest, transparent recommendations based on real experiences.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-white border border-stone-100 rounded-lg hover:border-primary-200 transition-colors">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-1">Accessibility</h3>
                                    <p className="text-stone-700">Free, practical advice accessible to all expats in the UAE.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-white border border-stone-100 rounded-lg hover:border-primary-200 transition-colors">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-1">Quality</h3>
                                    <p className="text-stone-700">Thoroughly researched content to ensure accuracy and reliability.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Vision */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Rocket className="w-6 h-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Our Vision</h2>
                        </div>
                        <div className="bg-gradient-to-r from-primary-100 to-amber-50 rounded-xl p-8 border border-primary-200">
                            <div className="max-w-3xl mx-auto text-center">
                                <p className="text-xl text-stone-800 leading-relaxed font-medium mb-4">
                                    We aim to grow {SITE_CONFIG.name} into the most trusted resource for expats living in the UAE, helping thousands make informed decisions about their finances, lifestyle, and future.
                                </p>
                                <p className="text-lg text-stone-700 leading-relaxed">
                                    Over time, we&apos;ll continue expanding with more tools, calculators, and comprehensive guides covering every aspect of UAE life.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Get in Touch */}
                    <section>
                        <div className="flex items-center mb-6">
                            <Mail className="w-6 h-6 text-primary-600 mr-3" />
                            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Get in Touch</h2>
                        </div>
                        <div className="bg-stone-50 rounded-xl p-8">
                            <div className="max-w-2xl mx-auto text-center">
                                <p className="text-lg text-stone-700 leading-relaxed mb-8">
                                    We love feedback and suggestions. If you have an idea for a guide or tool, or want to share your UAE experience, reach out to us at:
                                </p>
                                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 shadow-sm border border-stone-200">
                                    <Mail className="w-5 h-5 text-primary-600" />
                                    <button
                                        onClick={() => copyEmail(SITE_CONFIG.email)}
                                        className="text-lg font-medium text-stone-900 hover:text-primary-600 transition-colors cursor-pointer"
                                    >
                                        {SITE_CONFIG.email}
                                    </button>
                                </div>
                                <p className="text-sm text-stone-500 mt-4">
                                    We typically respond within 24-48 hours
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ToastComponent />
        </>
    );
}
