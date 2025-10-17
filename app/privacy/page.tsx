"use client";

import { Shield } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useEmailCopy } from "@/lib/utils/emailCopy";
import { getCurrentDate } from "@/lib/utils/date";

export default function PrivacyPolicy() {
    const { copyEmail, ToastComponent } = useEmailCopy();
    return (
        <>
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <div className="bg-primary-100 p-4 rounded-full">
                            <Shield className="w-12 h-12 text-primary-600" />
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Your privacy matters to us. Learn how we handle your information at {SITE_CONFIG.name}.
                    </p>

                    <div className="text-sm text-gray-500 mb-12">
                        <strong>Last updated:</strong> {getCurrentDate()}
                    </div>
                </div>

                {/* Privacy Policy Content */}
                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Do Not Collect</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                We do not require users to sign up, log in, or provide personal details to access our guides, blog posts, or tools.
                            </p>
                            <p>
                                We do not store or process your personal data on external servers. All interactive tools (if any) run entirely in your browser using static logic and formulas.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Information We May Collect Automatically</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                When you use our site, basic information such as your browser type, device, and pages visited may be collected through cookies or similar technologies for analytics and advertising purposes.
                            </p>
                            <p>
                                These are non-identifiable and used to improve user experience and site performance.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Third-Party Services</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                We may use third-party services like Google AdSense, Google Analytics, or other analytics tools. These services may use cookies to deliver relevant ads or measure traffic.
                            </p>
                            <p>
                                Google, as a third-party vendor, uses cookies to serve ads on our site. You can opt out of personalized ads by visiting{" "}
                                <a
                                    href="https://adssettings.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 hover:text-primary-700 underline font-medium"
                                >
                                    Google Ads Settings
                                </a>.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 - Affiliate Marketing */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Affiliate Marketing Disclosure</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                {SITE_CONFIG.name} participates in affiliate marketing programs. This means that we may earn a commission when you click on certain links or make purchases through our site.
                            </p>
                            <p>
                                These affiliate relationships do not influence our editorial content or recommendations. We only recommend products, services, and tools that we believe provide genuine value to our readers and the UAE expat community.
                            </p>
                            <p>
                                Affiliate links help us maintain and grow our site while keeping our content free for everyone. Your support through these links is greatly appreciated.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 - AI Chatbot */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. AI Chatbot Assistant</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                {SITE_CONFIG.name} features an AI-powered chatbot assistant to help answer your questions about UAE expat life, budgeting, banking, and other topics.
                            </p>
                            <p>
                                <strong>Important Privacy Information:</strong>
                            </p>
                            <ul className="list-disc pl-8 space-y-2 mt-4">
                                <li>We do not store, record, or save any conversations you have with the AI chatbot.</li>
                                <li>Your messages are sent to Google&apos;s Gemini AI service for processing, but we do not retain any chat history on our servers.</li>
                                <li>Each chat session is temporary and exists only in your browser for the duration of your visit.</li>
                                <li>Google may process your queries according to their own privacy policies. We recommend reviewing <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">Google&apos;s Gemini API Terms</a>.</li>
                                <li>The chatbot is provided for informational purposes only and should not be considered professional advice.</li>
                            </ul>
                            <p className="mt-4">
                                By using the chatbot, you acknowledge that your messages are processed by third-party AI services and that we do not store your conversation data.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Use of Information</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>Any automatically collected information may be used for:</p>
                            <ul className="list-disc pl-8 space-y-2 mt-4">
                                <li>Improving our website performance and usability.</li>
                                <li>Displaying relevant advertising.</li>
                                <li>Monitoring site traffic and usage patterns.</li>
                                <li>Understanding which guides and tools are most helpful to our users.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Security</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                Since we do not store personal data, privacy risks are minimal. However, third-party providers may collect anonymized data according to their own policies.
                            </p>
                            <p>
                                We recommend reviewing the privacy policies of any third-party services linked from our site.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">8. External Links</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                Our website may contain links to external websites, including affiliate links. We are not responsible for the content or privacy practices of those third-party sites.
                            </p>
                            <p>
                                We encourage you to review the privacy policies of any external sites you visit.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Future Tools and Features</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                As we expand {SITE_CONFIG.name}, we may introduce interactive tools, calculators, or other features. These will be designed with privacy in mind and will operate in your browser whenever possible.
                            </p>
                            <p>
                                If we introduce any features that require data collection, we will update this privacy policy and notify users appropriately.
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Children&apos;s Privacy</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                {SITE_CONFIG.name} is not directed at children under 13. We do not knowingly collect personal information from children.
                            </p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to this Policy</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                We may update this Privacy Policy at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.
                            </p>
                            <p>
                                We encourage you to review this policy periodically to stay informed about how we protect your privacy.
                            </p>
                        </div>
                    </section>

                    {/* Section 12 - Contact */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Us</h2>
                        <div className="space-y-2 text-gray-700 leading-relaxed">
                            <p>
                                If you have any questions about this Privacy Policy, contact us at:
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
