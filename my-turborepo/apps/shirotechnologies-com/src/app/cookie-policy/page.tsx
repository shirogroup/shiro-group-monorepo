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
              This Cookie Policy explains how SHIRO Technologies LLC ("we," "our," or "us") uses cookies and similar technologies on shirotechnologies.com. It should be read together with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. What Cookies Are</h2>
            <p className="text-gray-700 mb-6">
              Cookies are small text files that a website stores on your device when you visit. They are widely used to make websites work, remember preferences, and understand how a site is used. Similar technologies, such as pixels or local browser storage, can serve related purposes. This policy covers cookies and those similar technologies that this website actually uses.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Cookies</h2>
            
            <p className="text-gray-700 mb-4">
              Based on a review of this website&apos;s application code, the categories in use are:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Analytics cookies.</strong> We use Google Analytics to understand how visitors use the site, such as pages viewed and basic device or browser information.</li>
              <li><strong>Strictly necessary cookies.</strong> We did not find first-party cookies set by this website&apos;s own application code for login, shopping carts, or similar features. Your browser and our hosting provider may still use technical cookies that are needed to deliver or secure the site. We have not listed cookies we could not confirm in the code.</li>
              <li><strong>Marketing or advertising cookies.</strong> We did not find advertising pixels, ad tags, or marketing trackers in the application code, so this site does not currently use marketing cookies that we can identify.</li>
            </ul>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies and Technologies Used on This Website</h2>
            
            <p className="text-gray-700 mb-4">
              The following is what we found in the site&apos;s code. We have not listed tools that are not present.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Google Analytics</h3>
            <p className="text-gray-700 mb-4">
              This website loads Google Analytics (gtag.js) on every page from googletagmanager.com, using measurement ID G-1LL63ZEXDY. The script is included in the site layout and runs when the page loads. Google Analytics is provided by Google LLC and is used to measure traffic and usage, including pages visited and technical information such as browser type.
            </p>
            <p className="text-gray-700 mb-4">
              Google Analytics typically stores cookies on your device (commonly including a <code>_ga</code> cookie and related Google Analytics cookies) to distinguish visitors and session activity. Google may also process data in accordance with its own policies.
            </p>
            <p className="text-gray-700 mb-6">
              We did not find Vercel Analytics, Vercel Speed Insights, a Google Tag Manager container, chat widgets, or other advertising or analytics SDKs in the application code. A cookie-consent banner component exists in the source code and would store a preference in the browser&apos;s local storage under the key <code>cookie-consent</code>, but that banner is not currently included in the live site layout, so it is not shown and that preference is not being collected. The Google Analytics script is loaded without a consent prompt.
            </p>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. How to Manage or Disable Cookies</h2>
            
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings, including blocking or deleting cookies. Instructions vary by browser. Blocking cookies may affect how some websites function.
            </p>
            <p className="text-gray-700 mb-4">
              For Google Analytics, you can also use Google&apos;s opt-out browser add-on, available at{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-shiro-red hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
            </p>
            <p className="text-gray-700 mb-6">
              Because a cookie banner is not currently displayed on this site, browser controls and the Google opt-out add-on are the methods available today to limit these cookies.
            </p>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Third Parties</h2>
            
            <p className="text-gray-700 mb-4">
              Google LLC provides Google Analytics. Google may collect and process information as described in its own policies, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><a href="https://policies.google.com/privacy" className="text-shiro-red hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><a href="https://policies.google.com/technologies/cookies" className="text-shiro-red hover:underline" target="_blank" rel="noopener noreferrer">Google Cookies Policy</a></li>
            </ul>


            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Cookie Policy from time to time. We will post the updated policy on this page and change the effective date. Please review this page periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Cookie Policy, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              
              <p className="text-gray-700 mb-2"><strong>SHIRO Technologies LLC</strong></p>
              <p className="text-gray-700 mb-2">5080 Spectrum Drive Suite 575E</p>
              <p className="text-gray-700 mb-2">Addison, TX 75001</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@shirotechnologies.com" className="text-shiro-red hover:underline">privacy@shirotechnologies.com</a></p>
              <p className="text-gray-700">Phone: (972) 734-5623</p>

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
