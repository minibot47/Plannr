import Footer from "./footer";
import Nav from "./nav";

export default function Terms(){
    return(
        <div className="w-full max-w-[1440px] m-auto">
            <Nav/>
            <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-16 flex flex-col gap-6 text-white">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Terms and Conditions</h1>
                    <p className="text-lg text-gray-400">Last updated: February 21, 2026</p>
                </div>

                {/* Introduction */}
                <section className="flex flex-col gap-4">
                    <p className="text-base sm:text-lg leading-relaxed">
                        Welcome to Plannr. These Terms and Conditions ("Terms") govern your access to and use of our platform, services, and applications. By accessing or using Plannr, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                        Please read these Terms carefully before using our platform. These Terms apply to all visitors, users, and others who access or use our services.
                    </p>
                </section>

                {/* Section 1 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">1. Acceptance of Terms</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        By creating an account or using any part of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our platform. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">2. User Accounts</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        To access certain features of our platform, you must register for an account. When you register, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                    <div className="ml-4 sm:ml-6 flex flex-col gap-2 mt-3">
                        <p className="text-base text-gray-300">• You must be at least 18 years old to create an account</p>
                        <p className="text-base text-gray-300">• You are responsible for keeping your password secure</p>
                        <p className="text-base text-gray-300">• You must notify us immediately of any unauthorized access</p>
                        <p className="text-base text-gray-300">• You may not use another person's account without permission</p>
                        <p className="text-base text-gray-300">• One person or legal entity may not maintain more than one account</p>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">3. Acceptable Use Policy</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use of our services.
                    </p>
                    <div className="bg-[#FFFFFF0A] border border-[#FFFFFF1F] rounded-xl p-6 mt-4">
                        <h3 className="text-lg font-semibold mb-3">You specifically agree NOT to:</h3>
                        <div className="flex flex-col gap-2">
                            <p className="text-base text-gray-300">• Upload or transmit viruses, malware, or malicious code</p>
                            <p className="text-base text-gray-300">• Attempt to gain unauthorized access to our systems</p>
                            <p className="text-base text-gray-300">• Engage in any form of harassment or abuse toward other users</p>
                            <p className="text-base text-gray-300">• Violate any applicable local, state, national, or international law</p>
                            <p className="text-base text-gray-300">• Impersonate any person or entity or misrepresent your affiliation</p>
                            <p className="text-base text-gray-300">• Collect or store personal data about other users without consent</p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">4. Intellectual Property Rights</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        The platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Plannr, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        You are granted a limited, non-exclusive, non-transferable license to access and use our services for your personal or internal business purposes. This license does not include any right to resell or commercial use of our services or their contents, any derivative use of our services or their contents, or any use of data mining, robots, or similar data gathering and extraction tools.
                    </p>
                </section>

                {/* Section 5 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">5. User Content</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        Our services may allow you to post, upload, or submit content, including but not limited to text, photographs, videos, and other materials ("User Content"). You retain all rights in, and are solely responsible for, the User Content you post to our services.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        By posting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with operating and providing our services. You represent and warrant that you own or have the necessary rights to post your User Content and that it does not violate any third-party rights.
                    </p>
                </section>

                {/* Section 6 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">6. Payment and Billing</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        Certain features of our services may require payment of fees. All fees are quoted in U.S. dollars and are non-refundable except as expressly stated in these Terms. You agree to pay all fees associated with your account in accordance with the pricing and payment terms presented to you at the time of purchase.
                    </p>
                    <div className="ml-4 sm:ml-6 flex flex-col gap-2 mt-3">
                        <p className="text-base text-gray-300">• Subscription fees are billed in advance on a recurring basis</p>
                        <p className="text-base text-gray-300">• We may change our fees at any time with 30 days' notice</p>
                        <p className="text-base text-gray-300">• You authorize us to charge your payment method on file</p>
                        <p className="text-base text-gray-300">• Failed payments may result in suspension of your account</p>
                        <p className="text-base text-gray-300">• You may cancel your subscription at any time</p>
                    </div>
                </section>

                {/* Section 7 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">7. Cancellation and Refunds</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        You may cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to paid features until the end of your current billing period. We do not provide refunds or credits for partial months of service or unused features.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        We reserve the right to offer refunds on a case-by-case basis at our sole discretion. If you believe you are entitled to a refund, please contact our support team with your request and explanation.
                    </p>
                </section>

                {/* Section 8 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">8. Disclaimers and Limitations of Liability</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free, or that any defects will be corrected.
                    </p>
                    <div className="bg-[#FF4C00] bg-opacity-10 border border-[#FF4C00] border-opacity-30 rounded-xl p-6 mt-4">
                        <p className="text-base leading-relaxed text-gray-300">
                            <strong>Important:</strong> To the fullest extent permitted by law, Plannr shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                        </p>
                    </div>
                </section>

                {/* Section 9 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">9. Indemnification</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        You agree to indemnify, defend, and hold harmless Plannr and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your violation of any rights of another party.
                    </p>
                </section>

                {/* Section 10 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">10. Termination</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will immediately cease.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                    </p>
                </section>

                {/* Section 11 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">11. Dispute Resolution</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        Any dispute arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. The arbitration shall be conducted in [Your City, State], and judgment on the award may be entered in any court having jurisdiction.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        You agree to waive any right to a jury trial or to participate in a class action against Plannr.
                    </p>
                </section>

                {/* Section 12 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">12. Governing Law</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        These Terms shall be governed by and construed in accordance with the laws of the State of [Your State], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                {/* Section 13 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">13. Changes to Terms</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We reserve the right to modify or replace these Terms at any time at our sole discretion. If we make material changes, we will provide notice through our services or by sending you an email. Your continued use of our services following the posting of any changes constitutes acceptance of those changes.
                    </p>
                </section>

                {/* Section 14 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">14. Severability</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will continue in full force and effect. The invalid or unenforceable provision will be replaced by a valid, enforceable provision that most closely matches the intent of the original provision.
                    </p>
                </section>

                {/* Section 15 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">15. Entire Agreement</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        These Terms, together with our Privacy Policy and any other legal notices published by us on our services, constitute the entire agreement between you and Plannr concerning your use of our services and supersede all prior or contemporaneous communications and proposals, whether oral or written.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="flex flex-col gap-3 mt-8 mb-6 bg-[#FF4C00] bg-opacity-10 border border-[#FF4C00] border-opacity-30 rounded-xl p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Contact Information</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-base text-gray-300">📧 Email: legal@plannr.com</p>
                        <p className="text-base text-gray-300">📞 Phone: +1 (555) 123-4567</p>
                        <p className="text-base text-gray-300">📍 Address: 123 Business Street, Suite 100, City, State 12345</p>
                        <p className="text-base text-gray-300 mt-3">
                            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
                        </p>
                    </div>
                </section>

                {/* Acknowledgment */}
                <section className="bg-[#FFFFFF0A] border border-[#FFFFFF1F] rounded-xl p-6 sm:p-8 mt-4">
                    <p className="text-base leading-relaxed text-gray-300 italic">
                        By using Plannr, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. Thank you for choosing Plannr for your planning needs.
                    </p>
                </section>
            </div>
            <Footer/>
        </div>
    )
}