import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | SHIRO Technologies',
  description: 'How SHIRO Technologies uses cookies and similar technologies on this website.',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-300">Effective date: November 25, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            <p className="text-sm text-gray-500 mb-8">
              This Cookie Policy is a draft pending legal review.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              This Cookie Policy explains how SHIRO Technologies Private Limited / Les Technologies SHIRO ("we," "our," or "us"), the Canada-registered operating entity of SHIRO Group, uses cookies and similar technologies on shirotechnologies.ca. It should be read together with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. What Cookies Are</h2>
            <p className="text-gray-700 mb-6">
              Cookies are small text files that a website stores on your device when you visit. They are widely used to make websites work, remember preferences, and understand how a site is used. Similar technologies, such as pixels or local browser storage, can serve related purposes. This policy covers cookies and those similar technologies that this website actually uses.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Cookies</h2>
            
            <p className="text-gray-700 mb-4">
              Based on a review of this website&apos;s application code:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Analytics cookies.</strong> This website&apos;s layout does not currently load Google Analytics or any other analytics script, so analytics cookies are not set by this site&apos;s application code.</li>
              <li><strong>Strictly necessary cookies.</strong> We did not find first-party cookies set by this website&apos;s own application code. Your browser and our hosting provider may still use technical cookies that are needed to deliver or secure the site. We have not listed cookies we could not confirm in the code.</li>
              <li><strong>Marketing or advertising cookies.</strong> We did not find advertising pixels, ad tags, or marketing trackers in the application code.</li>
            </ul>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies and Technologies Used on This Website</h2>
            
            <p className="text-gray-700 mb-4">
              The following is what we found in the site&apos;s code. We have not listed tools that are not present or not active.
            </p>
            <p className="text-gray-700 mb-4">
              We did not find Google Analytics (or any other analytics tag), Vercel Analytics, Vercel Speed Insights, a Google Tag Manager container, chat widgets, or advertising trackers included in this site&apos;s live layout. The application code also does not currently write cookies or local storage values on visitors&apos; devices.
            </p>
            <p className="text-gray-700 mb-6">
              The source code contains unused Google Analytics helper functions (configured with measurement ID G-1LL63ZEXDY) and an unused cookie-consent banner component that would store a preference in local storage under the key <code>cookie-consent</code>. Neither is included in the live site layout, so they are not active and do not currently set cookies. If those features are enabled later, this policy will be updated.
            </p>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. How to Manage or Disable Cookies</h2>
            
            <p className="text-gray-700 mb-6">
              You can control cookies through your browser settings, including blocking or deleting cookies. Instructions vary by browser. Blocking cookies may affect how some websites function. If we later enable analytics or a cookie banner on this site, we will update this policy and describe any additional controls.
            </p>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Third Parties</h2>
            
            <p className="text-gray-700 mb-6">
              We did not find third-party analytics, advertising, or chat tools loaded by this website&apos;s application code. If a third party is added later, we will update this policy and identify that party.
            </p>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Cookie Policy from time to time. We will post the updated policy on this page and change the effective date. Please review this page periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Cookie Policy, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              
              <p className="text-gray-700 mb-2"><strong>SHIRO Technologies Private Limited / Les Technologies SHIRO</strong></p>
              <p className="text-gray-700 mb-2">Canada-registered operating entity of SHIRO Group</p>
              <p className="text-gray-700">Email: <a href="mailto:sales@shirotechnologies.com" className="text-shiro-red hover:underline">sales@shirotechnologies.com</a></p>

            </div>
            <p className="text-gray-700 mt-6 mb-6">
              You may also review our <a href="/privacy-policy" className="text-shiro-red hover:underline">Privacy Policy</a>.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}
