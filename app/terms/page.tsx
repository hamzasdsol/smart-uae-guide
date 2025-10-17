"use client";

import { FileText } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useEmailCopy } from "@/lib/utils/emailCopy";
import { getCurrentDate } from "@/lib/utils/date";

export default function TermsAndConditions() {
    const { copyEmail, ToastComponent } = useEmailCopy();
    return (
        <>
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <div className="bg-primary-100 p-4 rounded-full">
                            <FileText className="w-12 h-12 text-primary-600" />
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Please read these terms carefully before using our guides, tools, and services.
                    </p>

                    <div className="text-sm text-gray-500 mb-12">
                        <strong>Last updated:</strong> {getCurrentDate()}
                    </div>
                </div>

                {/* Terms and Conditions Content */}
                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                By accessing {SITE_CONFIG.name}, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you should not use this website.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use of Content and Tools</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>All guides, articles, and tools provided on {SITE_CONFIG.name} are free to use unless otherwise stated.</p>
                            <p>Our content and tools are designed for informational and educational purposes only.</p>
                            <p>You are solely responsible for how you use the information and results provided by our guides and tools.</p>
                            <p>Content and tools are provided &quot;as is&quot; without warranties of any kind.</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Intellectual Property</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                All content, design, code, and features available on {SITE_CONFIG.name} are the intellectual property of {SITE_CONFIG.name} unless otherwise noted.
                            </p>
                            <p>
                                You may not copy, reproduce, distribute, or resell our content or tools without prior written permission.
                            </p>
                            <p>
                                You may share links to our content and reference our guides with proper attribution.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 - Affiliate Marketing */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Affiliate Marketing and Partnerships</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                {SITE_CONFIG.name} participates in affiliate marketing programs and may earn commissions from purchases made through links on our site.
                            </p>
                            <p>
                                We may feature sponsored content, product recommendations, or service reviews that include affiliate links. These will be disclosed where appropriate.
                            </p>
                            <p>
                                Our affiliate partnerships do not compromise the integrity of our content. We only recommend products and services we believe provide genuine value to the UAE expat community.
                            </p>
                            <p>
                                Third-party merchants are responsible for the products and services offered through affiliate links. We are not liable for any issues arising from transactions with these merchants.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Third-Party Services and Advertisements</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                {SITE_CONFIG.name} may display third-party advertisements (such as Google AdSense). These services may use cookies or tracking technologies.
                            </p>
                            <p>
                                We are not responsible for the content, products, or services offered by third-party sites linked or advertised on {SITE_CONFIG.name}.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                {SITE_CONFIG.name} is not responsible for any errors, inaccuracies, or losses resulting from the use of our guides, content, or tools.
                            </p>
                            <p>
                                We make no guarantees regarding the accuracy, completeness, or reliability of any information or results provided.
                            </p>
                            <p>
                                Information about UAE regulations, banking, housing, and other topics may change. Always verify critical information with official sources.
                            </p>
                            <p>
                                You agree to use our site entirely at your own risk.
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">7. User Responsibilities</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                You agree not to use {SITE_CONFIG.name} for illegal activities or purposes that could harm, disable, or overburden the site.
                            </p>
                            <p>
                                You must not attempt to gain unauthorized access to our systems or modify any part of the site.
                            </p>
                            <p>
                                You may not scrape, copy, or redistribute our content without permission.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Future Tools and Features</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                As {SITE_CONFIG.name} grows, we may introduce new interactive tools, calculators, or premium features. Terms for these features will be clearly communicated when launched.
                            </p>
                            <p>
                                We reserve the right to modify, suspend, or discontinue any feature at any time without prior notice.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Modifications to the Service</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                We reserve the right to update, modify, or discontinue any content, tool, or feature at any time without notice.
                            </p>
                            <p>
                                These Terms may be updated occasionally; continued use of the site indicates acceptance of the revised Terms.
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of the UAE.
                            </p>
                        </div>
                    </section>

                    {/* Section 11 - Contact */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Contact Information</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                For questions regarding these Terms, please contact us at:
                            </p>
                            <p>
                                <button
                                    onClick={() => copyEmail(SITE_CONFIG.email)}
                                    className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer font-medium"
                                >
                                    {SITE_CONFIG.email}
                                </button>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <ToastComponent />
        </>
    );
}
