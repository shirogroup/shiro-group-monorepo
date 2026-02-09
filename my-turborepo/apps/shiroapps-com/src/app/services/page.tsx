import React from 'react';
import Link from 'next/link';
import { CheckCircle, Code, Sparkles, Rocket, Shield, Users } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import B2BFooterCTA from '@/components/B2BFooterCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom AI Software Development Services | Outsource AI Development',
  description: 'Custom AI software development, offshore AI development, agentic AI services. 50-70% cost savings, 24 years experience, enterprise-grade quality.',
  keywords: 'custom AI development, outsource AI development, offshore AI services, AI software development, agentic AI, machine learning development, AI integration services',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "AI Assessment & Strategy",
      description: "AI readiness assessment, technical feasibility, ROI projections, product roadmap",
      features: ["AI opportunity analysis", "Technical feasibility", "ROI projections", "Implementation roadmap"],
      pricing: "From $2,500"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Custom AI Development",
      description: "Agentic AI, machine learning models, NLP applications, full-stack development",
      features: ["Agentic AI systems", "Custom ML models", "API integrations", "Next.js development"],
      pricing: "From $15,000"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "MVP Development",
      description: "Launch AI products in 4-8 weeks with functional features and payment integration",
      features: ["4-8 week delivery", "Stripe payments", "User dashboards", "Mobile-responsive"],
      pricing: "$8,000 - $25,000"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Team Augmentation",
      description: "Offshore AI developers at 50-70% cost savings with enterprise quality",
      features: ["Senior AI engineers", "Full-stack developers", "24/7 support", "Flexible engagement"],
      pricing: "$3,000-$5,000/month per dev"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "AI Integration",
      description: "Integrate AI into existing systems, migrate legacy apps, optimize performance",
      features: ["API integration", "Legacy modernization", "Cloud infrastructure", "Performance tuning"],
      pricing: "From $10,000"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Support & Maintenance",
      description: "24/7 monitoring, bug fixes, feature enhancements, infrastructure optimization",
      features: ["24/7 monitoring", "Security patches", "Feature enhancements", "Performance reports"],
      pricing: "$1,000-$5,000/month"
    }
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Custom AI Software Development</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Enterprise-grade AI development with offshore efficiency. 50-70% cost savings, 24 years experience.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <B2BFooterCTA />
    </>
  );
}
