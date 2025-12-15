import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security | SHIRO Technologies',
  description: 'Security practices and measures at SHIRO Technologies.',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security</h1>
          <p className="text-xl text-gray-300">Protecting Your Data & Systems</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Security</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Cloud infrastructure hosted on AWS/Azure with enterprise-grade security</li>
            <li>Multi-region redundancy and disaster recovery</li>
            <li>Network segregation and firewall protection</li>
            <li>DDoS protection and mitigation</li>
            <li>Regular security patches and updates</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li><strong>Encryption in Transit:</strong> TLS 1.3 for all data transmission</li>
            <li><strong>Encryption at Rest:</strong> AES-256 encryption for stored data</li>
            <li><strong>Access Controls:</strong> Role-based access control (RBAC)</li>
            <li><strong>Authentication:</strong> Multi-factor authentication (MFA) required</li>
            <li><strong>Key Management:</strong> Hardware security modules (HSM)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Application Security</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Secure software development lifecycle (SSDLC)</li>
            <li>Regular code reviews and security audits</li>
            <li>Automated vulnerability scanning</li>
            <li>Penetration testing by third-party experts</li>
            <li>Bug bounty program</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monitoring & Response</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>24/7 security operations center (SOC)</li>
            <li>Real-time threat detection and alerting</li>
            <li>Incident response team and procedures</li>
            <li>Security information and event management (SIEM)</li>
            <li>Regular security awareness training for staff</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Compliance & Certifications</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>SOC 2 Type II compliance</li>
            <li>GDPR and CCPA compliant</li>
            <li>ISO 27001 certified</li>
            <li>HIPAA compliant (for healthcare clients)</li>
            <li>Regular third-party audits</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Report a Security Issue</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              If you discover a security vulnerability, please report it immediately to:
            </p>
            <p className="text-gray-700 mb-2">
              Email: <a href="mailto:security@shirotechnologies.com" className="text-shiro-red hover:underline font-semibold">security@shirotechnologies.com</a>
            </p>
            <p className="text-gray-700">
              We take all security reports seriously and will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
