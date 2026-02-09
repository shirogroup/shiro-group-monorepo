import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SHIRO Apps',
  description: 'Terms and Conditions for SHIRO Apps services',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">Last updated: February 9, 2026</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing SHIRO Apps services, you agree to these Terms.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact</h2>
        <p>Questions: <a href="mailto:info@shiroapps.com" className="text-purple-600">info@shiroapps.com</a></p>
      </div>
    </div>
  );
}
