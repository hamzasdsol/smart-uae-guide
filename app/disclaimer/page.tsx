"use client";

import { AlertTriangle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useEmailCopy } from "@/lib/utils/emailCopy";
import { getCurrentDate } from "@/lib/utils/date";

export default function DisclaimerPage() {
    const { copyEmail, ToastComponent } = useEmailCopy();

    return (
        <>
            <main className="max-w-4xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <div className="bg-primary-100 p-4 rounded-full">
                            <AlertTriangle className="w-12 h-12 text-primary-600" />
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Disclaimer</h1>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Understand the usage terms and limitations of {SITE_CONFIG.name}&apos;s guides, tools, and content.
                    </p>

                    <div className="text-sm text-gray-500">
                        <strong>Last updated:</strong> {getCurrentDate()}
                    </div>
                </div>

                {/* Disclaimer Content */}
                <div className="space-y-12 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                        <div className="space-y-4">
                            <p>
                                The guides, tools, calculators, and content provided on <strong>{SITE_CONFIG.name}</strong> are designed for general informational and educational purposes. By accessing or using this website, you agree to this disclaimer. If you do not agree, please discontinue use immediately.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Accuracy of Information</h2>
                        <div className="space-y-4">
                            <p>
                                We strive to ensure the accuracy of all guides, tools, and resources on <strong>{SITE_CONFIG.name}</strong>, yet we cannot guarantee that information, calculations, or outputs are always complete, current, or error-free.
                            </p>
                            <p>
                                UAE regulations, banking practices, visa rules, housing markets, and other topics covered on our site may change frequently. Laws and policies in the Emirates are subject to updates without notice.
                            </p>
                            <p>
                                Always verify important information independently with official UAE government sources, licensed professionals, or trusted institutions before making financial, legal, or personal decisions.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. No Professional Advice</h2>
                        <div className="space-y-4">
                            <p>
                                Nothing on <strong>{SITE_CONFIG.name}</strong> should be interpreted as professional advice. Examples include:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Financial guides do not provide investment, banking, or tax advice.</li>
                                <li>Visa and immigration content does not replace legal consultation.</li>
                                <li>Housing and cost-of-living information does not constitute real estate or financial planning advice.</li>
                                <li>Conversion tools and calculators are conveniences and may not substitute certified systems.</li>
                            </ul>
                            <p>
                                Consult qualified professionals—such as licensed financial advisors, immigration lawyers, or certified accountants—for guidance that could impact your finances, legal status, health, or business.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Affiliate Marketing Disclaimer</h2>
                        <div className="space-y-4">
                            <p>
                                <strong>{SITE_CONFIG.name}</strong> participates in affiliate marketing programs. We may earn commissions when you click on certain links or make purchases through our site.
                            </p>
                            <p>
                                While we strive to recommend only products and services we believe provide genuine value, our affiliate relationships may influence which products or services are featured. However, this does not compromise the integrity of our content.
                            </p>
                            <p>
                                We are not responsible for the quality, accuracy, or reliability of third-party products and services accessed through affiliate links. Any transactions or disputes should be resolved directly with the merchant.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Limitation of Liability</h2>
                        <div className="space-y-4">
                            <p>
                                <strong>{SITE_CONFIG.name}</strong>, its creators, and affiliates are not liable for any direct or indirect damages resulting from the use of our website, guides, or tools, including but not limited to:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Loss of profits, revenue, or business opportunities.</li>
                                <li>Errors, omissions, or inaccuracies in calculations, guides, or content.</li>
                                <li>Decisions or actions taken based on outputs or recommendations from this website.</li>
                                <li>Issues arising from third-party services, products, or affiliate links.</li>
                            </ul>
                            <p>Your use of the site is entirely at your own risk.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. External Links</h2>
                        <div className="space-y-4">
                            <p>
                                Our website may include links to third-party sites, including affiliate links and partner sites. We do not control or endorse the content, accuracy, or availability of external resources and are not responsible for any losses arising from their use.
                            </p>
                            <p>
                                Follow external links at your discretion and review the terms and privacy policies of any third-party sites you visit.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. No Warranties</h2>
                        <div className="space-y-4">
                            <p>
                                All guides, tools, and materials on <strong>{SITE_CONFIG.name}</strong> are provided on an <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> basis. We do not warrant that:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>The website will be uninterrupted, timely, or error-free.</li>
                                <li>Tools and calculators will be free from bugs, defects, or security issues.</li>
                                <li>Outputs will meet your specific requirements or expectations.</li>
                                <li>Information about UAE regulations, costs, or services will remain current.</li>
                            </ul>
                            <p>We may update, modify, or remove features at any time without notice.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">7. User Responsibility</h2>
                        <div className="space-y-4">
                            <p>
                                By using our site, you agree that:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>You will not rely solely on our guides or tool outputs for critical decisions.</li>
                                <li>You are responsible for how you interpret and apply the information provided.</li>
                                <li>You acknowledge that discrepancies may exist between different sources or data.</li>
                                <li>You will verify all important information with official UAE sources or professionals.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Future Tools and Features</h2>
                        <div className="space-y-4">
                            <p>
                                As we expand <strong>{SITE_CONFIG.name}</strong>, we may introduce new calculators, tools, or interactive features. These will carry similar disclaimers and will be clearly communicated to users.
                            </p>
                            <p>
                                Any new tools will be designed with accuracy and privacy in mind, but we cannot guarantee they will meet all user needs or expectations.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Changes to This Disclaimer</h2>
                        <div className="space-y-4">
                            <p>
                                <strong>{SITE_CONFIG.name}</strong> may revise this disclaimer at any time without prior notice. Updates become effective immediately once posted. We encourage you to review this page periodically.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
                        <div className="space-y-4">
                            <p>Questions about this disclaimer? Reach out to us at:</p>
                            <button
                                onClick={() => copyEmail(SITE_CONFIG.email)}
                                className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer font-medium"
                            >
                                {SITE_CONFIG.email}
                            </button>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Acknowledgment</h2>
                        <div className="space-y-4">
                            <p>
                                By continuing to use <strong>{SITE_CONFIG.name}</strong>, you confirm that you have read, understood, and agree to the terms of this disclaimer.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <ToastComponent />
        </>
    );
}
