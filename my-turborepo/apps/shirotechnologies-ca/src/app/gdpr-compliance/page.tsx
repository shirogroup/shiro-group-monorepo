import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance | SHIRO Technologies',
  description: 'GDPR compliance and data protection practices at SHIRO Technologies.',
};

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GDPR Compliance</h1>
          <p className="text-xl text-gray-300">General Data Protection Regulation</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Controller Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2"><strong>SHIRO Technologies, Inc.</strong></p>
            <p className="text-gray-700 mb-2">5080 Spectrum Drive Suite 575E</p>
            <p className="text-gray-700 mb-2">Addison, TX 75001, United States</p>
            <p className="text-gray-700">Email: privacy@shirotechnologies.com</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights Under GDPR</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li><strong>Right to Access:</strong> Request copies of your personal data</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of processing</li>
            <li><strong>Right to Data Portability:</strong> Receive data in machine-readable format</li>
            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Rights Related to Automated Decisions:</strong> Not be subject to automated decisions</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Exercise Your Rights</h2>
          <p className="text-gray-700 mb-6">
            Contact us at <a href="mailto:privacy@shirotechnologies.com" className="text-shiro-red hover:underline">privacy@shirotechnologies.com</a> to exercise any GDPR rights. We will respond within one month.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection Officer</h2>
          <p className="text-gray-700 mb-6">
            For data protection inquiries: <a href="mailto:dpo@shirotechnologies.com" className="text-shiro-red hover:underline">dpo@shirotechnologies.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
