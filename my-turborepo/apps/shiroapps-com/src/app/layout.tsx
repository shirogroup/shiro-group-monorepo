import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHIRO Apps - AI-Powered Consumer Tools & Custom AI Development Services",
  description: "AI-powered resume tools, HR automation, and job application software for consumers. Custom AI software development and automation services for businesses. Offshore AI development with enterprise-grade quality.",
  keywords: "AI resume builder, HR automation software, job application automation, custom AI development, outsource AI development, AI software development services, offshore AI development, agentic AI development, machine learning development, AI integration services",
  openGraph: {
    title: "SHIRO Apps - AI Consumer Tools & Custom AI Development",
    description: "AI tools for job seekers and custom AI development services for businesses",
    url: "https://www.shiroapps.com",
    siteName: "SHIRO Apps",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6L7ZS22D89"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6L7ZS22D89');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
