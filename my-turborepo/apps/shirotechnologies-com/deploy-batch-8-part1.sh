#!/bin/bash

# SHIRO Technologies - Batch 8 Deployment Script
# Updates: Legal pages, company details, culture, careers, investor page, favicon, assessment service

echo "🚀 SHIRO Technologies - Batch 8 Deployment"
echo "==========================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""
echo "📝 Creating comprehensive updates..."

# UPDATE 1: Footer with Legal Links Column
cat > src/components/layout/Footer.tsx << 'FOOTER_EOF'
import Link from 'next/link'
import { SITE_CONFIG, TECH_PARTNERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-16 pb-32 md:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-shiro-red mb-4">
              SHIRO Technologies LLC
            </h4>
            <p className="text-sm text-gray-300 mb-2">Since 2001</p>
            <p className="text-sm text-gray-300 mb-6">
              The foundational services entity powering our global agentic AI SaaS portfolio.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mb-6">
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email for insights"
                  className="flex-1 px-4 py-2 rounded-l-md text-black text-sm"
                />
                <button className="bg-shiro-red hover:bg-shiro-red-dark px-6 py-2 rounded-r-md font-semibold text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <a href="https://instantresumeai.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  InstantResumeAI
                </a>
              </li>
              <li>
                <a href="https://resumeblast.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  ResumeBlast.ai
                </a>
              </li>
              <li>
                <a href="https://cloudsourcehrm.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  CloudSourceHRM
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai-transformation" className="text-gray-300 hover:text-white transition-colors">
                  AI Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  RPA & IPA
                </Link>
              </li>
              <li>
                <Link href="/global-presence" className="text-gray-300 hover:text-white transition-colors">
                  Global Delivery
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Company & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About SHIRO
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-300 hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/gdpr-compliance" className="text-gray-300 hover:text-white transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link href="/ai-compliance" className="text-gray-300 hover:text-white transition-colors">
                  AI Compliance
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-300 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Partners */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-shiro-red mb-4">Technology Partners</h4>
          <div className="flex flex-wrap gap-4">
            {TECH_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="bg-white/10 px-4 py-2 rounded-md text-sm text-gray-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar with addresses */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400 space-y-4">
          <div>
            <p className="mb-2">
              © 2025 SHIRO Technologies LLC. All rights reserved. Established 2001.
            </p>
          </div>
          
          {/* US HQ */}
          <div>
            <p className="font-semibold text-gray-300 mb-1">🇺🇸 US Headquarters:</p>
            <p>
              {SITE_CONFIG.address.physical.street}, {SITE_CONFIG.address.physical.city},{' '}
              {SITE_CONFIG.address.physical.state} {SITE_CONFIG.address.physical.zip}
            </p>
          </div>
          
          {/* Mailing Address */}
          <div>
            <p className="font-semibold text-gray-300 mb-1">Mailing Address:</p>
            <p>
              {SITE_CONFIG.address.mailing.street}, {SITE_CONFIG.address.mailing.city},{' '}
              {SITE_CONFIG.address.mailing.state} {SITE_CONFIG.address.mailing.zip}
            </p>
          </div>
          
          {/* Contact Numbers */}
          <div>
            <p>
              Products & Services: {SITE_CONFIG.contact.productsServicesPhone} | 
              Main: {SITE_CONFIG.contact.mainPhone} | 
              Email: {SITE_CONFIG.contact.email}
            </p>
          </div>
          
          {/* LinkedIn */}
          <div>
            <a 
              href={SITE_CONFIG.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn: {SITE_CONFIG.links.linkedinShort}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
FOOTER_EOF

echo "  ✅ Footer.tsx (Legal links column + updated company info)"

# UPDATE 2: Update constants.ts with new company info
cat > UPDATE_CONSTANTS_BATCH8.txt << 'CONST_NOTE'
MANUAL UPDATE REQUIRED - constants.ts:

Update SITE_CONFIG with new information:

export const SITE_CONFIG = {
  name: 'SHIRO Technologies',
  description: 'Agentic AI Transformation & Global Delivery - Since 2001',
  url: 'https://shirotechnologies.com',
  googleAnalyticsId: 'G-1LL63ZEXDY',
  
  contact: {
    email: 'Info@shirotechnologies.com',
    productsServicesPhone: '(800) 971-8013',
    mainPhone: '(972) 734-5623',
    supportEmail: 'Support@shirotechnologies.com',
    salesEmail: 'sales@shirotechnologies.com',
  },
  
  address: {
    physical: {
      street: '5080 Spectrum Drive Suite 575E',
      city: 'Addison',
      state: 'TX',
      zip: '75001',
    },
    mailing: {
      street: '4900 Airport Parkway, PO Box 989',
      city: 'Addison',
      state: 'TX',
      zip: '75001',
    },
    india: {
      company: 'SHIRO TECHNOLOGIES Pvt Ltd',
      street: '442, 6th Main Road, 2nd Floor',
      area: 'Vijayanagar 1st Stage',
      city: 'Mysuru',
      state: 'Karnataka',
      zip: '570017',
      country: 'India',
      phone: '(+91) 81233 71777',
      since: '2008',
    },
  },
  
  links: {
    linkedin: 'https://bit.ly/shirotechnologies',
    linkedinFull: 'https://www.linkedin.com/company/shiro-technologies-inc',
    linkedinShort: 'bit.ly/shirotechnologies',
    twitter: 'https://twitter.com/shirotech',
    facebook: 'https://facebook.com/shirotechnologies',
  },
  
  founded: '2001',
}
CONST_NOTE

echo "  ⚠️  UPDATE_CONSTANTS_BATCH8.txt created (manual update needed)"

# Continue in next part due to size...
echo ""
echo "Creating legal pages (this will take a moment)..."

# PRIVACY POLICY - Elaborate
cat > src/app/privacy-policy/page.tsx << 'PRIVACY_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - SHIRO Technologies',
  description: 'SHIRO Technologies Privacy Policy - How we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'CCPA', 'personal information'],
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-hero py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last Updated: December 13, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>1. Introduction</h2>
          <p>
            SHIRO Technologies LLC ("SHIRO," "we," "us," or "our") respects your privacy and is committed to 
            protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Company name and job title</li>
            <li>Billing and payment information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <ul>
            <li>Analytics providers (Google Analytics)</li>
            <li>Social media platforms (LinkedIn)</li>
            <li>Business partners and affiliates</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information for:</p>
          <ul>
            <li><strong>Service Delivery:</strong> Providing and improving our AI transformation services, SaaS products, and support</li>
            <li><strong>Communication:</strong> Responding to inquiries, sending updates, and marketing (with consent)</li>
            <li><strong>Analytics:</strong> Understanding user behavior to enhance website and service quality</li>
            <li><strong>Compliance:</strong> Meeting legal obligations and enforcing our terms</li>
            <li><strong>Security:</strong> Protecting against fraud, unauthorized access, and security threats</li>
          </ul>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>For EU/EEA residents, we process personal data based on:</p>
          <ul>
            <li><strong>Consent:</strong> You have given clear consent for specific purposes</li>
            <li><strong>Contract:</strong> Processing is necessary to fulfill our services agreement</li>
            <li><strong>Legal Obligation:</strong> Required to comply with laws and regulations</li>
            <li><strong>Legitimate Interests:</strong> Necessary for our business operations (unless overridden by your rights)</li>
          </ul>

          <h2>5. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors (hosting, analytics, payment processing)</li>
            <li><strong>Business Partners:</strong> With your consent, for joint offerings</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
          </ul>
          <p><em>We do NOT sell your personal data to third parties.</em></p>

          <h2>6. International Data Transfers</h2>
          <p>
            As a global company with operations in the USA, Canada, and India, we may transfer your data 
            internationally. We ensure appropriate safeguards through:
          </p>
          <ul>
            <li>Standard Contractual Clauses (EU Commission approved)</li>
            <li>Data Processing Agreements with all vendors</li>
            <li>Compliance with applicable data protection laws</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>We retain personal data for:</p>
          <ul>
            <li><strong>Active Customers:</strong> Duration of business relationship + 7 years (legal requirements)</li>
            <li><strong>Marketing Contacts:</strong> Until consent is withdrawn or 3 years of inactivity</li>
            <li><strong>Website Visitors:</strong> Analytics data retained for 26 months (Google Analytics default)</li>
          </ul>

          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul>
            <li><strong>Access:</strong> Request copies of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
            <li><strong>Erasure:</strong> Request deletion ("right to be forgotten")</li>
            <li><strong>Restriction:</strong> Limit how we use your data</li>
            <li><strong>Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Object:</strong> Opt-out of certain processing activities</li>
            <li><strong>Withdraw Consent:</strong> At any time, without affecting prior processing</li>
          </ul>
          <p>To exercise your rights, contact us at: <a href="mailto:Info@shirotechnologies.com">Info@shirotechnologies.com</a></p>

          <h2>9. Cookies and Tracking Technologies</h2>
          <p>We use cookies for:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Understanding site usage (Google Analytics)</li>
            <li><strong>Marketing Cookies:</strong> Delivering relevant advertisements (with consent)</li>
          </ul>
          <p>Manage your cookie preferences via our Cookie Consent banner or browser settings.</p>

          <h2>10. Security Measures</h2>
          <p>We implement industry-standard security measures:</p>
          <ul>
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure cloud infrastructure (AWS/Azure/GCP)</li>
            <li>Access controls and authentication</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Employee training on data protection</li>
          </ul>
          <p><em>Note: No method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</em></p>

          <h2>11. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal data 
            from children. If we become aware of such collection, we will delete the information immediately.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated 
            "Last Updated" date. For material changes, we will provide prominent notice or obtain consent where required.
          </p>

          <h2>13. Contact Us</h2>
          <p>For privacy-related questions or concerns:</p>
          <p>
            <strong>SHIRO Technologies LLC</strong><br />
            5080 Spectrum Drive Suite 575E<br />
            Addison, TX 75001, USA<br />
            Email: <a href="mailto:Info@shirotechnologies.com">Info@shirotechnologies.com</a><br />
            Phone: (800) 971-8013
          </p>

          <h2>14. Supervisory Authority</h2>
          <p>
            EU/EEA residents have the right to lodge a complaint with their local data protection authority 
            if you believe we have not addressed your concerns adequately.
          </p>
        </div>
      </section>
    </>
  )
}
PRIVACY_EOF

echo "  ✅ privacy-policy/page.tsx (Comprehensive privacy policy)"

# Due to script size limits, I'll create a note for remaining pages
cat > BATCH_8_REMAINING_PAGES.txt << 'REMAINING'
BATCH 8 - REMAINING PAGES TO CREATE:

Create these pages in separate script execution or manually:

1. src/app/terms-and-conditions/page.tsx - Terms of Service
2. src/app/gdpr-compliance/page.tsx - GDPR Compliance details
3. src/app/ai-compliance/page.tsx - AI Ethics & Compliance
4. src/app/security/page.tsx - Security measures
5. src/app/careers/page.tsx - Careers with benefits
6. src/app/investors/page.tsx - Investor relations
7. Update src/app/about/page.tsx - Add company culture
8. Update favicon in layout.tsx
9. Create AI Assessment Service page/section
10. Update calculators with detailed explanations

All pages need:
- SEO metadata (title, description, keywords)
- Google Analytics (already in layout.tsx)
- Proper structure and content

See full content in documentation.
REMAINING

echo "  ⚠️  BATCH_8_REMAINING_PAGES.txt created - Too many files for single script"
echo ""
echo "✅ Batch 8 Part 1 created (Footer, Privacy Policy, notes)"
echo ""
echo "⚠️  IMPORTANT: This batch is too large for one script."
echo "   Run this script first, then I'll create Batch 8 Part 2"
echo ""

# Build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push Part 1 to GitHub? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "Batch 8 Part 1: Footer with legal links, Privacy Policy, company info updates"
        git push origin main
        
        echo ""
        echo "🎉 Part 1 Deployed!"
        echo ""
        echo "📋 Next: Request Batch 8 Part 2 for:"
        echo "  • Terms & Conditions"
        echo "  • GDPR Compliance"
        echo "  • AI Compliance"
        echo "  • Security"
        echo "  • Careers page"
        echo "  • Investors page"
        echo "  • Updated About page"
        echo "  • Favicon"
        echo "  • Assessment service"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
