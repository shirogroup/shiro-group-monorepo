import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SHIRO Technologies',
  description: 'SHIRO Technologies privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300">Last Updated: December 14, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              SHIRO Technologies, Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and job title</li>
              <li>Resume and employment history (for job applications)</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information for:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Providing and improving our services</li>
              <li>Responding to inquiries and support requests</li>
              <li>Processing job applications</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Analyzing website usage and trends</li>
              <li>Complying with legal obligations</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf (hosting, analytics, payment processing)</li>
              <li><strong>Business Partners:</strong> With your consent, for joint services or marketing</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Remember your preferences</li>
              <li>Analyze site traffic and usage</li>
              <li>Personalize content and advertising</li>
              <li>Improve website functionality</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookies through your browser settings. Note that disabling cookies may limit website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise these rights, contact us at <a href="mailto:privacy@shirotechnologies.com" className="text-shiro-red hover:underline">privacy@shirotechnologies.com</a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we learn we have collected such information, we will delete it promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party sites. We are not responsible for their privacy practices. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. California Privacy Rights</h2>
            <p className="text-gray-700 mb-4">California residents have additional rights under CCPA:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to deletion</li>
              <li>Right to non-discrimination</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Privacy Policy or our privacy practices, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>SHIRO Technologies, Inc.</strong></p>
              <p className="text-gray-700 mb-2">5080 Spectrum Drive Suite 575E</p>
              <p className="text-gray-700 mb-2">Addison, TX 75001</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@shirotechnologies.com" className="text-shiro-red hover:underline">privacy@shirotechnologies.com</a></p>
              <p className="text-gray-700">Phone: (972) 734-5623</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
