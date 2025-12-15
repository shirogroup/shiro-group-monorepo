import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SHIRO Technologies',
  description: 'Terms and conditions for using SHIRO Technologies services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-300">Last Updated: December 14, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              These Terms and Conditions ("Terms") govern your use of SHIRO Technologies' website and services. By accessing our website or using our services, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Services</h2>
            <p className="text-gray-700 mb-6">
              SHIRO Technologies provides AI transformation consulting, QA automation, software development, and related services. Specific terms for each service engagement will be outlined in a separate Service Agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Use services only for lawful purposes</li>
              <li>Not interfere with or disrupt the services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content, trademarks, and intellectual property on our website and in our services are owned by SHIRO Technologies or our licensors. You may not use, reproduce, or distribute our intellectual property without written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              For paid services:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Fees are as specified in your Service Agreement</li>
              <li>Payment is due according to agreed terms</li>
              <li>Late payments may incur interest charges</li>
              <li>All fees are non-refundable unless otherwise stated</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              SHIRO Technologies shall not be liable for indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the amount paid by you for services in the preceding 12 months.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Warranties and Disclaimers</h2>
            <p className="text-gray-700 mb-6">
              Services are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law provisions. Any disputes will be resolved in the courts of Dallas County, Texas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>SHIRO Technologies, Inc.</strong></p>
              <p className="text-gray-700 mb-2">5080 Spectrum Drive Suite 575E, Addison, TX 75001</p>
              <p className="text-gray-700">Email: <a href="mailto:legal@shirotechnologies.com" className="text-shiro-red hover:underline">legal@shirotechnologies.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
