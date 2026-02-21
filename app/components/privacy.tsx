import Footer from "./footer";
import Nav from "./nav";

export default function Privacy(){
    return(
        <div className="w-full max-w-[1440px] m-auto">
            <Nav/>
            <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-16 flex flex-col gap-6 text-white">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-lg text-gray-400">Last updated: February 21, 2026</p>
                </div>

                {/* Introduction */}
                <section className="flex flex-col gap-4">
                    <p className="text-base sm:text-lg leading-relaxed">
                        At Plannr, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
                    </p>
                </section>

                {/* Section 1 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Information We Collect</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We collect information that you provide directly to us when you register for an account, use our services, communicate with us, or otherwise interact with our platform. This may include your name, email address, phone number, payment information, and any other information you choose to provide.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        We automatically collect certain information about your device when you use our services, including your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our platform.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">How We Use Your Information</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you technical notices and support messages, respond to your comments and questions, and provide customer service.
                    </p>
                    <div className="ml-4 sm:ml-6 flex flex-col gap-2 mt-3">
                        <p className="text-base text-gray-300">• Create and manage your account</p>
                        <p className="text-base text-gray-300">• Process your transactions and send related information</p>
                        <p className="text-base text-gray-300">• Send you marketing and promotional communications</p>
                        <p className="text-base text-gray-300">• Respond to your comments, questions, and provide customer support</p>
                        <p className="text-base text-gray-300">• Monitor and analyze trends, usage, and activities</p>
                        <p className="text-base text-gray-300">• Detect, prevent, and address technical issues and security threats</p>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Sharing Your Information</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our platform, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                    </p>
                    <p className="text-base leading-relaxed text-gray-300">
                        We may also disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                    </p>
                </section>

                {/* Section 4 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Data Security</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include internal reviews of our data collection, storage, and processing practices, as well as security measures and encryption protocols.
                    </p>
                </section>

                {/* Section 5 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Your Rights and Choices</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account settings or contacting us directly. You may also opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.
                    </p>
                    <div className="bg-[#FFFFFF0A] border border-[#FFFFFF1F] rounded-xl p-6 mt-4">
                        <p className="text-base italic text-gray-300">
                            "We are committed to protecting your privacy and ensuring you have a positive experience on our platform. Your trust is important to us, and we continuously work to maintain the highest standards of data protection."
                        </p>
                    </div>
                </section>

                {/* Section 6 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Cookies and Tracking Technologies</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                </section>

                {/* Section 7 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Third-Party Links</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        Our platform may contain links to third-party websites or services that are not owned or controlled by Plannr. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policy of every site you visit.
                    </p>
                </section>

                {/* Section 8 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Children's Privacy</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
                    </p>
                </section>

                {/* Section 9 */}
                <section className="flex flex-col gap-3 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Changes to This Privacy Policy</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="flex flex-col gap-3 mt-8 mb-6 bg-[#FF4C00] bg-opacity-10 border border-[#FF4C00] border-opacity-30 rounded-xl p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Contact Us</h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-base text-gray-300">📧 Email: privacy@plannr.com</p>
                        <p className="text-base text-gray-300">📞 Phone: +1 (555) 123-4567</p>
                        <p className="text-base text-gray-300">📍 Address: 123 Business Street, Suite 100, City, State 12345</p>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}