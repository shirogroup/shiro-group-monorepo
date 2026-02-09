import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SHIRO Apps',
  description: 'Privacy Policy for SHIRO Apps and SHIRO Technologies services',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">Last updated: February 9, 2026</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
        <p>We collect information you provide when using our services.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Contact Us</h2>
        <p>For privacy inquiries: <a href="mailto:info@shiroapps.com" className="text-purple-600">info@shiroapps.com</a></p>
      </div>
    </div>
  );
}
