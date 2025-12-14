#!/bin/bash

# SHIRO Technologies - FINAL BATCH (Complete Website)
# GDPR, AI Compliance, Security, Calculator SEO pages

echo "🚀 SHIRO Technologies - FINAL BATCH"
echo "====================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""
echo "📝 Creating final pages..."

# GDPR Compliance Page
cat > src/app/gdpr-compliance/page.tsx << 'GDPR_EOF'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GDPR Compliance - SHIRO Technologies',
  description: 'SHIRO Technologies commitment to GDPR compliance and data protection for EU/EEA customers.',
  keywords: ['GDPR compliance', 'data protection', 'EU privacy', 'GDPR rights'],
}

export default function GDPRPage() {
  return (
    <div>
      <section className="gradient-hero py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold">GDPR Compliance</h1>
          <p className="text-gray-300 mt-2">Last Updated: December 14, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>Our Commitment to GDPR</h2>
          <p>
            SHIRO Technologies LLC is committed to compliance with the General Data Protection Regulation (GDPR) 
            for all data subjects in the European Union and European Economic Area.
          </p>

          <h2>Data Controller Information</h2>
          <p>
            <strong>Data Controller:</strong> SHIRO Technologies LLC<br />
            <strong>Address:</strong> 5080 Spectrum Drive Suite 575E, Addison, TX 75001, USA<br />
            <strong>Email:</strong> Info@shirotechnologies.com<br />
            <strong>Phone:</strong> (800) 971-8013
          </p>

          <h2>Legal Basis for Processing</h2>
          <p>We process personal data under the following lawful bases:</p>
          <ul>
            <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes</li>
            <li><strong>Contract:</strong> Processing is necessary to fulfill a contract with you</li>
            <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
            <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests (unless overridden by your rights)</li>
          </ul>

          <h2>Your GDPR Rights</h2>
          <p>Under GDPR, you have the following rights:</p>
          
          <h3>1. Right to Access</h3>
          <p>Request copies of your personal data.</p>

          <h3>2. Right to Rectification</h3>
          <p>Request correction of inaccurate or incomplete data.</p>

          <h3>3. Right to Erasure ("Right to be Forgotten")</h3>
          <p>Request deletion of your personal data under certain conditions.</p>

          <h3>4. Right to Restriction</h3>
          <p>Request limitation of how we use your data.</p>

          <h3>5. Right to Data Portability</h3>
          <p>Request transfer of your data to another organization or directly to you.</p>

          <h3>6. Right to Object</h3>
          <p>Object to processing based on legitimate interests or direct marketing.</p>

          <h3>7. Rights Related to Automated Decision-Making</h3>
          <p>Right not to be subject to decisions based solely on automated processing.</p>

          <h2>How to Exercise Your Rights</h2>
          <p>To exercise any of your GDPR rights:</p>
          <ul>
            <li>Email: <a href="mailto:Info@shirotechnologies.com">Info@shirotechnologies.com</a></li>
            <li>Subject line: "GDPR Data Subject Request"</li>
            <li>Include: Your name, email, specific request, and verification information</li>
          </ul>
          <p>We will respond within 30 days of receiving your request.</p>

          <h2>Data Protection Measures</h2>
          <p>We implement appropriate technical and organizational measures:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and audits</li>
            <li>Access controls and authentication</li>
            <li>Employee training on data protection</li>
            <li>Incident response procedures</li>
          </ul>

          <h2>International Data Transfers</h2>
          <p>
            When transferring data from the EU/EEA to countries outside the European Economic Area, we ensure 
            appropriate safeguards through:
          </p>
          <ul>
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>Data Processing Agreements with all third-party processors</li>
            <li>Adequacy decisions where applicable</li>
          </ul>

          <h2>Data Retention</h2>
          <p>We retain personal data only as long as necessary for the purposes it was collected:</p>
          <ul>
            <li>Active customers: Duration of business relationship + 7 years (legal requirements)</li>
            <li>Marketing contacts: Until consent is withdrawn or 3 years of inactivity</li>
            <li>Website analytics: 26 months</li>
          </ul>

          <h2>Data Breach Notification</h2>
          <p>
            In the event of a data breach affecting your personal data, we will notify you and the relevant 
            supervisory authority within 72 hours when required by GDPR.
          </p>

          <h2>Children's Data</h2>
          <p>
            We do not knowingly process data of individuals under 16 years of age without parental consent.
          </p>

          <h2>Supervisory Authority</h2>
          <p>
            You have the right to lodge a complaint with a supervisory authority in your EU member state if you 
            believe your data protection rights have been violated.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this GDPR compliance statement periodically. Material changes will be communicated 
            through prominent notice on our website.
          </p>

          <h2>Contact Our DPO</h2>
          <p>
            For data protection inquiries:<br />
            <strong>Data Protection Contact:</strong> Info@shirotechnologies.com<br />
            Subject: "GDPR/Data Protection Inquiry"
          </p>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-blue-900">
              <strong>Additional Information:</strong> For our complete privacy practices, please see our{' '}
              <Link href="/privacy-policy" className="text-blue-700 underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
GDPR_EOF

echo "  ✅ gdpr-compliance/page.tsx created"

# AI Compliance Page
cat > src/app/ai-compliance/page.tsx << 'AI_COMPLIANCE_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Compliance & Ethics - SHIRO Technologies',
  description: 'SHIRO Technologies commitment to responsible AI development and ethical AI practices.',
  keywords: ['AI ethics', 'responsible AI', 'AI compliance', 'ethical AI development'],
}

export default function AICompliancePage() {
  return (
    <div>
      <section className="gradient-hero py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold">AI Compliance & Ethics</h1>
          <p className="text-gray-300 mt-2">Last Updated: December 14, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>Our AI Ethics Commitment</h2>
          <p>
            At SHIRO Technologies, we are committed to developing and deploying artificial intelligence systems 
            that are ethical, responsible, and beneficial to society. This policy outlines our principles and 
            practices for AI development and deployment.
          </p>

          <h2>Core AI Ethics Principles</h2>
          
          <h3>1. Transparency & Explainability</h3>
          <ul>
            <li>We clearly disclose when AI is being used in our products and services</li>
            <li>We provide explanations for AI-driven decisions where feasible</li>
            <li>We document AI system capabilities and limitations</li>
            <li>We maintain transparency about data sources and model training</li>
          </ul>

          <h3>2. Fairness & Non-Discrimination</h3>
          <ul>
            <li>We test for and mitigate bias in training data and model outputs</li>
            <li>We ensure AI systems treat all users fairly regardless of protected characteristics</li>
            <li>We conduct regular fairness audits of our AI systems</li>
            <li>We use diverse datasets to train our models</li>
          </ul>

          <h3>3. Privacy & Data Protection</h3>
          <ul>
            <li>We implement privacy-by-design in all AI systems</li>
            <li>We minimize data collection to what is necessary</li>
            <li>We provide users control over their data</li>
            <li>We comply with GDPR, CCPA, and applicable data protection laws</li>
          </ul>

          <h3>4. Human Oversight & Control</h3>
          <ul>
            <li>Critical decisions require human review and approval</li>
            <li>Users can override AI recommendations when appropriate</li>
            <li>We maintain human-in-the-loop processes for high-stakes applications</li>
            <li>We provide mechanisms for human intervention and escalation</li>
          </ul>

          <h3>5. Accountability & Responsibility</h3>
          <ul>
            <li>We maintain clear accountability for AI system outcomes</li>
            <li>We provide channels for reporting AI-related concerns</li>
            <li>We conduct regular audits and assessments</li>
            <li>We document and address AI system failures</li>
          </ul>

          <h2>AI Development Practices</h2>
          
          <h3>Data Quality & Integrity</h3>
          <p>We ensure:</p>
          <ul>
            <li>Training data is representative and diverse</li>
            <li>Data sources are documented and validated</li>
            <li>Personal data is anonymized where possible</li>
            <li>Regular data quality assessments</li>
          </ul>

          <h3>Model Testing & Validation</h3>
          <p>Before deployment, we:</p>
          <ul>
            <li>Conduct comprehensive testing including edge cases</li>
            <li>Test for bias and fairness across demographic groups</li>
            <li>Validate model performance against benchmarks</li>
            <li>Document limitations and failure modes</li>
          </ul>

          <h3>Continuous Monitoring</h3>
          <p>Post-deployment, we:</p>
          <ul>
            <li>Monitor AI system performance and accuracy</li>
            <li>Track for model drift and degradation</li>
            <li>Collect user feedback on AI interactions</li>
            <li>Update and retrain models as needed</li>
          </ul>

          <h2>Specific Use Case Guidelines</h2>

          <h3>Agentic AI Systems</h3>
          <p>For autonomous AI agents, we ensure:</p>
          <ul>
            <li>Clear boundaries on agent authority and capabilities</li>
            <li>Human approval for high-impact decisions</li>
            <li>Fail-safe mechanisms and safety constraints</li>
            <li>Audit trails of agent actions and decisions</li>
          </ul>

          <h3>HR & Recruiting AI</h3>
          <p>In employment contexts, we:</p>
          <ul>
            <li>Prohibit AI from making final hiring decisions</li>
            <li>Test for bias against protected classes</li>
            <li>Provide transparency to candidates about AI use</li>
            <li>Enable human review of all AI recommendations</li>
          </ul>

          <h3>Customer Service AI</h3>
          <p>For customer-facing AI, we:</p>
          <ul>
            <li>Clearly identify AI vs. human interactions</li>
            <li>Provide easy escalation to human agents</li>
            <li>Respect customer preferences for human interaction</li>
            <li>Maintain service quality standards</li>
          </ul>

          <h2>AI Safety & Security</h2>
          <ul>
            <li><strong>Adversarial Testing:</strong> We test AI systems against potential attacks and misuse</li>
            <li><strong>Input Validation:</strong> We validate and sanitize inputs to prevent prompt injection</li>
            <li><strong>Output Filtering:</strong> We filter harmful or inappropriate outputs</li>
            <li><strong>Access Controls:</strong> We restrict access to AI systems and training data</li>
          </ul>

          <h2>Regulatory Compliance</h2>
          <p>We stay compliant with evolving AI regulations including:</p>
          <ul>
            <li>EU AI Act (when applicable)</li>
            <li>GDPR automated decision-making provisions</li>
            <li>Industry-specific AI regulations (finance, healthcare, etc.)</li>
            <li>Local and national AI governance frameworks</li>
          </ul>

          <h2>Third-Party AI Services</h2>
          <p>When using third-party AI providers (OpenAI, Anthropic, etc.), we:</p>
          <ul>
            <li>Review their AI ethics and compliance policies</li>
            <li>Ensure they meet our ethical standards</li>
            <li>Maintain data processing agreements</li>
            <li>Monitor their service for compliance</li>
          </ul>

          <h2>User Rights Regarding AI</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Know when AI is being used in decisions affecting you</li>
            <li>Request human review of AI-driven decisions</li>
            <li>Opt-out of AI processing where feasible</li>
            <li>Receive explanations for AI recommendations</li>
            <li>Report concerns about AI system behavior</li>
          </ul>

          <h2>Reporting AI Concerns</h2>
          <p>
            If you have concerns about our AI systems or believe an AI-driven decision was unfair or biased, 
            please contact us:
          </p>
          <p>
            Email: <a href="mailto:Info@shirotechnologies.com">Info@shirotechnologies.com</a><br />
            Subject: "AI Ethics Concern"<br />
            Phone: (800) 971-8013
          </p>
          <p>We investigate all reports promptly and take corrective action as needed.</p>

          <h2>Ongoing Improvement</h2>
          <p>
            AI ethics is an evolving field. We commit to continuous improvement through:
          </p>
          <ul>
            <li>Regular review and updates of this policy</li>
            <li>Training for our AI development teams</li>
            <li>Engagement with AI ethics research community</li>
            <li>Incorporation of emerging best practices</li>
          </ul>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <p className="text-yellow-900">
              <strong>Our Commitment:</strong> As AI technology evolves, so will our ethical practices. 
              We welcome feedback and suggestions from our users and stakeholders.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
AI_COMPLIANCE_EOF

echo "  ✅ ai-compliance/page.tsx created"

# Security Page
cat > src/app/security/page.tsx << 'SECURITY_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security - SHIRO Technologies',
  description: 'SHIRO Technologies security measures, practices, and commitment to protecting your data.',
  keywords: ['security', 'data security', 'cybersecurity', 'information security'],
}

export default function SecurityPage() {
  return (
    <div>
      <section className="gradient-hero py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold">Security</h1>
          <p className="text-gray-300 mt-2">Our commitment to protecting your data</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>Security Overview</h2>
          <p>
            At SHIRO Technologies, security is fundamental to everything we build. We implement industry-leading 
            security practices to protect your data and maintain your trust.
          </p>

          <h2>Infrastructure Security</h2>
          
          <h3>Cloud Security</h3>
          <ul>
            <li><strong>Cloud Providers:</strong> AWS, Google Cloud, Azure - all SOC 2 Type II certified</li>
            <li><strong>Redundancy:</strong> Multi-region deployment for high availability</li>
            <li><strong>Backups:</strong> Automated daily backups with encryption</li>
            <li><strong>Disaster Recovery:</strong> Tested recovery procedures with <4 hour RTO</li>
          </ul>

          <h3>Network Security</h3>
          <ul>
            <li>Virtual Private Cloud (VPC) isolation</li>
            <li>Web Application Firewall (WAF)</li>
            <li>DDoS protection</li>
            <li>Intrusion Detection Systems (IDS)</li>
            <li>Network segmentation and access controls</li>
          </ul>

          <h2>Data Security</h2>
          
          <h3>Encryption</h3>
          <ul>
            <li><strong>In Transit:</strong> TLS 1.3 for all data transmission</li>
            <li><strong>At Rest:</strong> AES-256 encryption for stored data</li>
            <li><strong>Database:</strong> Encrypted database storage</li>
            <li><strong>Backups:</strong> Encrypted backup files</li>
          </ul>

          <h3>Data Access Controls</h3>
          <ul>
            <li>Role-based access control (RBAC)</li>
            <li>Multi-factor authentication (MFA) required for all employees</li>
            <li>Least privilege access principle</li>
            <li>Regular access reviews and audits</li>
            <li>Automated access revocation upon termination</li>
          </ul>

          <h3>Data Protection</h3>
          <ul>
            <li>Data minimization - we only collect what we need</li>
            <li>Data classification and handling policies</li>
            <li>Secure data deletion procedures</li>
            <li>Data loss prevention (DLP) tools</li>
          </ul>

          <h2>Application Security</h2>
          
          <h3>Secure Development</h3>
          <ul>
            <li>Security-first design principles</li>
            <li>Regular code reviews with security focus</li>
            <li>Static Application Security Testing (SAST)</li>
            <li>Dynamic Application Security Testing (DAST)</li>
            <li>Dependency scanning for vulnerabilities</li>
          </ul>

          <h3>Authentication & Authorization</h3>
          <ul>
            <li>Industry-standard authentication protocols (OAuth 2.0, OpenID Connect)</li>
            <li>Password hashing with bcrypt/Argon2</li>
            <li>Session management with secure tokens</li>
            <li>API authentication and rate limiting</li>
          </ul>

          <h3>Input Validation & Output Encoding</h3>
          <ul>
            <li>Comprehensive input validation</li>
            <li>Protection against SQL injection</li>
            <li>Cross-Site Scripting (XSS) prevention</li>
            <li>Cross-Site Request Forgery (CSRF) protection</li>
          </ul>

          <h2>Security Monitoring & Response</h2>
          
          <h3>Continuous Monitoring</h3>
          <ul>
            <li>24/7 security monitoring and alerting</li>
            <li>Log aggregation and analysis</li>
            <li>Anomaly detection</li>
            <li>Automated threat detection</li>
          </ul>

          <h3>Incident Response</h3>
          <ul>
            <li>Dedicated incident response team</li>
            <li>Documented incident response procedures</li>
            <li>Regular incident response drills</li>
            <li>Post-incident analysis and remediation</li>
          </ul>

          <h3>Vulnerability Management</h3>
          <ul>
            <li>Regular vulnerability scans</li>
            <li>Penetration testing by third-party security firms</li>
            <li>Bug bounty program (coming soon)</li>
            <li>Rapid patching of critical vulnerabilities (<24 hours)</li>
          </ul>

          <h2>Operational Security</h2>
          
          <h3>Employee Security</h3>
          <ul>
            <li>Background checks for all employees</li>
            <li>Security awareness training (annual)</li>
            <li>Phishing simulation exercises</li>
            <li>Secure device policies (encryption, remote wipe)</li>
            <li>Confidentiality and security agreements</li>
          </ul>

          <h3>Physical Security</h3>
          <ul>
            <li>Secured office facilities with access controls</li>
            <li>Visitor management procedures</li>
            <li>Clean desk policy</li>
            <li>Secure disposal of physical documents</li>
          </ul>

          <h3>Third-Party Security</h3>
          <ul>
            <li>Vendor security assessments</li>
            <li>Data Processing Agreements (DPAs)</li>
            <li>Regular vendor audits</li>
            <li>Subprocessor transparency</li>
          </ul>

          <h2>Compliance & Certifications</h2>
          <ul>
            <li>GDPR compliant data processing</li>
            <li>CCPA compliance for California residents</li>
            <li>SOC 2 Type II (in progress)</li>
            <li>OWASP Top 10 adherence</li>
            <li>Industry-specific compliance as required</li>
          </ul>

          <h2>Security Audits</h2>
          <p>We conduct regular security assessments:</p>
          <ul>
            <li>Annual third-party security audits</li>
            <li>Quarterly internal security reviews</li>
            <li>Continuous automated security testing</li>
            <li>Compliance audits as required</li>
          </ul>

          <h2>Reporting Security Issues</h2>
          <p>
            If you discover a security vulnerability in our products or services, please report it responsibly:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:Support@shirotechnologies.com">Support@shirotechnologies.com</a></li>
            <li><strong>Subject:</strong> "Security Vulnerability Report"</li>
            <li><strong>Include:</strong> Detailed description, steps to reproduce, potential impact</li>
          </ul>
          <p>
            We take all security reports seriously and will respond within 48 hours. We appreciate responsible 
            disclosure and will work with you to address confirmed vulnerabilities.
          </p>

          <h2>Your Security Responsibilities</h2>
          <p>We ask that you:</p>
          <ul>
            <li>Use strong, unique passwords</li>
            <li>Enable multi-factor authentication when available</li>
            <li>Keep your software and devices updated</li>
            <li>Be cautious of phishing attempts</li>
            <li>Report suspicious activity immediately</li>
            <li>Protect your account credentials</li>
          </ul>

          <h2>Security Updates</h2>
          <p>
            We continuously improve our security posture and will update this page when significant changes occur. 
            For security-related questions, contact us at Support@shirotechnologies.com.
          </p>

          <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <p className="text-red-900">
              <strong>Emergency Security Contact:</strong> For urgent security issues outside business hours, 
              contact our 24/7 support line at (+91) 81233 71777 (India) or (800) 971-8013 (USA).
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
SECURITY_EOF

echo "  ✅ security/page.tsx created"

echo ""
echo "Creating calculator pages with SEO optimization..."

# AI Transformation Cost Calculator (new dedicated page)
cat > src/app/ai-transformation-cost-calculator/page.tsx << 'AI_CALC_EOF'
import type { Metadata } from 'next'
import { AISavingsCalculator } from '@/components/tools/AISavingsCalculator'

export const metadata: Metadata = {
  title: 'AI Transformation Cost Calculator - Calculate ROI & Savings',
  description: 'Calculate your AI transformation costs and savings. Compare local rates vs global delivery for AI strategy, agent development, RPA, and integration services.',
  keywords: [
    'AI transformation cost calculator',
    'AI implementation cost',
    'AI ROI calculator',
    'agentic AI cost savings',
    'AI development cost estimator',
    'offshore AI development rates',
    'AI consulting cost calculator',
  ],
}

export default function AICalculatorPage() {
  return (
    <div>
      <section className="gradient-hero py-16 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Transformation Cost Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your potential savings with SHIRO's global AI transformation services. 
            Compare local market rates with our offshore/nearshore delivery model.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AISavingsCalculator />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">How This Calculator Works</h2>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Market Rate Comparison</h3>
              <p>
                We compare typical local market rates in US, EU, and UK with SHIRO's global delivery rates. 
                Our offshore (India) and nearshore (Canada) teams deliver 50-70% cost savings without 
                compromising quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Service Types Included</h3>
              <ul className="space-y-2">
                <li><strong>AI Strategy & Consulting:</strong> Roadmap, assessments, planning</li>
                <li><strong>Custom AI Agent Development:</strong> Agentic systems, multiagent orchestration</li>
                <li><strong>RPA & Process Automation:</strong> Workflow automation, IPA solutions</li>
                <li><strong>AI Integration Services:</strong> LLM integration, API development</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">ROI Calculation</h3>
              <p>
                ROI is calculated conservatively based on project duration. Most clients see full ROI 
                within 3-6 months due to the combination of cost savings and efficiency gains from 
                AI automation (45-60% productivity improvement).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
AI_CALC_EOF

echo "  ✅ ai-transformation-cost-calculator/page.tsx created"

# QA Testing Calculator (for regional sites)
cat > src/app/qa-testing-outsourcing-calculator/page.tsx << 'QA_CALC_EOF'
import type { Metadata } from 'next'
import { QASavingsCalculator } from '@/components/tools/QASavingsCalculator'

export const metadata: Metadata = {
  title: 'QA Testing Outsourcing Calculator - Cost Savings Estimator',
  description: 'Calculate QA testing outsourcing costs and savings. Compare local rates vs offshore/nearshore QA teams for software testing and automation.',
  keywords: [
    'QA outsourcing calculator',
    'software testing cost calculator',
    'QA cost savings',
    'offshore QA testing rates',
    'nearshore QA services cost',
    'QA automation cost estimator',
  ],
}

export default function QACalculatorPage() {
  return (
    <div>
      <section className="gradient-hero py-16 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            QA Testing Outsourcing Calculator
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estimate your cost savings with offshore or nearshore QA testing services. 
            Calculate ROI for manual testing, automation, and development support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <QASavingsCalculator />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Understanding QA Outsourcing Savings</h2>
          
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Team Types Supported</h3>
              <ul className="space-y-2">
                <li><strong>QA Testing:</strong> Manual & automated testing, regression, UAT</li>
                <li><strong>Development:</strong> Full-stack, frontend, backend engineers</li>
                <li><strong>AI/ML:</strong> Machine learning engineers, data scientists</li>
                <li><strong>DevOps:</strong> Infrastructure, CI/CD, monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Cost Factors</h3>
              <p>
                This calculator compares local market rates (US, EU, UK) with our offshore (India) 
                and nearshore (Canada) rates. Savings range from 50-70% depending on location and 
                team composition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3">Quality Guarantee</h3>
              <p>
                All our teams maintain 95%+ quality scores through rigorous processes, regular training, 
                and continuous improvement. Cost savings never come at the expense of quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
QA_CALC_EOF

echo "  ✅ qa-testing-outsourcing-calculator/page.tsx created"

echo ""
echo "✅ FINAL BATCH COMPLETE!"
echo ""
echo "📊 CREATED:"
echo "  ✅ GDPR Compliance page (comprehensive)"
echo "  ✅ AI Compliance page (ethics & practices)"
echo "  ✅ Security page (detailed measures)"
echo "  ✅ AI Calculator page (SEO optimized URL)"
echo "  ✅ QA Calculator page (SEO optimized URL)"
echo ""

# Build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push FINAL BATCH to GitHub? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "FINAL BATCH: All legal pages (GDPR, AI, Security) + Calculator SEO pages"
        git push origin main
        
        echo ""
        echo "🎉 🎉 🎉 WEBSITE 100% COMPLETE! 🎉 🎉 🎉"
        echo ""
        echo "📋 COMPLETE WEBSITE INVENTORY:"
        echo ""
        echo "MAIN PAGES (10):"
        echo "  ✅ Homepage"
        echo "  ✅ Products"
        echo "  ✅ AI Transformation"
        echo "  ✅ Services"
        echo "  ✅ Industries"
        echo "  ✅ Global Presence"
        echo "  ✅ Insights"
        echo "  ✅ About (with company culture)"
        echo "  ✅ Contact"
        echo "  ✅ Careers (with benefits)"
        echo ""
        echo "LEGAL PAGES (5):"
        echo "  ✅ Privacy Policy"
        echo "  ✅ Terms & Conditions"
        echo "  ✅ GDPR Compliance"
        echo "  ✅ AI Compliance"
        echo "  ✅ Security"
        echo ""
        echo "SPECIAL PAGES (3):"
        echo "  ✅ Investors (with contact form)"
        echo "  ✅ AI Transformation Calculator (SEO URL)"
        echo "  ✅ QA Testing Calculator (SEO URL)"
        echo ""
        echo "TOTAL: 18 PAGES + ALL COMPONENTS"
        echo ""
        echo "🚀 Ready for:"
        echo "  • Production launch"
        echo "  • SEO indexing"
        echo "  • Customer acquisition"
        echo "  • Investor presentations"
        echo ""
        echo "🎯 Next: Handoff documentation will be created!"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
